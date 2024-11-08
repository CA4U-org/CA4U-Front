import { Box, Flex, Show } from '@chakra-ui/react';
import { Introduction } from './Introduction';

export function MobileFrameWrapper(props) {
  return (
    <Flex bg={'#eee'} w={'100vw'} className={'no-drag '}>
      <Flex m={'0 auto'} w={{ base: 'full', sm: 'auto' }}>
        <Show above={'sm'}>
          <Flex
            w={'sm'}
            align={'center'}
            justify={'center'}
            direction={'column'}
          >
            <Introduction />
          </Flex>
        </Show>
        <Box
          w={{ base: 'full', sm: '375px' }}
          h={'100vh'}
          overflowY={'scroll'}
          bgColor={'white'}
          className={'hide-scrollbar'}
        >
          {/*이 곳에 애플리케이션 화면이 들어옵니다.*/}
          {props.children}
        </Box>
      </Flex>
    </Flex>
  );
}
