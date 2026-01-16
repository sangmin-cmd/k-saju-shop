'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { products, popularProducts } from './lib/products';
import UseCasesSection from './components/UseCasesSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const reportPreviews = [
    {
      title: '핵심 요약',
      subtitle: '나의 성향·강점·주의 포인트 한 장 정리',
      gradient: 'from-blue-500 to-purple-600',
      content: {
        type: 'ENFP × 甲木',
        label: '성장하는 아이디어',
        keywords: ['#도전', '#성장', '#에너자이저'],
        insight: '끊임없이 새로운 도전을 멈추지 않는 에너자이저. 아이디어가 샘솟지만 마무리에 집중이 필요한 시기'
      }
    },
    {
      title: '오행/십성 밸런스',
      subtitle: '부족한 기운 / 보완 전략',
      gradient: 'from-emerald-500 to-teal-600',
      content: {
        elements: [
          { name: '木', value: 4, color: 'bg-green-400' },
          { name: '火', value: 2, color: 'bg-red-400' },
          { name: '土', value: 3, color: 'bg-yellow-400' },
          { name: '金', value: 1, color: 'bg-gray-300' },
          { name: '水', value: 2, color: 'bg-blue-400' }
        ],
        recommendation: '金 에너지 보완 필요 → 규칙적인 루틴, 마무리 습관 강화'
      }
    },
    {
      title: '2026 액션 가이드',
      subtitle: '시기별 추천 행동 & 리스크 관리',
      gradient: 'from-pink-500 to-rose-600',
      content: {
        periods: [
          { month: '1~3월', action: '준비/학습', risk: '성급한 시작' },
          { month: '4~6월', action: '실행/도전', risk: '과욕' },
          { month: '7~9월', action: '조정/보완', risk: '번아웃' }
        ],
        keyMessage: '상반기에 씨 뿌리고, 하반기에 거두는 흐름'
      }
    }
  ];

  const faqs = [
    {
      q: '생시를 몰라도 되나요?',
      a: '네, 생시는 선택 입력입니다. 생시를 모르셔도 생년월일만으로 핵심 분석이 가능합니다. 생시가 있으면 더 정밀한 분석이 가능해집니다.'
    },
    {
      q: 'AI 사주인가요?',
      a: '아닙니다. K-Saju는 절기/만세력 기반의 정밀 계산 엔진입니다. 같은 입력이면 항상 같은 결과가 나오도록 설계되어 있습니다. 100% 자체 엔진 로직으로 해석됩니다.'
    },
    {
      q: '결과가 매번 같은가요?',
      a: '네, 동일한 입력(생년월일시, MBTI)이면 동일한 결과가 나옵니다. 이것이 AI 프롬프트 기반 서비스와의 가장 큰 차이점입니다.'
    },
    {
      q: '리포트는 어떻게 받나요?',
      a: '결제 완료 후 즉시 PDF가 생성되며, 마이페이지에서 언제든 다운로드할 수 있습니다. 이메일로도 발송해 드립니다.'
    },
    {
      q: '환불은 어떻게 되나요?',
      a: '리포트 생성 전 취소 시 전액 환불됩니다. 생성 후에는 디지털 상품 특성상 환불이 어려우나, 품질 불만족 시 고객센터로 문의해 주세요.'
    }
  ];

  const reviews = [
    { text: '"설명이 뻔하지 않고 행동 가이드가 있어서 좋았어요."', author: '30대, 직장인', rating: 5 },
    { text: '"결과가 재현돼서 신뢰가 생겼습니다."', author: '40대, 자영업', rating: 5 },
    { text: '"오행 밸런스 보고 생활 루틴을 바꿨더니 컨디션이 달라졌어요."', author: '20대, 대학원생', rating: 5 },
    { text: '"연애 패턴이 정확히 맞아서 소름…"', author: '30대, 프리랜서', rating: 5 },
    { text: '"PDF로 정리돼서 상담 자료처럼 쓰기 좋아요."', author: '40대, 컨설턴트', rating: 5 },
    { text: '"MBTI랑 같이 보니까 납득이 됩니다."', author: '20대, 직장인', rating: 5 }
  ];

  return (
    <div className="bg-white">
      {/* ========== 1. HERO - 프리미엄 네이비+골드 ========== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0f1a 0%, #1a2744 40%, #243b61 70%, #1a2744 100%)'
        }}>
        
        {/* 배경 효과 - 은은한 골드 톤 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl"></div>
          {/* 미세한 별자리 패턴 */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center py-24">
          {/* Badge - 골드 테두리 */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full mb-10 border border-amber-500/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-200/90 text-sm font-medium tracking-wide">전통 사주 × 현대 심리학</span>
          </div>
          
          {/* H1 - 메인 카피 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            style={{ color: '#F5F5F0' }}>
            나를 깊이 이해하면,<br />상대가 보이기 시작합니다.
          </h1>
          
          {/* Sub - 부드러운 크림톤 */}
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(245, 245, 240, 0.75)' }}>
            2026년 나의 흐름, 그리고 관계의 패턴까지<br className="hidden md:block" />
            <span className="text-amber-300 font-semibold">MBTI × 사주</span>로 읽어드립니다.
          </p>

          {/* 후킹 질문 3개 */}
          <div className="flex flex-wrap justify-center gap-5 mb-14">
            <div className="px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <span style={{ color: 'rgba(245, 245, 240, 0.85)' }} className="text-sm">💭 "그 사람, 나한테 진심일까?"</span>
            </div>
            <div className="px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <span style={{ color: 'rgba(245, 245, 240, 0.85)' }} className="text-sm">💕 "우리 궁합 괜찮은 걸까?"</span>
            </div>
            <div className="px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <span style={{ color: 'rgba(245, 245, 240, 0.85)' }} className="text-sm">✨ "올해 언제가 내 타이밍일까?"</span>
            </div>
          </div>

          {/* CTA 버튼 - 프리미엄 스타일 */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14">
            <Link 
              href="/free" 
              className="group px-10 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              무료 체험하기
            </Link>
            <Link 
              href="/products" 
              className="px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 border-2"
              style={{ 
                background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
                borderColor: '#d4af37',
                color: '#0a0f1a'
              }}
            >
              프리미엄 분석 →
            </Link>
          </div>

          {/* 신뢰 배지 - 더 세련된 스타일 */}
          <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">★</span>
              <span>평균 4.9점</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span>1,000+ 분석 완료</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span>
              <span>만족 보장 · 환불 정책</span>
            </div>
          </div>
        </div>

        {/* 하단 그라디언트 */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ========== 2. 결과물 미리보기 - 프리미엄 글래스모피즘 ========== */}
      <section className="py-28 px-4" id="preview"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f6f3 50%, #ffffff 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-5 border border-amber-200">
              리포트 미리보기
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              동양의 지혜 × 서양의 분석
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              당신의 <strong className="text-gray-900">기질(사주)</strong>과 <strong className="text-gray-900">태도(MBTI)</strong>를 결합해<br className="hidden md:block" />
              '공유하고 싶어지는 한 장의 요약'으로 정리해 드립니다.
            </p>
          </div>

          {/* 탭 - 더 명확한 활성화 표시 */}
          <div className="flex justify-center gap-2 mb-10">
            {reportPreviews.map((preview, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl scale-105 border-b-4 border-amber-500'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                {preview.title}
              </button>
            ))}
          </div>

          {/* 미리보기 카드 - 글래스모피즘 + 골드 테두리 */}
          <div className="max-w-2xl mx-auto">
            {/* 배경 효과 */}
            <div className="relative">
              {/* 은은한 오로라 배경 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 rounded-[2rem] blur-2xl"></div>
              
              {/* 메인 카드 - 글래스모피즘 */}
              <div className="relative rounded-3xl p-8 md:p-10 shadow-2xl border border-amber-500/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 39, 68, 0.95) 0%, rgba(36, 59, 97, 0.95) 50%, rgba(26, 39, 68, 0.95) 100%)',
                  backdropFilter: 'blur(20px)'
                }}>
                
                {/* 골드 코너 장식 */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/50 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/50 rounded-br-3xl"></div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#F5F5F0' }}>{reportPreviews[activeTab].title}</h3>
                  <p style={{ color: 'rgba(245, 245, 240, 0.7)' }}>{reportPreviews[activeTab].subtitle}</p>
                </div>
                
                {activeTab === 0 && (
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    {/* ENFP × 甲木 - 폰트 대비 */}
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-4xl font-bold tracking-tight" style={{ color: '#F5F5F0', fontFamily: 'system-ui, sans-serif' }}>ENFP</span>
                        <span className="text-2xl text-amber-400">×</span>
                        <span className="text-4xl font-bold" style={{ color: '#d4af37', fontFamily: 'serif' }}>甲木</span>
                      </div>
                      <p className="mt-3 text-lg" style={{ color: 'rgba(245, 245, 240, 0.8)' }}>성장하는 아이디어</p>
                    </div>
                    
                    {/* 키워드 뱃지 - 강화된 스타일 */}
                    <div className="flex justify-center gap-3 mb-8">
                      {reportPreviews[0].content.keywords.map((kw, i) => (
                        <span key={i} className="px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30 shadow-lg"
                          style={{ 
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
                            color: '#d4af37'
                          }}>
                          {kw}
                        </span>
                      ))}
                    </div>
                    
                    {/* 설명 - 강조 처리 */}
                    <p className="text-center leading-relaxed text-lg" style={{ color: 'rgba(245, 245, 240, 0.9)' }}>
                      끊임없이 새로운 도전을 멈추지 않는 에너자이저.<br />
                      아이디어가 샘솟지만 <span className="text-amber-400 font-semibold">마무리에 집중</span>이 필요한 시기
                    </p>
                  </div>
                )}
                
                {activeTab === 1 && (
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <div className="space-y-4 mb-6">
                      {reportPreviews[1].content.elements.map((el, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <span className="w-10 text-xl font-bold" style={{ color: '#d4af37', fontFamily: 'serif' }}>{el.name}</span>
                          <div className="flex-1 bg-white/10 rounded-full h-5 overflow-hidden border border-white/10">
                            <div className={`${el.color} h-full rounded-full`} style={{width: `${el.value * 20}%`}}></div>
                          </div>
                          <span className="w-8 text-right font-medium" style={{ color: '#F5F5F0' }}>{el.value}</span>
                        </div>
                    ))}
                    </div>
                    <div className="bg-amber-500/10 rounded-xl p-4 text-center border border-amber-500/20">
                      <p className="text-sm" style={{ color: '#d4af37' }}>{reportPreviews[1].content.recommendation}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 2 && (
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <div className="space-y-4 mb-6">
                      {reportPreviews[2].content.periods.map((period, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                          <span className="font-bold" style={{ color: '#d4af37' }}>{period.month}</span>
                          <span className="text-emerald-400 font-medium">✓ {period.action}</span>
                          <span className="text-rose-400 font-medium">⚠ {period.risk}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-500/10 rounded-xl p-4 text-center border border-amber-500/20">
                      <p className="font-medium" style={{ color: '#d4af37' }}>{reportPreviews[2].content.keyMessage}</p>
                    </div>
                  </div>
                )}
                
                {/* CTA 버튼 - 내 결과 카드 만들기 */}
                <Link 
                  href="/free"
                  className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
                    color: '#0a0f1a'
                  }}
                >
                  <span>✨</span>
                  <span>내 결과 카드 만들기</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. 인기 상품 ========== */}
      <section className="bg-gray-50 py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-5 border border-amber-200">
              상품 안내
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              나에게 맞는 분석을 선택하세요
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map(product => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. AI vs K-Saju 비교 - 프리미엄 대비 ========== */}
      <section className="py-28 px-4"
        style={{ background: 'linear-gradient(135deg, #050810 0%, #0a1628 30%, #1a2744 50%, #0a1628 70%, #050810 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-5 border border-amber-500/30">
              왜 다른가요?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#F5F5F0' }}>
              AI 프롬프트 vs K-Saju 엔진
            </h2>
            <p className="text-lg" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
              같은 사주 서비스라도 <span className="text-amber-400">결과의 신뢰도</span>가 다릅니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* AI Prompt - 어둡고 흐릿한 느낌 */}
            <div className="rounded-2xl p-8 border border-white/5 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(30, 30, 35, 0.8) 0%, rgba(20, 20, 25, 0.9) 100%)' }}>
              {/* 흐릿한 배경 효과 */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/20 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-gray-800/80 rounded-full flex items-center justify-center border border-gray-700/50">
                    <span className="text-2xl opacity-60">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>AI 프롬프트 기반</h3>
                    <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.4)' }}>일반 서비스</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3" style={{ color: 'rgba(245, 245, 240, 0.5)' }}>
                    <span className="w-5 h-5 rounded-full border border-dashed border-gray-600 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    </span>
                    <span>매번 다른 결과 (비일관성)</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: 'rgba(245, 245, 240, 0.5)' }}>
                    <span className="w-5 h-5 rounded-full border border-dashed border-gray-600 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    </span>
                    <span>모호한 해석, 검증 어려움</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: 'rgba(245, 245, 240, 0.5)' }}>
                    <span className="w-5 h-5 rounded-full border border-dashed border-gray-600 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    </span>
                    <span>만세력 계산 오류 가능성</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: 'rgba(245, 245, 240, 0.5)' }}>
                    <span className="w-5 h-5 rounded-full border border-dashed border-gray-600 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    </span>
                    <span>추상적인 운세 문구</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* K-Saju Engine - 황금나침반 배경 + 프리미엄 */}
            <div className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(26, 39, 68, 0.95) 0%, rgba(36, 59, 97, 0.9) 100%)',
                border: '2px solid rgba(212, 175, 55, 0.5)',
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.15)'
              }}>
              
              {/* 황금나침반 배경 이미지 */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src="/images/compass.png" 
                  alt="" 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 object-contain opacity-60"
                  style={{ filter: 'saturate(1.2)' }}
                />
              </div>
              
              {/* 골드 글로우 효과 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 60px rgba(212, 175, 55, 0.1)' }}></div>
              
              {/* 추천 배지 */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-4 py-1.5 text-xs font-bold rounded-full shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
                    color: '#0a0f1a'
                  }}>
                  추천
                </span>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
                      boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                    }}>
                    <span className="text-2xl">🧭</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#F5F5F0' }}>K-Saju Engine</h3>
                    <p className="text-sm font-medium" style={{ color: '#d4af37' }}>정밀 계산 시스템</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3" style={{ color: '#F5F5F0' }}>
                    <span className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <span className="text-amber-400">◆</span>
                    </span>
                    <span><strong className="text-amber-300">100% 재현 가능</strong>한 일관성</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: '#F5F5F0' }}>
                    <span className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <span className="text-amber-400">◆</span>
                    </span>
                    <span>절기 기반 <strong className="text-amber-300">정밀 만세력</strong> 계산</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: '#F5F5F0' }}>
                    <span className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <span className="text-amber-400">◆</span>
                    </span>
                    <span><strong className="text-amber-300">구조적 알고리즘</strong>으로 해석</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: '#F5F5F0' }}>
                    <span className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <span className="text-amber-400">◆</span>
                    </span>
                    <span>MBTI <strong className="text-amber-300">교차 검증</strong>으로 정확도 향상</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. 유즈케이스 ========== */}
      <UseCasesSection />

      {/* ========== 6. 후기 - 프리미엄 다크 ========== */}
      <section className="py-28 px-4"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0a1628 50%, #050810 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-5 border border-amber-500/30">
              실제 후기
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#F5F5F0' }}>
              먼저 써본 사람들이 말합니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} 
                className="relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.03)'
                }}>
                {/* 글로우 효과 */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.05)' }}></div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="mb-5 leading-relaxed text-lg" style={{ color: '#F5F5F0' }}>{review.text}</p>
                  <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.5)' }}>{review.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. 신뢰 블록 - 프리미엄 다크 ========== */}
      <section className="py-28 px-4"
        style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1a2d 50%, #0a1628 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-5 border border-amber-500/30">
              신뢰 & 안전
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#F5F5F0' }}>
              신뢰가 먼저입니다
            </h2>
            <p className="text-lg" style={{ color: 'rgba(245, 245, 240, 0.6)' }}>
              안전하게 분석받고, 안심하고 결제하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 개인정보 보호 */}
            <div className="relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(192, 192, 192, 0.2)',
                boxShadow: '0 0 40px rgba(100, 150, 255, 0.05)'
              }}>
              {/* 글로우 효과 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 40px rgba(100, 150, 255, 0.1)' }}></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.1) 0%, rgba(192, 192, 192, 0.05) 100%)',
                    border: '2px solid rgba(192, 192, 192, 0.3)',
                    boxShadow: '0 0 30px rgba(192, 192, 192, 0.1)'
                  }}>
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F5F5F0' }}>개인정보 보호</h3>
                <div className="space-y-2" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#C0C0C0' }}>◆</span>
                    <span>256비트 암호화 전송</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#C0C0C0' }}>◆</span>
                    <span>Zero-Log 정책 (즉시 파기)</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#C0C0C0' }}>◆</span>
                    <span>분석 목적 외 사용 없음</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 안전 결제 · 환불 */}
            <div className="relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.05)'
              }}>
              {/* 글로우 효과 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.1)' }}></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
                    border: '2px solid rgba(212, 175, 55, 0.4)',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.15)'
                  }}>
                  <span className="text-4xl">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F5F5F0' }}>안전 결제 · 환불</h3>
                <div className="space-y-2" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#d4af37' }}>◆</span>
                    <span>국내 PG사 안전 거래</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#d4af37' }}>◆</span>
                    <span>불만족 시 100% 환불</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#d4af37' }}>◆</span>
                    <span>No-Risk 만족 보장</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 계산 근거 */}
            <div className="relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(100, 200, 150, 0.2)',
                boxShadow: '0 0 40px rgba(100, 200, 150, 0.05)'
              }}>
              {/* 글로우 효과 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 40px rgba(100, 200, 150, 0.1)' }}></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(100, 200, 150, 0.1) 0%, rgba(100, 200, 150, 0.05) 100%)',
                    border: '2px solid rgba(100, 200, 150, 0.3)',
                    boxShadow: '0 0 30px rgba(100, 200, 150, 0.1)'
                  }}>
                  <span className="text-4xl">🧭</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F5F5F0' }}>계산 근거</h3>
                <div className="space-y-2" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#64c896' }}>◆</span>
                    <span>절기 · 만세력 정밀 계산</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: '#64c896' }}>◆</span>
                    <span>100% 자체 엔진 로직</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 보증 문구 */}
          <div className="text-center mt-12 pt-8 border-t border-white/5">
            <p className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.4)' }}>
              우리는 당신의 운명을 소중히 다루며, 개인정보를 상업적으로 이용하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 8. FAQ - 프리미엄 다크 ========== */}
      <section className="py-28 px-4"
        style={{ background: 'linear-gradient(180deg, #050810 0%, #0a1628 50%, #050810 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-5 border border-amber-500/30">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#F5F5F0' }}>
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} 
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors"
                  style={{ background: openFaq === idx ? 'rgba(212, 175, 55, 0.05)' : 'transparent' }}
                >
                  <span className="font-semibold text-lg" style={{ color: '#F5F5F0' }}>{faq.q}</span>
                  <span className={`text-2xl transition-transform ${openFaq === idx ? 'rotate-45' : ''}`} style={{ color: '#d4af37' }}>+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 9. FINAL CTA - 프리미엄 네이비+골드 ========== */}
      <section className="py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #0a0f1a 0%, #1a2744 50%, #243b61 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-6 border border-amber-500/30">
            지금 시작하세요
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F5F5F0' }}>
            감이 아닌 구조로 읽어내는<br />진정한 나를 만나보세요.
          </h2>
          <p className="text-xl mb-10" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
            무료 1페이지로 먼저 확인하고, 필요하면 전체 리포트로 확장하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/free"
              className="px-10 py-4 bg-white text-gray-900 text-lg font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              무료 체험하기
            </Link>
            <Link 
              href="/products" 
              className="px-10 py-4 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border-2"
              style={{ 
                background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
                borderColor: '#d4af37',
                color: '#0a0f1a'
              }}
            >
              프리미엄 분석 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STICKY CTA BAR ========== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-3 px-4 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-600 hidden sm:block">
            무료로 먼저 체험해 보세요
          </span>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link 
              href="/free" 
              className="flex-1 sm:flex-none px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
            >
              무료 체험
            </Link>
            <Link 
              href="/products" 
              className="flex-1 sm:flex-none px-6 py-3 font-semibold rounded-lg transition-colors text-center"
              style={{ 
                background: 'linear-gradient(135deg, #d4af37 0%, #b8960c 100%)',
                color: '#0a0f1a'
              }}
            >
              프리미엄
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Bar 공간 확보 */}
      <div className="h-20"></div>
    </div>
  );
}
