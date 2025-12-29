'use client';

import Link from 'next/link';

// 카테고리별 상세 활용 사례 - 프리미엄 다크 모드
const USE_CASES = [
  {
    image: '/images/love.png',
    title: '연애 · 관계',
    bgColor: 'rgba(26, 10, 16, 0.9)',
    borderColor: 'rgba(224, 176, 176, 0.4)',
    accentColor: '#E0B0B0', // 로즈 골드
    glowColor: 'rgba(224, 176, 176, 0.15)',
    questions: [
      { q: '무의식적으로 반복되는 나의 끌림 패턴은?', a: '오행 기반 끌림 원인 분석' },
      { q: '왜 대화할 때마다 어긋날까?', a: '관계 역학 구조 & 소통 기술' },
      { q: '이 사람과 진짜 잘 맞을까?', a: '케미 점수 & 장기 상성 분석' },
      { q: '갈등을 해결하는 우리만의 방법은?', a: '트리거 분석 & 화해 전략' }
    ]
  },
  {
    image: '/images/career.png',
    title: '커리어 · 의사결정',
    bgColor: 'rgba(10, 16, 26, 0.9)',
    borderColor: 'rgba(192, 192, 192, 0.4)',
    accentColor: '#C0C0C0', // 실버
    glowColor: 'rgba(192, 192, 192, 0.15)',
    questions: [
      { q: '나의 천성과 시장 기회가 만나는 지점은?', a: '일간별 적성 & 기회 분석' },
      { q: '지금이 이직/전환의 적기일까?', a: '최적의 타이밍 & 리스크 진단' },
      { q: '번아웃을 예방하는 나만의 방법은?', a: '에너지 관리 & 회복 전략' },
      { q: '협상과 발표에서 나의 강점은?', a: 'MBTI×사주 소통 무기 분석' }
    ]
  },
  {
    image: '/images/money.png',
    title: '돈 · 사업',
    bgColor: 'rgba(10, 26, 15, 0.9)',
    borderColor: 'rgba(212, 175, 55, 0.4)',
    accentColor: '#D4AF37', // 골드
    glowColor: 'rgba(212, 175, 55, 0.15)',
    questions: [
      { q: '재물운 흐름에 따른 최적의 타이밍은?', a: '자산 방어 & 공격 시점 분석' },
      { q: '사업 확장, 언제가 적기일까?', a: '월별 운세 흐름 & 기회 포착' },
      { q: '돈이 새는 나만의 패턴은?', a: '재물 누수 원인 & 방어 전략' },
      { q: '동업 파트너와의 시너지는?', a: '기운 케미 & 리스크 최소화' }
    ]
  }
];

export default function UseCasesSection() {
  return (
    <section className="py-28 px-4"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #0a1628 50%, #050810 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-5 border border-amber-500/30">
            활용 사례
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#F5F5F0' }}>
            답답했던 고민, 명쾌한 액션 가이드로
          </h2>
          <p className="text-lg" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
            당신의 고민에 맞춘 맞춤형 프리미엄 분석이 준비되어 있습니다.
          </p>
        </div>

        {/* 3칸 그리드 - 프리미엄 카드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {USE_CASES.map((category, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
              style={{
                background: category.bgColor,
                border: `1px solid ${category.borderColor}`,
                boxShadow: `0 0 40px ${category.glowColor}`
              }}
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src={category.image} 
                  alt="" 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 object-contain"
                  style={{ filter: 'saturate(0.8)' }}
                />
              </div>

              {/* 글로우 효과 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 60px ${category.glowColor}` }}></div>

              <div className="relative z-10">
                {/* 헤더 - 이미지 아이콘 */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.accentColor}33 0%, ${category.accentColor}11 100%)`,
                      border: `1px solid ${category.accentColor}44`
                    }}>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#F5F5F0' }}>{category.title}</h3>
                </div>

                {/* 질문 리스트 - 스타일 대비 강화 */}
                <div className="space-y-3">
                  {category.questions.map((item, qIdx) => (
                    <div 
                      key={qIdx} 
                      className="rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {/* 질문 - 이탤릭 + 부드러운 색 */}
                      <p className="text-sm mb-2 italic" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                        "{item.q}"
                      </p>
                      {/* 솔루션 - 볼드 + 포인트 컬러 */}
                      <p className="text-sm flex items-center gap-2 font-semibold" style={{ color: category.accentColor }}>
                        <span>◆</span> {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          <Link 
            href="/sample"
            className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-center hover:scale-105"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F5F5F0'
            }}
          >
            📋 샘플 먼저 보기
          </Link>
          <Link 
            href="/free"
            className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-center hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
              color: '#0a0f1a'
            }}
          >
            ✨ 내 케이스로 분석하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
