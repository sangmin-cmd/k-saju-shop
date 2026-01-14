import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 상단 링크 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products" className="hover:text-white">상품 목록</Link></li>
              <li><Link href="/free" className="hover:text-white">무료 체험</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">고객지원</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/refund" className="hover:text-white">환불 정책</Link></li>
              <li><Link href="/terms" className="hover:text-white">이용약관</Link></li>
              <li><Link href="/privacy" className="hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">회사</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/business-info" className="hover:text-white">사업자 정보</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">문의</h3>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: fatemate2026@gmail.com</li>
              <li>전화: 010-2806-2497</li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-700 pt-8">
          {/* 사업자 정보 */}
          <div className="text-gray-400 text-sm space-y-1 mb-6">
            <p><strong>상호명:</strong> 브릿지에이치 연구소</p>
            <p><strong>대표자:</strong> 이상민</p>
            <p><strong>사업자등록번호:</strong> 110-37-62594</p>
            <p><strong>주소:</strong> 경기도 용인시 기흥구 동백죽전대로 444, C602-B23호(중동, 쥬네브)</p>
            <p><strong>전화번호:</strong> 010-2806-2497</p>
            <p><strong>통신판매업 신고번호:</strong> 신고 접수중</p>
            <p><strong>이메일:</strong> fatemate2026@gmail.com</p>
          </div>

          {/* 저작권 */}
          <div className="text-gray-500 text-sm">
            <p>© 2025 K-Saju. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
