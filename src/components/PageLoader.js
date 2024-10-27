import { Flex, Spinner } from '@chakra-ui/react';

export function PageLoader() {
  return (
    <Flex w={'full'} h={'100vh'} justify={'center'} align={'center'}>
      <Spinner
        color={'cauBlue'}
        size={'xl'}
        thickness={'4px'}
        speed={'0.65s'}
      />
    </Flex>
  );
}
