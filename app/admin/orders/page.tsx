'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../components/AuthProvider';
import { useAdmin } from '../../components/AdminProvider';
import { getAdminOrders, updateOrderStatusAdmin, deleteOrderAdmin } from '../../lib/admin';
import { getOrderStatusLabel } from '../../lib/orders';

export default function AdminOrdersPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin: isAdminUser, loading: adminLoading } = useAdmin();

  const [orders, setOrders] = useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    search: '',
    sortBy: 'created_at' as 'created_at' | 'total_amount',
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

  // 주문 로드
  useEffect(() => {
    if (user && isAdminUser) {
      loadOrders();
    }
  }, [user, isAdminUser, filters]);

  const loadOrders = async () => {
    setOrdersLoading(true);
    const result = await getAdminOrders(filters);

    if (result.success && result.orders) {
      setOrders(result.orders);
    }
    setOrdersLoading(false);
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    if (!confirm(`주문 상태를 "${newStatus}"(으)로 변경하시겠습니까?`)) {
      return;
    }

    const result = await updateOrderStatusAdmin(orderId, newStatus as any);

    if (result.success) {
      alert('주문 상태가 변경되었습니다.');
      loadOrders();
    } else {
      alert(result.error || '주문 상태 변경에 실패했습니다.');
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm('정말로 이 주문을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
      return;
    }

    const result = await deleteOrderAdmin(orderId);

    if (result.success) {
      alert('주문이 삭제되었습니다.');
      loadOrders();
    } else {
      alert(result.error || '주문 삭제에 실패했습니다.');
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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin"
                className="text-gray-400 hover:text-white"
              >
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
              <h1 className="text-xl font-bold text-white">주문 관리</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 필터 */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 상태 필터 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                주문 상태
              </label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              >
                <option value="all">전체</option>
                <option value="pending">결제 대기</option>
                <option value="paid">결제 완료</option>
                <option value="completed">완료</option>
                <option value="failed">결제 실패</option>
                <option value="cancelled">취소됨</option>
              </select>
            </div>

            {/* 검색 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                검색
              </label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                placeholder="주문번호, 이메일, 이름"
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
                <option value="created_at">주문일</option>
                <option value="total_amount">금액</option>
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

        {/* 주문 목록 */}
        {ordersLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-400">로딩 중...</p>
          </div>
        ) : orders.length === 0 ? (
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-gray-400 text-lg mb-2">주문이 없습니다</p>
            <p className="text-gray-500 text-sm">필터를 조정하거나 검색어를 확인해주세요.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusInfo = getOrderStatusLabel(order.status);
              const orderDate = new Date(order.created_at).toLocaleString('ko-KR');

              return (
                <div
                  key={order.id}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  {/* 주문 헤더 */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-700">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {order.order_id}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.color}`}
                        >
                          {statusInfo.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{orderDate}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-2xl font-bold text-primary-400">
                        {order.total_amount.toLocaleString()}원
                      </p>
                    </div>
                  </div>

                  {/* 고객 정보 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">고객명</p>
                      <p className="text-sm text-white font-semibold">
                        {order.customer_name}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">이메일</p>
                      <p className="text-sm text-white">{order.customer_email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">전화번호</p>
                      <p className="text-sm text-white">{order.customer_phone}</p>
                    </div>
                  </div>

                  {/* 주문 상품 */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">주문 상품</p>
                    <div className="space-y-2">
                      {order.items.map((item: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"
                        >
                          <span className="text-sm text-white">
                            {item.product.name} × {item.quantity}
                          </span>
                          <span className="text-sm text-gray-300">
                            {(item.product.price * item.quantity).toLocaleString()}원
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex flex-wrap gap-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.order_id, e.target.value)
                      }
                      className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm"
                    >
                      <option value="pending">결제 대기</option>
                      <option value="paid">결제 완료</option>
                      <option value="completed">완료</option>
                      <option value="failed">결제 실패</option>
                      <option value="cancelled">취소됨</option>
                    </select>

                    <button
                      onClick={() => handleDeleteOrder(order.order_id)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
