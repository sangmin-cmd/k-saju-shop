'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Message {
  id: string;
  sender_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

interface Partner {
  id: string;
  nickname: string;
  photos: string[];
  saju_day_master: string;
}

interface MatchInfo {
  id: string;
  partner: Partner;
  compatibility_total: number;
}

export default function ChatRoomPage() {
  const params = useParams();
  const matchId = params.matchId as string;
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [matchInfo, setMatchInfo] = useState<MatchInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [userId, setUserId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchChatRoom();
    }
  }, [status, matchId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchChatRoom = async () => {
    try {
      const response = await fetch(`/api/chat/${matchId}/messages`);
      if (response.ok) {
        const data = await response.json();
        setMatchInfo(data.matchInfo);
        setMessages(data.messages || []);
        setUserId(data.userId);
      }
    } catch (error) {
      console.error('Error fetching chat:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!newMessage.trim() || sending) return;
    
    setSending(true);
    try {
      const response = await fetch(`/api/chat/${matchId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newMessage }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, data.message]);
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    );
  }

  if (!matchInfo) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">채팅방을 찾을 수 없습니다</p>
          <Link href="/chat" className="text-yellow-400">채팅 목록으로</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/chat" className="text-white text-xl">←</Link>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
            <span className="text-lg">
              {matchInfo.partner.saju_day_master === '목' ? '🌳' :
               matchInfo.partner.saju_day_master === '화' ? '🔥' :
               matchInfo.partner.saju_day_master === '토' ? '🏔️' :
               matchInfo.partner.saju_day_master === '금' ? '⚔️' : '💧'}
            </span>
          </div>
          <div className="flex-1">
            <span className="font-medium text-white">{matchInfo.partner.nickname}</span>
            <span className="ml-2 text-xs text-pink-400">{matchInfo.compatibility_total}%</span>
          </div>
        </div>
      </header>

      {/* 메시지 목록 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400">첫 메시지를 보내보세요! 💬</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender_id === userId ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                msg.sender_id === userId 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-gray-800 text-white'
              }`}>
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-60 mt-1">{formatTime(msg.created_at)}</p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 입력창 */}
      <div className="sticky bottom-0 bg-black border-t border-gray-800 p-4">
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="메시지를 입력하세요..."
            className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
          />
          <button
            onClick={handleSend}
            disabled={!newMessage.trim() || sending}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full disabled:opacity-50"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}
