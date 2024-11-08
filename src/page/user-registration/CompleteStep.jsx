import { PageWrapper } from '../PageWrapper';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import PuangSarang from '../../assets/푸앙_사랑.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { updateStudentInfo } from '../../api/members/updateStudentInfo';

export function CompleteStep({ name, department, major }) {
  const navigate = useNavigate();

  useEffect(() => {
    updateStudentInfo(name, department, major);
  }, []);

  return (
    <PageWrapper>
      <Flex
        p={3}
        direction={'column'}
        justify={'center'}
        align={'center'}
        h={'100vh'}
      >
        <Image src={PuangSarang} w={'150px'} />
        <Heading size={'md'} mt={3}>
          회원가입이 완료됐어요!
        </Heading>
        <Heading size={'md'} mt={3}>
          다양한 기능을 사용해보세요.
        </Heading>
        <Button
          mt={3}
          colorScheme={'blue'}
          onClick={() => {
            navigate('/');
          }}
        >
          동아리 보러 가기
        </Button>
      </Flex>
    </PageWrapper>
  );
}
