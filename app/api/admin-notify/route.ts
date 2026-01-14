import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 관리자 이메일 주소
const ADMIN_EMAIL = 'fatemate2026@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, amount, customerName, customerEmail, customerPhone, products } = body;

    // 상품 목록 HTML 생성
    const productsList = products?.map((p: any) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${p.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${p.price?.toLocaleString()}원</td>
      </tr>
    `).join('') || '';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>새 주문 알림</title>
      </head>
      <body style="font-family: 'Apple SD Gothic Neo', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); color: white; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🔔 새 주문이 들어왔습니다!</h1>
        </div>
        
        <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
            <strong style="color: #92400e;">⚡ 즉시 처리 필요</strong>
          </div>
          
          <h2 style="color: #374151; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">📋 주문 정보</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f9fafb; font-weight: bold; width: 120px;">주문번호</td>
              <td style="padding: 10px;">${orderId}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9fafb; font-weight: bold;">결제금액</td>
              <td style="padding: 10px; color: #ec4899; font-weight: bold; font-size: 18px;">${Number(amount).toLocaleString()}원</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9fafb; font-weight: bold;">결제시간</td>
              <td style="padding: 10px;">${new Date().toLocaleString('ko-KR')}</td>
            </tr>
          </table>
          
          <h2 style="color: #374151; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">👤 고객 정보</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f9fafb; font-weight: bold; width: 120px;">고객명</td>
              <td style="padding: 10px;">${customerName || '미입력'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9fafb; font-weight: bold;">이메일</td>
              <td style="padding: 10px;"><a href="mailto:${customerEmail}">${customerEmail || '미입력'}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9fafb; font-weight: bold;">연락처</td>
              <td style="padding: 10px;">${customerPhone || '미입력'}</td>
            </tr>
          </table>
          
          <h2 style="color: #374151; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">🛒 주문 상품</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background: #f9fafb;">
                <th style="padding: 10px; text-align: left;">상품명</th>
                <th style="padding: 10px; text-align: right;">가격</th>
              </tr>
            </thead>
            <tbody>
              ${productsList}
            </tbody>
          </table>
          
          <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
            <p style="margin: 0; color: #065f46; font-size: 16px;">
              <strong>📧 고객에게 분석 결과 발송해주세요!</strong><br>
              <span style="font-size: 14px;">이메일: ${customerEmail}</span>
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
          <p>K-Saju Shop 관리자 알림 시스템</p>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'K-Saju Shop <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject: `🔔 [새 주문] ${customerName || '고객'}님 - ${Number(amount).toLocaleString()}원`,
      html: emailHtml,
    });

    if (error) {
      console.error('Admin notification email error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Admin notification error:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
