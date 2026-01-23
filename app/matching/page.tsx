'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface RecommendedUser {
  id: string;
  nickname: string;
  age: number;
  location: string;
  photos: string[];
  intro: string;
  mbti: string;
  love_type: string;
  compatibility: {
    total: number;
    saju: number;
    mbti: number;
    synergy: number;
  };
  chemistry_summary: string;
}

export default function MatchingPage() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<RecommendedUser[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [dailyLikes, setDailyLikes] = useState(3);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    fetchRecommendations();
    fetchStatus();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const res = await fetch('/api/matching/recommendations');
      if (res.ok) {
        const data = await res.json();
        setRecommendations(data.recommendations || []);
      }
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/matching/status');
      if (res.ok) {
        const data = await res.json();
        setDailyLikes(data.daily_likes);
      }
    } catch (error) {
      console.error('Failed to fetch status:', error);
    }
  };

  const handleLike = async () => {
    if (dailyLikes <= 0 || !recommendations[currentIndex]) return;
    
    setSwipeDirection('right');
    
    try {
      const res = await fetch('/api/matching/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ toUserId: recommendations[currentIndex].id }),
      });
      
      if (res.ok) {
        const data = await res.json();
        setDailyLikes(data.remaining_likes);
        
        if (data.matched) {
          alert('매칭 성공! 채팅을 시작하세요 💕');
          router.push(`/chat/${data.match_id}`);
          return;
        }
      }
    } catch (error) {
      console.error('Failed to like:', error);
    }
    
    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex(prev => prev + 1);
    }, 300);
  };

  const handlePass = () => {
    setSwipeDirection('left');
    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex(prev => prev + 1);
    }, 300);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">로딩 중...</div>
      </div>
    );
  }

  const currentUser = recommendations[currentIndex];

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className="text-6xl mb-4">💫</div>
        <h2 className="text-2xl font-bold text-white mb-2">오늘의 추천 완료!</h2>
        <p className="text-gray-400 text-center mb-6">
          내일 새로운 인연이 기다리고 있어요
        </p>
        <button
          onClick={() => router.push('/chat')}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold"
        >
          채팅 목록 보기
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* 헤더 */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10 px-4 py-4 border-b border-gray-800">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">오늘의 추천</h1>
          <div className="flex items-center gap-2">
            <span className="text-pink-400">❤️ {dailyLikes}</span>
            <span className="text-gray-500 text-sm">남음</span>
          </div>
        </div>
      </div>

      {/* 카드 */}
      <div className="max-w-md mx-auto p-4">
        <div
          className={`relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 ${
            swipeDirection === 'left' ? '-translate-x-full rotate-[-20deg] opacity-0' :
            swipeDirection === 'right' ? 'translate-x-full rotate-[20deg] opacity-0' : ''
          }`}
        >
          {/* 프로필 이미지 */}
          <div className="aspect-[3/4] bg-gradient-to-br from-purple-600 to-pink-600 relative">
            {currentUser.photos?.[0] ? (
              <img
                src={currentUser.photos[0]}
                alt={currentUser.nickname}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl">👤</span>
              </div>
            )}
            
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* 기본 정보 */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {currentUser.nickname}, {currentUser.age}
                  </h2>
                  <p className="text-gray-300">{currentUser.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-pink-400">
                    {currentUser.compatibility.total}%
                  </div>
                  <div className="text-sm text-gray-300">궁합</div>
                </div>
              </div>
            </div>
          </div>

          {/* 상세 정보 */}
          <div className="p-6 space-y-4">
            {/* 궁합 점수 */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{currentUser.compatibility.saju}%</div>
                <div className="text-xs text-gray-400">사주</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{currentUser.compatibility.mbti}%</div>
                <div className="text-xs text-gray-400">MBTI</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-pink-400">{currentUser.compatibility.synergy}%</div>
                <div className="text-xs text-gray-400">시너지</div>
              </div>
            </div>

            {/* 케미 요약 */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4">
              <p className="text-white text-sm leading-relaxed">
                💕 {currentUser.chemistry_summary}
              </p>
            </div>

            {/* MBTI & 연애 유형 */}
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {currentUser.mbti}
              </span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                {currentUser.love_type}
              </span>
            </div>

            {/* 자기소개 */}
            {currentUser.intro && (
              <p className="text-gray-300 text-sm">{currentUser.intro}</p>
            )}
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handlePass}
            className="w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-3xl transition-colors"
          >
            ✕
          </button>
          <button
            onClick={handleLike}
            disabled={dailyLikes <= 0}
            className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 rounded-full flex items-center justify-center text-4xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ❤️
          </button>
        </div>

        {dailyLikes <= 0 && (
          <p className="text-center text-gray-400 mt-4">
            오늘 좋아요를 모두 사용했어요. 내일 다시 만나요!
          </p>
        )}
      </div>
    </div>
  );
}
