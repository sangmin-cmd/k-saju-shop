// 金 오행: 庚金, 辛金 × 16 MBTI = 32개 조합

import { CombinationText } from './types';

export const metalCombinations: CombinationText[] = [
  // ========================================
  // 庚金 (경금) × 16 MBTI
  // ========================================

  {
    dayMaster: '庚', mbti: 'ISTJ',
    harmony: { score: 85, summary: '철의 원칙', description: '庚金의 강직함과 ISTJ의 체계성이 맞아요. 원칙을 철저히 지키고 책임감이 강해요.' },
    synergies: [
      { title: '철저한 원칙', description: '약속과 규칙을 반드시 지켜요.' },
      { title: '신뢰받는 실행력', description: '말한 건 반드시 해내요.' }
    ],
    conflicts: [
      { title: '융통성 부족', description: '둘 다 안 꺾여요.', solution: '가끔 유연하게.' },
      { title: '감정 무시', description: '논리만 앞세워요.', solution: '사람 마음도 챙기세요.' }
    ],
    loveCombo: { style: '믿음직하고 책임감 있는 사랑', bestMatch: '火 기운 + 감정형(F)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '법조계, 군경, 금융, 관리직', strength: '철저한 관리자', weakness: '창의적 업무 부담' },
    coreAdvice: '강함에 유연함을 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ISFJ',
    harmony: { score: 68, summary: '지키는 칼날', description: '庚金의 강함과 ISFJ의 돌봄이 만났어요. 소중한 것을 강하게 지켜요.' },
    synergies: [
      { title: '보호 본능', description: '소중한 것을 끝까지 지켜요.' },
      { title: '신뢰받는 보호자', description: '주변에서 믿고 의지해요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: '庚金은 직접적, ISFJ는 부드러워요.', solution: '서로 방식 존중.' },
      { title: '강도 조절', description: '庚金의 강함이 ISFJ에게 부담.', solution: '상황에 맞게 조절하세요.' }
    ],
    loveCombo: { style: '보호해주는 든든한 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '부드러움도 필요' },
    careerCombo: { idealPath: '경호, 의료, 관리, 복지', strength: '지키는 전문가', weakness: '감정적 상황 부담' },
    coreAdvice: '강함과 부드러움의 균형을 찾으세요.'
  },

  {
    dayMaster: '庚', mbti: 'INFJ',
    harmony: { score: 60, summary: '날카로운 통찰', description: '庚金의 결단력과 INFJ의 통찰이 만났어요. 본질을 꿰뚫어보는 힘이 있어요.' },
    synergies: [
      { title: '예리한 판단', description: '본질을 꿰뚫어요.' },
      { title: '정의로운 비전', description: '옳은 것을 향해 가요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: '庚金은 직접적, INFJ는 깊어요.', solution: '서로 보완.' },
      { title: '감정 vs 논리', description: '庚金은 단호하게, INFJ는 감정적으로.', solution: '균형을 찾으세요.' }
    ],
    loveCombo: { style: '깊고 강한 사랑', bestMatch: '火 기운 + 감각형(S)', warning: '방식 존중' },
    careerCombo: { idealPath: '법조계, 상담, 분석, 연구', strength: '예리한 분석가', weakness: '감정적 상황 부담' },
    coreAdvice: '날카로움에 깊이를 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'INTJ',
    harmony: { score: 82, summary: '전략적 칼날', description: '庚金의 결단력과 INTJ의 전략이 맞아요. 효율적으로 목표를 달성해요.' },
    synergies: [
      { title: '냉철한 판단', description: '효율적으로 목표 달성.' },
      { title: '독립적 실행', description: '남에게 의존하지 않아요.' }
    ],
    conflicts: [
      { title: '지나친 냉정', description: '둘 다 차가워요.', solution: '감정도 챙기세요.' },
      { title: '고집 충돌', description: '둘 다 자기 방식을 고수해요.', solution: '양보도 전략이에요.' }
    ],
    loveCombo: { style: '목표 지향적 파트너십', bestMatch: '火 기운 + 감정형(F)', warning: '따뜻함도 필요' },
    careerCombo: { idealPath: '투자, 법조계, 경영, 컨설팅', strength: '냉철한 전략가', weakness: '인간관계 부담' },
    coreAdvice: '전략에 따뜻함을 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ISTP',
    harmony: { score: 78, summary: '실용적 칼날', description: '庚金의 결단력과 ISTP의 실용성이 맞아요. 문제를 바로 해결해요.' },
    synergies: [
      { title: '즉각적 해결', description: '문제를 바로 처리.' },
      { title: '실용적 강함', description: '쓸데없는 것 없이 효율적이에요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' },
      { title: '감정 무시', description: '둘 다 논리적이에요.', solution: '가끔은 감정도 고려하세요.' }
    ],
    loveCombo: { style: '쿨하고 자유로운 연애', bestMatch: '火 기운 + 감정형(F)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '기술, 스포츠, 군경, 엔지니어링', strength: '실용적 해결사', weakness: '팀 협업 부담' },
    coreAdvice: '실용성에 소통을 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ISFP',
    harmony: { score: 58, summary: '강함과 부드러움', description: '庚金의 강함과 ISFP의 감성이 만났어요. 서로 많이 달라요.' },
    synergies: [
      { title: '보호하는 감성', description: '소중한 것을 강하게 지켜요.' },
      { title: '섬세한 강인함', description: '강하면서도 섬세해요.' }
    ],
    conflicts: [
      { title: '표현 차이', description: '庚金은 직접적, ISFP는 간접적.', solution: '방식 이해.' },
      { title: '강도 차이', description: '庚金의 강함이 ISFP에게 부담.', solution: '庚金이 조절하세요.' }
    ],
    loveCombo: { style: '지켜주는 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '부드러움도 표현' },
    careerCombo: { idealPath: '공예, 보안, 예술, 기술', strength: '섬세한 강인함', weakness: '감정적 상황 부담' },
    coreAdvice: '강함과 감성의 조화를 찾으세요.'
  },

  {
    dayMaster: '庚', mbti: 'INFP',
    harmony: { score: 52, summary: '칼날과 꽃', description: '庚金의 강함과 INFP의 감성이 만났어요. 매우 달라서 조율 필요해요.' },
    synergies: [
      { title: '가치 수호', description: '소중한 가치를 강하게 지켜요.' },
      { title: '정의로운 이상', description: '옳은 것을 향해 가요.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: '庚金은 직접적, INFP는 간접적.', solution: '서로 이해.' },
      { title: '감정 vs 논리', description: '庚金은 논리, INFP는 감정.', solution: '둘 다 필요해요.' }
    ],
    loveCombo: { style: '지키고 싶은 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '부드러움 필요' },
    careerCombo: { idealPath: '사회정의, 예술, 상담, 비영리', strength: '가치를 지키는 힘', weakness: '감정 조절 부담' },
    coreAdvice: '강함으로 가치를 지키세요.'
  },

  {
    dayMaster: '庚', mbti: 'INTP',
    harmony: { score: 68, summary: '분석하는 칼날', description: '庚金의 결단력과 INTP의 분석력이 만났어요. 분석하고 결정해요.' },
    synergies: [
      { title: '날카로운 분석', description: '본질을 파악하고 결정.' },
      { title: '논리적 판단', description: '감정에 흔들리지 않아요.' }
    ],
    conflicts: [
      { title: '실행 시점', description: '庚金은 바로, INTP는 더 생각.', solution: '균형을 찾으세요.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '지적이고 쿨한 연애', bestMatch: '火 기운 + 감정형(F)', warning: '감정도 중요' },
    careerCombo: { idealPath: '분석, 법조계, 연구, 기술', strength: '날카로운 분석가', weakness: '대인관계 부담' },
    coreAdvice: '분석과 결단의 균형을 찾으세요.'
  },

  {
    dayMaster: '庚', mbti: 'ESTP',
    harmony: { score: 85, summary: '행동하는 칼날', description: '庚金의 결단력과 ESTP의 행동력이 맞아요. 결정하면 바로 움직여요.' },
    synergies: [
      { title: '즉각적 돌파', description: '결정하면 바로 행동.' },
      { title: '위기 대응력', description: '어떤 상황에서도 돌파해요.' }
    ],
    conflicts: [
      { title: '깊이 부족', description: '너무 빨리 가요.', solution: '가끔 멈춰 생각.' },
      { title: '충돌 가능성', description: '둘 다 강해서 부딪혀요.', solution: '양보도 전략이에요.' }
    ],
    loveCombo: { style: '짜릿하고 강렬한 연애', bestMatch: '水 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '스포츠, 영업, 군경, 창업', strength: '최고의 행동파', weakness: '장기 계획 부담' },
    coreAdvice: '행동에 깊이를 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ESFP',
    harmony: { score: 65, summary: '빛나는 칼날', description: '庚金의 강함과 ESFP의 밝음이 만났어요. 강하면서 밝아요.' },
    synergies: [
      { title: '카리스마', description: '강하면서 밝아요.' },
      { title: '주목받는 힘', description: '자연스럽게 눈에 띄어요.' }
    ],
    conflicts: [
      { title: '깊이 차이', description: '庚金은 깊고 ESFP는 가벼워요.', solution: '균형을 찾으세요.' },
      { title: '방식 차이', description: '庚金은 직접적, ESFP는 유쾌하게.', solution: '서로 보완하세요.' }
    ],
    loveCombo: { style: '재미있고 강렬한 연애', bestMatch: '水 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '엔터테인먼트, 스포츠, 영업, 마케팅', strength: '카리스마 있는 스타', weakness: '꾸준함 부담' },
    coreAdvice: '강함에 즐거움을 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ENFP',
    harmony: { score: 60, summary: '열정의 칼날', description: '庚金의 결단력과 ENFP의 열정이 만났어요. 좋아하는 일에 확실히 달려요.' },
    synergies: [
      { title: '확실한 열정', description: '좋아하는 일에 확실히 달려요.' },
      { title: '추진력 있는 아이디어', description: '아이디어를 실현해요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: '庚金은 직선, ENFP는 곡선.', solution: '서로 보완.' },
      { title: '집중 vs 분산', description: '庚金은 하나에, ENFP는 여러 개에.', solution: '핵심에 집중하세요.' }
    ],
    loveCombo: { style: '열정적이고 강렬한 연애', bestMatch: '水 기운 + 판단형(J)', warning: '균형 필요' },
    careerCombo: { idealPath: '마케팅, 영업, 스타트업, 창업', strength: '추진력 있는 열정가', weakness: '꾸준함 부담' },
    coreAdvice: '결단력과 열정의 시너지를 만드세요.'
  },

  {
    dayMaster: '庚', mbti: 'ENTP',
    harmony: { score: 70, summary: '도전하는 칼날', description: '庚金의 결단력과 ENTP의 도전이 만났어요. 과감하게 도전해요.' },
    synergies: [
      { title: '과감한 도전', description: '새로운 것에 과감히 뛰어들어요.' },
      { title: '논리적 돌파', description: '논리로 설득하고 돌파해요.' }
    ],
    conflicts: [
      { title: '충돌 가능', description: '둘 다 양보 안 해요.', solution: '논쟁 조절.' },
      { title: '마무리 부족', description: '새 것에 끌려서 마무리 못해요.', solution: '끝내고 시작하세요.' }
    ],
    loveCombo: { style: '도전적이고 강렬한 연애', bestMatch: '水 기운 + 감정형(F)', warning: '논쟁 조절 필요' },
    careerCombo: { idealPath: '창업, 법조계, 투자, 컨설팅', strength: '과감한 혁신가', weakness: '마무리 부담' },
    coreAdvice: '도전에 완성을 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ESTJ',
    harmony: { score: 88, summary: '철의 관리자', description: '庚金의 결단력과 ESTJ의 관리력이 완벽히 맞아요. 철저하게 관리해요.' },
    synergies: [
      { title: '철저한 관리', description: '원칙대로 완벽하게.' },
      { title: '신뢰받는 리더', description: '책임감으로 신뢰를 얻어요.' }
    ],
    conflicts: [
      { title: '이중 강함', description: '둘 다 너무 세요.', solution: '유연함을 더하세요.' },
      { title: '감정 무시', description: '효율만 봐요.', solution: '팀원 감정도 챙기세요.' }
    ],
    loveCombo: { style: '책임감 있고 든든한 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: '경영, 군경, 법조계, 금융', strength: '최고의 관리자', weakness: '유연성 부족' },
    coreAdvice: '강함에 유연함을 더하세요.'
  },

  {
    dayMaster: '庚', mbti: 'ESFJ',
    harmony: { score: 65, summary: '따뜻한 칼날', description: '庚金의 강함과 ESFJ의 따뜻함이 만났어요. 지키면서 돌봐요.' },
    synergies: [
      { title: '지키는 따뜻함', description: '소중한 사람을 강하게 지켜요.' },
      { title: '신뢰받는 보호자', description: '주변에서 믿고 의지해요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: '庚金은 직접적, ESFJ는 부드러워요.', solution: '균형을 찾으세요.' },
      { title: '강도 조절', description: '庚金의 강함이 부담될 수 있어요.', solution: '상황에 맞게 조절하세요.' }
    ],
    loveCombo: { style: '지켜주는 따뜻한 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '균형 필요' },
    careerCombo: { idealPath: '경호, HR, 서비스업, 관리', strength: '따뜻한 보호자', weakness: '감정 조절 부담' },
    coreAdvice: '강함과 따뜻함의 조화를 찾으세요.'
  },

  {
    dayMaster: '庚', mbti: 'ENFJ',
    harmony: { score: 62, summary: '정의의 리더', description: '庚金의 정의감과 ENFJ의 리더십이 만났어요. 옳은 방향으로 이끌어요.' },
    synergies: [
      { title: '정의로운 영향력', description: '옳은 방향으로 이끌어요.' },
      { title: '카리스마 리더십', description: '강하면서 영감을 줘요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: '庚金은 직접적, ENFJ는 영감형.', solution: '역할 나누세요.' },
      { title: '주도권', description: '둘 다 이끌려고 해요.', solution: '영역을 나누세요.' }
    ],
    loveCombo: { style: '정의롭고 열정적인 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '균형 필요' },
    careerCombo: { idealPath: '사회정의, 교육, 경영, 비영리', strength: '정의로운 리더', weakness: '유연성 부담' },
    coreAdvice: '정의와 영감의 균형을 찾으세요.'
  },

  {
    dayMaster: '庚', mbti: 'ENTJ',
    harmony: { score: 90, summary: '최강의 칼날', description: '庚金의 결단력과 ENTJ의 야망이 완벽히 맞아요. 목표를 향해 돌진해요.' },
    synergies: [
      { title: '압도적 추진력', description: '목표를 향해 돌진.' },
      { title: '카리스마 리더십', description: '사람들이 자연스럽게 따라와요.' }
    ],
    conflicts: [
      { title: '지나친 강함', description: '둘 다 너무 세요.', solution: '균형을 찾으세요.' },
      { title: '감정 무시', description: '효율만 봐요.', solution: '팀원 감정도 챙기세요.' }
    ],
    loveCombo: { style: '파워 커플', bestMatch: '水 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: 'CEO, 군 장성, 투자가, 정치인', strength: '최고의 리더', weakness: '인간관계 부담' },
    coreAdvice: '강함에 따뜻함을 더하세요.'
  },

  // ========================================
  // 辛金 (신금) × 16 MBTI
  // ========================================

  {
    dayMaster: '辛', mbti: 'ISTJ',
    harmony: { score: 75, summary: '정교한 보석', description: '辛金의 섬세함과 ISTJ의 체계성이 맞아요. 디테일까지 완벽하게 챙겨요.' },
    synergies: [
      { title: '꼼꼼한 완성', description: '디테일까지 챙겨요.' },
      { title: '신뢰받는 전문가', description: '정확함으로 신뢰를 얻어요.' }
    ],
    conflicts: [
      { title: '융통성 부족', description: '둘 다 규칙적.', solution: '유연함 더하세요.' },
      { title: '변화 거부', description: '익숙한 것만 고집해요.', solution: '새로운 시도도 해보세요.' }
    ],
    loveCombo: { style: '세련되고 안정적인 사랑', bestMatch: '水 기운 + 외향형(E)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '품질관리, 감정, 분석, 회계', strength: '최고의 디테일', weakness: '창의적 업무 부담' },
    coreAdvice: '정교함에 유연함을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ISFJ',
    harmony: { score: 72, summary: '세심한 보석', description: '辛金의 섬세함과 ISFJ의 배려가 만났어요. 작은 것까지 챙겨요.' },
    synergies: [
      { title: '세심한 케어', description: '작은 것까지 챙겨요.' },
      { title: '조용한 완벽주의', description: '티 안 내고 완벽하게 해요.' }
    ],
    conflicts: [
      { title: '비판 민감', description: '둘 다 예민해요.', solution: '강해지세요.' },
      { title: '과한 희생', description: '남을 위해 너무 많이 해요.', solution: '자기 관리도 하세요.' }
    ],
    loveCombo: { style: '세심하고 따뜻한 사랑', bestMatch: '水 기운 + 외향형(E)', warning: '강해질 필요' },
    careerCombo: { idealPath: '케어, 디자인, 서비스, 행정', strength: '세심한 전문가', weakness: '비판에 약함' },
    coreAdvice: '섬세함에 강인함을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'INFJ',
    harmony: { score: 78, summary: '깊은 보석', description: '辛金의 예리함과 INFJ의 통찰이 맞아요. 본질을 꿰뚫어봐요.' },
    synergies: [
      { title: '깊은 이해', description: '본질을 꿰뚫어요.' },
      { title: '섬세한 통찰', description: '미세한 것까지 알아채요.' }
    ],
    conflicts: [
      { title: '완벽주의', description: '둘 다 기준이 높아요.', solution: '80%도 충분.' },
      { title: '현실 도피', description: '어려운 현실을 피하려 해요.', solution: '현실에 발 딛으세요.' }
    ],
    loveCombo: { style: '깊고 세련된 사랑', bestMatch: '水 기운 + 외향형(E)', warning: '현실도 보세요' },
    careerCombo: { idealPath: '심리, 예술, 컨설팅, 연구', strength: '깊이 있는 분석가', weakness: '현실 업무 부담' },
    coreAdvice: '깊이와 현실의 균형을 찾으세요.'
  },

  {
    dayMaster: '辛', mbti: 'INTJ',
    harmony: { score: 80, summary: '전략적 보석', description: '辛金의 예리함과 INTJ의 전략이 맞아요. 정확하게 분석하고 계획해요.' },
    synergies: [
      { title: '예리한 전략', description: '정확하게 분석하고 계획.' },
      { title: '독립적 전문성', description: '혼자서도 깊이 있는 결과를 내요.' }
    ],
    conflicts: [
      { title: '고립 위험', description: '둘 다 혼자 있으려.', solution: '소통하세요.' },
      { title: '완벽주의', description: '둘 다 기준이 높아요.', solution: '80%도 충분해요.' }
    ],
    loveCombo: { style: '지적이고 세련된 파트너십', bestMatch: '水 기운 + 감정형(F)', warning: '따뜻함도 필요' },
    careerCombo: { idealPath: '전략, 분석, 투자, 연구', strength: '예리한 전략가', weakness: '대인관계 부담' },
    coreAdvice: '전략에 소통을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ISTP',
    harmony: { score: 68, summary: '정교한 기술', description: '辛金의 섬세함과 ISTP의 기술이 만났어요. 정밀하게 만들어요.' },
    synergies: [
      { title: '정밀한 작업', description: '섬세하게 만들어요.' },
      { title: '실용적 완성도', description: '쓸모있게 완벽하게 해요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '소통하세요.' },
      { title: '감정 무시', description: '둘 다 논리적이에요.', solution: '감정도 고려하세요.' }
    ],
    loveCombo: { style: '쿨하고 세련된 연애', bestMatch: '水 기운 + 감정형(F)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '기술, 주얼리, 프로그래밍, 정밀기계', strength: '정밀한 기술자', weakness: '대인관계 부담' },
    coreAdvice: '기술에 소통을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ISFP',
    harmony: { score: 85, summary: '아름다운 보석', description: '辛金의 심미안과 ISFP의 감성이 완벽하게 맞아요. 아름다움을 창조해요.' },
    synergies: [
      { title: '예술적 감각', description: '아름다움을 창조해요.' },
      { title: '섬세한 표현', description: '미세한 아름다움을 담아요.' }
    ],
    conflicts: [
      { title: '결정 어려움', description: '둘 다 우유부단.', solution: '기한 정해 결정.' },
      { title: '현실 회피', description: '어려운 문제를 피하려 해요.', solution: '작은 것부터 직면하세요.' }
    ],
    loveCombo: { style: '감성적이고 세련된 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '결단력 필요' },
    careerCombo: { idealPath: '주얼리, 디자인, 예술, 패션', strength: '최고의 심미안', weakness: '경쟁적 환경 부담' },
    coreAdvice: '아름다움을 현실에서 표현하세요.'
  },

  {
    dayMaster: '辛', mbti: 'INFP',
    harmony: { score: 72, summary: '순수한 보석', description: '辛金의 순수함과 INFP의 이상이 만났어요. 진정한 것을 추구해요.' },
    synergies: [
      { title: '순수한 가치', description: '진정한 것을 추구해요.' },
      { title: '섬세한 이상', description: '아름다운 이상을 품어요.' }
    ],
    conflicts: [
      { title: '현실 괴리', description: '둘 다 이상적.', solution: '현실에 발 딛으세요.' },
      { title: '비판 민감', description: '둘 다 예민해요.', solution: '강해지세요.' }
    ],
    loveCombo: { style: '순수하고 깊은 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '현실도 필요' },
    careerCombo: { idealPath: '예술, 글쓰기, 상담, 디자인', strength: '진정성 있는 표현', weakness: '현실 업무 부담' },
    coreAdvice: '이상을 현실에서 빛내세요.'
  },

  {
    dayMaster: '辛', mbti: 'INTP',
    harmony: { score: 70, summary: '분석하는 보석', description: '辛金의 예리함과 INTP의 분석력이 만났어요. 본질을 파악해요.' },
    synergies: [
      { title: '예리한 분석', description: '본질을 파악해요.' },
      { title: '논리적 정교함', description: '논리적으로 완벽하게 분석해요.' }
    ],
    conflicts: [
      { title: '실행 부족', description: '둘 다 실행이 약해요.', solution: '작은 것부터 실행.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '지적이고 세련된 연애', bestMatch: '土 기운 + 감정형(F)', warning: '실행도 필요' },
    careerCombo: { idealPath: '연구, 분석, 평가, 기술', strength: '예리한 분석가', weakness: '실행력 부담' },
    coreAdvice: '분석을 실행으로 연결하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ESTP',
    harmony: { score: 55, summary: '보석과 번개', description: '辛金의 섬세함과 ESTP의 행동력이 만났어요. 매우 달라요.' },
    synergies: [
      { title: '다양한 접근', description: '섬세함과 대담함 둘 다.' },
      { title: '보완적 팀워크', description: '서로 부족한 부분을 채워요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ESTP는 빠르고 辛金은 느려요.', solution: '템포 존중.' },
      { title: '깊이 차이', description: 'ESTP는 표면적, 辛金은 깊어요.', solution: '서로 보완하세요.' }
    ],
    loveCombo: { style: '다이내믹한 관계', bestMatch: '土 기운 + 감정형(F)', warning: '차이 인정' },
    careerCombo: { idealPath: '영업 지원, 마케팅, 디자인', strength: '세련된 서포터', weakness: '직접 나서기 부담' },
    coreAdvice: '다름은 보완이에요.'
  },

  {
    dayMaster: '辛', mbti: 'ESFP',
    harmony: { score: 60, summary: '빛나는 보석', description: '辛金의 세련됨과 ESFP의 밝음이 만났어요. 세련되면서 밝아요.' },
    synergies: [
      { title: '매력', description: '세련되면서 밝아요.' },
      { title: '주목받는 아름다움', description: '자연스럽게 눈에 띄어요.' }
    ],
    conflicts: [
      { title: '깊이 차이', description: '辛金은 깊고 ESFP는 가벼워요.', solution: '균형을 찾으세요.' },
      { title: '에너지 차이', description: 'ESFP는 밖으로, 辛金은 안으로.', solution: '서로 보완하세요.' }
    ],
    loveCombo: { style: '재미있고 세련된 연애', bestMatch: '土 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '패션, 뷰티, 엔터테인먼트, 마케팅', strength: '세련된 매력', weakness: '깊이 부족 가능' },
    coreAdvice: '매력에 깊이를 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ENFP',
    harmony: { score: 65, summary: '열정적인 보석', description: '辛金의 세련됨과 ENFP의 열정이 만났어요. 품위 있게 열정을 표현해요.' },
    synergies: [
      { title: '세련된 열정', description: '품위 있게 열정을 표현해요.' },
      { title: '매력적인 아이디어', description: '세련되게 아이디어를 풀어요.' }
    ],
    conflicts: [
      { title: '템포 차이', description: 'ENFP는 빠르고 辛金은 느려요.', solution: '균형을 찾으세요.' },
      { title: '마무리 부족', description: '둘 다 끝내기 어려워요.', solution: '작은 목표로 나눠서 완성하세요.' }
    ],
    loveCombo: { style: '세련되고 열정적인 사랑', bestMatch: '土 기운 + 판단형(J)', warning: '속도 맞추세요' },
    careerCombo: { idealPath: '마케팅, 디자인, 브랜딩, 교육', strength: '세련된 열정가', weakness: '꾸준함 부담' },
    coreAdvice: '열정에 세련됨을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ENTP',
    harmony: { score: 58, summary: '도전하는 보석', description: '辛金의 예리함과 ENTP의 도전이 만났어요. 정확하게 분석하고 도전해요.' },
    synergies: [
      { title: '예리한 도전', description: '정확하게 분석하고 도전해요.' },
      { title: '논리적 혁신', description: '논리로 새로운 길을 열어요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ENTP는 빠르고 辛金은 느려요.', solution: '템포 존중.' },
      { title: '논쟁 스트레스', description: 'ENTP의 논쟁이 辛金에게 부담.', solution: '논쟁은 공격이 아니에요.' }
    ],
    loveCombo: { style: '지적이고 도전적인 연애', bestMatch: '土 기운 + 감정형(F)', warning: '균형 필요' },
    careerCombo: { idealPath: '컨설팅, 분석, 혁신, 기획', strength: '예리한 혁신가', weakness: '마무리 부담' },
    coreAdvice: '예리함과 도전의 균형을 찾으세요.'
  },

  {
    dayMaster: '辛', mbti: 'ESTJ',
    harmony: { score: 72, summary: '정확한 관리자', description: '辛金의 정확함과 ESTJ의 관리력이 만났어요. 디테일까지 관리해요.' },
    synergies: [
      { title: '정확한 관리', description: '디테일까지 관리해요.' },
      { title: '신뢰받는 실무', description: '정확함으로 신뢰를 얻어요.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: 'ESTJ는 빠르게, 辛金은 정확하게.', solution: '역할 나누세요.' },
      { title: '융통성 부족', description: '둘 다 규칙적이에요.', solution: '유연함을 더하세요.' }
    ],
    loveCombo: { style: '안정적이고 세련된 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: '품질관리, 감사, 분석, 행정', strength: '정확한 관리자', weakness: '유연성 부담' },
    coreAdvice: '정확함에 유연함을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ESFJ',
    harmony: { score: 70, summary: '세련된 배려', description: '辛金의 세련됨과 ESFJ의 배려가 만났어요. 품위 있게 돌봐요.' },
    synergies: [
      { title: '세련된 케어', description: '품위 있게 돌봐요.' },
      { title: '따뜻한 완벽주의', description: '세심하게 챙기면서 완벽하게 해요.' }
    ],
    conflicts: [
      { title: '비판 민감', description: '둘 다 예민해요.', solution: '강해지세요.' },
      { title: '과한 희생', description: '남을 위해 너무 많이 해요.', solution: '자기 관리도 하세요.' }
    ],
    loveCombo: { style: '세련되고 따뜻한 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '강해질 필요' },
    careerCombo: { idealPath: '서비스업, 케어, 디자인, HR', strength: '세련된 돌봄', weakness: '비판에 약함' },
    coreAdvice: '세련됨에 강인함을 더하세요.'
  },

  {
    dayMaster: '辛', mbti: 'ENFJ',
    harmony: { score: 68, summary: '세련된 리더', description: '辛金의 세련됨과 ENFJ의 리더십이 만났어요. 품위 있게 이끌어요.' },
    synergies: [
      { title: '품위 있는 영향력', description: '세련되게 이끌어요.' },
      { title: '섬세한 리더십', description: '작은 것까지 챙기면서 이끌어요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ENFJ는 밖으로, 辛金은 안으로.', solution: '역할 나누세요.' },
      { title: '완벽주의', description: '둘 다 기준이 높아요.', solution: '80%도 충분해요.' }
    ],
    loveCombo: { style: '세련되고 깊은 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '균형 필요' },
    careerCombo: { idealPath: '교육, 컨설팅, 브랜딩, 코칭', strength: '세련된 영향력', weakness: '에너지 소모' },
    coreAdvice: '세련됨과 영향력의 균형을 찾으세요.'
  },

  {
    dayMaster: '辛', mbti: 'ENTJ',
    harmony: { score: 62, summary: '정교한 리더', description: '辛金의 정교함과 ENTJ의 리더십이 만났어요. 전략을 정확하게 실행해요.' },
    synergies: [
      { title: '정교한 실행', description: '전략을 정확하게 실행해요.' },
      { title: '세밀한 전략', description: '디테일까지 고려한 전략을 세워요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: 'ENTJ는 빠르고 강하게, 辛金은 정교하게.', solution: '역할 나누세요.' },
      { title: '압도당함', description: 'ENTJ의 강함에 辛金이 위축.', solution: 'ENTJ가 공간을 줘야.' }
    ],
    loveCombo: { style: '목표 지향적 파트너십', bestMatch: '水 기운 + 감정형(F)', warning: '템포 맞추세요' },
    careerCombo: { idealPath: '전략, 품질관리, 컨설팅, 분석', strength: '정교한 전략가', weakness: '속도 부담' },
    coreAdvice: '정교함과 추진력의 균형을 찾으세요.'
  }
];
