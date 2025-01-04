import React, { useState } from 'react';
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from './shared/const/consts';
import googleLogo from './assets/google-logo-icon.png';
import { PageWrapper } from './page/PageWrapper';
import openColor from 'open-color';

const SocialLogin = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageWrapper navItem={'마이페이지'}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bg={'white'}
        p={6}
      >
        <VStack spacing={3} display={'flex'} align={'center'} p={2} w={'full'}>
          <Heading fontSize="4xl" color="blue.600">
            CA
            <Text as="span" color="red.500">
              4
            </Text>
            U
          </Heading>
          <Text
            textAlign={'center'}
            fontSize={'xl'}
            fontWeight={600}
            mb={'16px'}
          >
            CA4U와 함께 <br /> 행복한 대학생활을 시작하세요!
          </Text>
          <Box
            w={'full'}
            h={'54px'}
            border={'1px solid'}
            borderColor={openColor.gray[4]}
            borderRadius={'md'}
          >
            <Box
              fontSize={'10px'}
              h={'12px'}
              mt={1}
              p={1}
              ml={1}
              color={openColor.gray[7]}
            >
              아이디 혹은 이메일
            </Box>
            <Input
              fontSize={'14px'}
              h={'40px'}
              border="none"
              p={2}
              _focus={{
                border: 'none',
                boxShadow: 'none', // focus 상태의 시각적 강조 제거
              }}
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></Input>
          </Box>
          <Box
            w={'full'}
            h={'54px'}
            border={'1px solid'}
            borderColor={openColor.gray[4]}
            borderRadius={'md'}
          >
            <Box
              fontSize={'10px'}
              h={'12px'}
              p={1}
              ml={1}
              color={openColor.gray[7]}
              mt={1}
            >
              비밀번호
            </Box>
            <Input
              fontSize={'14px'}
              h={'40px'}
              border="none"
              type={'password'}
              p={2}
              _focus={{
                border: 'none',
                boxShadow: 'none', // focus 상태의 시각적 강조 제거
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Box>

          <Button
            mt={'8px'}
            h={'48px'}
            w={'full'}
            bg={'cauBlue'}
            color={'white'}
            fontSize={'16px'}
          >
            로그인
          </Button>

          <Box
            w={'full'}
            color={openColor.gray[7]}
            textAlign={'center'}
            mt={'8px'}
            fontSize={'14px'}
          >
            회원가입 | 비밀번호 찾기
          </Box>
          <Box w={'full'} mt={'32px'} ml={'4px'}>
            <Box position="relative">
              <Divider borderColor={openColor.gray[4]} borderWidth={'1px'} />
              <AbsoluteCenter
                bgColor={'white'}
                w={'40px'}
                textAlign={'center'}
                color={openColor.gray[6]}
              >
                or
              </AbsoluteCenter>
            </Box>
          </Box>
          <Button
            w={'full'}
            variant="outline"
            fontSize={'14px'}
            onClick={() =>
              (window.location.href = `${SERVER_URL}/oauth2/authorization/google`)
            }
            display="flex"
            alignItems="center"
            justifyContent="center"
            h={'48px'}
            borderColor={openColor.gray[2]}
            mt={'8px'}
          >
            <Image
              src={googleLogo}
              alt="Google Logo"
              boxSize="24px"
              mr={'12px'}
            />
            Google 계정으로 로그인
          </Button>
        </VStack>
        <Text mt={8} color="gray.500" fontSize="sm">
          © 2024 Your Company. All rights reserved.
        </Text>
      </Box>
    </PageWrapper>
  );
};

export default SocialLogin;
