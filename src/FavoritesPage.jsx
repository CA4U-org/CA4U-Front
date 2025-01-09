import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import TopHeader from './components/TopHeader';
import { getFavorites, toggleFavorites } from './api/favorite/favorite';
import { useNavigate } from 'react-router-dom';

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getFavorites()
      .then((res) => {
        setFavorites(res.result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch favorites:', error);
        setIsLoading(false);
      });
  }, []);

  // removeFavorite 대신 toggleFavorite 사용
  const handleRemoveFavorite = async (clubId) => {
    try {
      await toggleFavorites(clubId);
      // 즐겨찾기 목록에서 제거
      setFavorites((prevFavorites) =>
        prevFavorites.filter((club) => club.id !== clubId)
      );
    } catch (error) {
      console.error('Failed to remove favorite:', error);
    }
  };

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return (
    <Box minH="100vh" bg="#f6f6f6">
      <TopHeader title={'즐겨찾기'} />
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="stretch">
          <Heading size="lg" mb={4}>
            즐겨찾기한 동아리
          </Heading>

          {favorites.length === 0 ? (
            <Center py={10}>
              <Text fontSize="lg" color="gray.500">
                즐겨찾기한 동아리가 없습니다.
              </Text>
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={6}>
              {favorites.map((club) => (
                <Card key={club.id} maxW="sm" overflow="hidden">
                  <Image
                    src={club.logoImgUrl || '/default-club-image.jpg'}
                    alt={club.clubNm}
                    height="200px"
                    objectFit="cover"
                  />

                  <CardBody>
                    <Stack spacing={3}>
                      <Heading size="md">{club.clubNm}</Heading>
                      <Text color="gray.600" fontSize="sm" noOfLines={2}>
                        {club.briefDescription}
                      </Text>

                      <Stack direction="row" flexWrap="wrap" spacing={2}>
                        <Badge colorScheme="blue">
                          {club.targetCycleDescription}
                        </Badge>
                        <Badge colorScheme="green">
                          {club.actDayDescription}
                        </Badge>
                      </Stack>

                      <Box>
                        <Text fontSize="sm" color="gray.600">
                          위치: {club.locationDescription}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          회비: {club.costDescription}원
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>

                  <Divider />

                  <CardFooter>
                    <ButtonGroup spacing={2}>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => navigate(`/club/${club.id}`)}
                      >
                        자세히 보기
                      </Button>
                      <Button
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => handleRemoveFavorite(club.id)}
                      >
                        즐겨찾기 해제
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
