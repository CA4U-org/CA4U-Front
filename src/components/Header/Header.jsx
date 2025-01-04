import React from 'react';
import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

const Header = ({ title }) => {
  // color prop 기본값 추가
  const navigate = useNavigate();

  return (
    <Box
      as="header"
      // borderBottom="1px"
      bg="white"
      position="sticky"
      top="0"
      zIndex="999"
      width="100%"
      maxWidth="inherit"
      bgColor={'inherit'}
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
            icon={<IoArrowBackOutline size={'20px'} />}
            variant="ghost"
            onClick={() => navigate(-1)}
            aria-label="뒤로가기"
          />
        </HStack>

        {/* 가운데 제목 - color prop 적용 */}
        <Text
          fontSize="md"
          fontWeight="500"
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
