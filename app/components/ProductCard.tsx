'use client';

import Link from 'next/link';
import { Product } from '../lib/types';
import { useCart } from './CartProvider';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    alert('장바구니에 추가되었습니다!');
  };

  // 카테고리별 그라데이션 색상 (네이비/골드 테마)
  const getGradientClass = () => {
    switch (product.category) {
      case 'basic':
        return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900';
      case 'premium':
        return 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900';
      case 'compatibility':
        return 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950';
      default:
        return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900';
    }
  };

  // 카테고리별 아이콘
  const getIcon = () => {
    switch (product.category) {
      case 'basic':
        return '☯️';
      case 'premium':
        return '🧬';
      case 'compatibility':
        return '💫';
      default:
        return '✨';
    }
  };

  // 카테고리별 뱃지 색상
  const getBadgeClass = () => {
    return 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900';
  };

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${compact ? 'h-full' : ''}`}>
      {/* 이미지 영역 */}
      <div className={`relative h-48 ${getGradientClass()} flex items-center justify-center`}>
        {product.badge && (
          <div className={`absolute top-4 left-4 ${getBadgeClass()} px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
            {product.badge}
          </div>
        )}
        
        {/* 메인 아이콘 */}
        <div className="text-6xl drop-shadow-lg">
          {getIcon()}
        </div>
        
        {/* 골드 장식 요소 */}
        <div className="absolute top-3 right-4 text-amber-400/60 text-lg">✦</div>
        <div className="absolute bottom-4 left-6 text-amber-300/40 text-sm">✧</div>
        <div className="absolute top-10 right-10 text-yellow-400/30 text-sm">✦</div>
        <div className="absolute bottom-6 right-8 text-amber-200/30 text-xs">⬥</div>
        
        {/* 골드 테두리 효과 */}
        <div className="absolute inset-0 border-b-2 border-amber-400/30"></div>
      </div>

      {/* 내용 */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* 가격 */}
        <div className="mb-4">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm mr-2">
              {product.originalPrice.toLocaleString()}원
            </span>
          )}
          <span className="text-2xl font-bold text-slate-900">
            {product.price.toLocaleString()}원
          </span>
        </div>

        {/* 특징 (축약 모드가 아닐 때만) */}
        {!compact && (
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* 페이지 수 */}
        <div className="text-sm text-gray-500 mb-4">
          📄 {product.pages}페이지 PDF
        </div>

        {/* 버튼 */}
        <div className="flex gap-2">
          <Link 
            href={`/products/${product.id}`}
            className="flex-1 px-6 py-3 bg-slate-900 text-white text-center rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            자세히 보기
          </Link>
          <button 
            className="px-4 py-3 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
            onClick={handleAddToCart}
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}
