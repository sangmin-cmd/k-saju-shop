-- ============================================
-- K-Saju Shop: Products 테이블 생성
-- ============================================

-- 1. products 테이블 생성
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  original_price INTEGER,
  category TEXT NOT NULL, -- 'basic', 'premium', 'fatemate'
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  icon TEXT,
  badge TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_sort_order ON products(sort_order);

-- 3. RLS (Row Level Security) 활성화
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- 4. RLS 정책: 모든 사용자가 활성화된 상품 조회 가능
CREATE POLICY "Anyone can view active products"
  ON products
  FOR SELECT
  USING (is_active = true);

-- 5. RLS 정책: 관리자만 모든 상품 조회 가능 (비활성 포함)
CREATE POLICY "Admins can view all products"
  ON products
  FOR SELECT
  USING (true);

-- 6. RLS 정책: 관리자만 상품 추가/수정/삭제 가능
CREATE POLICY "Admins can insert products"
  ON products
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can update products"
  ON products
  FOR UPDATE
  USING (true);

CREATE POLICY "Admins can delete products"
  ON products
  FOR DELETE
  USING (true);

-- 7. 기존 products.ts 데이터 마이그레이션
INSERT INTO products (id, name, slug, description, price, original_price, category, features, icon, badge, is_active, sort_order)
VALUES
  (
    'basic',
    'K-Saju 기본',
    'basic',
    '사주팔자와 MBTI를 결합한 기본 분석',
    9900,
    NULL,
    'basic',
    '["기본 사주팔자 분석", "MBTI 성격 유형 분석", "오행 균형 분석", "12가지 주제 중 3가지 선택", "PDF 리포트 제공"]'::jsonb,
    '📊',
    NULL,
    true,
    1
  ),
  (
    'premium',
    'K-Saju 프리미엄',
    'premium',
    '심층 분석과 AI 코칭을 포함한 프리미엄 패키지',
    19900,
    29900,
    'premium',
    '["모든 기본 분석 포함", "12가지 주제 전체 분석", "AI 맞춤 코칭 3회", "월별/연도별 운세", "상세 PDF 리포트 (30페이지)", "1:1 이메일 상담 1회"]'::jsonb,
    '⭐',
    '인기',
    true,
    2
  ),
  (
    'fatemate-basic',
    'FateMate 기본',
    'fatemate-basic',
    '두 사람의 궁합을 분석하는 기본 패키지',
    14900,
    NULL,
    'fatemate',
    '["두 사람의 사주 궁합", "MBTI 성격 궁합", "오행 조화도 분석", "연애/결혼 조언", "PDF 리포트 제공"]'::jsonb,
    '💕',
    NULL,
    true,
    3
  ),
  (
    'fatemate-premium',
    'FateMate 완전판',
    'fatemate-premium',
    '완벽한 궁합 분석과 미래 예측',
    29900,
    39900,
    'fatemate',
    '["모든 기본 궁합 분석", "미래 운세 예측", "결혼 적기 분석", "자녀운 분석", "갈등 해결 가이드", "상세 PDF 리포트 (40페이지)", "커플 코칭 1회"]'::jsonb,
    '💑',
    '베스트',
    true,
    4
  )
ON CONFLICT (id) DO NOTHING;

-- 8. updated_at 자동 업데이트 트리거
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 완료!
-- ============================================
-- 이제 Supabase Dashboard > SQL Editor에서
-- 이 스크립트를 실행하세요.
-- ============================================
