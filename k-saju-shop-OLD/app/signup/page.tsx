'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../components/AuthProvider';
import { signUp, validatePassword, validateEmail, validatePhone } from '../lib/auth';

export default function SignUpPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState<{
    valid: boolean;
    errors: string[];
  }>({ valid: false, errors: [] });

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // 이메일 검증
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }

    // 비밀번호 검증
    const passwordValidation = validatePassword(formData.password);
    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력해주세요';
    } else if (!passwordValidation.valid) {
      newErrors.password = passwordValidation.errors[0];
    }

    // 비밀번호 확인
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    }

    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    } else if (formData.name.length < 2) {
      newErrors.name = '이름은 2자 이상이어야 합니다';
    }

    // 전화번호 검증
    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)';
    }

    // 약관 동의
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '이용약관에 동의해주세요';
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = '개인정보처리방침에 동의해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 비밀번호 실시간 검증
  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password });
    if (password) {
      setPasswordStrength(validatePassword(password));
    } else {
      setPasswordStrength({ valid: false, errors: [] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const result = await signUp(formData);

      if (result.success) {
        alert('회원가입이 완료되었습니다! 로그인해주세요.');
        router.push('/login');
      } else {
        setErrors({ general: result.error || '회원가입에 실패했습니다.' });
      }
    } catch (error: any) {
      console.error('SignUp error:', error);
      setErrors({ general: '회원가입 중 오류가 발생했습니다.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
              K-Saju
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">회원가입</h2>
          <p className="text-gray-600">
            K-Saju의 회원이 되어 더 많은 혜택을 누리세요
          </p>
        </div>

        {/* 회원가입 폼 */}
        <div className="card p-8">
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="example@email.com"
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                이메일로 주문 내역과 분석 결과를 받습니다
              </p>
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className={`input-field ${errors.password ? 'border-red-500' : ''}`}
                placeholder="영문, 숫자 포함 8자 이상"
                disabled={loading}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              
              {/* 비밀번호 강도 표시 */}
              {formData.password && (
                <div className="mt-2">
                  {passwordStrength.valid ? (
                    <p className="text-green-600 text-sm">✓ 안전한 비밀번호입니다</p>
                  ) : (
                    <div className="text-sm text-gray-600">
                      <p className="mb-1">비밀번호는 다음을 포함해야 합니다:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li className={formData.password.length >= 8 ? 'text-green-600' : ''}>
                          최소 8자 이상
                        </li>
                        <li className={/[A-Za-z]/.test(formData.password) ? 'text-green-600' : ''}>
                          영문자
                        </li>
                        <li className={/[0-9]/.test(formData.password) ? 'text-green-600' : ''}>
                          숫자
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className={`input-field ${errors.confirmPassword ? 'border-red-500' : ''}`}
                placeholder="비밀번호를 다시 입력해주세요"
                disabled={loading}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <p className="text-green-600 text-sm mt-1">✓ 비밀번호가 일치합니다</p>
              )}
            </div>

            {/* 이름 */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                placeholder="홍길동"
                disabled={loading}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                전화번호 <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="010-1234-5678"
                disabled={loading}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* 약관 동의 */}
            <div className="space-y-4 pt-4 border-t">
              <div>
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="mt-1 mr-3"
                    disabled={loading}
                  />
                  <span className="flex-1">
                    <span className="font-semibold text-red-500">[필수]</span>{' '}
                    이용약관에 동의합니다
                    <Link
                      href="/terms"
                      className="text-primary-500 text-sm ml-2 hover:underline"
                    >
                      보기
                    </Link>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-red-500 text-sm ml-6 mt-1">{errors.agreeTerms}</p>
                )}
              </div>

              <div>
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) =>
                      setFormData({ ...formData, agreePrivacy: e.target.checked })
                    }
                    className="mt-1 mr-3"
                    disabled={loading}
                  />
                  <span className="flex-1">
                    <span className="font-semibold text-red-500">[필수]</span>{' '}
                    개인정보처리방침에 동의합니다
                    <Link
                      href="/privacy"
                      className="text-primary-500 text-sm ml-2 hover:underline"
                    >
                      보기
                    </Link>
                  </span>
                </label>
                {errors.agreePrivacy && (
                  <p className="text-red-500 text-sm ml-6 mt-1">{errors.agreePrivacy}</p>
                )}
              </div>

              <div>
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeMarketing}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeMarketing: e.target.checked })
                    }
                    className="mt-1 mr-3"
                    disabled={loading}
                  />
                  <span className="flex-1">
                    <span className="font-semibold text-gray-600">[선택]</span>{' '}
                    마케팅 정보 수신에 동의합니다
                  </span>
                </label>
                <p className="text-sm text-gray-500 ml-6 mt-1">
                  할인, 이벤트 등의 소식을 이메일로 받습니다
                </p>
              </div>
            </div>

            {/* 회원가입 버튼 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '가입 중...' : '회원가입'}
            </button>
          </form>

          {/* 로그인 링크 */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              이미 회원이신가요?{' '}
              <Link href="/login" className="text-primary-500 hover:text-primary-600 font-semibold">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
