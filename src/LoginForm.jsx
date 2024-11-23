import React from 'react';
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import googleLogo from './assets/google-logo-icon.png';
import { SERVER_URL } from './shared/const/consts';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
      p={6}
    >
      <VStack
        spacing={6}
        display={'flex'}
        align={'center'}
        boxShadow="lg"
        p={6}
        bg="white"
        borderRadius="lg"
        w={'full'}
      >
        <Heading fontSize="4xl" color="blue.600">
          CA
          <Text as="span" color="red.500">
            4
          </Text>
          U
        </Heading>
        <Text textAlign={'center'} fontSize={'xl'} fontWeight={600}>
          CA4U와 함께 <br /> 행복한 대학생활을 시작하세요!
        </Text>
        <Button
          w={'full'}
          variant="outline"
          size="lg"
          onClick={() =>
            (window.location.href = `${SERVER_URL}/oauth2/authorization/google`)
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
          h={'50px'}
        >
          <Image src={googleLogo} alt="Google Logo" boxSize="24px" />
          Google 계정으로 로그인
        </Button>
        <Button w={'full'} h={'50px'} onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </VStack>
      <Text mt={8} color="gray.500" fontSize="sm">
        © 2024 Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default SocialLogin;
