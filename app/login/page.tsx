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

        {/* 소셜 로그인 */}
        <div className="space-y-3">
          {/* 카카오 로그인 */}
          <button
            onClick={handleKakaoLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: '#FEE500', color: '#000000' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3C5.58172 3 2 5.87371 2 9.44444C2 11.6578 3.55009 13.5869 5.84015 14.6376L4.89595 17.7869C4.82647 18.0254 5.10019 18.2132 5.30832 18.0743L9.10681 15.5441C9.39704 15.5768 9.69402 15.5931 10 15.5931C14.4183 15.5931 18 12.7194 18 9.14861C18 5.57782 14.4183 3 10 3Z"
                fill="#000000"
              />
            </svg>
            {isLoading ? '로그인 중...' : '카카오로 시작하기'}
          </button>

          {/* 네이버 로그인 */}
          <button
            onClick={handleNaverLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-semibold transition-colors text-white"
            style={{ backgroundColor: '#03C75A' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M13.5 10.5L6.5 3V17L13.5 10.5Z"
                fill="white"
              />
            </svg>
            {isLoading ? '로그인 중...' : '네이버로 시작하기'}
          </button>
        </div>

        {/* 구분선 */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">또는</span>
          </div>
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

        {/* 하단 링크 */}
        <div className="text-center text-sm text-gray-600">
          <p>
            계정이 없으신가요?{' '}
            <Link href="/register" className="text-primary-500 hover:text-primary-600 font-semibold">
              회원가입
            </Link>
          </p>
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
