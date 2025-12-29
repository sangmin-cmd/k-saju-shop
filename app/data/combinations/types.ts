// 일간×MBTI 조합 텍스트 타입 정의

export interface CombinationText {
  dayMaster: string;      // 일간 (甲, 乙, 丙 등)
  mbti: string;           // MBTI 유형
  
  // 조합 분석
  harmony: {
    score: number;        // 조화도 점수 (1-100)
    summary: string;      // 한줄 요약
    description: string;  // 상세 설명
  };
  
  // 시너지 효과
  synergies: {
    title: string;
    description: string;
  }[];
  
  // 내적 갈등
  conflicts: {
    title: string;
    description: string;
    solution: string;
  }[];
  
  // 연애 조합 특성
  loveCombo: {
    style: string;
    bestMatch: string;
    warning: string;
  };
  
  // 직업 조합 특성
  careerCombo: {
    idealPath: string;
    strength: string;
    weakness: string;
  };
  
  // 핵심 조언
  coreAdvice: string;
}
