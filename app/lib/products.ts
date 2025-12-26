import { Product } from './types';

export const products: Product[] = [
  {
    id: 'basic',
    name: 'K-Saju 베이직',
    description: '정통 사주팔자 분석으로 나를 알아가는 첫걸음',
    price: 5900,
    features: [
      '사주팔자 완전 분석',
      '오행 분포 & 균형 진단',
      '십성으로 보는 성격 유형',
      '2026년 운세 흐름',
      '월별 운세 가이드',
      '15페이지 PDF 리포트'
    ],
    pages: 15,
    category: 'basic',
    image: '/images/basic.png',
    icon: '☯️',
    badge: '입문용'
  },
  {
    id: 'cross',
    name: 'K-Saju 크로스',
    description: '사주 × MBTI 융합! 동서양 분석의 만남',
    price: 14900,
    originalPrice: 19900,
    features: [
      '베이직 전체 내용 포함',
      'MBTI × 사주 크로스 분석',
      '타고난 기질 vs 후천적 성향',
      '연애 DNA & 이상형 분석',
      '재물운 & 직업 적성',
      '건강운 & 대인관계 전략',
      '30페이지+ PDF 리포트'
    ],
    pages: 30,
    category: 'premium',
    image: '/images/cross.png',
    icon: '🧬',
    badge: '베스트',
    popular: true
  },
  {
    id: 'fatemate',
    name: 'FateMate 프리미엄',
    description: '두 사람의 운명적 궁합 심층 분석',
    price: 19900,
    originalPrice: 29900,
    features: [
      '사주 궁합 종합 점수',
      'MBTI 궁합 & 소통 스타일',
      '오행 에너지 케미 분석',
      '관계 강점 & 주의점',
      '갈등 해결 & 화해 전략',
      '연애 타이밍 가이드',
      '25페이지 PDF 리포트'
    ],
    pages: 25,
    category: 'compatibility',
    image: '/images/fatemate.png',
    icon: '💫',
    badge: '33% 할인',
    popular: true
  }
];

// 인기 상품
export const popularProducts = products.filter(p => p.popular);

// 카테고리별 상품
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category);
};

// ID로 상품 찾기
export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
