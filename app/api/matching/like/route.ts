import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { supabase } from '@/app/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: currentUser } = await supabase
      .from('users')
      .select('id, daily_likes')
      .eq('email', session.user.email)
      .single();

    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (currentUser.daily_likes <= 0) {
      return NextResponse.json({ error: 'No likes remaining' }, { status: 400 });
    }

    const body = await request.json();
    const { toUserId } = body;

    if (!toUserId) {
      return NextResponse.json({ error: 'toUserId required' }, { status: 400 });
    }

    // 좋아요 저장
    const { error: likeError } = await supabase
      .from('likes')
      .insert({
        from_user_id: currentUser.id,
        to_user_id: toUserId,
        created_at: new Date().toISOString()
      });

    if (likeError && !likeError.message.includes('duplicate')) {
      return NextResponse.json({ error: likeError.message }, { status: 400 });
    }

    // 일일 좋아요 차감
    const newLikes = currentUser.daily_likes - 1;
    await supabase
      .from('users')
      .update({ daily_likes: newLikes })
      .eq('id', currentUser.id);

    // 상대방도 나를 좋아했는지 확인 (상호 매칭)
    const { data: mutualLike } = await supabase
      .from('likes')
      .select('id')
      .eq('from_user_id', toUserId)
      .eq('to_user_id', currentUser.id)
      .single();

    if (mutualLike) {
      // 매칭 성립!
      const { data: match, error: matchError } = await supabase
        .from('matches')
        .insert({
          user1_id: currentUser.id,
          user2_id: toUserId,
          compatibility_total: 70,
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (matchError && !matchError.message.includes('duplicate')) {
        console.error('Match error:', matchError);
      }

      return NextResponse.json({
        success: true,
        matched: true,
        match_id: match?.id,
        remaining_likes: newLikes
      });
    }

    return NextResponse.json({
      success: true,
      matched: false,
      remaining_likes: newLikes
    });
  } catch (error) {
    console.error('Like error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
