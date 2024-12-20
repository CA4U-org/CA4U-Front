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
      <Image src={club.logoImgUrl} boxSize={'130px'} />
      <Box p={2}>
        <Text fontWeight={'bolder'} fontSize={'md'}>
          {club.clubNm}
        </Text>
        <Text color={'gray'} fontSize={'xs'} noOfLines={2}>
          {club.briefDescription}
        </Text>
      </Box>
    </Flex>
  );
}
