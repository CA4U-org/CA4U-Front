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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginForm = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    rememberMe: false,
  });

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
              onClick={() => console.log('회원가입 페이지로 이동')}
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
