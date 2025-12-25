'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  features: string[];
  pages: number;
  category: 'basic' | 'premium' | 'compatibility';
  icon: string;
  badge: string | null;
  isActive: boolean;
  popular?: boolean;
  sortOrder: number;
}

const ICONS = ['📊', '⭐', '💎', '👑', '✨', '🏆', '💕', '💑', '🤝', '💞', '🔮', '🌟', '🎯', '🧠', '🌙', '⚡'];
const CATEGORIES = [
  { value: 'basic', label: '기본 분석' },
  { value: 'premium', label: '프리미엄' },
  { value: 'compatibility', label: '궁합 분석' }
];

export default function StudioProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewProduct, setIsNewProduct] = useState(false);

  // 상품 목록 불러오기
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('상품 목록 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 새 상품 추가
  const handleNewProduct = () => {
    setEditingProduct({
      id: '',
      name: '',
      description: '',
      price: 0,
      originalPrice: null,
      features: [''],
      pages: 0,
      category: 'basic',
      icon: '📊',
      badge: null,
      isActive: true,
      popular: false,
      sortOrder: products.length + 1
    });
    setIsNewProduct(true);
    setIsModalOpen(true);
  };

  // 상품 수정
  const handleEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setIsNewProduct(false);
    setIsModalOpen(true);
  };

  // 상품 저장
  const handleSave = async () => {
    if (!editingProduct) return;

    try {
      const url = isNewProduct 
        ? '/api/admin/products'
        : `/api/admin/products/${editingProduct.id}`;
      
      const method = isNewProduct ? 'POST' : 'PUT';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProduct)
      });
      
      const data = await res.json();
      
      if (data.success) {
        alert(isNewProduct ? '상품이 추가되었습니다!' : '상품이 수정되었습니다!');
        setIsModalOpen(false);
        fetchProducts();
      } else {
        alert('저장 실패: ' + data.error);
      }
    } catch (error) {
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  // 상품 삭제
  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE'
      });
      
      const data = await res.json();
      
      if (data.success) {
        alert('상품이 삭제되었습니다.');
        fetchProducts();
      } else {
        alert('삭제 실패: ' + data.error);
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 활성화 토글
  const handleToggleActive = async (product: Product) => {
    try {
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product, isActive: !product.isActive })
      });
      
      if ((await res.json()).success) {
        fetchProducts();
      }
    } catch (error) {
      alert('상태 변경 실패');
    }
  };

  // 기능 추가/삭제
  const handleFeatureChange = (index: number, value: string) => {
    if (!editingProduct) return;
    const newFeatures = [...editingProduct.features];
    newFeatures[index] = value;
    setEditingProduct({ ...editingProduct, features: newFeatures });
  };

  const addFeature = () => {
    if (!editingProduct) return;
    setEditingProduct({ 
      ...editingProduct, 
      features: [...editingProduct.features, ''] 
    });
  };

  const removeFeature = (index: number) => {
    if (!editingProduct) return;
    const newFeatures = editingProduct.features.filter((_, i) => i !== index);
    setEditingProduct({ ...editingProduct, features: newFeatures });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">상품 관리</h1>
            <p className="text-gray-600 mt-1">상품을 추가, 수정, 삭제할 수 있습니다.</p>
          </div>
          <button
            onClick={handleNewProduct}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            + 새 상품 추가
          </button>
        </div>

        {/* 상품 목록 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">상품</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">카테고리</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">가격</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">페이지</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">상태</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{product.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description.slice(0, 30)}...</div>
                      </div>
                      {product.badge && (
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.category === 'basic' ? 'bg-blue-100 text-blue-800' :
                      product.category === 'premium' ? 'bg-purple-100 text-purple-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {CATEGORIES.find(c => c.value === product.category)?.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold">{product.price.toLocaleString()}원</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">
                          {product.originalPrice.toLocaleString()}원
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.pages}p</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleActive(product)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {product.isActive ? '활성' : '비활성'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 수정/추가 모달 */}
        {isModalOpen && editingProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">
                  {isNewProduct ? '새 상품 추가' : '상품 수정'}
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* 기본 정보 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">상품명 *</label>
                    <input
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="K-Saju 프리미엄"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID (영문)</label>
                    <input
                      type="text"
                      value={editingProduct.id}
                      onChange={(e) => setEditingProduct({ ...editingProduct, id: e.target.value })}
                      disabled={!isNewProduct}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                      placeholder="premium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
                  <textarea
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="MBTI와 사주의 완벽한 조합! 심층 자기분석"
                  />
                </div>

                {/* 가격 */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">판매가 *</label>
                    <input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">원가 (할인 전)</label>
                    <input
                      type="number"
                      value={editingProduct.originalPrice || ''}
                      onChange={(e) => setEditingProduct({ 
                        ...editingProduct, 
                        originalPrice: e.target.value ? Number(e.target.value) : null 
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="비워두면 할인 없음"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PDF 페이지 수</label>
                    <input
                      type="number"
                      value={editingProduct.pages}
                      onChange={(e) => setEditingProduct({ ...editingProduct, pages: Number(e.target.value) })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* 카테고리 & 아이콘 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
                    <select
                      value={editingProduct.category}
                      onChange={(e) => setEditingProduct({ 
                        ...editingProduct, 
                        category: e.target.value as Product['category'] 
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">아이콘</label>
                    <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
                      {ICONS.map(icon => (
                        <button
                          key={icon}
                          type="button"
                          onClick={() => setEditingProduct({ ...editingProduct, icon })}
                          className={`text-2xl p-1 rounded ${
                            editingProduct.icon === icon ? 'bg-blue-100 ring-2 ring-blue-500' : 'hover:bg-gray-100'
                          }`}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 뱃지 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">뱃지</label>
                  <input
                    type="text"
                    value={editingProduct.badge || ''}
                    onChange={(e) => setEditingProduct({ 
                      ...editingProduct, 
                      badge: e.target.value || null 
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="베스트셀러, 신규, 33% 할인 등"
                  />
                </div>

                {/* 기능 리스트 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">포함 기능</label>
                  <div className="space-y-2">
                    {editingProduct.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="기능 입력..."
                        />
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                        >
                          삭제
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addFeature}
                      className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500"
                    >
                      + 기능 추가
                    </button>
                  </div>
                </div>

                {/* 옵션 */}
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editingProduct.isActive}
                      onChange={(e) => setEditingProduct({ ...editingProduct, isActive: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm">활성화</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editingProduct.popular || false}
                      onChange={(e) => setEditingProduct({ ...editingProduct, popular: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm">인기 상품</span>
                  </label>
                </div>
              </div>

              {/* 버튼 */}
              <div className="p-6 border-t flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
