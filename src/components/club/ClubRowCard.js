import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function ClubRowCard({ club }) {
  return (
    <Flex
      borderRadius={'lg'}
      m={2}
      flexShrink={0}
      direction={'column'}
      border={'1px solid #eee'}
      w={'40'}
    >
      <Image
        src={club.imageUrl}
        boxSize={'40'}
        //image center, no repeat, cover
      />
      <Box p={2}>
        <Text fontWeight={'bolder'} fontSize={'xl'}>
          {club.name}
        </Text>
        <Text color={'gray'}>{club.description}</Text>
      </Box>
    </Flex>
  );
}
