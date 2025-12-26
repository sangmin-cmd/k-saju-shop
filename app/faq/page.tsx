'use client';

import { useState } from 'react';

const faqs = [
  {
    category: '서비스 이용',
    questions: [
      {
        q: '분석 결과는 얼마나 걸려서 받을 수 있나요?',
        a: '결제 완료 후 24시간 이내에 입력하신 이메일로 PDF 파일을 발송해 드립니다. 대부분 몇 시간 내에 발송되지만, 주문이 많은 경우 최대 24시간까지 소요될 수 있습니다.'
      },
      {
        q: '결과는 어떤 형태로 제공되나요?',
        a: 'PDF 파일 형태로 제공됩니다. 상품에 따라 15~30페이지 분량의 상세한 분석 리포트를 받아보실 수 있습니다. 모바일, PC 어디서든 열람 가능합니다.'
      },
      {
        q: '생년월일시를 정확히 모르면 어떻게 하나요?',
        a: '시간을 모르시는 경우 "시간 모름"을 선택하시면 됩니다. 다만, 시간 정보가 있으면 더 정확한 분석이 가능하므로, 가능하다면 부모님께 확인해보시는 것을 권장합니다.'
      },
      {
        q: 'MBTI를 모르면 이용할 수 없나요?',
        a: 'K-Saju 기본 상품은 사주팔자만으로 분석되므로 MBTI 없이도 이용 가능합니다. K-Saju 프리미엄 상품을 이용하시려면 MBTI가 필요합니다. MBTI 검사는 무료로 온라인에서 진행하실 수 있습니다.'
      }
    ]
  },
  {
    category: '결제/환불',
    questions: [
      {
        q: '어떤 결제 수단을 사용할 수 있나요?',
        a: '신용카드, 체크카드, 간편결제(토스페이, 카카오페이, 네이버페이 등)를 지원합니다. 토스페이먼츠를 통한 안전한 결제가 진행됩니다.'
      },
      {
        q: '환불은 어떻게 받을 수 있나요?',
        a: '결과 발송 전에는 전액 환불이 가능합니다. 결과 발송 후에는 디지털 콘텐츠 특성상 환불이 제한됩니다. 단, 시스템 오류나 서비스 하자가 있는 경우에는 환불해 드립니다. 자세한 내용은 환불정책 페이지를 참고해주세요.'
      },
      {
        q: '영수증/세금계산서 발급이 가능한가요?',
        a: '결제 완료 시 자동으로 이메일로 영수증이 발송됩니다. 세금계산서가 필요하신 경우 고객센터(amoretto75@naver.com)로 문의해 주세요.'
      }
    ]
  },
  {
    category: '분석 내용',
    questions: [
      {
        q: 'AI로 분석하는 건가요?',
        a: '아닙니다. K-Saju는 자체 개발한 정밀 계산 엔진을 사용합니다. AI 프롬프트가 아닌, 전통 사주팔자 이론에 기반한 정확한 계산 로직으로 분석합니다. AI의 "환각(hallucination)" 문제 없이 신뢰할 수 있는 결과를 제공합니다.'
      },
      {
        q: 'MBTI와 사주를 같이 분석하는 이유가 뭔가요?',
        a: 'MBTI는 현재의 성향을, 사주는 타고난 기질과 인생의 흐름을 보여줍니다. 두 가지를 교차 검증하면 더 정확하고 입체적인 분석이 가능합니다. 특히 두 결과가 일치하는 부분은 더욱 강한 특성으로 볼 수 있습니다.'
      },
      {
        q: '궁합 분석은 어떤 관계에서 이용할 수 있나요?',
        a: '연인, 부부, 친구, 비즈니스 파트너 등 모든 관계에서 이용하실 수 있습니다. 두 사람의 생년월일시 정보만 있으면 분석이 가능합니다.'
      },
      {
        q: '분석 결과가 안 좋으면 어떻게 해야 하나요?',
        a: '사주 분석은 "운명"이 아닌 "경향성"을 보여줍니다. 조심해야 할 시기를 미리 알고 대비하면 더 좋은 결과를 만들 수 있습니다. 분석 결과에는 주의사항뿐 아니라 극복 방법도 함께 안내해 드립니다.'
      }
    ]
  },
  {
    category: '기타',
    questions: [
      {
        q: '개인정보는 안전하게 보호되나요?',
        a: '네, 입력하신 개인정보는 암호화되어 안전하게 보관되며, 분석 목적 외에는 절대 사용되지 않습니다. 자세한 내용은 개인정보처리방침을 참고해주세요.'
      },
      {
        q: '문의는 어디로 하면 되나요?',
        a: '이메일(amoretto75@naver.com)로 문의해 주시면 영업일 기준 24시간 이내에 답변 드립니다. 전화 문의는 010-2806-2497로 연락 주세요.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
          <p className="text-gray-600">궁금한 점을 빠르게 찾아보세요.</p>
        </div>

        {/* FAQ 목록 */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-xl font-bold mb-4 text-primary-600">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const index = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={qIndex}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium pr-4">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 문의 안내 */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">찾으시는 답변이 없나요?</h3>
          <p className="text-gray-600 mb-6">
            고객센터로 문의해 주시면 친절하게 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:amoretto75@naver.com"
              className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              이메일 문의
            </a>
            <a 
              href="tel:010-2806-2497"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              전화 문의
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
