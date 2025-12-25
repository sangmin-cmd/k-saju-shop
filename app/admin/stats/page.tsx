'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../components/AuthProvider';
import { useAdmin } from '../../components/AdminProvider';
import { getAdminStats, getAdminOrders } from '../../lib/admin';

export default function AdminStatsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin: isAdminUser, loading: adminLoading } = useAdmin();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    completedOrders: 0,
    todayOrders: 0,
    todayRevenue: 0,
  });
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [statsLoading, setStatsLoading] = useState(true);

  // 권한 확인
  useEffect(() => {
    if (!authLoading && !adminLoading) {
      if (!user || !isAdminUser) {
        router.push('/admin/login');
      }
    }
  }, [user, isAdminUser, authLoading, adminLoading, router]);

  // 통계 로드
  useEffect(() => {
    if (user && isAdminUser) {
      loadStats();
      loadRecentOrders();
    }
  }, [user, isAdminUser]);

  const loadStats = async () => {
    setStatsLoading(true);
    const result = await getAdminStats();

    if (result.success && result.stats) {
      setStats(result.stats);
    }
    setStatsLoading(false);
  };

  const loadRecentOrders = async () => {
    const result = await getAdminOrders({ limit: 10 });

    if (result.success && result.orders) {
      setRecentOrders(result.orders);
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

  if (!user || !isAdminUser) {
    return null;
  }

  // 평균 주문 금액
  const avgOrderAmount =
    stats.totalOrders > 0 ? stats.totalRevenue / stats.totalOrders : 0;

  // 완료율
  const completionRate =
    stats.totalOrders > 0
      ? ((stats.completedOrders / stats.totalOrders) * 100).toFixed(1)
      : 0;

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
              <h1 className="text-xl font-bold text-white">통계</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {statsLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-400">로딩 중...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* 주요 지표 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 총 매출 */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm opacity-90 mb-1">총 매출</p>
                <p className="text-3xl font-bold">
                  {(stats.totalRevenue / 10000).toFixed(0)}만원
                </p>
                <p className="text-xs opacity-75 mt-2">
                  {stats.totalRevenue.toLocaleString()}원
                </p>
              </div>

              {/* 평균 주문 금액 */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm opacity-90 mb-1">평균 주문 금액</p>
                <p className="text-3xl font-bold">
                  {avgOrderAmount.toLocaleString()}원
                </p>
              </div>

              {/* 완료율 */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm opacity-90 mb-1">완료율</p>
                <p className="text-3xl font-bold">{completionRate}%</p>
                <p className="text-xs opacity-75 mt-2">
                  {stats.completedOrders} / {stats.totalOrders}건
                </p>
              </div>

              {/* 오늘 매출 */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <svg
                    className="w-12 h-12 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <p className="text-sm opacity-90 mb-1">오늘 매출</p>
                <p className="text-3xl font-bold">
                  {stats.todayRevenue.toLocaleString()}원
                </p>
                <p className="text-xs opacity-75 mt-2">
                  {stats.todayOrders}건 주문
                </p>
              </div>
            </div>

            {/* 상세 통계 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 주문 현황 */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">
                  주문 현황 상세
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">총 주문</span>
                    </div>
                    <span className="text-2xl font-bold text-white">
                      {stats.totalOrders}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">결제 대기</span>
                    </div>
                    <span className="text-2xl font-bold text-white">
                      {stats.pendingOrders}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">완료</span>
                    </div>
                    <span className="text-2xl font-bold text-white">
                      {stats.completedOrders}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">총 사용자</span>
                    </div>
                    <span className="text-2xl font-bold text-white">
                      {stats.totalUsers}
                    </span>
                  </div>
                </div>
              </div>

              {/* 최근 주문 */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">최근 주문</h3>
                  <Link
                    href="/admin/orders"
                    className="text-sm text-primary-400 hover:text-primary-300"
                  >
                    전체 보기 →
                  </Link>
                </div>

                {recentOrders.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    최근 주문이 없습니다
                  </p>
                ) : (
                  <div className="space-y-3">
                    {recentOrders.slice(0, 5).map((order) => (
                      <div
                        key={order.id}
                        className="p-3 bg-gray-700/50 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-white">
                            {order.customer_name}
                          </span>
                          <span className="text-sm font-bold text-primary-400">
                            {order.total_amount.toLocaleString()}원
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {order.order_id}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(order.created_at).toLocaleDateString('ko-KR')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
