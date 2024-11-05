import { createContext, useContext, useEffect, useState } from 'react';
import { getMe } from '../api/members/getMe';
import { PageLoader } from '../components/PageLoader';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMe().then((res) => {
      if (res.success) {
        setUser(res.data);
      } else if (res.message === '로그인이 필요합니다.') {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
