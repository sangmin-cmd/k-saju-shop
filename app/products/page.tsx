'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';
import { Product } from '../lib/types';

export default function ProductsPage() {
  const [filter, setFilter] = useState<'all' | Product['category']>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

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

        {/* 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter('basic')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'basic'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            📊 기본 분석
          </button>
          <button
            onClick={() => setFilter('premium')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'premium'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            ⭐ 프리미엄
          </button>
          <button
            onClick={() => setFilter('compatibility')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'compatibility'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            💕 궁합 분석
          </button>
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>

        {/* 빈 상태 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">해당 카테고리에 상품이 없습니다.</p>
          </div>
        )}

        {/* 하단 CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            어떤 상품이 나에게 맞을까요?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            간단한 테스트로 당신에게 딱 맞는 상품을 추천해드립니다
          </p>
          <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            1분 테스트 시작하기 →
          </button>
        </div>
      </div>
    </div>
  );
}
