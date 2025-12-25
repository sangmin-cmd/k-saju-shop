'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (user: User) => void;
  signOut: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 로컬 스토리지에서 세션 로드
  useEffect(() => {
    const loadSession = () => {
      try {
        const sessionData = localStorage.getItem('user_session');
        if (sessionData) {
          const userData = JSON.parse(sessionData);
          // Date 객체 복원
          userData.createdAt = new Date(userData.createdAt);
          userData.updatedAt = new Date(userData.updatedAt);
          setUser(userData);
        }
      } catch (error) {
        console.error('세션 로드 에러:', error);
        localStorage.removeItem('user_session');
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  // 로그인
  const signIn = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user_session', JSON.stringify(userData));
  };

  // 로그아웃
  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user_session');
  };

  // 사용자 정보 업데이트
  const updateUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user_session', JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Auth Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
