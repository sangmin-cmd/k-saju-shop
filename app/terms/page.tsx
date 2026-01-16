import Link from 'next/link';

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mb-2">이용약관</h1>
          <p className="text-gray-600">
            K-Saju Shop 서비스 이용약관입니다. 서비스 이용 전 반드시 읽어주시기
            바랍니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            최종 수정일: 2026년 1월 17일
          </p>
        </div>

        {/* 내용 */}
        <div className="card p-8 space-y-8">
          {/* 제1조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제1조 (목적)</h2>
            <p className="text-gray-700 leading-relaxed">
              본 약관은 브릿지에이치 연구소(이하 "회사")가 운영하는 K-Saju Shop
              웹사이트(이하 "사이트")에서 제공하는 인터넷 관련 서비스(이하
              "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을
              규정함을 목적으로 합니다.
            </p>
          </section>

          {/* 제2조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제2조 (정의)</h2>
            <div className="space-y-3 text-gray-700">
              <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>"사이트"</strong>란 회사가 재화 또는 용역을 이용자에게
                  제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는
                  용역을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.
                </li>
                <li>
                  <strong>"이용자"</strong>란 사이트에 접속하여 본 약관에 따라
                  회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                </li>
                <li>
                  <strong>"회원"</strong>이란 사이트에 개인정보를 제공하여
                  회원등록을 한 자로서, 사이트의 정보를 지속적으로 제공받으며,
                  회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를
                  말합니다.
                </li>
                <li>
                  <strong>"비회원"</strong>이란 회원에 가입하지 않고 회사가
                  제공하는 서비스를 이용하는 자를 말합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제3조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제3조 (약관의 명시와 개정)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명,
                  사업자등록번호, 연락처 등을 이용자가 알 수 있도록 초기
                  서비스화면에 게시합니다.
                </li>
                <li>
                  회사는 약관의 규제 등에 관한 법률, 전자거래기본법,
                  전자서명법, 정보통신망 이용촉진 등에 관한 법률 등 관련법을
                  위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                </li>
                <li>
                  회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
                  현행약관과 함께 사이트의 초기화면에 그 적용일자 7일 이전부터
                  적용일자 전일까지 공지합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제4조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <div className="space-y-3 text-gray-700">
              <p>회사는 다음과 같은 업무를 수행합니다:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>사주팔자 및 MBTI 기반 분석 서비스 제공</li>
                <li>궁합 분석 서비스 제공</li>
                <li>PDF 형태의 분석 결과 제공</li>
                <li>기타 회사가 정하는 업무</li>
              </ol>
            </div>
          </section>

          {/* 제5조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제5조 (회원가입)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이
                  약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
                </li>
                <li>
                  회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중
                  다음 각호에 해당하지 않는 한 회원으로 등록합니다:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                    <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제6조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제6조 (회원 탈퇴 및 자격 상실)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시
                  회원탈퇴를 처리합니다.
                </li>
                <li>
                  회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을
                  제한 및 정지시킬 수 있습니다:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                    <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우</li>
                    <li>서비스를 이용하여 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제7조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제7조 (구매신청)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                이용자는 사이트에서 다음 또는 이와 유사한 방법에 의하여 구매를
                신청하며, 회사는 이용자가 구매신청을 함에 있어서 다음의 각 내용을
                알기 쉽게 제공하여야 합니다:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>재화 등의 검색 및 선택</li>
                <li>성명, 주소, 전화번호, 전자우편주소 등의 입력</li>
                <li>약관내용, 청약철회권이 제한되는 서비스 등에 관한 확인</li>
                <li>
                  이 약관에 동의하고 위 3호의 사항을 확인하거나 거부하는 표시
                </li>
                <li>재화 등의 구매신청 및 이에 관한 확인 또는 회사의 확인에 대한 동의</li>
                <li>결제방법의 선택</li>
              </ol>
            </div>
          </section>

          {/* 제8조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제8조 (계약의 성립)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사는 제7조와 같은 구매신청에 대하여 다음 각호에 해당하지
                  않는 한 승낙합니다:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li>미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우</li>
                    <li>기타 구매신청에 승낙하는 것이 회사 기술상 현저히 지장이 있다고 판단하는 경우</li>
                  </ul>
                </li>
                <li>
                  회사의 승낙이 제9조 제1항의 수신확인통지형태로 이용자에게
                  도달한 시점에 계약이 성립한 것으로 봅니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제9조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제9조 (지급방법)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                사이트에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의
                방법 중 가용한 방법으로 할 수 있습니다:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>신용카드 결제</li>
                <li>계좌이체</li>
                <li>전자화폐에 의한 결제</li>
                <li>기타 전자적 지급 방법에 의한 대금 지급 등</li>
              </ol>
            </div>
          </section>

          {/* 제10조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제10조 (개인정보보호)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사는 이용자의 정보 수집시 구매계약 이행에 필요한 최소한의
                  정보를 수집합니다.
                </li>
                <li>
                  회사는 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는
                  반드시 당해 이용자의 동의를 받습니다.
                </li>
                <li>
                  제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나
                  제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 회사가
                  집니다. 다만, 다음의 경우에는 예외로 합니다:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우</li>
                    <li>통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* 제11조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제11조 (회사의 의무)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를
                  하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로
                  재화·용역을 제공하는데 최선을 다하여야 합니다.
                </li>
                <li>
                  회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록
                  이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을
                  갖추어야 합니다.
                </li>
                <li>
                  회사는 서비스 이용과 관련하여 발생하는 이용자의 불만 또는
                  피해구제요청을 적절하게 처리할 수 있도록 필요한 인력 및
                  시스템을 구비합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제12조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제12조 (회원의 의무)</h2>
            <div className="space-y-3 text-gray-700">
              <p>이용자는 다음 행위를 하여서는 안됩니다:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>신청 또는 변경시 허위내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>회사에 게시된 정보의 변경</li>
                <li>
                  회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신
                  또는 게시
                </li>
                <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>
                  회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
                </li>
                <li>
                  외설 또는 폭력적인 메시지, 화상, 음성 기타 공서양속에 반하는
                  정보를 사이트에 공개 또는 게시하는 행위
                </li>
              </ol>
            </div>
          </section>

          {/* 제13조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제13조 (저작권의 귀속 및 이용제한)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에
                  귀속합니다.
                </li>
                <li>
                  이용자는 사이트를 이용함으로써 얻은 정보 중 회사에게
                  지적재산권이 귀속된 정보를 회사의 사전 승낙없이 복제, 송신,
                  출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나
                  제3자에게 이용하게 하여서는 안됩니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제14조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제14조 (분쟁해결)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
                  피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
                </li>
                <li>
                  회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그
                  사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는
                  이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 제15조 */}
          <section>
            <h2 className="text-xl font-bold mb-4">제15조 (재판권 및 준거법)</h2>
            <div className="space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  회사와 이용자간에 발생한 전자상거래 분쟁에 관한 소송은
                  제소당시의 이용자의 주소에 의하고, 주소가 없는 경우에는
                  거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소
                  당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의
                  경우에는 민사소송법상의 관할법원에 제기합니다.
                </li>
                <li>
                  회사와 이용자간에 제기된 전자상거래 소송에는 한국법을
                  적용합니다.
                </li>
              </ol>
            </div>
          </section>

          {/* 부칙 */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4">부칙</h2>
            <p className="text-gray-700">
              본 약관은 2026년 1월 1일부터 시행합니다.
            </p>
          </section>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-8 flex gap-4">
          <Link href="/" className="btn-secondary flex-1 text-center">
            홈으로 돌아가기
          </Link>
          <Link href="/privacy" className="btn-primary flex-1 text-center">
            개인정보처리방침 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
