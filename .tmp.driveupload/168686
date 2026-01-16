import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './components/CartProvider'
import { AuthProvider } from './components/AuthProvider'
import { AdminProvider } from './components/AdminProvider'

export const metadata: Metadata = {
  title: '그 사람과 나, 진짜 맞을까? | K-Saju',
  description: '사주 × MBTI로 보는 우리의 궁합. 케미 점수부터 갈등 포인트까지, 두 사람의 관계를 깊이 분석합니다.',
  keywords: ['궁합', '연인궁합', '사주궁합', 'MBTI궁합', '사주', 'MBTI', '케미', 'K-Saju'],
  authors: [{ name: 'K-Saju' }],
  openGraph: {
    title: '그 사람과 나, 진짜 맞을까?',
    description: '사주 × MBTI로 보는 우리의 궁합',
    url: 'https://www.sajutype.kr',
    siteName: 'K-Saju',
    images: [
      {
        url: 'https://www.sajutype.kr/images/fatemate.png',
        width: 1200,
        height: 630,
        alt: '그 사람과 나, 진짜 맞을까? - K-Saju 궁합 분석',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '그 사람과 나, 진짜 맞을까?',
    description: '사주 × MBTI로 보는 우리의 궁합',
    images: ['https://www.sajutype.kr/images/fatemate.png'],
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
