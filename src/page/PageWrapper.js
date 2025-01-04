import { Flex, Spacer } from '@chakra-ui/react';
import { PageLoader } from '../components/PageLoader';
import { BottomNavigationBar } from '../components/bnb/BottomNavigationBar';

export function PageWrapper({
  children,
  isLoading,
  bgColor = 'white',
  navItem,
}) {
  return (
    <Flex
      direction={'column'}
      w={'full'}
      h={'100vh'}
      overflow={'scroll'}
      bgColor={bgColor}
      className={'hide-scrollbar'}
    >
      {isLoading ? <PageLoader /> : children}
      <Spacer mb="120px" />
      <BottomNavigationBar navItem={navItem} />
    </Flex>
  );
}
