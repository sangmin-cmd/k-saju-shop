import bcrypt from 'bcryptjs';
import { supabase, supabaseAdmin } from './supabase';
import { SignUpFormData, SignInFormData, User, DbUser } from './types';

// 비밀번호 해시 생성
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// 비밀번호 검증
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// 이메일 중복 확인
export async function checkEmailExists(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  return !!data && !error;
}

// 회원가입
export async function signUp(
  formData: SignUpFormData
): Promise<{ success: boolean; error?: string; userId?: string }> {
  try {
    // 이메일 중복 확인
    const emailExists = await checkEmailExists(formData.email);
    if (emailExists) {
      return { success: false, error: '이미 사용 중인 이메일입니다.' };
    }

    // 비밀번호 해시
    const passwordHash = await hashPassword(formData.password);

    // 사용자 생성
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email: formData.email,
          password_hash: passwordHash,
          name: formData.name,
          phone: formData.phone,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('회원가입 에러:', error);
      return { success: false, error: '회원가입 중 오류가 발생했습니다.' };
    }

    return { success: true, userId: data.id };
  } catch (error: any) {
    console.error('회원가입 에러:', error);
    return {
      success: false,
      error: error.message || '알 수 없는 오류가 발생했습니다.',
    };
  }
}

// 로그인
export async function signIn(
  formData: SignInFormData
): Promise<{ success: boolean; error?: string; user?: User }> {
  try {
    // 이메일로 사용자 조회
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', formData.email)
      .single();

    if (error || !data) {
      return { success: false, error: '이메일 또는 비밀번호가 올바르지 않습니다.' };
    }

    const dbUser = data as DbUser;

    // 비밀번호 검증
    const isValid = await verifyPassword(
      formData.password,
      dbUser.password_hash
    );

    if (!isValid) {
      return { success: false, error: '이메일 또는 비밀번호가 올바르지 않습니다.' };
    }

    // User 객체 변환
    const user: User = {
      id: dbUser.id,
      email: dbUser.email,
      name: dbUser.name,
      phone: dbUser.phone || undefined,
      createdAt: new Date(dbUser.created_at),
      updatedAt: new Date(dbUser.updated_at),
    };

    return { success: true, user };
  } catch (error: any) {
    console.error('로그인 에러:', error);
    return {
      success: false,
      error: error.message || '로그인 중 오류가 발생했습니다.',
    };
  }
}

// 사용자 정보 조회 (ID로)
export async function getUserById(
  userId: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !data) {
      return { success: false, error: '사용자를 찾을 수 없습니다.' };
    }

    const dbUser = data as DbUser;

    const user: User = {
      id: dbUser.id,
      email: dbUser.email,
      name: dbUser.name,
      phone: dbUser.phone || undefined,
      createdAt: new Date(dbUser.created_at),
      updatedAt: new Date(dbUser.updated_at),
    };

    return { success: true, user };
  } catch (error: any) {
    console.error('사용자 조회 에러:', error);
    return { success: false, error: '사용자 조회 중 오류가 발생했습니다.' };
  }
}

// 사용자 정보 업데이트
export async function updateUser(
  userId: string,
  updates: Partial<Pick<User, 'name' | 'phone'>>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('users')
      .update({
        name: updates.name,
        phone: updates.phone,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (error) {
      console.error('사용자 업데이트 에러:', error);
      return { success: false, error: '사용자 정보 업데이트에 실패했습니다.' };
    }

    return { success: true };
  } catch (error: any) {
    console.error('사용자 업데이트 에러:', error);
    return { success: false, error: '사용자 정보 업데이트 중 오류가 발생했습니다.' };
  }
}

// 비밀번호 변경
export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // 현재 비밀번호 확인
    const { data, error } = await supabase
      .from('users')
      .select('password_hash')
      .eq('id', userId)
      .single();

    if (error || !data) {
      return { success: false, error: '사용자를 찾을 수 없습니다.' };
    }

    const isValid = await verifyPassword(currentPassword, data.password_hash);
    if (!isValid) {
      return { success: false, error: '현재 비밀번호가 올바르지 않습니다.' };
    }

    // 새 비밀번호 해시
    const newPasswordHash = await hashPassword(newPassword);

    // 비밀번호 업데이트
    const { error: updateError } = await supabase
      .from('users')
      .update({
        password_hash: newPasswordHash,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (updateError) {
      console.error('비밀번호 변경 에러:', updateError);
      return { success: false, error: '비밀번호 변경에 실패했습니다.' };
    }

    return { success: true };
  } catch (error: any) {
    console.error('비밀번호 변경 에러:', error);
    return { success: false, error: '비밀번호 변경 중 오류가 발생했습니다.' };
  }
}

// 이메일 유효성 검증
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 비밀번호 유효성 검증
export function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('비밀번호는 최소 8자 이상이어야 합니다.');
  }

  if (!/[A-Za-z]/.test(password)) {
    errors.push('비밀번호는 영문자를 포함해야 합니다.');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('비밀번호는 숫자를 포함해야 합니다.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// 전화번호 유효성 검증
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
  return phoneRegex.test(phone.replace(/-/g, ''));
}
