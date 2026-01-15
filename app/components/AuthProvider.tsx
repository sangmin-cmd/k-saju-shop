'use client';

import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';
import { createContext, useContext, ReactNode } from 'react';

// Auth Context 타입
interface AuthContextType {
  user: any;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (provider?: string) => void;
  logout: () => void;
}

// Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider 내부 컴포넌트
function AuthProviderContent({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  
  const isLoading = status === 'loading';
  const isLoggedIn = !!session?.user;
  const user = session?.user || null;

  const login = (provider?: string) => {
    if (provider) {
      signIn(provider, { callbackUrl: '/' });
    } else {
      // 기본 로그인 페이지로 이동
      window.location.href = '/login';
    }
  };

  const logout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Context가 없으면 기본값 반환 (SSR 대응)
    return {
      user: null,
      isLoggedIn: false,
      isLoading: false,
      login: () => {},
      logout: () => {},
    };
  }
  return context;
}

// Auth Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthProviderContent>{children}</AuthProviderContent>
    </SessionProvider>
  );
}
