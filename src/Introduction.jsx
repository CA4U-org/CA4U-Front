import { Flex, Image, Text } from '@chakra-ui/react';
import CA4UIcon from './assets/ca4u-icon.png';

export function Introduction() {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      bg={'white'}
      p={10}
      borderRadius={'2xl'}
      boxShadow={'lg'}
    >
      <Image src={CA4UIcon} w={'100px'} h={'44px'} />
      <IntroductionTitle />
      <Text mt={1} fontSize={'sm'} color={'gray.800'}>
        중앙대 동아리가 당신의 손안에
      </Text>
    </Flex>
  );
}

function IntroductionTitle() {
  return (
    <Text
      mt={3}
      fontFamily={'Noto Sans KR'}
      fontWeight={'bold'}
      fontSize={'xl'}
      color={'cauDarkBlue'}
    >
      Club & Academy{' '}
      <Text as={'span'} color={'cauRed'}>
        4
      </Text>{' '}
      U
    </Text>
  );
}
