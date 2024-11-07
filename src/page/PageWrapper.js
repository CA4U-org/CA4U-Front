import { Flex } from '@chakra-ui/react';
import { PageLoader } from '../components/PageLoader';

export function PageWrapper({ children, isLoading, bgColor = 'white' }) {
  return (
    <Flex direction={'column'} w={'full'} h={'100vh'} bgColor={bgColor}>
      {isLoading ? <PageLoader /> : children}
    </Flex>
  );
}
