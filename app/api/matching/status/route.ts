import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { supabase } from '@/app/lib/supabase';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: user } = await supabase
      .from('users')
      .select('daily_likes, daily_messages, is_premium')
      .eq('email', session.user.email)
      .single();

    if (!user) {
      return NextResponse.json({
        total: 3,
        remaining: 3,
        daily_likes: 3,
        daily_messages: 10,
        is_premium: false
      });
    }

    return NextResponse.json({
      total: 3,
      remaining: user.daily_likes || 3,
      daily_likes: user.daily_likes || 3,
      daily_messages: user.daily_messages || 10,
      is_premium: user.is_premium || false
    });
  } catch (error) {
    return NextResponse.json({
      total: 3,
      remaining: 3,
      daily_likes: 3,
      daily_messages: 10,
      is_premium: false
    });
  }
}
