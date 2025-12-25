import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-light text-lg mb-6">K-Saju</h3>
            <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">
              160가지 패턴으로 읽는<br />당신의 운명
            </p>
          </div>

          {/* 상품 */}
          <div>
            <h3 className="text-white font-light mb-6">상품</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/basic" className="text-gray-400 hover:text-white transition-colors font-light">K-Saju 기본</Link></li>
              <li><Link href="/products/premium" className="text-gray-400 hover:text-white transition-colors font-light">K-Saju 프리미엄</Link></li>
              <li><Link href="/products/fatemate-basic" className="text-gray-400 hover:text-white transition-colors font-light">FateMate 기본</Link></li>
              <li><Link href="/products/fatemate-premium" className="text-gray-400 hover:text-white transition-colors font-light">FateMate 완전판</Link></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="text-white font-light mb-6">고객지원</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors font-light">자주 묻는 질문</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-light">문의하기</Link></li>
              <li><Link href="/guide" className="text-gray-400 hover:text-white transition-colors font-light">이용 가이드</Link></li>
              <li><Link href="/mypage" className="text-gray-400 hover:text-white transition-colors font-light">마이페이지</Link></li>
            </ul>
          </div>

          {/* 법적 정보 */}
          <div>
            <h3 className="text-white font-light mb-6">법적 정보</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors font-light">이용약관</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors font-light">개인정보처리방침</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-white transition-colors font-light">환불/교환 정책</Link></li>
              <li><Link href="/business-info" className="text-gray-400 hover:text-white transition-colors font-light">사업자 정보</Link></li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-xs text-gray-500 font-light">
            <p className="mb-4">
              © 2024 K-Saju by Human Insight Core. All rights reserved.
            </p>
            <p className="leading-relaxed max-w-3xl">
              본 서비스에서 제공하는 사주 및 MBTI 분석은 통계적 분석을 기반으로 하며, 
              개인의 노력과 환경에 따라 결과가 달라질 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}