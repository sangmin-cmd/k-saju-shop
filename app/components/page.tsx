'use client';

import Link from 'next/link';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">환불 정책</h1>
        
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
          
          {/* 서비스 제공 기간 - 토스 필수 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-600">📦 서비스 제공 기간</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                결제 완료 후 <strong>24시간 이내</strong>에 분석 결과를 이메일로 발송해 드립니다.
              </p>
            </div>
          </section>

          {/* 환불 규정 */}
          <section>
            <h2 className="text-xl font-bold mb-4">💰 환불 규정</h2>
            <div className="space-y-4 text-gray-700">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-700">전액 환불 가능</h3>
                <p>결제 후 분석 결과 발송 전 취소 요청 시</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-700">부분 환불 또는 환불 불가</h3>
                <p>분석 결과 발송 후에는 디지털 콘텐츠 특성상 환불이 제한됩니다.</p>
              </div>
            </div>
          </section>

          {/* 환불 절차 */}
          <section>
            <h2 className="text-xl font-bold mb-4">📝 환불 절차</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>고객센터로 환불 요청 (전화 또는 이메일)</li>
              <li>주문 정보 확인 (주문번호, 결제자명, 결제일시)</li>
              <li>환불 사유 확인</li>
              <li>환불 승인 후 3~5 영업일 내 환불 처리</li>
            </ol>
          </section>

          {/* 환불 불가 사유 */}
          <section>
            <h2 className="text-xl font-bold mb-4">⚠️ 환불 불가 사유</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>분석 결과 이메일 발송 완료 후</li>
              <li>결제일로부터 7일 경과 후</li>
              <li>고객의 단순 변심 (결과 발송 후)</li>
            </ul>
          </section>

          {/* 고객센터 */}
          <section>
            <h2 className="text-xl font-bold mb-4">📞 고객센터</h2>
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <p><strong>전화:</strong> 010-2806-2497</p>
              <p><strong>이메일:</strong> support@sajutype.kr</p>
              <p><strong>운영시간:</strong> 평일 10:00 ~ 18:00 (주말/공휴일 휴무)</p>
            </div>
          </section>

          {/* 관련 법률 */}
          <section>
            <h2 className="text-xl font-bold mb-4">⚖️ 관련 법률</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              본 환불 정책은 「전자상거래 등에서의 소비자보호에 관한 법률」 및 
              「콘텐츠산업 진흥법」에 따라 디지털 콘텐츠의 특성을 고려하여 수립되었습니다.
              디지털 콘텐츠는 청약철회가 제한될 수 있으며, 이는 결제 전 고지됩니다.
            </p>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
