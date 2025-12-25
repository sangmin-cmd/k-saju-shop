'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../components/AuthProvider';
import { useAdmin } from '../../components/AdminProvider';
import {
  getAllReviews,
  deleteReview,
  setBestReview,
  type Review,
} from '../../lib/reviews';
import { getAllProducts } from '../../lib/products-admin';

export default function AdminReviewsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin: isAdminUser, loading: adminLoading } = useAdmin();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<string>('all');

  // 권한 확인
  useEffect(() => {
    if (!authLoading && !adminLoading) {
      if (!user || !isAdminUser) {
        router.push('/admin/login');
      }
    }
  }, [user, isAdminUser, authLoading, adminLoading, router]);

  // 데이터 로드
  useEffect(() => {
    if (user && isAdminUser) {
      loadReviews();
      loadProducts();
    }
  }, [user, isAdminUser, selectedProduct]);

  const loadProducts = async () => {
    const result = await getAllProducts();
    if (result.success && result.products) {
      setProducts(result.products);
    }
  };

  const loadReviews = async () => {
    setReviewsLoading(true);
    const result = await getAllReviews({
      productId: selectedProduct === 'all' ? undefined : selectedProduct,
    });

    if (result.success && result.reviews) {
      setReviews(result.reviews);
    }
    setReviewsLoading(false);
  };

  const handleDelete = async (reviewId: string) => {
    if (!confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      return;
    }

    const result = await deleteReview(reviewId);

    if (result.success) {
      alert('리뷰가 삭제되었습니다.');
      loadReviews();
    } else {
      alert(result.error || '삭제에 실패했습니다.');
    }
  };

  const handleToggleBest = async (reviewId: string, currentBest: boolean) => {
    const result = await setBestReview(reviewId, !currentBest);

    if (result.success) {
      alert(
        currentBest
          ? '베스트 리뷰가 해제되었습니다.'
          : '베스트 리뷰로 설정되었습니다.'
      );
      loadReviews();
    } else {
      alert(result.error || '설정에 실패했습니다.');
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
              <h1 className="text-xl font-bold text-white">리뷰 관리</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 필터 */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-semibold text-gray-300">
              상품 필터:
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            >
              <option value="all">전체 상품</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            <div className="flex-1"></div>
            <div className="text-sm text-gray-400">
              총 <span className="text-primary-400 font-semibold">{reviews.length}</span>개 리뷰
            </div>
          </div>
        </div>

        {/* 리뷰 목록 */}
        {reviewsLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-400">로딩 중...</p>
          </div>
        ) : reviews.length === 0 ? (
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p className="text-gray-400 text-lg mb-2">리뷰가 없습니다</p>
            <p className="text-gray-500 text-sm">
              고객들이 작성한 리뷰가 여기에 표시됩니다.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => {
              const reviewDate = new Date(review.created_at).toLocaleDateString(
                'ko-KR'
              );

              return (
                <div
                  key={review.id}
                  className={`bg-gray-800 rounded-xl p-6 border ${
                    review.is_best
                      ? 'border-yellow-500/50'
                      : 'border-gray-700'
                  } hover:border-gray-600 transition-colors`}
                >
                  {/* 상단 정보 */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-700">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {review.product?.name}
                        </h3>
                        {review.is_best && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">
                            ⭐ 베스트 리뷰
                          </span>
                        )}
                        {review.is_verified_purchase && (
                          <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full">
                            ✓ 구매 확인
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{review.user?.name}</span>
                        <span>•</span>
                        <span>{review.user?.email}</span>
                        <span>•</span>
                        <span>{reviewDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? 'text-yellow-400'
                              : 'text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* 리뷰 내용 */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">
                      {review.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {review.content}
                    </p>
                  </div>

                  {/* 이미지 */}
                  {review.images && review.images.length > 0 && (
                    <div className="mb-4 grid grid-cols-5 gap-2">
                      {review.images.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`리뷰 이미지 ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => window.open(url, '_blank')}
                        />
                      ))}
                    </div>
                  )}

                  {/* 액션 버튼 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        도움됨 {review.helpful_count}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleToggleBest(review.id, review.is_best)
                        }
                        className={`px-4 py-2 ${
                          review.is_best
                            ? 'bg-gray-600 hover:bg-gray-700'
                            : 'bg-yellow-600 hover:bg-yellow-700'
                        } text-white text-sm font-semibold rounded-lg transition-colors`}
                      >
                        {review.is_best ? '베스트 해제' : '베스트 설정'}
                      </button>
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        삭제
                      </button>
                    </div>
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
