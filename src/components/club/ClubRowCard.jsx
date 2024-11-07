import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function ClubRowCard({ club }) {
  const navigate = useNavigate();
  return (
    <Flex
      borderRadius={'lg'}
      m={2}
      flexShrink={0}
      direction={'column'}
      border={'1px solid #eee'}
      w={'130px'}
      onClick={() => navigate(`/club/${club.id}`)}
    >
      <Image
        src={club.imageUrl}
        boxSize={'130px'}
        //image center, no repeat, cover
      />
      <Box p={2}>
        <Text fontWeight={'bolder'} fontSize={'md'}>
          {club.name}
        </Text>
        <Text color={'gray'} fontSize={'xs'}>
          {club.description}
        </Text>
      </Box>
    </Flex>
  );
}
