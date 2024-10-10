import { Box, Flex, Image, Show, Text } from '@chakra-ui/react';
import CA4UIcon from './assets/ca4u-icon.png';

function Branding() {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      bg={'white'}
      p={8}
      borderRadius={'lg'}
      boxShadow={'lg'}
    >
      <Image src={CA4UIcon} w={'100px'} h={'44px'} />
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
      <Text mt={1} fontSize={'sm'} color={'gray.800'}>
        중앙대 동아리가 당신의 손안에
      </Text>
    </Flex>
  );
}

export function MobileFrameWrapper(props) {
  return (
    <Flex bg={'#eee'} w={'100vw'} className={'no-drag'}>
      <Flex m={'0 auto'}>
        <Show above={'sm'}>
          <Flex
            w={'sm'}
            align={'center'}
            justify={'center'}
            direction={'column'}
          >
            <Branding />
          </Flex>
        </Show>
        <Box
          w={{ base: 'full', sm: '375px' }}
          h={'100vh'}
          overflowY={'scroll'}
          bgColor={'white'}
        >
          {/*이 곳에 애플리케이션 화면이 들어옵니다.*/}
          {props.children}
        </Box>
      </Flex>
    </Flex>
  );
}
