import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './components/CartProvider'
import { AuthProvider } from './components/AuthProvider'
import { AdminProvider } from './components/AdminProvider'

export const metadata: Metadata = {
  title: 'K-Saju - 정밀 계산 엔진 × MBTI 분석',
  description: '감이 아닌 구조로 해석하는 프리미엄 사주 분석. 100% 재현 가능한 K-Saju 엔진이 당신의 성향부터 타이밍까지 분석합니다.',
  keywords: ['사주', 'MBTI', '사주팔자', '운세', '궁합', 'K-Saju', '사주분석'],
  authors: [{ name: 'K-Saju' }],
  openGraph: {
    title: 'K-Saju - 정밀 계산 엔진 × MBTI 분석',
    description: '감이 아닌 구조로 해석하는 프리미엄 사주 분석 서비스',
    url: 'https://www.sajutype.kr',
    siteName: 'K-Saju',
    images: [
      {
        url: 'https://www.sajutype.kr/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'K-Saju - 정밀 계산 엔진 × MBTI 분석',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K-Saju - 정밀 계산 엔진 × MBTI 분석',
    description: '감이 아닌 구조로 해석하는 프리미엄 사주 분석 서비스',
    images: ['https://www.sajutype.kr/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <AdminProvider>
            <CartProvider>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </CartProvider>
          </AdminProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
