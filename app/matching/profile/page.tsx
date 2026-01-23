'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MatchingProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nickname: '',
    gender: '',
    birth_date: '',
    birth_time: '',
    mbti: '',
    intro: '',
    location: '',
    prefer_age_min: 20,
    prefer_age_max: 40,
  });

  const mbtiTypes = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  const locations = ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/matching/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert('프로필이 저장되었습니다!');
        router.push('/matching');
      } else {
        const data = await res.json();
        alert(data.error || '저장에 실패했습니다.');
      }
    } catch (error) {
      alert('오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white mb-2">매칭 프로필</h1>
        <p className="text-gray-400 mb-8">나와 맞는 인연을 찾기 위한 정보를 입력해주세요</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 닉네임 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">닉네임 *</label>
            <input
              type="text"
              value={form.nickname}
              onChange={(e) => setForm({ ...form, nickname: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="매칭에서 사용할 닉네임"
              required
            />
          </div>

          {/* 성별 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">성별 *</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, gender: 'M' })}
                className={`py-3 rounded-xl font-medium transition-colors ${
                  form.gender === 'M'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                남성
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, gender: 'F' })}
                className={`py-3 rounded-xl font-medium transition-colors ${
                  form.gender === 'F'
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                여성
              </button>
            </div>
          </div>

          {/* 생년월일 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">생년월일 *</label>
            <input
              type="date"
              value={form.birth_date}
              onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* 태어난 시간 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">태어난 시간 (선택)</label>
            <input
              type="time"
              value={form.birth_time}
              onChange={(e) => setForm({ ...form, birth_time: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">정확한 사주 분석을 위해 입력하면 좋아요</p>
          </div>

          {/* MBTI */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">MBTI *</label>
            <div className="grid grid-cols-4 gap-2">
              {mbtiTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm({ ...form, mbti: type })}
                  className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                    form.mbti === type
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* 지역 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">지역 *</label>
            <select
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            >
              <option value="">선택하세요</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* 선호 나이 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">선호 나이대</label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={form.prefer_age_min}
                onChange={(e) => setForm({ ...form, prefer_age_min: Number(e.target.value) })}
                className="w-24 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white text-center"
                min="18"
                max="100"
              />
              <span className="text-gray-400">~</span>
              <input
                type="number"
                value={form.prefer_age_max}
                onChange={(e) => setForm({ ...form, prefer_age_max: Number(e.target.value) })}
                className="w-24 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white text-center"
                min="18"
                max="100"
              />
              <span className="text-gray-400">세</span>
            </div>
          </div>

          {/* 자기소개 */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">자기소개</label>
            <textarea
              value={form.intro}
              onChange={(e) => setForm({ ...form, intro: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              rows={4}
              placeholder="나를 소개해주세요"
              maxLength={500}
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={loading || !form.nickname || !form.gender || !form.birth_date || !form.mbti || !form.location}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '저장 중...' : '프로필 저장하고 매칭 시작'}
          </button>
        </form>
      </div>
    </div>
  );
}
