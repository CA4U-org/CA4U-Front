import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Box, Flex, Heading, Icon, Image } from '@chakra-ui/react';

const TopHeader = ({ title, rightIcon, onRightIconClick }) => {
  return (
    <Flex justify={'space-between'} align={'center'} p={3}>
      {/* 뒤로가기 버튼과 로고를 묶어서 가로로 배치 */}
      <Icon
        as={IoArrowBack}
        boxSize={'24px'}
        onClick={() => window.history.back()} // 기본 뒤로가기 동작
      />
      {/* 가운데 타이틀 */}
      <Heading
        fontFamily={'Noto Sans KR'}
        fontSize={'16px'}
        fontWeight={'600'}
        margin={0}
        textAlign={'center'}
        grow={1}
      >
        {title}
      </Heading>
      {/* 오른쪽 아이콘과 onClick 이벤트 처리 */}
      {rightIcon ? (
        <Image
          src={rightIcon}
          alt="오른쪽 아이콘"
          boxSize={'24px'}
          onClick={onRightIconClick}
        />
      ) : (
        <Box boxSize={'24px'} />
      )}
    </Flex>
  );
};

export default TopHeader;
