import Link from 'next/link';

export default function BusinessInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            홈으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold mb-2">사업자 정보</h1>
          <p className="text-gray-600">
            K-Saju Shop의 사업자 정보 및 통신판매업 신고 정보입니다.
          </p>
        </div>

        {/* 내용 */}
        <div className="space-y-6">
          {/* 기본 정보 */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b">회사 기본 정보</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">상호명</p>
                  <p className="font-semibold text-lg">인사이트 금융경영연구소</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">대표자명</p>
                  <p className="font-semibold">이상민</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">사업자등록번호</p>
                  <p className="font-semibold">110-37-62594</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">통신판매업신고번호</p>
                  <p className="font-semibold">[신고 준비중]</p>
                  <p className="text-xs text-gray-500 mt-1">
                    * 통신판매업 신고 후 업데이트 예정
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">사업장 소재지</p>
                  <p className="font-semibold">경기도 용인시 기흥구 동백죽전대로 444, C602-B23호(중동, 쥬네브)</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">이메일</p>
                  <p className="font-semibold">amoretto75@naver.com</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">고객센터</p>
                  <p className="font-semibold">010-2806-2497</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">운영시간</p>
                  <p className="font-semibold">평일 09:00 - 18:00</p>
                  <p className="text-sm text-gray-600">(주말 및 공휴일 휴무)</p>
                </div>
              </div>
            </div>
          </div>

          {/* 통신판매업 신고 정보 */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b">통신판매업 신고 정보</h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">
                      통신판매업 신고 안내
                    </p>
                    <p className="text-sm text-blue-800">
                      본 서비스는 전자상거래법에 따라 통신판매업 신고를 진행할
                      예정입니다. 정식 신고번호는 신고 완료 후 업데이트됩니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-sm text-gray-600 mb-1">신고 기관</p>
                  <p className="font-semibold">
                    관할 구청 (경기도 용인시 기흥구청)
                  </p>
                </div>

                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-sm text-gray-600 mb-1">업종</p>
                  <p className="font-semibold">통신판매업 (디지털 콘텐츠)</p>
                </div>

                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-sm text-gray-600 mb-1">주요 품목</p>
                  <p className="font-semibold">사주/MBTI 분석 서비스</p>
                </div>

                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-sm text-gray-600 mb-1">개업일</p>
                  <p className="font-semibold">2021년 11월 02일</p>
                </div>
              </div>
            </div>
          </div>

          {/* 관련 기관 정보 */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b">
              관련 기관 및 협회
            </h2>

            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">
                  한국소비자원 전자상거래 분쟁조정위원회
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 홈페이지: www.ecmc.or.kr</li>
                  <li>• 전화: 1372 (소비자상담센터)</li>
                  <li>• 역할: 전자상거래 관련 소비자 분쟁 조정</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">공정거래위원회</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 홈페이지: www.ftc.go.kr</li>
                  <li>• 전화: 1372</li>
                  <li>• 역할: 전자상거래법 관련 법규 관리 감독</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">개인정보보호위원회</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 홈페이지: www.pipc.go.kr</li>
                  <li>• 전화: 02-2100-3343</li>
                  <li>• 역할: 개인정보 보호 및 침해사고 관리</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 호스팅 서비스 */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b">
              호스팅 서비스 정보
            </h2>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-between py-3 border-b">
                <p className="font-semibold">웹 호스팅</p>
                <p>Vercel Inc.</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <p className="font-semibold">데이터베이스</p>
                <p>Supabase Inc.</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <p className="font-semibold">이메일 서비스</p>
                <p>Resend Inc.</p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-semibold">결제 서비스</p>
                <p>토스페이먼츠</p>
              </div>
            </div>
          </div>

          {/* 지적재산권 */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b">지적재산권</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                본 웹사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 로고, 디자인,
                분석 알고리즘 등)의 저작권 및 지적재산권은 인사이트 금융경영연구소에
                있습니다.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  무단 사용 금지
                </p>
                <p className="text-sm text-yellow-800">
                  본 웹사이트의 콘텐츠를 무단으로 복제, 배포, 전송, 전시, 판매
                  또는 상업적 목적으로 이용하는 것은 저작권법에 의해 금지되어
                  있으며, 이를 위반할 경우 법적 조치가 취해질 수 있습니다.
                </p>
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="font-semibold">등록된 상표</h3>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>K-Saju™ (상표 출원 예정)</li>
                  <li>FateMate™ (상표 출원 예정)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 면책 사항 */}
          <div className="card p-8 bg-gray-50 border-2 border-gray-200">
            <h2 className="text-xl font-bold mb-4">면책 사항</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                • 본 서비스에서 제공하는 사주 및 MBTI 분석은 통계적 분석을
                기반으로 하며, 개인의 노력과 환경에 따라 결과가 달라질 수
                있습니다.
              </p>
              <p>
                • 분석 결과는 참고 자료로만 활용해 주시기 바라며, 중요한 의사결정은
                전문가와 상담하시길 권장합니다.
              </p>
              <p>
                • 회사는 서비스 이용에 따른 직접적, 간접적, 우발적, 특별한
                손해에 대해 책임을 지지 않습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/" className="btn-secondary text-center">
            홈으로 돌아가기
          </Link>
          <Link href="/terms" className="btn-secondary text-center">
            이용약관 보기
          </Link>
          <Link href="/contact" className="btn-primary text-center">
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}
