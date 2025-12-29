'use client';

import Link from 'next/link';

// 샘플 데이터: ESTJ × 丙火 (78점)
const SAMPLE = {
  name: '홍길동',
  mbti: 'ESTJ',
  mbtiTitle: '경영자',
  dayStem: { hanja: '丙', name: '병화', element: 'fire', title: '빛나는 태양' },
  score: 78,
  summary: '논리로 불을 다스리는 현실의 건축가',
  scoreGrade: { label: '뛰어난 조화', percent: '상위 20%', color: 'text-green-400' }
};

// 오행 정보
const ELEMENTS: {[key: string]: {name: string, color: string, icon: string}} = {
  wood:  { name: '木', color: '#22c55e', icon: '🌳' },
  fire:  { name: '火', color: '#ef4444', icon: '🔥' },
  earth: { name: '土', color: '#eab308', icon: '⛰️' },
  metal: { name: '金', color: '#94a3b8', icon: '⚔️' },
  water: { name: '水', color: '#3b82f6', icon: '💧' }
};

// MBTI 4축 → 오행
const MBTI_ELEMENT_MAP: {[key: string]: {element: string, name: string}} = {
  'E': { element: 'fire', name: '火' },
  'I': { element: 'water', name: '水' },
  'S': { element: 'earth', name: '土' },
  'N': { element: 'fire', name: '火' },
  'T': { element: 'metal', name: '金' },
  'F': { element: 'water', name: '水' },
  'J': { element: 'earth', name: '土' },
  'P': { element: 'wood', name: '木' }
};

// 인지기능 스택
const COGNITIVE_STACK = {
  stack: ['Te', 'Si', 'Ne', 'Fi'],
  names: ['외향 사고', '내향 감각', '외향 직관', '내향 감정'],
  elements: ['metal', 'earth', 'fire', 'water'],
  elementNames: ['金', '土', '火', '水'],
  relations: ['상극 🔥', '상생 ✨', '동기 ⚡', '역극 ⚠️']
};

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

export default function SamplePage() {
  const elementInfo = ELEMENTS[SAMPLE.dayStem.element];
  const mbtiChars = SAMPLE.mbti.split('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      
      {/* ===== 상단 배너: 샘플임을 알림 ===== */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-4 text-center">
        <p className="text-white text-sm">
          📋 <strong>샘플 분석 결과</strong>입니다. 나만의 분석을 받으려면 
          <Link href="/free" className="underline ml-1 font-bold">무료 체험하기 →</Link>
        </p>
      </div>

      {/* ===== 섹션 1: 표지 ===== */}
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-yellow-400 text-sm font-medium mb-2">K-Saju 케미 분석 샘플</p>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              "나를 이해하면, 관계가 보인다"
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              MBTI × 사주의 융합으로<br/>
              <span className="text-gray-300">나 자신</span>부터 
              <span className="text-pink-400"> 연애</span>, 
              <span className="text-blue-400"> 인간관계</span>, 
              <span className="text-green-400"> 커리어</span>까지
            </p>
          </div>
          
          {/* 조합 + 점수 */}
          <div className="flex items-center justify-center gap-3 my-6">
            <span className="text-2xl font-bold text-indigo-400">{SAMPLE.mbti}</span>
            <span className="text-2xl text-gray-500">×</span>
            <span className="text-2xl font-bold" style={{ color: elementInfo.color }}>
              {SAMPLE.dayStem.hanja}{elementInfo.name}
            </span>
          </div>
          
          <div className="inline-block bg-gray-800/50 border border-yellow-500/30 rounded-2xl px-8 py-5 mb-4">
            <div className="text-5xl font-extrabold text-white mb-1">
              {SAMPLE.score}<span className="text-2xl text-gray-400">점</span>
            </div>
            <p className={`${SAMPLE.scoreGrade.color} font-medium`}>
              160가지 조합 중 {SAMPLE.scoreGrade.percent}
            </p>
          </div>
          
          <p className="text-xl font-bold text-yellow-400 mt-4">
            "{SAMPLE.summary}"
          </p>
          
          <p className="text-gray-500 text-sm mt-4">예시: {SAMPLE.name}님 (ESTJ × 丙火)</p>
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
              MBTI의 4가지 선호 축은 각각 
              <strong className="text-yellow-400"> 특정 오행 에너지</strong>와 연결됩니다. 
              이 연결고리를 통해 <strong className="text-yellow-400">"왜 나는 이런 성격인데 저런 행동을 할까?"</strong>의 답을 찾을 수 있어요.
            </p>
          </div>

          {/* MBTI 오행 구성 */}
          <div className="bg-gray-800/70 border border-indigo-500/30 rounded-xl p-4 mb-5">
            <h3 className="text-sm font-bold text-indigo-400 mb-3">【{SAMPLE.mbti}의 오행 구성】</h3>
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
            
            <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-700">
              <span className="text-gray-400 text-sm">이것이</span>
              <span className="px-3 py-1 rounded-lg font-bold text-lg" style={{ backgroundColor: `${elementInfo.color}20`, color: elementInfo.color }}>
                {SAMPLE.dayStem.hanja}{elementInfo.name}
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
                const axisNames = ['에너지', '인식', '판단', '생활'];
                const relations = ['동기 ⚡', '상생 ✨', '상극 🔥', '상생 ✨'];
                const relationColors = ['text-orange-400', 'text-green-400', 'text-red-400', 'text-green-400'];
                return (
                  <div key={i} className="flex items-center justify-between bg-gray-700/30 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{axisNames[i]}</span>
                      <span className="text-white font-bold">{char}</span>
                      <span style={{ color: ELEMENTS[el.element].color }}>{el.name}</span>
                    </div>
                    <span className={`text-xs ${relationColors[i]}`}>{relations[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ===== 섹션 3: 인지기능 스택 ===== */}
      <div className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            🧠 인지기능 스택 × 사주
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">MBTI 4글자 뒤에 숨겨진 더 깊은 분석</p>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              MBTI는 사실 4글자보다 더 깊어요. 그 뒤에 <strong className="text-yellow-400">8가지 인지기능</strong>이 숨어있거든요.
              이 기능들과 사주를 연결하면 <strong className="text-yellow-400">훨씬 정밀한 분석</strong>이 가능해요!
            </p>
          </div>

          {/* 인지기능 스택 테이블 */}
          <div className="bg-gray-800/70 border border-purple-500/30 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-purple-400 mb-3">【ESTJ 인지기능 스택】</h3>
            <div className="space-y-2">
              {COGNITIVE_STACK.stack.map((func: string, i: number) => {
                const ranks = ['주기능 (가장 강함)', '부기능 (보조)', '3차기능 (발달중)', '열등기능 (약점)'];
                const bgColors = ['bg-yellow-500/10', 'bg-green-500/10', 'bg-blue-500/10', 'bg-red-500/10'];
                const relationColors = ['text-red-400', 'text-green-400', 'text-orange-400', 'text-amber-400'];
                
                return (
                  <div key={i} className={`flex items-center justify-between ${bgColors[i]} rounded-lg p-3`}>
                    <div>
                      <span className="text-xs text-gray-400">{ranks[i]}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-white font-bold">{func}</span>
                        <span className="text-gray-400 text-xs">({COGNITIVE_STACK.names[i]})</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span style={{ color: ELEMENTS[COGNITIVE_STACK.elements[i]].color }} className="font-bold">
                        {COGNITIVE_STACK.elementNames[i]}
                      </span>
                      <p className={`text-xs ${relationColors[i]}`}>
                        {COGNITIVE_STACK.relations[i]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 주기능 상세 */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-amber-400 mb-2">
              【주기능 Te × 丙火 분석】
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              <strong>가장 강한 기능(Te, 외향 사고)</strong>이 丙火와 
              <strong className="text-red-400"> 상극</strong> 관계예요.
              이 긴장감이 오히려 <strong className="text-yellow-400">균형 잡힌 판단력</strong>을 만들어줘요!
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-3 mt-3">
              <p className="text-amber-400 text-xs font-medium mb-2">🎭 실생활에서 이렇게 나타나요</p>
              <p className="text-gray-400 text-xs">
                <strong>상황:</strong> 중요한 결정을 내려야 할 때<br/>
                <strong>Te(金):</strong> "데이터를 분석하고 합리적으로 결정해야 해"<br/>
                <strong>丙火:</strong> "이거 좋은 느낌이야! 해보자!"<br/>
                <span className="text-amber-300">→ 이 긴장을 이해하면 더 나은 결정을 내릴 수 있어요</span>
              </p>
            </div>
          </div>

          {/* 나머지 블러 */}
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
            ⚡ 일반 ESTJ vs ESTJ+丙火
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">사주가 만드는 차이</p>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-4">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-gray-500 font-medium">영역</div>
              <div className="text-gray-500 font-medium text-center">일반 ESTJ</div>
              <div className="text-yellow-400 font-medium text-center">ESTJ+丙火</div>
              
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
      <div className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            🚀 시너지 극대화 전략
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">ESTJ × 丙火의 장점을 200% 활용하는 법</p>
          
          {/* 시너지 #1 */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-green-400 mb-2">
              【시너지 #1: 열정의 체계화】
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              丙火의 열정과 ESTJ의 체계적 실행력이 만나면 <strong className="text-yellow-400">"실현 가능한 비전"</strong>이 나와요.
              열정만 있으면 공상가, 논리만 있으면 관료가 되는데, 이 조합은 둘 다 있어요!
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-3">
              <p className="text-yellow-400 text-xs font-medium mb-2">💡 활용 전략</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                새로운 아이디어가 떠오르면 <strong className="text-white">24시간 안에 1페이지 실행 계획</strong>을 작성하세요.
                丙火의 열정이 식기 전에 ESTJ의 체계로 잡아두는 거예요.
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

      {/* ===== 섹션 6: 갈등 해결 ===== */}
      <div className="py-10 px-4 bg-gray-800/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            ⚡ 내적 갈등 & 해결법
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">78점의 좋은 케미에도 존재하는 긴장 관리법</p>
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-amber-400 mb-2">
              【핵심 갈등: 논리 vs 열정】
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Te(金)의 "합리적으로 판단해야 해"와 丙火의 "일단 해보자!" 사이에서 
              내적 혼란이 생길 수 있어요. 하지만 이 긴장이 더 균형 잡힌 결정을 만들어줘요.
            </p>
          </div>
          
          <BlurredSection title="해결 전략 & 실천법" icon="🛠️" height="h-32" />
        </div>
      </div>

      {/* ===== 섹션 7: 연애 & 인간관계 ===== */}
      <div className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            💕 연애 & 👥 인간관계
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">나를 이해하면, 관계가 보인다</p>
          
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-pink-400 mb-2">【연애 스타일 미리보기】</h3>
            <p className="text-gray-300 text-sm">
              <strong>스타일:</strong> 따뜻하면서도 든든한 파트너. 丙火의 열정으로 관계에 활력을 불어넣고...
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

      {/* ===== 섹션 8: 월별 활용법 ===== */}
      <div className="py-10 px-4 bg-gray-800/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            📅 월별 에너지 활용법
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">오행의 순환에 따른 최적 전략</p>
          
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-green-400 mb-3">【1~3월: 봄의 기운 (木 상승기)】</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-green-300 font-medium">🌱 1월 (寅月)</p>
                <p className="text-gray-400">木 기운 상승 시작. 丙火에 에너지 공급!</p>
                <p className="text-gray-500 mt-1"><strong>추천:</strong> 새해 계획 수립, 새 프로젝트 시작</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-green-300 font-medium">🌿 2월 (卯月)</p>
                <p className="text-gray-400">木 기운 최고조. 확장과 성장의 시기!</p>
                <p className="text-gray-500 mt-1"><strong>추천:</strong> 적극적 대외 활동, 네트워킹</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <BlurredSection title="4~6월 (火)" icon="☀️" height="h-20" />
            <BlurredSection title="7~9월 (金)" icon="🍂" height="h-20" />
            <BlurredSection title="10~12월 (水)" icon="❄️" height="h-20" />
          </div>
        </div>
      </div>

      {/* ===== 섹션 9: 커리어 ===== */}
      <div className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            💼 커리어 가이드
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">ESTJ × 丙火에 맞는 진로</p>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
            <p className="text-gray-300 text-sm">
              <strong className="text-blue-400">이상적 경로:</strong> 창업가, 프로젝트 매니저, 교육자/멘토, 컨설턴트...
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <BlurredSection title="직장 전략" icon="🏢" height="h-24" />
            <BlurredSection title="사업 적합도" icon="📈" height="h-24" />
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="py-16 px-4 bg-gradient-to-b from-indigo-900/30 to-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-800/50 border border-yellow-500/30 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-3">
              🎯 나만의 분석 결과 받기
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              위 샘플은 <strong className="text-yellow-400">ESTJ × 丙火</strong> 조합입니다.<br/>
              160가지 조합 중 <strong className="text-yellow-400">나만의 케미</strong>를 확인해보세요!
            </p>
            
            <Link 
              href="/free"
              className="inline-block w-full max-w-md py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg mb-4"
            >
              🔮 무료 분석 받기 →
            </Link>
            
            <p className="text-gray-500 text-xs">
              생년월일 + MBTI만 입력하면 바로 확인!
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-3">프리미엄 리포트에서는...</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span className="px-2 py-1 bg-gray-800 rounded">✓ 인지기능 완전 분석</span>
              <span className="px-2 py-1 bg-gray-800 rounded">✓ 시너지 5가지</span>
              <span className="px-2 py-1 bg-gray-800 rounded">✓ 갈등 해결법</span>
              <span className="px-2 py-1 bg-gray-800 rounded">✓ 12개월 가이드</span>
              <span className="px-2 py-1 bg-gray-800 rounded">✓ 연애/커리어 상세</span>
            </div>
          </div>
          
          <p className="mt-8 text-gray-500 text-xs">© K-Saju by 인사이트 금융경영연구소</p>
        </div>
      </div>
    </div>
  );
}
