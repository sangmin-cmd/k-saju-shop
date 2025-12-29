// PreviewReport 사용 예시
// 홈페이지나 결과 페이지에서 이렇게 사용하면 됩니다

import React, { useState } from 'react';
import { PreviewReport } from './PreviewReport';

// 예시 1: 단순 사용
export const SimpleExample = () => {
  return (
    <PreviewReport
      userName="상민"
      mbti="ESTJ"
      dayMaster="丙"
      onCTAClick={() => {
        // 결제 페이지로 이동
        window.location.href = '/checkout';
      }}
    />
  );
};

// 예시 2: 폼 입력 → 결과 표시
export const FormToResultExample = () => {
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    mbti: '',
    dayMaster: '', // 사주 계산 엔진에서 자동 산출
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 생년월일로 dayMaster 계산
    // const dayMaster = calculateDayMaster(birthDate);
    setShowResult(true);
  };

  if (showResult) {
    return (
      <PreviewReport
        userName={formData.userName}
        mbti={formData.mbti}
        dayMaster={formData.dayMaster}
        onCTAClick={() => {
          // 결제 모달 열기 또는 페이지 이동
          console.log('결제 페이지로!');
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">무료 케미 분석</h2>
      
      <input
        type="text"
        placeholder="이름"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        className="w-full p-3 border rounded-lg mb-3"
      />
      
      <select
        value={formData.mbti}
        onChange={(e) => setFormData({ ...formData, mbti: e.target.value })}
        className="w-full p-3 border rounded-lg mb-3"
      >
        <option value="">MBTI 선택</option>
        {['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP',
          'ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ'].map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      
      {/* 실제로는 생년월일 입력 → dayMaster 자동 계산 */}
      <select
        value={formData.dayMaster}
        onChange={(e) => setFormData({ ...formData, dayMaster: e.target.value })}
        className="w-full p-3 border rounded-lg mb-3"
      >
        <option value="">일간 선택 (테스트용)</option>
        {['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'].map(dm => (
          <option key={dm} value={dm}>{dm}</option>
        ))}
      </select>
      
      <button
        type="submit"
        className="w-full py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600"
      >
        무료 분석 받기
      </button>
    </form>
  );
};

// 예시 3: 모든 조합 테스트 (개발용)
export const AllCombinationsTest = () => {
  const [current, setCurrent] = useState({ mbti: 'ESTJ', dayMaster: '丙' });
  
  const mbtiTypes = ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP',
                     'ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ'];
  const dayMasters = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-6 justify-center flex-wrap">
        <select 
          value={current.mbti}
          onChange={(e) => setCurrent({ ...current, mbti: e.target.value })}
          className="p-2 border rounded"
        >
          {mbtiTypes.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        
        <select
          value={current.dayMaster}
          onChange={(e) => setCurrent({ ...current, dayMaster: e.target.value })}
          className="p-2 border rounded"
        >
          {dayMasters.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      
      <PreviewReport
        userName="테스트"
        mbti={current.mbti}
        dayMaster={current.dayMaster}
        onCTAClick={() => alert('CTA 클릭!')}
      />
    </div>
  );
};

export default FormToResultExample;
