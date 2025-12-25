'use client';

import { useCart } from '../components/CartProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalAmount } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">장바구니가 비어있습니다</h2>
          <p className="text-gray-600 mb-8">상품을 담아보세요!</p>
          <Link href="/products" className="btn-primary">
            상품 둘러보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">장바구니</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 장바구니 아이템 */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="card p-6">
                <div className="flex items-start gap-6">
                  {/* 상품 이미지 */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">
                      {item.product.category === 'basic' && '📊'}
                      {item.product.category === 'premium' && '⭐'}
                      {item.product.category === 'compatibility' && '💕'}
                    </span>
                  </div>

                  {/* 상품 정보 */}
                  <div className="flex-1">
                    <Link 
                      href={`/products/${item.product.id}`}
                      className="text-lg font-bold hover:text-primary-500 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">{item.product.description}</p>
                    <div className="mt-2">
                      <span className="text-xl font-bold text-primary-600">
                        {item.product.price.toLocaleString()}원
                      </span>
                    </div>

                    {/* 수량 조절 */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors"
                      >
                        삭제
                      </button>
                    </div>
                  </div>

                  {/* 합계 */}
                  <div className="text-right">
                    <div className="text-lg font-bold">
                      {(item.product.price * item.quantity).toLocaleString()}원
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 전체 삭제 */}
            <div className="text-right">
              <button
                onClick={() => {
                  if (confirm('장바구니를 비우시겠습니까?')) {
                    clearCart();
                  }
                }}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                전체 삭제
              </button>
            </div>
          </div>

          {/* 주문 요약 */}
          <div>
            <div className="card p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">주문 요약</h2>

              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">상품 금액</span>
                  <span className="font-semibold">{totalAmount.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배송비</span>
                  <span className="font-semibold text-green-600">무료</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg">
                <span className="font-bold">총 결제 금액</span>
                <span className="font-bold text-primary-600">
                  {totalAmount.toLocaleString()}원
                </span>
              </div>

              <button
                onClick={() => router.push('/checkout')}
                className="w-full btn-primary py-4 text-lg"
              >
                주문하기
              </button>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <p>💡 <strong>안내:</strong> 결제 완료 후 분석에 필요한 정보(생년월일, MBTI 등)를 입력하시면 24시간 내에 결과를 발송해드립니다.</p>
              </div>

              <Link
                href="/products"
                className="block text-center mt-4 text-primary-500 hover:text-primary-700 font-semibold"
              >
                ← 쇼핑 계속하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
