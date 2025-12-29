// 맛보기 1페이지 React 컴포넌트
// DB 연결: dayMasterTexts, mbtiTexts, combinations

import React from 'react';

// DB import (경로는 프로젝트 구조에 맞게 조정)
import { dayMasterTexts } from '../data/dayMasterTexts';
import { mbtiTexts } from '../data/mbtiTexts';
import { getCombination } from '../data/combinations';

// 오행별 테마 색상
const elementThemes = {
  '甲': { bg: 'from-green-50 to-emerald-100', accent: 'text-green-700', border: 'border-green-500', icon: '🌳', element: '木' },
  '乙': { bg: 'from-green-50 to-lime-100', accent: 'text-green-600', border: 'border-green-400', icon: '🌿', element: '木' },
  '丙': { bg: 'from-orange-50 to-red-100', accent: 'text-orange-700', border: 'border-orange-500', icon: '☀️', element: '火' },
  '丁': { bg: 'from-rose-50 to-pink-100', accent: 'text-rose-600', border: 'border-rose-400', icon: '🕯️', element: '火' },
  '戊': { bg: 'from-amber-50 to-yellow-100', accent: 'text-amber-700', border: 'border-amber-500', icon: '⛰️', element: '土' },
  '己': { bg: 'from-yellow-50 to-amber-100', accent: 'text-yellow-700', border: 'border-yellow-500', icon: '🌾', element: '土' },
  '庚': { bg: 'from-gray-50 to-slate-100', accent: 'text-gray-700', border: 'border-gray-500', icon: '⚔️', element: '金' },
  '辛': { bg: 'from-slate-50 to-zinc-100', accent: 'text-slate-600', border: 'border-slate-400', icon: '💎', element: '金' },
  '壬': { bg: 'from-blue-50 to-cyan-100', accent: 'text-blue-700', border: 'border-blue-500', icon: '🌊', element: '水' },
  '癸': { bg: 'from-cyan-50 to-sky-100', accent: 'text-cyan-600', border: 'border-cyan-400', icon: '💧', element: '水' },
};

// 점수별 등급
const getScoreGrade = (score: number) => {
  if (score >= 85) return { label: '최상위 시너지', color: 'text-purple-600', emoji: '🌟' };
  if (score >= 75) return { label: '상위 20%', color: 'text-green-600', emoji: '⭐' };
  if (score >= 65) return { label: '좋은 조화', color: 'text-blue-600', emoji: '✨' };
  if (score >= 55) return { label: '보완 필요', color: 'text-amber-600', emoji: '💫' };
  return { label: '성장 기회', color: 'text-orange-600', emoji: '🔥' };
};

interface PreviewReportProps {
  userName: string;
  mbti: string;
  dayMaster: string;
  onCTAClick?: () => void;
}

export const PreviewReport: React.FC<PreviewReportProps> = ({
  userName,
  mbti,
  dayMaster,
  onCTAClick
}) => {
  // DB에서 데이터 가져오기
  const dayMasterInfo = dayMasterTexts[dayMaster];
  const mbtiInfo = mbtiTexts[mbti.toUpperCase()];
  const combination = getCombination(dayMaster, mbti);

  // 테마 가져오기
  const theme = elementThemes[dayMaster] || elementThemes['丙'];
  const scoreGrade = combination ? getScoreGrade(combination.harmony.score) : getScoreGrade(50);

  // 데이터 없으면 에러 처리
  if (!dayMasterInfo || !mbtiInfo || !combination) {
    return (
      <div className="p-8 text-center text-red-500">
        데이터를 불러올 수 없습니다. 입력값을 확인해주세요.
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto p-6 bg-gradient-to-br ${theme.bg} rounded-2xl shadow-xl`}>
      
      {/* 헤더 */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-2">MBTI × 사주 케미 분석</p>
        <h1 className={`text-2xl font-bold ${theme.accent}`}>
          {userName}님의 특별한 조합
        </h1>
      </div>

      {/* 조합 표시 */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
          <p className="text-xs text-gray-500 mb-1">MBTI</p>
          <p className="text-2xl font-bold text-indigo-600">{mbti}</p>
          <p className="text-xs text-gray-400 mt-1">{mbtiInfo.title}</p>
        </div>
        
        <span className="text-3xl">×</span>
        
        <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
          <p className="text-xs text-gray-500 mb-1">사주 일간</p>
          <p className="text-2xl font-bold">
            <span className={theme.accent}>{dayMaster}</span>
            <span className="text-lg ml-1">{theme.element}</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">{theme.icon} {dayMasterInfo.title}</p>
        </div>
      </div>

      {/* 케미 점수 */}
      <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${theme.border} mb-6`}>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">케미 점수</p>
          <div className="flex items-center justify-center gap-2">
            <span className={`text-5xl font-extrabold ${theme.accent}`}>
              {combination.harmony.score}
            </span>
            <span className="text-2xl text-gray-400">/100</span>
          </div>
          <p className={`mt-2 font-medium ${scoreGrade.color}`}>
            {scoreGrade.emoji} {scoreGrade.label}
          </p>
        </div>
      </div>

      {/* 한줄 요약 */}
      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <p className={`text-center text-lg font-semibold ${theme.accent} mb-3`}>
          "{combination.harmony.summary}"
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {combination.harmony.description}
        </p>
      </div>

      {/* 시너지 & 갈등 미리보기 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* 시너지 */}
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <p className="text-sm font-semibold text-green-700 mb-2">✨ 시너지</p>
          <p className="text-xs text-green-600">
            {combination.synergies[0]?.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            외 {combination.synergies.length - 1}개 더...
          </p>
        </div>
        
        {/* 갈등 */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-sm font-semibold text-amber-700 mb-2">⚡ 내적 긴장</p>
          <p className="text-xs text-amber-600">
            {combination.conflicts[0]?.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            해결책 포함...
          </p>
        </div>
      </div>

      {/* 추가 정보 티저 */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <p className="text-sm text-gray-500 text-center mb-3">프리미엄 리포트에서 더 알아보세요</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['연애 궁합', '이상적 커리어', '월별 운세', '성장 전략'].map((item) => (
            <span key={item} className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border">
              🔒 {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA 버튼 */}
      <button
        onClick={onCTAClick}
        className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg
          bg-gradient-to-r from-amber-500 to-orange-500 
          hover:from-amber-600 hover:to-orange-600
          transform hover:scale-[1.02] transition-all duration-200`}
      >
        🔮 전체 분석 리포트 받기
      </button>
      
      <p className="text-center text-xs text-gray-400 mt-3">
        50페이지 상세 분석 • PDF 다운로드 • 평생 소장
      </p>
    </div>
  );
};

export default PreviewReport;
