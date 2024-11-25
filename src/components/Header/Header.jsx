import React from 'react';
import { Box, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import ca4uHeaderIcon from '../../assets/ca4u-header.svg';

const Header = ({ title = '카테고리별로 보기', color = 'white' }) => {
  // color prop 기본값 추가
  const navigate = useNavigate();

  return (
    <Box
      as="header"
      borderBottom="1px"
      borderColor="gray.200"
      bg="white"
      position="sticky"
      top="0"
      zIndex="999"
      width="100%"ㅈ
      maxWidth="inherit"
      backgroundColor={color}
    >
      <HStack
        height="56px"
        px={4}
        spacing={3}
        alignItems="center"
        maxWidth="inherit"
        position="relative"
      >
        {/* 왼쪽 그룹 (뒤로가기 + 로고) */}
        <HStack spacing={0}>
          <IconButton
            icon={<ChevronLeftIcon boxSize={6} />}
            variant="ghost"
            onClick={() => navigate(-1)}
            aria-label="뒤로가기"
          />
          <Image
            src={ca4uHeaderIcon}
            alt="CA4U Logo"
            boxSize="32px" // 높이와 너비를 동시에 설정
          />
        </HStack>

        {/* 가운데 제목 - color prop 적용 */}
        <Text
          fontSize="lg"
          fontWeight="600"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          width="fit-content"
          textAlign="center"
        >
          {title}
        </Text>
      </HStack>
    </Box>
  );
};

export default Header;
