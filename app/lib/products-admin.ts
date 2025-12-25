import { supabase } from './supabase';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  original_price?: number;
  category: 'basic' | 'premium' | 'fatemate';
  features: string[];
  icon?: string;
  badge?: string;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

// 모든 상품 조회 (관리자용 - 비활성 포함)
export async function getAllProducts(): Promise<{
  success: boolean;
  products?: Product[];
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) throw error;

    return {
      success: true,
      products: data,
    };
  } catch (error: any) {
    console.error('Get all products error:', error);
    return {
      success: false,
      error: '상품 목록 조회 중 오류가 발생했습니다.',
    };
  }
}

// 활성화된 상품만 조회 (일반 사용자용)
export async function getActiveProducts(): Promise<{
  success: boolean;
  products?: Product[];
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;

    return {
      success: true,
      products: data,
    };
  } catch (error: any) {
    console.error('Get active products error:', error);
    return {
      success: false,
      error: '상품 목록 조회 중 오류가 발생했습니다.',
    };
  }
}

// 단일 상품 조회
export async function getProductById(
  id: string
): Promise<{
  success: boolean;
  product?: Product;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    return {
      success: true,
      product: data,
    };
  } catch (error: any) {
    console.error('Get product by id error:', error);
    return {
      success: false,
      error: '상품 조회 중 오류가 발생했습니다.',
    };
  }
}

// 상품 생성 (관리자)
export async function createProduct(
  product: Omit<Product, 'created_at' | 'updated_at'>
): Promise<{
  success: boolean;
  product?: Product;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      product: data,
    };
  } catch (error: any) {
    console.error('Create product error:', error);
    return {
      success: false,
      error: '상품 생성 중 오류가 발생했습니다.',
    };
  }
}

// 상품 수정 (관리자)
export async function updateProduct(
  id: string,
  updates: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>
): Promise<{
  success: boolean;
  product?: Product;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      product: data,
    };
  } catch (error: any) {
    console.error('Update product error:', error);
    return {
      success: false,
      error: '상품 수정 중 오류가 발생했습니다.',
    };
  }
}

// 상품 삭제 (관리자)
export async function deleteProduct(
  id: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) throw error;

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Delete product error:', error);
    return {
      success: false,
      error: '상품 삭제 중 오류가 발생했습니다.',
    };
  }
}

// 상품 활성화/비활성화 토글
export async function toggleProductActive(
  id: string,
  isActive: boolean
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const { error } = await supabase
      .from('products')
      .update({ is_active: isActive })
      .eq('id', id);

    if (error) throw error;

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Toggle product active error:', error);
    return {
      success: false,
      error: '상품 상태 변경 중 오류가 발생했습니다.',
    };
  }
}

// 상품 순서 변경
export async function updateProductOrder(
  id: string,
  sortOrder: number
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const { error } = await supabase
      .from('products')
      .update({ sort_order: sortOrder })
      .eq('id', id);

    if (error) throw error;

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Update product order error:', error);
    return {
      success: false,
      error: '상품 순서 변경 중 오류가 발생했습니다.',
    };
  }
}

// 카테고리별 상품 조회
export async function getProductsByCategory(
  category: string
): Promise<{
  success: boolean;
  products?: Product[];
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;

    return {
      success: true,
      products: data,
    };
  } catch (error: any) {
    console.error('Get products by category error:', error);
    return {
      success: false,
      error: '상품 목록 조회 중 오류가 발생했습니다.',
    };
  }
}
