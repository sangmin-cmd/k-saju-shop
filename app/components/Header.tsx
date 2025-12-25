'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <div className="text-xl font-light text-black tracking-tight">
              K-Saju
            </div>
          </Link>

          {/* 네비게이션 - 데스크톱 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-black transition-colors font-light">
              상품
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors font-light">
              소개
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-black transition-colors font-light">
              후기
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-black transition-colors font-light">
              FAQ
            </Link>
          </nav>

          {/* 액션 버튼 */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6 text-gray-600 hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center font-light">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="hidden md:block relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light"
                >
                  <span>{user.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-2">
                    <Link href="/mypage" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors font-light" onClick={() => setIsUserMenuOpen(false)}>
                      마이페이지
                    </Link>
                    <Link href="/mypage/orders" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors font-light" onClick={() => setIsUserMenuOpen(false)}>
                      주문 내역
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors font-light">
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="hidden md:block text-gray-600 hover:text-black transition-colors font-light">
                  로그인
                </Link>
                <Link href="/signup" className="hidden md:block px-6 py-2 bg-black text-white font-light hover:bg-gray-800 transition-colors">
                  회원가입
                </Link>
              </>
            )}

            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-600 hover:text-black transition-colors font-light">상품</Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors font-light">소개</Link>
              <Link href="/reviews" className="text-gray-600 hover:text-black transition-colors font-light">후기</Link>
              <Link href="/faq" className="text-gray-600 hover:text-black transition-colors font-light">FAQ</Link>
              {user ? (
                <>
                  <hr className="my-2 border-gray-200" />
                  <div className="text-gray-600 font-light">{user.name}님</div>
                  <Link href="/mypage" className="text-gray-600 hover:text-black transition-colors font-light">마이페이지</Link>
                  <Link href="/mypage/orders" className="text-gray-600 hover:text-black transition-colors font-light">주문 내역</Link>
                  <button onClick={handleSignOut} className="text-left text-gray-600 hover:text-black transition-colors font-light">로그아웃</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-black transition-colors font-light">로그인</Link>
                  <Link href="/signup" className="px-6 py-2 bg-black text-white text-center font-light">회원가입</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}