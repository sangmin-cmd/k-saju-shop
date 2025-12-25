import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products, popularProducts } from '../lib/products';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - 다크 프리미엄 + Stripe 애니메이션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* 움직이는 배경 */}
        <div className="stripe-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          
          {/* 그리드 오버레이 */}
          <div className="grid-overlay"></div>
          
          {/* 파티클들 */}
          <div className="particle" style={{ top: '10%', left: '20%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ top: '20%', left: '80%', animationDelay: '0.5s' }}></div>
          <div className="particle" style={{ top: '60%', left: '10%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}></div>
          <div className="particle" style={{ top: '40%', left: '50%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ top: '70%', left: '30%', animationDelay: '2.5s' }}></div>
          <div className="particle" style={{ top: '30%', left: '60%', animationDelay: '0.3s' }}></div>
          <div className="particle" style={{ top: '90%', left: '40%', animationDelay: '1.2s' }}></div>
          <div className="particle" style={{ top: '15%', left: '45%', animationDelay: '1.8s' }}></div>
          <div className="particle" style={{ top: '55%', left: '85%', animationDelay: '0.8s' }}></div>
        </div>
        
        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-32">
          
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-white/80 text-sm">MBTI × 사주 분석 시스템</span>
          </div>
          
          {/* 메인 헤딩 */}
          <h1 className="text-7xl md:text-9xl font-light text-white mb-8 tracking-tight glow-text">
            K-Saju
          </h1>
          
          {/* 서브 헤딩 - F 옵션 */}
          <p className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            MBTI와 사주팔자의 교차 분석<br />
            <span className="text-white font-normal">160가지 패턴으로 읽는 당신의 운명</span>
          </p>
          
          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/products" className="px-10 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-white/90 transition-all btn-glow">
              지금 시작하기
            </Link>
            <Link href="#learn-more" className="px-10 py-4 glass-card text-white rounded-full font-light hover:bg-white/10 transition-all">
              더 알아보기 →
            </Link>
          </div>
          
          {/* 통계 */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">★</span>
              <span>평균 4.9점</span>
            </div>
            <div>1,000+ 분석 완료</div>
            <div>100% 환불 보장</div>
          </div>
        </div>
        
        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
        
      </section>

      {/* What is K-Saju? - 화이트 배경 */}
      <section className="bg-white py-32 px-4" id="learn-more">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light text-center mb-8 tracking-tight text-slate-900">
            What is K-Saju?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto text-center mb-20">
            두 가지 분석 체계의 만남,<br/>
            더 정확한 당신만의 패턴을 발견합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MBTI */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl mb-4 font-medium">MBTI</h3>
              <p className="text-white/70 font-light leading-relaxed">
                당신의 성격과 행동 패턴 분석.<br/>
                16가지 유형으로 파악하는 심리적 특성과 의사결정 방식.
              </p>
            </div>

            {/* 사주팔자 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-6">🌙</div>
              <h3 className="text-2xl mb-4 font-medium">사주팔자</h3>
              <p className="text-white/70 font-light leading-relaxed">
                타고난 운명과 시간의 흐름.<br/>
                생년월일시로 분석하는 천간지지의 에너지와 운세.
              </p>
            </div>

            {/* 160가지 패턴 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl mb-4 font-medium">160가지 패턴</h3>
              <p className="text-white/70 font-light leading-relaxed">
                MBTI 16가지 × 천간 10가지.<br/>
                둘을 교차 분석한 당신만의 맞춤 결과.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026년 운세 - 다크 섹션 */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="blob blob-3" style={{ opacity: 0.15 }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 glass-card rounded-full mb-10">
            <span className="text-sm tracking-widest font-light text-white/80">2026년 특별 분석</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-light mb-10 tracking-tight leading-tight text-white glow-text">
            2026년,<br />당신의 운명은?
          </h2>
          
          <p className="text-xl text-white/60 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            새해를 맞이하기 전, 당신의 2026년을 미리 확인하세요.<br />
            160가지 패턴이 예측하는 당신만의 한 해.
          </p>

          <Link href="/products" className="inline-block px-10 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-white/90 transition-all btn-glow">
            2026년 운세 확인
          </Link>
        </div>
      </section>

      {/* 인기 분석 - 다크 배경 */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="blob blob-1" style={{ opacity: 0.1 }}></div>
          <div className="blob blob-4" style={{ opacity: 0.1 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-white">
              인기 분석
            </h2>
            <p className="text-white/60 text-xl font-light">
              가장 많이 선택된 패턴
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 모든 분석 - 화이트 배경 */}
      <section className="bg-white py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight">
              모든 분석
            </h2>
            <p className="text-gray-600 text-xl font-light">
              당신에게 맞는 패턴을 선택하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/products" className="inline-block px-10 py-4 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all">
              모든 상품 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 신뢰 요소 - 그레이 배경 */}
      <section className="bg-gray-50 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-xl mb-4 font-medium text-slate-900">교차 분석 시스템</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                MBTI와 사주를 결합한 독자적인 분석 엔진. 더욱 정확한 맞춤 결과를 제공합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl mb-4 font-medium text-slate-900">100% 보안</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                모든 개인정보는 암호화되어 안전하게 보호됩니다. 완전한 환불 보장.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-slate-900 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl mb-4 font-medium text-slate-900">검증된 정확도</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                1,000명 이상의 고객이 검증한 정확도. 평균 만족도 4.9점.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
