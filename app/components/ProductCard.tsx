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

  // 카테고리별 그라데이션 색상 (다크 프리미엄)
  const getGradientClass = () => {
    switch (product.category) {
      case 'basic':
        return 'bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900';
      case 'premium':
        return 'bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900';
      case 'compatibility':
        return 'bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900';
      default:
        return 'bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900';
    }
  };

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${compact ? 'h-full' : ''}`}>
      {/* 이미지 영역 */}
      <div className={`relative h-48 ${getGradientClass()} flex items-center justify-center`}>
        {product.badge && (
          <div className="absolute top-4 left-4 bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {product.badge}
          </div>
        )}
        <div className="text-white text-6xl drop-shadow-lg">
          {product.category === 'basic' && '📊'}
          {product.category === 'premium' && '⭐'}
          {product.category === 'compatibility' && '💕'}
        </div>
        {/* 장식 요소 */}
        <div className="absolute top-3 right-4 text-blue-300/50 text-sm">✦</div>
        <div className="absolute bottom-4 left-6 text-slate-400/40 text-xs">✧</div>
        <div className="absolute top-10 right-10 text-indigo-300/30 text-xs">✦</div>
      </div>

      {/* 내용 */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
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
          <span className="text-2xl font-bold text-slate-800">
            {product.price.toLocaleString()}원
          </span>
        </div>

        {/* 특징 (축약 모드가 아닐 때만) */}
        {!compact && (
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            className="flex-1 px-6 py-3 bg-slate-800 text-white text-center rounded-lg font-medium hover:bg-slate-700 transition-colors"
          >
            자세히 보기
          </Link>
          <button 
            className="px-4 py-3 border-2 border-slate-800 text-slate-800 rounded-lg hover:bg-slate-50 transition-colors"
            onClick={handleAddToCart}
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}
