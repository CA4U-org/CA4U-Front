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
  Select,
  Divider,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'; // 상단에 추가
import LoginForm from './LoginForm';

const SignUpForm = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    password: '',
    passwordConfirm: '',
    email: '',
    studentId: '',
    major: '',
    affiliation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 기본 유효성 검사
    if (!Object.values(formData).every((value) => value)) {
      toast({
        title: '입력 오류',
        description: '모든 필드를 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // 비밀번호 확인 검사
    if (formData.password !== formData.passwordConfirm) {
      toast({
        title: '비밀번호 오류',
        description: '비밀번호가 일치하지 않습니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: '이메일 오류',
        description: '올바른 이메일 형식을 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: '회원가입 완료',
      description: '성공적으로 가입되었습니다.',
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
        maxW="600px"
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
              회원가입
            </Heading>
            <Text textAlign="center" color="gray.500" fontSize="md" pb={4}>
              서비스 이용을 위한 회원가입
            </Text>
          </VStack>
        </CardHeader>

        <CardBody pt={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              {/* 이름 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  이름
                </FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름을 입력하세요"
                  bg="gray.50"
                  size="lg"
                  fontSize="md"
                  focusBorderColor="blue.500"
                />
              </FormControl>

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

              {/* 이메일 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  이메일
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일을 입력하세요"
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

              {/* 비밀번호 확인 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  비밀번호 확인
                </FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  placeholder="비밀번호를 다시 입력하세요"
                  bg="gray.50"
                  size="lg"
                  fontSize="md"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              {/* 학번 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  학번
                </FormLabel>
                <Input
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="학번을 입력하세요"
                  bg="gray.50"
                  size="lg"
                  fontSize="md"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              {/* 전공 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  전공
                </FormLabel>
                <Select
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  placeholder="전공을 선택하세요"
                  bg="gray.50"
                  size="lg"
                  fontSize="md"
                  focusBorderColor="blue.500"
                >
                  <option value="computer">컴퓨터공학과</option>
                  <option value="electronics">전자공학과</option>
                  <option value="mechanical">기계공학과</option>
                  {/* 필요한 전공 옵션 추가 */}
                </Select>
              </FormControl>

              {/* 소속 */}
              <FormControl isRequired>
                <FormLabel fontSize="md" color="gray.700" fontWeight="medium">
                  소속
                </FormLabel>
                <Input
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  placeholder="소속을 입력하세요"
                  bg="gray.50"
                  size="lg"
                  fontSize="md"
                  focusBorderColor="blue.500"
                />
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
                회원가입
              </Button>
            </VStack>
          </form>

          <Divider my={6} borderColor="gray.200" />

          <VStack spacing={4}>
            <Text color="gray.500" fontSize="md">
              이미 계정이 있으신가요?
            </Text>
            <Button
              variant="outline"
              colorScheme="blue"
              width="full"
              size="lg"
              fontSize="md"
              onClick={handleLoginClick}
              _hover={{
                bg: 'blue.50',
              }}
            >
              로그인하기
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

export default SignUpForm;
