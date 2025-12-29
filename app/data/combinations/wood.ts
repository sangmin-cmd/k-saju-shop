// 木 오행: 甲木, 乙木 × 16 MBTI = 32개 조합

import { CombinationText } from './types';

export const woodCombinations: CombinationText[] = [
  // ========================================
  // 甲木 (갑목) × 16 MBTI
  // ========================================

  {
    dayMaster: '甲', mbti: 'ISTJ',
    harmony: { score: 85, summary: '원칙을 지키는 든든한 기둥', description: '甲木의 곧은 성격과 ISTJ의 책임감이 만나 매우 안정적인 조합이에요. 한번 정한 원칙은 흔들림 없이 지키고, 주변에 신뢰를 주죠.' },
    synergies: [
      { title: '흔들림 없는 신뢰', description: '약속은 반드시 지키고, 책임감이 강해서 주변에서 믿고 의지해요.' },
      { title: '체계적인 추진력', description: '목표를 세우면 계획적으로 끝까지 밀고 나가요.' }
    ],
    conflicts: [
      { title: '이중 고집', description: '甲木도 고집, ISTJ도 고집이라 한번 부딪히면 안 꺾여요.', solution: '상대방 의견도 일단 들어보는 연습을 하세요.' },
      { title: '변화 거부', description: '새로운 방식을 받아들이기 어려워요.', solution: '작은 변화부터 시도해보세요.' }
    ],
    loveCombo: { style: '말보다 행동으로 보여주는 묵직한 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '감정 표현을 연습하세요' },
    careerCombo: { idealPath: '관리직, 공무원, 법조계, 금융권', strength: '책임감과 꼼꼼함으로 신뢰를 쌓아요', weakness: '창의적 업무는 스트레스' },
    coreAdvice: '당신의 원칙과 책임감은 큰 장점이에요. 다만 가끔은 유연함이 더해지면 더 강해져요.'
  },

  {
    dayMaster: '甲', mbti: 'ISFJ',
    harmony: { score: 75, summary: '보호하고 싶은 마음이 넘치는 조합', description: '甲木의 리더십과 ISFJ의 배려심이 만났어요. 주변 사람들을 지키고 돌보는 마음이 강하죠.' },
    synergies: [
      { title: '보호 본능', description: '가족, 친구, 동료를 끝까지 지키려는 마음이 강해요.' },
      { title: '신뢰받는 존재', description: '말보다 행동으로 보여주니까 주변에서 믿어요.' }
    ],
    conflicts: [
      { title: '주도권 갈등', description: '甲木은 이끌고 싶고, ISFJ는 맞춰주다 지쳐요.', solution: '받는 것도 연습하세요.' },
      { title: '감정 억압', description: '힘들어도 말 안 하고 속으로 삼켜요.', solution: '가끔은 힘들다고 말해도 괜찮아요.' }
    ],
    loveCombo: { style: '연인을 위해 뭐든 해주고 싶은 헌신적인 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '연인에게만 올인하지 마세요' },
    careerCombo: { idealPath: '교육, 의료, 복지, 인사', strength: '사람을 키우고 돌보는 일에 진심', weakness: '자기 PR이 약해요' },
    coreAdvice: '남을 챙기는 것만큼 자신도 챙기세요. 당신이 건강해야 주변도 지킬 수 있어요.'
  },

  {
    dayMaster: '甲', mbti: 'INFJ',
    harmony: { score: 70, summary: '이상을 향해 뻗어가는 나무', description: '甲木의 추진력과 INFJ의 비전이 만났어요. 더 나은 세상을 향해 나아가고 싶은 마음이 강하죠.' },
    synergies: [
      { title: '비전 실현력', description: 'INFJ가 그린 이상을 甲木의 추진력으로 실현해요.' },
      { title: '의미 있는 리더십', description: '단순히 이끄는 게 아니라 가치 있는 방향으로 이끌어요.' }
    ],
    conflicts: [
      { title: '이상 vs 현실', description: 'INFJ는 완벽을 꿈꾸고, 甲木은 일단 실행하려 해요.', solution: '80% 완성도로 시작하고 가면서 다듬어요.' },
      { title: '에너지 소모', description: '혼자 끙끙 앓다가 번아웃이 와요.', solution: '주변에 도움을 요청하세요.' }
    ],
    loveCombo: { style: '영혼의 연결을 추구하는 깊은 사랑', bestMatch: '水 기운 + 외향 직관형(EN)', warning: '현실의 연인을 있는 그대로 받아들이세요' },
    careerCombo: { idealPath: '상담, 교육, 비영리단체, 사회적 기업', strength: '사람들에게 영감을 주고 변화를 이끌어요', weakness: '현실적인 업무 처리에 스트레스' },
    coreAdvice: '당신의 이상은 소중해요. 다만 한 걸음씩 현실에서 실현해가세요.'
  },

  {
    dayMaster: '甲', mbti: 'INTJ',
    harmony: { score: 88, summary: '목표를 향해 직진하는 전략가', description: '甲木의 추진력과 INTJ의 전략적 사고가 완벽하게 맞아요. 목표를 정하면 최적의 경로를 찾아 흔들림 없이 나아가죠.' },
    synergies: [
      { title: '전략적 실행력', description: 'INTJ가 계획하고 甲木이 실행하면 못 할 게 없어요.' },
      { title: '독립적 리더십', description: '남에게 의존하지 않고 스스로 길을 개척해요.' }
    ],
    conflicts: [
      { title: '소통 부족', description: '혼자 다 처리하려다 주변과 멀어질 수 있어요.', solution: '가끔은 과정을 공유하세요.' },
      { title: '감정 무시', description: '논리만 앞세우다 사람 마음을 놓쳐요.', solution: '효율만큼 감정도 중요해요.' }
    ],
    loveCombo: { style: '목표 지향적인 파트너십', bestMatch: '火 기운 + 감정형(F)', warning: '연애도 프로젝트처럼 대하면 안 돼요' },
    careerCombo: { idealPath: 'CEO, 전략 컨설턴트, 창업가, 투자자', strength: '장기적 비전과 실행력을 겸비', weakness: '팀원들과 소통 부족할 수 있어요' },
    coreAdvice: '당신의 능력은 뛰어나요. 다만 사람들과 함께하면 더 큰 걸 이룰 수 있어요.'
  },

  {
    dayMaster: '甲', mbti: 'ISTP',
    harmony: { score: 72, summary: '실용적인 행동파', description: '甲木의 추진력과 ISTP의 실용성이 만났어요. 문제가 생기면 바로 해결하는 행동력이 있죠.' },
    synergies: [
      { title: '즉각적 문제해결', description: '고민만 하지 않고 바로 손으로 해결해요.' },
      { title: '독립적 실행', description: '남에게 의지하지 않고 스스로 처리해요.' }
    ],
    conflicts: [
      { title: '계획 vs 즉흥', description: '甲木은 계획대로, ISTP는 그때그때 하고 싶어요.', solution: '큰 방향은 정해두고 디테일은 유연하게.' },
      { title: '소통 부족', description: '둘 다 말수가 적어서 오해가 생겨요.', solution: '중요한 건 말로 확인하세요.' }
    ],
    loveCombo: { style: '자유롭고 독립적인 연애', bestMatch: '水 기운 + 감정형(F)', warning: '가끔은 말로 표현하세요' },
    careerCombo: { idealPath: '엔지니어, 기술직, 스포츠, 위기관리', strength: '실용적인 문제해결 능력', weakness: '장기 프로젝트나 팀 협업 어려움' },
    coreAdvice: '당신의 실행력은 강점이에요. 가끔 멈추고 방향을 점검하면 더 효율적이에요.'
  },

  {
    dayMaster: '甲', mbti: 'ISFP',
    harmony: { score: 65, summary: '부드러운 속에 강한 줏대', description: '甲木의 강함과 ISFP의 부드러움이 공존해요. 겉으로는 온순해 보여도 자기 가치관은 확고하죠.' },
    synergies: [
      { title: '예술적 추진력', description: '아름다운 것을 향한 열정을 실제로 만들어내요.' },
      { title: '조용한 리더십', description: '큰 소리 없이도 사람들을 이끌 수 있어요.' }
    ],
    conflicts: [
      { title: '표현 방식 차이', description: '甲木은 직접적, ISFP는 간접적이라 엇갈려요.', solution: '상대방의 표현 방식을 이해하세요.' },
      { title: '갈등 회피', description: 'ISFP가 피하면 甲木은 답답해해요.', solution: '작은 것부터 의견을 말하는 연습을.' }
    ],
    loveCombo: { style: '보호해주고 싶은 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '연인을 통제하려 하지 마세요' },
    careerCombo: { idealPath: '디자인, 예술, 장인 분야', strength: '감각과 실행력을 겸비', weakness: '경쟁적인 환경에서 스트레스' },
    coreAdvice: '당신 안의 부드러움과 강함이 균형을 이루면 더 빛나요.'
  },

  {
    dayMaster: '甲', mbti: 'INFP',
    harmony: { score: 62, summary: '이상을 품은 곧은 나무', description: '甲木의 현실적 추진력과 INFP의 이상주의가 만났어요. 꿈을 현실로 만들 수 있는 잠재력이 있어요.' },
    synergies: [
      { title: '가치 있는 목표', description: '단순한 성공이 아니라 의미 있는 일을 추구해요.' },
      { title: '진정성 있는 리더십', description: '가식 없이 진심으로 사람들을 이끌어요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: '甲木은 빨리, INFP는 천천히 가고 싶어요.', solution: '서로의 템포를 인정하세요.' },
      { title: '현실 vs 이상', description: '甲木의 현실적 판단이 INFP에게 차갑게 느껴질 수 있어요.', solution: '감정도 함께 고려하세요.' }
    ],
    loveCombo: { style: '영혼까지 연결되고 싶은 깊은 사랑', bestMatch: '水 기운 + 외향형(E)', warning: '현실의 연인을 있는 그대로 사랑하세요' },
    careerCombo: { idealPath: '예술, 상담, 사회적 기업', strength: '진정성이 사람들에게 감동을 줘요', weakness: '현실적인 업무에서 동력 잃기 쉬움' },
    coreAdvice: '이상은 소중하지만 현실에서 한 걸음씩 실현해가세요.'
  },

  {
    dayMaster: '甲', mbti: 'INTP',
    harmony: { score: 70, summary: '생각하는 행동가', description: '甲木의 추진력과 INTP의 분석력이 만났어요. 깊이 생각하고 확실하게 실행하는 조합이죠.' },
    synergies: [
      { title: '논리적 추진력', description: '분석 후 실행하니까 실패 확률이 줄어요.' },
      { title: '독립적 탐구', description: '남에게 의존하지 않고 스스로 답을 찾아요.' }
    ],
    conflicts: [
      { title: '행동 vs 분석', description: '甲木은 일단 하자, INTP는 더 생각하자.', solution: '생각의 시간과 행동의 시간을 구분하세요.' },
      { title: '감정 무시', description: '둘 다 논리적이라 감정을 놓쳐요.', solution: '가끔은 비효율적이어도 감정을 챙기세요.' }
    ],
    loveCombo: { style: '지적 연결이 중요한 사랑', bestMatch: '火 기운 + 감정형(F)', warning: '연애도 분석하려 하면 안 돼요' },
    careerCombo: { idealPath: '연구직, 개발자, 전략 분야', strength: '깊은 분석과 실행력을 겸비', weakness: '대인관계나 정치적 상황에 약함' },
    coreAdvice: '생각도 중요하지만 때로는 일단 시작해보세요.'
  },

  {
    dayMaster: '甲', mbti: 'ESTP',
    harmony: { score: 78, summary: '거침없는 돌파형', description: '甲木의 추진력과 ESTP의 행동력이 만나 엄청난 실행력을 발휘해요. 문제가 생기면 고민 없이 돌파하죠.' },
    synergies: [
      { title: '즉각적 실행', description: '생각과 행동 사이의 갭이 거의 없어요.' },
      { title: '위기 돌파력', description: '어떤 상황에서도 해결책을 찾아내요.' }
    ],
    conflicts: [
      { title: '장기적 시야 부족', description: '지금 당장에만 집중하다 큰 그림을 놓쳐요.', solution: '가끔 멈추고 방향을 점검하세요.' },
      { title: '충돌 가능성', description: '둘 다 물러서지 않아서 부딪힐 수 있어요.', solution: '양보도 전략이에요.' }
    ],
    loveCombo: { style: '재미있고 활력 넘치는 연애', bestMatch: '水 기운 + 내향형(I)', warning: '오래 가려면 깊이도 필요해요' },
    careerCombo: { idealPath: '영업, 스포츠, 창업, 이벤트', strength: '빠른 판단과 실행력이 무기', weakness: '꼼꼼한 관리나 반복 업무는 약함' },
    coreAdvice: '당신의 추진력은 대단해요. 가끔 속도를 늦추고 방향을 확인하세요.'
  },

  {
    dayMaster: '甲', mbti: 'ESFP',
    harmony: { score: 68, summary: '즐기면서 전진하는 에너자이저', description: '甲木의 목표 지향성과 ESFP의 긍정 에너지가 만났어요. 일도 즐기면서 하고 싶어하죠.' },
    synergies: [
      { title: '긍정적 추진력', description: '어려운 일도 즐겁게 해내요.' },
      { title: '사교적 리더십', description: '사람들과 어울리면서 이끌어요.' }
    ],
    conflicts: [
      { title: '즐거움 vs 목표', description: 'ESFP는 지금을 즐기고, 甲木은 미래를 향해 가요.', solution: '일하는 시간과 즐기는 시간을 분리하세요.' },
      { title: '깊이 부족', description: '표면적인 것에만 머물 수 있어요.', solution: '가끔은 깊이 들어가보세요.' }
    ],
    loveCombo: { style: '재미있고 열정적인 연애', bestMatch: '水 기운 + 사고형(T)', warning: '재미만 추구하면 오래 못 가요' },
    careerCombo: { idealPath: '엔터테인먼트, 영업, 이벤트, 서비스업', strength: '사람들에게 에너지를 주면서 일해요', weakness: '꾸준히 해야 하는 일은 힘들어함' },
    coreAdvice: '즐거움도 중요하지만 목표도 잊지 마세요. 둘 다 가질 수 있어요.'
  },

  {
    dayMaster: '甲', mbti: 'ENFP',
    harmony: { score: 72, summary: '가능성을 향해 뻗는 나무', description: '甲木의 추진력과 ENFP의 열정이 만났어요. 새로운 가능성을 발견하면 바로 달려가죠.' },
    synergies: [
      { title: '열정적 실행', description: '좋아하는 일에는 엄청난 에너지를 쏟아요.' },
      { title: '사람을 이끄는 힘', description: '진정성 있는 열정으로 사람들이 따라와요.' }
    ],
    conflicts: [
      { title: '집중 vs 분산', description: '甲木은 한 길로, ENFP는 여러 길로 가고 싶어요.', solution: '핵심 목표를 정하고 나머지는 부차적으로.' },
      { title: '완성의 어려움', description: '시작은 잘하는데 끝내기 어려워요.', solution: '작은 목표로 나누어 하나씩 완성하세요.' }
    ],
    loveCombo: { style: '열정적이고 로맨틱한 연애', bestMatch: '金 기운 + 판단형(J)', warning: '이상화하다 실망하지 않게 현실도 보세요' },
    careerCombo: { idealPath: '스타트업, 마케팅, 교육, 크리에이티브', strength: '새로운 아이디어를 실현하는 힘', weakness: '지루한 반복 업무는 못해요' },
    coreAdvice: '열정은 당신의 무기예요. 다만 한 곳에 집중하면 더 큰 결과를 만들 수 있어요.'
  },

  {
    dayMaster: '甲', mbti: 'ENTP',
    harmony: { score: 75, summary: '도전하고 개척하는 혁신가', description: '甲木의 추진력과 ENTP의 도전정신이 만났어요. 새로운 길을 개척하는 힘이 강하죠.' },
    synergies: [
      { title: '혁신적 실행력', description: '남들이 안 해본 것을 시도하고 실현해요.' },
      { title: '논리적 리더십', description: '설득력 있게 사람들을 이끌어요.' }
    ],
    conflicts: [
      { title: '논쟁 과열', description: '둘 다 자기 주장이 강해서 싸움이 커질 수 있어요.', solution: '논쟁과 싸움은 달라요. 감정 컨트롤하세요.' },
      { title: '마무리 부족', description: '새 것에 끌려서 기존 것을 마무리 못해요.', solution: '끝내고 새로 시작하는 습관을.' }
    ],
    loveCombo: { style: '지적이고 도전적인 연애', bestMatch: '水 기운 + 감정형(F)', warning: '논쟁을 줄이고 감정적 교류도 하세요' },
    careerCombo: { idealPath: '창업, 컨설팅, 변호사, 마케팅', strength: '새로운 시장을 개척하는 능력', weakness: '반복적인 관리 업무는 지루해함' },
    coreAdvice: '도전정신은 좋지만 가끔은 안정도 필요해요.'
  },

  {
    dayMaster: '甲', mbti: 'ESTJ',
    harmony: { score: 90, summary: '철저한 리더의 완성형', description: '甲木의 추진력과 ESTJ의 관리력이 완벽하게 맞아요. 목표를 세우고, 계획하고, 실행하고, 완성하는 전 과정을 해내죠.' },
    synergies: [
      { title: '완벽한 실행력', description: '계획한 건 반드시 끝까지 해내요.' },
      { title: '신뢰받는 리더', description: '책임감이 강해서 주변에서 믿고 따라요.' }
    ],
    conflicts: [
      { title: '이중 고집', description: '둘 다 안 꺾여서 갈등이 깊어질 수 있어요.', solution: '가끔은 양보하세요. 그게 더 효율적일 때도 있어요.' },
      { title: '감정 무시', description: '효율만 추구하다 사람 마음을 놓쳐요.', solution: '팀원들의 감정도 고려하세요.' }
    ],
    loveCombo: { style: '책임감 있고 헌신적인 사랑', bestMatch: '水 기운 + 감정형(F)', warning: '연인을 통제하려 하면 안 돼요' },
    careerCombo: { idealPath: '관리자, CEO, 군 간부, 법조계', strength: '조직을 이끄는 능력이 탁월', weakness: '창의적인 분야는 맞지 않을 수 있음' },
    coreAdvice: '당신의 리더십은 대단해요. 다만 사람의 마음도 챙기면 더 큰 리더가 돼요.'
  },

  {
    dayMaster: '甲', mbti: 'ESFJ',
    harmony: { score: 73, summary: '사람을 이끌고 챙기는 따뜻한 리더', description: '甲木의 리더십과 ESFJ의 배려심이 만났어요. 사람들을 이끌면서도 세심하게 챙기죠.' },
    synergies: [
      { title: '인간적인 리더십', description: '목표도 이루면서 사람도 챙겨요.' },
      { title: '조화로운 팀 빌딩', description: '팀원들이 따르고 싶어하는 리더가 돼요.' }
    ],
    conflicts: [
      { title: '목표 vs 사람', description: '甲木은 성과를, ESFJ는 관계를 우선해요.', solution: '둘 다 중요해요. 균형을 찾으세요.' },
      { title: '평가에 민감', description: 'ESFJ가 비판에 상처받을 수 있어요.', solution: '피드백은 부드럽게 주세요.' }
    ],
    loveCombo: { style: '서로를 챙기는 따뜻한 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '서로 해주려고만 하다 지칠 수 있어요' },
    careerCombo: { idealPath: '교육, HR, 서비스업, 의료', strength: '사람을 관리하면서 이끄는 능력', weakness: '어려운 결정을 내리기 힘들 수 있음' },
    coreAdvice: '사람과 목표 모두 중요해요. 어느 하나만 치우치지 마세요.'
  },

  {
    dayMaster: '甲', mbti: 'ENFJ',
    harmony: { score: 80, summary: '영감을 주는 카리스마 리더', description: '甲木의 추진력과 ENFJ의 카리스마가 만났어요. 사람들에게 비전을 보여주고 함께 나아가게 하는 힘이 있죠.' },
    synergies: [
      { title: '비전 제시와 실행', description: '꿈을 보여주고 현실로 만들어요.' },
      { title: '영향력 있는 리더십', description: '사람들이 자발적으로 따르게 만들어요.' }
    ],
    conflicts: [
      { title: '주도권 갈등', description: '둘 다 이끌려고 해서 충돌해요.', solution: '역할을 분담하세요.' },
      { title: '과도한 헌신', description: '둘 다 너무 많이 해주려다 지쳐요.', solution: '자기 관리도 하세요.' }
    ],
    loveCombo: { style: '함께 성장하는 동반자적 사랑', bestMatch: '水 기운 + 사고형(T)', warning: '서로 바꾸려 하지 마세요' },
    careerCombo: { idealPath: '교육, 정치, 비영리, 경영', strength: '사람들을 변화시키는 힘', weakness: '혼자만의 시간이 부족할 수 있음' },
    coreAdvice: '당신의 카리스마는 강력해요. 다만 쉬는 것도 리더의 일이에요.'
  },

  {
    dayMaster: '甲', mbti: 'ENTJ',
    harmony: { score: 92, summary: '정상을 향해 달리는 야심가', description: '甲木의 추진력과 ENTJ의 야망이 만났어요. 최고가 되기 위해 달리는 조합이죠.' },
    synergies: [
      { title: '압도적 실행력', description: '목표를 정하면 무조건 달성해요.' },
      { title: '전략적 리더십', description: '최적의 경로를 찾아 이끌어요.' }
    ],
    conflicts: [
      { title: '지나친 강함', description: '둘 다 너무 세서 주변이 버거워해요.', solution: '강함을 조절하세요. 부드러움도 힘이에요.' },
      { title: '감정 무시', description: '효율만 추구하다 관계가 메말라요.', solution: '성과만큼 사람도 중요해요.' }
    ],
    loveCombo: { style: '함께 성공을 향해 달리는 파워 커플', bestMatch: '水 기운 + 감정형(F)', warning: '연인도 경쟁 상대가 아니에요' },
    careerCombo: { idealPath: 'CEO, 투자가, 정치인, 군 장성급', strength: '최고의 위치에 오를 수 있는 역량', weakness: '독단적이 될 위험' },
    coreAdvice: '정상에 오르는 것도 중요하지만 함께하는 사람들도 챙기세요.'
  },

  // ========================================
  // 乙木 (을목) × 16 MBTI
  // ========================================

  {
    dayMaster: '乙', mbti: 'ISTJ',
    harmony: { score: 70, summary: '유연함 속의 원칙', description: '乙木의 적응력과 ISTJ의 체계성이 만났어요. 상황에 맞게 유연하면서도 원칙은 지키려 하죠.' },
    synergies: [
      { title: '유연한 체계', description: '규칙을 지키되 상황에 맞게 조절할 수 있어요.' },
      { title: '꾸준한 적응', description: '변화에도 끈기 있게 대응해요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ISTJ는 검증된 방식, 乙木은 유연한 대응을 원해요.', solution: '기본 원칙은 지키되 디테일은 유연하게.' },
      { title: '의견 표현', description: '乙木이 싫은 것도 말 못하고 참아요.', solution: '작은 의견부터 말하는 연습을.' }
    ],
    loveCombo: { style: '안정적이면서 부드러운 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '당신의 필요도 말하세요' },
    careerCombo: { idealPath: '행정, 비서, 디자인 보조, 실무', strength: '체계적이면서도 유연하게 대응', weakness: '주도적인 역할은 부담' },
    coreAdvice: '유연함과 원칙 사이에서 균형을 찾으세요. 둘 다 당신의 장점이에요.'
  },

  {
    dayMaster: '乙', mbti: 'ISFJ',
    harmony: { score: 82, summary: '세심한 돌봄의 조화', description: '乙木의 배려심과 ISFJ의 헌신이 만났어요. 주변 사람들을 정성껏 돌보는 타입이죠.' },
    synergies: [
      { title: '세심한 케어', description: '작은 것까지 알아채고 챙겨요.' },
      { title: '조용한 헌신', description: '티 내지 않고 묵묵히 도와요.' }
    ],
    conflicts: [
      { title: '과한 희생', description: '둘 다 자기보다 남을 먼저 챙겨서 탈진해요.', solution: '자기 관리도 하세요.' },
      { title: '의견 부재', description: '둘 다 양보만 하다 아무것도 안 정해져요.', solution: '가끔은 "나는 이게 좋아"라고 말하세요.' }
    ],
    loveCombo: { style: '서로를 세심하게 돌보는 따뜻한 사랑', bestMatch: '火 기운 + 외향형(E)', warning: '서로 맞추기만 하다 지쳐요' },
    careerCombo: { idealPath: '간호, 상담, 교육 보조, 복지', strength: '사람을 돌보는 일에 진심', weakness: '경쟁적인 환경은 스트레스' },
    coreAdvice: '남을 돌보는 만큼 자신도 돌보세요. 당신이 건강해야 남도 도울 수 있어요.'
  },

  {
    dayMaster: '乙', mbti: 'INFJ',
    harmony: { score: 78, summary: '깊은 공감과 성장', description: '乙木의 감수성과 INFJ의 통찰력이 만났어요. 사람의 마음을 깊이 이해하고 성장을 돕죠.' },
    synergies: [
      { title: '깊은 이해력', description: '말하지 않아도 상대의 마음을 알아요.' },
      { title: '조용한 영향력', description: '강요 없이 자연스럽게 변화를 이끌어요.' }
    ],
    conflicts: [
      { title: '현실 도피', description: '어려운 현실을 피하려 할 수 있어요.', solution: '현실 문제도 직면하세요.' },
      { title: '완벽주의', description: '둘 다 이상이 높아서 지쳐요.', solution: '80%도 충분해요.' }
    ],
    loveCombo: { style: '영혼의 연결을 추구하는 깊은 사랑', bestMatch: '金 기운 + 외향형(E)', warning: '이상적인 사랑만 찾다 현실의 행복을 놓치지 마세요' },
    careerCombo: { idealPath: '상담, 심리치료, 예술, 영성', strength: '사람의 마음을 치유하는 능력', weakness: '경쟁적인 비즈니스 환경은 맞지 않음' },
    coreAdvice: '당신의 감수성은 귀한 능력이에요. 현실에서도 활용하세요.'
  },

  {
    dayMaster: '乙', mbti: 'INTJ',
    harmony: { score: 65, summary: '유연함 속의 전략', description: '乙木의 적응력과 INTJ의 전략성이 만났어요. 상황에 맞게 방법을 바꾸면서도 목표는 유지하죠.' },
    synergies: [
      { title: '유연한 전략', description: '상황에 따라 방법을 조절하면서 목표를 달성해요.' },
      { title: '조용한 실행', description: '드러내지 않고 묵묵히 해내요.' }
    ],
    conflicts: [
      { title: '확신 vs 유연', description: 'INTJ는 자기 방식이 확실한데 乙木은 흔들려요.', solution: '핵심 원칙은 정하되 방법은 유연하게.' },
      { title: '표현 부족', description: '둘 다 말을 안 해서 오해가 생겨요.', solution: '중요한 건 말로 확인하세요.' }
    ],
    loveCombo: { style: '조용하지만 깊은 파트너십', bestMatch: '火 기운 + 감정형(F)', warning: '서로의 다른 속도를 인정하세요' },
    careerCombo: { idealPath: '연구 보조, 분석, 전략 지원', strength: '세밀하게 지원하면서 큰 그림도 봄', weakness: '주도적인 역할은 부담' },
    coreAdvice: '당신만의 방식으로 목표에 다가가세요. 남과 같을 필요 없어요.'
  },

  {
    dayMaster: '乙', mbti: 'ISTP',
    harmony: { score: 68, summary: '조용한 적응의 달인', description: '乙木의 유연함과 ISTP의 실용성이 만났어요. 상황에 맞게 조용히 대처하는 능력이 있죠.' },
    synergies: [
      { title: '유연한 문제해결', description: '어떤 상황에서도 방법을 찾아요.' },
      { title: '조용한 실행', description: '말 없이 묵묵히 해내요.' }
    ],
    conflicts: [
      { title: '소통 부재', description: '둘 다 말을 안 해서 오해가 쌓여요.', solution: '가끔은 속마음을 말하세요.' },
      { title: '방향성 부족', description: '즉흥적으로만 가다 큰 그림을 놓쳐요.', solution: '장기 목표도 생각해보세요.' }
    ],
    loveCombo: { style: '자유롭고 편안한 연애', bestMatch: '火 기운 + 감정형(F)', warning: '말로 표현도 가끔은 해주세요' },
    careerCombo: { idealPath: '기술, 예술, 수공예', strength: '손으로 하는 섬세한 일을 잘해요', weakness: '팀 리더 역할은 부담' },
    coreAdvice: '당신의 조용한 능력을 믿으세요. 말 안 해도 결과로 보여줘요.'
  },

  {
    dayMaster: '乙', mbti: 'ISFP',
    harmony: { score: 88, summary: '예술적 감성의 완성', description: '乙木의 감수성과 ISFP의 예술성이 완벽하게 맞아요. 아름다운 것을 느끼고 표현하는 능력이 뛰어나죠.' },
    synergies: [
      { title: '예술적 감각', description: '아름다움을 알아보고 만들어내요.' },
      { title: '조용한 깊이', description: '겉으로는 온순해도 속은 깊어요.' }
    ],
    conflicts: [
      { title: '현실 회피', description: '어려운 문제를 피하려 해요.', solution: '작은 것부터 직면하는 연습을.' },
      { title: '결정 어려움', description: '둘 다 우유부단해서 안 정해져요.', solution: '타임 리밋을 정해서 결정하세요.' }
    ],
    loveCombo: { style: '감성적이고 아름다운 사랑', bestMatch: '金 기운 + 외향형(E)', warning: '현실적인 대화도 필요해요' },
    careerCombo: { idealPath: '디자인, 예술, 플로리스트, 사진', strength: '아름다움을 창조하는 능력', weakness: '경쟁적인 환경은 힘들어요' },
    coreAdvice: '당신의 감성은 세상을 아름답게 만들어요. 그 가치를 알아주는 곳에 있으세요.'
  },

  {
    dayMaster: '乙', mbti: 'INFP',
    harmony: { score: 85, summary: '순수한 이상주의자', description: '乙木의 감수성과 INFP의 이상주의가 만났어요. 진정성 있는 삶을 추구하고, 내면 세계가 풍부하죠.' },
    synergies: [
      { title: '깊은 감성', description: '세상을 깊이 느끼고 표현해요.' },
      { title: '진정성', description: '가식 없이 진심으로 살아요.' }
    ],
    conflicts: [
      { title: '현실 괴리', description: '이상만 보다 현실을 놓쳐요.', solution: '작은 현실적 목표부터 세우세요.' },
      { title: '결정 회피', description: '둘 다 결정을 미뤄요.', solution: '마감을 정해서 결정하세요.' }
    ],
    loveCombo: { style: '영혼의 연결을 찾는 순수한 사랑', bestMatch: '金 기운 + 외향형(E)', warning: '완벽한 사랑은 없어요' },
    careerCombo: { idealPath: '예술, 글쓰기, 상담, 비영리', strength: '진정성이 사람들에게 닿아요', weakness: '경쟁적인 환경은 맞지 않음' },
    coreAdvice: '당신의 이상은 소중해요. 현실에서 한 조각씩 실현해가세요.'
  },

  {
    dayMaster: '乙', mbti: 'INTP',
    harmony: { score: 62, summary: '유연한 분석가', description: '乙木의 적응력과 INTP의 분석력이 만났어요. 상황에 맞게 생각을 조절하는 유연함이 있죠.' },
    synergies: [
      { title: '유연한 사고', description: '다양한 관점에서 분석해요.' },
      { title: '조용한 탐구', description: '깊이 파고드는 집중력이 있어요.' }
    ],
    conflicts: [
      { title: '실행 부족', description: '생각만 하고 행동을 안 해요.', solution: '작은 것부터 실행하세요.' },
      { title: '감정 표현', description: '둘 다 감정 표현이 서툴러요.', solution: '가끔은 느끼는 대로 말해보세요.' }
    ],
    loveCombo: { style: '지적이고 조용한 연애', bestMatch: '火 기운 + 감정형(F)', warning: '분석만 하지 말고 느끼세요' },
    careerCombo: { idealPath: '연구, 데이터 분석, 글쓰기', strength: '깊이 있는 분석이 가능', weakness: '발표나 리드는 부담' },
    coreAdvice: '생각을 현실로 옮기는 연습을 하세요. 작은 실행이 큰 변화를 만들어요.'
  },

  {
    dayMaster: '乙', mbti: 'ESTP',
    harmony: { score: 58, summary: '유연함과 행동력의 만남', description: '乙木의 적응력과 ESTP의 행동력이 만났어요. 상황에 따라 빠르게 대응할 수 있지만, 템포가 많이 달라요.' },
    synergies: [
      { title: '빠른 적응', description: '어떤 상황에서도 대처해요.' },
      { title: '실용적 유연함', description: '현실에서 바로 적용해요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ESTP는 빨리, 乙木은 천천히 가요.', solution: '서로의 템포를 존중하세요.' },
      { title: '깊이 차이', description: 'ESTP는 표면적, 乙木은 깊어요.', solution: '때로는 가볍게, 때로는 깊게 가세요.' }
    ],
    loveCombo: { style: '자유롭고 활기찬 연애', bestMatch: '金 기운 + 감정형(F)', warning: '속도를 맞추는 노력이 필요' },
    careerCombo: { idealPath: '서비스업, 이벤트 지원, 영업 보조', strength: '상황 대응 능력이 좋아요', weakness: '장기 프로젝트는 힘들어요' },
    coreAdvice: '당신만의 속도로 가도 괜찮아요. 남과 비교하지 마세요.'
  },

  {
    dayMaster: '乙', mbti: 'ESFP',
    harmony: { score: 72, summary: '부드럽게 즐기는 삶', description: '乙木의 감수성과 ESFP의 긍정 에너지가 만났어요. 삶을 즐기면서도 섬세하게 느끼죠.' },
    synergies: [
      { title: '감성적 즐거움', description: '순간을 깊이 느끼며 즐겨요.' },
      { title: '따뜻한 사교성', description: '사람들과 부드럽게 어울려요.' }
    ],
    conflicts: [
      { title: '깊이 부족', description: '표면적인 것에 머물 수 있어요.', solution: '가끔은 깊은 대화도 하세요.' },
      { title: '결정 회피', description: '둘 다 진지한 결정을 미뤄요.', solution: '중요한 건 미루지 마세요.' }
    ],
    loveCombo: { style: '재미있고 감성적인 연애', bestMatch: '金 기운 + 사고형(T)', warning: '재미만 추구하면 오래 못 가요' },
    careerCombo: { idealPath: '엔터테인먼트, 서비스업, 케어', strength: '사람들에게 즐거움을 줘요', weakness: '진지한 업무는 부담' },
    coreAdvice: '즐거움 속에서도 의미를 찾으세요. 둘 다 가질 수 있어요.'
  },

  {
    dayMaster: '乙', mbti: 'ENFP',
    harmony: { score: 80, summary: '가능성을 키우는 정원사', description: '乙木의 양육 본능과 ENFP의 열정이 만났어요. 사람들의 잠재력을 발견하고 키워주는 힘이 있죠.' },
    synergies: [
      { title: '성장 지원', description: '사람들의 가능성을 보고 키워줘요.' },
      { title: '따뜻한 열정', description: '진심으로 응원하고 지지해요.' }
    ],
    conflicts: [
      { title: '마무리 부족', description: '시작은 잘하는데 끝이 약해요.', solution: '작은 목표로 나눠서 완성하세요.' },
      { title: '현실 괴리', description: '이상만 보다 현실을 놓쳐요.', solution: '현실적인 단계를 세우세요.' }
    ],
    loveCombo: { style: '함께 성장하는 열정적인 사랑', bestMatch: '金 기운 + 판단형(J)', warning: '이상화하다 실망하지 않게 조심' },
    careerCombo: { idealPath: '교육, 코칭, 상담, 크리에이티브', strength: '사람을 키우는 능력', weakness: '반복 업무는 힘들어요' },
    coreAdvice: '당신의 응원은 사람들에게 힘이 돼요. 자신도 응원하세요.'
  },

  {
    dayMaster: '乙', mbti: 'ENTP',
    harmony: { score: 60, summary: '유연한 도전자', description: '乙木의 적응력과 ENTP의 도전정신이 만났어요. 새로운 것에 열려있고 유연하게 접근하죠.' },
    synergies: [
      { title: '유연한 혁신', description: '새로운 아이디어를 부드럽게 풀어내요.' },
      { title: '열린 사고', description: '다양한 가능성을 탐색해요.' }
    ],
    conflicts: [
      { title: '속도 차이', description: 'ENTP는 빠르고 강한데 乙木은 천천히 부드럽게.', solution: '서로의 방식을 존중하세요.' },
      { title: '논쟁 스트레스', description: 'ENTP의 논쟁이 乙木에게 부담이 돼요.', solution: '논쟁은 공격이 아니라 소통이에요.' }
    ],
    loveCombo: { style: '지적이고 자유로운 연애', bestMatch: '土 기운 + 감정형(F)', warning: '논쟁이 싸움이 되지 않게 조심' },
    careerCombo: { idealPath: '기획 보조, 크리에이티브 지원, 연구 보조', strength: '유연하게 아이디어를 발전시켜요', weakness: '주도적 역할은 부담' },
    coreAdvice: '당신만의 방식으로 기여하세요. 큰 소리 안 내도 가치 있어요.'
  },

  {
    dayMaster: '乙', mbti: 'ESTJ',
    harmony: { score: 55, summary: '체계와 유연함의 긴장', description: '乙木의 유연함과 ESTJ의 체계성이 만났어요. 서로 다른 강점이 보완될 수 있지만, 방식의 차이로 갈등이 생기기 쉬워요.' },
    synergies: [
      { title: '유연한 실행', description: '체계 안에서 상황에 맞게 조절해요.' },
      { title: '보완적 팀워크', description: '서로 부족한 부분을 채워줘요.' }
    ],
    conflicts: [
      { title: '방식 충돌', description: 'ESTJ는 원칙대로, 乙木은 상황에 맞게 하고 싶어요.', solution: '핵심은 지키되 디테일은 유연하게.' },
      { title: '의견 억압', description: 'ESTJ가 강하면 乙木이 말을 못해요.', solution: '의견을 물어보고 들어주세요.' }
    ],
    loveCombo: { style: '보호받는 느낌이지만 통제로 느껴질 수 있어요', bestMatch: '水 기운 + 감정형(F)', warning: '서로의 방식을 존중하세요' },
    careerCombo: { idealPath: '행정 보조, 비서, 서포트 역할', strength: '체계적인 환경에서 유연하게 대응', weakness: '갈등 상황에서 위축됨' },
    coreAdvice: '당신의 유연함도 가치 있어요. 주눅 들지 마세요.'
  },

  {
    dayMaster: '乙', mbti: 'ESFJ',
    harmony: { score: 78, summary: '함께 돌보는 따뜻한 조화', description: '乙木의 배려심과 ESFJ의 사교성이 만났어요. 주변 사람들을 따뜻하게 챙기는 타입이죠.' },
    synergies: [
      { title: '따뜻한 케어', description: '사람들을 세심하게 돌봐요.' },
      { title: '조화로운 관계', description: '갈등 없이 부드럽게 어울려요.' }
    ],
    conflicts: [
      { title: '평가 의존', description: '남들 시선에 너무 신경 써요.', solution: '자기 기준도 세우세요.' },
      { title: '과한 희생', description: '남 챙기다 자기를 잃어요.', solution: '나를 위한 시간 필수.' }
    ],
    loveCombo: { style: '서로 챙기는 따뜻한 사랑', bestMatch: '金 기운 + 사고형(T)', warning: '서로 맞추기만 하다 지쳐요' },
    careerCombo: { idealPath: '서비스업, 교육, 의료, HR', strength: '사람과의 관계에서 빛나요', weakness: '비판적인 환경은 힘들어요' },
    coreAdvice: '남의 평가보다 자기 만족이 중요해요. 당신이 행복해야 남도 행복해요.'
  },

  {
    dayMaster: '乙', mbti: 'ENFJ',
    harmony: { score: 75, summary: '성장을 돕는 따뜻한 동반자', description: '乙木의 양육 본능과 ENFJ의 리더십이 만났어요. 사람들을 키우고 이끄는 힘이 있죠.' },
    synergies: [
      { title: '성장 지원', description: '사람들의 잠재력을 끌어내요.' },
      { title: '따뜻한 리더십', description: '강요 없이 자연스럽게 이끌어요.' }
    ],
    conflicts: [
      { title: '과한 헌신', description: '둘 다 자기보다 남을 먼저 챙겨서 탈진해요.', solution: '자기 관리 필수. 경계를 세우세요.' },
      { title: '주도권', description: 'ENFJ가 주도하면 乙木이 묻혀요.', solution: '乙木의 의견도 들어주세요.' }
    ],
    loveCombo: { style: '함께 성장하는 동반자적 사랑', bestMatch: '金 기운 + 사고형(T)', warning: '서로 바꾸려 하지 마세요' },
    careerCombo: { idealPath: '교육, 상담, 코칭, 비영리', strength: '사람을 성장시키는 능력', weakness: '경쟁적인 환경은 맞지 않음' },
    coreAdvice: '남을 돕는 만큼 자신도 돌보세요. 당신의 행복도 중요해요.'
  },

  {
    dayMaster: '乙', mbti: 'ENTJ',
    harmony: { score: 52, summary: '강함과 부드러움의 대조', description: '乙木의 유연함과 ENTJ의 강한 리더십이 만났어요. 보완될 수 있지만, 너무 달라서 조율이 어려울 수 있어요.' },
    synergies: [
      { title: '보완적 팀워크', description: 'ENTJ가 방향을 정하면 乙木이 부드럽게 실행해요.' },
      { title: '유연한 지원', description: '강한 리더를 섬세하게 보조해요.' }
    ],
    conflicts: [
      { title: '압도당함', description: 'ENTJ의 강함에 乙木이 위축돼요.', solution: 'ENTJ가 공간을 줘야 해요.' },
      { title: '템포 차이', description: '속도와 방식이 너무 달라요.', solution: '서로의 방식을 인정하세요.' }
    ],
    loveCombo: { style: '보호받는 느낌이지만 통제로 느껴질 수 있어요', bestMatch: '水 기운 + 감정형(F)', warning: 'ENTJ가 乙木을 존중해줘야 해요' },
    careerCombo: { idealPath: '경영진 보좌, 비서, 프로젝트 지원', strength: '강한 리더를 섬세하게 보조', weakness: '주도적 역할은 부담' },
    coreAdvice: '당신의 부드러움도 힘이에요. 강함만이 능력이 아니에요.'
  }
];
