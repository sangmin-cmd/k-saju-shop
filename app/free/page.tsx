'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

// DB import
import { getCombination } from '../data/combinations';

// 천간 데이터
const STEMS = [
  { hanja: '甲', name: '갑목', element: 'wood', yinyang: 'yang', title: '성장하는 큰 나무', keywords: ['리더십', '추진력', '성장'] },
  { hanja: '乙', name: '을목', element: 'wood', yinyang: 'yin', title: '유연한 덩굴', keywords: ['유연함', '적응력', '섬세함'] },
  { hanja: '丙', name: '병화', element: 'fire', yinyang: 'yang', title: '빛나는 태양', keywords: ['열정', '카리스마', '낙관'] },
  { hanja: '丁', name: '정화', element: 'fire', yinyang: 'yin', title: '따뜻한 촛불', keywords: ['집중력', '배려심', '깊이'] },
  { hanja: '戊', name: '무토', element: 'earth', yinyang: 'yang', title: '듬직한 산', keywords: ['안정감', '신뢰', '포용력'] },
  { hanja: '己', name: '기토', element: 'earth', yinyang: 'yin', title: '비옥한 땅', keywords: ['중재력', '실용성', '양육'] },
  { hanja: '庚', name: '경금', element: 'metal', yinyang: 'yang', title: '강직한 바위', keywords: ['결단력', '정의감', '원칙'] },
  { hanja: '辛', name: '신금', element: 'metal', yinyang: 'yin', title: '빛나는 보석', keywords: ['심미안', '완벽성', '세련됨'] },
  { hanja: '壬', name: '임수', element: 'water', yinyang: 'yang', title: '넓은 바다', keywords: ['지혜', '포용력', '큰그림'] },
  { hanja: '癸', name: '계수', element: 'water', yinyang: 'yin', title: '맑은 이슬', keywords: ['직관력', '감성', '깊이'] }
];

// 지지 데이터
const BRANCHES = [
  { hanja: '子', name: '자', element: 'water', animal: '쥐' },
  { hanja: '丑', name: '축', element: 'earth', animal: '소' },
  { hanja: '寅', name: '인', element: 'wood', animal: '호랑이' },
  { hanja: '卯', name: '묘', element: 'wood', animal: '토끼' },
  { hanja: '辰', name: '진', element: 'earth', animal: '용' },
  { hanja: '巳', name: '사', element: 'fire', animal: '뱀' },
  { hanja: '午', name: '오', element: 'fire', animal: '말' },
  { hanja: '未', name: '미', element: 'earth', animal: '양' },
  { hanja: '申', name: '신', element: 'metal', animal: '원숭이' },
  { hanja: '酉', name: '유', element: 'metal', animal: '닭' },
  { hanja: '戌', name: '술', element: 'earth', animal: '개' },
  { hanja: '亥', name: '해', element: 'water', animal: '돼지' }
];

// 오행 정보
const ELEMENTS: {[key: string]: {name: string, nameKo: string, color: string, icon: string}} = {
  wood:  { name: '木', nameKo: '목', color: '#22c55e', icon: '🌳' },
  fire:  { name: '火', nameKo: '화', color: '#ef4444', icon: '🔥' },
  earth: { name: '土', nameKo: '토', color: '#eab308', icon: '⛰️' },
  metal: { name: '金', nameKo: '금', color: '#94a3b8', icon: '⚔️' },
  water: { name: '水', nameKo: '수', color: '#3b82f6', icon: '💧' }
};

// MBTI 4축 → 오행 매핑
const MBTI_ELEMENT_MAP: {[key: string]: {element: string, name: string, reason: string}} = {
  'E': { element: 'fire', name: '火', reason: '밖으로 발산, 활동적' },
  'I': { element: 'water', name: '水', reason: '안으로 수렴, 깊이' },
  'S': { element: 'earth', name: '土', reason: '현실, 구체적' },
  'N': { element: 'fire', name: '火', reason: '가능성, 영감' },
  'T': { element: 'metal', name: '金', reason: '논리, 분석' },
  'F': { element: 'water', name: '水', reason: '공감, 가치' },
  'J': { element: 'earth', name: '土', reason: '계획, 체계' },
  'P': { element: 'wood', name: '木', reason: '유연, 적응' }
};

// MBTI 인지기능 스택
const MBTI_COGNITIVE: {[key: string]: {stack: string[], names: string[]}} = {
  'ESTJ': { stack: ['Te', 'Si', 'Ne', 'Fi'], names: ['외향 사고', '내향 감각', '외향 직관', '내향 감정'] },
  'ISTJ': { stack: ['Si', 'Te', 'Fi', 'Ne'], names: ['내향 감각', '외향 사고', '내향 감정', '외향 직관'] },
  'ESFJ': { stack: ['Fe', 'Si', 'Ne', 'Ti'], names: ['외향 감정', '내향 감각', '외향 직관', '내향 사고'] },
  'ISFJ': { stack: ['Si', 'Fe', 'Ti', 'Ne'], names: ['내향 감각', '외향 감정', '내향 사고', '외향 직관'] },
  'ESTP': { stack: ['Se', 'Ti', 'Fe', 'Ni'], names: ['외향 감각', '내향 사고', '외향 감정', '내향 직관'] },
  'ISTP': { stack: ['Ti', 'Se', 'Ni', 'Fe'], names: ['내향 사고', '외향 감각', '내향 직관', '외향 감정'] },
  'ESFP': { stack: ['Se', 'Fi', 'Te', 'Ni'], names: ['외향 감각', '내향 감정', '외향 사고', '내향 직관'] },
  'ISFP': { stack: ['Fi', 'Se', 'Ni', 'Te'], names: ['내향 감정', '외향 감각', '내향 직관', '외향 사고'] },
  'ENTJ': { stack: ['Te', 'Ni', 'Se', 'Fi'], names: ['외향 사고', '내향 직관', '외향 감각', '내향 감정'] },
  'INTJ': { stack: ['Ni', 'Te', 'Fi', 'Se'], names: ['내향 직관', '외향 사고', '내향 감정', '외향 감각'] },
  'ENTP': { stack: ['Ne', 'Ti', 'Fe', 'Si'], names: ['외향 직관', '내향 사고', '외향 감정', '내향 감각'] },
  'INTP': { stack: ['Ti', 'Ne', 'Si', 'Fe'], names: ['내향 사고', '외향 직관', '내향 감각', '외향 감정'] },
  'ENFJ': { stack: ['Fe', 'Ni', 'Se', 'Ti'], names: ['외향 감정', '내향 직관', '외향 감각', '내향 사고'] },
  'INFJ': { stack: ['Ni', 'Fe', 'Ti', 'Se'], names: ['내향 직관', '외향 감정', '내향 사고', '외향 감각'] },
  'ENFP': { stack: ['Ne', 'Fi', 'Te', 'Si'], names: ['외향 직관', '내향 감정', '외향 사고', '내향 감각'] },
  'INFP': { stack: ['Fi', 'Ne', 'Si', 'Te'], names: ['내향 감정', '외향 직관', '내향 감각', '외향 사고'] }
};

// 인지기능 → 오행 매핑
const COGNITIVE_ELEMENT: {[key: string]: {element: string, name: string}} = {
  'Te': { element: 'metal', name: '金' },
  'Ti': { element: 'metal', name: '金' },
  'Fe': { element: 'water', name: '水' },
  'Fi': { element: 'water', name: '水' },
  'Se': { element: 'earth', name: '土' },
  'Si': { element: 'earth', name: '土' },
  'Ne': { element: 'fire', name: '火' },
  'Ni': { element: 'fire', name: '火' }
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

// 오행 관계 분석
function getElementRelation(el1: string, el2: string): {type: string, name: string, color: string, symbol: string} {
  if (el1 === el2) return { type: 'same', name: '동기(同氣)', color: 'text-orange-400', symbol: '⚡' };
  
  const produce: {[key: string]: string} = { fire: 'earth', earth: 'metal', metal: 'water', water: 'wood', wood: 'fire' };
  const control: {[key: string]: string} = { fire: 'metal', metal: 'wood', wood: 'earth', earth: 'water', water: 'fire' };
  
  if (produce[el2] === el1) return { type: 'supported', name: '상생', color: 'text-green-400', symbol: '✨' };
  if (produce[el1] === el2) return { type: 'produce', name: '상생', color: 'text-green-400', symbol: '✨' };
  if (control[el2] === el1) return { type: 'control', name: '상극', color: 'text-red-400', symbol: '🔥' };
  if (control[el1] === el2) return { type: 'controlled', name: '역극', color: 'text-amber-400', symbol: '⚠️' };
  
  return { type: 'neutral', name: '중립', color: 'text-gray-400', symbol: '○' };
}

// 절기 기반 월지 계산
function getSolarTermBranch(year: number, month: number, day: number): number {
  const terms = [
    { m: 0, d: 6, b: 1 }, { m: 1, d: 4, b: 2 }, { m: 2, d: 6, b: 3 },
    { m: 3, d: 5, b: 4 }, { m: 4, d: 6, b: 5 }, { m: 5, d: 6, b: 6 },
    { m: 6, d: 7, b: 7 }, { m: 7, d: 8, b: 8 }, { m: 8, d: 8, b: 9 },
    { m: 9, d: 8, b: 10 }, { m: 10, d: 7, b: 11 }, { m: 11, d: 7, b: 0 }
  ];
  const birth = new Date(year, month - 1, day);
  for (let i = terms.length - 1; i >= 0; i--) {
    if (birth >= new Date(year, terms[i].m, terms[i].d)) return terms[i].b;
  }
  return 0;
}

// 사주 계산 함수
function calculateSaju(year: number, month: number, day: number, hour: number) {
  const adjYear = new Date(year, month - 1, day) < new Date(year, 1, 4) ? year - 1 : year;
  const yearStem = ((adjYear - 4) % 10 + 10) % 10;
  const yearBranch = ((adjYear - 4) % 12 + 12) % 12;
  const monthBranch = getSolarTermBranch(year, month, day);
  const monthStem = (((yearStem % 5) * 2 + 2) + ((monthBranch - 2 + 12) % 12)) % 10;
  const base = Date.UTC(1900, 0, 1);
  const birth = Date.UTC(year, month - 1, day);
  const days = Math.floor((birth - base) / 86400000);
  const dayStem = ((days % 10) + 10) % 10;
  const dayBranch = ((days + 10) % 12 + 12) % 12;
  const hourBranch = Math.floor((hour + 0.5) / 2) % 12;
  const hourStem = ((dayStem % 5) * 2 + hourBranch) % 10;
  
  return {
    year: { stem: yearStem, branch: yearBranch },
    month: { stem: monthStem, branch: monthBranch },
    day: { stem: dayStem, branch: dayBranch },
    hour: { stem: hourStem, branch: hourBranch }
  };
}

// 점수별 등급
function getScoreGrade(score: number) {
  if (score >= 85) return { label: '최상위 시너지', percent: '상위 5%', color: 'text-purple-400' };
  if (score >= 75) return { label: '뛰어난 조화', percent: '상위 20%', color: 'text-green-400' };
  if (score >= 65) return { label: '좋은 케미', percent: '상위 40%', color: 'text-blue-400' };
  if (score >= 55) return { label: '성장 잠재력', percent: '상위 60%', color: 'text-amber-400' };
  return { label: '독특한 조합', percent: '희귀 조합', color: 'text-orange-400' };
}

// 시진 데이터
const SIJI = [
  { value: '0', label: '자시 (子時)', time: '23:30~01:30' },
  { value: '1', label: '축시 (丑時)', time: '01:30~03:30' },
  { value: '2', label: '인시 (寅時)', time: '03:30~05:30' },
  { value: '3', label: '묘시 (卯時)', time: '05:30~07:30' },
  { value: '4', label: '진시 (辰時)', time: '07:30~09:30' },
  { value: '5', label: '사시 (巳時)', time: '09:30~11:30' },
  { value: '6', label: '오시 (午時)', time: '11:30~13:30' },
  { value: '7', label: '미시 (未時)', time: '13:30~15:30' },
  { value: '8', label: '신시 (申時)', time: '15:30~17:30' },
  { value: '9', label: '유시 (酉時)', time: '17:30~19:30' },
  { value: '10', label: '술시 (戌時)', time: '19:30~21:30' },
  { value: '11', label: '해시 (亥時)', time: '21:30~23:30' },
];

// 블러 섹션
const BlurredSection = ({ title, icon, height = 'h-24' }: { title: string, icon?: string, height?: string }) => (
  <div className="relative bg-gray-800/30 rounded-xl overflow-hidden">
    <div className={`blur-sm pointer-events-none select-none opacity-40 ${height} bg-gradient-to-b from-gray-700/50 to-transparent`} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl mb-1">{icon || '🔒'}</div>
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-gray-500 text-xs">프리미엄</p>
      </div>
    </div>
  </div>
);

export default function FreePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', birthYear: '', birthMonth: '', birthDay: '', birthHour: '',
    gender: '', mbti: '', calendarType: 'solar', isLeapMonth: false
  });
  const [result, setResult] = useState<any>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const years = Array.from({ length: 80 }, (_, i) => 2010 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleAnalyze = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!formData.birthYear) newErrors.birthYear = '출생년도를 선택해주세요';
    if (!formData.birthMonth) newErrors.birthMonth = '출생월을 선택해주세요';
    if (!formData.birthDay) newErrors.birthDay = '출생일을 선택해주세요';
    if (!formData.gender) newErrors.gender = '성별을 선택해주세요';
    if (!formData.mbti) newErrors.mbti = 'MBTI를 선택해주세요';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    const year = parseInt(formData.birthYear);
    const month = parseInt(formData.birthMonth);
    const day = parseInt(formData.birthDay);
    const hour = formData.birthHour ? parseInt(formData.birthHour) * 2 + 1 : 12;
    
    // 디버그
    console.log('=== 입력값 확인 ===');
    console.log('formData.birthDay:', formData.birthDay);
    console.log('parsed day:', day);
    console.log('year/month/day:', year, month, day);
    
    const saju = calculateSaju(year, month, day, hour);
    console.log('계산된 일간 index:', saju.day.stem);
    console.log('일간:', STEMS[saju.day.stem].hanja);
    const dayMasterHanja = STEMS[saju.day.stem].hanja;
    const combination = getCombination(dayMasterHanja, formData.mbti);

    setResult({
      name: formData.name, saju, mbti: formData.mbti,
      mbtiInfo: MBTI_TYPES[formData.mbti],
      combination
    });
    setStep(2);
  };

  // ==================== 결과 화면 ====================
  if (step === 2 && result) {
    const dayStem = STEMS[result.saju.day.stem];
    const elementInfo = ELEMENTS[dayStem.element];
    const combination = result.combination;
    const scoreGrade = combination ? getScoreGrade(combination.harmony.score) : null;
    const cognitive = MBTI_COGNITIVE[result.mbti];
    
    // MBTI 4축 분석
    const mbtiChars = result.mbti.split('');

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        
        {/* ===== 섹션 1: 표지 + 핵심 가치 메시지 ===== */}
        <div className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 핵심 가치 메시지 */}
            <div className="mb-6">
              <p className="text-yellow-400 text-sm font-medium mb-2">K-Saju 케미 분석</p>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                "나를 이해하면, 관계가 보인다"
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                MBTI × 사주의 융합으로<br/>
                <span className="text-gray-300">나 자신</span>부터 
                <span className="text-pink-400"> 연애</span>, 
                <span className="text-blue-400"> 인간관계</span>, 
                <span className="text-green-400"> 커리어</span>까지<br/>
                모든 스펙트럼을 아우르는 깊이 있는 분석
              </p>
            </div>
            
            {/* 조합 + 점수 */}
            {combination && (
              <>
                <div className="flex items-center justify-center gap-3 my-6">
                  <span className="text-2xl font-bold text-indigo-400">{result.mbti}</span>
                  <span className="text-2xl text-gray-500">×</span>
                  <span className="text-2xl font-bold" style={{ color: elementInfo.color }}>
                    {dayStem.hanja}{elementInfo.name}
                  </span>
                </div>
                
                <div className="inline-block bg-gray-800/50 border border-yellow-500/30 rounded-2xl px-8 py-5 mb-4">
                  <div className="text-5xl font-extrabold text-white mb-1">
                    {combination.harmony.score}<span className="text-2xl text-gray-400">점</span>
                  </div>
                  <p className={`${scoreGrade?.color} font-medium`}>
                    160가지 조합 중 {scoreGrade?.percent}
                  </p>
                </div>
                
                <p className="text-xl font-bold text-yellow-400 mt-4">
                  "{combination.harmony.summary}"
                </p>
              </>
            )}
            
            <p className="text-gray-500 text-sm mt-4">분석 대상: {result.name}님</p>
          </div>
        </div>

        {/* ===== 섹션 2: MBTI × 오행 연결 이론 ===== */}
        <div className="py-10 px-4 bg-gradient-to-b from-indigo-900/20 to-transparent">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2 text-center">
              🧭 MBTI × 오행 연결 이론
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">동서양 심리학의 만남 - K-Saju 독자 분석</p>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-5">
              <p className="text-gray-300 text-sm leading-relaxed">
                {result.name}님, MBTI의 4가지 선호 축은 각각 
                <strong className="text-yellow-400"> 특정 오행 에너지</strong>와 연결됩니다. 
                이 연결고리를 통해 <strong className="text-yellow-400">"왜 나는 이런 성격인데 저런 행동을 할까?"</strong>의 답을 찾을 수 있어요.
              </p>
            </div>

            {/* MBTI 오행 구성 */}
            <div className="bg-gray-800/70 border border-indigo-500/30 rounded-xl p-4 mb-5">
              <h3 className="text-sm font-bold text-indigo-400 mb-3">【{result.mbti}의 오행 구성】</h3>
              <div className="flex items-center justify-center gap-1 flex-wrap mb-3">
                {mbtiChars.map((char: string, i: number) => {
                  const el = MBTI_ELEMENT_MAP[char];
                  return (
                    <div key={i} className="flex items-center">
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-white font-bold">{char}</span>
                      <span className="text-lg mx-1" style={{ color: ELEMENTS[el.element].color }}>{el.name}</span>
                      {i < 3 && <span className="text-gray-600 mx-1">+</span>}
                    </div>
                  );
                })}
              </div>
              
              {/* vs 일간 */}
              <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-700">
                <span className="text-gray-400 text-sm">이것이</span>
                <span className="px-3 py-1 rounded-lg font-bold text-lg" style={{ backgroundColor: `${elementInfo.color}20`, color: elementInfo.color }}>
                  {dayStem.hanja}{elementInfo.name}
                </span>
                <span className="text-gray-400 text-sm">일간과 만나면?</span>
              </div>
            </div>

            {/* 4축 변환표 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
              <h3 className="text-sm font-bold text-white mb-3">【MBTI 축 → 오행 변환】</h3>
              <div className="grid grid-cols-2 gap-2">
                {mbtiChars.map((char: string, i: number) => {
                  const el = MBTI_ELEMENT_MAP[char];
                  const relation = getElementRelation(el.element, dayStem.element);
                  const axisNames = ['에너지', '인식', '판단', '생활'];
                  return (
                    <div key={i} className="flex items-center justify-between bg-gray-700/30 rounded-lg p-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{axisNames[i]}</span>
                        <span className="text-white font-bold">{char}</span>
                        <span style={{ color: ELEMENTS[el.element].color }}>{el.name}</span>
                      </div>
                      <span className={`text-xs ${relation.color}`}>{relation.symbol}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ===== 섹션 3: 인지기능 스택 × 사주 ===== */}
        <div className="py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2 text-center">
              🧠 인지기능 스택 × 사주
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">MBTI 4글자 뒤에 숨겨진 더 깊은 분석</p>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-5">
              <p className="text-gray-300 text-sm leading-relaxed">
                {result.name}님, MBTI는 사실 4글자보다 더 깊어요. 그 뒤에 <strong className="text-yellow-400">8가지 인지기능</strong>이 숨어있거든요.
                이 기능들과 사주를 연결하면 <strong className="text-yellow-400">훨씬 정밀한 분석</strong>이 가능해요!
              </p>
            </div>

            {/* 인지기능 스택 테이블 */}
            <div className="bg-gray-800/70 border border-purple-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-bold text-purple-400 mb-3">【{result.mbti} 인지기능 스택】</h3>
              <div className="space-y-2">
                {cognitive.stack.map((func: string, i: number) => {
                  const funcEl = COGNITIVE_ELEMENT[func];
                  const relation = getElementRelation(funcEl.element, dayStem.element);
                  const ranks = ['주기능 (가장 강함)', '부기능 (보조)', '3차기능 (발달중)', '열등기능 (약점)'];
                  const bgColors = ['bg-yellow-500/10', 'bg-green-500/10', 'bg-blue-500/10', 'bg-red-500/10'];
                  
                  return (
                    <div key={i} className={`flex items-center justify-between ${bgColors[i]} rounded-lg p-3`}>
                      <div>
                        <span className="text-xs text-gray-400">{ranks[i]}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-white font-bold">{func}</span>
                          <span className="text-gray-400 text-xs">({cognitive.names[i]})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span style={{ color: ELEMENTS[funcEl.element].color }} className="font-bold">{funcEl.name}</span>
                        <p className={`text-xs ${relation.color}`}>
                          {relation.symbol} {dayStem.hanja}{elementInfo.name}와 {relation.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 주기능 상세 분석 (공개) */}
            {(() => {
              const mainFunc = cognitive.stack[0];
              const mainEl = COGNITIVE_ELEMENT[mainFunc];
              const mainRelation = getElementRelation(mainEl.element, dayStem.element);
              const isConflict = mainRelation.type === 'control' || mainRelation.type === 'controlled';
              
              return (
                <div className={`${isConflict ? 'bg-amber-500/10 border-amber-500/30' : 'bg-green-500/10 border-green-500/30'} border rounded-xl p-4 mb-4`}>
                  <h3 className={`text-sm font-bold ${isConflict ? 'text-amber-400' : 'text-green-400'} mb-2`}>
                    【주기능 {mainFunc} × {dayStem.hanja}{elementInfo.name} 분석】
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {result.name}님의 <strong>가장 강한 기능({mainFunc})</strong>이 {dayStem.hanja}{elementInfo.name}와 
                    <strong className={mainRelation.color}> {mainRelation.name}</strong> 관계예요.
                    {isConflict ? (
                      <> 이 긴장감이 오히려 <strong className="text-yellow-400">균형 잡힌 판단력</strong>을 만들어줘요!</>
                    ) : (
                      <> 이 조화가 <strong className="text-yellow-400">강력한 시너지</strong>를 만들어줘요!</>
                    )}
                  </p>
                  
                  {isConflict && (
                    <div className="bg-gray-800/50 rounded-lg p-3 mt-3">
                      <p className="text-amber-400 text-xs font-medium mb-2">🎭 실생활에서 이렇게 나타나요</p>
                      <p className="text-gray-400 text-xs">
                        <strong>상황:</strong> 중요한 결정을 내려야 할 때<br/>
                        <strong>{mainFunc}:</strong> "데이터를 분석하고 합리적으로 결정해야 해"<br/>
                        <strong>{dayStem.hanja}{elementInfo.name}:</strong> "이거 좋은 느낌이야! 해보자!"<br/>
                        <span className="text-amber-300">→ 이 긴장을 이해하면 더 나은 결정을 내릴 수 있어요</span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* 나머지 기능 블러 */}
            <div className="grid grid-cols-3 gap-2">
              <BlurredSection title="부기능 분석" icon="📊" height="h-20" />
              <BlurredSection title="3차기능 분석" icon="🌱" height="h-20" />
              <BlurredSection title="열등기능 분석" icon="🔑" height="h-20" />
            </div>
          </div>
        </div>

        {/* ===== 섹션 4: 일반 MBTI vs 나 비교 ===== */}
        <div className="py-10 px-4 bg-gray-800/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2 text-center">
              ⚡ 일반 {result.mbti} vs {result.name}님
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">{dayStem.hanja}{elementInfo.name}가 만드는 차이</p>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-4">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-gray-500 font-medium">영역</div>
                <div className="text-gray-500 font-medium text-center">일반 {result.mbti}</div>
                <div className="text-yellow-400 font-medium text-center">{result.name}님</div>
                
                <div className="text-gray-400">첫인상</div>
                <div className="text-gray-500 text-center">차갑고 딱딱</div>
                <div className="text-white text-center font-medium">따뜻한 카리스마</div>
                
                <div className="text-gray-400">리더십</div>
                <div className="text-gray-500 text-center">규칙/통제</div>
                <div className="text-white text-center font-medium">비전 + 동기부여</div>
                
                <div className="text-gray-400">소통</div>
                <div className="text-gray-500 text-center">지시적</div>
                <div className="text-white text-center font-medium">설득력 있음</div>
              </div>
            </div>
            
            <BlurredSection title="상세 비교 분석 5개 항목" icon="📋" height="h-28" />
          </div>
        </div>

        {/* ===== 섹션 5: 시너지 극대화 전략 ===== */}
        {combination && (
          <div className="py-10 px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-2 text-center">
                🚀 시너지 극대화 전략
              </h2>
              <p className="text-gray-400 text-center text-sm mb-6">{result.mbti} × {dayStem.hanja}{elementInfo.name}의 장점을 200% 활용하는 법</p>
              
              {/* 시너지 #1 상세 */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
                <h3 className="text-sm font-bold text-green-400 mb-2">
                  【시너지 #1: {combination.synergies[0]?.title}】
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {combination.synergies[0]?.description}
                </p>
                
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-yellow-400 text-xs font-medium mb-2">💡 활용 전략</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    새로운 아이디어가 떠오르면 <strong className="text-white">24시간 안에 1페이지 실행 계획</strong>을 작성하세요.
                    {dayStem.hanja}{elementInfo.name}의 에너지가 식기 전에 {result.mbti}의 체계로 잡아두는 거예요.
                  </p>
                </div>
              </div>
              
              {/* 나머지 시너지 블러 */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <BlurredSection title="시너지 #2: 카리스마 리더십" icon="👑" height="h-24" />
                <BlurredSection title="시너지 #3: 위기 대응력" icon="⚡" height="h-24" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <BlurredSection title="시너지 #4: 지속 가능한 열정" icon="🔥" height="h-24" />
                <BlurredSection title="시너지 #5: 창의적 문제해결" icon="💡" height="h-24" />
              </div>
            </div>
          </div>
        )}

        {/* ===== 섹션 6: 갈등 해결 가이드 ===== */}
        {combination && (
          <div className="py-10 px-4 bg-gray-800/20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-2 text-center">
                ⚡ 내적 갈등 & 해결법
              </h2>
              <p className="text-gray-400 text-center text-sm mb-6">{combination.harmony.score}점의 좋은 케미에도 존재하는 긴장 관리법</p>
              
              {/* 갈등 상황 공개 */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
                <h3 className="text-sm font-bold text-amber-400 mb-2">
                  【핵심 갈등: {combination.conflicts[0]?.title}】
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {combination.conflicts[0]?.description}
                </p>
              </div>
              
              {/* 해결책 블러 */}
              <BlurredSection title="해결 전략 & 실천법" icon="🛠️" height="h-32" />
            </div>
          </div>
        )}

        {/* ===== 섹션 7: 관계 & 연애 미리보기 ===== */}
        {combination && (
          <div className="py-10 px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-2 text-center">
                💕 연애 & 👥 인간관계
              </h2>
              <p className="text-gray-400 text-center text-sm mb-6">나를 이해하면, 관계가 보인다</p>
              
              {/* 연애 스타일 미리보기 */}
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 mb-4">
                <h3 className="text-sm font-bold text-pink-400 mb-2">【연애 스타일 미리보기】</h3>
                <p className="text-gray-300 text-sm">
                  <strong>스타일:</strong> {combination.loveCombo.style.substring(0, 30)}...
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  베스트 매치, 연애 주의점, 관계 발전 전략은 프리미엄에서 확인
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <BlurredSection title="베스트 매치 유형" icon="💘" height="h-24" />
                <BlurredSection title="관계 발전 전략" icon="🌱" height="h-24" />
              </div>
            </div>
          </div>
        )}

        {/* ===== 섹션 8: 월별 활용법 ===== */}
        <div className="py-10 px-4 bg-gray-800/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2 text-center">
              📅 월별 에너지 활용법
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">
              오행의 순환에 따른 {result.mbti} × {dayStem.hanja}{elementInfo.name} 최적 전략
            </p>
            
            {/* 1-3월 공개 */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-bold text-green-400 mb-3">【1~3월: 봄의 기운 (木 상승기)】</h3>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-green-300 font-medium">🌱 1월 (寅月)</p>
                  <p className="text-gray-400">木 기운 상승 시작. {dayStem.hanja}{elementInfo.name}에 에너지 공급!</p>
                  <p className="text-gray-500 mt-1"><strong>추천:</strong> 새해 계획 수립, 새 프로젝트 시작</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-green-300 font-medium">🌿 2월 (卯月)</p>
                  <p className="text-gray-400">木 기운 최고조. 확장과 성장의 시기!</p>
                  <p className="text-gray-500 mt-1"><strong>추천:</strong> 적극적 대외 활동, 네트워킹</p>
                </div>
              </div>
            </div>
            
            {/* 나머지 월 블러 */}
            <div className="grid grid-cols-3 gap-2">
              <BlurredSection title="4~6월 (火)" icon="☀️" height="h-20" />
              <BlurredSection title="7~9월 (金)" icon="🍂" height="h-20" />
              <BlurredSection title="10~12월 (水)" icon="❄️" height="h-20" />
            </div>
          </div>
        </div>

        {/* ===== 섹션 9: 커리어 가이드 ===== */}
        {combination && (
          <div className="py-10 px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-2 text-center">
                💼 커리어 가이드
              </h2>
              <p className="text-gray-400 text-center text-sm mb-6">{result.mbti} × {dayStem.hanja}{elementInfo.name}에 맞는 진로</p>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
                <p className="text-gray-300 text-sm">
                  <strong className="text-blue-400">이상적 경로:</strong> {combination.careerCombo.idealPath.substring(0, 40)}...
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <BlurredSection title="직장 전략" icon="🏢" height="h-24" />
                <BlurredSection title="사업 적합도" icon="📈" height="h-24" />
              </div>
            </div>
          </div>
        )}

        {/* ===== CTA ===== */}
        <div className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* 무료 결과 저장 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-8">
              <h3 className="text-white font-medium mb-3">📄 무료 분석 결과 저장</h3>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => {
                    const text = `
【 ${result.name}님의 K-Saju 분석 결과 】

━━━━━━━━━━━━━━━━━━━━
🎯 조합: ${result.mbti} × ${dayStem.hanja}${elementInfo.name}
📊 케미 점수: ${combination?.harmony.score || '-'}점
💫 한줄평: ${combination?.harmony.summary || '-'}
━━━━━━━━━━━━━━━━━━━━

분석일시: ${new Date().toLocaleString('ko-KR')}
© K-Saju by 인사이트 금융경영연구소
                    `.trim();
                    navigator.clipboard.writeText(text);
                    alert('결과가 클립보드에 복사되었습니다!');
                  }}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm"
                >
                  📋 복사하기
                </button>
                <button
                  onClick={() => {
                    const text = `K-Saju 분석 결과\n\n조합: ${result.mbti} × ${dayStem.hanja}${elementInfo.name}\n케미 점수: ${combination?.harmony.score || '-'}점\n\n더 자세한 분석: https://sajutype.kr`;
                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                    window.open(url, '_blank');
                  }}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm"
                >
                  🐦 공유하기
                </button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">
              🔓 50페이지 프리미엄 리포트
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              나 자신부터 연애, 인간관계, 커리어까지<br/>
              모든 스펙트럼의 완전한 분석을 받아보세요
            </p>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-6">
              <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
                <span>✓ 인지기능 스택 완전 분석</span>
                <span>✓ 시너지 5가지 전략</span>
                <span>✓ 갈등 해결 가이드</span>
                <span>✓ 연애/관계 상세</span>
                <span>✓ 12개월 활용법</span>
                <span>✓ 실전 가이드</span>
              </div>
            </div>
            
            <Link 
              href="/products"
              className="inline-block w-full max-w-md py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg"
            >
              프리미엄 리포트 보기 →
            </Link>
            
            <button
              onClick={() => { setStep(1); setResult(null); setErrors({}); }}
              className="block w-full max-w-md mx-auto mt-4 py-3 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700"
            >
              다시 분석하기
            </button>
            
            <p className="mt-8 text-gray-500 text-xs">© K-Saju by 인사이트 금융경영연구소</p>
          </div>
        </div>
      </div>
    );
  }

  // ==================== 입력 폼 ====================
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs font-medium mb-4">🎁 무료 체험</div>
          <h1 className="text-2xl font-bold text-white mb-2">
            "나를 이해하면, 관계가 보인다"
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            MBTI × 사주의 융합으로<br/>
            나 자신부터 연애, 인간관계, 커리어까지<br/>
            모든 스펙트럼을 아우르는 분석
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">이름</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="이름을 입력하세요"
              className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-700'}`} />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">생년월일</label>
            <div className="flex gap-4 mb-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="calendarType" value="solar" checked={formData.calendarType === 'solar'}
                  onChange={(e) => setFormData({ ...formData, calendarType: e.target.value, isLeapMonth: false })} className="w-4 h-4" />
                <span className="text-gray-300 text-sm">양력</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="calendarType" value="lunar" checked={formData.calendarType === 'lunar'}
                  onChange={(e) => setFormData({ ...formData, calendarType: e.target.value })} className="w-4 h-4" />
                <span className="text-gray-300 text-sm">음력</span>
              </label>
              {formData.calendarType === 'lunar' && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.isLeapMonth}
                    onChange={(e) => setFormData({ ...formData, isLeapMonth: e.target.checked })} className="w-4 h-4 rounded" />
                  <span className="text-yellow-400 text-sm">윤달</span>
                </label>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <select value={formData.birthYear} onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                className={`px-3 py-3 bg-gray-900 border rounded-xl text-white text-sm focus:outline-none focus:border-yellow-500 ${errors.birthYear ? 'border-red-500' : 'border-gray-700'}`}>
                <option value="" disabled>년</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <select value={formData.birthMonth} onChange={(e) => setFormData({ ...formData, birthMonth: e.target.value })}
                className={`px-3 py-3 bg-gray-900 border rounded-xl text-white text-sm focus:outline-none focus:border-yellow-500 ${errors.birthMonth ? 'border-red-500' : 'border-gray-700'}`}>
                <option value="" disabled>월</option>
                {months.map(m => <option key={m} value={m}>{m}월</option>)}
              </select>
              <select value={formData.birthDay} onChange={(e) => setFormData({ ...formData, birthDay: e.target.value })}
                className={`px-3 py-3 bg-gray-900 border rounded-xl text-white text-sm focus:outline-none focus:border-yellow-500 ${errors.birthDay ? 'border-red-500' : 'border-gray-700'}`}>
                <option value="" disabled>일</option>
                {days.map(d => <option key={d} value={d}>{d}일</option>)}
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">생시 <span className="text-gray-500">(선택)</span></label>
            <select value={formData.birthHour} onChange={(e) => setFormData({ ...formData, birthHour: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-500">
              <option value="">모름 / 선택 안함</option>
              {SIJI.map(s => <option key={s.value} value={s.value}>{s.label} ({s.time})</option>)}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">성별</label>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setFormData({ ...formData, gender: 'male' })}
                className={`py-3 rounded-xl font-medium transition-all text-sm ${formData.gender === 'male' ? 'bg-blue-600 text-white' : 'bg-gray-900 border border-gray-700 text-gray-400'}`}>
                👨 남성
              </button>
              <button type="button" onClick={() => setFormData({ ...formData, gender: 'female' })}
                className={`py-3 rounded-xl font-medium transition-all text-sm ${formData.gender === 'female' ? 'bg-pink-600 text-white' : 'bg-gray-900 border border-gray-700 text-gray-400'}`}>
                👩 여성
              </button>
            </div>
            {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">MBTI <span className="text-yellow-400">*필수</span></label>
            <select value={formData.mbti} onChange={(e) => setFormData({ ...formData, mbti: e.target.value })}
              className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white text-sm focus:outline-none focus:border-yellow-500 ${errors.mbti ? 'border-red-500' : 'border-gray-700'}`}>
              <option value="">MBTI를 선택하세요</option>
              {Object.entries(MBTI_TYPES).map(([type, info]) => (
                <option key={type} value={type}>{type} - {info.title}</option>
              ))}
            </select>
            {errors.mbti && <p className="text-red-400 text-xs mt-1">{errors.mbti}</p>}
          </div>

          <button onClick={handleAnalyze}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-xl hover:opacity-90 transition-all">
            무료 분석 시작 →
          </button>
        </div>

        <div className="mt-6 text-center text-gray-500 text-xs">
          <p>✓ K-Saju 독자 분석 이론</p>
          <p>✓ 동서양 심리학 융합</p>
        </div>
      </div>
    </div>
  );
}
