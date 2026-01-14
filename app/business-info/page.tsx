'use client';

import Link from 'next/link';

export default function BusinessInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
                       홈으로 돌아가기
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">사업자 정보</h1>
        <p className="text-gray-600 mb-8">K-Saju Shop의 사업자 정보 및 통신판매업 신고 정보입니다.</p>

        {/* 회사 기본 정보 */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-6">회사 기본 정보</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">상호명</p>
              <p className="text-lg font-semibold">브릿지에이치 연구소</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">사업장 소재지</p>
              <p className="text-lg">경기도 용인시 기흥구 동백죽전대로 444, C602-B23호 (중동, 쥬네브)</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">대표자명</p>
              <p className="text-lg font-semibold">이상민</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">이메일</p>
              <p className="text-lg">fatemate2026@gmail.com</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">사업자등록번호</p>
              <p className="text-lg">110-37-62594</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">고객센터</p>
              <p className="text-lg">010-2806-2497</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">통신판매업신고번호</p>
              <p className="text-lg font-semibold">[신고 준비중]</p>
              <p className="text-gray-400 text-sm">* 통신판매업 신고 후 업데이트 예정</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">운영시간</p>
              <p className="text-lg font-semibold">평일 09:00 - 18:00</p>
              <p className="text-gray-400 text-sm">(주말 및 공휴일 휴무)</p>
            </div>
          </div>
        </div>

        {/* 서비스 안내 */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">서비스 안내</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>K-Saju Shop</strong>은 전통 사주 분석과 현대 심리학(MBTI)을 결합한 
              프리미엄 자기분석 서비스를 제공합니다.
            </p>
            <p>
              모든 분석 결과는 PDF 형태로 24시간 이내 이메일로 발송됩니다.
            </p>
            <p>
              서비스 이용 관련 문의사항은 이메일 또는 고객센터로 연락해 주세요.
            </p>
          </div>
        </div>

        {/* 관련 링크 */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link 
            href="/terms" 
            className="text-blue-600 hover:underline"
          >
            이용약관 →
          </Link>
          <Link 
            href="/privacy" 
            className="text-blue-600 hover:underline"
          >
            개인정보처리방침 →
          </Link>
          <Link 
            href="/refund" 
            className="text-blue-600 hover:underline"
          >
            환불정책 →
          </Link>
        </div>
      </div>
    </div>
  );
}
