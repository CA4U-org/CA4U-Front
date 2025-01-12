import { Box, Grid, Image, Text } from '@chakra-ui/react';
import openColor from 'open-color';
import { useNavigate } from 'react-router-dom';

export const SearchResult = ({ clubs }) => {
  const navigate = useNavigate();
  if (clubs.length === 0) {
    return <div>검색 결과가 없습니다.</div>;
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {clubs.map((club) => (
        <Box
          w={'full'}
          key={club.id}
          bg={'white'}
          boxShadow={'md'}
          borderRadius={'md'}
          onClick={() => {
            navigate(`/club/${club.id}`);
          }}
        >
          <Image src={club.logoImgUrl} borderTopRadius={'md'} aspectRatio={1} />
          <Box p={2} h={'80px'}>
            <Text color={openColor.gray[8]} fontWeight={600}>
              {club.clubNm}
            </Text>
            <Text color={openColor.gray[7]} fontSize={'14px'} noOfLines={2}>
              {club.briefDescription}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};
