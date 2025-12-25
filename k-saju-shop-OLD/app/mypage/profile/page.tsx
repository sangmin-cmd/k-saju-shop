'use client';

import { useAuth } from '../../components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  updateUser,
  changePassword,
  validatePassword,
  validatePhone,
  getUserById,
} from '../../lib/auth';

export default function ProfilePage() {
  const { user, loading, updateUser: updateAuthUser } = useAuth();
  const router = useRouter();

  // 프로필 수정 폼
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
  });

  // 비밀번호 변경 폼
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        phone: user.phone || '',
      });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // 프로필 수정 검증
  const validateProfile = () => {
    const newErrors: { [key: string]: string } = {};

    if (!profileData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    } else if (profileData.name.length < 2) {
      newErrors.name = '이름은 2자 이상이어야 합니다';
    }

    if (profileData.phone && !validatePhone(profileData.phone)) {
      newErrors.phone = '올바른 전화번호 형식이 아닙니다';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 비밀번호 변경 검증
  const validatePasswordForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = '현재 비밀번호를 입력해주세요';
    }

    const passwordValidation = validatePassword(passwordData.newPassword);
    if (!passwordData.newPassword) {
      newErrors.newPassword = '새 비밀번호를 입력해주세요';
    } else if (!passwordValidation.valid) {
      newErrors.newPassword = passwordValidation.errors[0];
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요';
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 프로필 수정 제출
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateProfile()) {
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const result = await updateUser(user.id, profileData);

      if (result.success) {
        // 사용자 정보 새로고침
        const updatedUser = await getUserById(user.id);
        if (updatedUser.success && updatedUser.user) {
          updateAuthUser(updatedUser.user);
        }

        alert('프로필이 성공적으로 수정되었습니다.');
      } else {
        setErrors({ general: result.error || '프로필 수정에 실패했습니다.' });
      }
    } catch (error: any) {
      console.error('프로필 수정 에러:', error);
      setErrors({ general: '프로필 수정 중 오류가 발생했습니다.' });
    } finally {
      setSubmitting(false);
    }
  };

  // 비밀번호 변경 제출
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePasswordForm()) {
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const result = await changePassword(
        user.id,
        passwordData.currentPassword,
        passwordData.newPassword
      );

      if (result.success) {
        alert('비밀번호가 성공적으로 변경되었습니다.');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        setErrors({ password: result.error || '비밀번호 변경에 실패했습니다.' });
      }
    } catch (error: any) {
      console.error('비밀번호 변경 에러:', error);
      setErrors({ password: '비밀번호 변경 중 오류가 발생했습니다.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/mypage"
            className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            마이페이지로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold mb-2">프로필 설정</h1>
          <p className="text-gray-600">개인 정보 및 비밀번호를 관리하세요</p>
        </div>

        {/* 탭 메뉴 */}
        <div className="card mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'profile'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              프로필 정보
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'password'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              비밀번호 변경
            </button>
          </div>

          {/* 프로필 정보 탭 */}
          {activeTab === 'profile' && (
            <div className="p-6">
              {errors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}

              <form onSubmit={handleProfileSubmit} className="space-y-6">
                {/* 이메일 (읽기 전용) */}
                <div>
                  <label className="block text-sm font-semibold mb-2">이메일</label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="input-field bg-gray-100 cursor-not-allowed"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    이메일은 변경할 수 없습니다
                  </p>
                </div>

                {/* 이름 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    이름
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="홍길동"
                    disabled={submitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* 전화번호 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    전화번호
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="010-1234-5678"
                    disabled={submitting}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* 가입일 */}
                <div>
                  <label className="block text-sm font-semibold mb-2">가입일</label>
                  <input
                    type="text"
                    value={new Date(user.createdAt).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    disabled
                    className="input-field bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? '저장 중...' : '변경사항 저장'}
                </button>
              </form>
            </div>
          )}

          {/* 비밀번호 변경 탭 */}
          {activeTab === 'password' && (
            <div className="p-6">
              {errors.password && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.password}</p>
                </div>
              )}

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                {/* 현재 비밀번호 */}
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-semibold mb-2"
                  >
                    현재 비밀번호
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        currentPassword: e.target.value,
                      })
                    }
                    className={`input-field ${
                      errors.currentPassword ? 'border-red-500' : ''
                    }`}
                    placeholder="현재 비밀번호 입력"
                    disabled={submitting}
                  />
                  {errors.currentPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.currentPassword}
                    </p>
                  )}
                </div>

                {/* 새 비밀번호 */}
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-semibold mb-2"
                  >
                    새 비밀번호
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    className={`input-field ${
                      errors.newPassword ? 'border-red-500' : ''
                    }`}
                    placeholder="영문, 숫자 포함 8자 이상"
                    disabled={submitting}
                  />
                  {errors.newPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                  )}
                </div>

                {/* 새 비밀번호 확인 */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold mb-2"
                  >
                    새 비밀번호 확인
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className={`input-field ${
                      errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                    placeholder="새 비밀번호 다시 입력"
                    disabled={submitting}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    비밀번호 안전 수칙
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 최소 8자 이상</li>
                    <li>• 영문자 포함</li>
                    <li>• 숫자 포함</li>
                    <li>• 이전 비밀번호와 다른 비밀번호 사용 권장</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? '변경 중...' : '비밀번호 변경'}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* 계정 관리 */}
        <div className="card p-6">
          <h3 className="text-lg font-bold mb-4">계정 관리</h3>
          <div className="space-y-3">
            <button
              onClick={() => {
                if (
                  confirm(
                    '정말 탈퇴하시겠습니까?\n탈퇴 시 모든 데이터가 삭제되며 복구할 수 없습니다.'
                  )
                ) {
                  alert('회원 탈퇴 기능은 준비 중입니다.');
                }
              }}
              className="w-full p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-red-600">회원 탈퇴</p>
                  <p className="text-sm text-gray-600">
                    계정과 모든 데이터가 삭제됩니다
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
