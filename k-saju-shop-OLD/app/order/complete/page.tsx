'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function OrderCompletePage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    // 주문 완료 이벤트 (분석 등)
    if (orderId) {
      console.log('Order completed:', orderId);
      // TODO: 분석 이벤트 전송
    }
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card p-8 text-center">
          {/* 성공 아이콘 */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* 메시지 */}
          <h1 className="text-3xl font-bold mb-4">
            주문이 완료되었습니다!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            결제가 정상적으로 처리되었습니다.<br />
            곧 이메일로 안내를 보내드립니다.
          </p>

          {/* 주문 번호 */}
          {orderId && (
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-1">주문 번호</p>
              <p className="font-mono font-bold text-lg">{orderId}</p>
            </div>
          )}

          {/* 안내 사항 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-blue-900 mb-4">📧 다음 단계</h2>
            <ol className="space-y-3 text-blue-800">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  1
                </span>
                <span>이메일로 분석 정보 입력 링크가 발송됩니다</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  2
                </span>
                <span>생년월일, MBTI 등 필요한 정보를 입력해주세요</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  3
                </span>
                <span>24시간 내에 분석 결과 PDF를 이메일로 받으실 수 있습니다</span>
              </li>
            </ol>
          </div>

          {/* 버튼 */}
          <div className="space-y-3">
            <Link 
              href="/products"
              className="block w-full btn-primary py-3"
            >
              다른 상품 둘러보기
            </Link>
            <Link 
              href="/"
              className="block w-full btn-secondary py-3"
            >
              홈으로 돌아가기
            </Link>
          </div>

          {/* 고객센터 */}
          <div className="mt-8 pt-6 border-t text-sm text-gray-600">
            <p>문의사항이 있으신가요?</p>
            <Link href="/contact" className="text-primary-500 hover:text-primary-700 font-semibold">
              고객센터 바로가기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
