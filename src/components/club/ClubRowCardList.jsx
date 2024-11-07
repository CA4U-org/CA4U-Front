import { Flex } from '@chakra-ui/react';

export function ClubRowCardList({ children }) {
  return (
    <Flex wrap={'nowrap'} overflowX={'scroll'} className={'hide-scrollbar'}>
      {children}
    </Flex>
  );
}
