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
      const synergyScore = Math.round((sajuScore + mbtiScore) / 2);
      const totalScore = Math.round(sajuScore * 0.4 + mbtiScore * 0.3 + synergyScore * 0.3);

      // 나이 계산
      const birthYear = user.birth_date ? new Date(user.birth_date).getFullYear() : 1990;
      const age = new Date().getFullYear() - birthYear;

      return {
        id: user.id,
        nickname: user.nickname,
        age: age,
        gender: user.gender,
        location: user.location || '서울',
        photos: user.photos || [],
        intro: user.intro || '',
        mbti: user.mbti || 'MBTI',
        love_type: getLoveType(user.saju_day_master),
        compatibility: {
          total: totalScore,
          saju: sajuScore,
          mbti: mbtiScore,
          synergy: synergyScore
        },
        chemistry_summary: getChemistrySummary(currentUser?.saju_day_master, user.saju_day_master, totalScore)
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

function getLoveType(dayMaster?: string): string {
  const types: Record<string, string> = {
    '목': '성장하는 사랑',
    '화': '열정적인 사랑',
    '토': '안정적인 사랑',
    '금': '신뢰의 사랑',
    '수': '깊은 교감의 사랑'
  };
  return types[dayMaster || ''] || '진실한 사랑';
}

function getChemistrySummary(master1?: string, master2?: string, score?: number): string {
  if (score && score >= 85) {
    return '서로의 부족한 부분을 채워주는 환상의 궁합이에요! 만나면 시간 가는 줄 모를 거예요.';
  } else if (score && score >= 75) {
    return '서로 다른 매력이 끌리는 좋은 궁합이에요. 대화가 잘 통할 거예요!';
  } else if (score && score >= 65) {
    return '노력하면 좋은 관계를 만들 수 있어요. 서로를 이해하는 시간이 필요해요.';
  }
  return '새로운 시각을 배울 수 있는 인연이에요. 열린 마음으로 만나보세요!';
}
