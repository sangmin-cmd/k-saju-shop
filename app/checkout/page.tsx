'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../components/CartProvider';
import { useAuth } from '../components/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

declare global {
  interface Window {
    TossPayments: any;
  }
}

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [isSDKReady, setIsSDKReady] = useState(false);
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // 토스페이먼츠 클라이언트 키 (테스트용)
  const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        customerName: user.name,
        customerEmail: user.email,
        customerPhone: user.phone || '',
      }));
    }
  }, [user]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">장바구니가 비어있습니다</h2>
          <Link href="/products" className="btn-primary mt-4 inline-block">
            상품 둘러보기
          </Link>
        </div>
      </div>
    );
  }

  const validate = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = '이름을 입력해주세요';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = '이메일을 입력해주세요';
    } else if (!emailRegex.test(formData.customerEmail)) {
      newErrors.customerEmail = '올바른 이메일 형식이 아닙니다';
    }

    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = '전화번호를 입력해주세요';
    } else if (!phoneRegex.test(formData.customerPhone.replace(/-/g, ''))) {
      newErrors.customerPhone = '올바른 전화번호 형식이 아닙니다';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '이용약관에 동의해주세요';
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = '개인정보처리방침에 동의해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validate()) {
      alert('입력 정보를 확인해주세요');
      return;
    }

    if (!isSDKReady || !window.TossPayments) {
      alert('결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    try {
      const tossPayments = window.TossPayments(clientKey);
      
      const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const orderName = items.length === 1 
        ? items[0].product.name
        : `${items[0].product.name} 외 ${items.length - 1}건`;

      // 주문 정보를 로컬스토리지에 임시 저장
      localStorage.setItem('pendingOrder', JSON.stringify({
        orderId,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        items,
        totalAmount,
      }));

      // 토스페이먼츠 결제창 호출
      await tossPayments.requestPayment('카드', {
        amount: totalAmount,
        orderId: orderId,
        orderName: orderName,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        successUrl: `${window.location.origin}/payment/success`,
        failUrl: `${window.location.origin}/payment/fail`,
      });

    } catch (error: any) {
      if (error.code === 'USER_CANCEL') {
        console.log('결제 취소');
      } else {
        console.error('Payment error:', error);
        alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <>
      <Script
        src="https://js.tosspayments.com/v1/payment"
        onLoad={() => setIsSDKReady(true)}
      />

      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">주문/결제</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">주문자 정보</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.customerName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="홍길동"
                    />
                    {errors.customerName && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.customerEmail}
                      onChange={(e) => setFormData({...formData, customerEmail: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.customerEmail ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="example@email.com"
                    />
                    {errors.customerEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">분석 결과를 받을 이메일 주소입니다</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      전화번호 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.customerPhone}
                      onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.customerPhone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="010-1234-5678"
                    />
                    {errors.customerPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">주문 상품</h2>
                
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">
                          {item.product.category === 'basic' && '📊'}
                          {item.product.category === 'premium' && '⭐'}
                          {item.product.category === 'compatibility' && '💕'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.product.name}</div>
                        <div className="text-sm text-gray-600">수량: {item.quantity}개</div>
                        <div className="text-sm text-blue-600 font-medium">📦 서비스 제공기간: 24시간 이내</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{(item.product.price * item.quantity).toLocaleString()}원</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">약관 동의</h2>
                
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                      className="mt-1 mr-3 w-5 h-5"
                    />
                    <span className="flex-1">
                      <span className="font-semibold text-red-500">[필수]</span> 이용약관에 동의합니다
                      <Link href="/terms" className="text-blue-500 text-sm ml-2">보기</Link>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreeTerms}</p>
                  )}

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({...formData, agreePrivacy: e.target.checked})}
                      className="mt-1 mr-3 w-5 h-5"
                    />
                    <span className="flex-1">
                      <span className="font-semibold text-red-500">[필수]</span> 개인정보처리방침에 동의합니다
                      <Link href="/privacy" className="text-blue-500 text-sm ml-2">보기</Link>
                    </span>
                  </label>
                  {errors.agreePrivacy && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreePrivacy}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="card p-6 bg-white rounded-xl shadow-md sticky top-20">
                <h2 className="text-xl font-bold mb-4">결제 정보</h2>

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

                <div className="flex justify-between mb-6 text-xl">
                  <span className="font-bold">최종 결제 금액</span>
                  <span className="font-bold text-blue-600">{totalAmount.toLocaleString()}원</span>
                </div>

                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={!isSDKReady}
                  className={`w-full py-4 text-lg font-bold rounded-lg transition-all ${
                    isSDKReady 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSDKReady ? '결제하기' : '결제 모듈 로딩중...'}
                </button>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-start"><span className="mr-2">✓</span><span>결제 후 24시간 내 이메일 발송</span></div>
                  <div className="flex items-start"><span className="mr-2">✓</span><span>7일 이내 환불 가능 (발송 전)</span></div>
                  <div className="flex items-start"><span className="mr-2">✓</span><span>토스페이먼츠 안전결제</span></div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <p className="text-xs text-gray-500 text-center">토스페이먼츠를 통한 안전한 결제</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
