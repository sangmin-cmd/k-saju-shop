'use client';

import { useParams, useRouter } from 'next/navigation';
import { getProductById } from '@/app/lib/products';
import { useCart } from '@/app/components/CartProvider';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다</h1>
          <Link href="/products" className="btn-primary">
            상품 목록으로
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    alert('장바구니에 추가되었습니다!');
  };

  const handleBuyNow = () => {
    addItem(product);
    router.push('/checkout');
  };

  // 카테고리별 그라데이션 (네이비 테마)
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

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 뒤로가기 */}
        <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-slate-900 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          상품 목록으로
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 왼쪽: 이미지 */}
          <div>
            <div className={`relative h-96 ${getGradientClass()} rounded-2xl flex items-center justify-center mb-6`}>
              {product.badge && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {product.badge}
                </div>
              )}
              
              {/* 메인 아이콘 */}
              <div className="text-9xl drop-shadow-lg">
                {getIcon()}
              </div>
              
              {/* 골드 장식 */}
              <div className="absolute top-4 left-6 text-amber-400/60 text-xl">✦</div>
              <div className="absolute bottom-6 right-8 text-amber-300/40 text-lg">✧</div>
              <div className="absolute top-12 right-16 text-yellow-400/30 text-sm">✦</div>
              <div className="absolute bottom-10 left-10 text-amber-200/30 text-sm">⬥</div>
            </div>

            {/* 신뢰 배지 */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm font-semibold text-slate-800">즉시 발송</div>
                <div className="text-xs text-gray-500">결제 후 24시간</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-sm font-semibold text-slate-800">정보 보안</div>
                <div className="text-xs text-gray-500">암호화 처리</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl mb-1">♻️</div>
                <div className="text-sm font-semibold text-slate-800">환불 보장</div>
                <div className="text-xs text-gray-500">7일 이내</div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 정보 */}
          <div>
            {/* 상품명 */}
            <h1 className="text-4xl font-bold mb-4 text-slate-900">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>

            {/* 가격 */}
            <div className="mb-8">
              {product.originalPrice && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% 할인
                  </span>
                </div>
              )}
              <div className="text-5xl font-bold text-slate-900">
                {product.price.toLocaleString()}원
              </div>
            </div>

            {/* 포함 내용 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-slate-800">📋 포함 내용</h2>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 페이지 수 */}
            <div className="bg-slate-50 p-4 rounded-lg mb-8 border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">📄 PDF 페이지 수</span>
                <span className="font-bold text-lg text-slate-800">{product.pages}페이지</span>
              </div>
            </div>

            {/* 버튼 */}
            <div className="space-y-4">
              <button 
                onClick={handleBuyNow}
                className="w-full bg-slate-900 text-white text-lg py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors"
              >
                바로 구매하기
              </button>
              <button 
                onClick={handleAddToCart}
                className="w-full border-2 border-amber-500 text-amber-600 text-lg py-4 rounded-lg font-bold hover:bg-amber-50 transition-colors"
              >
                장바구니에 담기
              </button>
            </div>

            {/* 안내 */}
            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-slate-700">
                  <p className="font-semibold mb-1">분석 정보 입력 안내</p>
                  <p>결제 완료 후 생년월일, MBTI 등 분석에 필요한 정보를 입력하시면 24시간 내에 PDF를 이메일로 발송해드립니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 상세 설명 */}
        <div className="mt-16">
          <div className="border-t pt-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">이런 분들께 추천합니다</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.category === 'basic' && (
                <>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">☯️</div>
                    <h3 className="font-bold mb-2 text-slate-800">처음 사주를 보는 분</h3>
                    <p className="text-sm text-gray-600">기본적인 사주 분석을 합리적인 가격으로 경험하고 싶은 분</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="font-bold mb-2 text-slate-800">2026년 운세가 궁금한 분</h3>
                    <p className="text-sm text-gray-600">내년 전체 흐름과 월별 운세를 미리 알고 싶은 분</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">💰</div>
                    <h3 className="font-bold mb-2 text-slate-800">가성비를 중요하게 생각하는 분</h3>
                    <p className="text-sm text-gray-600">부담 없는 가격으로 전문적인 분석을 받고 싶은 분</p>
                  </div>
                </>
              )}
              {product.category === 'premium' && (
                <>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">🧬</div>
                    <h3 className="font-bold mb-2 text-slate-800">깊이 있는 자기분석을 원하는 분</h3>
                    <p className="text-sm text-gray-600">사주와 MBTI를 결합한 심층 분석으로 나를 완전히 이해하고 싶은 분</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">💼</div>
                    <h3 className="font-bold mb-2 text-slate-800">커리어 고민이 있는 분</h3>
                    <p className="text-sm text-gray-600">직업운, 재물운을 통해 커리어 방향성을 찾고 싶은 분</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">❤️</div>
                    <h3 className="font-bold mb-2 text-slate-800">연애/대인관계 고민이 있는 분</h3>
                    <p className="text-sm text-gray-600">내 연애 DNA와 대인관계 패턴을 정확히 파악하고 싶은 분</p>
                  </div>
                </>
              )}
              {product.category === 'compatibility' && (
                <>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">💫</div>
                    <h3 className="font-bold mb-2 text-slate-800">연인/배우자와의 궁합이 궁금한 분</h3>
                    <p className="text-sm text-gray-600">두 사람의 케미와 앞으로의 관계를 알고 싶은 분</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">💔</div>
                    <h3 className="font-bold mb-2 text-slate-800">관계 개선이 필요한 분</h3>
                    <p className="text-sm text-gray-600">갈등 해결과 화해 방법을 구체적으로 알고 싶은 분</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-3xl mb-3">💌</div>
                    <h3 className="font-bold mb-2 text-slate-800">썸 중이거나 고백 준비 중인 분</h3>
                    <p className="text-sm text-gray-600">상대방을 공략하는 최적의 전략이 필요한 분</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 리뷰 섹션 */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">고객 후기</h2>
          <div className="bg-slate-50 p-8 rounded-lg text-center border border-slate-200">
            <p className="text-gray-500">곧 고객 후기가 업데이트됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
