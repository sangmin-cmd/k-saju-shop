import Link from 'next/link';

export default function RefundPage() {
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
          <h1 className="text-3xl font-bold mb-2">환불/교환 정책</h1>
          <p className="text-gray-600">
            K-Saju Shop의 환불 및 교환 정책을 안내합니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            최종 수정일: 2025년 1월 15일
          </p>
        </div>

        {/* 내용 */}
        <div className="card p-8 space-y-8">
          {/* 중요 안내 */}
          <section className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
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
                <h3 className="font-bold text-blue-900 mb-2">중요 안내</h3>
                <p className="text-blue-800 text-sm">
                  본 서비스는 디지털 콘텐츠 제공 서비스로, 구매 후 즉시 분석이
                  시작되므로 전자상거래법 제17조 2항에 따라 <strong>청약철회가
                  제한</strong>됩니다. 다만, 서비스 하자 또는 오류가 있는 경우
                  환불이 가능합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 재발행 안내 - 새로 추가 */}
          <section className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <div>
                <h3 className="font-bold text-green-900 mb-2">📋 재발행 안내</h3>
                <div className="text-green-800 text-sm space-y-2">
                  <p><strong>재발행 가능 여부:</strong> 결제 완료 후 7일 이내 1회 무료 재발행 가능</p>
                  <p><strong>소요 기일:</strong> 재발행 요청 후 24시간 이내 발송</p>
                  <p><strong>요청 방법:</strong> fatemate2026@gmail.com으로 주문번호와 함께 문의</p>
                  <p className="mt-3 pt-3 border-t border-green-300">
                    <strong>재발행 가능 사유:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>이메일 수신 오류로 PDF를 받지 못한 경우</li>
                    <li>파일 손상으로 열람이 불가한 경우</li>
                    <li>입력 정보 오류로 인한 재분석 요청 (1회 한정)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 제1조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제1조 (환불 정책)</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">1. 환불 가능한 경우</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    결제 오류로 인해 서비스가 제공되지 않은 경우
                  </li>
                  <li>
                    시스템 오류로 인해 분석 결과가 정상적으로 생성되지 않은 경우
                  </li>
                  <li>
                    생년월일 등 입력 정보의 오류로 인해 결과가 잘못 생성된 경우
                    (단, 고객의 입력 실수인 경우 1회에 한하여 재발행 제공)
                  </li>
                  <li>
                    회사의 귀책사유로 서비스 제공이 불가능한 경우
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. 환불 불가능한 경우</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    이미 PDF 파일을 다운로드 받은 경우
                  </li>
                  <li>
                    단순 변심 또는 개인적 사유로 인한 취소 요청
                  </li>
                  <li>
                    내용상의 귀책사유로 인한 서비스 내용 불만
                  </li>
                  <li>
                    분석 결과에 대한 "만족" 또는 주관적 판단에 의한 취소
                  </li>
                  <li>
                    결제 후 7일이 경과한 경우
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-500 pl-4 bg-gray-50 p-4 rounded">
                <p className="font-semibold mb-2">환불 처리 기간</p>
                <ul className="text-sm space-y-1">
                  <li>• 신용카드: 확인 취소 후 3-5 영업일 내 환불</li>
                  <li>• 계좌이체: 환불 요청 확인 후 3-5 영업일 내 환불</li>
                  <li>• 기타 결제수단: 각 결제사의 정책에 따름</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 제2조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제2조 (교환 정책)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                본 서비스는 디지털 콘텐츠 특성상 교환이 불가능합니다. 다만,
                다음의 경우 재발행을 제공합니다:
              </p>

              <div>
                <h3 className="font-semibold mb-2">재발행 제공 가능한 경우</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    내용상의 입력 오류로 인한 잘못된 분석 (1회 한정)
                  </li>
                  <li>
                    시스템 오류로 인한 불완전한 분석
                  </li>
                  <li>
                    PDF 파일이 손상되어 열람이 불가능한 경우
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  재발행 요청 방법
                </p>
                <ol className="text-sm text-yellow-800 space-y-1 list-decimal list-inside ml-4">
                  <li>고객센터로 재발행 요청 (이메일 또는 문의하기)</li>
                  <li>주문번호 및 사유 기재</li>
                  <li>해당성 확인 후 24시간 이내 처리</li>
                </ol>
              </div>
            </div>
          </section>

          {/* 제3조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제3조 (환불 요청 절차)</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold mb-1">고객센터 문의</p>
                      <p className="text-sm">
                        이메일(fatemate2026@gmail.com) 또는 사이트 내 문의하기를
                        통해 환불 요청
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold mb-1">필수 정보 제공</p>
                      <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                        <li>주문번호</li>
                        <li>주문일시</li>
                        <li>결제 금액</li>
                        <li>환불 사유</li>
                        <li>환불 받을 계좌번호 (계좌이체인 경우)</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold mb-1">환불 심사</p>
                      <p className="text-sm">
                        해당성 및 환불 가능 여부를 확인 (1-2 영업일 소요)
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold mb-1">환불 처리</p>
                      <p className="text-sm">
                        확인 후 3-5 영업일 내 환불 완료 및 이메일 안내
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* 제4조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제4조 (부분 환불)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                여러 상품을 한 번에 구매한 경우, 일부 상품에 대해서만 환불이
                가능한 경우:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  환불 가능한 상품만 선택적으로 환불 가능
                </li>
                <li>
                  이미 다운로드한 상품은 환불 불가
                </li>
                <li>
                  할인 혜택이 적용된 경우, 환불 시 할인액이 재조정될 수 있음
                </li>
              </ul>
            </div>
          </section>

          {/* 제5조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제5조 (환불 수수료)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                원칙적으로 환불 수수료는 부과하지 않습니다. 다만, 다음의 경우
                수수료가 발생할 수 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  계좌이체 환불 시 송금 수수료 (없음)
                </li>
                <li>
                  해외 결제 수단 이용 시 환전 수수료 (해당하는 경우)
                </li>
              </ul>
            </div>
          </section>

          {/* 제6조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제6조 (분쟁 해결)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  환불 관련 분쟁이 발생한 경우, 먼저 회사의 고객센터를 통해 원만한
                  해결을 시도합니다.
                </li>
                <li>
                  회사와 이용자 간의 합의가 이루어지지 않는 경우, 전자상거래
                  분쟁조정위원회 또는 소비자보호원의 중재를 요청할 수 있습니다.
                </li>
                <li>
                  분쟁조정 요청:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>전자상거래 분쟁조정위원회: www.ecmc.or.kr</li>
                    <li>한국소비자원: www.kca.go.kr</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제7조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제7조 (법적 근거)</h2>
            <div className="space-y-3 text-gray-700">
              <p>본 환불/교환 정책은 다음 법령을 근거합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  전자상거래 등에서의 소비자보호에 관한 법률
                </li>
                <li>
                  전자상거래 등에서의 소비자보호에 관한 법률 시행령
                </li>
                <li>
                  소비자기본법
                </li>
                <li>
                  콘텐츠 규제에 관한 법률
                </li>
              </ul>
            </div>
          </section>

          {/* 연락처 */}
          <section className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">환불/교환 문의</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">이메일</p>
                  <p className="font-semibold">fatemate2026@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">전화번호</p>
                  <p className="font-semibold">010-2806-2497</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">운영시간</p>
                  <p className="font-semibold">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600"
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
                  <p className="text-sm text-gray-600">응답시간</p>
                  <p className="font-semibold">영업일 기준 24시간 내 답변</p>
                </div>
              </div>
            </div>
          </section>

          {/* 부칙 */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4">부칙</h2>
            <p className="text-gray-700">
              본 정책은 2025년 1월 15일부터 시행합니다.
            </p>
          </section>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/" className="btn-secondary text-center">
            홈으로 돌아가기
          </Link>
          <Link href="/terms" className="btn-secondary text-center">
            이용약관 보기
          </Link>
          <Link href="/privacy" className="btn-primary text-center">
            개인정보처리방침 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
