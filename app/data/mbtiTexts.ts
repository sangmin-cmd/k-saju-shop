// MBTI 16개 유형 서술형 텍스트 데이터베이스
// K-Saju 프리미엄 콘텐츠용

export interface MBTIText {
  type: string;           // MBTI 유형 (ESTJ, INFP 등)
  nickname: string;       // 별명
  emoji: string;
  
  // 인지 기능
  cognitiveFunctions: {
    dominant: string;     // 주기능
    auxiliary: string;    // 부기능
    tertiary: string;     // 3차 기능
    inferior: string;     // 열등 기능
  };
  
  // 기본 특성
  basicTraits: {
    summary: string;
    description: string;
    keywords: string[];
    strengths: string[];
    weaknesses: string[];
  };
  
  // 연애운 섹션
  loveLife: {
    loveStyle: string;           // 연애 스타일
    idealPartner: string;        // 이상형
    loveStrengths: string[];
    loveWeaknesses: string[];
    compatibleTypes: string[];   // 잘 맞는 MBTI
    challengingTypes: string[];  // 도전적인 MBTI
    datingTips: string[];
  };
  
  // 직업운 섹션
  career: {
    workStyle: string;
    idealEnvironment: string;
    idealJobs: string[];
    careerStrengths: string[];
    careerWeaknesses: string[];
    growthTips: string[];
  };
  
  // 대인관계
  relationships: {
    socialStyle: string;
    communicationStyle: string;
    conflictStyle: string;
    friendshipTips: string[];
  };
}

export const mbtiTexts: MBTIText[] = [
  // ==================== ISTJ ====================
  {
    type: 'ISTJ',
    nickname: '청렴결백한 논리주의자',
    emoji: '📋',
    
    cognitiveFunctions: {
      dominant: 'Si (내향 감각)',
      auxiliary: 'Te (외향 사고)',
      tertiary: 'Fi (내향 감정)',
      inferior: 'Ne (외향 직관)'
    },
    
    basicTraits: {
      summary: '책임감 있고 신뢰할 수 있는 현실주의자',
      description: `당신은 믿음직스럽고 책임감이 강한 사람이에요. 한번 맡은 일은 끝까지 해내고, 약속은 반드시 지키죠. "이 사람한테 맡기면 안심"이라는 말을 많이 들어요.

체계적이고 조직적이에요. 계획을 세우고 그대로 실행하는 걸 좋아하죠. 갑자기 바뀌는 건 싫어해요. 예측 가능한 환경에서 능력을 발휘해요.

전통과 규칙을 중시해요. "원래 이렇게 해왔으니까"가 중요하고, 검증된 방식을 선호하죠. 새로운 시도보다는 안정적인 방법을 택해요.`,
      keywords: ['책임감', '신뢰', '체계적', '성실함', '전통'],
      strengths: ['끝까지 해냄', '약속을 지킴', '조직력', '성실함'],
      weaknesses: ['융통성 부족', '변화에 느림', '감정 표현 서툼']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 진지하고 헌신적이에요. 가볍게 시작하지 않고, 시작하면 오래 가는 타입이죠.

말보다 행동으로 사랑을 표현해요. "사랑해"라는 말보다 연인을 위해 뭔가를 해주는 걸로 마음을 보여주죠. 기념일 챙기고, 실질적인 도움을 주고요.

다만 표현이 서툴러요. 마음은 있는데 말이 안 나와요. 연인이 "나 사랑해?" 물으면 "당연하지, 왜 그런 걸 물어" 이렇게 되죠.`,
      idealPartner: '당신에게 잘 맞는 상대는 당신의 진심을 알아봐주는 사람이에요. 말 없어도 행동을 보고 사랑을 느끼는 타입이요. 또한 당신에게 새로운 경험을 자연스럽게 소개해주면서도, 당신의 안정적인 면을 존중하는 사람이 좋아요.',
      loveStrengths: ['헌신적이고 충실함', '연인을 위해 행동으로 표현', '장기적 관계 지향', '믿음직스러움'],
      loveWeaknesses: ['감정 표현이 서툼', '로맨틱한 분위기 연출 어려움', '변화를 싫어함', '융통성 부족'],
      compatibleTypes: ['ESFP', 'ESTP', 'ISFJ', 'ESTJ'],
      challengingTypes: ['ENFP', 'INFP', 'ENTP'],
      datingTips: [
        '가끔은 말로 "사랑해"라고 표현해보세요.',
        '새로운 데이트 코스도 시도해보세요.',
        '연인의 감정적 필요를 들어주세요.'
      ]
    },
    
    career: {
      workStyle: '체계적이고 꼼꼼하게 일해요. 마감을 철저히 지키고, 맡은 일은 완벽하게 처리하죠.',
      idealEnvironment: '명확한 규칙과 절차가 있는 조직, 안정적이고 예측 가능한 환경',
      idealJobs: ['회계사', '공무원', '은행원', '법조인', '군인/경찰', '품질관리', '행정관리자'],
      careerStrengths: ['꼼꼼함과 정확성', '책임감', '규정 준수', '일관성'],
      careerWeaknesses: ['새로운 방식 수용 어려움', '즉흥적 대응 약함', '창의적 업무 부담'],
      growthTips: [
        '가끔은 새로운 방식도 시도해보세요.',
        '완벽하지 않아도 괜찮아요. 80%로 빨리 끝내는 것도 방법.',
        '동료들의 다른 의견도 열린 마음으로 들어보세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 오래된 친구를 소중히 여겨요. 새로운 사람을 사귀는 건 느린 편이죠.',
      communicationStyle: '사실 기반으로 명확하게 말해요. 돌려 말하는 거 싫어하죠.',
      conflictStyle: '논리적으로 해결하려 해요. 감정적으로 휘둘리지 않으려 하죠.',
      friendshipTips: [
        '친구에게 가끔은 감정적으로 공감해주세요.',
        '새로운 친구에게도 마음을 열어보세요.',
        '친구의 다른 방식도 인정해주세요.'
      ]
    }
  },

  // ==================== ISFJ ====================
  {
    type: 'ISFJ',
    nickname: '용감한 수호자',
    emoji: '🛡️',
    
    cognitiveFunctions: {
      dominant: 'Si (내향 감각)',
      auxiliary: 'Fe (외향 감정)',
      tertiary: 'Ti (내향 사고)',
      inferior: 'Ne (외향 직관)'
    },
    
    basicTraits: {
      summary: '따뜻하고 헌신적인 보호자',
      description: `당신은 따뜻하고 배려심이 깊은 사람이에요. 주변 사람들을 세심하게 챙기고, 필요한 것을 미리 알아채서 도와주죠.

기억력이 좋아요. 특히 사람들에 대한 것을 잘 기억해요. 친구가 좋아하는 것, 싫어하는 것, 생일, 취향... 다 기억하고 있죠.

겸손하고 조용히 일해요. 자기 PR을 잘 못해서 공로를 인정받지 못할 때가 있어요. 뒤에서 묵묵히 도와주는 타입이죠.`,
      keywords: ['배려심', '헌신', '세심함', '조용한 돌봄', '기억력'],
      strengths: ['배려심', '책임감', '세심함', '인내심'],
      weaknesses: ['자기 희생 과다', '거절 못함', '변화에 약함']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 연인을 정성껏 돌봐요. 연인의 작은 것까지 다 챙기고, 필요한 것을 미리 준비해놓죠.

연인의 과거도 중요하게 여겨요. 처음 만난 날, 첫 데이트 장소, 연인이 했던 말... 다 기억하고 있어서 연인이 감동받아요.

다만 너무 많이 해주다 보면 지쳐요. 내가 이렇게 하는데 상대는 왜 안 하지? 하는 서운함이 쌓일 수 있어요.`,
      idealPartner: '당신의 헌신을 알아봐주고 감사해하는 사람이에요. 받기만 하지 않고 돌려주는 타입이요. 또한 당신이 자기 의견을 말할 수 있게 격려해주는 사람이 좋아요.',
      loveStrengths: ['세심한 돌봄', '기념일 잘 챙김', '연인의 취향 기억', '헌신적'],
      loveWeaknesses: ['자기 희생 과다', '싫은 걸 못 말함', '갈등 회피', '의존적일 수 있음'],
      compatibleTypes: ['ESFP', 'ESTP', 'ISTJ', 'ESFJ'],
      challengingTypes: ['ENTP', 'ENTJ', 'INTP'],
      datingTips: [
        '당신의 필요도 말하세요. 연인은 모를 수 있어요.',
        '너무 많이 해주지 마세요. 지치면 관계도 힘들어져요.',
        '가끔은 새로운 것도 시도해보세요.'
      ]
    },
    
    career: {
      workStyle: '꼼꼼하고 성실하게 일해요. 맡은 일은 책임지고 끝까지 해내죠.',
      idealEnvironment: '협력적이고 안정적인 조직, 도움을 줄 수 있는 역할',
      idealJobs: ['간호사', '교사', '사회복지사', '비서', '상담사', '사서', '인사담당'],
      careerStrengths: ['꼼꼼함', '팀 분위기 조성', '다른 사람 돌봄', '신뢰성'],
      careerWeaknesses: ['자기 PR 약함', '거절 못해서 일이 쌓임', '변화 적응 느림'],
      growthTips: [
        '당신의 성과를 적극적으로 말하세요.',
        '너무 많은 일을 떠안지 마세요.',
        '가끔은 "안 됩니다"라고 말해도 괜찮아요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 깊은 관계를 선호해요. 오래된 친구를 소중히 여기죠.',
      communicationStyle: '부드럽고 배려 있게 말해요. 상대방 기분을 살피면서요.',
      conflictStyle: '갈등을 피하려 해요. 양보하는 경우가 많죠.',
      friendshipTips: [
        '친구에게 당신의 필요도 말하세요.',
        '항상 양보만 하지 마세요.',
        '새로운 친구에게도 마음을 열어보세요.'
      ]
    }
  },

  // ==================== INFJ ====================
  {
    type: 'INFJ',
    nickname: '선의의 옹호자',
    emoji: '🔮',
    
    cognitiveFunctions: {
      dominant: 'Ni (내향 직관)',
      auxiliary: 'Fe (외향 감정)',
      tertiary: 'Ti (내향 사고)',
      inferior: 'Se (외향 감각)'
    },
    
    basicTraits: {
      summary: '이상주의적이고 통찰력 있는 조언자',
      description: `당신은 깊은 통찰력을 가진 사람이에요. 표면 아래의 진실을 보고, 사람들의 숨은 동기와 감정을 읽어내죠.

이상주의자예요. 더 나은 세상을 꿈꾸고, 의미 있는 일을 하고 싶어해요. 피상적인 것보다 깊이 있는 것을 추구하죠.

혼자만의 시간이 꼭 필요해요. 사람들과 있으면 에너지가 빨리 소모되어서, 혼자 충전하는 시간이 있어야 해요.`,
      keywords: ['통찰력', '이상주의', '깊이', '의미 추구', '공감'],
      strengths: ['깊은 이해력', '비전 제시', '공감 능력', '헌신'],
      weaknesses: ['완벽주의', '현실과 이상의 괴리', '쉽게 지침']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 깊고 의미 있는 연결을 원해요. 표면적인 만남은 싫고, 영혼이 통하는 느낌을 찾아요.

연인의 잠재력을 봐요. 지금 모습보다 될 수 있는 모습을 보고 응원하죠. "넌 더 멋진 사람이 될 수 있어"라고 믿어요.

다만 이상이 너무 높아서 실망할 수 있어요. 현실의 연인이 상상 속 이상형과 다르면 힘들어하죠.`,
      idealPartner: '당신의 깊이를 이해하고 함께 성장할 수 있는 사람이에요. 피상적이지 않고, 진지한 대화를 나눌 수 있는 타입이요. 당신의 비전을 존중하면서도 현실에 발을 딛게 해주는 사람이 좋아요.',
      loveStrengths: ['깊은 감정적 연결', '연인의 성장을 응원', '진심 어린 헌신', '직관적으로 이해'],
      loveWeaknesses: ['이상이 너무 높음', '현실 연인에게 실망', '혼자 끙끙 앓음', '갈등 회피'],
      compatibleTypes: ['ENFP', 'ENTP', 'INFP', 'INTJ'],
      challengingTypes: ['ESTP', 'ISTP', 'ESFP'],
      datingTips: [
        '완벽한 사람은 없어요. 현실의 연인을 받아들이세요.',
        '속마음을 말로 표현하세요.',
        '가끔은 가벼운 것도 즐겨보세요.'
      ]
    },
    
    career: {
      workStyle: '의미 있는 일을 해야 동기부여가 돼요. 단순 반복은 힘들어하죠.',
      idealEnvironment: '가치 있는 미션이 있는 조직, 창의성을 발휘할 수 있는 곳',
      idealJobs: ['상담사', '작가', '심리학자', '성직자', '비영리단체', '교수', '코치'],
      careerStrengths: ['통찰력', '사람 이해', '비전 제시', '글쓰기'],
      careerWeaknesses: ['현실적 업무 부담', '자기 PR 약함', '지나친 완벽주의'],
      growthTips: [
        '완벽하지 않아도 괜찮아요. 일단 시작하세요.',
        '당신의 아이디어를 적극적으로 말하세요.',
        '현실적인 목표도 세워보세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수와 깊게 지내요. 많은 사람과 어울리면 에너지가 빨리 닳아요.',
      communicationStyle: '깊이 있는 대화를 좋아해요. 피상적인 수다는 힘들어하죠.',
      conflictStyle: '갈등을 피하다가 한꺼번에 터질 수 있어요.',
      friendshipTips: [
        '혼자만의 시간을 확보하세요.',
        '가벼운 대화도 괜찮아요.',
        '친구의 현실적인 면도 받아들이세요.'
      ]
    }
  },

  // ==================== INTJ ====================
  {
    type: 'INTJ',
    nickname: '용의주도한 전략가',
    emoji: '🧠',
    
    cognitiveFunctions: {
      dominant: 'Ni (내향 직관)',
      auxiliary: 'Te (외향 사고)',
      tertiary: 'Fi (내향 감정)',
      inferior: 'Se (외향 감각)'
    },
    
    basicTraits: {
      summary: '독립적이고 전략적인 사고가',
      description: `당신은 전략적 사고의 달인이에요. 큰 그림을 보고, 목표를 향한 최적의 경로를 찾아내죠. 복잡한 문제도 체계적으로 분석해서 해결해요.

독립적이에요. 혼자서도 잘하고, 오히려 혼자 있을 때 더 효율적이에요. 다른 사람의 도움 없이도 목표를 달성하죠.

높은 기준을 가지고 있어요. 자기 자신에게도, 남에게도요. 그래서 "까다롭다", "차갑다"는 말을 들을 때가 있어요.`,
      keywords: ['전략적', '독립적', '높은 기준', '효율성', '분석력'],
      strengths: ['전략적 사고', '독립성', '결단력', '지적 능력'],
      weaknesses: ['감정 표현 서툼', '타인에게 냉정함', '완벽주의']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 진지하고 선택적이에요. 아무나 만나지 않고, 자기 기준에 맞는 사람만 만나죠.

연인에게도 높은 기준을 적용해요. 지적으로 자극이 되고, 성장할 수 있는 사람을 원하죠.

다만 감정 표현이 서툴러요. 머리로는 사랑하는데 표현이 안 돼요. 연인이 "나 사랑해?"라고 물으면 "논리적으로 생각해봐, 내가 여기 있잖아"라고 답하는 타입이죠.`,
      idealPartner: '지적으로 대등하게 대화할 수 있는 사람이에요. 당신의 비전을 이해하고 존중하는 타입이요. 감정적으로 표현을 요구하기보다 행동으로 사랑을 읽어주는 사람이 좋아요.',
      loveStrengths: ['충성심', '문제 해결 능력', '장기적 비전', '지적 자극'],
      loveWeaknesses: ['감정 표현 부족', '너무 분석적', '연인에게 높은 기대', '로맨스에 서툼'],
      compatibleTypes: ['ENFP', 'ENTP', 'INFJ', 'ENTJ'],
      challengingTypes: ['ESFP', 'ISFP', 'ESFJ'],
      datingTips: [
        '감정도 중요해요. 가끔은 논리를 내려놓으세요.',
        '연인의 감정적 필요를 들어주세요.',
        '완벽하지 않은 것도 받아들이세요.'
      ]
    },
    
    career: {
      workStyle: '전략적이고 효율적으로 일해요. 무의미한 일은 참기 어려워하죠.',
      idealEnvironment: '능력으로 평가받는 곳, 비효율적인 절차가 없는 곳',
      idealJobs: ['전략 컨설턴트', '과학자', 'CEO', '투자가', '소프트웨어 개발자', '교수', '건축가'],
      careerStrengths: ['전략적 사고', '문제 해결', '독립적 업무', '장기 계획'],
      careerWeaknesses: ['팀워크 어려움', '감정적 상황 대처', '타인 의견 무시 경향'],
      growthTips: [
        '동료들의 의견도 가치 있어요.',
        '감정적 지능도 리더십에 중요해요.',
        '완벽하지 않아도 시작하세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 지적인 친구와 깊게 지내요.',
      communicationStyle: '논리적이고 직접적으로 말해요.',
      conflictStyle: '논리로 해결하려 해요. 감정적 접근은 어려워하죠.',
      friendshipTips: [
        '친구의 감정도 들어주세요.',
        '가끔은 논리 말고 공감을 해보세요.',
        '완벽하지 않은 친구도 받아들이세요.'
      ]
    }
  },

  // ==================== ISTP ====================
  {
    type: 'ISTP',
    nickname: '만능 재주꾼',
    emoji: '🔧',
    
    cognitiveFunctions: {
      dominant: 'Ti (내향 사고)',
      auxiliary: 'Se (외향 감각)',
      tertiary: 'Ni (내향 직관)',
      inferior: 'Fe (외향 감정)'
    },
    
    basicTraits: {
      summary: '분석적이고 실용적인 문제 해결사',
      description: `당신은 손재주가 좋고 실용적인 문제 해결사예요. 복잡한 기계든, 어려운 상황이든, 차분하게 분석해서 해결책을 찾아내죠.

자유를 중시해요. 구속받는 거 싫어하고, 자기 방식대로 하고 싶어해요. 규칙이 많은 환경은 답답하죠.

말수가 적어요. 말보다 행동으로 보여주는 타입이고, 필요한 말만 해요. 그래서 "과묵하다", "알 수 없다"는 말을 들어요.`,
      keywords: ['실용적', '분석적', '자유로움', '과묵함', '손재주'],
      strengths: ['문제 해결 능력', '위기 대처', '실용성', '독립성'],
      weaknesses: ['감정 표현 서툼', '장기 계획 약함', '타인 감정에 둔감']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 쿨하고 독립적이에요. 집착하지 않고, 연인에게도 자유를 줘요.

말보다 행동으로 사랑을 표현해요. 연인 차가 고장 나면 직접 고쳐주고, 필요한 걸 묵묵히 해주는 타입이죠.

다만 너무 쿨해서 연인이 불안해할 수 있어요. "나 좋아하는 거 맞아?"라고 의심하게 만들 수 있죠.`,
      idealPartner: '당신의 자유를 존중해주는 사람이에요. 집착하지 않고, 각자의 시간을 인정하는 타입이요. 당신의 행동을 보고 사랑을 알아채는 사람이 좋아요.',
      loveStrengths: ['자유를 존중', '실질적 도움', '위기에 강함', '집착 안 함'],
      loveWeaknesses: ['감정 표현 부족', '미래 계획 안 함', '약속 잊어버림', '너무 쿨해서 오해'],
      compatibleTypes: ['ESTJ', 'ESFJ', 'ENTJ', 'ENFJ'],
      challengingTypes: ['INFJ', 'ENFP', 'INFP'],
      datingTips: [
        '가끔은 말로 표현해보세요.',
        '연인과의 미래도 얘기해보세요.',
        '기념일 정도는 챙기세요.'
      ]
    },
    
    career: {
      workStyle: '실용적이고 효율적으로 일해요. 손으로 직접 하는 걸 좋아하죠.',
      idealEnvironment: '자유롭게 일할 수 있는 곳, 실용적인 문제를 해결하는 곳',
      idealJobs: ['엔지니어', '기술자', '파일럿', '운동선수', '응급구조사', '포렌식', '장인'],
      careerStrengths: ['문제 해결', '위기 대응', '실용성', '효율성'],
      careerWeaknesses: ['장기 프로젝트 힘듦', '팀 미팅 싫어함', '서류 작업 지루함'],
      growthTips: [
        '장기적인 계획도 세워보세요.',
        '팀원들과 소통하는 시간을 가지세요.',
        '감정적 상황도 대처하는 연습을 하세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 친구와 느슨하게 지내요. 자주 안 만나도 괜찮은 사이.',
      communicationStyle: '필요한 말만 해요. 수다는 힘들어하죠.',
      conflictStyle: '피하거나 논리로 해결하려 해요.',
      friendshipTips: [
        '친구에게 가끔은 먼저 연락하세요.',
        '친구의 감정적인 얘기도 들어주세요.',
        '약속은 지키세요.'
      ]
    }
  },

  // ==================== ISFP ====================
  {
    type: 'ISFP',
    nickname: '호기심 많은 예술가',
    emoji: '🎨',
    
    cognitiveFunctions: {
      dominant: 'Fi (내향 감정)',
      auxiliary: 'Se (외향 감각)',
      tertiary: 'Ni (내향 직관)',
      inferior: 'Te (외향 사고)'
    },
    
    basicTraits: {
      summary: '따뜻하고 감성적인 자유로운 영혼',
      description: `당신은 감성적이고 예술적인 영혼이에요. 아름다운 것을 알아보는 눈이 있고, 감정의 결을 섬세하게 느끼죠.

자유를 사랑해요. 규칙이나 틀에 갇히는 걸 싫어하고, 자기만의 방식으로 살고 싶어해요.

조용하지만 깊은 사람이에요. 겉으로는 온순해 보여도 속은 열정적이고, 자기 가치관은 확고해요.`,
      keywords: ['감성적', '예술적', '자유로움', '온순함', '깊은 감정'],
      strengths: ['감수성', '적응력', '배려심', '현재에 충실'],
      weaknesses: ['결정 어려움', '비판에 예민', '갈등 회피']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 깊고 진실되게 사랑해요. 가볍게 만나는 건 못하고, 마음을 주면 온전히 주는 스타일이죠.

연인과 함께하는 순간순간을 소중히 여겨요. 멋진 경치를 같이 보고, 맛있는 음식을 나누고, 그 순간들을 음미하죠.

다만 갈등이 생기면 피하려 해요. 싫은 것도 말 못하고 참다가 지칠 수 있어요.`,
      idealPartner: '당신의 감성을 이해하고 존중하는 사람이에요. 자유를 침해하지 않고, 함께 아름다운 것을 즐길 수 있는 타입이요. 당신이 말하지 않아도 느끼는 걸 알아채주는 사람이 좋아요.',
      loveStrengths: ['깊은 감정적 연결', '순간을 소중히', '진심 어린 사랑', '감각적 표현'],
      loveWeaknesses: ['갈등 회피', '의견 말하기 어려움', '미래 계획 약함', '비판에 상처'],
      compatibleTypes: ['ESTJ', 'ESFJ', 'ENTJ', 'ENFJ'],
      challengingTypes: ['INTJ', 'ENTP', 'INTP'],
      datingTips: [
        '싫은 건 부드럽게라도 말하세요.',
        '미래 얘기도 가끔 해보세요.',
        '갈등은 피하지 말고 대화하세요.'
      ]
    },
    
    career: {
      workStyle: '창의적이고 감각적인 일을 좋아해요. 자유롭게 할 수 있을 때 능력이 발휘되죠.',
      idealEnvironment: '자유롭고 창의적인 곳, 아름다운 것을 다루는 곳',
      idealJobs: ['디자이너', '아티스트', '사진작가', '음악가', '요리사', '플로리스트', '수의사'],
      careerStrengths: ['창의성', '감각', '현재에 집중', '배려'],
      careerWeaknesses: ['장기 계획 어려움', '비판에 예민', '자기 PR 약함'],
      growthTips: [
        '비판을 성장의 기회로 보세요.',
        '장기적인 커리어 계획도 세워보세요.',
        '당신의 작품/성과를 자신 있게 보여주세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 깊은 친구와 지내요. 큰 모임은 에너지 소모가 심해요.',
      communicationStyle: '부드럽고 조용하게 말해요. 논쟁은 피하죠.',
      conflictStyle: '피하거나 양보하는 경우가 많아요.',
      friendshipTips: [
        '친구에게 당신의 의견도 말하세요.',
        '갈등을 피하기만 하지 마세요.',
        '혼자만의 시간도 확보하세요.'
      ]
    }
  },

  // ==================== INFP ====================
  {
    type: 'INFP',
    nickname: '열정적인 중재자',
    emoji: '🦋',
    
    cognitiveFunctions: {
      dominant: 'Fi (내향 감정)',
      auxiliary: 'Ne (외향 직관)',
      tertiary: 'Si (내향 감각)',
      inferior: 'Te (외향 사고)'
    },
    
    basicTraits: {
      summary: '이상주의적이고 깊은 감성의 소유자',
      description: `당신은 이상주의자예요. 더 나은 세상을 꿈꾸고, 진정성 있는 삶을 추구하죠. 가식적인 것은 참기 어려워요.

내면 세계가 풍부해요. 상상력이 넘치고, 감정의 깊이가 있어요. 글쓰기나 예술로 자신을 표현하는 걸 좋아하죠.

겉으로는 조용해 보여도 속은 열정적이에요. 자기 가치관과 맞는 일에는 놀라운 에너지를 발휘하죠.`,
      keywords: ['이상주의', '감성', '진정성', '상상력', '열정'],
      strengths: ['깊은 감성', '창의력', '공감 능력', '진정성'],
      weaknesses: ['현실과 이상의 괴리', '비판에 예민', '결정 어려움']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 진정한 영혼의 연결을 찾아요. 피상적인 만남은 싫고, 서로의 깊은 곳을 이해하는 관계를 원하죠.

연인을 이상화하는 경향이 있어요. 처음엔 "운명의 상대"라고 느끼다가, 현실과 다르면 실망하기도 해요.

깊고 진심 어린 사랑을 하지만, 감정 기복이 있을 수 있어요.`,
      idealPartner: '당신의 내면 세계를 이해하고 존중하는 사람이에요. 깊은 대화를 나눌 수 있고, 가치관이 맞는 타입이요. 현실적인 부분을 보완해주면서도 당신의 꿈을 응원하는 사람이 좋아요.',
      loveStrengths: ['깊은 감정적 연결', '진심 어린 헌신', '로맨틱함', '연인의 진정한 모습을 봄'],
      loveWeaknesses: ['이상화 후 실망', '현실적 문제에 약함', '감정 기복', '갈등 회피'],
      compatibleTypes: ['ENFJ', 'ENTJ', 'INFJ', 'INTJ'],
      challengingTypes: ['ESTJ', 'ESTP', 'ISTJ'],
      datingTips: [
        '완벽한 사람은 없어요. 현실의 연인을 받아들이세요.',
        '현실적인 문제도 함께 해결하세요.',
        '감정 기복을 연인에게 설명해주세요.'
      ]
    },
    
    career: {
      workStyle: '의미 있는 일을 할 때 동기부여가 돼요. 자기 가치관과 맞아야 해요.',
      idealEnvironment: '창의적이고 자율적인 곳, 가치 있는 미션이 있는 곳',
      idealJobs: ['작가', '상담사', '예술가', '비영리단체', '심리학자', '교사', 'UX 디자이너'],
      careerStrengths: ['창의성', '공감 능력', '글쓰기', '가치 지향'],
      careerWeaknesses: ['현실적 업무 힘듦', '비판에 예민', '자기 PR 약함'],
      growthTips: [
        '이상만큼 현실적인 계획도 세우세요.',
        '비판을 개인적으로 받아들이지 마세요.',
        '당신의 가치를 자신 있게 말하세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 깊은 관계를 선호해요. 진정성 있는 연결을 원하죠.',
      communicationStyle: '깊고 의미 있는 대화를 좋아해요.',
      conflictStyle: '피하다가 내면에서 끓어오를 수 있어요.',
      friendshipTips: [
        '모든 친구가 당신처럼 깊지 않아도 괜찮아요.',
        '갈등을 피하기만 하지 마세요.',
        '현실적인 친구의 조언도 들어보세요.'
      ]
    }
  },

  // ==================== INTP ====================
  {
    type: 'INTP',
    nickname: '논리적인 사색가',
    emoji: '🤔',
    
    cognitiveFunctions: {
      dominant: 'Ti (내향 사고)',
      auxiliary: 'Ne (외향 직관)',
      tertiary: 'Si (내향 감각)',
      inferior: 'Fe (외향 감정)'
    },
    
    basicTraits: {
      summary: '분석적이고 창의적인 이론가',
      description: `당신은 논리와 이론의 세계에서 빛나는 사람이에요. 복잡한 개념을 분석하고, 새로운 아이디어를 탐구하는 걸 좋아하죠.

호기심이 끝없어요. 왜?라는 질문을 멈추지 않고, 모든 것의 원리를 알고 싶어해요.

독립적이고 비순응적이에요. 남들이 당연하게 받아들이는 것도 의심하고, 자기만의 결론을 내리죠.`,
      keywords: ['논리적', '호기심', '분석적', '독립적', '창의적'],
      strengths: ['분석력', '창의성', '객관성', '문제 해결'],
      weaknesses: ['감정 표현 서툼', '실행력 부족', '사회성 약함']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 지적인 연결을 중시해요. 깊은 대화를 나눌 수 있는 사람에게 끌리죠.

감정 표현이 서툴러요. 사랑한다는 걸 분석적으로 설명하려 해요. "감정적으로 말하면..."이라고 시작하는 타입이죠.

독립적인 관계를 원해요. 서로의 공간을 존중하고, 집착하지 않는 연애를 좋아해요.`,
      idealPartner: '지적인 대화를 나눌 수 있는 사람이에요. 당신의 독립성을 존중하고, 논리적인 토론을 즐길 수 있는 타입이요. 감정적 표현을 요구하기보다 이해해주는 사람이 좋아요.',
      loveStrengths: ['지적 자극', '독립성 존중', '열린 마음', '깊은 이해'],
      loveWeaknesses: ['감정 표현 부족', '로맨스에 서툼', '일상적인 것에 무관심', '결정 미룸'],
      compatibleTypes: ['ENTJ', 'ENFJ', 'ESTJ', 'INTJ'],
      challengingTypes: ['ESFJ', 'ISFJ', 'ESFP'],
      datingTips: [
        '감정도 논리만큼 중요해요.',
        '기념일 같은 것도 챙겨보세요.',
        '연인의 감정적 필요에 반응하세요.'
      ]
    },
    
    career: {
      workStyle: '복잡한 문제를 분석하고 해결책을 찾는 일을 좋아해요.',
      idealEnvironment: '지적 자유가 있는 곳, 혼자 집중할 수 있는 곳',
      idealJobs: ['과학자', '프로그래머', '철학자', '애널리스트', '수학자', '게임 개발자', '연구원'],
      careerStrengths: ['분석력', '창의적 문제 해결', '시스템 사고', '이론 개발'],
      careerWeaknesses: ['실행력', '대인관계', '현실적 업무', '마감 관리'],
      growthTips: [
        '아이디어를 실행으로 옮기는 연습을 하세요.',
        '팀원들과 소통하는 시간을 가지세요.',
        '완벽하지 않아도 일단 마무리하세요.'
      ]
    },
    
    relationships: {
      socialStyle: '소수의 지적인 친구와 어울려요. 깊은 토론을 좋아하죠.',
      communicationStyle: '논리적으로 정확하게 말해요. 감정적 표현은 어색하죠.',
      conflictStyle: '논리로 해결하려 하고, 감정적 갈등은 피해요.',
      friendshipTips: [
        '친구의 감정도 논리만큼 중요해요.',
        '가끔은 가벼운 수다도 괜찮아요.',
        '약속 시간은 지키세요.'
      ]
    }
  },

  // ==================== ESTP ====================
  {
    type: 'ESTP',
    nickname: '모험을 즐기는 사업가',
    emoji: '🏄',
    
    cognitiveFunctions: {
      dominant: 'Se (외향 감각)',
      auxiliary: 'Ti (내향 사고)',
      tertiary: 'Fe (외향 감정)',
      inferior: 'Ni (내향 직관)'
    },
    
    basicTraits: {
      summary: '행동력 있고 현실적인 모험가',
      description: `당신은 행동파예요. 생각만 하고 있는 거 싫어하고, 일단 해보는 스타일이죠. "일단 해보고 생각하자"가 모토예요.

현재를 즐겨요. 과거 후회나 미래 걱정보다 지금 이 순간을 살아요. 재미있는 것, 짜릿한 것을 좋아하죠.

사교적이고 에너지가 넘쳐요. 어디서든 분위기를 띄우고, 사람들과 어울리는 걸 좋아해요.`,
      keywords: ['행동력', '모험', '현실적', '사교적', '즉흥적'],
      strengths: ['실행력', '적응력', '위기 대처', '사교성'],
      weaknesses: ['장기 계획 약함', '인내심 부족', '깊이 부족']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 재미있고 짜릿해요. 지루한 데이트는 싫고, 새롭고 흥미진진한 경험을 함께하고 싶어해요.

직접적으로 표현해요. 좋아하면 바로 다가가고, 솔직하게 말하죠. 밀당? 그런 거 잘 못해요.

다만 오래 가기가 어려울 수 있어요. 초반의 설렘이 사라지면 지루해지거든요.`,
      idealPartner: '함께 모험을 즐길 수 있는 사람이에요. 새로운 것을 시도하는 걸 좋아하고, 당신의 에너지를 따라올 수 있는 타입이요. 너무 구속하거나 계획적인 사람은 답답해요.',
      loveStrengths: ['재미있는 데이트', '직접적인 표현', '현재에 충실', '열정적'],
      loveWeaknesses: ['오래 가기 어려움', '깊은 대화 부족', '책임감 부족', '즉흥적'],
      compatibleTypes: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'],
      challengingTypes: ['INFJ', 'INFP', 'INTJ'],
      datingTips: [
        '장기적인 관계도 생각해보세요.',
        '연인과 깊은 대화도 나눠보세요.',
        '약속은 지키세요.'
      ]
    },
    
    career: {
      workStyle: '빠르게 움직이고 결과를 내는 일을 좋아해요. 책상에만 앉아있는 건 힘들죠.',
      idealEnvironment: '역동적이고 변화가 많은 곳, 행동으로 성과를 내는 곳',
      idealJobs: ['영업', '운동선수', '응급구조사', '경찰', '파일럿', '이벤트 플래너', '부동산'],
      careerStrengths: ['실행력', '위기 대응', '협상력', '적응력'],
      careerWeaknesses: ['장기 프로젝트', '서류 작업', '반복 업무'],
      growthTips: [
        '장기적인 목표도 세워보세요.',
        '문서 작업도 중요해요. 기록을 남기세요.',
        '인내심을 기르세요.'
      ]
    },
    
    relationships: {
      socialStyle: '넓고 다양하게 사귀어요. 어디서든 친구를 쉽게 만들죠.',
      communicationStyle: '직설적이고 유머러스해요.',
      conflictStyle: '직접 부딪혀서 해결하려 해요.',
      friendshipTips: [
        '깊은 관계도 필요해요.',
        '친구의 감정적인 면도 들어주세요.',
        '약속은 지키세요.'
      ]
    }
  },

  // ==================== ESFP ====================
  {
    type: 'ESFP',
    nickname: '자유로운 영혼의 연예인',
    emoji: '🎉',
    
    cognitiveFunctions: {
      dominant: 'Se (외향 감각)',
      auxiliary: 'Fi (내향 감정)',
      tertiary: 'Te (외향 사고)',
      inferior: 'Ni (내향 직관)'
    },
    
    basicTraits: {
      summary: '밝고 사교적인 분위기 메이커',
      description: `당신은 파티의 중심이에요. 어디를 가든 분위기를 밝히고, 사람들을 즐겁게 만들죠. 타고난 엔터테이너예요.

현재를 즐겨요. 지금 이 순간이 가장 중요하고, 재미있는 것에 끌려요. 인생은 즐기라고 있는 거잖아요!

따뜻하고 관대해요. 사람들을 좋아하고, 모두가 행복하기를 바라요.`,
      keywords: ['밝음', '사교적', '재미', '관대함', '현재 지향'],
      strengths: ['사교성', '적응력', '긍정적', '실용성'],
      weaknesses: ['장기 계획 약함', '갈등 회피', '깊이 부족']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 재미있고 열정적이에요. 연인과 함께하는 모든 순간을 즐기고, 특별하게 만들죠.

애정 표현을 아끼지 않아요. 연인에게 듬뿍 표현하고, 선물하고, 함께하는 시간을 중시해요.

다만 깊은 대화나 무거운 주제는 어려워해요. "그냥 즐기자~"로 넘기려는 경향이 있죠.`,
      idealPartner: '함께 재미있게 지낼 수 있는 사람이에요. 당신의 밝은 에너지를 좋아하고, 함께 모험을 즐길 수 있는 타입이요. 너무 무겁거나 비판적인 사람은 힘들어요.',
      loveStrengths: ['열정적인 사랑', '재미있는 데이트', '애정 표현 풍부', '현재에 충실'],
      loveWeaknesses: ['깊은 대화 회피', '갈등 회피', '장기 계획 부족', '쉽게 지루해함'],
      compatibleTypes: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
      challengingTypes: ['INTJ', 'INTP', 'INFJ'],
      datingTips: [
        '진지한 대화도 필요해요.',
        '미래에 대해서도 얘기해보세요.',
        '갈등을 피하지 말고 해결하세요.'
      ]
    },
    
    career: {
      workStyle: '사람들과 어울리면서 즐겁게 일해요. 지루한 건 참기 어렵죠.',
      idealEnvironment: '활기차고 사람들과 어울리는 곳',
      idealJobs: ['연예인', '이벤트 플래너', '영업', '관광가이드', '호스트', '인플루언서', 'PR'],
      careerStrengths: ['사교성', '적응력', '열정', '분위기 조성'],
      careerWeaknesses: ['반복 업무', '혼자 일하기', '장기 프로젝트'],
      growthTips: [
        '지루한 일도 해야 할 때가 있어요.',
        '장기적인 커리어 계획을 세우세요.',
        '혼자 집중하는 시간도 만드세요.'
      ]
    },
    
    relationships: {
      socialStyle: '넓고 다양하게 사귀어요. 모든 사람과 친해질 수 있죠.',
      communicationStyle: '밝고 유머러스하게 말해요.',
      conflictStyle: '피하거나 가볍게 넘기려 해요.',
      friendshipTips: [
        '깊은 친구 관계도 만드세요.',
        '친구의 힘든 얘기도 들어주세요.',
        '약속은 지키세요.'
      ]
    }
  },

  // ==================== ENFP ====================
  {
    type: 'ENFP',
    nickname: '재기발랄한 활동가',
    emoji: '🌈',
    
    cognitiveFunctions: {
      dominant: 'Ne (외향 직관)',
      auxiliary: 'Fi (내향 감정)',
      tertiary: 'Te (외향 사고)',
      inferior: 'Si (내향 감각)'
    },
    
    basicTraits: {
      summary: '열정적이고 창의적인 아이디어 뱅크',
      description: `당신은 가능성의 세계에서 사는 사람이에요. 새로운 아이디어가 끊임없이 떠오르고, 세상의 모든 것에 흥미를 느끼죠.

사람들과의 연결을 좋아해요. 진정성 있는 관계를 원하고, 모두의 가능성을 믿어요.

열정이 넘쳐요. 좋아하는 일에는 엄청난 에너지를 쏟죠. 다만 관심이 여러 곳으로 분산되기도 해요.`,
      keywords: ['열정', '창의성', '가능성', '진정성', '연결'],
      strengths: ['창의력', '열정', '공감 능력', '적응력'],
      weaknesses: ['집중 분산', '마무리 약함', '현실적 문제 회피']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 열정적이고 로맨틱해요. 연인의 가능성을 보고, "넌 정말 특별해"라고 진심으로 믿어요.

새롭고 재미있는 것을 함께하고 싶어해요. 매번 다른 데이트, 깊은 대화, 함께하는 모험... 지루한 건 싫어요.

다만 현실적인 문제는 어려워해요. 돈 얘기, 미래 계획 같은 거요.`,
      idealPartner: '당신의 열정을 이해하고 함께 즐길 수 있는 사람이에요. 깊은 대화를 나눌 수 있고, 당신의 아이디어에 귀 기울여주는 타입이요. 현실적인 부분을 보완해주면서도 당신의 자유를 존중하는 사람이 좋아요.',
      loveStrengths: ['열정적인 사랑', '연인의 가능성을 봄', '재미있는 데이트', '깊은 연결'],
      loveWeaknesses: ['현실적 문제 회피', '관심 분산', '이상화 후 실망', '일관성 부족'],
      compatibleTypes: ['INFJ', 'INTJ', 'INFP', 'ENFJ'],
      challengingTypes: ['ISTJ', 'ESTJ', 'ISTP'],
      datingTips: [
        '현실적인 문제도 함께 해결하세요.',
        '한 사람에게 집중하세요.',
        '약속한 건 끝까지 하세요.'
      ]
    },
    
    career: {
      workStyle: '창의적이고 자유로운 환경에서 빛나요. 새로운 프로젝트를 시작하는 건 잘하죠.',
      idealEnvironment: '창의적이고 자율적인 곳, 사람들과 협업하는 곳',
      idealJobs: ['마케터', '작가', '상담사', '스타트업', '크리에이터', '교육자', '이벤트 플래너'],
      careerStrengths: ['창의성', '아이디어', '소통 능력', '열정'],
      careerWeaknesses: ['마무리 부족', '디테일 약함', '일관성'],
      growthTips: [
        '시작한 프로젝트는 끝까지 하세요.',
        '디테일도 챙기세요.',
        '장기적인 커리어 목표를 세우세요.'
      ]
    },
    
    relationships: {
      socialStyle: '넓고 깊게 사귀어요. 진정성 있는 연결을 원하죠.',
      communicationStyle: '열정적이고 따뜻하게 말해요.',
      conflictStyle: '대화로 해결하려 하지만, 무거운 갈등은 피할 수 있어요.',
      friendshipTips: [
        '모든 친구에게 너무 많은 에너지를 쓰지 마세요.',
        '약속은 지키세요.',
        '가끔은 현실적인 조언도 필요해요.'
      ]
    }
  },

  // ==================== ENTP ====================
  {
    type: 'ENTP',
    nickname: '논쟁을 즐기는 변론가',
    emoji: '💡',
    
    cognitiveFunctions: {
      dominant: 'Ne (외향 직관)',
      auxiliary: 'Ti (내향 사고)',
      tertiary: 'Fe (외향 감정)',
      inferior: 'Si (내향 감각)'
    },
    
    basicTraits: {
      summary: '지적이고 도전적인 아이디어 탐험가',
      description: `당신은 아이디어의 세계에서 사는 사람이에요. 토론과 논쟁을 즐기고, 기존의 것에 "왜?"라고 질문하죠.

지적 호기심이 끝없어요. 새로운 개념을 탐구하고, 다른 관점을 찾아요. 한 가지에 오래 머무는 건 지루해요.

재치 있고 유머러스해요. 말빨이 좋고, 사람들을 웃기고 설득하는 능력이 있죠.`,
      keywords: ['지적', '도전적', '창의적', '논쟁', '아이디어'],
      strengths: ['창의력', '논리력', '적응력', '설득력'],
      weaknesses: ['인내심 부족', '감정 표현 서툼', '마무리 약함']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 지적인 연결을 중시해요. 같이 토론하고, 서로 자극을 줄 수 있는 관계를 원하죠.

지루한 건 참을 수 없어요. 연애에서도 새로움과 도전을 찾아요.

다만 감정적인 부분은 어려워해요. 연인이 감정적으로 다가오면 논리로 대응하려 하죠.`,
      idealPartner: '지적으로 대등하게 대화할 수 있는 사람이에요. 당신의 도전적인 면을 받아주고, 함께 토론을 즐길 수 있는 타입이요. 감정적 요구가 너무 많지 않은 사람이 편해요.',
      loveStrengths: ['지적 자극', '재미있는 대화', '열린 마음', '창의적인 데이트'],
      loveWeaknesses: ['감정 표현 부족', '논쟁으로 상처 줄 수 있음', '일관성 부족', '책임 회피'],
      compatibleTypes: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
      challengingTypes: ['ISFJ', 'ESFJ', 'ISTJ'],
      datingTips: [
        '논쟁과 싸움은 달라요. 조절하세요.',
        '감정적인 것도 중요해요.',
        '약속한 건 지키세요.'
      ]
    },
    
    career: {
      workStyle: '새로운 문제를 해결하고 아이디어를 탐구하는 일을 좋아해요.',
      idealEnvironment: '지적 자유가 있고 도전적인 곳',
      idealJobs: ['변호사', '기업가', '컨설턴트', '마케터', '발명가', '저널리스트', '투자가'],
      careerStrengths: ['창의력', '문제 해결', '설득력', '전략적 사고'],
      careerWeaknesses: ['마무리 부족', '반복 업무 싫음', '디테일 약함'],
      growthTips: [
        '아이디어를 실행까지 가져가세요.',
        '디테일도 중요해요.',
        '팀원들의 감정도 고려하세요.'
      ]
    },
    
    relationships: {
      socialStyle: '다양한 사람들과 어울려요. 흥미로운 사람에게 끌리죠.',
      communicationStyle: '재치 있고 도전적으로 말해요.',
      conflictStyle: '토론으로 해결하려 해요. 가끔 너무 날카롭죠.',
      friendshipTips: [
        '친구의 감정도 존중하세요.',
        '모든 걸 논쟁으로 만들지 마세요.',
        '깊은 관계도 필요해요.'
      ]
    }
  },

  // ==================== ESTJ ====================
  {
    type: 'ESTJ',
    nickname: '엄격한 관리자',
    emoji: '📊',
    
    cognitiveFunctions: {
      dominant: 'Te (외향 사고)',
      auxiliary: 'Si (내향 감각)',
      tertiary: 'Ne (외향 직관)',
      inferior: 'Fi (내향 감정)'
    },
    
    basicTraits: {
      summary: '효율적이고 책임감 있는 리더',
      description: `당신은 타고난 관리자예요. 일을 체계적으로 조직하고, 효율적으로 실행하는 능력이 있죠.

책임감이 강해요. 맡은 일은 끝까지 해내고, 약속은 반드시 지키죠. "이 사람한테 맡기면 된다"는 신뢰를 받아요.

규칙과 전통을 중시해요. 검증된 방식을 선호하고, 질서 있는 환경을 만들려 해요.`,
      keywords: ['효율성', '책임감', '리더십', '체계적', '전통'],
      strengths: ['리더십', '실행력', '조직력', '신뢰성'],
      weaknesses: ['융통성 부족', '감정 표현 서툼', '지나친 통제']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 진지하고 헌신적이에요. 연인에게 최선을 다하고, 관계를 책임지려 하죠.

행동으로 사랑을 표현해요. 말보다는 연인을 위해 뭔가를 해주는 걸로 마음을 보여줘요.

다만 너무 통제하려 들 수 있어요. "이렇게 하는 게 맞아"라고 연인을 가르치려 할 때가 있죠.`,
      idealPartner: '당신의 리더십을 인정하면서도 자기 의견이 있는 사람이에요. 안정적이고 현실적인 타입이요. 감정 표현을 강요하기보다 행동으로 이해해주는 사람이 좋아요.',
      loveStrengths: ['책임감', '헌신', '안정감 제공', '행동으로 표현'],
      loveWeaknesses: ['감정 표현 부족', '지나친 통제', '융통성 부족', '비판적'],
      compatibleTypes: ['ISFP', 'ISTP', 'ESFP', 'ESTP'],
      challengingTypes: ['INFP', 'ENFP', 'INFJ'],
      datingTips: [
        '연인을 통제하려 하지 마세요.',
        '감정 표현도 연습하세요.',
        '연인의 다른 방식도 인정하세요.'
      ]
    },
    
    career: {
      workStyle: '체계적이고 효율적으로 일해요. 목표를 세우고 달성하는 걸 좋아하죠.',
      idealEnvironment: '명확한 목표와 구조가 있는 곳',
      idealJobs: ['관리자', '공무원', '군인', '판사', '은행원', 'CEO', '프로젝트 매니저'],
      careerStrengths: ['리더십', '조직력', '실행력', '책임감'],
      careerWeaknesses: ['변화 수용 어려움', '감정적 상황 대처', '지나친 통제'],
      growthTips: [
        '팀원들의 의견도 들어보세요.',
        '새로운 방식에도 열린 마음을 가지세요.',
        '감정적인 부분도 고려하세요.'
      ]
    },
    
    relationships: {
      socialStyle: '책임 있는 위치에서 사람들을 이끄는 걸 좋아해요.',
      communicationStyle: '직설적이고 명확하게 말해요.',
      conflictStyle: '직접 해결하려 하고, 규칙에 기반해서 판단해요.',
      friendshipTips: [
        '친구에게 너무 조언하려 하지 마세요.',
        '가끔은 따라가는 것도 괜찮아요.',
        '친구의 다른 방식도 존중하세요.'
      ]
    }
  },

  // ==================== ESFJ ====================
  {
    type: 'ESFJ',
    nickname: '사교적인 외교관',
    emoji: '🤝',
    
    cognitiveFunctions: {
      dominant: 'Fe (외향 감정)',
      auxiliary: 'Si (내향 감각)',
      tertiary: 'Ne (외향 직관)',
      inferior: 'Ti (내향 사고)'
    },
    
    basicTraits: {
      summary: '따뜻하고 배려심 깊은 사교가',
      description: `당신은 사람들을 좋아하고, 모두가 행복하기를 바라요. 주변을 세심하게 챙기고, 조화로운 분위기를 만들죠.

배려심이 깊어요. 다른 사람의 필요를 미리 알아채고 도와주는 타입이에요.

전통과 규칙을 존중해요. 사회적 기대에 맞추려 하고, 주변의 평가에 신경 쓰는 편이죠.`,
      keywords: ['배려심', '사교적', '조화', '전통', '따뜻함'],
      strengths: ['배려심', '사교성', '책임감', '조직력'],
      weaknesses: ['타인 평가에 예민', '갈등 회피', '변화에 느림']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 헌신적이고 따뜻해요. 연인을 세심하게 챙기고, 관계를 위해 노력하죠.

주변의 인정을 중시해요. 연인이 가족, 친구에게 인정받기를 원해요.

다만 연인에게 너무 많이 해주다 지칠 수 있어요. 또한 갈등을 피하려다 문제가 쌓이기도 하죠.`,
      idealPartner: '당신의 헌신을 알아봐주고 감사해하는 사람이에요. 안정적이고 책임감 있는 타입이요. 사회적으로도 당신과 잘 어울리는 사람이 좋아요.',
      loveStrengths: ['헌신적 사랑', '세심한 배려', '안정감 제공', '가정적'],
      loveWeaknesses: ['너무 많이 해줌', '갈등 회피', '타인 의견에 흔들림', '비판에 예민'],
      compatibleTypes: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
      challengingTypes: ['INTP', 'ENTP', 'INTJ'],
      datingTips: [
        '당신의 필요도 말하세요.',
        '갈등을 피하지 말고 대화하세요.',
        '타인 평가에 너무 신경 쓰지 마세요.'
      ]
    },
    
    career: {
      workStyle: '사람들과 협력하면서 일하는 걸 좋아해요. 팀의 분위기를 좋게 만들죠.',
      idealEnvironment: '협력적이고 안정적인 곳, 사람을 돕는 역할',
      idealJobs: ['교사', '간호사', '사회복지사', 'HR', '이벤트 플래너', '상담사', '서비스업'],
      careerStrengths: ['대인관계', '팀워크', '배려', '조직력'],
      careerWeaknesses: ['비판에 예민', '갈등 대처 어려움', '결정 미룸'],
      growthTips: [
        '비판을 성장의 기회로 받아들이세요.',
        '갈등을 피하지 말고 해결하세요.',
        '모든 사람을 만족시킬 필요 없어요.'
      ]
    },
    
    relationships: {
      socialStyle: '넓고 다양하게 사귀어요. 사람들과 어울리는 걸 좋아하죠.',
      communicationStyle: '따뜻하고 배려 있게 말해요.',
      conflictStyle: '피하려 하고, 조화를 추구해요.',
      friendshipTips: [
        '모든 친구를 만족시킬 필요 없어요.',
        '당신의 의견도 중요해요.',
        '가끔은 NO라고 말하세요.'
      ]
    }
  },

  // ==================== ENFJ ====================
  {
    type: 'ENFJ',
    nickname: '정의로운 사회운동가',
    emoji: '🌟',
    
    cognitiveFunctions: {
      dominant: 'Fe (외향 감정)',
      auxiliary: 'Ni (내향 직관)',
      tertiary: 'Se (외향 감각)',
      inferior: 'Ti (내향 사고)'
    },
    
    basicTraits: {
      summary: '카리스마 있고 영감을 주는 리더',
      description: `당신은 타고난 리더예요. 사람들에게 영감을 주고, 더 나은 방향으로 이끄는 능력이 있죠.

다른 사람의 가능성을 봐요. "넌 할 수 있어"라고 진심으로 믿고 응원하죠.

이상주의적이에요. 더 나은 세상을 꿈꾸고, 의미 있는 일을 하고 싶어해요.`,
      keywords: ['리더십', '영감', '이상주의', '공감', '카리스마'],
      strengths: ['리더십', '공감 능력', '소통 능력', '비전 제시'],
      weaknesses: ['자기 희생 과다', '비판에 예민', '완벽주의']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 깊고 의미 있는 관계를 원해요. 연인의 성장을 응원하고, 함께 더 나은 사람이 되고 싶어하죠.

헌신적이에요. 연인을 위해 많은 걸 해주고, 관계에 최선을 다해요.

다만 연인을 바꾸려 할 수 있어요. "넌 이렇게 하면 더 좋아질 수 있어"라고요.`,
      idealPartner: '당신의 비전을 이해하고 함께 성장할 수 있는 사람이에요. 깊은 대화를 나눌 수 있고, 당신의 헌신에 감사하는 타입이요. 독립적이면서도 따뜻한 사람이 좋아요.',
      loveStrengths: ['깊은 연결', '성장을 응원', '헌신적', '로맨틱'],
      loveWeaknesses: ['연인을 바꾸려 함', '자기 희생 과다', '비판에 상처', '감정 소모'],
      compatibleTypes: ['INFP', 'ISFP', 'INTP', 'ISTP'],
      challengingTypes: ['ESTP', 'ISTP', 'ESTJ'],
      datingTips: [
        '연인을 있는 그대로 받아들이세요.',
        '당신 자신도 돌보세요.',
        '모든 걸 책임지려 하지 마세요.'
      ]
    },
    
    career: {
      workStyle: '사람들에게 영감을 주고 이끄는 일을 잘해요.',
      idealEnvironment: '가치 있는 미션이 있는 곳, 리더십을 발휘할 수 있는 곳',
      idealJobs: ['교사', '코치', '상담사', '정치인', '비영리단체', 'HR', '마케터'],
      careerStrengths: ['리더십', '소통 능력', '동기부여', '비전 제시'],
      careerWeaknesses: ['자기 희생', '비판에 예민', '완벽주의'],
      growthTips: [
        '당신 자신의 필요도 챙기세요.',
        '완벽하지 않아도 괜찮아요.',
        '비판을 개인적으로 받아들이지 마세요.'
      ]
    },
    
    relationships: {
      socialStyle: '넓고 깊게 사귀어요. 사람들에게 영향을 주는 걸 좋아하죠.',
      communicationStyle: '따뜻하고 영감을 주는 방식으로 말해요.',
      conflictStyle: '대화로 해결하려 하고, 조화를 추구해요.',
      friendshipTips: [
        '모든 친구를 구원하려 하지 마세요.',
        '당신의 한계도 인정하세요.',
        '가끔은 받는 것도 괜찮아요.'
      ]
    }
  },

  // ==================== ENTJ ====================
  {
    type: 'ENTJ',
    nickname: '대담한 통솔자',
    emoji: '👔',
    
    cognitiveFunctions: {
      dominant: 'Te (외향 사고)',
      auxiliary: 'Ni (내향 직관)',
      tertiary: 'Se (외향 감각)',
      inferior: 'Fi (내향 감정)'
    },
    
    basicTraits: {
      summary: '야심 있고 전략적인 리더',
      description: `당신은 타고난 리더예요. 큰 그림을 보고, 목표를 향해 사람들을 이끄는 능력이 있죠.

야심적이고 목표 지향적이에요. 높은 목표를 세우고 달성하는 걸 좋아해요. 안주하지 않죠.

효율성을 중시해요. 시간 낭비, 비효율적인 일은 참기 어려워해요.`,
      keywords: ['리더십', '야심', '전략적', '효율성', '목표 지향'],
      strengths: ['리더십', '전략적 사고', '결단력', '효율성'],
      weaknesses: ['지나친 통제', '감정에 둔감', '무자비해 보일 수 있음']
    },
    
    loveLife: {
      loveStyle: `연애할 때 당신은 진지하고 목표 지향적이에요. 함께 성장하고 성공할 수 있는 파트너를 원하죠.

연인에게도 높은 기대를 가져요. 서로 자극이 되고, 발전하는 관계를 원해요.

다만 연애도 프로젝트처럼 대할 수 있어요. 감정보다 논리가 앞서기도 하죠.`,
      idealPartner: '야심과 능력이 있는 사람이에요. 당신의 리더십을 인정하면서도 자기 의견이 있는 타입이요. 지적으로 대등하게 대화할 수 있는 사람이 좋아요.',
      loveStrengths: ['안정감 제공', '목표를 향해 함께', '문제 해결 능력', '책임감'],
      loveWeaknesses: ['감정 표현 부족', '지나친 기대', '통제하려 함', '일 우선'],
      compatibleTypes: ['INFP', 'INTP', 'ENFP', 'ENTP'],
      challengingTypes: ['ISFP', 'ISFJ', 'ESFP'],
      datingTips: [
        '연인도 프로젝트가 아니에요.',
        '감정적인 부분도 신경 쓰세요.',
        '일보다 연인을 우선할 때도 필요해요.'
      ]
    },
    
    career: {
      workStyle: '전략적이고 효율적으로 일해요. 리더 역할을 자연스럽게 맡죠.',
      idealEnvironment: '도전적이고 성과 지향적인 곳',
      idealJobs: ['CEO', '경영 컨설턴트', '변호사', '투자가', '정치인', '군 장교', '창업가'],
      careerStrengths: ['리더십', '전략', '결단력', '실행력'],
      careerWeaknesses: ['지나친 통제', '감정적 상황', '타인 의견 무시'],
      growthTips: [
        '팀원들의 감정도 고려하세요.',
        '모든 걸 통제할 필요 없어요.',
        '다른 의견도 가치 있어요.'
      ]
    },
    
    relationships: {
      socialStyle: '목적이 있는 관계를 선호해요. 영향력 있는 사람들과 어울리죠.',
      communicationStyle: '직접적이고 자신감 있게 말해요.',
      conflictStyle: '직접 해결하려 하고, 논리로 접근해요.',
      friendshipTips: [
        '친구를 평가하지 마세요.',
        '가끔은 목적 없이 어울려도 괜찮아요.',
        '친구의 감정도 들어주세요.'
      ]
    }
  }
];

// MBTI 유형으로 찾기
export const getMBTIByType = (type: string): MBTIText | undefined => {
  return mbtiTexts.find(m => m.type.toUpperCase() === type.toUpperCase());
};

// 특정 기능이 주기능인 MBTI 찾기
export const getMBTIsByDominantFunction = (func: string): MBTIText[] => {
  return mbtiTexts.filter(m => m.cognitiveFunctions.dominant.includes(func));
};

// 잘 맞는 MBTI 조합 체크
export const checkCompatibility = (type1: string, type2: string): 'good' | 'challenging' | 'neutral' => {
  const mbti1 = getMBTIByType(type1);
  if (!mbti1) return 'neutral';
  
  if (mbti1.loveLife.compatibleTypes.includes(type2.toUpperCase())) return 'good';
  if (mbti1.loveLife.challengingTypes.includes(type2.toUpperCase())) return 'challenging';
  return 'neutral';
};
