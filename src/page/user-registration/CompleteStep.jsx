import { PageWrapper } from '../PageWrapper';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import PuangSarang from '../../assets/푸앙_사랑.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateStudentInfo } from '../../api/members/updateStudentInfo';
import Confetti from 'react-confetti';

export function CompleteStep({ name, department, major, id }) {
  const [confetting, setConfetting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setConfetting(false);
    }, 5000);
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    updateStudentInfo(name, department, major, id);
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
            window.location.href = '/';
          }}
        >
          동아리 보러 가기
        </Button>
        {confetting && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={1000}
            recycle={false}
          />
        )}
      </Flex>
    </PageWrapper>
  );
}
