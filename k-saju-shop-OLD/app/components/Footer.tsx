import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">K-Saju Shop</h3>
            <p className="text-sm text-gray-400 mb-4">
              AI와 전통 사주가 만나<br />당신의 운명을 분석합니다
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 상품 */}
          <div>
            <h3 className="text-white font-semibold mb-4">상품</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/basic" className="hover:text-primary-400 transition-colors">K-Saju 기본</Link></li>
              <li><Link href="/products/premium" className="hover:text-primary-400 transition-colors">K-Saju 프리미엄</Link></li>
              <li><Link href="/products/fatemate-basic" className="hover:text-primary-400 transition-colors">FateMate 기본</Link></li>
              <li><Link href="/products/fatemate-premium" className="hover:text-primary-400 transition-colors">FateMate 완전판</Link></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="text-white font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">자주 묻는 질문</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">문의하기</Link></li>
              <li><Link href="/guide" className="hover:text-primary-400 transition-colors">이용 가이드</Link></li>
              <li><Link href="/mypage" className="hover:text-primary-400 transition-colors">마이페이지</Link></li>
            </ul>
          </div>

          {/* 법적 정보 */}
          <div>
            <h3 className="text-white font-semibold mb-4">법적 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-primary-400 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  환불/교환 정책
                </Link>
              </li>
              <li>
                <Link href="/business-info" className="hover:text-primary-400 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  사업자 정보
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 사업자 정보 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div className="space-y-1">
              <p><span className="text-gray-300 font-semibold">상호:</span> Human Insight Core</p>
              <p><span className="text-gray-300 font-semibold">대표:</span> [대표자명]</p>
              <p><span className="text-gray-300 font-semibold">사업자등록번호:</span> [123-45-67890]</p>
              <p><span className="text-gray-300 font-semibold">통신판매업신고번호:</span> [제2024-서울강남-12345호]</p>
            </div>
            <div className="space-y-1">
              <p><span className="text-gray-300 font-semibold">주소:</span> [서울특별시 강남구 테헤란로 123]</p>
              <p><span className="text-gray-300 font-semibold">이메일:</span> contact@humaninsight.co.kr</p>
              <p><span className="text-gray-300 font-semibold">고객센터:</span> [02-1234-5678]</p>
              <p><span className="text-gray-300 font-semibold">운영시간:</span> 평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
            </div>
          </div>

          {/* 저작권 및 면책 */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-500">
            <p className="mb-2">
              © 2024 K-Saju Shop by Human Insight Core. All rights reserved.
            </p>
            <p className="leading-relaxed">
              본 서비스에서 제공하는 사주 및 MBTI 분석은 통계적 분석을 기반으로 하며, 
              개인의 노력과 환경에 따라 결과가 달라질 수 있습니다. 
              분석 결과는 참고 자료로만 활용해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
