'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../components/AuthProvider';
import { useAdmin } from '../../components/AdminProvider';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  toggleProductActive,
  Product,
} from '../../lib/products-admin';

export default function AdminProductsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin: isAdminUser, loading: adminLoading } = useAdmin();

  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    slug: '',
    description: '',
    price: 0,
    original_price: 0,
    category: 'basic' as 'basic' | 'premium' | 'fatemate',
    features: [''],
    icon: '📊',
    badge: '',
    is_active: true,
    sort_order: 0,
  });
  const [saving, setSaving] = useState(false);

  // 권한 확인
  useEffect(() => {
    if (!authLoading && !adminLoading) {
      if (!user || !isAdminUser) {
        router.push('/admin/login');
      }
    }
  }, [user, isAdminUser, authLoading, adminLoading, router]);

  // 상품 로드
  useEffect(() => {
    if (user && isAdminUser) {
      loadProducts();
    }
  }, [user, isAdminUser]);

  const loadProducts = async () => {
    setProductsLoading(true);
    const result = await getAllProducts();

    if (result.success && result.products) {
      setProducts(result.products);
    }
    setProductsLoading(false);
  };

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        original_price: product.original_price || 0,
        category: product.category,
        features: product.features,
        icon: product.icon || '📊',
        badge: product.badge || '',
        is_active: product.is_active,
        sort_order: product.sort_order,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        id: '',
        name: '',
        slug: '',
        description: '',
        price: 0,
        original_price: 0,
        category: 'basic',
        features: [''],
        icon: '📊',
        badge: '',
        is_active: true,
        sort_order: products.length + 1,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleSave = async () => {
    // 유효성 검사
    if (!formData.id || !formData.name || !formData.slug || !formData.price) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    setSaving(true);

    // features 필터링 (빈 문자열 제거)
    const filteredFeatures = formData.features.filter((f) => f.trim() !== '');

    const productData = {
      id: formData.id,
      name: formData.name,
      slug: formData.slug,
      description: formData.description,
      price: Number(formData.price),
      original_price: formData.original_price ? Number(formData.original_price) : undefined,
      category: formData.category,
      features: filteredFeatures,
      icon: formData.icon,
      badge: formData.badge || undefined,
      is_active: formData.is_active,
      sort_order: Number(formData.sort_order),
    };

    let result;
    if (editingProduct) {
      // 수정
      result = await updateProduct(formData.id, productData);
    } else {
      // 생성
      result = await createProduct(productData);
    }

    if (result.success) {
      alert(editingProduct ? '상품이 수정되었습니다.' : '상품이 추가되었습니다.');
      handleCloseModal();
      loadProducts();
    } else {
      alert(result.error || '저장에 실패했습니다.');
    }

    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말로 이 상품을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
      return;
    }

    const result = await deleteProduct(id);

    if (result.success) {
      alert('상품이 삭제되었습니다.');
      loadProducts();
    } else {
      alert(result.error || '삭제에 실패했습니다.');
    }
  };

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    const result = await toggleProductActive(id, !currentActive);

    if (result.success) {
      loadProducts();
    } else {
      alert(result.error || '상태 변경에 실패했습니다.');
    }
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
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
              <h1 className="text-xl font-bold text-white">상품 관리</h1>
            </div>

            <button
              onClick={() => handleOpenModal()}
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              + 새 상품 추가
            </button>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {productsLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-400">로딩 중...</p>
          </div>
        ) : products.length === 0 ? (
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <p className="text-gray-400 text-lg mb-2">등록된 상품이 없습니다</p>
            <p className="text-gray-500 text-sm mb-4">
              첫 번째 상품을 추가해보세요.
            </p>
            <button
              onClick={() => handleOpenModal()}
              className="btn-primary"
            >
              상품 추가하기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-gray-800 rounded-xl p-6 border ${
                  product.is_active
                    ? 'border-gray-700 hover:border-gray-600'
                    : 'border-red-900/50 opacity-60'
                } transition-all`}
              >
                {/* 상단 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{product.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {product.name}
                      </h3>
                      {product.badge && (
                        <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded mt-1">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleActive(product.id, product.is_active)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.is_active
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {product.is_active ? '활성' : '비활성'}
                  </button>
                </div>

                {/* 가격 */}
                <div className="mb-4">
                  {product.original_price && product.original_price > 0 && (
                    <p className="text-sm text-gray-500 line-through">
                      {product.original_price.toLocaleString()}원
                    </p>
                  )}
                  <p className="text-2xl font-bold text-primary-400">
                    {product.price.toLocaleString()}원
                  </p>
                </div>

                {/* 설명 */}
                <p className="text-sm text-gray-400 mb-4">
                  {product.description}
                </p>

                {/* 특징 */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">
                    특징 ({product.features.length}개)
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-gray-600">
                        + {product.features.length - 3}개 더보기
                      </li>
                    )}
                  </ul>
                </div>

                {/* 액션 버튼 */}
                <div className="flex gap-2 pt-4 border-t border-gray-700">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingProduct ? '상품 수정' : '새 상품 추가'}
              </h2>
              <button
                onClick={handleCloseModal}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* ID */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  상품 ID *
                </label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  placeholder="basic, premium, fatemate-basic 등"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  disabled={!!editingProduct}
                />
              </div>

              {/* 이름 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  상품명 *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="K-Saju 기본"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  placeholder="basic"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              {/* 설명 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  설명 *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="상품 설명을 입력하세요"
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              {/* 가격 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    가격 *
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: Number(e.target.value) })
                    }
                    placeholder="9900"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    정가 (할인시)
                  </label>
                  <input
                    type="number"
                    value={formData.original_price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        original_price: Number(e.target.value),
                      })
                    }
                    placeholder="19900"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* 카테고리 & 아이콘 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    카테고리 *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  >
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="fatemate">FateMate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    아이콘
                  </label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) =>
                      setFormData({ ...formData, icon: e.target.value })
                    }
                    placeholder="📊"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* 뱃지 & 정렬순서 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    뱃지 (선택)
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) =>
                      setFormData({ ...formData, badge: e.target.value })
                    }
                    placeholder="인기, 베스트"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    정렬순서
                  </label>
                  <input
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sort_order: Number(e.target.value),
                      })
                    }
                    placeholder="1"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* 특징 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-300">
                    상품 특징
                  </label>
                  <button
                    onClick={addFeature}
                    className="text-sm text-primary-400 hover:text-primary-300"
                  >
                    + 추가
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => updateFeature(index, e.target.value)}
                        placeholder="특징을 입력하세요"
                        className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                      />
                      <button
                        onClick={() => removeFeature(index)}
                        className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 활성화 */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) =>
                    setFormData({ ...formData, is_active: e.target.checked })
                  }
                  className="w-5 h-5"
                />
                <label htmlFor="is_active" className="text-sm text-gray-300">
                  상품 활성화 (체크 해제 시 숨김)
                </label>
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {saving ? '저장 중...' : editingProduct ? '수정' : '추가'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
