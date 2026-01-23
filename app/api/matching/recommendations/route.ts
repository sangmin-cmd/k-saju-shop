import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { supabase } from '@/app/lib/supabase';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: currentUser } = await supabase
      .from('users')
      .select('*')
      .eq('email', session.user.email)
      .single();

    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .neq('email', session.user.email)
      .limit(10);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const recommendations = users?.map(user => {
      const sajuScore = calculateSajuCompatibility(currentUser?.saju_day_master, user.saju_day_master);
      const mbtiScore = calculateMbtiCompatibility(currentUser?.mbti, user.mbti);
      const totalScore = Math.round(sajuScore * 0.5 + mbtiScore * 0.5);

      return {
        id: user.id,
        nickname: user.nickname,
        gender: user.gender,
        birth_date: user.birth_date,
        mbti: user.mbti,
        saju_day_master: user.saju_day_master,
        intro: user.intro,
        location: user.location,
        photos: user.photos || [],
        compatibility_total: totalScore,
        compatibility_saju: sajuScore,
        compatibility_mbti: mbtiScore,
      };
    }) || [];

    return NextResponse.json({ recommendations });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function calculateSajuCompatibility(master1?: string, master2?: string): number {
  if (!master1 || !master2) return 70;
  const compatibility: Record<string, Record<string, number>> = {
    '목': { '목': 70, '화': 90, '토': 60, '금': 50, '수': 85 },
    '화': { '목': 90, '화': 70, '토': 85, '금': 55, '수': 50 },
    '토': { '목': 60, '화': 85, '토': 70, '금': 90, '수': 55 },
    '금': { '목': 50, '화': 55, '토': 90, '금': 70, '수': 85 },
    '수': { '목': 85, '화': 50, '토': 55, '금': 85, '수': 70 },
  };
  return compatibility[master1]?.[master2] || 70;
}

function calculateMbtiCompatibility(mbti1?: string, mbti2?: string): number {
  if (!mbti1 || !mbti2) return 70;
  const perfect = ['INFP-ENFJ', 'ENFP-INFJ', 'INTP-ENTJ', 'ENTP-INTJ'];
  const great = ['ISFJ-ESFP', 'ISTJ-ESTP', 'ISFP-ESFJ', 'ISTP-ESTJ'];
  const pair = `${mbti1}-${mbti2}`;
  const reversePair = `${mbti2}-${mbti1}`;
  if (perfect.includes(pair) || perfect.includes(reversePair)) return 95;
  if (great.includes(pair) || great.includes(reversePair)) return 85;
  if (mbti1 === mbti2) return 75;
  const eiDiff = mbti1[0] !== mbti2[0] ? 5 : 0;
  return 70 + eiDiff;
}
