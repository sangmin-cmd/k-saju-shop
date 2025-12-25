// 이메일 템플릿 타입 정의
export interface EmailTemplateData {
  customerName: string;
  customerEmail: string;
  orderId: string;
  orderDate: string;
  products: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  totalAmount: number;
  pdfUrl?: string;
}

// 공통 이메일 헤더
const emailHeader = (title: string) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
      body {
        font-family: 'Apple SD Gothic Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
      }
      .container {
        background: white;
        border-radius: 12px;
        padding: 40px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .header {
        background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
        color: white;
        padding: 30px;
        text-align: center;
        border-radius: 8px 8px 0 0;
        margin: -40px -40px 30px -40px;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 700;
      }
      .content {
        margin: 20px 0;
      }
      .info-box {
        background: #f9fafb;
        border-left: 4px solid #ec4899;
        padding: 15px 20px;
        margin: 20px 0;
        border-radius: 4px;
      }
      .info-box h3 {
        margin: 0 0 10px 0;
        color: #ec4899;
        font-size: 16px;
      }
      .order-items {
        margin: 20px 0;
        border-top: 2px solid #e5e7eb;
        padding-top: 15px;
      }
      .order-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #f3f4f6;
      }
      .total {
        font-size: 20px;
        font-weight: bold;
        color: #ec4899;
        text-align: right;
        margin: 20px 0;
        padding: 15px;
        background: #fef2f2;
        border-radius: 8px;
      }
      .button {
        display: inline-block;
        padding: 14px 28px;
        background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        margin: 20px 0;
        text-align: center;
      }
      .footer {
        margin-top: 40px;
        padding-top: 20px;
        border-top: 2px solid #e5e7eb;
        text-align: center;
        color: #6b7280;
        font-size: 14px;
      }
      .footer a {
        color: #ec4899;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
`;

const emailFooter = `
      <div class="footer">
        <p><strong>Human Insight Core</strong></p>
        <p>AI 기반 사주 & MBTI 분석 전문 기업</p>
        <p>문의: <a href="mailto:support@humaninsightcore.com">support@humaninsightcore.com</a></p>
        <p style="font-size: 12px; color: #9ca3af; margin-top: 20px;">
          본 메일은 발신 전용입니다. 답장하지 말아 주세요.
        </p>
      </div>
    </div>
  </body>
  </html>
`;

// 1. 주문 확인 이메일
export function orderConfirmationTemplate(data: EmailTemplateData): string {
  const itemsList = data.products.map(item => `
    <div class="order-item">
      <span>${item.name} × ${item.quantity}</span>
      <span>${item.price.toLocaleString('ko-KR')}원</span>
    </div>
  `).join('');

  return `
    ${emailHeader('주문 확인')}
    <div class="header">
      <h1>🎉 주문이 접수되었습니다!</h1>
    </div>
    
    <div class="content">
      <p style="font-size: 16px;">안녕하세요, <strong>${data.customerName}</strong>님!</p>
      <p>K-Saju Shop에서 주문해 주셔서 감사합니다.</p>
      
      <div class="info-box">
        <h3>📋 주문 정보</h3>
        <p><strong>주문번호:</strong> ${data.orderId}</p>
        <p><strong>주문일시:</strong> ${data.orderDate}</p>
        <p><strong>이메일:</strong> ${data.customerEmail}</p>
      </div>

      <div class="order-items">
        <h3 style="margin-bottom: 15px;">주문 상품</h3>
        ${itemsList}
      </div>

      <div class="total">
        총 결제금액: ${data.totalAmount.toLocaleString('ko-KR')}원
      </div>

      <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #3b82f6; margin-top: 0;">💡 다음 단계</h3>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>결제 확인 후 분석 작업이 시작됩니다.</li>
          <li>분석 완료 시 PDF 파일이 이메일로 발송됩니다.</li>
          <li>보통 24시간 이내에 완료됩니다.</li>
        </ul>
      </div>

      <p style="margin-top: 30px;">
        궁금하신 점이 있으시면 언제든지 문의해 주세요.<br>
        감사합니다! 😊
      </p>
    </div>
    ${emailFooter}
  `;
}

// 2. 결제 완료 이메일
export function paymentSuccessTemplate(data: EmailTemplateData): string {
  const itemsList = data.products.map(item => `
    <div class="order-item">
      <span>${item.name} × ${item.quantity}</span>
      <span>${item.price.toLocaleString('ko-KR')}원</span>
    </div>
  `).join('');

  return `
    ${emailHeader('결제 완료')}
    <div class="header">
      <h1>✅ 결제가 완료되었습니다!</h1>
    </div>
    
    <div class="content">
      <p style="font-size: 16px;">안녕하세요, <strong>${data.customerName}</strong>님!</p>
      <p>결제가 성공적으로 완료되었습니다.</p>
      
      <div class="info-box">
        <h3>💳 결제 정보</h3>
        <p><strong>주문번호:</strong> ${data.orderId}</p>
        <p><strong>결제일시:</strong> ${data.orderDate}</p>
        <p><strong>결제금액:</strong> ${data.totalAmount.toLocaleString('ko-KR')}원</p>
      </div>

      <div class="order-items">
        <h3 style="margin-bottom: 15px;">결제 상품</h3>
        ${itemsList}
      </div>

      <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #22c55e; margin-top: 0;">🚀 분석 진행 중</h3>
        <p style="margin: 10px 0;">
          전문 AI 시스템이 고객님의 사주와 MBTI를 분석하고 있습니다.<br>
          <strong>보통 12-24시간 이내</strong>에 완료되며, 완성되는 즉시 PDF 파일을 보내드립니다.
        </p>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="https://k-saju-shop.vercel.app/order/complete?orderId=${data.orderId}" class="button">
          주문 상세 보기
        </a>
      </div>

      <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
        <strong>참고:</strong> 분석 완료 시 별도의 이메일로 다운로드 링크를 보내드립니다.
      </p>
    </div>
    ${emailFooter}
  `;
}

// 3. PDF 분석 완료 이메일
export function pdfReadyTemplate(data: EmailTemplateData): string {
  return `
    ${emailHeader('분석 완료')}
    <div class="header">
      <h1>🎁 분석이 완료되었습니다!</h1>
    </div>
    
    <div class="content">
      <p style="font-size: 16px;">안녕하세요, <strong>${data.customerName}</strong>님!</p>
      <p>주문하신 사주 & MBTI 분석이 완료되었습니다.</p>
      
      <div class="info-box">
        <h3>📦 배송 정보</h3>
        <p><strong>주문번호:</strong> ${data.orderId}</p>
        <p><strong>완료일시:</strong> ${data.orderDate}</p>
      </div>

      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; margin: 30px 0; text-align: center;">
        <h2 style="margin: 0 0 20px 0; color: #92400e;">🌟 분석 결과 다운로드</h2>
        <p style="margin: 15px 0; color: #78350f; font-size: 15px;">
          고객님만을 위한 맞춤 분석 리포트가 준비되었습니다!
        </p>
        <a href="${data.pdfUrl || '#'}" class="button" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
          📄 PDF 다운로드하기
        </a>
        <p style="margin-top: 15px; font-size: 13px; color: #92400e;">
          링크는 30일간 유효합니다.
        </p>
      </div>

      <div class="order-items">
        <h3>분석 내용</h3>
        ${data.products.map(item => `
          <div class="order-item">
            <span>${item.name}</span>
            <span>✅ 완료</span>
          </div>
        `).join('')}
      </div>

      <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; border-radius: 4px; margin: 30px 0;">
        <h3 style="color: #dc2626; margin-top: 0;">⚠️ 중요 안내</h3>
        <ul style="margin: 10px 0; padding-left: 20px; color: #991b1b;">
          <li>PDF 파일은 개인정보가 포함되어 있으니 안전하게 보관해 주세요.</li>
          <li>다운로드 링크는 30일 후 만료됩니다.</li>
          <li>재다운로드가 필요하시면 고객센터로 문의해 주세요.</li>
        </ul>
      </div>

      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 30px 0;">
        <h3>💝 K-Saju를 이용해 주셔서 감사합니다!</h3>
        <p style="margin: 10px 0;">
          분석 결과가 고객님의 삶에 도움이 되길 바랍니다.<br>
          추가 분석이 필요하시면 언제든지 다시 방문해 주세요!
        </p>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="https://k-saju-shop.vercel.app/products" class="button">
          다른 상품 보러가기
        </a>
      </div>
    </div>
    ${emailFooter}
  `;
}

// 이메일 템플릿 선택 헬퍼
export function getEmailTemplate(
  type: 'order_confirmation' | 'payment_success' | 'pdf_ready',
  data: EmailTemplateData
): string {
  switch (type) {
    case 'order_confirmation':
      return orderConfirmationTemplate(data);
    case 'payment_success':
      return paymentSuccessTemplate(data);
    case 'pdf_ready':
      return pdfReadyTemplate(data);
    default:
      throw new Error(`Unknown email template type: ${type}`);
  }
}
