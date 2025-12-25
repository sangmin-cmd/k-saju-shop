import { supabase } from './supabase';

// 관리자 이메일 목록 (환경변수로 관리 권장)
const ADMIN_EMAILS = [
  'admin@humaninsight.co.kr',
  'contact@humaninsight.co.kr',
  // 추가 관리자 이메일을 여기에 추가
];

// 관리자 여부 확인
export function isAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

// 관리자 로그인
export async function adminSignIn(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string; isAdmin?: boolean }> {
  try {
    // 이메일이 관리자인지 먼저 확인
    if (!isAdmin(email)) {
      return { 
        success: false, 
        error: '관리자 권한이 없습니다.',
        isAdmin: false 
      };
    }

    // Supabase에서 사용자 확인
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      return { 
        success: false, 
        error: '사용자를 찾을 수 없습니다.',
        isAdmin: false 
      };
    }

    // 비밀번호 확인 (auth.ts의 signIn 사용)
    const { signIn } = await import('./auth');
    const result = await signIn(email, password);

    if (!result.success) {
      return { 
        success: false, 
        error: result.error,
        isAdmin: false 
      };
    }

    return { 
      success: true, 
      isAdmin: true 
    };
  } catch (error: any) {
    console.error('Admin sign in error:', error);
    return { 
      success: false, 
      error: '로그인 중 오류가 발생했습니다.',
      isAdmin: false 
    };
  }
}

// 관리자 통계 조회
export async function getAdminStats(): Promise<{
  success: boolean;
  stats?: {
    totalUsers: number;
    totalOrders: number;
    totalRevenue: number;
    pendingOrders: number;
    completedOrders: number;
    todayOrders: number;
    todayRevenue: number;
  };
  error?: string;
}> {
  try {
    // 전체 사용자 수
    const { count: totalUsers, error: usersError } = await supabase
      .from('users')
      .select('*', { count: 'exact', head: true });

    if (usersError) throw usersError;

    // 전체 주문
    const { data: allOrders, error: ordersError } = await supabase
      .from('orders')
      .select('*');

    if (ordersError) throw ordersError;

    // 통계 계산
    const totalOrders = allOrders?.length || 0;
    const totalRevenue = allOrders?.reduce((sum, order) => sum + order.total_amount, 0) || 0;
    const pendingOrders = allOrders?.filter(o => o.status === 'pending').length || 0;
    const completedOrders = allOrders?.filter(o => o.status === 'completed').length || 0;

    // 오늘 주문
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayOrders = allOrders?.filter(o => {
      const orderDate = new Date(o.created_at);
      return orderDate >= today;
    }) || [];

    const todayOrderCount = todayOrders.length;
    const todayRevenue = todayOrders.reduce((sum, order) => sum + order.total_amount, 0);

    return {
      success: true,
      stats: {
        totalUsers: totalUsers || 0,
        totalOrders,
        totalRevenue,
        pendingOrders,
        completedOrders,
        todayOrders: todayOrderCount,
        todayRevenue,
      },
    };
  } catch (error: any) {
    console.error('Get admin stats error:', error);
    return {
      success: false,
      error: '통계 조회 중 오류가 발생했습니다.',
    };
  }
}

// 관리자 주문 목록 조회 (필터링 및 정렬)
export async function getAdminOrders(filters?: {
  status?: string;
  search?: string;
  sortBy?: 'created_at' | 'total_amount';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
}): Promise<{
  success: boolean;
  orders?: any[];
  error?: string;
}> {
  try {
    let query = supabase.from('orders').select('*');

    // 상태 필터
    if (filters?.status && filters.status !== 'all') {
      query = query.eq('status', filters.status);
    }

    // 검색 (주문번호, 이메일, 이름)
    if (filters?.search) {
      query = query.or(
        `order_id.ilike.%${filters.search}%,customer_email.ilike.%${filters.search}%,customer_name.ilike.%${filters.search}%`
      );
    }

    // 정렬
    const sortBy = filters?.sortBy || 'created_at';
    const sortOrder = filters?.sortOrder || 'desc';
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // 제한
    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    const { data, error } = await query;

    if (error) throw error;

    return {
      success: true,
      orders: data,
    };
  } catch (error: any) {
    console.error('Get admin orders error:', error);
    return {
      success: false,
      error: '주문 목록 조회 중 오류가 발생했습니다.',
    };
  }
}

// 관리자 사용자 목록 조회
export async function getAdminUsers(filters?: {
  search?: string;
  sortBy?: 'created_at' | 'name';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
}): Promise<{
  success: boolean;
  users?: any[];
  error?: string;
}> {
  try {
    let query = supabase.from('users').select('*');

    // 검색 (이메일, 이름)
    if (filters?.search) {
      query = query.or(
        `email.ilike.%${filters.search}%,name.ilike.%${filters.search}%`
      );
    }

    // 정렬
    const sortBy = filters?.sortBy || 'created_at';
    const sortOrder = filters?.sortOrder || 'desc';
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // 제한
    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    const { data, error } = await query;

    if (error) throw error;

    return {
      success: true,
      users: data,
    };
  } catch (error: any) {
    console.error('Get admin users error:', error);
    return {
      success: false,
      error: '사용자 목록 조회 중 오류가 발생했습니다.',
    };
  }
}

// 주문 상태 변경 (관리자)
export async function updateOrderStatusAdmin(
  orderId: string,
  status: 'pending' | 'paid' | 'completed' | 'failed' | 'cancelled'
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('orders')
      .update({ 
        status, 
        updated_at: new Date().toISOString() 
      })
      .eq('order_id', orderId);

    if (error) throw error;

    return { success: true };
  } catch (error: any) {
    console.error('Update order status error:', error);
    return {
      success: false,
      error: '주문 상태 변경 중 오류가 발생했습니다.',
    };
  }
}

// 주문 삭제 (관리자)
export async function deleteOrderAdmin(
  orderId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('order_id', orderId);

    if (error) throw error;

    return { success: true };
  } catch (error: any) {
    console.error('Delete order error:', error);
    return {
      success: false,
      error: '주문 삭제 중 오류가 발생했습니다.',
    };
  }
}
