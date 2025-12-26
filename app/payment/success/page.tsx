'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [orderInfo, setOrderInfo] = useState<any>(null);

  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');
  const paymentKey = searchParams.get('paymentKey');

  useEffect(() => {
    // 로컬스토리지에서 주문 정보 가져오기
    const pendingOrder = localStorage.getItem('pendingOrder');
    if (pendingOrder) {
      setOrderInfo(JSON.parse(pendingOrder));
      // 주문 완료 후 로컬스토리지 클리어
      localStorage.removeItem('pendingOrder');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* 성공 아이콘 */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* 제목 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">결제가 완료되었습니다!</h1>
        <p className="text-gray-600 mb-6">주문해 주셔서 감사합니다.</p>

        {/* 주문 정보 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-700 mb-3">주문 정보</h3>
          <div className="space-y-2 text-sm">
            {orderId && (
              <div className="flex justify-between">
                <span className="text-gray-500">주문번호</span>
                <span className="font-medium text-xs">{orderId}</span>
              </div>
            )}
            {amount && (
              <div className="flex justify-between">
                <span className="text-gray-500">결제 금액</span>
                <span className="font-bold text-blue-600">{Number(amount).toLocaleString()}원</span>
              </div>
            )}
            {orderInfo?.customerEmail && (
              <div className="flex justify-between">
                <span className="text-gray-500">이메일</span>
                <span className="font-medium">{orderInfo.customerEmail}</span>
              </div>
            )}
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-blue-700 mb-2">📧 결과물 안내</h3>
          <p className="text-sm text-blue-600">
            입력하신 이메일로 <strong>24시간 이내</strong>에 분석 결과물이 발송됩니다.
            <br /><br />
            스팸함도 확인해 주세요!
          </p>
        </div>

        {/* 버튼 */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="block w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>
          <Link 
            href="/products"
            className="block w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            다른 상품 보기
          </Link>
        </div>

        {/* 고객센터 안내 */}
        <p className="mt-6 text-xs text-gray-500">
          결과물 문의: 010-2806-2497 | amoretto75@naver.com
        </p>
      </div>
    </div>
  );
}
