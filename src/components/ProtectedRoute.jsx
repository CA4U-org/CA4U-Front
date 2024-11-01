// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 여기서 실제 인증 상태를 확인하는 로직을 구현하세요
  const isAuthenticated = false; // 예시: 실제로는 인증 상태를 확인하는 로직이 필요합니다

  if (!isAuthenticated) {
    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
