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

  return (
    <div className={`card ${compact ? 'h-full' : ''}`}>
      {/* 이미지 영역 */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
        {product.badge && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            {product.badge}
          </div>
        )}
        <div className="text-white text-6xl">
          {product.category === 'basic' && '📊'}
          {product.category === 'premium' && '⭐'}
          {product.category === 'compatibility' && '💕'}
        </div>
      </div>

      {/* 내용 */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
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
          <span className="text-2xl font-bold text-primary-600">
            {product.price.toLocaleString()}원
          </span>
        </div>

        {/* 특징 (축약 모드가 아닐 때만) */}
        {!compact && (
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            className="flex-1 btn-primary text-center"
          >
            자세히 보기
          </Link>
          <button 
            className="px-4 py-2 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={handleAddToCart}
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}
