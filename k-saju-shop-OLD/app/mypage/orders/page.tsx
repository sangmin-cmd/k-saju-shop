'use client';

import { useAuth } from '../../components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserOrders, getOrderStatusLabel } from '../../lib/orders';
import { DbOrder } from '../../lib/types';

export default function OrdersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<DbOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      loadOrders();
    }
  }, [user]);

  const loadOrders = async () => {
    if (!user) return;

    setOrdersLoading(true);
    const result = await getUserOrders(user.id);

    if (result.success && result.orders) {
      setOrders(result.orders);
    }
    setOrdersLoading(false);
  };

  if (loading || ordersLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/mypage"
            className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            마이페이지로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold mb-2">주문 내역</h1>
          <p className="text-gray-600">전체 {orders.length}건의 주문</p>
        </div>

        {/* 주문 목록 */}
        {orders.length === 0 ? (
          <div className="card p-12 text-center">
            <svg
              className="w-20 h-20 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">주문 내역이 없습니다</h3>
            <p className="text-gray-600 mb-6">
              아직 주문하신 상품이 없습니다. 지금 바로 쇼핑을 시작해보세요!
            </p>
            <Link href="/products" className="btn-primary inline-block">
              상품 둘러보기
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusInfo = getOrderStatusLabel(order.status);
              const orderDate = new Date(order.created_at).toLocaleDateString(
                'ko-KR',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              );

              return (
                <div key={order.id} className="card p-6 hover:shadow-lg transition-shadow">
                  {/* 주문 헤더 */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold">{order.order_id}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.color}`}
                        >
                          {statusInfo.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{orderDate}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-2xl font-bold text-primary-600">
                        {order.total_amount.toLocaleString()}원
                      </p>
                    </div>
                  </div>

                  {/* 주문 상품 */}
                  <div className="space-y-3 mb-4">
                    {order.items.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">
                            {item.product.category === 'basic' && '📊'}
                            {item.product.category === 'premium' && '⭐'}
                            {item.product.category === 'compatibility' && '💕'}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{item.product.name}</p>
                          <p className="text-sm text-gray-600">
                            수량: {item.quantity}개
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {(item.product.price * item.quantity).toLocaleString()}원
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/mypage/orders/${order.order_id}`}
                      className="flex-1 btn-secondary text-center"
                    >
                      주문 상세보기
                    </Link>
                    
                    {order.status === 'completed' && order.pdf_url && (
                      <a
                        href={order.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center"
                      >
                        PDF 다운로드
                      </a>
                    )}

                    {order.status === 'completed' && !order.pdf_url && (
                      <button
                        disabled
                        className="flex-1 btn-secondary text-center opacity-50 cursor-not-allowed"
                      >
                        분석 진행 중
                      </button>
                    )}

                    {order.status === 'pending' && (
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              '주문을 취소하시겠습니까?\n결제가 완료된 주문은 취소할 수 없습니다.'
                            )
                          ) {
                            // TODO: 주문 취소 로직
                            alert('주문 취소 기능은 준비 중입니다.');
                          }
                        }}
                        className="flex-1 btn-secondary text-center text-red-600 hover:bg-red-50"
                      >
                        주문 취소
                      </button>
                    )}
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
