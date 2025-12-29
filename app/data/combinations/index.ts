// 일간×MBTI 조합 데이터 통합 export
// 총 160개 조합 (10일간 × 16 MBTI)

import { CombinationText } from './types';
import { woodCombinations } from './wood';
import { fireCombinations } from './fire';
import { earthCombinations } from './earth';
import { metalCombinations } from './metal';
import { waterCombinations } from './water';

// 타입 재export
export type { CombinationText } from './types';

// 개별 오행 export
export { woodCombinations } from './wood';
export { fireCombinations } from './fire';
export { earthCombinations } from './earth';
export { metalCombinations } from './metal';
export { waterCombinations } from './water';

// 전체 조합 통합
export const allCombinations: CombinationText[] = [
  ...woodCombinations,    // 甲乙 32개
  ...fireCombinations,    // 丙丁 32개
  ...earthCombinations,   // 戊己 32개
  ...metalCombinations,   // 庚辛 32개
  ...waterCombinations,   // 壬癸 32개
];

// ========================================
// 유틸리티 함수
// ========================================

/**
 * 일간과 MBTI로 조합 찾기
 */
export const getCombination = (dayMaster: string, mbti: string): CombinationText | undefined => {
  return allCombinations.find(
    c => c.dayMaster === dayMaster && c.mbti.toUpperCase() === mbti.toUpperCase()
  );
};

/**
 * 특정 일간의 모든 조합 가져오기
 */
export const getCombinationsByDayMaster = (dayMaster: string): CombinationText[] => {
  return allCombinations.filter(c => c.dayMaster === dayMaster);
};

/**
 * 특정 MBTI의 모든 조합 가져오기
 */
export const getCombinationsByMBTI = (mbti: string): CombinationText[] => {
  return allCombinations.filter(c => c.mbti.toUpperCase() === mbti.toUpperCase());
};

/**
 * 조화도 점수순 정렬
 */
export const getCombinationsSortedByHarmony = (ascending: boolean = false): CombinationText[] => {
  return [...allCombinations].sort((a, b) => 
    ascending 
      ? a.harmony.score - b.harmony.score 
      : b.harmony.score - a.harmony.score
  );
};

/**
 * 조화도 범위로 필터링
 */
export const getCombinationsByHarmonyRange = (min: number, max: number): CombinationText[] => {
  return allCombinations.filter(
    c => c.harmony.score >= min && c.harmony.score <= max
  );
};

/**
 * 오행별 조합 가져오기
 */
export const getCombinationsByElement = (element: 'wood' | 'fire' | 'earth' | 'metal' | 'water'): CombinationText[] => {
  switch (element) {
    case 'wood': return woodCombinations;
    case 'fire': return fireCombinations;
    case 'earth': return earthCombinations;
    case 'metal': return metalCombinations;
    case 'water': return waterCombinations;
  }
};

/**
 * 일간 → 오행 매핑
 */
export const dayMasterToElement = (dayMaster: string): string => {
  const mapping: Record<string, string> = {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水',
  };
  return mapping[dayMaster] || '';
};

/**
 * 통계 정보
 */
export const combinationStats = {
  total: allCombinations.length,
  byElement: {
    wood: woodCombinations.length,
    fire: fireCombinations.length,
    earth: earthCombinations.length,
    metal: metalCombinations.length,
    water: waterCombinations.length,
  },
  harmonyRange: {
    min: Math.min(...allCombinations.map(c => c.harmony.score)),
    max: Math.max(...allCombinations.map(c => c.harmony.score)),
    avg: Math.round(allCombinations.reduce((sum, c) => sum + c.harmony.score, 0) / allCombinations.length),
  }
};
