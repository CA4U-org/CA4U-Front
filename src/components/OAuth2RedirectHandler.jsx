// src/components/OAuth2RedirectHandler.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // URL에서 토큰 정보 추출
    const token = new URLSearchParams(window.location.search).get('token');

    if (token) {
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', token);

      toast({
        title: '로그인 성공',
        description: '환영합니다!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // 메인 페이지로 리다이렉트
      navigate('/');
    } else {
      toast({
        title: '로그인 실패',
        description: '로그인에 실패했습니다. 다시 시도해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
    }
  }, [navigate, toast]);

  return null; // 또는 로딩 스피너를 보여줄 수 있습니다
};

export default OAuth2RedirectHandler;
