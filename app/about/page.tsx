import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">K-Saju 소개</h1>
          <p className="text-xl text-gray-600">
            정밀 계산 엔진 + MBTI 교차 검증으로<br />
            감이 아닌 구조로 해석합니다.
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="space-y-12">
          {/* 비전 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">🎯 우리의 비전</h2>
            <p className="text-gray-700 leading-relaxed">
              K-Saju는 전통 사주팔자의 지혜와 현대 심리학(MBTI)을 융합하여, 
              누구나 쉽게 자신을 이해하고 더 나은 선택을 할 수 있도록 돕습니다.
              단순한 운세가 아닌, <strong>과학적 분석</strong>과 <strong>구조적 해석</strong>으로 
              당신의 타이밍을 읽어드립니다.
            </p>
          </section>

          {/* 차별점 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">✨ K-Saju만의 차별점</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🔬 정밀 계산 엔진</h3>
                <p className="text-gray-700 text-sm">
                  AI 프롬프트가 아닌 자체 개발 계산 엔진으로 
                  정확한 사주팔자를 산출합니다.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🧠 MBTI 교차 검증</h3>
                <p className="text-gray-700 text-sm">
                  사주 분석 결과를 MBTI 성향과 교차 검증하여 
                  더 정확한 인사이트를 제공합니다.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">📊 데이터 기반 분석</h3>
                <p className="text-gray-700 text-sm">
                  오행 분포, 십성 분석, 대운/세운 흐름을 
                  시각화된 데이터로 제공합니다.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">💡 실용적 조언</h3>
                <p className="text-gray-700 text-sm">
                  추상적인 운세가 아닌, 지금 해야 할 것과 
                  피해야 할 것을 구체적으로 안내합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 서비스 소개 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">📦 서비스 구성</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold">K-Saju 기본</h3>
                <p className="text-gray-600 text-sm">사주팔자 기반 핵심 운세 분석 (15페이지 PDF)</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold">K-Saju 프리미엄</h3>
                <p className="text-gray-600 text-sm">MBTI + 사주 완벽 조합 심층 분석 (30페이지 PDF)</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-bold">FateMate 궁합</h3>
                <p className="text-gray-600 text-sm">두 사람의 운명적 궁합 분석 (7~19페이지 PDF)</p>
              </div>
            </div>
          </section>

          {/* 회사 정보 */}
          <section className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">🏢 운영사 정보</h2>
            <div className="space-y-2">
              <p><strong>상호명:</strong> 인사이트 금융경영 연구소</p>
              <p><strong>대표자:</strong> 이상민</p>
              <p><strong>사업자등록번호:</strong> 110-37-62594</p>
              <p><strong>주소:</strong> 경기도 용인시 기흥구 동백죽전대로 444, C602-B23호</p>
              <p><strong>이메일:</strong> amoretto75@naver.com</p>
              <p><strong>전화:</strong> 010-2806-2497</p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/products" 
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
          >
            지금 분석 시작하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
