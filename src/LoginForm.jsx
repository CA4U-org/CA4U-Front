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
      p={4}
    >
      <Heading fontSize="3xl" color="blue.600" mb={4}>
        CA
        <Text as="span" color="red.500">
          4
        </Text>
        U
      </Heading>

      <VStack
        spacing={6}
        w="full"
        maxW="300px"
        boxShadow="lg"
        p={6}
        bg="white"
        borderRadius="lg"
      >
        <Button
          width="full"
          variant="outline"
          size="lg"
          onClick={() =>
            (window.location.href = `${SERVER_URL}/oauth2/authorization/google`)
          }
          py={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
          _hover={{ bg: 'gray.100' }}
        >
          <Image src={googleLogo} alt="Google Logo" boxSize="24px" />
          Google 계정으로 로그인
        </Button>
        <Button onClick={() => navigate('/')}>뒤로가기</Button>
      </VStack>
      <Text mt={8} color="gray.500" fontSize="sm">
        © 2024 Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default SocialLogin;
