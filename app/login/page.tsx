'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 일반 로그인 로직 (추후 구현)
    alert('이메일 로그인은 준비 중입니다. 소셜 로그인을 이용해주세요.');
  };

  const handleKakaoLogin = async () => {
    setIsLoading(true);
    await signIn('kakao', { callbackUrl: '/' });
  };

  const handleNaverLogin = async () => {
    setIsLoading(true);
    await signIn('naver', { callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 헤더 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="mt-2 text-gray-600">K-Saju에 오신 것을 환영합니다</p>
        </div>

        {/* 이메일 로그인 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
            disabled
          >
            이메일 로그인 (준비중)
          </button>
        </form>

        {/* 비회원 구매 안내 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div className="text-center">
            <p className="text-blue-800 font-semibold mb-2">💡 로그인 없이 바로 구매 가능!</p>
            <p className="text-blue-600 text-sm mb-4">비회원도 이메일만 입력하면 결과물을 받을 수 있어요.</p>
            <Link 
              href="/products" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              상품 보러가기 →
            </Link>
          </div>
        </div>

        {/* 홈으로 */}
        <div className="text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
