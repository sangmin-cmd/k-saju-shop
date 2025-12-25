import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getEmailTemplate, EmailTemplateData } from '@/app/lib/email-templates';

// Resend 클라이언트 초기화
const resend = new Resend(process.env.RESEND_API_KEY);

// 이메일 발송 요청 타입
interface EmailRequest {
  type: 'order_confirmation' | 'payment_success' | 'pdf_ready';
  to: string;
  data: EmailTemplateData;
}

// 이메일 제목 생성
function getEmailSubject(type: string, orderId: string): string {
  switch (type) {
    case 'order_confirmation':
      return `[K-Saju] 주문이 접수되었습니다 (주문번호: ${orderId})`;
    case 'payment_success':
      return `[K-Saju] 결제가 완료되었습니다 (주문번호: ${orderId})`;
    case 'pdf_ready':
      return `[K-Saju] 분석이 완료되었습니다! 🎉 (주문번호: ${orderId})`;
    default:
      return `[K-Saju] 알림`;
  }
}

// POST: 이메일 발송
export async function POST(request: NextRequest) {
  try {
    // 요청 본문 파싱
    const body: EmailRequest = await request.json();
    const { type, to, data } = body;

    // 필수 필드 검증
    if (!type || !to || !data) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 이메일 주소 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return NextResponse.json(
        { error: '유효하지 않은 이메일 주소입니다.' },
        { status: 400 }
      );
    }

    // 환경 변수 확인
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY가 설정되지 않았습니다.');
      return NextResponse.json(
        { error: '이메일 서비스 설정이 완료되지 않았습니다.' },
        { status: 500 }
      );
    }

    // 이메일 템플릿 생성
    const htmlContent = getEmailTemplate(type, data);
    const subject = getEmailSubject(type, data.orderId);

    // 발신 이메일 주소
    const fromEmail = process.env.FROM_EMAIL || 'noreply@k-saju.com';

    // Resend로 이메일 발송
    const result = await resend.emails.send({
      from: `K-Saju Shop <${fromEmail}>`,
      to: [to],
      subject: subject,
      html: htmlContent,
    });

    // 성공 응답
    return NextResponse.json({
      success: true,
      messageId: result.data?.id,
      type: type,
      sentTo: to,
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    // 에러 로깅
    console.error('이메일 발송 실패:', error);

    // 에러 응답
    return NextResponse.json(
      {
        error: '이메일 발송에 실패했습니다.',
        details: error.message || '알 수 없는 오류',
      },
      { status: 500 }
    );
  }
}

// GET: API 상태 확인
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Email API is running',
    timestamp: new Date().toISOString(),
    configured: !!process.env.RESEND_API_KEY,
  });
}
