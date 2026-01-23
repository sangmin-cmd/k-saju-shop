'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface ChatMatch {
  id: string;
  partner: {
    id: string;
    nickname: string;
    photos: string[];
    saju_day_master: string;
  };
  compatibility_total: number;
  last_message?: {
    content: string;
    created_at: string;
    is_mine: boolean;
  };
  unread_count: number;
  created_at: string;
}

export default function ChatListPage() {
  const { data: session, status } = useSession();
  const [matches, setMatches] = useState<ChatMatch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchMatches();
    }
  }, [status]);

  const fetchMatches = async () => {
    try {
      const response = await fetch('/api/chat');
      if (response.ok) {
        const data = await response.json();
        setMatches(data.matches || []);
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return '어제';
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">로그인이 필요합니다</p>
          <Link href="/login" className="text-yellow-400">로그인하기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-white">채팅</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto">
        {matches.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-gray-400 text-center mb-6">
              아직 매칭된 상대가 없어요<br/>
              마음에 드는 분께 좋아요를 보내보세요!
            </p>
            <Link 
              href="/matching" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full"
            >
              매칭 둘러보기
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-gray-800">
            {matches.map((match) => (
              <li key={match.id}>
                <Link 
                  href={`/chat/${match.id}`}
                  className="flex items-center gap-3 p-4 hover:bg-gray-900/50 transition-colors"
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center overflow-hidden">
                      {match.partner.photos?.[0] ? (
                        <img 
                          src={match.partner.photos[0]} 
                          alt={match.partner.nickname}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl">
                          {match.partner.saju_day_master === '목' ? '🌳' :
                           match.partner.saju_day_master === '화' ? '🔥' :
                           match.partner.saju_day_master === '토' ? '🏔️' :
                           match.partner.saju_day_master === '금' ? '⚔️' : '💧'}
                        </span>
                      )}
                    </div>
                    {match.unread_count > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full text-xs text-white flex items-center justify-center">
                        {match.unread_count > 9 ? '9+' : match.unread_count}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{match.partner.nickname}</span>
                      <span className="text-xs text-pink-400">{match.compatibility_total}%</span>
                    </div>
                    {match.last_message ? (
                      <p className={`text-sm truncate ${match.unread_count > 0 ? 'text-white' : 'text-gray-400'}`}>
                        {match.last_message.is_mine && '나: '}
                        {match.last_message.content}
                      </p>
                    ) : (
                      <p className="text-sm text-pink-400">새로운 매칭! 인사를 건네보세요 👋</p>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {match.last_message ? formatTime(match.last_message.created_at) : formatTime(match.created_at)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
