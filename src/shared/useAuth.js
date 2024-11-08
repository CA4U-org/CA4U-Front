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
        setUser(res.result);

        if (
          res.result.registered === false &&
          window.location.pathname !== '/register'
        ) {
          window.location.href = '/register';
        }
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

/**
 * 로그인 정보가 필요할 때는 useAuth hook을 통해 정보를 주입받습니다.
 * const { user }  = useAuth();
 * 만약 user가 null이라면 로그인이 안되어있는 상태입니다.
 * @returns {{}}
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
