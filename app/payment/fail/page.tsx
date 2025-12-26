'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentFailPage() {
  const searchParams = useSearchParams();
  
  const code = searchParams.get('code');
  const message = searchParams.get('message');
  const orderId = searchParams.get('orderId');

  // 에러 메시지 한글화
  const getErrorMessage = (code: string | null, message: string | null) => {
    const errorMessages: {[key: string]: string} = {
      'PAY_PROCESS_CANCELED': '결제가 취소되었습니다.',
      'PAY_PROCESS_ABORTED': '결제가 중단되었습니다.',
      'REJECT_CARD_COMPANY': '카드사에서 결제를 거부했습니다.',
      'INVALID_CARD_NUMBER': '유효하지 않은 카드번호입니다.',
      'INVALID_CARD_EXPIRY': '카드 유효기간이 만료되었습니다.',
      'INVALID_CVV': 'CVV 번호가 올바르지 않습니다.',
      'EXCEED_AMOUNT_LIMIT': '결제 한도를 초과했습니다.',
    };
    
    return errorMessages[code || ''] || message || '결제 처리 중 오류가 발생했습니다.';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* 실패 아이콘 */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        {/* 제목 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">결제에 실패했습니다</h1>
        <p className="text-gray-600 mb-6">{getErrorMessage(code, message)}</p>

        {/* 에러 정보 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-700 mb-3">오류 정보</h3>
          <div className="space-y-2 text-sm">
            {code && (
              <div className="flex justify-between">
                <span className="text-gray-500">오류 코드</span>
                <span className="font-medium text-red-600">{code}</span>
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

        {/* 안내 메시지 */}
        <div className="bg-yellow-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-yellow-700 mb-2">💡 해결 방법</h3>
          <ul className="text-sm text-yellow-600 space-y-1">
            <li>• 카드 정보를 다시 확인해주세요</li>
            <li>• 다른 결제 수단을 시도해주세요</li>
            <li>• 카드사 고객센터에 문의해주세요</li>
          </ul>
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
