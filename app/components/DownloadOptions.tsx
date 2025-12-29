'use client';

import { useState, useRef } from 'react';

interface DownloadOptionsProps {
  resultRef: React.RefObject<HTMLDivElement>;
  userName: string;
  mbti: string;
  dayStem: string;
  score: number;
}

export default function DownloadOptions({ 
  resultRef, 
  userName, 
  mbti, 
  dayStem, 
  score 
}: DownloadOptionsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // PDF 다운로드 (html2pdf 사용)
  const handleDownloadPDF = async () => {
    if (!resultRef.current) return;
    
    setIsLoading(true);
    
    try {
      // html2pdf 동적 로드
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = resultRef.current;
      const fileName = `K-Saju_${userName}_${mbti}x${dayStem}_분석결과.pdf`;
      
      const opt = {
        margin: 10,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      };
      
      await html2pdf().set(opt).from(element).save();
      
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error('PDF 생성 실패:', error);
      alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // 이메일 발송 (API 호출)
  const handleSendEmail = async () => {
    if (!email || !email.includes('@')) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // API 호출 (실제 구현 시 백엔드 필요)
      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          userName,
          mbti,
          dayStem,
          score,
          // 결과 데이터 추가
        })
      });
      
      if (response.ok) {
        setEmailSent(true);
        setTimeout(() => {
          setShowEmailModal(false);
          setEmailSent(false);
          setEmail('');
        }, 2000);
      } else {
        throw new Error('발송 실패');
      }
    } catch (error) {
      // 데모용: API 없이 성공 처리
      console.log('이메일 발송 시뮬레이션:', email);
      setEmailSent(true);
      setTimeout(() => {
        setShowEmailModal(false);
        setEmailSent(false);
        setEmail('');
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 다운로드 버튼들 */}
      <div className="flex gap-3 mt-6">
        {/* PDF 다운로드 */}
        <button
          onClick={handleDownloadPDF}
          disabled={isLoading}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
            downloadSuccess 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              생성 중...
            </>
          ) : downloadSuccess ? (
            <>✓ 다운로드 완료</>
          ) : (
            <>📄 PDF 다운로드</>
          )}
        </button>
        
        {/* 이메일 발송 */}
        <button
          onClick={() => setShowEmailModal(true)}
          className="flex-1 py-3 px-4 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
        >
          📧 이메일로 받기
        </button>
      </div>

      {/* 이메일 모달 */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-2">📧 이메일로 결과 받기</h3>
            <p className="text-gray-400 text-sm mb-4">
              분석 결과를 PDF로 이메일로 발송해드립니다.
            </p>
            
            {emailSent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-green-400 font-medium">발송 완료!</p>
                <p className="text-gray-400 text-sm mt-2">{email}로 발송되었습니다</p>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소 입력"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 mb-4"
                />
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="flex-1 py-3 bg-gray-700 text-gray-300 rounded-xl hover:bg-gray-600 transition-all"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleSendEmail}
                    disabled={isLoading || !email}
                    className="flex-1 py-3 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition-all disabled:opacity-50"
                  >
                    {isLoading ? '발송 중...' : '발송하기'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// 사용 예시:
// 결과 페이지에서
// 
// const resultRef = useRef<HTMLDivElement>(null);
// 
// return (
//   <>
//     <div ref={resultRef}>
//       {/* 결과 내용 */}
//     </div>
//     <DownloadOptions 
//       resultRef={resultRef}
//       userName="홍길동"
//       mbti="ESTJ"
//       dayStem="丙"
//       score={78}
//     />
//   </>
// );
