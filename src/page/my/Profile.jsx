import { Box, Flex, Image, Text } from '@chakra-ui/react';
import openColor from 'open-color';

export function Profile({ user }) {
  return (
    <Flex w={'full'} px={5} py={7} justify={'center'} align={'center'}>
      <Image
        src={'https://i.imgur.com/d56CAWR.png'}
        boxSize={'90px'}
        borderRadius={'full'}
        bg={openColor.gray[2]}
      />
      <Flex direction={'column'} px={4} flexGrow={1}>
        <Flex align={'center'}>
          <Text fontWeight={'bolder'} fontSize={'xl'}>
            {user.name}
          </Text>
          <Text fontSize={'sm'} ml={2} color={'gray'}>
            {user.studentId}
          </Text>
        </Flex>
        <Box mt={1}>
          <Text color={openColor.gray[7]} fontSize={'sm'}>
            {user.department}
          </Text>
          <Text color={openColor.gray[7]} fontSize={'sm'}>
            {user.major}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
