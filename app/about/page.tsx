import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #0a1628 30%, #0d1a2d 70%, #0a1628 100%)' }}>
      
      {/* 히어로 섹션 */}
      <div className="relative py-20 px-4 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-6 border border-amber-500/30">
            Brand Philosophy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F5F0' }}>
            데이터로 증명하는 삶의 지도,<br />K-Saju의 철학
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
            당신의 삶을 읽는 가장 정교한 언어
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          
          {/* 브랜드 스토리 */}
          <section className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-3xl" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-3xl" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}></div>
            
            <div className="space-y-8">
              {/* 스토리 1 */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: '#d4af37' }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" 
                    style={{ background: 'rgba(212, 175, 55, 0.2)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>1</span>
                  조상의 지혜와 현대 심리학이 만나는 지점
                </h3>
                <p className="leading-relaxed pl-11" style={{ color: 'rgba(245, 245, 240, 0.8)' }}>
                  수천 년간 축적된 동양의 명리학은 통계학이자 우주의 리듬을 읽는 학문입니다. 
                  우리는 이 깊은 지혜에 현대 심리학의 정수인 MBTI를 더했습니다. 
                  당신의 <strong className="text-amber-300">타고난 기질(사주)</strong>과 
                  <strong className="text-amber-300"> 현재를 살아가는 태도(MBTI)</strong>가 
                  충돌하고 화합하는 그 복잡한 지도를 우리는 '데이터'로 풀어냅니다.
                </p>
              </div>
              
              {/* 스토리 2 */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: '#d4af37' }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" 
                    style={{ background: 'rgba(212, 175, 55, 0.2)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>2</span>
                  감이 아닌, 구조로 해석합니다
                </h3>
                <p className="leading-relaxed pl-11" style={{ color: 'rgba(245, 245, 240, 0.8)' }}>
                  운명은 모호한 예감이 아닙니다. K-Saju는 인공지능 프롬프트의 불확실한 답변을 거부합니다. 
                  독자적으로 개발한 <strong className="text-amber-300">정밀 계산 엔진</strong>은 
                  당신의 생년월일시를 절기 단위까지 분해하여 재조립합니다. 
                  우리는 당신의 운명을 '맞추는 것'이 아니라, 당신이 나아갈 수 있는 <strong className="text-amber-300">'구조'를 설계</strong>합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 우리의 비전 */}
          <section className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#F5F5F0' }}>
              <span className="text-2xl">🎯</span> 우리의 비전
            </h2>
            <p className="leading-relaxed text-lg mb-6" style={{ color: 'rgba(245, 245, 240, 0.8)' }}>
              우리는 단순한 운세 풀이를 넘어, <strong className="text-amber-300">객관적 데이터와 구조적 해석</strong>을 통해 
              당신이 삶의 주도권을 쥘 수 있는 <strong className="text-amber-300">'의사결정 시스템'</strong>을 제공합니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
              정교한 알고리즘, 삶의 변동성 제어, 그리고 실행 가능한 액션 플랜. 
              이것이 K-Saju가 추구하는 새로운 운세 분석의 패러다임입니다.
            </p>
            
            {/* 3-Way 시스템 암시 */}
            <div className="mt-8 p-6 rounded-2xl" style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px dashed rgba(212, 175, 55, 0.3)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                <span className="text-amber-400 font-semibold">💡 </span>
                우리는 현재에 멈추지 않습니다. 동서양의 모든 지혜를 통합한 
                <strong className="text-amber-300"> 다차원 분석 시스템(3-Way Engine)</strong>에 대한 
                독자적 기술 특허를 출원하며 분석의 한계를 계속해서 넓혀가고 있습니다.
              </p>
            </div>
          </section>

          {/* 차별점 */}
          <section className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: '#F5F5F0' }}>
              <span className="text-2xl">✨</span> K-Saju만의 차별점
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 정밀 계산 엔진 */}
              <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(100, 150, 255, 0.05)', border: '1px solid rgba(100, 150, 255, 0.15)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(100, 150, 255, 0.15)', border: '1px solid rgba(100, 150, 255, 0.3)' }}>
                    <span>🔬</span>
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: '#F5F5F0' }}>정밀 계산 엔진</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  AI 프롬프트가 아닌 자체 개발 계산 엔진.<br />
                  <strong className="text-blue-300">절기 단위까지 추적하는 독자적 만세력 연산 기술</strong>
                </p>
              </div>
              
              {/* MBTI 교차 검증 */}
              <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(100, 200, 150, 0.05)', border: '1px solid rgba(100, 200, 150, 0.15)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(100, 200, 150, 0.15)', border: '1px solid rgba(100, 200, 150, 0.3)' }}>
                    <span>🧠</span>
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: '#F5F5F0' }}>MBTI 교차 검증</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  단순 결합이 아닌 과학적 분석.<br />
                  <strong className="text-emerald-300">선천적 기질(사주)과 후천적 태도(MBTI)의 상관계수 정밀 분석</strong>
                </p>
              </div>
              
              {/* 데이터 기반 분석 */}
              <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(200, 150, 255, 0.05)', border: '1px solid rgba(200, 150, 255, 0.15)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(200, 150, 255, 0.15)', border: '1px solid rgba(200, 150, 255, 0.3)' }}>
                    <span>📊</span>
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: '#F5F5F0' }}>데이터 기반 분석</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  감이 아닌 숫자로 증명.<br />
                  <strong className="text-purple-300">오행 분포, 십성 분석, 대운/세운 흐름을 시각화</strong>
                </p>
              </div>
              
              {/* 실용적 조언 */}
              <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255, 180, 100, 0.05)', border: '1px solid rgba(255, 180, 100, 0.15)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255, 180, 100, 0.15)', border: '1px solid rgba(255, 180, 100, 0.3)' }}>
                    <span>💡</span>
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: '#F5F5F0' }}>실용적 액션 플랜</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  추상적인 미신을 배제.<br />
                  <strong className="text-orange-300">현실 밀착형 액션 플랜과 타이밍 가이드 제시</strong>
                </p>
              </div>
            </div>
          </section>

          {/* 서비스 구성 */}
          <section className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: '#F5F5F0' }}>
              <span className="text-2xl">📦</span> 서비스 구성
            </h2>
            <div className="space-y-6">
              {/* 정통 사주 분석 */}
              <div className="p-6 rounded-2xl flex items-start gap-4"
                style={{ background: 'rgba(100, 150, 255, 0.05)', borderLeft: '4px solid #6496ff' }}>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#F5F5F0' }}>정통 사주 분석</h3>
                  <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
                    나의 원형과 잠재력을 발견하는 <strong className="text-blue-300">15페이지의 내면 탐구</strong>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(100, 150, 255, 0.2)', color: '#6496ff' }}>
                  입문
                </span>
              </div>
              
              {/* 정통사주 × MBTI */}
              <div className="p-6 rounded-2xl flex items-start gap-4"
                style={{ background: 'rgba(212, 175, 55, 0.05)', borderLeft: '4px solid #d4af37' }}>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#F5F5F0' }}>정통사주 × MBTI 분석</h3>
                  <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
                    동서양 분석의 결합, <strong className="text-amber-300">타인과 나를 이해하는 30페이지 입체적 가이드</strong>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#d4af37' }}>
                  베스트
                </span>
              </div>
              
              {/* 연인 궁합 */}
              <div className="p-6 rounded-2xl flex items-start gap-4"
                style={{ background: 'rgba(224, 176, 176, 0.05)', borderLeft: '4px solid #E0B0B0' }}>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#F5F5F0' }}>연인 궁합 스페셜 분석</h3>
                  <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
                    단순 성격 차이를 넘어선 <strong className="text-rose-300">'관계의 역학'과 장기적 합(合) 25페이지 분석</strong>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(224, 176, 176, 0.2)', color: '#E0B0B0' }}>
                  스페셜
                </span>
              </div>
            </div>
          </section>

          {/* Coming Soon - 3-Way */}
          <section className="relative rounded-3xl p-8 md:p-10 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(26, 39, 68, 0.8) 0%, rgba(36, 59, 97, 0.8) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
            {/* 배경 심볼 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="text-[200px]">☯</div>
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)', color: '#0a0f1a' }}>
                COMING SOON
              </span>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#F5F5F0' }}>
                The 3rd Dimension
              </h3>
              <p className="mb-6" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                사주(동양) × MBTI(심리) × 점성술(천체)<br />
                <strong className="text-amber-300">3-Way 다차원 분석 시스템</strong>
              </p>
              
              {/* 특허 인증 이미지 */}
              <div className="flex justify-center mb-6">
                <img 
                  src="/images/patent-seal.jpg" 
                  alt="K-Saju Patent Pending - 3-Way Engine" 
                  className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-full"
                  style={{ 
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
                    border: '2px solid rgba(212, 175, 55, 0.3)'
                  }}
                />
              </div>
              
              <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.5)' }}>
                현재 기술 특허 출원 중 · 2025년 하반기 공개 예정
              </p>
            </div>
          </section>

          {/* 전문가 & 신뢰 */}
          <section className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#F5F5F0' }}>
                전문가의 협업으로 탄생
              </h2>
              <p style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
                20년 경력의 명리학 전문가와 데이터 사이언티스트의 협업
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl mb-4">📜</div>
                <h4 className="font-bold mb-2" style={{ color: '#F5F5F0' }}>전통 명리학</h4>
                <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>20년+ 경력 전문가 감수</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="font-bold mb-2" style={{ color: '#F5F5F0' }}>정밀 알고리즘</h4>
                <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>자체 개발 계산 엔진</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="font-bold mb-2" style={{ color: '#F5F5F0' }}>현대 심리학</h4>
                <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>MBTI 교차 검증</p>
              </div>
            </div>
          </section>

          {/* 운영사 정보 */}
          <section className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#F5F5F0' }}>
              <span className="text-2xl">🏢</span> 운영사 정보
            </h2>
            <div className="grid md:grid-cols-2 gap-4" style={{ color: 'rgba(245, 245, 240, 0.8)' }}>
              <p><strong className="text-amber-300">상호명:</strong> 인사이트 금융경영 연구소</p>
              <p><strong className="text-amber-300">대표자:</strong> 이상민</p>
              <p><strong className="text-amber-300">사업자등록번호:</strong> 110-37-62594</p>
              <p><strong className="text-amber-300">이메일:</strong> amoretto75@naver.com</p>
              <p className="md:col-span-2"><strong className="text-amber-300">주소:</strong> 경기도 용인시 기흥구 동백죽전대로 444, C602-B23호</p>
              <p><strong className="text-amber-300">전화:</strong> 010-2806-2497</p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/products" 
            className="inline-block px-10 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
              color: '#0a0f1a'
            }}
          >
            지금 분석 시작하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
