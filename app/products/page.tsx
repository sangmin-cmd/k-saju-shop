'use client';

import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            전체 상품
          </h1>
          <p className="text-gray-600 text-lg">
            당신에게 맞는 완벽한 분석을 선택하세요
          </p>
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map(product => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>

      </div>
    </div>
  );
}
