# K-Saju Shop - 쇼핑몰 MVP

> AI 사주 & MBTI 분석 프리미엄 쇼핑몰

## 📊 프로젝트 현황

**완성도:** Phase 3 완료 (회원 시스템) ✅  
**다음 단계:** Phase 4 (법적 문서) 또는 Phase 3 추가 기능  
**날짜:** 2024-12-18

---

## ✅ 완성된 기능

### **Phase 1: 핵심 쇼핑 기능** ✅

#### 1. 홈페이지 (`/`)
- ✅ 히어로 섹션 (그라디언트 배경)
- ✅ 인기 상품 섹션
- ✅ 전체 상품 그리드
- ✅ 특징 섹션 (3개 카드)
- ✅ CTA 섹션
- ✅ 반응형 디자인

#### 2. 상품 페이지
- ✅ 상품 목록 (`/products`)
  - 필터 기능 (전체/기본/프리미엄/궁합)
  - 4개 상품 표시
  - 카테고리별 아이콘
- ✅ 상품 상세 (`/products/[id]`)
  - 상세 정보
  - 가격, 할인율
  - 포함 내용 리스트
  - 추천 대상 섹션
  - 바로 구매/장바구니 담기

#### 3. 장바구니 기능
- ✅ CartContext (전역 상태 관리)
- ✅ localStorage 연동 (새로고침 유지)
- ✅ 장바구니 페이지 (`/cart`)
  - 상품 목록
  - 수량 조절 (+/-)
  - 개별 삭제
  - 전체 삭제
  - 합계 계산
- ✅ Header에 개수 표시

#### 4. 결제 시스템
- ✅ 결제 페이지 (`/checkout`)
  - 주문자 정보 입력
  - 유효성 검증
  - 약관 동의
  - 주문 상품 확인
  - 결제 정보 요약
- ✅ 주문 완료 (`/order/complete`)
  - 성공 메시지
  - 주문 번호
  - 다음 단계 안내

#### 5. 레이아웃
- ✅ Header (네비게이션, 장바구니 아이콘)
- ✅ Footer (사업자 정보)
- ✅ 반응형 (모바일/태블릿/데스크톱)

### **Phase 2: 이메일 자동화** ✅

#### 1. Resend 통합
- ✅ Resend 패키지 설치 및 설정
- ✅ 환경 변수 구성 (.env.local)
- ✅ API 키 관리

#### 2. 이메일 템플릿
- ✅ 주문 확인 이메일 (Order Confirmation)
  - HTML 템플릿
  - 주문 정보, 상품 목록
  - 다음 단계 안내
- ✅ 결제 완료 이메일 (Payment Success)
  - 결제 정보, 영수증
  - 분석 진행 상태 안내
  - 주문 상세 링크
- ✅ 분석 완료 이메일 (PDF Ready)
  - PDF 다운로드 링크
  - 유효 기간 안내
  - 보안 안내

#### 3. API 엔드포인트
- ✅ POST /api/email (이메일 발송)
  - 타입별 템플릿 선택
  - 유효성 검증
  - 에러 핸들링
- ✅ GET /api/email (API 상태 확인)
  - 설정 검증
  - 헬스 체크

#### 4. 결제 페이지 연동
- ✅ 주문 확인 이메일 자동 발송
- ✅ 결제 완료 이메일 자동 발송
- ✅ 에러 처리 (이메일 실패해도 주문 진행)
- ✅ 헬퍼 함수 제공

### **Phase 3: 회원 시스템** ✅

#### 1. Supabase 통합
- ✅ @supabase/supabase-js 패키지 설치
- ✅ bcryptjs 패키지 설치 (비밀번호 암호화)
- ✅ 환경 변수 설정
- ✅ Supabase 클라이언트 설정
- ✅ 데이터베이스 스키마 (SQL)

#### 2. 인증 시스템
- ✅ Auth 유틸리티 함수
  - 비밀번호 해시/검증
  - 이메일 중복 확인
  - 회원가입/로그인
  - 사용자 정보 조회/수정
  - 비밀번호 변경
  - 유효성 검증
- ✅ AuthProvider (Context API)
- ✅ useAuth Hook
- ✅ localStorage 세션 관리

#### 3. 페이지
- ✅ 로그인 페이지 (`/login`)
  - 이메일/비밀번호 입력
  - 유효성 검증
  - 로그인 유지 옵션
  - 소셜 로그인 준비 (카카오, 네이버)
- ✅ 회원가입 페이지 (`/signup`)
  - 이메일/비밀번호/이름/전화번호
  - 실시간 비밀번호 강도 표시
  - 약관 동의
  - 유효성 검증
- ✅ 마이페이지 (`/mypage`)
  - 프로필 정보
  - 주문 통계
  - 빠른 링크

#### 4. UI 컴포넌트
- ✅ Header에 인증 기능
  - 로그인/회원가입 버튼
  - 사용자 드롭다운 메뉴
  - 마이페이지/로그아웃 링크
  - 모바일 대응

#### 5. 보안
- ✅ 비밀번호 암호화 (bcrypt, Salt Rounds 10)
- ✅ Row Level Security (RLS) 정책
- ✅ 인증 보호된 페이지
- ✅ 세션 관리

---

## 🛠 기술 스택

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** React Context API
- **Storage:** localStorage

### 설치된 패키지
```json
{
  "next": "14.0.4",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5",
  "tailwindcss": "^3.3.0",
  "resend": "^3.0.0",
  "@supabase/supabase-js": "^2.39.0",
  "bcryptjs": "^2.4.3"
}
```

---

## 📁 프로젝트 구조

```
k-saju-shop/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # 헤더 (네비게이션, 장바구니, 인증) ✨
│   │   ├── Footer.tsx          # 푸터 (사업자 정보)
│   │   ├── ProductCard.tsx     # 상품 카드
│   │   ├── CartProvider.tsx    # 장바구니 Context
│   │   └── AuthProvider.tsx    # Auth Context ✨
│   ├── lib/
│   │   ├── types.ts           # 타입 정의 (확장) ✨
│   │   ├── products.ts        # 상품 데이터
│   │   ├── email-templates.ts # 이메일 템플릿
│   │   ├── email-utils.ts     # 이메일 헬퍼
│   │   ├── supabase.ts        # Supabase 클라이언트 ✨
│   │   └── auth.ts            # Auth 유틸리티 ✨
│   ├── api/
│   │   └── email/
│   │       └── route.ts       # 이메일 API
│   ├── products/
│   │   ├── page.tsx           # 상품 목록
│   │   └── [id]/page.tsx      # 상품 상세
│   ├── cart/
│   │   └── page.tsx           # 장바구니
│   ├── checkout/
│   │   └── page.tsx           # 결제
│   ├── order/
│   │   └── complete/page.tsx  # 주문 완료
│   ├── login/
│   │   └── page.tsx           # 로그인 ✨
│   ├── signup/
│   │   └── page.tsx           # 회원가입 ✨
│   ├── mypage/
│   │   └── page.tsx           # 마이페이지 ✨
│   ├── layout.tsx             # 루트 레이아웃 (AuthProvider 추가) ✨
│   ├── page.tsx               # 홈페이지
│   └── globals.css            # 글로벌 스타일
├── database/
│   └── schema.sql             # Supabase 스키마 ✨
├── public/                    # 정적 파일
├── .env.local                 # 환경 변수 (Resend, Supabase) ✨
├── .env.example               # 환경 변수 템플릿 ✨
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

---

## 🎨 디자인 시스템

### 색상
```css
/* Primary - 핑크 계열 */
primary-500: #ec4899
primary-600: #db2777

/* Secondary - 보라 계열 */
secondary-500: #a855f7
secondary-600: #9333ea

/* 그라디언트 */
from-primary-500 to-secondary-500
```

### 컴포넌트 클래스
```css
.btn-primary      /* 주요 버튼 (그라디언트) */
.btn-secondary    /* 보조 버튼 (테두리) */
.card             /* 카드 컨테이너 */
.input-field      /* 입력 필드 */
```

---

## 📦 상품 데이터

### 4개 제품
1. **K-Saju 기본** (5,900원)
   - 15페이지 PDF
   - 사주팔자 기본 분석

2. **K-Saju 프리미엄** (19,900원) 🌟
   - 30페이지+ PDF
   - MBTI × 사주 통합 분석
   - 인기 상품

3. **FateMate 기본** (9,900원)
   - 7페이지 PDF
   - 기본 궁합 분석

4. **FateMate 완전판** (19,900원) 🌟
   - 19페이지 PDF
   - 완전 궁합 분석
   - 인기 상품

---

## 🚀 실행 방법

### 개발 서버
```bash
cd k-saju-shop
npm install
npm run dev
```

접속: http://localhost:3000

### 빌드
```bash
npm run build
npm start
```

---

## ⬜ 미완성 기능 (Phase 3 추가~Phase 5)

### Phase 2: 이메일 자동화 ✅ **완료**
- ✅ Resend 설정
- ✅ 주문 확인 이메일
- ✅ 결제 완료 이메일
- ✅ 배송(다운로드) 이메일
- ✅ 이메일 템플릿
- ✅ API 라우트 (`/api/email`)

### Phase 3: 회원 시스템 ✅ **완료**
- ✅ Supabase 설정
- ✅ 회원가입/로그인
- ✅ 비밀번호 암호화 (bcrypt)
- ✅ 마이페이지
- ✅ Auth Context (전역 상태)
- ✅ 인증 보호된 페이지

### Phase 3 추가: 고급 회원 기능 ⭐ **다음 가능**
- ⬜ 주문 내역 페이지 (`/mypage/orders`)
- ⬜ 프로필 수정 페이지 (`/mypage/profile`)
- ⬜ 비밀번호 찾기 (`/forgot-password`)
- ⬜ 소셜 로그인 (카카오, 네이버)
- ⬜ 이메일 인증

### Phase 4: 법적 문서 ⭐ **다음 가능**
- ⬜ 이용약관 페이지
- ⬜ 개인정보처리방침
- ⬜ 환불/교환 정책
- ⬜ Footer 링크 연결
- ⬜ 통신판매업 정보 업데이트

### Phase 4: 법적 문서
- ⬜ 이용약관 페이지
- ⬜ 개인정보처리방침 페이지
- ⬜ 환불/교환 정책
- ⬜ 통신판매업 정보 업데이트

### Phase 5: 관리자 페이지
- ⬜ 관리자 로그인
- ⬜ 주문 관리
- ⬜ 고객 관리
- ⬜ 매출 통계
- ⬜ 상품 관리

---

## 🎯 다음 단계 우선순위

### 1순위: 회원 시스템 ⚡ **다음**
**이유:** 주문 내역 관리, 재구매, 고객 데이터 수집

**작업:**
1. Supabase 프로젝트 생성
2. Auth 설정
3. 로그인/회원가입 페이지
4. 마이페이지
5. 주문 내역 페이지

**예상 시간:** 2-3시간

### 2순위: 법적 문서
**이유:** 법적 요구사항

**작업:**
1. 이용약관 작성
2. 개인정보처리방침 작성
3. 환불 정책 작성

**예상 시간:** 1시간

---

## 🔧 환경 변수

```env
# Resend (이메일) ✅ 설정 완료
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=noreply@yourdomain.com
COMPANY_NAME=Human Insight Core

# Supabase (데이터베이스) ✅ 설정 완료
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Toss Payments (결제) - 추후 설정
TOSS_CLIENT_KEY=
TOSS_SECRET_KEY=
```

### Resend 설정 방법
1. https://resend.com 회원가입
2. API Keys 메뉴에서 키 발급
3. `.env.local` 파일에 키 추가
4. 개발 서버 재시작

**무료 플랜:** 3,000통/월  
**문서:** https://resend.com/docs

### Supabase 설정 방법
1. https://supabase.com 회원가입
2. New Project 생성
3. Settings → API에서 키 복사
4. SQL Editor에서 `database/schema.sql` 실행
5. `.env.local` 파일에 키 추가
6. 개발 서버 재시작

**무료 플랜:** 500MB 데이터베이스  
**문서:** https://supabase.com/docs

---

## 📝 참고사항

### 현재 결제 시스템
- **상태:** 테스트 모드 (실제 결제 X)
- **TODO:** 토스페이먼츠 실제 연동 필요
- **문서:** https://docs.tosspayments.com/

### 이메일 발송 ✅ **완료**
- **서비스:** Resend 사용 중
- **무료:** 3,000통/월
- **문서:** https://resend.com/docs
- **템플릿:** 3개 (주문확인, 결제완료, PDF발송)
- **자동화:** 결제 완료 시 자동 발송

### 데이터베이스
- **서비스:** Supabase 추천
- **무료:** 500MB
- **문서:** https://supabase.com/docs

---

## 🎨 디자인 가이드

### 반응형 브레이크포인트
```
모바일: < 768px
태블릿: 768px - 1024px
데스크톱: > 1024px
```

### 아이콘
- 기본 분석: 📊
- 프리미엄: ⭐
- 궁합 분석: 💕

### 그라디언트
```css
bg-gradient-to-r from-primary-500 to-secondary-500
bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600
```

---

## 🐛 알려진 이슈

없음 (Phase 1 완료)

---

## 📞 연락처

**프로젝트:** K-Saju Shop  
**회사:** Human Insight Core  
**날짜:** 2024-12-18

---

## 📄 라이센스

Proprietary - Human Insight Core
