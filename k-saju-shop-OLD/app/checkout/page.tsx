'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../components/CartProvider';
import { useAuth } from '../components/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createOrder, updateOrderStatus } from '../lib/orders';

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // 로그인한 사용자의 정보로 폼 자동 채우기
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      alert('입력 정보를 확인해주세요');
      return;
    }

    try {
      // 주문 정보 생성
      const orderId = `ORDER-${Date.now()}`;
      const orderName = items.length === 1 
        ? items[0].product.name
        : `${items[0].product.name} 외 ${items.length - 1}건`;

      // 데이터베이스에 주문 저장
      const orderResult = await createOrder({
        orderId: orderId,
        userId: user?.id,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        items: items,
        totalAmount: totalAmount,
        paymentMethod: 'card', // 기본값
      });

      if (!orderResult.success) {
        throw new Error(orderResult.error || '주문 생성 실패');
      }

      // 이메일 발송용 데이터 준비
      const emailData = {
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        orderId: orderId,
        orderDate: new Date().toLocaleString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        products: items.map(item => ({
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
        })),
        totalAmount: totalAmount,
      };

      // 1. 주문 확인 이메일 발송
      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'order_confirmation',
            to: formData.customerEmail,
            data: emailData,
          }),
        });
        console.log('주문 확인 이메일 발송 완료');
      } catch (emailError) {
        console.error('주문 확인 이메일 발송 실패:', emailError);
        // 이메일 실패해도 주문은 진행
      }

      // 토스페이먼츠 결제 요청
      // TODO: 실제 토스페이먼츠 API 연동
      
      // 임시: 결제 성공으로 간주
      alert('결제가 완료되었습니다! (테스트 모드)\n\n이메일을 확인해주세요.');

      // 주문 상태 업데이트 (결제 완료)
      await updateOrderStatus(orderId, 'paid');

      // 2. 결제 완료 이메일 발송
      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'payment_success',
            to: formData.customerEmail,
            data: emailData,
          }),
        });
        console.log('결제 완료 이메일 발송 완료');
      } catch (emailError) {
        console.error('결제 완료 이메일 발송 실패:', emailError);
        // 이메일 실패해도 주문은 진행
      }
      
      // 장바구니 비우기
      clearCart();
      
      // 주문 완료 페이지로 이동
      router.push(`/order/complete?orderId=${orderId}`);
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };
        totalAmount: totalAmount,
      };

      // 1. 주문 확인 이메일 발송
      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'order_confirmation',
            to: formData.customerEmail,
            data: emailData,
          }),
        });
        console.log('주문 확인 이메일 발송 완료');
      } catch (emailError) {
        console.error('주문 확인 이메일 발송 실패:', emailError);
        // 이메일 실패해도 주문은 진행
      }

      // 토스페이먼츠 결제 요청
      // TODO: 실제 토스페이먼츠 API 연동
      
      // 임시: 결제 성공으로 간주
      alert('결제가 완료되었습니다! (테스트 모드)\n\n이메일을 확인해주세요.');

      // 2. 결제 완료 이메일 발송
      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'payment_success',
            to: formData.customerEmail,
            data: emailData,
          }),
        });
        console.log('결제 완료 이메일 발송 완료');
      } catch (emailError) {
        console.error('결제 완료 이메일 발송 실패:', emailError);
        // 이메일 실패해도 주문은 진행
      }
      
      // 장바구니 비우기
      clearCart();
      
      // 주문 완료 페이지로 이동
      router.push(`/order/complete?orderId=${orderId}`);
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">주문/결제</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 주문 정보 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 주문자 정보 */}
              <div className="card p-6">
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
                      className={`input-field ${errors.customerName ? 'border-red-500' : ''}`}
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
                      className={`input-field ${errors.customerEmail ? 'border-red-500' : ''}`}
                      placeholder="example@email.com"
                    />
                    {errors.customerEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      분석 결과를 받을 이메일 주소입니다
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      전화번호 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.customerPhone}
                      onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                      className={`input-field ${errors.customerPhone ? 'border-red-500' : ''}`}
                      placeholder="010-1234-5678"
                    />
                    {errors.customerPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 주문 상품 */}
              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4">주문 상품</h2>
                
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">
                          {item.product.category === 'basic' && '📊'}
                          {item.product.category === 'premium' && '⭐'}
                          {item.product.category === 'compatibility' && '💕'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.product.name}</div>
                        <div className="text-sm text-gray-600">수량: {item.quantity}개</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">
                          {(item.product.price * item.quantity).toLocaleString()}원
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 이용약관 */}
              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4">약관 동의</h2>
                
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                      className="mt-1 mr-3"
                    />
                    <span className="flex-1">
                      <span className="font-semibold">[필수]</span> 이용약관에 동의합니다
                      <Link href="/terms" className="text-primary-500 text-sm ml-2">
                        보기
                      </Link>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-red-500 text-sm ml-6">{errors.agreeTerms}</p>
                  )}

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({...formData, agreePrivacy: e.target.checked})}
                      className="mt-1 mr-3"
                    />
                    <span className="flex-1">
                      <span className="font-semibold">[필수]</span> 개인정보처리방침에 동의합니다
                      <Link href="/privacy" className="text-primary-500 text-sm ml-2">
                        보기
                      </Link>
                    </span>
                  </label>
                  {errors.agreePrivacy && (
                    <p className="text-red-500 text-sm ml-6">{errors.agreePrivacy}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 결제 정보 */}
            <div>
              <div className="card p-6 sticky top-20">
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
                  <span className="font-bold text-primary-600">
                    {totalAmount.toLocaleString()}원
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg mb-4"
                >
                  결제하기
                </button>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>결제 후 24시간 내 이메일 발송</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>7일 이내 환불 가능</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>안전한 결제 시스템</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
