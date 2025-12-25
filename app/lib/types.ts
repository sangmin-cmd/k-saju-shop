// 상품 타입
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  pages: number;
  category: 'basic' | 'premium' | 'compatibility';
  image: string;
  badge?: string;
  popular?: boolean;
}

// 장바구니 아이템
export interface CartItem {
  product: Product;
  quantity: number;
}

// 주문 정보
export interface Order {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'completed' | 'failed';
  paymentMethod: string;
  createdAt: Date;
  birthInfo?: {
    year: number;
    month: number;
    day: number;
    hour: number;
    name: string;
  };
  partnerInfo?: {
    year: number;
    month: number;
    day: number;
    hour: number;
    name: string;
  };
}

// 결제 정보
export interface PaymentInfo {
  orderId: string;
  orderName: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  successUrl: string;
  failUrl: string;
}

// 사용자 타입
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

// 회원가입 폼 데이터
export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
  agreeMarketing?: boolean;
}

// 로그인 폼 데이터
export interface SignInFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// 데이터베이스 사용자 (Supabase)
export interface DbUser {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

// 주문 (데이터베이스)
export interface DbOrder {
  id: string;
  order_id: string;
  user_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  items: CartItem[];
  total_amount: number;
  status: 'pending' | 'paid' | 'completed' | 'failed' | 'cancelled';
  payment_method: string;
  created_at: string;
  updated_at: string;
  birth_info?: any;
  partner_info?: any;
  pdf_url?: string;
}
