'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { products, popularProducts } from './lib/products';

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
      {/* ========== 1. HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 30%, #0d7377 70%, #14b8a6 100%)'
        }}>
        
        {/* 배경 효과 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">정밀 계산 + MBTI 교차 분석</span>
          </div>
          
          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            나를 이해하고,<br />타이밍까지 읽는 분석.
          </h1>
          
          {/* Sub */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            K-Saju 정밀 계산 엔진 + MBTI 교차 검증으로,<br className="hidden md:block" />
            감이 아니라 <span className="text-cyan-300 font-semibold">구조</span>로 해석합니다.
          </p>

          {/* 핵심 3줄 */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <span className="text-white/90 text-sm">🎯 성향 — 어떻게 선택하는지</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <span className="text-white/90 text-sm">🌊 흐름 — 언제 밀고/쉬어야 하는지</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <span className="text-white/90 text-sm">⚡ 액션 — 지금 해야 할 것/피해야 할 것</span>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/free" 
              className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              무료 체험하기
            </Link>
            <Link 
              href="/products" 
              className="px-8 py-4 bg-cyan-500 text-white text-lg font-semibold rounded-xl hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              프리미엄 분석 →
            </Link>
          </div>

          {/* 신뢰 배지 */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>평균 4.9점</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span>1,000+ 분석 완료</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>만족 보장 · 환불 정책</span>
            </div>
          </div>
        </div>

        {/* 하단 그라디언트 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ========== 2. 결과물 미리보기 ========== */}
      <section className="bg-white py-24 px-4" id="preview">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              리포트 미리보기
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이런 리포트를 받게 됩니다
            </h2>
            <p className="text-lg text-gray-600">
              공유하고 싶어지는 한 장 요약 + 실행 가이드까지.
            </p>
          </div>

          {/* 탭 */}
          <div className="flex justify-center gap-2 mb-8">
            {reportPreviews.map((preview, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {preview.title}
              </button>
            ))}
          </div>

          {/* 미리보기 카드 */}
          <div className={`bg-gradient-to-br ${reportPreviews[activeTab].gradient} rounded-3xl p-8 text-white max-w-2xl mx-auto shadow-2xl`}>
            <div className="text-sm opacity-80 mb-2">{reportPreviews[activeTab].title}</div>
            <div className="text-lg font-medium mb-6">{reportPreviews[activeTab].subtitle}</div>
            
            {activeTab === 0 && (
              <div className="space-y-4">
                <div className="text-3xl font-bold">{reportPreviews[0].content.type}</div>
                <div className="text-lg opacity-90">{reportPreviews[0].content.label}</div>
                <div className="flex gap-2 flex-wrap">
                  {reportPreviews[0].content.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">{kw}</span>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white/20 rounded-xl">
                  <div className="text-sm opacity-70 mb-1">핵심 인사이트</div>
                  <div className="font-medium">{reportPreviews[0].content.insight}</div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  {reportPreviews[1].content.elements.map((el, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-8 text-sm">{el.name}</span>
                      <div className="flex-1 h-4 bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full ${el.color}`} style={{ width: `${el.value * 20}%` }}></div>
                      </div>
                      <span className="text-sm">{el.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white/20 rounded-xl">
                  <div className="text-sm opacity-70 mb-1">보완 전략</div>
                  <div className="font-medium">{reportPreviews[1].content.recommendation}</div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {reportPreviews[2].content.periods.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-white/10 rounded-lg">
                      <span className="font-bold text-lg">{p.month}</span>
                      <div className="flex-1">
                        <div className="text-sm">✓ {p.action}</div>
                        <div className="text-sm opacity-70">⚠ {p.risk} 주의</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white/20 rounded-xl">
                  <div className="text-sm opacity-70 mb-1">2026 핵심 메시지</div>
                  <div className="font-medium">{reportPreviews[2].content.keyMessage}</div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/free" 
              className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              무료로 체험해보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 3. HOW IT WORKS ========== */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3분이면 끝. 결과는 바로 받습니다.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">✏️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">입력</h3>
              <p className="text-gray-600 mb-2">생년월일 · 시간(선택) + MBTI(선택)</p>
              <p className="text-sm text-gray-400">💡 생시를 몰라도 분석 가능합니다.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">정밀 계산</h3>
              <p className="text-gray-600 mb-2">절기/만세력 기반 계산 + 패턴 매칭</p>
              <p className="text-sm text-gray-400">💡 MBTI 교차 검증으로 정확도 향상</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">리포트 제공</h3>
              <p className="text-gray-600 mb-2">요약 + 상세 + 실행 가이드</p>
              <p className="text-sm text-gray-400">💡 PDF 다운로드 / 웹에서 바로 확인</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block px-8 py-4 bg-cyan-500 text-white text-lg font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              지금 내 리포트 만들기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 4. 상품 패키지 ========== */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              당신에게 맞는 분석을 선택하세요
            </h2>
            <p className="text-gray-600">
              결제 후 즉시 생성 / PDF 제공 / 마이페이지 저장
            </p>
          </div>

          {/* 상품 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map(product => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>

          {/* 비교표 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-8">패키지 비교</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4">기능</th>
                    <th className="text-center py-4 px-4">기본</th>
                    <th className="text-center py-4 px-4 bg-cyan-50">프리미엄</th>
                    <th className="text-center py-4 px-4">궁합 기본</th>
                    <th className="text-center py-4 px-4">궁합 완전판</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">핵심 성향 분석</td>
                    <td className="text-center py-3 px-4">✓</td>
                    <td className="text-center py-3 px-4 bg-cyan-50">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">오행/십성 밸런스</td>
                    <td className="text-center py-3 px-4">✓</td>
                    <td className="text-center py-3 px-4 bg-cyan-50">✓</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">MBTI × 사주 교차 분석</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4 bg-cyan-50">✓</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">연애/궁합 분석</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4 bg-cyan-50">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">2026 액션 가이드</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4 bg-cyan-50">✓</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">PDF 분량</td>
                    <td className="text-center py-3 px-4">15p</td>
                    <td className="text-center py-3 px-4 bg-cyan-50 font-semibold">30p</td>
                    <td className="text-center py-3 px-4">7p</td>
                    <td className="text-center py-3 px-4">19p</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. WHY K-SAJU ========== */}
      <section className="bg-gray-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
              차별화 포인트
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              왜 K-Saju Engine인가?
            </h2>
            <p className="text-lg text-gray-400">
              프롬프트가 아니라, <span className="text-cyan-400">계산 엔진</span>입니다.<br />
              같은 입력이면 같은 결과가 나옵니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 일반 AI 사주 */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-400">일반 AI 사주</h3>
                  <p className="text-sm text-gray-500">GPT 기반 프롬프트</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>매번 결과가 달라질 수 있음</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>만세력/절기 계산 오류 가능</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>근거 설명이 약함</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>검증/재현이 어려움</span>
                </li>
              </ul>
            </div>

            {/* K-Saju Engine */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-2xl p-8 border-2 border-cyan-500 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">추천</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">K-Saju Engine</h3>
                  <p className="text-sm text-cyan-400">정밀 계산 시스템</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>동일 입력 = 동일 결과 (일관성)</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>절기 기반 정밀 만세력 계산</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>패턴 매칭으로 구조화된 해석</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>MBTI 교차 검증으로 정확도 향상</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6. 유즈케이스 ========== */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이럴 때 가장 쓸모 있습니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 연애/관계 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">연애 · 관계</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>갈등이 반복되는 이유</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>상대와 맞추는 포인트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>피해야 할 대화 패턴</span>
                </li>
              </ul>
            </div>

            {/* 커리어 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">커리어 · 의사결정</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>내 강점이 먹히는 환경</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>이직/도전 타이밍</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>번아웃 위험 신호</span>
                </li>
              </ul>
            </div>

            {/* 돈/사업 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">돈 · 사업</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>리스크가 커지는 시기</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>확장/정리 타이밍</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>현금흐름 관리 포인트</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              내 케이스로 바로 분석하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 7. 후기 ========== */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              먼저 써본 사람들이 말합니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                <p className="text-sm text-gray-500">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 8. 신뢰 블록 ========== */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              신뢰가 먼저입니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold mb-3">개인정보 보호</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                입력 데이터는 최소 수집<br />
                언제든 삭제 가능<br />
                분석 목적 외 사용 없음
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="text-lg font-bold mb-3">안전 결제 · 환불</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                결제는 PG사 안전결제<br />
                환불 기준 명확히 공개<br />
                만족 보장 정책
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-lg font-bold mb-3">계산 근거</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                절기 · 만세력 계산 로직 기반<br />
                20년+ 전문가 감수<br />
                100% 자체 엔진 로직 해석
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 9. FAQ ========== */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <span className={`text-2xl transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. FINAL CTA ========== */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금, 내 리포트를 받아보세요.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            무료 1페이지로 먼저 확인하고, 필요하면 전체 리포트로 확장하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/free" 
              className="px-8 py-4 bg-white text-cyan-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              무료 체험하기
            </Link>
            <Link 
              href="/products" 
              className="px-8 py-4 bg-cyan-700 text-white text-lg font-bold rounded-xl hover:bg-cyan-800 transition-all border-2 border-white/30"
            >
              프리미엄 분석 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STICKY CTA BAR ========== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-50 shadow-lg">
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
              className="flex-1 sm:flex-none px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors text-center"
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
