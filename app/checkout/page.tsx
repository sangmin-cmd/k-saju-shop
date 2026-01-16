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
  const [sdkError, setSdkError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('transfer');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // 토스페이먼츠 클라이언트 키 (테스트용)
  const clientKey = 'test_ck_AQ92ymxN34PdEJAwjEBK3ajRKXvd';

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        customerName: user.name || '',
        customerEmail: user.email || '',
        customerPhone: user.phone || '',
      }));
    }
  }, [user]);

  // SDK 로딩 확인
  useEffect(() => {
    const checkSDK = () => {
      if (typeof window !== 'undefined' && window.TossPayments) {
        console.log('TossPayments SDK loaded successfully');
        setIsSDKReady(true);
        setSdkError(null);
      }
    };

    checkSDK();

    const timeout = setTimeout(() => {
      if (!window.TossPayments) {
        setSdkError('결제 모듈 로딩 실패. 페이지를 새로고침해주세요.');
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">장바구니가 비어있습니다</h2>
          <Link href="/products" className="btn-primary mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">
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

    const phoneRegex = /^01[0-9]{8,9}$/;
    const cleanPhone = formData.customerPhone.replace(/-/g, '');
    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = '전화번호를 입력해주세요';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.customerPhone = '올바른 전화번호 형식이 아닙니다 (예: 01012345678)';
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

  // 계좌이체 주문 처리
  const handleTransferOrder = async () => {
    if (!validate()) {
      alert('입력 정보를 확인해주세요');
      return;
    }

    setIsProcessing(true);

    try {
      const orderId = `TRANSFER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // 주문 정보 저장
      const orderData = {
        orderId,
        paymentMethod: 'transfer',
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        items,
        totalAmount,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('transferOrder', JSON.stringify(orderData));

      // 관리자에게 이메일 알림
      try {
        await fetch('/api/send-order-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...orderData,
            paymentType: 'bank_transfer',
          }),
        });
      } catch (e) {
        console.log('알림 전송 실패 (무시됨)');
      }

      // 주문 완료 페이지로 이동
      router.push('/payment/transfer-complete');
      
    } catch (error) {
      console.error('주문 처리 오류:', error);
      alert('주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsProcessing(false);
    }
  };

  // 카드 결제 처리
  const handleCardPayment = async () => {
    console.log('=== 결제 시작 ===');

    if (!validate()) {
      alert('입력 정보를 확인해주세요');
      return;
    }

    if (!window.TossPayments) {
      alert('결제 모듈이 로드되지 않았습니다. 페이지를 새로고침해주세요.');
      return;
    }

    setIsProcessing(true);

    try {
      const tossPayments = window.TossPayments(clientKey);
      const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const orderName = items.length === 1
        ? items[0].product.name
        : `${items[0].product.name} 외 ${items.length - 1}건`;

      localStorage.setItem('pendingOrder', JSON.stringify({
        orderId,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        items,
        totalAmount,
      }));

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
      console.error('결제 오류:', error);
      if (error?.code !== 'USER_CANCEL') {
        alert(`결제 중 오류가 발생했습니다.\n오류: ${error?.message || '알 수 없는 오류'}`);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayment = () => {
    if (paymentMethod === 'transfer') {
      handleTransferOrder();
    } else {
      handleCardPayment();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      {/* 토스페이먼츠 SDK */}
      <Script
        src="https://js.tosspayments.com/v1/payment"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.TossPayments) {
            setIsSDKReady(true);
            setSdkError(null);
          }
        }}
        onError={() => {
          setSdkError('결제 모듈 로딩 실패. 인터넷 연결을 확인해주세요.');
        }}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">주문/결제</h1>

          {sdkError && paymentMethod === 'card' && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ⚠️ {sdkError}
              <button onClick={() => window.location.reload()} className="ml-4 underline">
                새로고침
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 주문 상품 목록 */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">주문 상품</h2>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">서비스 제공기간: 24시간 이내</p>
                        <p className="text-blue-600 font-bold">{item.product.price.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주문자 정보 */}
              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">주문자 정보</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">이름 *</label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg ${errors.customerName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="이름을 입력하세요"
                    />
                    {errors.customerName && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">이메일 *</label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg ${errors.customerEmail ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="result@email.com"
                    />
                    {errors.customerEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">결과물이 발송될 이메일입니다</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">전화번호 *</label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg ${errors.customerPhone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="01012345678"
                    />
                    {errors.customerPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 결제 방법 선택 */}
              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">결제 방법</h2>
                <div className="space-y-3">
                  <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'transfer' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={paymentMethod === 'transfer'}
                      onChange={() => setPaymentMethod('transfer')}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🏦</span>
                        <span className="font-semibold">계좌이체 (무통장입금)</span>
                        <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">추천</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">주문 후 계좌번호 안내 → 입금 확인 후 서비스 제공</p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">💳</span>
                        <span className="font-semibold">카드결제</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">준비중</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">신용카드 / 체크카드 (토스페이먼츠)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* 약관 동의 */}
              <div className="card p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">약관 동의</h2>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5"
                    />
                    <span className="flex-1">
                      <span className="text-red-500">[필수]</span> 이용약관에 동의합니다
                      <Link href="/terms" className="text-blue-500 text-sm ml-2">보기</Link>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreeTerms}</p>
                  )}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5"
                    />
                    <span className="flex-1">
                      <span className="text-red-500">[필수]</span> 개인정보처리방침에 동의합니다
                      <Link href="/privacy" className="text-blue-500 text-sm ml-2">보기</Link>
                    </span>
                  </label>
                  {errors.agreePrivacy && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreePrivacy}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 결제 정보 (오른쪽 사이드바) */}
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
                    <span className="font-semibold text-green-600">무료 (디지털 상품)</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6 text-xl">
                  <span className="font-bold">최종 결제 금액</span>
                  <span className="font-bold text-blue-600">{totalAmount.toLocaleString()}원</span>
                </div>

                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={isProcessing || (paymentMethod === 'card' && !isSDKReady)}
                  className={`w-full py-4 text-lg font-bold rounded-lg transition-all ${
                    isProcessing || (paymentMethod === 'card' && !isSDKReady)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isProcessing 
                    ? '처리중...' 
                    : paymentMethod === 'transfer'
                      ? `${totalAmount.toLocaleString()}원 주문하기`
                      : isSDKReady 
                        ? `${totalAmount.toLocaleString()}원 결제하기` 
                        : '결제 모듈 로딩중...'}
                </button>

                {paymentMethod === 'transfer' && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                    <p className="font-semibold text-yellow-800">📌 계좌이체 안내</p>
                    <p className="text-yellow-700 mt-1">주문 완료 후 계좌번호가 안내됩니다. 입금 확인 후 24시간 내 결과를 발송해드립니다.</p>
                  </div>
                )}

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-start"><span className="mr-2">✓</span><span>결제 후 24시간 내 이메일 발송</span></div>
                  <div className="flex items-start"><span className="mr-2">✓</span><span>7일 이내 환불 가능 (발송 전)</span></div>
                  {paymentMethod === 'card' && (
                    <div className="flex items-start"><span className="mr-2">✓</span><span>토스페이먼츠 안전결제</span></div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <p className="text-xs text-gray-500 text-center">문의: fatemate2026@gmail.com</p>
                  <p className="text-xs text-gray-400 text-center mt-1">전화: 010-2806-2497</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
