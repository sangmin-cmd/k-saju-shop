import { Product } from './types';

export const products: Product[] = [
  {
    id: 'basic',
    name: 'K-Saju 기본',
    description: '당신의 사주팔자를 기반으로 한 핵심 운세 분석',
    price: 5900,
    features: [
      '사주팔자 완전 분석',
      '오행 분포 차트',
      '십성 분석',
      '2026년 운세',
      '월별 흐름 분석',
      '15페이지 PDF'
    ],
    pages: 15,
    category: 'basic',
    image: '/images/basic.jpg',
    badge: '베스트셀러'
  },
  {
    id: 'premium',
    name: 'K-Saju 프리미엄',
    description: 'MBTI와 사주의 완벽한 조합! 심층 자기분석',
    price: 19900,
    originalPrice: 29900,
    features: [
      '모든 기본 기능 포함',
      'MBTI × 사주 크로스 분석',
      '연애 DNA 심층 분석',
      '재물운 & 직업운',
      '건강운 & 대인관계',
      '맞춤 조언 & 전략',
      '30페이지+ PDF'
    ],
    pages: 30,
    category: 'premium',
    image: '/images/premium.jpg',
    badge: '33% 할인',
    popular: true
  },
  {
    id: 'fatemate-basic',
    name: 'FateMate 기본',
    description: '두 사람의 운명적 궁합을 확인하세요',
    price: 9900,
    features: [
      '사주 궁합 점수',
      'MBTI 궁합 분석',
      '오행 에너지 케미',
      '관계 강점 & 주의점',
      '함께할 활동 추천',
      '7페이지 PDF'
    ],
    pages: 7,
    category: 'compatibility',
    image: '/images/fatemate-basic.jpg'
  },
  {
    id: 'fatemate-premium',
    name: 'FateMate 완전판',
    description: '연애의 모든 순간을 위한 완벽 가이드',
    price: 19900,
    originalPrice: 24900,
    features: [
      '모든 기본 기능 포함',
      '상대방 심층 분석',
      '갈등 & 화해 전략',
      '이별 & 재회 가이드',
      '썸 & 고백 전략',
      '연락 타이밍 가이드',
      '19페이지 PDF'
    ],
    pages: 19,
    category: 'compatibility',
    image: '/images/fatemate-premium.jpg',
    badge: '신규',
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
