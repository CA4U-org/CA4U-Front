// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    // 인증되지 않은 경우 로그인 페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  // 인증된 경우 해당 컴포넌트 렌더링
  return element;
};

export default PrivateRoute;
