'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../components/AuthProvider';
import { useAdmin } from '../../components/AdminProvider';
import { getAdminUsers } from '../../lib/admin';
import { getUserOrderStats } from '../../lib/orders';

export default function AdminUsersPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin: isAdminUser, loading: adminLoading } = useAdmin();

  const [users, setUsers] = useState<any[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    sortBy: 'created_at' as 'created_at' | 'name',
    sortOrder: 'desc' as 'asc' | 'desc',
  });

  // 권한 확인
  useEffect(() => {
    if (!authLoading && !adminLoading) {
      if (!user || !isAdminUser) {
        router.push('/admin/login');
      }
    }
  }, [user, isAdminUser, authLoading, adminLoading, router]);

  // 사용자 로드
  useEffect(() => {
    if (user && isAdminUser) {
      loadUsers();
    }
  }, [user, isAdminUser, filters]);

  const loadUsers = async () => {
    setUsersLoading(true);
    const result = await getAdminUsers(filters);

    if (result.success && result.users) {
      // 각 사용자의 주문 통계도 함께 로드
      const usersWithStats = await Promise.all(
        result.users.map(async (u) => {
          const stats = await getUserOrderStats(u.id);
          return {
            ...u,
            stats: stats.success ? stats.stats : null,
          };
        })
      );
      setUsers(usersWithStats);
    }
    setUsersLoading(false);
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

  if (!user || !isAdminUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
              <h1 className="text-xl font-bold text-white">사용자 관리</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 필터 */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 검색 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                검색
              </label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                placeholder="이름, 이메일"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
              />
            </div>

            {/* 정렬 기준 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                정렬 기준
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters({ ...filters, sortBy: e.target.value as any })
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              >
                <option value="created_at">가입일</option>
                <option value="name">이름</option>
              </select>
            </div>

            {/* 정렬 순서 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                정렬 순서
              </label>
              <select
                value={filters.sortOrder}
                onChange={(e) =>
                  setFilters({ ...filters, sortOrder: e.target.value as any })
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              >
                <option value="desc">최신순</option>
                <option value="asc">오래된순</option>
              </select>
            </div>
          </div>
        </div>

        {/* 사용자 목록 */}
        {usersLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-400">로딩 중...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="bg-gray-800 rounded-xl p-12 text-center border border-gray-700">
            <svg
              className="w-16 h-16 text-gray-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <p className="text-gray-400 text-lg mb-2">사용자가 없습니다</p>
            <p className="text-gray-500 text-sm">
              검색어를 확인하거나 필터를 조정해주세요.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((u) => {
              const joinDate = new Date(u.created_at).toLocaleDateString('ko-KR');

              return (
                <div
                  key={u.id}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
                >
                  {/* 사용자 정보 */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">
                        {u.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">
                        {u.name}
                      </h3>
                      <p className="text-sm text-gray-400 truncate">{u.email}</p>
                    </div>
                  </div>

                  {/* 세부 정보 */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-sm text-gray-400">전화번호</span>
                      <span className="text-sm text-white">
                        {u.phone || '미등록'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-sm text-gray-400">가입일</span>
                      <span className="text-sm text-white">{joinDate}</span>
                    </div>
                  </div>

                  {/* 주문 통계 */}
                  {u.stats && (
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-xs font-semibold text-gray-300 mb-3">
                        주문 통계
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">총 주문</p>
                          <p className="text-lg font-bold text-white">
                            {u.stats.totalOrders}건
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">총 결제</p>
                          <p className="text-lg font-bold text-primary-400">
                            {(u.stats.totalSpent / 10000).toFixed(1)}만원
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
