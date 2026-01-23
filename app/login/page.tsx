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

        {/* 소셜 로그인 버튼 */}
        <div className="space-y-3">
          <button
            onClick={handleKakaoLogin}
            disabled={isLoading}
            className="w-full py-3 bg-[#FEE500] text-[#191919] rounded-lg font-semibold hover:bg-[#FDD800] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 3C5.58172 3 2 5.79086 2 9.2C2 11.3894 3.38041 13.3186 5.5 14.4V17.5L8.5 15.2C8.99 15.26 9.49 15.3 10 15.3C14.4183 15.3 18 12.5091 18 9.1C18 5.79086 14.4183 3 10 3Z" fill="#191919"/>
            </svg>
            {isLoading ? '로그인 중...' : '카카오 로그인'}
          </button>

          <button
            onClick={handleNaverLogin}
            disabled={isLoading}
            className="w-full py-3 bg-[#03C75A] text-white rounded-lg font-semibold hover:bg-[#02b350] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.5 10.5L6.5 3H3V17H6.5V9.5L13.5 17H17V3H13.5V10.5Z" fill="white"/>
            </svg>
            {isLoading ? '로그인 중...' : '네이버 로그인'}
          </button>
        </div>

        {/* 구분선 */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">또는</span>
          <div className="flex-1 h-px bg-gray-300"></div>
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