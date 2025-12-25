import { supabase } from './supabase';
import { DbOrder, Order, CartItem } from './types';

// 주문 생성
export async function createOrder(orderData: {
  orderId: string;
  userId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
}): Promise<{ success: boolean; error?: string; order?: DbOrder }> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          order_id: orderData.orderId,
          user_id: orderData.userId || null,
          customer_name: orderData.customerName,
          customer_email: orderData.customerEmail,
          customer_phone: orderData.customerPhone,
          items: orderData.items,
          total_amount: orderData.totalAmount,
          status: 'pending',
          payment_method: orderData.paymentMethod,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('주문 생성 에러:', error);
      return { success: false, error: '주문 생성에 실패했습니다.' };
    }

    return { success: true, order: data as DbOrder };
  } catch (error: any) {
    console.error('주문 생성 에러:', error);
    return { success: false, error: '주문 생성 중 오류가 발생했습니다.' };
  }
}

// 주문 상태 업데이트
export async function updateOrderStatus(
  orderId: string,
  status: 'pending' | 'paid' | 'completed' | 'failed' | 'cancelled'
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('orders')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('order_id', orderId);

    if (error) {
      console.error('주문 상태 업데이트 에러:', error);
      return { success: false, error: '주문 상태 업데이트에 실패했습니다.' };
    }

    return { success: true };
  } catch (error: any) {
    console.error('주문 상태 업데이트 에러:', error);
    return { success: false, error: '주문 상태 업데이트 중 오류가 발생했습니다.' };
  }
}

// 사용자별 주문 목록 조회
export async function getUserOrders(
  userId: string
): Promise<{ success: boolean; orders?: DbOrder[]; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('주문 목록 조회 에러:', error);
      return { success: false, error: '주문 목록 조회에 실패했습니다.' };
    }

    return { success: true, orders: data as DbOrder[] };
  } catch (error: any) {
    console.error('주문 목록 조회 에러:', error);
    return { success: false, error: '주문 목록 조회 중 오류가 발생했습니다.' };
  }
}

// 이메일로 주문 목록 조회 (비회원 주문 포함)
export async function getOrdersByEmail(
  email: string
): Promise<{ success: boolean; orders?: DbOrder[]; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('customer_email', email)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('주문 목록 조회 에러:', error);
      return { success: false, error: '주문 목록 조회에 실패했습니다.' };
    }

    return { success: true, orders: data as DbOrder[] };
  } catch (error: any) {
    console.error('주문 목록 조회 에러:', error);
    return { success: false, error: '주문 목록 조회 중 오류가 발생했습니다.' };
  }
}

// 주문 상세 조회
export async function getOrderById(
  orderId: string
): Promise<{ success: boolean; order?: DbOrder; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('order_id', orderId)
      .single();

    if (error) {
      console.error('주문 조회 에러:', error);
      return { success: false, error: '주문을 찾을 수 없습니다.' };
    }

    return { success: true, order: data as DbOrder };
  } catch (error: any) {
    console.error('주문 조회 에러:', error);
    return { success: false, error: '주문 조회 중 오류가 발생했습니다.' };
  }
}

// 주문 통계 (사용자별)
export async function getUserOrderStats(userId: string): Promise<{
  success: boolean;
  stats?: {
    totalOrders: number;
    completedOrders: number;
    totalSpent: number;
  };
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('status, total_amount')
      .eq('user_id', userId);

    if (error) {
      console.error('주문 통계 조회 에러:', error);
      return { success: false, error: '주문 통계 조회에 실패했습니다.' };
    }

    const totalOrders = data.length;
    const completedOrders = data.filter((o) => o.status === 'completed').length;
    const totalSpent = data.reduce((sum, o) => sum + o.total_amount, 0);

    return {
      success: true,
      stats: {
        totalOrders,
        completedOrders,
        totalSpent,
      },
    };
  } catch (error: any) {
    console.error('주문 통계 조회 에러:', error);
    return { success: false, error: '주문 통계 조회 중 오류가 발생했습니다.' };
  }
}

// 주문 상태 레이블
export function getOrderStatusLabel(
  status: string
): { label: string; color: string } {
  switch (status) {
    case 'pending':
      return { label: '결제 대기', color: 'text-yellow-600 bg-yellow-100' };
    case 'paid':
      return { label: '결제 완료', color: 'text-blue-600 bg-blue-100' };
    case 'completed':
      return { label: '완료', color: 'text-green-600 bg-green-100' };
    case 'failed':
      return { label: '결제 실패', color: 'text-red-600 bg-red-100' };
    case 'cancelled':
      return { label: '취소됨', color: 'text-gray-600 bg-gray-100' };
    default:
      return { label: '알 수 없음', color: 'text-gray-600 bg-gray-100' };
  }
}
