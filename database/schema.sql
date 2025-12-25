-- K-Saju Shop Database Schema
-- Supabase PostgreSQL

-- ============================================
-- 1. Users Table (사용자)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users 테이블 인덱스
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

-- ============================================
-- 2. Orders Table (주문)
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id VARCHAR(50) UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  customer_name VARCHAR(100) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  items JSONB NOT NULL,
  total_amount INTEGER NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'completed', 'failed', 'cancelled')),
  payment_method VARCHAR(50),
  birth_info JSONB,
  partner_info JSONB,
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders 테이블 인덱스
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- ============================================
-- 3. Updated_at Trigger Functions
-- ============================================

-- Users 테이블 updated_at 자동 업데이트
CREATE OR REPLACE FUNCTION update_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at_trigger
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_users_updated_at();

-- Orders 테이블 updated_at 자동 업데이트
CREATE OR REPLACE FUNCTION update_orders_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER orders_updated_at_trigger
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION update_orders_updated_at();

-- ============================================
-- 4. Row Level Security (RLS) Policies
-- ============================================

-- Users 테이블 RLS 활성화
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 사용자는 자신의 정보만 조회 가능
CREATE POLICY users_select_own ON users
  FOR SELECT
  USING (auth.uid()::text = id::text);

-- 사용자는 자신의 정보만 업데이트 가능
CREATE POLICY users_update_own ON users
  FOR UPDATE
  USING (auth.uid()::text = id::text);

-- Orders 테이블 RLS 활성화
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- 사용자는 자신의 주문만 조회 가능
CREATE POLICY orders_select_own ON orders
  FOR SELECT
  USING (
    auth.uid()::text = user_id::text 
    OR 
    customer_email = (SELECT email FROM users WHERE id::text = auth.uid()::text)
  );

-- 누구나 주문 생성 가능 (비회원 주문 허용)
CREATE POLICY orders_insert_all ON orders
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- 5. Sample Data (개발용)
-- ============================================

-- 테스트 사용자 (비밀번호: test1234)
-- 실제 운영 환경에서는 제거하세요!
INSERT INTO users (email, password_hash, name, phone) 
VALUES (
  'test@example.com',
  '$2a$10$XZPv.yRBN3aXv3g8yKJkQeU9N8VxqVT9kF7ZKdVxCj5R2FT8R8D6O',
  '테스트 사용자',
  '010-1234-5678'
) ON CONFLICT (email) DO NOTHING;

-- ============================================
-- 6. Helper Views
-- ============================================

-- 사용자별 주문 통계 뷰
CREATE OR REPLACE VIEW user_order_stats AS
SELECT 
  u.id as user_id,
  u.email,
  u.name,
  COUNT(o.id) as total_orders,
  SUM(o.total_amount) as total_spent,
  MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.email, u.name;

-- 최근 주문 뷰
CREATE OR REPLACE VIEW recent_orders AS
SELECT 
  o.id,
  o.order_id,
  o.customer_name,
  o.customer_email,
  o.total_amount,
  o.status,
  o.created_at,
  u.name as user_name
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
ORDER BY o.created_at DESC
LIMIT 100;

-- ============================================
-- 7. Comments (문서화)
-- ============================================

COMMENT ON TABLE users IS '사용자 계정 정보';
COMMENT ON COLUMN users.id IS '사용자 고유 ID (UUID)';
COMMENT ON COLUMN users.email IS '이메일 (로그인 ID)';
COMMENT ON COLUMN users.password_hash IS '비밀번호 해시 (bcrypt)';
COMMENT ON COLUMN users.name IS '사용자 이름';
COMMENT ON COLUMN users.phone IS '전화번호 (선택)';

COMMENT ON TABLE orders IS '주문 정보';
COMMENT ON COLUMN orders.id IS '주문 고유 ID (UUID)';
COMMENT ON COLUMN orders.order_id IS '주문 번호 (ORDER-timestamp)';
COMMENT ON COLUMN orders.user_id IS '사용자 ID (회원 주문의 경우)';
COMMENT ON COLUMN orders.items IS '주문 상품 목록 (JSON)';
COMMENT ON COLUMN orders.status IS '주문 상태 (pending/paid/completed/failed/cancelled)';
COMMENT ON COLUMN orders.birth_info IS '생년월일 정보 (사주 분석용)';
COMMENT ON COLUMN orders.partner_info IS '파트너 정보 (궁합 분석용)';
COMMENT ON COLUMN orders.pdf_url IS 'PDF 다운로드 URL';

-- ============================================
-- 8. Grants (권한 설정)
-- ============================================

-- anon 역할에 읽기 권한 부여 (비회원 주문용)
GRANT SELECT ON users TO anon;
GRANT INSERT, SELECT ON orders TO anon;

-- authenticated 역할에 CRUD 권한 부여
GRANT ALL ON users TO authenticated;
GRANT ALL ON orders TO authenticated;
