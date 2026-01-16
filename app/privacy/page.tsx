import Link from 'next/link';

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-2">개인정보처리방침</h1>
          <p className="text-gray-600">
            K-Saju Shop은 이용자의 개인정보를 중요하게 생각하며, 개인정보보호법을
            준수하고 있습니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            최종 수정일: 2026년 1월 17일
          </p>
        </div>

        {/* 내용 */}
        <div className="card p-8 space-y-8">
          {/* 제1조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제1조 (개인정보의 처리 목적)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                브릿지에이치 연구소(이하 "회사")는 다음의 목적을 위하여 개인정보를
                처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
                이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법
                제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                예정입니다.
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>회원 가입 및 관리</strong>
                  <p className="ml-6 mt-1 text-sm">
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
                    회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적
                  </p>
                </li>
                <li>
                  <strong>재화 또는 서비스 제공</strong>
                  <p className="ml-6 mt-1 text-sm">
                    물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공,
                    맞춤서비스 제공, 본인인증, 요금결제·정산
                  </p>
                </li>
                <li>
                  <strong>마케팅 및 광고에의 활용</strong>
                  <p className="ml-6 mt-1 text-sm">
                    신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성
                    정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스
                    제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는
                    회원의 서비스 이용에 대한 통계
                  </p>
                </li>
              </ol>
            </div>
          </section>

          {/* 제2조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제2조 (개인정보의 처리 및 보유 기간)
            </h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
                  개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
                  개인정보를 처리·보유합니다.
                </li>
                <li>
                  각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:
                  <div className="ml-6 mt-3 space-y-3">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold">회원 가입 및 관리</p>
                      <p className="text-sm mt-1">
                        보유기간: 회원 탈퇴 시까지
                      </p>
                      <p className="text-sm mt-1">
                        다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료
                        시까지
                      </p>
                      <ul className="list-disc list-inside text-sm ml-4 mt-1">
                        <li>관계 법령 위반에 따른 수사·조사 등이 진행중인 경우: 해당 수사·조사 종료 시까지</li>
                        <li>서비스 이용에 따른 채권·채무관계 잔존 시: 해당 채권·채무관계 정산 시까지</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="font-semibold">재화 또는 서비스 제공</p>
                      <p className="text-sm mt-1">
                        보유기간: 재화·서비스 공급완료 및 요금결제·정산 완료 시까지
                      </p>
                      <p className="text-sm mt-1">
                        다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료
                        시까지
                      </p>
                      <ul className="list-disc list-inside text-sm ml-4 mt-1">
                        <li>「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록: 5년</li>
                        <li>「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                        <li>「통신비밀보호법」에 따른 로그인 기록: 3개월</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* 제3조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제3조 (처리하는 개인정보의 항목)</h2>
            <div className="space-y-3 text-gray-700">
              <p>회사는 다음의 개인정보 항목을 처리하고 있습니다:</p>
              <div className="ml-4 mt-3 space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold">1. 회원가입</p>
                  <ul className="list-disc list-inside text-sm ml-4 mt-2">
                    <li>필수항목: 이메일, 비밀번호, 이름</li>
                    <li>선택항목: 전화번호</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold">2. 서비스 이용</p>
                  <ul className="list-disc list-inside text-sm ml-4 mt-2">
                    <li>필수항목: 생년월일, 출생시간, 성별</li>
                    <li>선택항목: MBTI 유형</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold">3. 결제 및 환불</p>
                  <ul className="list-disc list-inside text-sm ml-4 mt-2">
                    <li>필수항목: 결제자명, 연락처, 이메일</li>
                    <li>결제정보: 카드번호, 계좌번호 등 (결제대행사에서 관리)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold">4. 자동 수집 항목</p>
                  <ul className="list-disc list-inside text-sm ml-4 mt-2">
                    <li>IP주소, 쿠키, 서비스 이용 기록, 방문 기록, 불량 이용 기록</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 제4조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사는 원칙적으로 이용자의 개인정보를 제1조(개인정보의 처리
                  목적)에서 명시한 범위 내에서만 처리하며, 이용자의 사전 동의 없이
                  본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
                </li>
                <li>
                  다만, 다음의 경우에는 예외로 합니다:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제5조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제5조 (개인정보처리의 위탁)
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
                처리업무를 위탁하고 있습니다:
              </p>
              <div className="ml-4 mt-3">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-2">수탁업체</th>
                      <th className="border border-gray-300 p-2">위탁업무</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Supabase</td>
                      <td className="border border-gray-300 p-2">
                        회원 데이터베이스 관리
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Resend</td>
                      <td className="border border-gray-300 p-2">
                        이메일 발송 서비스
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        토스페이먼츠
                      </td>
                      <td className="border border-gray-300 p-2">결제 처리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무
                수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁
                제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을
                계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를
                감독하고 있습니다.
              </p>
            </div>
          </section>

          {/* 제6조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제6조 (정보주체의 권리·의무 및 그 행사방법)
            </h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련
                  권리를 행사할 수 있습니다:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>개인정보 열람요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제요구</li>
                    <li>처리정지 요구</li>
                  </ul>
                </li>
                <li>
                  제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편,
                  모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체
                  없이 조치하겠습니다.
                </li>
                <li>
                  정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
                  경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
                  이용하거나 제공하지 않습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제7조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제7조 (개인정보의 파기 절차 및 방법)
            </h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
                  불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </li>
                <li>
                  파기 절차:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의
                      경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간
                      저장된 후 혹은 즉시 파기됩니다.
                    </li>
                    <li>
                      동 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로
                      이용되지 않습니다.
                    </li>
                  </ul>
                </li>
                <li>
                  파기 방법:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
                      사용합니다.
                    </li>
                    <li>
                      종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                      파기합니다.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제8조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제8조 (개인정보의 안전성 확보 조치)
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                있습니다:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등
                </li>
                <li>
                  기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템
                  설치, 고유식별정보 등의 암호화, 보안프로그램 설치
                </li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ol>
            </div>
          </section>

          {/* 제9조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)
            </h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를
                  저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                </li>
                <li>
                  쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의
                  컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
                  컴퓨터내의 하드디스크에 저장되기도 합니다.
                </li>
                <li>
                  쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한
                  방문 및 이용형태, 인기 검색어, 보안접속 여부 등을 파악하여
                  이용자에게 최적화된 정보 제공을 위해 사용됩니다.
                </li>
                <li>
                  쿠키의 설치·운영 및 거부: 웹브라우저 상단의 도구 &gt; 인터넷 옵션
                  &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수
                  있습니다.
                </li>
                <li>
                  쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
                  있습니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제10조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제10조 (개인정보 보호책임자)
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
                같이 개인정보 보호책임자를 지정하고 있습니다:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="font-semibold mb-2">개인정보 보호책임자</p>
                <ul className="space-y-1 text-sm">
                  <li>성명: 브릿지에이치 연구소 대표</li>
                  <li>이메일: fatemate2026@gmail.com</li>
                </ul>
              </div>
              <p className="mt-3">
                정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호
                관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
                보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해
                지체없이 답변 및 처리해드릴 것입니다.
              </p>
            </div>
          </section>

          {/* 제11조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제11조 (권익침해 구제방법)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담
                등을 문의하실 수 있습니다:
              </p>
              <div className="space-y-3 mt-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">개인정보침해신고센터</p>
                  <p className="text-sm mt-1">(한국인터넷진흥원 운영)</p>
                  <ul className="space-y-1 text-sm mt-2">
                    <li>소관업무: 개인정보 침해사실 신고, 상담 신청</li>
                    <li>홈페이지: privacy.kisa.or.kr</li>
                    <li>전화: (국번없이) 118</li>
                    <li>주소: (58324) 전남 나주시 진흥길 9 한국인터넷진흥원 개인정보침해신고센터</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">개인정보 분쟁조정위원회</p>
                  <ul className="space-y-1 text-sm mt-2">
                    <li>소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</li>
                    <li>홈페이지: www.kopico.go.kr</li>
                    <li>전화: (국번없이) 1833-6972</li>
                    <li>주소: (03171) 서울특별시 종로구 세종대로 209 정부서울청사 4층</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">대검찰청 사이버범죄수사단</p>
                  <ul className="space-y-1 text-sm mt-2">
                    <li>전화: 02-3480-3573</li>
                    <li>홈페이지: www.spo.go.kr</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">경찰청 사이버안전국</p>
                  <ul className="space-y-1 text-sm mt-2">
                    <li>전화: (국번없이) 182</li>
                    <li>홈페이지: cyberbureau.police.go.kr</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 제12조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              제12조 (개인정보 처리방침 변경)
            </h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다.
                </li>
                <li>
                  이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>해당 없음 (최초 버전)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 부칙 */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4">부칙</h2>
            <p className="text-gray-700">
              본 방침은 2026년 1월 1일부터 시행됩니다.
            </p>
          </section>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-8 flex gap-4">
          <Link href="/" className="btn-secondary flex-1 text-center">
            홈으로 돌아가기
          </Link>
          <Link href="/terms" className="btn-primary flex-1 text-center">
            이용약관 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
