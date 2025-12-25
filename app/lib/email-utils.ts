import { EmailTemplateData } from './email-templates';

// 이메일 발송 타입
type EmailType = 'order_confirmation' | 'payment_success' | 'pdf_ready';

// 이메일 발송 함수
export async function sendEmail(
  type: EmailType,
  to: string,
  data: EmailTemplateData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        to,
        data,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '이메일 발송 실패');
    }

    const result = await response.json();
    return { success: true };
  } catch (error: any) {
    console.error('이메일 발송 에러:', error);
    return { 
      success: false, 
      error: error.message || '알 수 없는 오류' 
    };
  }
}

// 주문 확인 이메일 발송
export async function sendOrderConfirmation(
  email: string,
  data: EmailTemplateData
) {
  return sendEmail('order_confirmation', email, data);
}

// 결제 완료 이메일 발송
export async function sendPaymentSuccess(
  email: string,
  data: EmailTemplateData
) {
  return sendEmail('payment_success', email, data);
}

// PDF 준비 완료 이메일 발송
export async function sendPdfReady(
  email: string,
  data: EmailTemplateData
) {
  return sendEmail('pdf_ready', email, data);
}
