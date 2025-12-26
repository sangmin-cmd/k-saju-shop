'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [orderInfo, setOrderInfo] = useState<any>(null);

  const orderId = searchParams.get('orderId');
  const paymentKey = searchParams.get('paymentKey');
  const amount = searchParams.get('amount');

  useEffect(() => {
    // 로컬스토리지에서 주문 정보 가져오기
    const pendingOrder = localStorage.getItem('pendingOrder');
    if (pendingOrder) {
      setOrderInfo(JSON.parse(pendingOrder));
      // 결제 완료 후 로컬스토리지 정리
      localStorage.removeItem('pendingOrder');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* 성공 아이콘 */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">결제가 완료되었습니다!</h1>
        <p className="text-gray-600 mb-6">주문해 주셔서 감사합니다.</p>

        {/* 주문 정보 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold mb-3 text-gray-700">주문 정보</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">주문번호</span>
              <span className="font-medium">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">결제금액</span>
              <span className="font-medium text-blue-600">{Number(amount).toLocaleString()}원</span>
            </div>
            {orderInfo && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-500">주문자</span>
                  <span className="font-medium">{orderInfo.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">이메일</span>
                  <span className="font-medium">{orderInfo.customerEmail}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold mb-2 text-blue-700">📧 결과 안내</h3>
          <p className="text-sm text-blue-600">
            분석 결과는 <strong>24시간 이내</strong>에 입력하신 이메일로 발송됩니다.
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
          문의사항이 있으시면 고객센터로 연락해 주세요.<br />
          📞 010-2806-2497 | ✉️ amoretto75@naver.com
        </p>
      </div>
    </div>
  );
}
