'use client';

import { useState } from 'react';
import Link from 'next/link';

// 천간 데이터
const STEMS = [
  { hanja: '甲', name: '갑목', element: 'wood', yinyang: 'yang', 
    title: '성장하는 큰 나무',
    desc: '당신은 큰 나무처럼 곧고 당당한 에너지를 가졌습니다. 진취적이고 리더십이 강하며, 새로운 도전을 두려워하지 않습니다. 주변 사람들에게 든든한 버팀목이 되어주지만, 때로는 고집스러운 면도 있어요.',
    keywords: ['리더십', '추진력', '성장'] },
  { hanja: '乙', name: '을목', element: 'wood', yinyang: 'yin',
    title: '유연한 덩굴',
    desc: '당신은 풀과 덩굴처럼 유연하고 적응력이 뛰어납니다. 어떤 환경에서도 자신만의 방식으로 성장해나가는 힘이 있어요. 섬세한 감각과 예술적 재능이 돋보이며, 부드럽게 사람들의 마음을 얻습니다.',
    keywords: ['유연함', '적응력', '섬세함'] },
  { hanja: '丙', name: '병화', element: 'fire', yinyang: 'yang',
    title: '빛나는 태양',
    desc: '당신은 태양처럼 밝고 열정적인 에너지를 가졌습니다. 주변을 환하게 밝히는 카리스마가 있고, 어디서든 주목받는 존재예요. 낙천적이고 사교적이지만, 가끔은 성급하게 달려들기도 합니다.',
    keywords: ['열정', '카리스마', '낙관'] },
  { hanja: '丁', name: '정화', element: 'fire', yinyang: 'yin',
    title: '따뜻한 촛불',
    desc: '당신은 촛불처럼 은은하고 따뜻한 빛을 가졌습니다. 집중력이 뛰어나고 세심한 배려심으로 주변 사람들에게 위안을 줍니다. 내면의 열정을 조용히 태우며, 깊이 있는 관계를 만들어갑니다.',
    keywords: ['집중력', '배려심', '깊이'] },
  { hanja: '戊', name: '무토', element: 'earth', yinyang: 'yang',
    title: '듬직한 산',
    desc: '당신은 산처럼 묵직하고 신뢰감 있는 존재입니다. 흔들리지 않는 안정감으로 주변에 든든함을 주고, 포용력이 넓어 많은 사람들이 당신을 의지합니다. 다만 변화에는 시간이 조금 필요해요.',
    keywords: ['안정감', '신뢰', '포용력'] },
  { hanja: '己', name: '기토', element: 'earth', yinyang: 'yin',
    title: '비옥한 땅',
    desc: '당신은 논밭처럼 부드럽고 양육적인 에너지를 가졌습니다. 조화를 중시하고 실용적인 해결책을 찾아내며, 주변 사람들을 잘 돌봅니다. 중재자 역할을 잘 하지만, 때로는 걱정이 많기도 해요.',
    keywords: ['중재력', '실용성', '양육'] },
  { hanja: '庚', name: '경금', element: 'metal', yinyang: 'yang',
    title: '강직한 바위',
    desc: '당신은 바위와 쇠처럼 강직하고 결단력 있는 사람입니다. 정의감이 강하고 원칙을 중시하며, 한번 결정하면 밀고 나갑니다. 카리스마 있는 리더지만, 가끔은 냉정해 보일 수 있어요.',
    keywords: ['결단력', '정의감', '원칙'] },
  { hanja: '辛', name: '신금', element: 'metal', yinyang: 'yin',
    title: '빛나는 보석',
    desc: '당신은 보석처럼 세련되고 아름다운 감각을 가졌습니다. 완벽주의적 성향이 있고, 디테일에 강합니다. 예리한 심미안으로 본질을 꿰뚫지만, 스스로에게도 타인에게도 엄격한 편이에요.',
    keywords: ['심미안', '완벽성', '세련됨'] },
  { hanja: '壬', name: '임수', element: 'water', yinyang: 'yang',
    title: '넓은 바다',
    desc: '당신은 바다처럼 깊고 넓은 포용력을 가졌습니다. 지혜롭고 큰 그림을 볼 줄 알며, 변화에 유연하게 대처합니다. 다양한 가능성을 품고 있지만, 때로는 방향성이 흔들리기도 합니다.',
    keywords: ['지혜', '포용력', '큰그림'] },
  { hanja: '癸', name: '계수', element: 'water', yinyang: 'yin',
    title: '맑은 이슬',
    desc: '당신은 이슬처럼 순수하고 직관적인 감성을 가졌습니다. 깊이 있는 통찰력으로 보이지 않는 것을 느끼며, 영적인 감수성이 풍부합니다. 감정의 파도를 타면서도 본질을 놓치지 않아요.',
    keywords: ['직관력', '감성', '깊이'] }
];

// 지지 데이터
const BRANCHES = [
  { hanja: '子', name: '자', element: 'water', animal: '쥐', time: '23:00-01:00' },
  { hanja: '丑', name: '축', element: 'earth', animal: '소', time: '01:00-03:00' },
  { hanja: '寅', name: '인', element: 'wood', animal: '호랑이', time: '03:00-05:00' },
  { hanja: '卯', name: '묘', element: 'wood', animal: '토끼', time: '05:00-07:00' },
  { hanja: '辰', name: '진', element: 'earth', animal: '용', time: '07:00-09:00' },
  { hanja: '巳', name: '사', element: 'fire', animal: '뱀', time: '09:00-11:00' },
  { hanja: '午', name: '오', element: 'fire', animal: '말', time: '11:00-13:00' },
  { hanja: '未', name: '미', element: 'earth', animal: '양', time: '13:00-15:00' },
  { hanja: '申', name: '신', element: 'metal', animal: '원숭이', time: '15:00-17:00' },
  { hanja: '酉', name: '유', element: 'metal', animal: '닭', time: '17:00-19:00' },
  { hanja: '戌', name: '술', element: 'earth', animal: '개', time: '19:00-21:00' },
  { hanja: '亥', name: '해', element: 'water', animal: '돼지', time: '21:00-23:00' }
];

// 오행 정보
const ELEMENTS: {[key: string]: {name: string, color: string, bgColor: string}} = {
  wood:  { name: '木', color: '#22c55e', bgColor: 'bg-green-500' },
  fire:  { name: '火', color: '#ef4444', bgColor: 'bg-red-500' },
  earth: { name: '土', color: '#eab308', bgColor: 'bg-yellow-500' },
  metal: { name: '金', color: '#94a3b8', bgColor: 'bg-gray-400' },
  water: { name: '水', color: '#3b82f6', bgColor: 'bg-blue-500' }
};

// MBTI 타입별 특성
const MBTI_TYPES: {[key: string]: {title: string, element: string}} = {
  'INTJ': { title: '전략가', element: 'water' },
  'INTP': { title: '논리술사', element: 'water' },
  'ENTJ': { title: '통솔자', element: 'metal' },
  'ENTP': { title: '변론가', element: 'fire' },
  'INFJ': { title: '옹호자', element: 'water' },
  'INFP': { title: '중재자', element: 'wood' },
  'ENFJ': { title: '선도자', element: 'fire' },
  'ENFP': { title: '활동가', element: 'fire' },
  'ISTJ': { title: '현실주의자', element: 'earth' },
  'ISFJ': { title: '수호자', element: 'earth' },
  'ESTJ': { title: '경영자', element: 'metal' },
  'ESFJ': { title: '집정관', element: 'earth' },
  'ISTP': { title: '장인', element: 'metal' },
  'ISFP': { title: '모험가', element: 'wood' },
  'ESTP': { title: '사업가', element: 'metal' },
  'ESFP': { title: '연예인', element: 'fire' }
};

// 절기 기반 월지 계산
function getSolarTermBranch(year: number, month: number, day: number): number {
  const terms = [
    { m: 0, d: 6, b: 1 },   // 1월 소한 → 축월(1)
    { m: 1, d: 4, b: 2 },   // 2월 입춘 → 인월(2)
    { m: 2, d: 6, b: 3 },   // 3월 경칩 → 묘월(3)
    { m: 3, d: 5, b: 4 },   // 4월 청명 → 진월(4)
    { m: 4, d: 6, b: 5 },   // 5월 입하 → 사월(5)
    { m: 5, d: 6, b: 6 },   // 6월 망종 → 오월(6)
    { m: 6, d: 7, b: 7 },   // 7월 소서 → 미월(7)
    { m: 7, d: 8, b: 8 },   // 8월 입추 → 신월(8)
    { m: 8, d: 8, b: 9 },   // 9월 백로 → 유월(9)
    { m: 9, d: 8, b: 10 },  // 10월 한로 → 술월(10)
    { m: 10, d: 7, b: 11 }, // 11월 입동 → 해월(11)
    { m: 11, d: 7, b: 0 }   // 12월 대설 → 자월(0)
  ];
  const birth = new Date(year, month - 1, day);
  for (let i = terms.length - 1; i >= 0; i--) {
    if (birth >= new Date(year, terms[i].m, terms[i].d)) return terms[i].b;
  }
  return 0;
}

// 사주 계산 함수 (정밀 엔진)
function calculateSaju(year: number, month: number, day: number, hour: number) {
  // 연주: 입춘(2/4) 기준 연도 조정
  const adjYear = new Date(year, month - 1, day) < new Date(year, 1, 4) ? year - 1 : year;
  const yearStem = ((adjYear - 4) % 10 + 10) % 10;
  const yearBranch = ((adjYear - 4) % 12 + 12) % 12;
  
  // 월주: 절기 기반 월지 계산
  const monthBranch = getSolarTermBranch(year, month, day);
  const monthStem = (((yearStem % 5) * 2 + 2) + ((monthBranch - 2 + 12) % 12)) % 10;
  
  // 일주: 1900년 1월 1일 기준
  const base = Date.UTC(1900, 0, 1);
  const birth = Date.UTC(year, month - 1, day);
  const days = Math.floor((birth - base) / 86400000);
  const dayStem = ((days % 10) + 10) % 10;
  const dayBranch = ((days + 10) % 12 + 12) % 12;
  
  // 시주: 30분 기준 시진 계산
  const hourBranch = Math.floor((hour + 0.5) / 2) % 12;
  const hourStem = ((dayStem % 5) * 2 + hourBranch) % 10;
  
  return {
    year: { stem: yearStem, branch: yearBranch },
    month: { stem: monthStem, branch: monthBranch },
    day: { stem: dayStem, branch: dayBranch },
    hour: { stem: hourStem, branch: hourBranch }
  };
}

// 오행 분포 계산
function calculateElements(saju: any) {
  const elements: {[key: string]: number} = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
  
  [saju.year, saju.month, saju.day, saju.hour].forEach(pillar => {
    elements[STEMS[pillar.stem].element]++;
    elements[BRANCHES[pillar.branch].element]++;
  });
  
  return elements;
}

// 케미 점수 계산
function calculateChemistry(sajuElement: string, mbtiElement: string) {
  const relations: {[key: string]: {[key: string]: number}} = {
    wood:  { wood: 70, fire: 90, earth: 60, metal: 40, water: 85 },
    fire:  { wood: 85, fire: 70, earth: 90, metal: 50, water: 45 },
    earth: { wood: 55, fire: 85, earth: 70, metal: 90, water: 60 },
    metal: { wood: 45, fire: 55, earth: 85, metal: 70, water: 90 },
    water: { wood: 90, fire: 50, earth: 55, metal: 85, water: 70 }
  };
  
  const base = relations[sajuElement]?.[mbtiElement] || 65;
  const variance = Math.floor(Math.random() * 10) - 5;
  return Math.min(99, Math.max(50, base + variance));
}

export default function FreePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    birthHour: '',
    gender: '',
    mbti: ''
  });
  const [result, setResult] = useState<any>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!formData.birthYear) newErrors.birthYear = '년도를 선택해주세요';
    if (!formData.birthMonth) newErrors.birthMonth = '월을 선택해주세요';
    if (!formData.birthDay) newErrors.birthDay = '일을 선택해주세요';
    if (!formData.gender) newErrors.gender = '성별을 선택해주세요';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAnalyze = () => {
    if (!validate()) return;

    const year = parseInt(formData.birthYear);
    const month = parseInt(formData.birthMonth);
    const day = parseInt(formData.birthDay);
    const hour = formData.birthHour ? parseInt(formData.birthHour) : 12;
    
    const saju = calculateSaju(year, month, day, hour);
    const elements = calculateElements(saju);
    const dayStem = STEMS[saju.day.stem];
    
    const mbtiInfo = formData.mbti ? MBTI_TYPES[formData.mbti] : null;
    const chemistry = mbtiInfo ? calculateChemistry(dayStem.element, mbtiInfo.element) : null;

    setResult({
      saju,
      dayStem,
      elements,
      mbti: formData.mbti,
      mbtiInfo,
      chemistry
    });
    setStep(2);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  if (step === 2 && result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
        <div className="max-w-lg mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-medium mb-4">
              ✨ 무료 분석 결과
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {formData.name}님의 사주 프로필
            </h1>
            <p className="text-gray-400 text-sm">
              {formData.birthYear}.{formData.birthMonth}.{formData.birthDay}
              {result.mbti && ` · ${result.mbti}`}
            </p>
          </div>

          {/* 케미 점수 (MBTI 입력시) */}
          {result.chemistry && (
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-6 text-white">
              <div className="text-center">
                <div className="text-sm opacity-80 mb-2">MBTI × 사주 케미</div>
                <div className="text-5xl font-bold mb-2">{result.chemistry}<span className="text-2xl">점</span></div>
                <div className="text-lg font-medium">
                  {result.chemistry >= 80 ? '🔥 환상의 조합!' : 
                   result.chemistry >= 65 ? '✨ 좋은 시너지' : '💪 보완하며 성장'}
                </div>
              </div>
            </div>
          )}

          {/* 일간 카드 - 핵심 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6">
            <div className="text-xs text-yellow-400 tracking-wider mb-3">🌟 당신의 일간</div>
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold text-white"
                style={{ backgroundColor: ELEMENTS[result.dayStem.element].color }}
              >
                {result.dayStem.hanja}
              </div>
              <div>
                <div className="text-xl font-bold text-white">{result.dayStem.title}</div>
                <div className="text-sm text-gray-400">{result.dayStem.name} · {result.dayStem.yinyang === 'yang' ? '양' : '음'}의 기운</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              {result.dayStem.desc}
            </p>
            <div className="flex gap-2 mt-4">
              {result.dayStem.keywords.map((kw: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* 오행 분포 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6">
            <div className="text-xs text-yellow-400 tracking-wider mb-4">⚡ 오행 에너지 분포</div>
            <div className="space-y-3">
              {Object.entries(result.elements).map(([el, count]) => (
                <div key={el} className="flex items-center gap-3">
                  <span className="w-8 text-center font-bold" style={{ color: ELEMENTS[el].color }}>
                    {ELEMENTS[el].name}
                  </span>
                  <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${((count as number) / 8) * 100}%`,
                        backgroundColor: ELEMENTS[el].color 
                      }}
                    />
                  </div>
                  <span className="w-6 text-right text-gray-400 text-sm">{count as number}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 블러 처리된 프리미엄 미리보기 */}
          <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6 overflow-hidden">
            <div className="blur-sm opacity-50">
              <div className="text-xs text-yellow-400 tracking-wider mb-3">📖 2026년 운세 미리보기</div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-lg">💼</div>
                  <div className="text-xs text-gray-400">직장운</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-lg">💰</div>
                  <div className="text-xs text-gray-400">재물운</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-lg">💕</div>
                  <div className="text-xs text-gray-400">연애운</div>
                </div>
              </div>
            </div>
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex items-end justify-center pb-6">
              <div className="text-center">
                <div className="text-white font-medium mb-1">🔒 프리미엄 분석</div>
                <div className="text-gray-400 text-sm">전체 운세, 월별 가이드, 행운 정보</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Link 
              href="/products"
              className="block w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-center font-bold rounded-xl hover:opacity-90 transition-all"
            >
              전체 분석 리포트 보기 →
            </Link>
            <button
              onClick={() => { setStep(1); setResult(null); }}
              className="block w-full py-3 bg-gray-800 text-gray-300 text-center rounded-xl hover:bg-gray-700 transition-all"
            >
              다시 분석하기
            </button>
          </div>

          {/* 푸터 */}
          <div className="text-center mt-8 text-gray-500 text-xs">
            <p>© K-Saju by 인사이트 금융경영연구소</p>
            <p className="mt-1">정밀 만세력 기반 · AI 아님</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-medium mb-4">
            🎁 무료 체험
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">
            나의 <span className="text-yellow-400">사주 × MBTI</span> 알아보기
          </h1>
          <p className="text-gray-400">
            생년월일만으로 나의 타고난 기질을 확인하세요
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
          {/* 이름 */}
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">이름</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="이름을 입력하세요"
              className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* 생년월일 */}
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">생년월일</label>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={formData.birthYear}
                onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                className={`px-3 py-3 bg-gray-900 border rounded-xl text-white focus:outline-none focus:border-yellow-500 ${errors.birthYear ? 'border-red-500' : 'border-gray-700'}`}
              >
                <option value="">년</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <select
                value={formData.birthMonth}
                onChange={(e) => setFormData({ ...formData, birthMonth: e.target.value })}
                className={`px-3 py-3 bg-gray-900 border rounded-xl text-white focus:outline-none focus:border-yellow-500 ${errors.birthMonth ? 'border-red-500' : 'border-gray-700'}`}
              >
                <option value="">월</option>
                {months.map(m => <option key={m} value={m}>{m}월</option>)}
              </select>
              <select
                value={formData.birthDay}
                onChange={(e) => setFormData({ ...formData, birthDay: e.target.value })}
                className={`px-3 py-3 bg-gray-900 border rounded-xl text-white focus:outline-none focus:border-yellow-500 ${errors.birthDay ? 'border-red-500' : 'border-gray-700'}`}
              >
                <option value="">일</option>
                {days.map(d => <option key={d} value={d}>{d}일</option>)}
              </select>
            </div>
          </div>

          {/* 생시 (선택) */}
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">
              생시 <span className="text-gray-500">(선택)</span>
            </label>
            <select
              value={formData.birthHour}
              onChange={(e) => setFormData({ ...formData, birthHour: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-yellow-500"
            >
              <option value="">모름 / 선택 안함</option>
              {hours.map(h => <option key={h} value={h}>{h}시</option>)}
            </select>
          </div>

          {/* 성별 */}
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">성별</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: 'male' })}
                className={`py-3 rounded-xl font-medium transition-all ${
                  formData.gender === 'male'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900 border border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                👨 남성
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: 'female' })}
                className={`py-3 rounded-xl font-medium transition-all ${
                  formData.gender === 'female'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-900 border border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                👩 여성
              </button>
            </div>
            {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
          </div>

          {/* MBTI (선택) */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              MBTI <span className="text-yellow-400">(입력시 케미 분석)</span>
            </label>
            <select
              value={formData.mbti}
              onChange={(e) => setFormData({ ...formData, mbti: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-yellow-500"
            >
              <option value="">선택 안함</option>
              {Object.entries(MBTI_TYPES).map(([type, info]) => (
                <option key={type} value={type}>{type} - {info.title}</option>
              ))}
            </select>
          </div>

          {/* 분석 버튼 */}
          <button
            onClick={handleAnalyze}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-xl hover:opacity-90 transition-all text-lg"
          >
            무료 분석 시작 →
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>✓ 정밀 만세력 기반 계산</p>
          <p>✓ 회원가입 불필요</p>
        </div>
      </div>
    </div>
  );
}
