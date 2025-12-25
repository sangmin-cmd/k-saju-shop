'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';
import { useAdmin } from '../../components/AdminProvider';
import { adminSignIn } from '../../lib/admin';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin: isAdminUser, loading: adminLoading } = useAdmin();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 이미 관리자로 로그인되어 있으면 대시보드로 이동
  useEffect(() => {
    if (!authLoading && !adminLoading && user && isAdminUser) {
      router.push('/admin');
    }
  }, [user, isAdminUser, authLoading, adminLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await adminSignIn(formData.email, formData.password);

      if (result.success && result.isAdmin) {
        // 로그인 성공 - 페이지 새로고침하여 Context 업데이트
        window.location.href = '/admin';
      } else {
        setError(result.error || '관리자 로그인에 실패했습니다.');
      }
    } catch (error: any) {
      console.error('Admin login error:', error);
      setError('로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full px-6">
        {/* 로고 */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-4">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">관리자 로그인</h1>
          <p className="text-gray-400">K-Saju Shop 관리자 페이지</p>
        </div>

        {/* 로그인 폼 */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                관리자 이메일
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="admin@humaninsight.co.kr"
                required
                disabled={loading}
              />
            </div>

            {/* 비밀번호 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? '로그인 중...' : '관리자 로그인'}
            </button>
          </form>

          {/* 일반 사용자 링크 */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm mb-3">일반 사용자이신가요?</p>
            <Link
              href="/login"
              className="text-primary-400 hover:text-primary-300 text-sm font-semibold"
            >
              일반 로그인 페이지로 이동 →
            </Link>
          </div>

          {/* 홈으로 */}
          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>

        {/* 경고 */}
        <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <p className="text-yellow-500 text-sm font-semibold mb-1">
                보안 경고
              </p>
              <p className="text-yellow-300 text-xs">
                관리자 계정은 민감한 정보에 접근할 수 있습니다. 본인의 계정이
                아닌 경우 즉시 페이지를 닫아주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
