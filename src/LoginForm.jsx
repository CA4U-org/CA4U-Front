import React, { useState } from 'react';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useToast,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  Checkbox,
  Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'; // 상단에 추가

import googleLogo from './assets/google-logo-icon.png';

const LoginForm = () => {
  const navigate = useNavigate(); // 추가

  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    rememberMe: false,
  });

  // 회원가입 버튼 클릭 핸들러
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 기본 유효성 검사
    if (!formData.userId || !formData.password) {
      toast({
        title: '입력 오류',
        description: '아이디와 비밀번호를 모두 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: '로그인 성공',
      description: '환영합니다!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
    >
      <Heading mb={8} fontSize="4xl" color="blue.600" letterSpacing="tight">
        CA
        <Text as="span" color="red.500">
          4
        </Text>
        U
      </Heading>

      <Card
        w="full"
        maxW="400px"
        boxShadow="xl"
        borderRadius="xl"
        bg="white"
        px={2}
      >
        <CardHeader pt={8} pb={0}>
          <VStack spacing={3}>
            <Heading
              size="xl"
              textAlign="center"
              color="gray.700"
              fontWeight="bold"
            >
              로그인
            </Heading>
            <Text textAlign="center" color="gray.500" fontSize="md" pb={4}>
              서비스 이용을 위한 로그인
            </Text>
          </VStack>
        </CardHeader>

        <CardBody pt={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              {/* 아이디 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  아이디
                </FormLabel>
                <Input
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="아이디를 입력하세요"
                  bg="gray.50"
                  size="lg"
                  fontSize="md"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              {/* 비밀번호 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  비밀번호
                </FormLabel>
                <InputGroup size="lg">
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력하세요"
                    bg="gray.50"
                    fontSize="md"
                    focusBorderColor="blue.500"
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      variant="ghost"
                      color="gray.400"
                      _hover={{ color: 'gray.600' }}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* 자동 로그인 */}
              <FormControl>
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  colorScheme="blue"
                  size="md"
                >
                  자동 로그인
                </Checkbox>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
                mt={6}
                py={6}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.2s"
              >
                로그인
              </Button>
            </VStack>
          </form>

          <Divider my={6} borderColor="gray.200" />
          {/* 구글 로그인 버튼 */}
          <Button
            width="full"
            variant="outline"
            size="lg"
            onClick={() => {
              // 프론트엔드 도메인으로 리다이렉트되도록 설정
              const frontendURL = 'http://localhost:3000'; // 현재 프론트엔드 도메인
              const redirectUri = `${frontendURL}/oauth/redirect`; // 로그인 후 리다이렉트될 경로

              window.location.href = `http://ec2-15-165-135-235.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google?redirect_uri=${encodeURIComponent(redirectUri)}`;
            }}
            py={6}
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            _hover={{
              bg: 'gray.50',
            }}
          >
            <Image src={googleLogo} alt="Google Logo" boxSize="24px" />
            Google 계정으로 로그인
          </Button>

          <Divider my={6} borderColor="gray.200" />

          <VStack spacing={4}>
            <Text color="gray.500" fontSize="md">
              아직 계정이 없으신가요?
            </Text>
            <Button
              variant="outline"
              colorScheme="blue"
              width="full"
              size="lg"
              fontSize="md"
              onClick={handleSignUpClick}
              _hover={{
                bg: 'blue.50',
              }}
            >
              회원가입하기
            </Button>
          </VStack>
        </CardBody>
      </Card>

      <Text mt={8} color="gray.500" fontSize="sm">
        © 2024 Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default LoginForm;
