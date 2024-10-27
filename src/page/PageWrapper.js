import { Flex } from '@chakra-ui/react';
import { PageLoader } from '../components/PageLoader';

export function PageWrapper({ children, isLoading }) {
  return (
    <Flex direction={'column'} w={'full'} h={'100vh'}>
      {isLoading ? <PageLoader /> : children}
    </Flex>
  );
}
