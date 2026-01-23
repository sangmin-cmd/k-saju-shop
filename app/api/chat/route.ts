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
      .select('id')
      .eq('email', session.user.email)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const { data: matches } = await supabase
      .from('matches')
      .select(`
        id,
        user1_id,
        user2_id,
        compatibility_total,
        created_at
      `)
      .or(`user1_id.eq.${user.id},user2_id.eq.${user.id}`)
      .order('created_at', { ascending: false });

    if (!matches || matches.length === 0) {
      return NextResponse.json({ matches: [] });
    }

    const partnerIds = matches.map(m => m.user1_id === user.id ? m.user2_id : m.user1_id);
    
    const { data: partners } = await supabase
      .from('users')
      .select('id, nickname, photos, saju_day_master')
      .in('id', partnerIds);

    const partnerMap = new Map(partners?.map(p => [p.id, p]) || []);

    const result = matches.map(match => {
      const partnerId = match.user1_id === user.id ? match.user2_id : match.user1_id;
      return {
        id: match.id,
        partner: partnerMap.get(partnerId) || { nickname: '알 수 없음' },
        compatibility_total: match.compatibility_total,
        created_at: match.created_at,
        unread_count: 0,
      };
    });

    return NextResponse.json({ matches: result });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
