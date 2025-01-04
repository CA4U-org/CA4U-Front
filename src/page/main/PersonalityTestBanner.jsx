import { Flex, Text } from '@chakra-ui/react';
import openColor from 'open-color';
import React from 'react';

export const PersonalityTestBanner = () => {
  return (
    <Flex
      py={10}
      justify={'center'}
      align={'center'}
      direction={'column'}
      w={'full'}
      h={'54px'}
      bg={'white'}
      boxShadow={'md'}
      borderRadius={'md'}
      color={openColor.gray[8]}
    >
      <Text color={openColor.gray[7]}>
        어떤 동아리에 지원해야할지 고민이라면!
      </Text>
      <Text fontSize={'18px'} fontWeight={500}>
        ️⚽ 성격 테스트하고 동아리 추천 받기 🥂
      </Text>
    </Flex>
  );
};
