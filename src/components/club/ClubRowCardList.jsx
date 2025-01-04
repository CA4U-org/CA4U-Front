import { Flex } from '@chakra-ui/react';

export function ClubRowCardList({ children }) {
  return (
    <Flex
      wrap={'nowrap'}
      gap={2}
      overflowX={'scroll'}
      className={'hide-scrollbar'}
    >
      {children}
    </Flex>
  );
}
