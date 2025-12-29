// 水 오행: 壬水, 癸水 × 16 MBTI = 32개 조합

import { CombinationText } from './types';

export const waterCombinations: CombinationText[] = [
  // ========================================
  // 壬水 (임수) × 16 MBTI
  // ========================================

  {
    dayMaster: '壬', mbti: 'ISTJ',
    harmony: { score: 62, summary: '흐르는 물과 체계', description: '壬水의 유연함과 ISTJ의 체계성이 만났어요. 서로 다르지만 보완 가능해요.' },
    synergies: [
      { title: '체계적 적응', description: '규칙 안에서 유연하게 대응해요.' },
      { title: '신뢰받는 유연함', description: '책임감 있게 변화에 대응해요.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: '壬水는 흐르고 ISTJ는 고정.', solution: '서로 보완하세요.' },
      { title: '변화 vs 안정', description: '壬水는 변화를, ISTJ는 안정을.', solution: '균형을 찾으세요.' }
    ],
    loveCombo: { style: '안정과 자유의 균형', bestMatch: '木 기운 + 외향형(E)', warning: '방식 존중' },
    careerCombo: { idealPath: '물류, 유통, 관리, 분석', strength: '체계적 유연함', weakness: '창의적 업무 부담' },
    coreAdvice: '흐름과 체계의 균형을 찾으세요.'
  },

  {
    dayMaster: '壬', mbti: 'ISFJ',
    harmony: { score: 68, summary: '감싸주는 큰 물', description: '壬水의 포용력과 ISFJ의 배려가 만났어요. 넓게 품어주죠.' },
    synergies: [
      { title: '넓은 포용', description: '넓게 품어줘요.' },
      { title: '유연한 돌봄', description: '상황에 맞게 돌봐요.' }
    ],
    conflicts: [
      { title: '경계 부족', description: '둘 다 너무 받아들여요.', solution: '경계를 세우세요.' },
      { title: '방향성 부족', description: '흘러가기만 해요.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '따뜻하고 포용적인 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '경계 필요' },
    careerCombo: { idealPath: '상담, 복지, 서비스, 교육', strength: '넓은 포용력', weakness: '방향성 부족' },
    coreAdvice: '포용하되 경계도 세우세요.'
  },

  {
    dayMaster: '壬', mbti: 'INFJ',
    harmony: { score: 75, summary: '깊은 바다의 통찰', description: '壬水의 깊이와 INFJ의 통찰이 맞아요. 깊이 이해하고 흘러가요.' },
    synergies: [
      { title: '깊은 이해', description: '본질을 꿰뚫어봐요.' },
      { title: '유연한 비전', description: '상황에 맞게 비전을 실현해요.' }
    ],
    conflicts: [
      { title: '현실 도피', description: '둘 다 흘러가기만.', solution: '현실에 발 딛으세요.' },
      { title: '방향성 부족', description: '어디로 갈지 모를 때가 있어요.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '깊고 유연한 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '방향 필요' },
    careerCombo: { idealPath: '상담, 연구, 예술, 영성', strength: '깊은 통찰력', weakness: '현실 업무 부담' },
    coreAdvice: '깊이에 방향을 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'INTJ',
    harmony: { score: 72, summary: '전략적 흐름', description: '壬水의 유연함과 INTJ의 전략이 만났어요. 유연하게 목표를 향해 가요.' },
    synergies: [
      { title: '유연한 전략', description: '상황에 맞게 방법을 바꿔요.' },
      { title: '적응하는 리더십', description: '변화에 대응하면서 이끌어요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: 'INTJ는 계획대로, 壬水는 흘러가며.', solution: '균형을 찾으세요.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '전략적 파트너십', bestMatch: '木 기운 + 감정형(F)', warning: '감정도 중요' },
    careerCombo: { idealPath: '전략, 컨설팅, 투자, 연구', strength: '유연한 전략가', weakness: '고정된 업무 부담' },
    coreAdvice: '전략에 유연함을 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ISTP',
    harmony: { score: 70, summary: '흐르는 기술자', description: '壬水의 유연함과 ISTP의 실용성이 맞아요. 상황에 맞게 해결해요.' },
    synergies: [
      { title: '유연한 해결', description: '어떤 상황에서도 대처해요.' },
      { title: '적응하는 기술', description: '상황에 맞게 기술을 적용해요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '소통하세요.' },
      { title: '방향성 부족', description: '흘러가기만 해요.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '자유롭고 유연한 연애', bestMatch: '木 기운 + 감정형(F)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '기술, 물류, 위기관리, 스포츠', strength: '유연한 해결사', weakness: '장기 계획 부담' },
    coreAdvice: '유연함에 방향을 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ISFP',
    harmony: { score: 75, summary: '흐르는 감성', description: '壬水의 유연함과 ISFP의 감성이 맞아요. 자연스럽게 흘러가요.' },
    synergies: [
      { title: '자연스러운 흐름', description: '억지 없이 자연스럽게.' },
      { title: '감성적 적응', description: '느끼면서 변화에 대응해요.' }
    ],
    conflicts: [
      { title: '결정 어려움', description: '둘 다 우유부단.', solution: '기한 정해 결정.' },
      { title: '방향성 부족', description: '흘러가기만 해요.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '자연스럽고 감성적인 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '결단력 필요' },
    careerCombo: { idealPath: '예술, 치료, 자연, 서비스', strength: '자연스러운 창작', weakness: '경쟁적 환경 부담' },
    coreAdvice: '흐름 속에서 방향을 찾으세요.'
  },

  {
    dayMaster: '壬', mbti: 'INFP',
    harmony: { score: 78, summary: '이상을 품은 바다', description: '壬水의 깊이와 INFP의 이상이 맞아요. 넓게 꿈을 품어요.' },
    synergies: [
      { title: '넓은 이상', description: '넓게 꿈을 품어요.' },
      { title: '유연한 가치 추구', description: '상황에 맞게 가치를 실현해요.' }
    ],
    conflicts: [
      { title: '현실 괴리', description: '둘 다 이상적.', solution: '현실에 발 딛으세요.' },
      { title: '방향성 부족', description: '흘러가기만 해요.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '깊고 이상적인 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '현실도 필요' },
    careerCombo: { idealPath: '예술, 상담, 글쓰기, 사회운동', strength: '깊은 감성', weakness: '현실 업무 부담' },
    coreAdvice: '이상에 현실을 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'INTP',
    harmony: { score: 88, summary: '지혜의 바다', description: '壬水의 깊이와 INTP의 분석력이 완벽하게 맞아요. 끝없이 탐구해요.' },
    synergies: [
      { title: '끝없는 탐구', description: '깊이 파고들어요.' },
      { title: '유연한 분석', description: '다양한 관점에서 분석해요.' }
    ],
    conflicts: [
      { title: '실행 부족', description: '둘 다 생각만.', solution: '작은 것부터 실행.' },
      { title: '현실 괴리', description: '둘 다 이론적.', solution: '현실에 적용하세요.' }
    ],
    loveCombo: { style: '지적이고 깊은 연애', bestMatch: '土 기운 + 감정형(F)', warning: '실행도 필요' },
    careerCombo: { idealPath: '연구, 분석, 철학, 기술', strength: '최고의 분석가', weakness: '실행력 부담' },
    coreAdvice: '분석을 현실에 적용하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ESTP',
    harmony: { score: 72, summary: '돌파하는 물결', description: '壬水의 유연함과 ESTP의 행동력이 만났어요. 유연하게 돌파해요.' },
    synergies: [
      { title: '유연한 돌파', description: '상황에 맞게 돌파해요.' },
      { title: '적응하는 행동력', description: '변화에 맞춰 움직여요.' }
    ],
    conflicts: [
      { title: '깊이 부족', description: '너무 빨리 가요.', solution: '가끔 멈춰 생각.' },
      { title: '방향성', description: '어디로 가는지 모를 때가.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '자유롭고 활동적인 연애', bestMatch: '土 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '영업, 스포츠, 물류, 위기관리', strength: '유연한 행동파', weakness: '장기 계획 부담' },
    coreAdvice: '행동에 깊이를 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ESFP',
    harmony: { score: 75, summary: '즐기는 물결', description: '壬水의 유연함과 ESFP의 밝음이 맞아요. 흘러가면서 즐겨요.' },
    synergies: [
      { title: '유연한 즐거움', description: '흘러가면서 즐겨요.' },
      { title: '적응하는 밝음', description: '어디서든 밝게 적응해요.' }
    ],
    conflicts: [
      { title: '깊이 부족', description: '너무 가볍게.', solution: '가끔 깊이 들어가세요.' },
      { title: '방향성 부족', description: '흘러가기만 해요.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '자유롭고 재미있는 연애', bestMatch: '土 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '엔터테인먼트, 여행, 서비스, 영업', strength: '유연한 엔터테이너', weakness: '깊이 부족' },
    coreAdvice: '즐거움에 깊이를 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ENFP',
    harmony: { score: 82, summary: '가능성의 바다', description: '壬水의 유연함과 ENFP의 열정이 맞아요. 끝없는 가능성을 탐색해요.' },
    synergies: [
      { title: '무한한 가능성', description: '끝없이 가능성을 탐색해요.' },
      { title: '유연한 열정', description: '상황에 맞게 열정을 발휘해요.' }
    ],
    conflicts: [
      { title: '집중 부족', description: '여기저기 흘러가요.', solution: '핵심에 집중하세요.' },
      { title: '마무리 부족', description: '둘 다 끝내기 어려워요.', solution: '작은 목표로 완성하세요.' }
    ],
    loveCombo: { style: '자유롭고 열정적인 사랑', bestMatch: '土 기운 + 판단형(J)', warning: '집중 필요' },
    careerCombo: { idealPath: '마케팅, 여행, 교육, 크리에이티브', strength: '무한한 가능성', weakness: '마무리 부담' },
    coreAdvice: '가능성에 집중을 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ENTP',
    harmony: { score: 80, summary: '혁신의 물결', description: '壬水의 유연함과 ENTP의 도전이 맞아요. 유연하게 혁신해요.' },
    synergies: [
      { title: '유연한 혁신', description: '상황에 맞게 새로움을 만들어요.' },
      { title: '적응하는 도전', description: '변화에 맞춰 도전해요.' }
    ],
    conflicts: [
      { title: '마무리 부족', description: '둘 다 새 것에 끌려요.', solution: '끝내고 시작하세요.' },
      { title: '방향성', description: '어디로 가는지 모를 때가.', solution: '핵심 목표를 정하세요.' }
    ],
    loveCombo: { style: '지적이고 자유로운 연애', bestMatch: '土 기운 + 감정형(F)', warning: '마무리 필요' },
    careerCombo: { idealPath: '창업, 컨설팅, 마케팅, 혁신', strength: '유연한 혁신가', weakness: '마무리 부담' },
    coreAdvice: '혁신에 완성을 더하세요.'
  },

  {
    dayMaster: '壬', mbti: 'ESTJ',
    harmony: { score: 58, summary: '물과 댐', description: '壬水의 유연함과 ESTJ의 체계가 만났어요. 서로 다르지만 보완 가능해요.' },
    synergies: [
      { title: '체계적 흐름', description: '방향을 정해서 흘러가요.' },
      { title: '관리되는 유연함', description: '체계 안에서 유연하게.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: 'ESTJ는 통제하려 하고 壬水는 흐르려.', solution: '역할 나누세요.' },
      { title: '자유 vs 체계', description: '壬水는 자유를, ESTJ는 체계를.', solution: '균형을 찾으세요.' }
    ],
    loveCombo: { style: '안정과 자유의 긴장', bestMatch: '火 기운 + 감정형(F)', warning: '방식 존중' },
    careerCombo: { idealPath: '물류 관리, 유통, 기획', strength: '체계적 유연함', weakness: '충돌 가능' },
    coreAdvice: '흐름과 체계의 균형을 찾으세요.'
  },

  {
    dayMaster: '壬', mbti: 'ESFJ',
    harmony: { score: 70, summary: '감싸주는 물결', description: '壬水의 포용력과 ESFJ의 배려가 맞아요. 넓게 품어줘요.' },
    synergies: [
      { title: '넓은 배려', description: '모두를 품어줘요.' },
      { title: '유연한 돌봄', description: '상황에 맞게 돌봐요.' }
    ],
    conflicts: [
      { title: '경계 부족', description: '둘 다 너무 받아들여요.', solution: '경계를 세우세요.' },
      { title: '과한 희생', description: '남을 위해 너무 많이.', solution: '자기 관리도.' }
    ],
    loveCombo: { style: '따뜻하고 포용적인 사랑', bestMatch: '土 기운 + 사고형(T)', warning: '경계 필요' },
    careerCombo: { idealPath: '상담, 서비스, 교육, 복지', strength: '넓은 포용력', weakness: '경계 부족' },
    coreAdvice: '포용하되 자신도 챙기세요.'
  },

  {
    dayMaster: '壬', mbti: 'ENFJ',
    harmony: { score: 75, summary: '이끄는 큰 물', description: '壬水의 포용력과 ENFJ의 리더십이 맞아요. 넓게 품으며 이끌어요.' },
    synergies: [
      { title: '포용적 리더십', description: '넓게 품으며 이끌어요.' },
      { title: '유연한 영향력', description: '상황에 맞게 영향을 줘요.' }
    ],
    conflicts: [
      { title: '과한 헌신', description: '둘 다 남을 위해 너무 많이.', solution: '경계를 세우세요.' },
      { title: '방향성', description: '흘러가기만 할 때가.', solution: '목표를 정하세요.' }
    ],
    loveCombo: { style: '함께 성장하는 포용적 사랑', bestMatch: '土 기운 + 사고형(T)', warning: '자기 관리도' },
    careerCombo: { idealPath: '교육, 상담, 경영, 비영리', strength: '포용적 리더', weakness: '경계 부족' },
    coreAdvice: '이끌면서 자신도 챙기세요.'
  },

  {
    dayMaster: '壬', mbti: 'ENTJ',
    harmony: { score: 68, summary: '전략적 물결', description: '壬水의 유연함과 ENTJ의 리더십이 만났어요. 유연하게 목표를 향해 가요.' },
    synergies: [
      { title: '유연한 리더십', description: '상황에 맞게 이끌어요.' },
      { title: '적응하는 추진력', description: '변화에 맞춰 밀고 나가요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: 'ENTJ는 통제하려 하고 壬水는 흐르려.', solution: '역할 나누세요.' },
      { title: '속도 차이', description: 'ENTJ는 빠르고 壬水는 유연하게.', solution: '균형을 찾으세요.' }
    ],
    loveCombo: { style: '목표 지향적 파트너십', bestMatch: '火 기운 + 감정형(F)', warning: '방식 존중' },
    careerCombo: { idealPath: '전략, 컨설팅, 경영, 투자', strength: '유연한 리더', weakness: '충돌 가능' },
    coreAdvice: '유연함과 추진력의 균형을 찾으세요.'
  },

  // ========================================
  // 癸水 (계수) × 16 MBTI
  // ========================================

  {
    dayMaster: '癸', mbti: 'ISTJ',
    harmony: { score: 60, summary: '이슬과 바위', description: '癸水의 섬세함과 ISTJ의 체계가 만났어요. 서로 다르지만 보완 가능해요.' },
    synergies: [
      { title: '세심한 체계', description: '작은 것까지 체계적으로.' },
      { title: '꼼꼼한 관리', description: '디테일을 챙겨요.' }
    ],
    conflicts: [
      { title: '방식 차이', description: 'ISTJ는 고정적, 癸水는 미세하게 변해요.', solution: '서로 보완.' },
      { title: '표현 차이', description: 'ISTJ는 직접적, 癸水는 간접적.', solution: '소통하세요.' }
    ],
    loveCombo: { style: '안정적이지만 템포 다른 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '방식 존중' },
    careerCombo: { idealPath: '분석, 연구, 행정, 품질관리', strength: '세심한 체계', weakness: '창의적 업무 부담' },
    coreAdvice: '섬세함과 체계의 균형을 찾으세요.'
  },

  {
    dayMaster: '癸', mbti: 'ISFJ',
    harmony: { score: 78, summary: '촉촉한 돌봄', description: '癸水의 섬세함과 ISFJ의 배려가 맞아요. 조용히 스며들어 돌봐요.' },
    synergies: [
      { title: '스며드는 돌봄', description: '조용히 스며들어 돌봐요.' },
      { title: '세심한 케어', description: '미세한 것까지 알아채요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '둘 다 자기보다 남을.', solution: '자기 관리도.' },
      { title: '표현 부족', description: '둘 다 말을 안 해요.', solution: '속마음을 말하세요.' }
    ],
    loveCombo: { style: '조용하고 세심한 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '자신도 챙기세요' },
    careerCombo: { idealPath: '상담, 케어, 연구, 교육', strength: '최고의 세심함', weakness: '경쟁적 환경 부담' },
    coreAdvice: '돌보면서 자신도 챙기세요.'
  },

  {
    dayMaster: '癸', mbti: 'INFJ',
    harmony: { score: 88, summary: '깊은 직관의 이슬', description: '癸水의 직관과 INFJ의 통찰이 완벽하게 맞아요. 미세한 것까지 알아채요.' },
    synergies: [
      { title: '깊은 직관', description: '말하지 않아도 알아요.' },
      { title: '섬세한 통찰', description: '미세한 것까지 알아채요.' }
    ],
    conflicts: [
      { title: '현실 도피', description: '둘 다 현실을 피하려.', solution: '현실에 발 딛으세요.' },
      { title: '감정 흡수', description: '남의 감정을 너무 받아요.', solution: '경계를 세우세요.' }
    ],
    loveCombo: { style: '영혼의 연결', bestMatch: '木 기운 + 외향형(E)', warning: '현실도 필요' },
    careerCombo: { idealPath: '심리상담, 예술, 영성, 연구', strength: '최고의 직관', weakness: '현실 업무 부담' },
    coreAdvice: '직관에 현실을 더하세요.'
  },

  {
    dayMaster: '癸', mbti: 'INTJ',
    harmony: { score: 70, summary: '전략적 이슬', description: '癸水의 직관과 INTJ의 전략이 만났어요. 미세하게 분석해요.' },
    synergies: [
      { title: '직관적 전략', description: '느끼면서 전략을 세워요.' },
      { title: '세밀한 분석', description: '미세한 것까지 분석해요.' }
    ],
    conflicts: [
      { title: '표현 차이', description: 'INTJ는 논리로, 癸水는 직관으로.', solution: '서로 보완.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '깊고 조용한 파트너십', bestMatch: '木 기운 + 감정형(F)', warning: '소통 필요' },
    careerCombo: { idealPath: '전략, 연구, 분석, 상담', strength: '직관적 전략가', weakness: '대인관계 부담' },
    coreAdvice: '직관과 논리의 균형을 찾으세요.'
  },

  {
    dayMaster: '癸', mbti: 'ISTP',
    harmony: { score: 62, summary: '섬세한 기술', description: '癸水의 섬세함과 ISTP의 실용성이 만났어요. 미세하게 조절해요.' },
    synergies: [
      { title: '정밀한 작업', description: '미세하게 조절해요.' },
      { title: '직관적 해결', description: '느끼면서 문제를 해결해요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '소통하세요.' },
      { title: '표현 차이', description: 'ISTP는 행동으로, 癸水는 느낌으로.', solution: '서로 이해.' }
    ],
    loveCombo: { style: '조용하고 자유로운 연애', bestMatch: '木 기운 + 감정형(F)', warning: '소통 필요' },
    careerCombo: { idealPath: '기술, 예술, 치료, 연구', strength: '섬세한 기술', weakness: '대인관계 부담' },
    coreAdvice: '섬세함에 소통을 더하세요.'
  },

  {
    dayMaster: '癸', mbti: 'ISFP',
    harmony: { score: 85, summary: '감성의 이슬', description: '癸水의 섬세함과 ISFP의 감성이 완벽하게 맞아요. 미세한 아름다움을 느껴요.' },
    synergies: [
      { title: '섬세한 감성', description: '미세한 아름다움을 느껴요.' },
      { title: '조용한 표현', description: '말없이 표현해요.' }
    ],
    conflicts: [
      { title: '결정 어려움', description: '둘 다 우유부단.', solution: '기한 정해 결정.' },
      { title: '현실 회피', description: '어려운 문제를 피하려.', solution: '작은 것부터 직면.' }
    ],
    loveCombo: { style: '감성적이고 깊은 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '결단력 필요' },
    careerCombo: { idealPath: '예술, 음악, 치료, 디자인', strength: '최고의 감성', weakness: '경쟁적 환경 부담' },
    coreAdvice: '감성을 현실에서 표현하세요.'
  },

  {
    dayMaster: '癸', mbti: 'INFP',
    harmony: { score: 90, summary: '순수한 이상의 이슬', description: '癸水의 순수함과 INFP의 이상이 완벽하게 맞아요. 순수한 가치를 추구해요.' },
    synergies: [
      { title: '순수한 이상', description: '진정한 가치를 추구해요.' },
      { title: '섬세한 감성', description: '미세한 것까지 느껴요.' }
    ],
    conflicts: [
      { title: '현실 괴리', description: '둘 다 이상적.', solution: '현실에 발 딛으세요.' },
      { title: '결정 회피', description: '둘 다 결정을 미뤄요.', solution: '기한을 정하세요.' }
    ],
    loveCombo: { style: '영혼의 연결을 찾는 순수한 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '현실도 필요' },
    careerCombo: { idealPath: '예술, 글쓰기, 상담, 영성', strength: '최고의 순수함', weakness: '현실 업무 부담' },
    coreAdvice: '순수함을 현실에서 지키세요.'
  },

  {
    dayMaster: '癸', mbti: 'INTP',
    harmony: { score: 75, summary: '직관적 분석', description: '癸水의 직관과 INTP의 분석력이 맞아요. 느끼면서 분석해요.' },
    synergies: [
      { title: '직관적 분석', description: '느끼면서 분석해요.' },
      { title: '섬세한 탐구', description: '미세한 것까지 탐구해요.' }
    ],
    conflicts: [
      { title: '실행 부족', description: '둘 다 생각만.', solution: '작은 것부터 실행.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '지적이고 깊은 연애', bestMatch: '土 기운 + 감정형(F)', warning: '실행도 필요' },
    careerCombo: { idealPath: '연구, 분석, 상담, 기술', strength: '직관적 분석가', weakness: '실행력 부담' },
    coreAdvice: '분석을 실행으로 연결하세요.'
  },

  {
    dayMaster: '癸', mbti: 'ESTP',
    harmony: { score: 50, summary: '이슬과 번개', description: '癸水의 섬세함과 ESTP의 행동력이 만났어요. 매우 달라요.' },
    synergies: [
      { title: '다양한 접근', description: '섬세함과 대담함 둘 다.' },
      { title: '보완적 팀워크', description: '서로 부족한 부분을 채워요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ESTP는 빠르고 癸水는 느려요.', solution: '템포 존중.' },
      { title: '깊이 차이', description: 'ESTP는 표면적, 癸水는 깊어요.', solution: '서로 보완.' }
    ],
    loveCombo: { style: '다이내믹한 관계', bestMatch: '土 기운 + 감정형(F)', warning: '큰 차이 인정' },
    careerCombo: { idealPath: '분석 지원, 마케팅, 연구', strength: '세밀한 서포터', weakness: '직접 나서기 부담' },
    coreAdvice: '다름은 보완이에요.'
  },

  {
    dayMaster: '癸', mbti: 'ESFP',
    harmony: { score: 55, summary: '이슬과 햇살', description: '癸水의 섬세함과 ESFP의 밝음이 만났어요. 서로 다르지만 보완 가능.' },
    synergies: [
      { title: '섬세한 밝음', description: '조용히 밝게 해요.' },
      { title: '다양한 매력', description: '깊이와 밝음 둘 다.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ESFP는 밖으로, 癸水는 안으로.', solution: '균형을 찾으세요.' },
      { title: '깊이 차이', description: 'ESFP는 가볍게, 癸水는 깊게.', solution: '서로 보완.' }
    ],
    loveCombo: { style: '밝고 깊은 조화', bestMatch: '土 기운 + 판단형(J)', warning: '균형 필요' },
    careerCombo: { idealPath: '케어, 서비스, 예술, 교육', strength: '섬세한 밝음', weakness: '에너지 소모' },
    coreAdvice: '깊이와 밝음의 균형을 찾으세요.'
  },

  {
    dayMaster: '癸', mbti: 'ENFP',
    harmony: { score: 68, summary: '가능성의 이슬', description: '癸水의 직관과 ENFP의 열정이 만났어요. 섬세하게 가능성을 탐색해요.' },
    synergies: [
      { title: '섬세한 탐색', description: '미세한 가능성도 알아채요.' },
      { title: '직관적 열정', description: '느끼면서 열정을 발휘해요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ENFP는 밖으로, 癸水는 안으로.', solution: '균형을 찾으세요.' },
      { title: '마무리 부족', description: '둘 다 끝내기 어려워요.', solution: '작은 목표로 완성.' }
    ],
    loveCombo: { style: '깊고 열정적인 사랑', bestMatch: '土 기운 + 판단형(J)', warning: '균형 필요' },
    careerCombo: { idealPath: '상담, 예술, 교육, 마케팅', strength: '섬세한 열정가', weakness: '에너지 관리' },
    coreAdvice: '섬세함에 열정을 더하세요.'
  },

  {
    dayMaster: '癸', mbti: 'ENTP',
    harmony: { score: 58, summary: '도전하는 이슬', description: '癸水의 직관과 ENTP의 도전이 만났어요. 서로 다르지만 보완 가능.' },
    synergies: [
      { title: '직관적 도전', description: '느끼면서 새로움을 탐색해요.' },
      { title: '섬세한 혁신', description: '미세한 부분도 놓치지 않아요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ENTP는 빠르고 癸水는 느려요.', solution: '템포 존중.' },
      { title: '논쟁 스트레스', description: 'ENTP의 논쟁이 癸水에게 부담.', solution: '논쟁은 공격이 아니에요.' }
    ],
    loveCombo: { style: '지적이지만 템포 다른 연애', bestMatch: '土 기운 + 감정형(F)', warning: '균형 필요' },
    careerCombo: { idealPath: '연구, 분석, 컨설팅, 기획', strength: '섬세한 혁신가', weakness: '속도 부담' },
    coreAdvice: '섬세함과 도전의 균형을 찾으세요.'
  },

  {
    dayMaster: '癸', mbti: 'ESTJ',
    harmony: { score: 48, summary: '이슬과 바위', description: '癸水의 섬세함과 ESTJ의 강함이 만났어요. 매우 달라요.' },
    synergies: [
      { title: '세밀한 관리', description: '작은 것까지 챙겨요.' },
      { title: '보완적 팀워크', description: '서로 부족한 부분을 채워요.' }
    ],
    conflicts: [
      { title: '압도당함', description: 'ESTJ의 강함에 癸水가 위축.', solution: 'ESTJ가 공간을 줘야.' },
      { title: '방식 충돌', description: 'ESTJ는 강하게, 癸水는 섬세하게.', solution: '역할 나누세요.' }
    ],
    loveCombo: { style: '보호받지만 통제로 느껴질 수', bestMatch: '木 기운 + 감정형(F)', warning: 'ESTJ가 존중 필요' },
    careerCombo: { idealPath: '분석 지원, 연구, 품질관리', strength: '세밀한 서포터', weakness: '압박에 약함' },
    coreAdvice: '섬세함도 강점이에요.'
  },

  {
    dayMaster: '癸', mbti: 'ESFJ',
    harmony: { score: 72, summary: '스며드는 배려', description: '癸水의 섬세함과 ESFJ의 배려가 맞아요. 조용히 스며들어 챙겨요.' },
    synergies: [
      { title: '스며드는 돌봄', description: '조용히 스며들어 챙겨요.' },
      { title: '세심한 케어', description: '미세한 것까지 알아채요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '둘 다 남을 위해 너무 많이.', solution: '자기 관리도.' },
      { title: '에너지 차이', description: 'ESFJ는 밖으로, 癸水는 안으로.', solution: '균형을 찾으세요.' }
    ],
    loveCombo: { style: '따뜻하고 세심한 사랑', bestMatch: '土 기운 + 사고형(T)', warning: '자신도 챙기세요' },
    careerCombo: { idealPath: '상담, 케어, 교육, 서비스', strength: '최고의 세심함', weakness: '경계 부족' },
    coreAdvice: '돌보면서 자신도 챙기세요.'
  },

  {
    dayMaster: '癸', mbti: 'ENFJ',
    harmony: { score: 70, summary: '섬세한 영향력', description: '癸水의 직관과 ENFJ의 리더십이 만났어요. 조용히 영향을 줘요.' },
    synergies: [
      { title: '스며드는 영향력', description: '조용히 변화를 이끌어요.' },
      { title: '직관적 리더십', description: '느끼면서 이끌어요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ENFJ는 밖으로, 癸水는 안으로.', solution: '역할 나누세요.' },
      { title: '과한 헌신', description: '둘 다 남을 위해 너무 많이.', solution: '경계를 세우세요.' }
    ],
    loveCombo: { style: '함께 성장하는 깊은 사랑', bestMatch: '土 기운 + 사고형(T)', warning: '자기 관리도' },
    careerCombo: { idealPath: '상담, 교육, 코칭, 비영리', strength: '섬세한 영향력', weakness: '에너지 관리' },
    coreAdvice: '조용한 영향력도 강력해요.'
  },

  {
    dayMaster: '癸', mbti: 'ENTJ',
    harmony: { score: 48, summary: '이슬과 태양', description: '癸水의 섬세함과 ENTJ의 강함이 만났어요. 매우 달라요.' },
    synergies: [
      { title: '세밀한 전략', description: '작은 것까지 고려해요.' },
      { title: '보완적 팀워크', description: '서로 부족한 부분을 채워요.' }
    ],
    conflicts: [
      { title: '압도당함', description: 'ENTJ의 강함에 癸水가 위축.', solution: 'ENTJ가 공간을 줘야.' },
      { title: '방식 충돌', description: 'ENTJ는 강하게, 癸水는 섬세하게.', solution: '역할 나누세요.' }
    ],
    loveCombo: { style: '보호받지만 통제로 느껴질 수', bestMatch: '木 기운 + 감정형(F)', warning: 'ENTJ가 존중 필요' },
    careerCombo: { idealPath: '전략 분석, 연구, 기획 지원', strength: '세밀한 전략가', weakness: '압박에 약함' },
    coreAdvice: '섬세함도 리더십의 일부예요.'
  }
];
