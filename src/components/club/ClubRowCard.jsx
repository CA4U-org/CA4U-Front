import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import openColor from 'open-color';

export function ClubRowCard({ club }) {
  const navigate = useNavigate();
  return (
    <Flex
      borderRadius={'lg'}
      flexShrink={0}
      direction={'column'}
      border={'1px solid #eee'}
      w={'120px'}
      boxShadow={'md'}
      my={1}
      onClick={() => navigate(`/club/${club.id}`)}
    >
      <Image src={club.logoImgUrl} boxSize={'120px'} borderTopRadius={'lg'} />
      <Box p={2} bg={'white'} borderBottomRadius={'lg'} h={'80px'}>
        <Text
          fontWeight={'bolder'}
          fontSize={'sm'}
          noOfLines={1}
          color={openColor.gray[9]}
        >
          {club.clubNm}
        </Text>
        <Text color={openColor.gray[7]} fontSize={'xs'} noOfLines={2} mt={1}>
          {club.briefDescription}
        </Text>
      </Box>
    </Flex>
  );
}
