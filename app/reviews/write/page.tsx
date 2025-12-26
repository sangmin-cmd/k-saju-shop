'use client';

import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: '김**',
    product: 'K-Saju 프리미엄',
    rating: 5,
    date: '2024.12.20',
    content: '사주와 MBTI를 같이 분석해주니까 진짜 신기하게 맞더라고요. 특히 올해 하반기 조심해야 할 시기를 알려줘서 큰 도움이 됐어요. PDF 퀄리티도 좋고 내용도 알차요!',
    verified: true
  },
  {
    id: 2,
    name: '이**',
    product: 'FateMate 완전판',
    rating: 5,
    date: '2024.12.19',
    content: '남자친구랑 궁합 봤는데 우리가 왜 이런 부분에서 맨날 싸우는지 이해가 됐어요 ㅋㅋ 서로 보완해야 할 점을 알게 되어서 좋았습니다.',
    verified: true
  },
  {
    id: 3,
    name: '박**',
    product: 'K-Saju 기본',
    rating: 4,
    date: '2024.12.18',
    content: '가격 대비 내용이 괜찮아요. 다만 좀 더 자세한 분석이 필요하면 프리미엄을 추천드려요. 기본도 충분히 참고할 만합니다.',
    verified: true
  },
  {
    id: 4,
    name: '최**',
    product: 'K-Saju 프리미엄',
    rating: 5,
    date: '2024.12.17',
    content: '이직 고민 중이었는데 올해 말보다 내년 초가 좋다고 해서 조금 더 기다려보려고요. MBTI랑 연결해서 설명해주니까 더 와닿았어요.',
    verified: true
  },
  {
    id: 5,
    name: '정**',
    product: 'FateMate 기본',
    rating: 5,
    date: '2024.12.15',
    content: '결혼 전에 궁합 한번 보고 싶었는데, 좋은 궁합이라고 나와서 안심됐어요. 두 사람의 성향 분석도 정확했습니다.',
    verified: true
  },
  {
    id: 6,
    name: '한**',
    product: 'K-Saju 기본',
    rating: 4,
    date: '2024.12.14',
    content: '재미로 해봤는데 생각보다 잘 맞아서 놀랐어요. 친구들한테도 추천했습니다.',
    verified: true
  }
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.product.includes(filter));

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">고객 후기</h1>
          <p className="text-gray-600">실제 이용 고객님들의 생생한 후기입니다.</p>
        </div>

        {/* 평점 요약 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600">{averageRating}</div>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${star <= Math.round(Number(averageRating)) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mt-2">{reviews.length}개의 리뷰</p>
            </div>
          </div>
        </div>

        {/* 필터 */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              filter === 'all' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter('K-Saju')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              filter === 'K-Saju' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            K-Saju
          </button>
          <button
            onClick={() => setFilter('FateMate')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              filter === 'FateMate' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            FateMate
          </button>
        </div>

        {/* 리뷰 목록 */}
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{review.name}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                        구매인증
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{review.product}</span>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>* 실제 구매 고객의 후기만 게시됩니다.</p>
          <p>* 개인정보 보호를 위해 이름은 일부 가려져 표시됩니다.</p>
        </div>
      </div>
    </div>
  );
}
