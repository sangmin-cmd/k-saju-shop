'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentFailPage() {
  const searchParams = useSearchParams();

  const code = searchParams.get('code');
  const message = searchParams.get('message');
  const orderId = searchParams.get('orderId');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* 실패 아이콘 */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">결제에 실패했습니다</h1>
        <p className="text-gray-600 mb-6">다시 시도해 주세요.</p>

        {/* 오류 정보 */}
        <div className="bg-red-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold mb-2 text-red-700">오류 정보</h3>
          <div className="space-y-2 text-sm">
            {code && (
              <div className="flex justify-between">
                <span className="text-gray-500">오류 코드</span>
                <span className="font-medium text-red-600">{code}</span>
              </div>
            )}
            {message && (
              <div>
                <span className="text-gray-500">오류 메시지</span>
                <p className="font-medium text-red-600 mt-1">{decodeURIComponent(message)}</p>
              </div>
            )}
            {orderId && (
              <div className="flex justify-between">
                <span className="text-gray-500">주문번호</span>
                <span className="font-medium">{orderId}</span>
              </div>
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div className="space-y-3">
          <Link 
            href="/checkout"
            className="block w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            다시 결제하기
          </Link>
          <Link 
            href="/"
            className="block w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>

        {/* 고객센터 안내 */}
        <p className="mt-6 text-xs text-gray-500">
          결제 오류가 계속되면 고객센터로 문의해 주세요.<br />
          📞 010-2806-2497 | ✉️ amoretto75@naver.com
        </p>
      </div>
    </div>
  );
}
