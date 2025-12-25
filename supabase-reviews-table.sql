-- ============================================
-- K-Saju Shop: Reviews 테이블 및 Storage 생성
-- ============================================

-- 1. reviews 테이블 생성
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  order_id TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  is_verified_purchase BOOLEAN NOT NULL DEFAULT true,
  is_best BOOLEAN NOT NULL DEFAULT false,
  helpful_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. helpful_reviews 테이블 (도움됨 기능)
CREATE TABLE IF NOT EXISTS helpful_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(review_id, user_id)
);

-- 3. 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_reviews_order_id ON reviews(order_id);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_is_best ON reviews(is_best);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at);
CREATE INDEX IF NOT EXISTS idx_helpful_reviews_review_id ON helpful_reviews(review_id);
CREATE INDEX IF NOT EXISTS idx_helpful_reviews_user_id ON helpful_reviews(user_id);

-- 4. RLS (Row Level Security) 활성화
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE helpful_reviews ENABLE ROW LEVEL SECURITY;

-- 5. RLS 정책: reviews
-- 모든 사용자가 리뷰 조회 가능
CREATE POLICY "Anyone can view reviews"
  ON reviews
  FOR SELECT
  USING (true);

-- 사용자는 자신의 리뷰만 작성 가능
CREATE POLICY "Users can create their own reviews"
  ON reviews
  FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

-- 사용자는 자신의 리뷰만 수정 가능
CREATE POLICY "Users can update their own reviews"
  ON reviews
  FOR UPDATE
  USING (auth.uid()::text = user_id::text);

-- 사용자는 자신의 리뷰만 삭제 가능
CREATE POLICY "Users can delete their own reviews"
  ON reviews
  FOR DELETE
  USING (auth.uid()::text = user_id::text);

-- 6. RLS 정책: helpful_reviews
-- 모든 사용자가 도움됨 조회 가능
CREATE POLICY "Anyone can view helpful votes"
  ON helpful_reviews
  FOR SELECT
  USING (true);

-- 사용자는 도움됨 추가 가능
CREATE POLICY "Users can add helpful votes"
  ON helpful_reviews
  FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

-- 사용자는 자신의 도움됨만 삭제 가능
CREATE POLICY "Users can remove their own helpful votes"
  ON helpful_reviews
  FOR DELETE
  USING (auth.uid()::text = user_id::text);

-- 7. updated_at 자동 업데이트 트리거
CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 8. Storage Bucket 생성 (Supabase Dashboard에서 수동 생성 필요)
-- Bucket 이름: review-images
-- Public: true (공개 이미지)
-- File size limit: 5MB
-- Allowed MIME types: image/jpeg, image/png, image/webp

-- 9. Storage RLS 정책
-- 이 정책들은 Supabase Dashboard > Storage > review-images > Policies에서 설정

-- Policy 1: 누구나 이미지 조회 가능
-- SELECT policy:
-- Name: Public Access
-- Policy: true

-- Policy 2: 로그인한 사용자만 업로드 가능
-- INSERT policy:
-- Name: Authenticated users can upload
-- Policy: auth.role() = 'authenticated'

-- Policy 3: 업로드한 사용자만 삭제 가능
-- DELETE policy:
-- Name: Users can delete own images
-- Policy: auth.uid()::text = (storage.foldername(name))[1]

-- 10. 평균 별점 계산을 위한 View 생성
CREATE OR REPLACE VIEW product_review_stats AS
SELECT 
  product_id,
  COUNT(*) as total_reviews,
  AVG(rating)::numeric(3,2) as average_rating,
  COUNT(CASE WHEN rating = 5 THEN 1 END) as rating_5_count,
  COUNT(CASE WHEN rating = 4 THEN 1 END) as rating_4_count,
  COUNT(CASE WHEN rating = 3 THEN 1 END) as rating_3_count,
  COUNT(CASE WHEN rating = 2 THEN 1 END) as rating_2_count,
  COUNT(CASE WHEN rating = 1 THEN 1 END) as rating_1_count
FROM reviews
GROUP BY product_id;

-- 11. 사용자별 리뷰 통계 View
CREATE OR REPLACE VIEW user_review_stats AS
SELECT 
  user_id,
  COUNT(*) as total_reviews,
  AVG(rating)::numeric(3,2) as average_rating
FROM reviews
GROUP BY user_id;

-- ============================================
-- 완료!
-- ============================================
-- 다음 단계:
-- 1. Supabase Dashboard > SQL Editor에서 이 스크립트 실행
-- 2. Supabase Dashboard > Storage > Create bucket
--    - Name: review-images
--    - Public: Yes
--    - File size limit: 5MB
--    - Allowed MIME types: image/jpeg, image/png, image/webp
-- 3. Storage Policies 설정 (위 참고)
-- ============================================
