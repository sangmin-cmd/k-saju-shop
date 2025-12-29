// 土 오행: 戊土, 己土 × 16 MBTI = 32개 조합

import { CombinationText } from './types';

export const earthCombinations: CombinationText[] = [
  // ========================================
  // 戊土 (무토) × 16 MBTI
  // ========================================

  {
    dayMaster: '戊', mbti: 'ISTJ',
    harmony: { score: 88, summary: '산처럼 흔들리지 않는 신뢰', description: '戊土의 안정감과 ISTJ의 체계성이 완벽하게 맞아요. 한번 정한 건 끝까지 지키고, 주변에 신뢰를 줘요.' },
    synergies: [
      { title: '흔들림 없는 신뢰', description: '약속은 반드시 지키고 책임져요.' },
      { title: '체계적 관리', description: '큰 일도 차근차근 해내요.' }
    ],
    conflicts: [
      { title: '변화 거부', description: '둘 다 새로운 걸 받아들이기 어려워요.', solution: '작은 변화부터 시도해보세요.' },
      { title: '고집 충돌', description: '둘 다 안 꺾여요.', solution: '가끔은 양보가 효율적이에요.' }
    ],
    loveCombo: { style: '안정적이고 믿음직한 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '감정 표현 연습 필요' },
    careerCombo: { idealPath: '관리직, 공무원, 금융, 부동산', strength: '신뢰받는 관리자', weakness: '창의적 업무 부담' },
    coreAdvice: '안정은 당신의 무기예요. 가끔 변화도 성장이에요.'
  },

  {
    dayMaster: '戊', mbti: 'ISFJ',
    harmony: { score: 82, summary: '든든하게 지켜주는 산', description: '戊土의 포용력과 ISFJ의 배려심이 어울려요. 주변 사람들을 든든하게 지켜주죠.' },
    synergies: [
      { title: '따뜻한 안정감', description: '주변을 든든하게 지켜줘요.' },
      { title: '묵묵한 헌신', description: '티 안 내고 해줘요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '남을 위해 너무 많이 해요.', solution: '자기 관리도 하세요.' },
      { title: '변화 거부', description: '익숙한 것만 고집해요.', solution: '새로운 시도도 해보세요.' }
    ],
    loveCombo: { style: '든든하고 따뜻한 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '자신의 필요도 말하세요' },
    careerCombo: { idealPath: '관리, 복지, 교육, 의료', strength: '신뢰받는 지원자', weakness: '경쟁적 환경 부담' },
    coreAdvice: '든든함 속에 자신도 챙기세요.'
  },

  {
    dayMaster: '戊', mbti: 'INFJ',
    harmony: { score: 70, summary: '비전을 품은 산', description: '戊土의 안정과 INFJ의 비전이 만났어요. 이상을 현실에서 착실히 실현해요.' },
    synergies: [
      { title: '안정적 비전', description: '이상을 현실에서 착실히 실현.' },
      { title: '깊이 있는 리더십', description: '조용히 사람들을 이끌어요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'INFJ는 이상을, 戊土는 현실을.', solution: '균형을 찾으세요.' },
      { title: '표현 방식', description: '戊土는 행동으로, INFJ는 말로.', solution: '서로의 방식을 이해하세요.' }
    ],
    loveCombo: { style: '깊고 안정적인 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '서로 방식 존중' },
    careerCombo: { idealPath: '교육, 상담, 사회복지, 비영리', strength: '안정적으로 사람을 도와요', weakness: '빠른 변화 부담' },
    coreAdvice: '이상과 현실의 균형이 당신의 강점이에요.'
  },

  {
    dayMaster: '戊', mbti: 'INTJ',
    harmony: { score: 75, summary: '전략적 안정감', description: '戊土의 안정과 INTJ의 전략이 만났어요. 흔들림 없이 장기 목표를 추구하죠.' },
    synergies: [
      { title: '장기적 안목', description: '흔들림 없이 장기 목표 추구.' },
      { title: '신뢰받는 전략가', description: '말보다 결과로 보여줘요.' }
    ],
    conflicts: [
      { title: '변화 거부', description: '둘 다 자기 방식 고수.', solution: '유연함을 기르세요.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로 하세요.' }
    ],
    loveCombo: { style: '안정적 파트너십', bestMatch: '火 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: '경영, 투자, 부동산, 컨설팅', strength: '장기 관점의 리더', weakness: '빠른 변화 대응 약함' },
    coreAdvice: '안정 속에서도 변화를 받아들이세요.'
  },

  {
    dayMaster: '戊', mbti: 'ISTP',
    harmony: { score: 65, summary: '실용적 안정감', description: '戊土의 안정과 ISTP의 실용성이 만났어요. 현실적으로 문제를 해결하죠.' },
    synergies: [
      { title: '실용적 해결', description: '문제를 현실적으로 해결.' },
      { title: '독립적 실행', description: '남에게 의존하지 않아요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' },
      { title: '속도 차이', description: 'ISTP는 즉흥적, 戊土는 계획적.', solution: '서로의 방식 존중.' }
    ],
    loveCombo: { style: '자유롭고 안정적인 연애', bestMatch: '火 기운 + 감정형(F)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '기술, 건설, 농업, 엔지니어링', strength: '실용적 능력', weakness: '팀 협업 부담' },
    coreAdvice: '안정과 자유의 균형을 찾으세요.'
  },

  {
    dayMaster: '戊', mbti: 'ISFP',
    harmony: { score: 72, summary: '산 위의 꽃', description: '戊土의 안정과 ISFP의 감성이 만났어요. 안정 속에서 아름다움을 찾죠.' },
    synergies: [
      { title: '안정적 감성', description: '안정 속에서 아름다움을 찾아요.' },
      { title: '조용한 조화', description: '평화롭게 어울려요.' }
    ],
    conflicts: [
      { title: '표현 차이', description: '戊土는 행동으로, ISFP는 감정으로.', solution: '서로 방식 이해.' },
      { title: '결정 방식', description: '戊土는 논리, ISFP는 감정으로 결정.', solution: '둘 다 고려하세요.' }
    ],
    loveCombo: { style: '따뜻하고 안정적인 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '감정 소통 연습' },
    careerCombo: { idealPath: '농업, 원예, 공예, 인테리어', strength: '안정적으로 아름다움을', weakness: '경쟁적 환경 부담' },
    coreAdvice: '안정 속에서 감성을 표현하세요.'
  },

  {
    dayMaster: '戊', mbti: 'INFP',
    harmony: { score: 62, summary: '이상을 품은 대지', description: '戊土의 현실감과 INFP의 이상이 만났어요. 이상을 현실적으로 추구해요.' },
    synergies: [
      { title: '착실한 이상 추구', description: '이상을 현실적으로 추구.' },
      { title: '깊이 있는 안정', description: '표면 아래 깊은 세계가 있어요.' }
    ],
    conflicts: [
      { title: '현실 vs 이상', description: '戊土는 현실적, INFP는 이상적.', solution: '균형을 찾으세요.' },
      { title: '속도 차이', description: '戊土는 느리고 확실하게, INFP는 영감대로.', solution: '서로 방식 존중.' }
    ],
    loveCombo: { style: '안정적이지만 템포 다른 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '서로 방식 존중' },
    careerCombo: { idealPath: '교육, 복지, 환경, 사회적 기업', strength: '이상을 현실에서 실현', weakness: '빠른 변화 부담' },
    coreAdvice: '이상과 현실의 다리를 놓으세요.'
  },

  {
    dayMaster: '戊', mbti: 'INTP',
    harmony: { score: 60, summary: '분석하는 산', description: '戊土의 안정과 INTP의 분석력이 만났어요. 안정적으로 깊이 분석하죠.' },
    synergies: [
      { title: '깊은 분석', description: '안정적으로 깊이 분석.' },
      { title: '신중한 판단', description: '충분히 생각하고 결정해요.' }
    ],
    conflicts: [
      { title: '실행 vs 분석', description: '戊土는 현상 유지, INTP는 분석만.', solution: '행동으로 옮기세요.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '조용하고 안정적인 연애', bestMatch: '火 기운 + 감정형(F)', warning: '감정 소통 필요' },
    careerCombo: { idealPath: '연구, 분석, 컨설팅, 기획', strength: '안정적인 분석가', weakness: '변화 대응 약함' },
    coreAdvice: '분석을 행동으로 옮기세요.'
  },

  {
    dayMaster: '戊', mbti: 'ESTP',
    harmony: { score: 58, summary: '안정과 모험', description: '戊土의 안정과 ESTP의 행동력이 만났어요. 서로 다르지만 보완 가능해요.' },
    synergies: [
      { title: '실용적 행동', description: '안정 기반 위에서 행동.' },
      { title: '위기 대응', description: '어떤 상황에서도 대처해요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ESTP는 빠르고 戊土는 느려요.', solution: '템포 존중.' },
      { title: '변화 vs 안정', description: 'ESTP는 자극을, 戊土는 안정을 원해요.', solution: '균형을 찾으세요.' }
    ],
    loveCombo: { style: '안정과 재미의 균형', bestMatch: '水 기운 + 감정형(F)', warning: '속도 맞추세요' },
    careerCombo: { idealPath: '부동산, 건설 관리, 영업', strength: '안정적 실행력', weakness: '빠른 변화 부담' },
    coreAdvice: '안정 속에서도 행동하세요.'
  },

  {
    dayMaster: '戊', mbti: 'ESFP',
    harmony: { score: 65, summary: '산 위의 축제', description: '戊土의 안정과 ESFP의 밝은 에너지가 만났어요. 안정 속에서 즐거움을 찾죠.' },
    synergies: [
      { title: '안정적 즐거움', description: '안정 속에서 즐거움을.' },
      { title: '따뜻한 분위기', description: '사람들을 편안하게 해요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ESFP는 활발하고 戊土는 조용해요.', solution: '균형을 찾으세요.' },
      { title: '깊이 차이', description: 'ESFP는 가볍게, 戊土는 깊게.', solution: '둘 다 필요해요.' }
    ],
    loveCombo: { style: '안정적이면서 재미있는 사랑', bestMatch: '金 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '서비스업, 관광, 농업, 식음료', strength: '안정적으로 즐거움을 줘요', weakness: '빠른 변화 부담' },
    coreAdvice: '안정과 즐거움의 균형을 찾으세요.'
  },

  {
    dayMaster: '戊', mbti: 'ENFP',
    harmony: { score: 62, summary: '가능성을 품은 대지', description: '戊土의 안정과 ENFP의 열정이 만났어요. 열정을 현실에서 실현해요.' },
    synergies: [
      { title: '안정적 열정', description: '안정 기반 위에서 가능성 탐구.' },
      { title: '현실적 이상', description: '꿈을 현실로 만들어요.' }
    ],
    conflicts: [
      { title: '템포 차이', description: 'ENFP는 빠르고 戊土는 느려요.', solution: '균형을 찾으세요.' },
      { title: '방식 차이', description: 'ENFP는 영감, 戊土는 계획대로.', solution: '서로 보완하세요.' }
    ],
    loveCombo: { style: '안정과 열정의 조화', bestMatch: '金 기운 + 판단형(J)', warning: '속도 존중' },
    careerCombo: { idealPath: '교육, 환경, 사회적 기업, 마케팅', strength: '열정을 현실에서 실현', weakness: '빠른 변화 부담' },
    coreAdvice: '열정에 안정을 더하세요.'
  },

  {
    dayMaster: '戊', mbti: 'ENTP',
    harmony: { score: 55, summary: '안정과 도전의 긴장', description: '戊土의 안정과 ENTP의 도전이 만났어요. 보완될 수 있지만 방식이 달라요.' },
    synergies: [
      { title: '안정적 혁신', description: '기반을 유지하며 새로움을.' },
      { title: '현실적 도전', description: '실현 가능한 도전을 해요.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: 'ENTP는 변화를, 戊土는 안정을.', solution: '핵심 유지, 방법 변화.' },
      { title: '속도 차이', description: 'ENTP는 빠르고 戊土는 느려요.', solution: '템포를 조율하세요.' }
    ],
    loveCombo: { style: '안정과 도전의 줄다리기', bestMatch: '水 기운 + 감정형(F)', warning: '방식 존중' },
    careerCombo: { idealPath: '부동산 개발, 인프라, 컨설팅', strength: '안정 위에서 혁신', weakness: '빠른 변화 부담' },
    coreAdvice: '안정과 변화의 균형을 찾으세요.'
  },

  {
    dayMaster: '戊', mbti: 'ESTJ',
    harmony: { score: 90, summary: '산처럼 든든한 관리자', description: '戊土의 안정과 ESTJ의 관리력이 완벽하게 맞아요. 흔들림 없이 조직을 관리하죠.' },
    synergies: [
      { title: '철저한 관리', description: '흔들림 없이 조직을 관리.' },
      { title: '신뢰받는 리더', description: '책임감으로 주변의 신뢰를 얻어요.' }
    ],
    conflicts: [
      { title: '이중 고집', description: '둘 다 안 꺾여요.', solution: '가끔 양보하세요.' },
      { title: '변화 거부', description: '새로운 방식을 받아들이기 어려워요.', solution: '효율적인 변화는 수용하세요.' }
    ],
    loveCombo: { style: '안정적이고 책임감 있는 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: '경영, 관리직, 공무원, 금융', strength: '최고의 관리자', weakness: '유연성 부족' },
    coreAdvice: '안정적 리더십에 유연함을 더하세요.'
  },

  {
    dayMaster: '戊', mbti: 'ESFJ',
    harmony: { score: 80, summary: '따뜻하게 지켜주는 산', description: '戊土의 안정과 ESFJ의 배려심이 만났어요. 든든하게 주변을 챙기죠.' },
    synergies: [
      { title: '든든한 돌봄', description: '안정적으로 주변을 챙겨요.' },
      { title: '따뜻한 안정감', description: '사람들이 편안해해요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '둘 다 남을 위해 너무 많이.', solution: '자기 관리도.' },
      { title: '변화 거부', description: '익숙한 것만 고집해요.', solution: '새로운 시도도 해보세요.' }
    ],
    loveCombo: { style: '안정적이고 따뜻한 사랑', bestMatch: '金 기운 + 사고형(T)', warning: '자신도 챙기세요' },
    careerCombo: { idealPath: '관리, 교육, 복지, 서비스업', strength: '안정적으로 사람을 돌봐요', weakness: '어려운 결정 부담' },
    coreAdvice: '남을 챙기면서 자신도 챙기세요.'
  },

  {
    dayMaster: '戊', mbti: 'ENFJ',
    harmony: { score: 75, summary: '사람을 품는 큰 산', description: '戊土의 포용력과 ENFJ의 리더십이 만났어요. 흔들림 없이 사람들을 이끌어요.' },
    synergies: [
      { title: '안정적 리더십', description: '흔들림 없이 사람들을 이끌어요.' },
      { title: '따뜻한 영향력', description: '주변에 긍정적 영향을 줘요.' }
    ],
    conflicts: [
      { title: '과한 헌신', description: '둘 다 남을 위해 너무 많이.', solution: '경계를 세우세요.' },
      { title: '속도 차이', description: 'ENFJ는 적극적, 戊土는 천천히.', solution: '템포를 조율하세요.' }
    ],
    loveCombo: { style: '함께 성장하는 안정적 사랑', bestMatch: '金 기운 + 사고형(T)', warning: '자기 관리도' },
    careerCombo: { idealPath: '교육, 경영, 사회복지, 비영리', strength: '안정적으로 이끌어요', weakness: '쉬는 시간 부족' },
    coreAdvice: '이끄는 것만큼 쉬는 것도 중요해요.'
  },

  {
    dayMaster: '戊', mbti: 'ENTJ',
    harmony: { score: 82, summary: '강력한 기반 위의 리더십', description: '戊土의 안정과 ENTJ의 야망이 만났어요. 흔들림 없이 목표를 향해 가죠.' },
    synergies: [
      { title: '안정적 추진력', description: '흔들림 없이 목표를 향해.' },
      { title: '신뢰받는 리더', description: '안정감으로 사람들이 따라와요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ENTJ는 빠르고 戊土는 느려요.', solution: '균형을 찾으세요.' },
      { title: '방식 차이', description: 'ENTJ는 공격적, 戊土는 수비적.', solution: '역할을 나누세요.' }
    ],
    loveCombo: { style: '파워 커플. 함께 성공해요.', bestMatch: '水 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: 'CEO, 부동산, 인프라, 금융', strength: '안정적 기반 위의 리더', weakness: '빠른 변화 대응 약함' },
    coreAdvice: '안정적 기반 위에서 더 높이 올라가세요.'
  },

  // ========================================
  // 己土 (기토) × 16 MBTI
  // ========================================

  {
    dayMaster: '己', mbti: 'ISTJ',
    harmony: { score: 78, summary: '꼼꼼한 논밭 지킴이', description: '己土의 실용성과 ISTJ의 체계성이 만났어요. 세세한 것까지 챙기죠.' },
    synergies: [
      { title: '꼼꼼한 관리', description: '세세한 것까지 챙겨요.' },
      { title: '신뢰받는 실무자', description: '맡은 일은 확실히 해내요.' }
    ],
    conflicts: [
      { title: '융통성 부족', description: '둘 다 규칙대로만.', solution: '가끔 유연하게.' },
      { title: '변화 거부', description: '새로운 방식을 받아들이기 어려워요.', solution: '효율적인 변화는 수용하세요.' }
    ],
    loveCombo: { style: '안정적이고 실용적인 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '로맨스도 필요' },
    careerCombo: { idealPath: '행정, 농업, 관리, 회계', strength: '꼼꼼한 실무자', weakness: '창의적 업무 부담' },
    coreAdvice: '실용성에 유연함을 더하세요.'
  },

  {
    dayMaster: '己', mbti: 'ISFJ',
    harmony: { score: 88, summary: '세심하게 돌보는 대지', description: '己土의 양육 본능과 ISFJ의 배려심이 완벽하게 맞아요. 세세한 것까지 돌봐요.' },
    synergies: [
      { title: '최고의 케어러', description: '세세한 것까지 돌봐요.' },
      { title: '따뜻한 헌신', description: '진심으로 사람들을 챙겨요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '둘 다 자기보다 남을 먼저.', solution: '자기 관리 필수.' },
      { title: '의견 부재', description: '둘 다 양보만 해요.', solution: '"나는 이게 좋아"라고 말하세요.' }
    ],
    loveCombo: { style: '따뜻하게 돌봐주는 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '자신도 챙기세요' },
    careerCombo: { idealPath: '간호, 교육, 복지, 케어', strength: '최고의 돌봄 전문가', weakness: '경쟁적 환경 부담' },
    coreAdvice: '남을 돌보는 만큼 자신도 돌보세요.'
  },

  {
    dayMaster: '己', mbti: 'INFJ',
    harmony: { score: 75, summary: '이상을 키우는 논밭', description: '己土의 양육력과 INFJ의 비전이 만났어요. 가치 있는 것을 키워요.' },
    synergies: [
      { title: '의미 있는 성장', description: '가치 있는 것을 키워요.' },
      { title: '깊이 있는 돌봄', description: '마음까지 챙겨요.' }
    ],
    conflicts: [
      { title: '현실 vs 이상', description: '己土는 현실적, INFJ는 이상적.', solution: '균형을 찾으세요.' },
      { title: '속도 차이', description: 'INFJ는 비전을, 己土는 현실을.', solution: '서로 보완하세요.' }
    ],
    loveCombo: { style: '함께 성장하는 깊은 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '현실적 대화도 필요' },
    careerCombo: { idealPath: '교육, 상담, 사회복지, 비영리', strength: '사람을 키우는 능력', weakness: '경쟁적 환경 부담' },
    coreAdvice: '이상을 현실에서 키우세요.'
  },

  {
    dayMaster: '己', mbti: 'INTJ',
    harmony: { score: 62, summary: '전략적 농부', description: '己土의 실용성과 INTJ의 전략이 만났어요. 현실에서 작동하는 전략을 세워요.' },
    synergies: [
      { title: '실용적 전략', description: '현실에서 작동하는 전략.' },
      { title: '꼼꼼한 계획', description: '디테일까지 챙겨요.' }
    ],
    conflicts: [
      { title: '규모 차이', description: 'INTJ는 큰 그림, 己土는 디테일.', solution: '서로 보완.' },
      { title: '속도 차이', description: 'INTJ는 빠르게, 己土는 천천히.', solution: '템포를 조율하세요.' }
    ],
    loveCombo: { style: '실용적 파트너십', bestMatch: '火 기운 + 감정형(F)', warning: '감정도 중요' },
    careerCombo: { idealPath: '기획, 컨설팅, 관리, 분석', strength: '실용적 전략가', weakness: '대담한 도전 부담' },
    coreAdvice: '큰 그림과 디테일 모두 챙기세요.'
  },

  {
    dayMaster: '己', mbti: 'ISTP',
    harmony: { score: 65, summary: '실용적인 대지', description: '己土의 실용성과 ISTP의 기술력이 만났어요. 현실적으로 문제를 해결하죠.' },
    synergies: [
      { title: '실용적 해결', description: '현실적으로 문제 해결.' },
      { title: '손재주', description: '만드는 것을 잘해요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' },
      { title: '감정 표현', description: '둘 다 감정 표현이 서툴러요.', solution: '가끔은 느끼는 대로 말해보세요.' }
    ],
    loveCombo: { style: '자유롭고 실용적인 연애', bestMatch: '火 기운 + 감정형(F)', warning: '감정 표현 필요' },
    careerCombo: { idealPath: '기술, 농업, 수공예, 제조', strength: '실용적 기술력', weakness: '대인관계 부담' },
    coreAdvice: '실용성에 소통을 더하세요.'
  },

  {
    dayMaster: '己', mbti: 'ISFP',
    harmony: { score: 80, summary: '아름다운 논밭', description: '己土의 양육력과 ISFP의 감성이 만났어요. 아름다운 것을 키워요.' },
    synergies: [
      { title: '감성적 성장', description: '아름다운 것을 키워요.' },
      { title: '조용한 창조', description: '말없이 만들어내요.' }
    ],
    conflicts: [
      { title: '결정 어려움', description: '둘 다 우유부단.', solution: '기한 정해 결정.' },
      { title: '현실 회피', description: '어려운 문제를 피하려 해요.', solution: '작은 것부터 직면하세요.' }
    ],
    loveCombo: { style: '따뜻하고 감성적인 사랑', bestMatch: '金 기운 + 외향형(E)', warning: '결단력 필요' },
    careerCombo: { idealPath: '원예, 디자인, 케어, 예술', strength: '아름다움을 키워요', weakness: '경쟁적 환경 부담' },
    coreAdvice: '감성을 현실에서 표현하세요.'
  },

  {
    dayMaster: '己', mbti: 'INFP',
    harmony: { score: 72, summary: '이상을 품은 논밭', description: '己土의 현실감과 INFP의 이상이 만났어요. 꿈을 현실에서 키워요.' },
    synergies: [
      { title: '이상의 현실화', description: '꿈을 현실에서 키워요.' },
      { title: '진정성 있는 돌봄', description: '진심으로 가치를 키워요.' }
    ],
    conflicts: [
      { title: '현실 vs 이상', description: '己土는 현실적, INFP는 이상적.', solution: '균형을 찾으세요.' },
      { title: '결정 회피', description: '둘 다 결정을 미뤄요.', solution: '기한을 정해서 결정하세요.' }
    ],
    loveCombo: { style: '따뜻하고 깊은 사랑', bestMatch: '金 기운 + 외향형(E)', warning: '현실적 대화도 필요' },
    careerCombo: { idealPath: '교육, 예술, 사회복지, 환경', strength: '이상을 현실에서 키워요', weakness: '경쟁적 환경 부담' },
    coreAdvice: '이상을 현실에서 키우세요.'
  },

  {
    dayMaster: '己', mbti: 'INTP',
    harmony: { score: 58, summary: '분석하는 농부', description: '己土의 실용성과 INTP의 분석력이 만났어요. 현실에서 작동하는 분석을 해요.' },
    synergies: [
      { title: '실용적 분석', description: '현실에서 작동하는 분석.' },
      { title: '깊이 있는 탐구', description: '파고들어서 알아내요.' }
    ],
    conflicts: [
      { title: '실행 vs 분석', description: 'INTP는 생각만, 己土는 현상 유지만.', solution: '행동으로 옮기세요.' },
      { title: '소통 부족', description: '둘 다 말이 적어요.', solution: '중요한 건 말로.' }
    ],
    loveCombo: { style: '조용하고 실용적인 연애', bestMatch: '火 기운 + 감정형(F)', warning: '감정 소통 필요' },
    careerCombo: { idealPath: '연구, 분석, 농업기술, 데이터', strength: '실용적 분석가', weakness: '대인관계 부담' },
    coreAdvice: '분석을 실용으로 연결하세요.'
  },

  {
    dayMaster: '己', mbti: 'ESTP',
    harmony: { score: 55, summary: '모험하는 농부', description: '己土의 안정과 ESTP의 행동력이 만났어요. 서로 다르지만 보완 가능해요.' },
    synergies: [
      { title: '실용적 행동', description: '기반 위에서 행동.' },
      { title: '현실적 도전', description: '실현 가능한 도전을 해요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ESTP는 빠르고 己土는 느려요.', solution: '균형을 찾으세요.' },
      { title: '방식 차이', description: 'ESTP는 행동, 己土는 준비.', solution: '서로 보완하세요.' }
    ],
    loveCombo: { style: '안정과 재미의 만남', bestMatch: '水 기운 + 감정형(F)', warning: '속도 맞추세요' },
    careerCombo: { idealPath: '농업 비즈니스, 부동산, 영업', strength: '실용적 실행력', weakness: '빠른 변화 부담' },
    coreAdvice: '안정 속에서도 행동하세요.'
  },

  {
    dayMaster: '己', mbti: 'ESFP',
    harmony: { score: 68, summary: '즐거운 논밭', description: '己土의 돌봄과 ESFP의 밝은 에너지가 만났어요. 돌보면서 즐거움을 줘요.' },
    synergies: [
      { title: '따뜻한 즐거움', description: '돌보면서 즐거움을 줘요.' },
      { title: '친근한 분위기', description: '사람들이 편안해해요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ESFP는 밖으로, 己土는 안으로.', solution: '균형을 찾으세요.' },
      { title: '깊이 차이', description: 'ESFP는 가볍게, 己土는 깊게.', solution: '둘 다 필요해요.' }
    ],
    loveCombo: { style: '따뜻하고 재미있는 사랑', bestMatch: '金 기운 + 판단형(J)', warning: '깊이도 필요' },
    careerCombo: { idealPath: '서비스업, 케어, 교육, 식음료', strength: '따뜻하게 즐거움을 줘요', weakness: '깊이 부족 가능' },
    coreAdvice: '즐거움과 돌봄의 균형을 찾으세요.'
  },

  {
    dayMaster: '己', mbti: 'ENFP',
    harmony: { score: 70, summary: '가능성을 키우는 논밭', description: '己土의 양육력과 ENFP의 열정이 만났어요. 가능성을 키워요.' },
    synergies: [
      { title: '성장 지원', description: '가능성을 키워요.' },
      { title: '따뜻한 열정', description: '진심으로 응원해요.' }
    ],
    conflicts: [
      { title: '템포 차이', description: 'ENFP는 빠르고 己土는 느려요.', solution: '균형을 찾으세요.' },
      { title: '마무리 부족', description: '둘 다 끝내기 어려워요.', solution: '작은 목표로 나눠서 완성하세요.' }
    ],
    loveCombo: { style: '함께 성장하는 열정적 사랑', bestMatch: '金 기운 + 판단형(J)', warning: '속도 맞추세요' },
    careerCombo: { idealPath: '교육, 코칭, 사회적 기업, 환경', strength: '사람을 키우는 능력', weakness: '빠른 변화 부담' },
    coreAdvice: '열정을 현실에서 키우세요.'
  },

  {
    dayMaster: '己', mbti: 'ENTP',
    harmony: { score: 52, summary: '도전하는 농부', description: '己土의 안정과 ENTP의 도전이 만났어요. 서로 많이 달라요.' },
    synergies: [
      { title: '실용적 혁신', description: '기반을 유지하며 새로움을.' },
      { title: '현실적 도전', description: '실현 가능한 도전을 해요.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: 'ENTP는 변화를, 己土는 안정을.', solution: '균형을 찾으세요.' },
      { title: '속도 차이', description: 'ENTP는 빠르고 己土는 느려요.', solution: '서로 템포 존중.' }
    ],
    loveCombo: { style: '안정과 도전의 줄다리기', bestMatch: '水 기운 + 감정형(F)', warning: '방식 존중' },
    careerCombo: { idealPath: '농업 혁신, 사회적 기업, 스타트업', strength: '실용적 혁신가', weakness: '빠른 변화 부담' },
    coreAdvice: '안정과 혁신의 균형을 찾으세요.'
  },

  {
    dayMaster: '己', mbti: 'ESTJ',
    harmony: { score: 75, summary: '체계적인 농부', description: '己土의 실용성과 ESTJ의 관리력이 만났어요. 꼼꼼하게 관리해요.' },
    synergies: [
      { title: '체계적 관리', description: '꼼꼼하게 관리해요.' },
      { title: '신뢰받는 실무', description: '맡은 일은 확실히 해내요.' }
    ],
    conflicts: [
      { title: '주도권', description: 'ESTJ가 강하면 己土가 묻혀요.', solution: '역할 나누세요.' },
      { title: '유연성 부족', description: '둘 다 규칙대로만.', solution: '가끔 유연하게.' }
    ],
    loveCombo: { style: '실용적이고 안정적인 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '감정도 챙기세요' },
    careerCombo: { idealPath: '관리, 농업, 행정, 금융', strength: '체계적 실무자', weakness: '창의적 업무 부담' },
    coreAdvice: '체계 속에서도 유연함을 가지세요.'
  },

  {
    dayMaster: '己', mbti: 'ESFJ',
    harmony: { score: 85, summary: '따뜻하게 돌보는 대지', description: '己土의 양육력과 ESFJ의 배려심이 완벽하게 맞아요. 세심하게 돌봐요.' },
    synergies: [
      { title: '최고의 케어', description: '세심하게 돌봐요.' },
      { title: '따뜻한 분위기', description: '주변을 편안하게 만들어요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '둘 다 남을 위해 너무 많이.', solution: '자기 관리도.' },
      { title: '평가 의존', description: '남들 시선에 너무 신경 써요.', solution: '자기 기준도 세우세요.' }
    ],
    loveCombo: { style: '서로 챙기는 따뜻한 사랑', bestMatch: '金 기운 + 사고형(T)', warning: '자신도 챙기세요' },
    careerCombo: { idealPath: '교육, 케어, 서비스업, 복지', strength: '최고의 돌봄 전문가', weakness: '어려운 결정 부담' },
    coreAdvice: '남을 돌보면서 자신도 돌보세요.'
  },

  {
    dayMaster: '己', mbti: 'ENFJ',
    harmony: { score: 78, summary: '성장을 키우는 대지', description: '己土의 양육력과 ENFJ의 리더십이 만났어요. 사람들을 키워요.' },
    synergies: [
      { title: '성장 지원', description: '사람들을 키워요.' },
      { title: '따뜻한 리더십', description: '강요 없이 이끌어요.' }
    ],
    conflicts: [
      { title: '과한 헌신', description: '둘 다 남을 위해 너무 많이.', solution: '경계를 세우세요.' },
      { title: '에너지 차이', description: 'ENFJ는 적극적, 己土는 조용히.', solution: '역할 나누세요.' }
    ],
    loveCombo: { style: '함께 성장하는 사랑', bestMatch: '金 기운 + 사고형(T)', warning: '자기 관리도' },
    careerCombo: { idealPath: '교육, 코칭, 사회복지, 비영리', strength: '사람을 성장시켜요', weakness: '쉬는 시간 부족' },
    coreAdvice: '키우는 것만큼 쉬는 것도 중요해요.'
  },

  {
    dayMaster: '己', mbti: 'ENTJ',
    harmony: { score: 55, summary: '강함과 부드러움', description: '己土의 부드러움과 ENTJ의 강함이 만났어요. 서로 많이 달라요.' },
    synergies: [
      { title: '보완적 팀워크', description: 'ENTJ가 이끌면 己土가 지원.' },
      { title: '세심한 실행', description: '큰 전략을 세심하게 실행해요.' }
    ],
    conflicts: [
      { title: '압도당함', description: 'ENTJ의 강함에 己土가 위축.', solution: 'ENTJ가 공간을 줘야.' },
      { title: '방식 충돌', description: 'ENTJ는 빠르고 강하게, 己土는 천천히.', solution: '역할 나누세요.' }
    ],
    loveCombo: { style: '보호받지만 통제로 느껴질 수', bestMatch: '水 기운 + 감정형(F)', warning: 'ENTJ가 존중 필요' },
    careerCombo: { idealPath: '경영 지원, 행정, 비서, 관리', strength: '강한 리더를 지원', weakness: '주도적 역할 부담' },
    coreAdvice: '부드러움도 강점이에요.'
  }
];
