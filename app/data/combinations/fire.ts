// 火 오행: 丙火, 丁火 × 16 MBTI = 32개 조합

import { CombinationText } from './types';

export const fireCombinations: CombinationText[] = [
  // ========================================
  // 丙火 (병화) × 16 MBTI
  // ========================================

  {
    dayMaster: '丙', mbti: 'ISTJ',
    harmony: { score: 60, summary: '열정과 체계의 충돌', description: '丙火의 열정과 ISTJ의 체계성이 만났어요. 서로 보완될 수 있지만, 방식이 너무 달라서 갈등이 생기기 쉬워요.' },
    synergies: [
      { title: '체계적 열정', description: '계획 안에서 에너지를 발산해요.' },
      { title: '신뢰받는 추진력', description: '책임감 있게 밀고 나가요.' }
    ],
    conflicts: [
      { title: '속도 충돌', description: '丙火는 빨리, ISTJ는 천천히 확실하게.', solution: '역할 분담하세요.' },
      { title: '새로움 vs 전통', description: '丙火는 새 것, ISTJ는 검증된 것을 원해요.', solution: '핵심은 유지하되 방법은 업데이트.' }
    ],
    loveCombo: { style: '열정적이면서 안정적인 사랑을 원하지만 균형 잡기 어려움', bestMatch: '水 기운 + 감정형(F)', warning: '서로의 방식을 존중하세요' },
    careerCombo: { idealPath: '영업 + 관리를 동시에 하는 역할', strength: '추진력과 체계를 겸비하면 강함', weakness: '내적 갈등이 에너지를 소모' },
    coreAdvice: '다른 두 힘이 공존해요. 상황에 따라 어느 쪽을 쓸지 선택하세요.'
  },

  {
    dayMaster: '丙', mbti: 'ISFJ',
    harmony: { score: 65, summary: '따뜻한 태양의 돌봄', description: '丙火의 밝은 에너지와 ISFJ의 배려심이 만났어요. 주변을 따뜻하게 비추면서 세심하게 챙기죠.' },
    synergies: [
      { title: '따뜻한 에너지', description: '밝은 기운으로 사람들을 편안하게 해요.' },
      { title: '세심한 열정', description: '열정적이면서도 디테일을 챙겨요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: '丙火는 빠르고 ISFJ는 꼼꼼하게 가요.', solution: '중요한 건 시간을 들이세요.' },
      { title: '주목 욕구', description: '丙火는 빛나고 싶은데 ISFJ는 뒤에 있고 싶어요.', solution: '각자의 역할을 인정하세요.' }
    ],
    loveCombo: { style: '따뜻하게 돌봐주는 사랑', bestMatch: '水 기운 + 외향형(E)', warning: 'ISFJ가 지치지 않게 배려하세요' },
    careerCombo: { idealPath: '교육, 서비스업, 의료에서 리더 역할', strength: '따뜻하게 이끄는 능력', weakness: '혼자 다 하려다 지침' },
    coreAdvice: '당신의 밝은 에너지는 주변을 따뜻하게 해요. 너무 혼자 짊어지지 마세요.'
  },

  {
    dayMaster: '丙', mbti: 'INFJ',
    harmony: { score: 72, summary: '비전을 밝히는 태양', description: '丙火의 열정과 INFJ의 비전이 만났어요. 이상을 향한 강한 추진력이 있죠.' },
    synergies: [
      { title: '비전 실현', description: 'INFJ의 이상을 丙火의 에너지로 실현해요.' },
      { title: '영감 주는 리더', description: '사람들에게 희망을 주면서 이끌어요.' }
    ],
    conflicts: [
      { title: '완벽주의', description: '둘 다 이상이 높아서 현실에서 좌절해요.', solution: '80%도 충분해요.' },
      { title: '에너지 소진', description: '너무 많이 쏟다가 탈진해요.', solution: '쉬는 것도 일이에요.' }
    ],
    loveCombo: { style: '깊고 열정적인 사랑', bestMatch: '水 기운 + 감각형(S)', warning: '이상화하다 실망하지 않게 현실도 보세요' },
    careerCombo: { idealPath: '교육, 사회운동, 비영리, 코칭', strength: '사람들에게 영감을 줘요', weakness: '현실적 업무에서 동력 잃기 쉬움' },
    coreAdvice: '이상을 향해 달리되 가끔은 멈춰서 쉬세요. 마라톤이에요.'
  },

  {
    dayMaster: '丙', mbti: 'INTJ',
    harmony: { score: 78, summary: '뜨거운 전략가', description: '丙火의 열정과 INTJ의 전략이 만났어요. 목표를 향해 뜨겁게 달리면서도 최적의 경로를 찾죠.' },
    synergies: [
      { title: '전략적 추진력', description: '가장 효율적인 방법으로 목표를 달성해요.' },
      { title: '독립적 리더십', description: '남에게 의존하지 않고 길을 개척해요.' }
    ],
    conflicts: [
      { title: '지나친 강함', description: '둘 다 강해서 주변이 버거워해요.', solution: '강도를 조절하세요.' },
      { title: '감정 무시', description: '효율만 보다 사람을 놓쳐요.', solution: '팀원들의 감정도 전략의 일부예요.' }
    ],
    loveCombo: { style: '함께 성공을 향해 달리는 파트너십', bestMatch: '水 기운 + 감정형(F)', warning: '연인도 프로젝트가 아니에요' },
    careerCombo: { idealPath: 'CEO, 스타트업 창업, 전략 컨설팅', strength: '비전과 실행력을 겸비', weakness: '사람 관리에 약할 수 있음' },
    coreAdvice: '당신의 추진력은 대단해요. 사람도 챙기면 더 멀리 가요.'
  },

  {
    dayMaster: '丙', mbti: 'ISTP',
    harmony: { score: 62, summary: '뜨거운 행동파', description: '丙火의 열정과 ISTP의 실용성이 만났어요. 빠르게 행동하고 결과를 내죠.' },
    synergies: [
      { title: '즉각적 실행', description: '생각과 동시에 움직여요.' },
      { title: '위기 대응력', description: '어떤 상황에서도 해결책을 찾아요.' }
    ],
    conflicts: [
      { title: '온도 차이', description: '丙火는 뜨겁고 ISTP는 차가워요.', solution: '서로의 온도를 인정하세요.' },
      { title: '표현 차이', description: '丙火는 드러내고 ISTP는 숨겨요.', solution: '각자의 방식을 존중하세요.' }
    ],
    loveCombo: { style: '자유롭고 활동적인 연애', bestMatch: '水 기운 + 감정형(F)', warning: '감정 표현도 가끔은 필요' },
    careerCombo: { idealPath: '스포츠, 응급의료, 영업, 기술', strength: '빠른 판단과 실행력', weakness: '장기 계획이나 팀 협업 약함' },
    coreAdvice: '행동력은 강점이에요. 가끔 멈춰서 방향을 확인하세요.'
  },

  {
    dayMaster: '丙', mbti: 'ISFP',
    harmony: { score: 70, summary: '따뜻하게 비추는 예술가', description: '丙火의 밝은 에너지와 ISFP의 감성이 만났어요. 따뜻하면서도 아름다운 것을 추구하죠.' },
    synergies: [
      { title: '감성적 열정', description: '아름다운 것을 향한 에너지가 있어요.' },
      { title: '따뜻한 표현', description: '마음을 밝고 따뜻하게 표현해요.' }
    ],
    conflicts: [
      { title: '강도 차이', description: '丙火의 강한 에너지가 ISFP에게 부담이 될 수 있어요.', solution: '丙火가 강도를 조절해주세요.' },
      { title: '주목 욕구', description: '丙火는 빛나고 싶은데 ISFP는 조용히 있고 싶어요.', solution: '각자의 무대가 있어요.' }
    ],
    loveCombo: { style: '감성적이고 따뜻한 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '丙火가 ISFP를 압도하지 않게 조심' },
    careerCombo: { idealPath: '예술, 디자인, 엔터테인먼트', strength: '열정과 감성을 겸비', weakness: '경쟁적인 환경은 맞지 않을 수 있음' },
    coreAdvice: '당신의 따뜻함으로 세상을 아름답게 밝히세요.'
  },

  {
    dayMaster: '丙', mbti: 'INFP',
    harmony: { score: 68, summary: '이상을 밝히는 열정', description: '丙火의 열정과 INFP의 이상주의가 만났어요. 가치 있는 일을 향해 뜨겁게 달리죠.' },
    synergies: [
      { title: '가치 실현', description: '소중한 것을 위해 적극적으로 행동해요.' },
      { title: '진정성 있는 열정', description: '가식 없이 진심으로 나아가요.' }
    ],
    conflicts: [
      { title: '현실 vs 이상', description: '丙火의 현실적 행동과 INFP의 이상이 충돌해요.', solution: '이상을 현실적 단계로 나눠보세요.' },
      { title: '감정 소진', description: '너무 많이 쏟다가 탈진해요.', solution: '경계를 세우세요.' }
    ],
    loveCombo: { style: '깊고 진심 어린 사랑', bestMatch: '水 기운 + 외향형(E)', warning: '완벽한 사랑을 찾다 현실의 행복을 놓치지 마세요' },
    careerCombo: { idealPath: '예술, 사회운동, 교육, 상담', strength: '진정성이 사람들을 움직여요', weakness: '현실적 업무에서 동력 잃기 쉬움' },
    coreAdvice: '이상은 등대예요. 한 걸음씩 현실에서 나아가세요.'
  },

  {
    dayMaster: '丙', mbti: 'INTP',
    harmony: { score: 64, summary: '뜨거운 분석가', description: '丙火의 열정과 INTP의 분석력이 만났어요. 지적 탐구에 열정적으로 뛰어들죠.' },
    synergies: [
      { title: '열정적 탐구', description: '호기심에 에너지를 쏟아요.' },
      { title: '논리적 추진', description: '분석 후 확신 있게 실행해요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: '丙火는 당장 하고, INTP는 더 생각하고 싶어요.', solution: '생각할 시간과 행동할 시간을 나누세요.' },
      { title: '감정 vs 논리', description: '丙火는 열정, INTP는 논리가 앞서요.', solution: '둘 다 필요해요. 균형 맞추세요.' }
    ],
    loveCombo: { style: '지적 자극이 중요한 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '분석만 하지 말고 느끼세요' },
    careerCombo: { idealPath: '연구개발, 기획, 스타트업', strength: '아이디어에 추진력을 더해요', weakness: '반복 업무나 관계 관리 약함' },
    coreAdvice: '생각과 행동의 균형을 찾으세요. 둘 다 당신의 무기예요.'
  },

  {
    dayMaster: '丙', mbti: 'ESTP',
    harmony: { score: 88, summary: '불꽃 같은 액션 히어로', description: '丙火의 열정과 ESTP의 행동력이 폭발적으로 만났어요. 생각과 동시에 움직이고, 어떤 상황에서도 돌파해요.' },
    synergies: [
      { title: '폭발적 실행력', description: '결정하면 바로 움직여요.' },
      { title: '위기 돌파력', description: '어떤 상황에서도 해결책을 찾아요.' }
    ],
    conflicts: [
      { title: '과속 주의', description: '너무 빨라서 실수가 생길 수 있어요.', solution: '중요한 건 한 박자 쉬고 가세요.' },
      { title: '깊이 부족', description: '표면적인 것에만 머물 수 있어요.', solution: '가끔은 깊이 들어가보세요.' }
    ],
    loveCombo: { style: '재미있고 짜릿한 연애', bestMatch: '水 기운 + 판단형(J)', warning: '오래 가려면 깊이도 필요' },
    careerCombo: { idealPath: '영업, 스포츠, 창업, 엔터테인먼트', strength: '빠른 판단과 추진력이 무기', weakness: '꼼꼼한 관리나 장기 계획 약함' },
    coreAdvice: '속도는 당신의 무기예요. 가끔 브레이크도 밟으세요.'
  },

  {
    dayMaster: '丙', mbti: 'ESFP',
    harmony: { score: 90, summary: '눈부신 엔터테이너', description: '丙火의 카리스마와 ESFP의 밝은 에너지가 만났어요. 어디를 가든 주인공이고, 사람들을 즐겁게 해요.' },
    synergies: [
      { title: '스타성', description: '자연스럽게 주목받고 분위기를 이끌어요.' },
      { title: '긍정 에너지', description: '주변을 밝고 즐겁게 만들어요.' }
    ],
    conflicts: [
      { title: '진지함 부족', description: '항상 재미만 추구하다 깊이를 놓쳐요.', solution: '가끔은 진지한 대화도 하세요.' },
      { title: '인정 욕구', description: '주목받지 못하면 우울해져요.', solution: '내면의 가치도 키우세요.' }
    ],
    loveCombo: { style: '재미있고 열정적인 연애', bestMatch: '水 기운 + 판단형(J)', warning: '재미만으로는 오래 못 가요' },
    careerCombo: { idealPath: '연예, 마케팅, 이벤트, 인플루언서', strength: '사람들을 끄는 매력', weakness: '꾸준함이나 디테일 약함' },
    coreAdvice: '당신의 밝은 에너지는 선물이에요. 깊이까지 더하면 완벽해요.'
  },

  {
    dayMaster: '丙', mbti: 'ENFP',
    harmony: { score: 85, summary: '열정의 불꽃놀이', description: '丙火의 열정과 ENFP의 가능성 탐구가 만났어요. 새로운 것을 향해 뜨겁게 달리죠.' },
    synergies: [
      { title: '무한 열정', description: '좋아하는 일에 끝없이 에너지를 쏟아요.' },
      { title: '영감 주는 힘', description: '사람들에게 희망과 가능성을 보여줘요.' }
    ],
    conflicts: [
      { title: '집중 분산', description: '여러 곳에 관심이 분산돼요.', solution: '핵심 목표를 정하고 거기에 집중하세요.' },
      { title: '마무리 부족', description: '시작은 잘하는데 끝이 약해요.', solution: '끝내고 새로 시작하는 습관을.' }
    ],
    loveCombo: { style: '열정적이고 로맨틱한 사랑', bestMatch: '水 기운 + 판단형(J)', warning: '이상화하다 실망하지 않게 조심' },
    careerCombo: { idealPath: '스타트업, 마케팅, 교육, 크리에이티브', strength: '새로운 것을 시작하는 힘', weakness: '지루한 관리 업무 못함' },
    coreAdvice: '당신의 열정은 전염돼요. 한 곳에 집중하면 불가능이 없어요.'
  },

  {
    dayMaster: '丙', mbti: 'ENTP',
    harmony: { score: 82, summary: '뜨거운 혁신가', description: '丙火의 열정과 ENTP의 도전정신이 만났어요. 새로운 것을 개척하는 힘이 강하죠.' },
    synergies: [
      { title: '혁신적 추진력', description: '남들이 안 한 것을 시도하고 실현해요.' },
      { title: '설득력', description: '열정과 논리로 사람들을 움직여요.' }
    ],
    conflicts: [
      { title: '논쟁 과열', description: '둘 다 자기 주장이 강해서 충돌해요.', solution: '논쟁과 싸움은 달라요. 조절하세요.' },
      { title: '마무리 부족', description: '새 것에 끌려서 기존 것을 마무리 못해요.', solution: '하나 끝내고 다음으로 가세요.' }
    ],
    loveCombo: { style: '지적이고 도전적인 연애', bestMatch: '水 기운 + 감정형(F)', warning: '논쟁이 상처가 되지 않게 조심' },
    careerCombo: { idealPath: '창업, 컨설팅, 마케팅, 투자', strength: '새로운 시장을 개척해요', weakness: '반복적인 관리는 지루해함' },
    coreAdvice: '도전정신은 당신의 DNA예요. 가끔은 완성도 필요해요.'
  },

  {
    dayMaster: '丙', mbti: 'ESTJ',
    harmony: { score: 85, summary: '추진력 있는 관리자', description: '丙火의 열정과 ESTJ의 관리력이 만났어요. 목표를 향해 체계적으로 밀고 나가죠.' },
    synergies: [
      { title: '강력한 실행력', description: '계획하고 실행하고 완성해요.' },
      { title: '카리스마 리더십', description: '사람들이 자연스럽게 따라와요.' }
    ],
    conflicts: [
      { title: '지나친 통제', description: '둘 다 강해서 주변이 힘들어해요.', solution: '위임하고 믿어주세요.' },
      { title: '감정 무시', description: '효율만 보다 사람을 놓쳐요.', solution: '팀원들의 감정도 챙기세요.' }
    ],
    loveCombo: { style: '책임감 있고 열정적인 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '연인을 통제하려 하면 안 돼요' },
    careerCombo: { idealPath: 'CEO, 관리자, 군 장교, 정치인', strength: '조직을 이끄는 능력 탁월', weakness: '창의적이거나 유연한 업무 약함' },
    coreAdvice: '강한 리더십에 따뜻함을 더하면 사람들이 더 따라와요.'
  },

  {
    dayMaster: '丙', mbti: 'ESFJ',
    harmony: { score: 80, summary: '따뜻하게 빛나는 리더', description: '丙火의 카리스마와 ESFJ의 배려심이 만났어요. 사람들을 이끌면서도 세심하게 챙기죠.' },
    synergies: [
      { title: '인간적 리더십', description: '성과도 내면서 사람도 챙겨요.' },
      { title: '따뜻한 카리스마', description: '사람들이 편하게 따라와요.' }
    ],
    conflicts: [
      { title: '인정 욕구', description: '둘 다 주목받고 싶어해요.', solution: '서로의 무대를 인정하세요.' },
      { title: '비판에 민감', description: '부정적 피드백에 상처받아요.', solution: '비판도 성장의 기회로 보세요.' }
    ],
    loveCombo: { style: '따뜻하고 열정적인 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '서로 칭찬만 하다 성장을 놓칠 수 있음' },
    careerCombo: { idealPath: '교육, HR, 서비스업 리더, 마케팅', strength: '사람을 다루면서 성과를 내요', weakness: '어려운 결정을 내리기 힘듦' },
    coreAdvice: '사람도 성과도 중요해요. 균형을 찾으세요.'
  },

  {
    dayMaster: '丙', mbti: 'ENFJ',
    harmony: { score: 88, summary: '사람들을 밝히는 태양', description: '丙火의 카리스마와 ENFJ의 영향력이 만났어요. 사람들에게 비전을 보여주고 함께 나아가게 하는 힘이 있죠.' },
    synergies: [
      { title: '영감 주는 리더십', description: '사람들에게 희망과 방향을 줘요.' },
      { title: '변화를 이끄는 힘', description: '사람들을 움직이고 세상을 바꿔요.' }
    ],
    conflicts: [
      { title: '과한 헌신', description: '남을 위해 너무 많이 쏟아요.', solution: '자기 관리도 하세요.' },
      { title: '주도권 다툼', description: '둘 다 이끌려고 해요.', solution: '역할을 나누세요.' }
    ],
    loveCombo: { style: '함께 성장하는 동반자적 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '서로 바꾸려 하지 마세요' },
    careerCombo: { idealPath: '교육, 정치, 비영리, 경영', strength: '사람들을 변화시키는 힘', weakness: '쉬는 시간 부족' },
    coreAdvice: '사람들을 밝히는 것도 중요하지만 자신도 밝히세요.'
  },

  {
    dayMaster: '丙', mbti: 'ENTJ',
    harmony: { score: 92, summary: '정상을 향한 불꽃', description: '丙火의 열정과 ENTJ의 야망이 만났어요. 최고가 되기 위해 뜨겁게 달리는 조합이죠.' },
    synergies: [
      { title: '압도적 추진력', description: '목표를 정하면 반드시 달성해요.' },
      { title: '카리스마 리더십', description: '사람들이 자연스럽게 따라와요.' }
    ],
    conflicts: [
      { title: '지나친 강함', description: '둘 다 너무 세서 주변이 힘들어해요.', solution: '강도를 조절하세요.' },
      { title: '감정 무시', description: '성과만 보다 사람을 잃어요.', solution: '팀원들도 챙기세요.' }
    ],
    loveCombo: { style: '파워 커플. 함께 정상을 향해 달려요.', bestMatch: '水 기운 + 감정형(F)', warning: '연인도 경쟁 상대가 아니에요' },
    careerCombo: { idealPath: 'CEO, 창업가, 정치인, 최고위직', strength: '정상에 오를 역량', weakness: '독단적이 될 수 있음' },
    coreAdvice: '정상에 오르는 것만큼 함께하는 사람들도 챙기세요.'
  },

  // ========================================
  // 丁火 (정화) × 16 MBTI
  // ========================================

  {
    dayMaster: '丁', mbti: 'ISTJ',
    harmony: { score: 65, summary: '은은한 빛의 체계', description: '丁火의 섬세함과 ISTJ의 체계성이 만났어요. 조용히 집중하면서도 꼼꼼하게 처리하죠.' },
    synergies: [
      { title: '집중력과 체계', description: '한 가지에 깊이 집중하면서 체계적으로 해요.' },
      { title: '신뢰받는 전문가', description: '조용히 실력을 쌓아 인정받아요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '둘 다 말을 안 해서 오해가 생겨요.', solution: '중요한 건 말로 확인하세요.' },
      { title: '변화 거부', description: '익숙한 것만 고집해요.', solution: '작은 변화부터 시도해보세요.' }
    ],
    loveCombo: { style: '조용하고 깊은 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '감정 표현을 연습하세요' },
    careerCombo: { idealPath: '연구, 분석, 전문 기술', strength: '깊이 있는 전문성', weakness: '발표나 대외활동 부담' },
    coreAdvice: '조용한 빛도 어둠을 밝혀요. 당신만의 방식으로 빛나세요.'
  },

  {
    dayMaster: '丁', mbti: 'ISFJ',
    harmony: { score: 80, summary: '따뜻한 촛불의 돌봄', description: '丁火의 따뜻함과 ISFJ의 배려심이 완벽하게 어울려요.' },
    synergies: [
      { title: '세심한 케어', description: '작은 것까지 알아채고 돌봐요.' },
      { title: '조용한 헌신', description: '티 내지 않고 묵묵히 해줘요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '자기보다 남을 먼저 챙겨서 지쳐요.', solution: '나를 위한 시간도 만드세요.' },
      { title: '의견 부재', description: '둘 다 양보만 해요.', solution: '"나는 이게 좋아"라고 말하세요.' }
    ],
    loveCombo: { style: '따뜻하게 돌봐주는 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '자신도 챙기세요' },
    careerCombo: { idealPath: '상담, 간호, 교육, 복지', strength: '사람을 치유하는 능력', weakness: '경쟁적 환경 부담' },
    coreAdvice: '남을 밝히는 만큼 자신도 밝히세요.'
  },

  {
    dayMaster: '丁', mbti: 'INFJ',
    harmony: { score: 85, summary: '깊은 통찰의 빛', description: '丁火의 직관과 INFJ의 통찰력이 완벽하게 맞아요.' },
    synergies: [
      { title: '깊은 이해력', description: '말하지 않아도 마음을 읽어요.' },
      { title: '치유의 능력', description: '상처받은 마음을 따뜻하게 감싸줘요.' }
    ],
    conflicts: [
      { title: '현실 도피', description: '어려운 현실을 피하려 해요.', solution: '작은 현실적 목표부터 세우세요.' },
      { title: '에너지 소진', description: '남의 감정을 너무 많이 받아서 지쳐요.', solution: '경계를 세우세요.' }
    ],
    loveCombo: { style: '영혼의 연결을 추구하는 깊은 사랑', bestMatch: '木 기운 + 외향형(E)', warning: '이상화하다 실망하지 않게 조심' },
    careerCombo: { idealPath: '심리상담, 예술치료, 영성', strength: '사람의 마음을 치유해요', weakness: '현실적인 비즈니스 맞지 않음' },
    coreAdvice: '당신의 깊은 이해력은 귀한 능력이에요. 자신도 돌보세요.'
  },

  {
    dayMaster: '丁', mbti: 'INTJ',
    harmony: { score: 72, summary: '집중하는 전략가', description: '丁火의 집중력과 INTJ의 전략성이 만났어요.' },
    synergies: [
      { title: '깊은 분석력', description: '본질을 파악하고 전략을 세워요.' },
      { title: '독립적 전문성', description: '혼자서도 깊이 있는 결과를 내요.' }
    ],
    conflicts: [
      { title: '고립 위험', description: '둘 다 혼자 있으려 해서 단절돼요.', solution: '주기적으로 외부와 소통하세요.' },
      { title: '완벽주의', description: '둘 다 기준이 높아서 지쳐요.', solution: '80%도 충분해요.' }
    ],
    loveCombo: { style: '깊고 조용한 파트너십', bestMatch: '木 기운 + 감정형(F)', warning: '서로에게 시간을 투자하세요' },
    careerCombo: { idealPath: '연구, 전략 기획, 전문 컨설팅', strength: '깊이 있는 전문성과 전략을 겸비', weakness: '네트워킹 약함' },
    coreAdvice: '깊이는 당신의 강점이에요. 가끔 밖으로 나와보세요.'
  },

  {
    dayMaster: '丁', mbti: 'ISTP',
    harmony: { score: 62, summary: '조용한 기술자', description: '丁火의 집중력과 ISTP의 실용성이 만났어요.' },
    synergies: [
      { title: '섬세한 기술', description: '세밀한 작업을 잘해요.' },
      { title: '조용한 해결', description: '말 없이 문제를 해결해요.' }
    ],
    conflicts: [
      { title: '소통 부재', description: '둘 다 말이 적어요.', solution: '중요한 건 말로 하세요.' },
      { title: '감정 무시', description: '감정적 교류가 부족해요.', solution: '가끔은 느끼는 대로 말해보세요.' }
    ],
    loveCombo: { style: '자유롭고 조용한 연애', bestMatch: '木 기운 + 감정형(F)', warning: '말로 표현도 필요' },
    careerCombo: { idealPath: '기술, 장인, 프로그래밍, 수공예', strength: '섬세한 기술력', weakness: '팀 협업이나 발표 부담' },
    coreAdvice: '당신의 손끝에서 작품이 탄생해요. 그 가치를 알리세요.'
  },

  {
    dayMaster: '丁', mbti: 'ISFP',
    harmony: { score: 88, summary: '예술적 감성의 불꽃', description: '丁火의 섬세함과 ISFP의 예술성이 완벽하게 맞아요.' },
    synergies: [
      { title: '예술적 감수성', description: '아름다움을 깊이 느끼고 표현해요.' },
      { title: '조용한 열정', description: '겉은 차분해도 속은 뜨거워요.' }
    ],
    conflicts: [
      { title: '현실 회피', description: '어려운 문제를 피하려 해요.', solution: '작은 것부터 직면하세요.' },
      { title: '결정 어려움', description: '둘 다 우유부단해요.', solution: '기한을 정해서 결정하세요.' }
    ],
    loveCombo: { style: '감성적이고 아름다운 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '현실적인 대화도 필요' },
    careerCombo: { idealPath: '예술, 음악, 디자인, 문학', strength: '아름다움을 창조', weakness: '경쟁적인 환경 맞지 않음' },
    coreAdvice: '당신의 감성은 세상을 아름답게 만들어요.'
  },

  {
    dayMaster: '丁', mbti: 'INFP',
    harmony: { score: 82, summary: '이상을 품은 촛불', description: '丁火의 깊이와 INFP의 이상주의가 만났어요.' },
    synergies: [
      { title: '깊은 내면', description: '풍부한 내면 세계를 가졌어요.' },
      { title: '진정성', description: '가식 없이 진심으로 살아요.' }
    ],
    conflicts: [
      { title: '현실 괴리', description: '이상만 보다 현실을 놓쳐요.', solution: '작은 현실적 단계를 세우세요.' },
      { title: '감정 기복', description: '감정에 휩쓸릴 수 있어요.', solution: '감정을 관찰하는 연습을.' }
    ],
    loveCombo: { style: '영혼의 연결을 찾는 순수한 사랑', bestMatch: '土 기운 + 외향형(E)', warning: '완벽한 사랑은 없어요' },
    careerCombo: { idealPath: '예술, 글쓰기, 상담, 영성', strength: '진정성이 사람들에게 닿아요', weakness: '현실 업무 부담' },
    coreAdvice: '이상은 등대예요. 현실에서 한 걸음씩 나아가세요.'
  },

  {
    dayMaster: '丁', mbti: 'INTP',
    harmony: { score: 70, summary: '깊이 탐구하는 분석가', description: '丁火의 집중력과 INTP의 분석력이 만났어요.' },
    synergies: [
      { title: '깊은 분석', description: '본질을 파악할 때까지 파고들어요.' },
      { title: '조용한 탐구', description: '집중해서 연구해요.' }
    ],
    conflicts: [
      { title: '실행 부족', description: '생각만 하고 행동을 안 해요.', solution: '작은 것부터 실행하세요.' },
      { title: '고립 위험', description: '둘 다 혼자 있으려 해요.', solution: '주기적으로 외부와 소통하세요.' }
    ],
    loveCombo: { style: '지적이고 조용한 연애', bestMatch: '木 기운 + 감정형(F)', warning: '분석보다 느낌' },
    careerCombo: { idealPath: '연구, 분석, 전문 분야', strength: '깊이 있는 전문성', weakness: '대외활동 부담' },
    coreAdvice: '생각을 현실로 옮기는 연습을 하세요.'
  },

  {
    dayMaster: '丁', mbti: 'ESTP',
    harmony: { score: 55, summary: '촛불과 번개', description: '丁火의 섬세함과 ESTP의 행동력이 만났어요. 매우 달라서 조율 필요.' },
    synergies: [
      { title: '다양한 접근', description: '섬세함과 대담함을 둘 다 가져요.' },
      { title: '보완적 팀워크', description: '서로 부족한 부분을 채워요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ESTP는 빠르고 丁火는 천천히.', solution: '서로의 템포를 존중.' },
      { title: '깊이 차이', description: 'ESTP는 표면적, 丁火는 깊어요.', solution: '때로는 가볍게, 때로는 깊게.' }
    ],
    loveCombo: { style: '다이내믹한 관계', bestMatch: '水 기운 + 감정형(F)', warning: '서로의 차이를 인정하세요' },
    careerCombo: { idealPath: '전략 지원, 기획, 분석 역할', strength: '깊이 있는 분석으로 지원', weakness: '직접 나서기 부담' },
    coreAdvice: '다름은 보완이 될 수 있어요. 서로를 활용하세요.'
  },

  {
    dayMaster: '丁', mbti: 'ESFP',
    harmony: { score: 60, summary: '조용한 빛과 밝은 에너지', description: '丁火의 섬세함과 ESFP의 밝음이 만났어요.' },
    synergies: [
      { title: '감성적 조화', description: '둘 다 감성적이라 느끼는 게 비슷해요.' },
      { title: '따뜻함', description: '사람들에게 따뜻한 에너지를 줘요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ESFP는 밖으로, 丁火는 안으로 향해요.', solution: '각자의 방식을 존중.' },
      { title: '깊이 차이', description: 'ESFP는 가볍게, 丁火는 깊게 가요.', solution: '둘 다 필요할 때가 있어요.' }
    ],
    loveCombo: { style: '따뜻하고 감성적인 연애', bestMatch: '土 기운 + 판단형(J)', warning: '에너지 균형 필요' },
    careerCombo: { idealPath: '예술, 케어, 서비스업', strength: '따뜻하게 사람을 대해요', weakness: '경쟁적 환경 부담' },
    coreAdvice: '다른 에너지도 조화를 이룰 수 있어요.'
  },

  {
    dayMaster: '丁', mbti: 'ENFP',
    harmony: { score: 72, summary: '가능성을 밝히는 촛불', description: '丁火의 깊이와 ENFP의 열정이 만났어요.' },
    synergies: [
      { title: '의미 있는 열정', description: '깊이 있는 가능성을 탐구해요.' },
      { title: '진정성 있는 연결', description: '진심으로 사람들과 이어져요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ENFP는 넓게, 丁火는 깊게 가요.', solution: '서로의 방식을 존중.' },
      { title: '마무리 부족', description: '둘 다 끝내기 어려워요.', solution: '작은 목표로 나눠서 완성하세요.' }
    ],
    loveCombo: { style: '깊고 열정적인 사랑', bestMatch: '土 기운 + 판단형(J)', warning: '에너지 균형 필요' },
    careerCombo: { idealPath: '상담, 교육, 예술, 사회운동', strength: '깊이 있는 영감을 줘요', weakness: '실무 관리 부담' },
    coreAdvice: '깊이와 넓이를 모두 활용하세요.'
  },

  {
    dayMaster: '丁', mbti: 'ENTP',
    harmony: { score: 58, summary: '깊이와 도전의 만남', description: '丁火의 집중력과 ENTP의 도전정신이 만났어요.' },
    synergies: [
      { title: '깊은 탐구', description: '새 아이디어를 깊이 파고들어요.' },
      { title: '보완적 관점', description: '넓은 시야와 깊은 분석을 둘 다 가져요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ENTP는 빠르고 丁火는 천천히.', solution: '템포를 존중.' },
      { title: '논쟁 스트레스', description: 'ENTP의 논쟁이 丁火에게 부담.', solution: '논쟁은 공격이 아니에요.' }
    ],
    loveCombo: { style: '지적이지만 템포가 다른 연애', bestMatch: '土 기운 + 감정형(F)', warning: '차이를 인정' },
    careerCombo: { idealPath: '연구 지원, 전략 분석, 기획', strength: '깊이 있는 분석으로 발전', weakness: '직접 나서기 부담' },
    coreAdvice: '다름은 보완이에요.'
  },

  {
    dayMaster: '丁', mbti: 'ESTJ',
    harmony: { score: 52, summary: '촛불과 체계의 긴장', description: '丁火의 섬세함과 ESTJ의 강한 관리력이 만났어요.' },
    synergies: [
      { title: '보완적 팀워크', description: 'ESTJ가 체계를 잡고 丁火가 디테일을.' },
      { title: '신뢰받는 결과', description: '꼼꼼하고 체계적인 결과를 내요.' }
    ],
    conflicts: [
      { title: '압도당함', description: 'ESTJ의 강함에 丁火가 위축.', solution: 'ESTJ가 공간을 줘야.' },
      { title: '방식 충돌', description: 'ESTJ는 빠르게, 丁火는 깊게 가요.', solution: '역할을 나누세요.' }
    ],
    loveCombo: { style: '보호받지만 통제로 느껴질 수 있어요', bestMatch: '水 기운 + 감정형(F)', warning: 'ESTJ가 존중 필요' },
    careerCombo: { idealPath: '전문 기술, 분석, 지원 역할', strength: '깊이 있는 전문성으로 지원', weakness: '주도적 역할 부담' },
    coreAdvice: '당신의 깊이도 가치 있어요. 주눅 들지 마세요.'
  },

  {
    dayMaster: '丁', mbti: 'ESFJ',
    harmony: { score: 75, summary: '따뜻하게 돌보는 조화', description: '丁火의 섬세함과 ESFJ의 배려심이 만났어요.' },
    synergies: [
      { title: '세심한 케어', description: '작은 것까지 알아채고 돌봐요.' },
      { title: '따뜻한 분위기', description: '주변을 편안하게 만들어요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ESFJ는 밖으로, 丁火는 안으로.', solution: '에너지를 존중.' },
      { title: '과한 희생', description: '둘 다 남을 위해 너무 많이 해요.', solution: '자기 관리도 하세요.' }
    ],
    loveCombo: { style: '서로 챙기는 따뜻한 사랑', bestMatch: '土 기운 + 사고형(T)', warning: '지치지 않게 조심' },
    careerCombo: { idealPath: '상담, 교육, 케어, 서비스업', strength: '따뜻하게 돌봐요', weakness: '경쟁적 환경 부담' },
    coreAdvice: '남을 돌보는 만큼 자신도.'
  },

  {
    dayMaster: '丁', mbti: 'ENFJ',
    harmony: { score: 78, summary: '성장을 비추는 촛불', description: '丁火의 깊이와 ENFJ의 영향력이 만났어요.' },
    synergies: [
      { title: '깊은 영향력', description: '조용히 사람들을 변화시켜요.' },
      { title: '따뜻한 리더십', description: '강요 없이 이끌어요.' }
    ],
    conflicts: [
      { title: '에너지 차이', description: 'ENFJ는 밖으로, 丁火는 안으로.', solution: '역할을 나누세요.' },
      { title: '과한 헌신', description: '둘 다 남을 위해 너무 많이 해요.', solution: '경계를 세우세요.' }
    ],
    loveCombo: { style: '함께 성장하는 동반자', bestMatch: '土 기운 + 사고형(T)', warning: '자기 관리도' },
    careerCombo: { idealPath: '상담, 교육, 코칭, 영성', strength: '성장을 도와요', weakness: '대외활동 많으면 지침' },
    coreAdvice: '조용한 영향력도 강력해요.'
  },

  {
    dayMaster: '丁', mbti: 'ENTJ',
    harmony: { score: 50, summary: '촛불과 태양의 대조', description: '丁火의 섬세함과 ENTJ의 강한 리더십이 만났어요.' },
    synergies: [
      { title: '보완적 팀워크', description: 'ENTJ가 방향을 정하면 丁火가 디테일을.' },
      { title: '깊이 있는 지원', description: '전략을 깊이 있게 분석해서 지원해요.' }
    ],
    conflicts: [
      { title: '압도당함', description: 'ENTJ의 강함에 丁火가 위축.', solution: 'ENTJ가 공간을 줘야.' },
      { title: '방식 충돌', description: 'ENTJ는 빠르고 강하게, 丁火는 천천히 깊게.', solution: '역할을 나누세요.' }
    ],
    loveCombo: { style: '보호받지만 통제로 느껴질 수 있어요', bestMatch: '水 기운 + 감정형(F)', warning: 'ENTJ가 존중 필요' },
    careerCombo: { idealPath: '전략 분석, 연구, 전문 지원', strength: '깊이 있는 분석으로 지원', weakness: '주도적 역할 부담' },
    coreAdvice: '당신의 깊이도 리더십의 일부예요.'
  }
];
