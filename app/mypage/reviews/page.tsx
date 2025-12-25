'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../components/AuthProvider';
import { getUserReviews, deleteReview, type Review } from '../../lib/reviews';

export default function MyReviewsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push('/login?redirect=/mypage/reviews');
        return;
      }
      loadReviews();
    }
  }, [authLoading, user]);

  const loadReviews = async () => {
    if (!user) return;

    setLoading(true);
    const result = await getUserReviews(user.id);

    if (result.success && result.reviews) {
      setReviews(result.reviews);
    }
    setLoading(false);
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

  if (authLoading || loading) {
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
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/mypage"
            className="inline-flex items-center text-gray-400 hover:text-white mb-4"
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
            마이페이지로
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">내 리뷰</h1>
              <p className="text-gray-400">
                작성한 리뷰를 관리하고 수정할 수 있습니다
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary-400">
                {reviews.length}
              </p>
              <p className="text-sm text-gray-500">작성한 리뷰</p>
            </div>
          </div>
        </div>

        {/* 리뷰 목록 */}
        {reviews.length === 0 ? (
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
            <p className="text-gray-400 text-lg mb-2">
              아직 작성한 리뷰가 없습니다
            </p>
            <p className="text-gray-500 text-sm mb-6">
              구매하신 상품에 대한 리뷰를 작성해보세요
            </p>
            <Link
              href="/mypage/orders"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              주문 내역 보기
            </Link>
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
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  {/* 상품 정보 */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {review.product?.name}
                      </h3>
                      {review.is_best && (
                        <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">
                          ⭐ 베스트 리뷰
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
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
                      <p className="text-xs text-gray-500">{reviewDate}</p>
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
                    <div className="mb-4 grid grid-cols-4 gap-2">
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

                  {/* 통계 */}
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
                      {review.is_verified_purchase && (
                        <span className="flex items-center text-primary-400">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          구매 확인
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleDelete(review.id)}
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
