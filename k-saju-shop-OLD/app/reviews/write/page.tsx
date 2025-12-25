'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';
import {
  createReview,
  uploadReviewImage,
  canWriteReview,
} from '../../lib/reviews';
import { getProductById } from '../../lib/products-admin';
import Link from 'next/link';

export default function WriteReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading: authLoading } = useAuth();

  const orderId = searchParams.get('order');
  const productId = searchParams.get('product');

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [canWrite, setCanWrite] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    rating: 5,
    title: '',
    content: '',
  });
  const [images, setImages] = useState<string[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push('/login?redirect=/reviews/write');
        return;
      }

      if (!orderId || !productId) {
        router.push('/mypage/orders');
        return;
      }

      checkCanWrite();
      loadProduct();
    }
  }, [authLoading, user, orderId, productId]);

  const checkCanWrite = async () => {
    if (!user || !orderId || !productId) return;

    const result = await canWriteReview(user.id, orderId, productId);

    if (result.success && !result.canWrite) {
      alert('이미 리뷰를 작성하셨습니다.');
      router.push('/mypage/orders');
      return;
    }

    setCanWrite(true);
    setLoading(false);
  };

  const loadProduct = async () => {
    if (!productId) return;

    const result = await getProductById(productId);

    if (result.success && result.product) {
      setProduct(result.product);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !user) return;

    if (images.length + files.length > 5) {
      alert('이미지는 최대 5장까지 업로드 가능합니다.');
      return;
    }

    setUploadingImages(true);

    const uploadPromises = Array.from(files).map((file) =>
      uploadReviewImage(user.id, file)
    );

    const results = await Promise.all(uploadPromises);

    const successfulUrls = results
      .filter((r) => r.success && r.url)
      .map((r) => r.url!);

    setImages([...images, ...successfulUrls]);
    setUploadingImages(false);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !orderId || !productId) return;

    if (!formData.title.trim() || !formData.content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    setSaving(true);

    const result = await createReview({
      user_id: user.id,
      product_id: productId,
      order_id: orderId,
      rating: formData.rating,
      title: formData.title.trim(),
      content: formData.content.trim(),
      images,
    });

    if (result.success) {
      alert('리뷰가 작성되었습니다!');
      router.push('/mypage/orders');
    } else {
      alert(result.error || '리뷰 작성에 실패했습니다.');
    }

    setSaving(false);
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

  if (!canWrite) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/mypage/orders"
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
            주문 목록으로
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">리뷰 작성</h1>
          <p className="text-gray-400">
            구매하신 상품에 대한 솔직한 후기를 남겨주세요
          </p>
        </div>

        {/* 상품 정보 */}
        {product && (
          <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{product.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* 리뷰 폼 */}
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          {/* 별점 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3 text-gray-300">
              별점 *
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none transform hover:scale-110 transition-transform"
                >
                  <svg
                    className={`w-10 h-10 ${
                      star <= formData.rating
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
              <span className="ml-3 text-lg font-semibold text-yellow-400">
                {formData.rating}점
              </span>
            </div>
          </div>

          {/* 제목 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              제목 *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="리뷰 제목을 입력하세요"
              maxLength={100}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.title.length}/100
            </p>
          </div>

          {/* 내용 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              상세 리뷰 *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              placeholder="상품에 대한 솔직한 후기를 남겨주세요&#10;&#10;• 상품의 장점과 단점&#10;• 실제 사용 경험&#10;• 다른 분들께 추천하는 이유"
              rows={8}
              maxLength={1000}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.content.length}/1000
            </p>
          </div>

          {/* 이미지 업로드 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              사진 첨부 (선택, 최대 5장)
            </label>
            <div className="space-y-3">
              {/* 이미지 미리보기 */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {images.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`리뷰 이미지 ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 p-1 bg-red-600 hover:bg-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* 업로드 버튼 */}
              {images.length < 5 && (
                <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                  <div className="text-center">
                    {uploadingImages ? (
                      <div className="text-gray-400">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-2"></div>
                        <p className="text-sm">업로드 중...</p>
                      </div>
                    ) : (
                      <div className="text-gray-400">
                        <svg
                          className="w-8 h-8 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <p className="text-sm">사진 추가</p>
                        <p className="text-xs text-gray-500 mt-1">
                          JPG, PNG (최대 5MB)
                        </p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={uploadingImages}
                  />
                </label>
              )}
            </div>
          </div>

          {/* 안내 */}
          <div className="mb-6 p-4 bg-blue-900/30 border border-blue-700/50 rounded-lg">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-blue-300 text-sm font-semibold mb-1">
                  리뷰 작성 안내
                </p>
                <ul className="text-blue-200 text-xs space-y-1">
                  <li>• 작성하신 리뷰는 다른 고객님들에게 공개됩니다</li>
                  <li>• 상품과 무관한 내용은 관리자에 의해 삭제될 수 있습니다</li>
                  <li>• 베스트 리뷰로 선정되면 혜택이 제공됩니다</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-3">
            <Link
              href="/mypage/orders"
              className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors text-center"
            >
              취소
            </Link>
            <button
              type="submit"
              disabled={saving || uploadingImages}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? '작성 중...' : '리뷰 등록'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
