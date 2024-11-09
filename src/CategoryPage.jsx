import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Card,
  CardBody,
  Tag,
  IconButton,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryClubs } from './api/club/clubApi';

// 카테고리별 배경색
const categoryColors = {
  academic: '#D4EAFF',
  culture: '#E2FFC5',
  sports: '#FFEDD2',
  hobby: '#EFE3FF',
  religion: '#FFF8BC',
  volunteer: '#FFDADC',
};

// URL 파라미터와 카테고리 ID/이름 매핑
const categoryMapping = {
  academic: { id: 1, name: '학술' },
  culture: { id: 2, name: '문화예술' },
  sports: { id: 3, name: '운동' },
  hobby: { id: 4, name: '취미' },
  religion: { id: 5, name: '종교' },
  volunteer: { id: 6, name: '봉사' },
};

// 카테고리별 설명
const categoryDescriptions = {
  academic: '지식의 발견을 함께하는 지성인들의 모임',
  culture: '예술적 감성을 나누는 문화인들의 모임',
  sports: '건강한 열정을 함께하는 체육인들의 모임',
  hobby: '공통 관심사로 모인 취미인들의 모임',
  religion: '믿음을 함께 나누는 종교인들의 모임',
  volunteer: '따뜻한 마음을 나누는 봉사자들의 모임',
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const bgColor = categoryColors[category];

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setLoading(true);
        const categoryId = categoryMapping[category]?.id;

        if (!categoryId) {
          throw new Error('유효하지 않은 카테고리입니다.');
        }

        const response = await getCategoryClubs(categoryId);

        if (response.success && Array.isArray(response.result)) {
          setClubs(response.result);
        } else {
          throw new Error('서버 응답 형식이 올바르지 않습니다.');
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
        toast({
          title: '동아리 정보를 불러오는데 실패했습니다.',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, [category, toast]);

  if (!categoryMapping[category]) {
    navigate('/');
    return null;
  }

  const handleClubClick = (clubId) => {
    if (clubId) {
      navigate(`/club/${clubId}`);
    } else {
      toast({
        title: '접근할 수 없습니다.',
        description: '해당 동아리의 정보를 불러올 수 없습니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <Box bg={bgColor} p={4} position="sticky" top={0} zIndex={10}>
        <HStack spacing={4} mb={2}>
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => navigate('/')}
            variant="ghost"
            aria-label="뒤로가기"
          />
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="xl" fontWeight="bold">
              {categoryMapping[category].name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {categoryDescriptions[category]}
            </Text>
          </VStack>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : clubs.length === 0 ? (
          <Text color="gray.500" fontSize="lg">
            현재 등록된 동아리가 없습니다.
          </Text>
        ) : (
          clubs.map((club) => (
            <Card
              key={club.id || Math.random()}
              width="100%"
              shadow="md"
              onClick={() => handleClubClick(club.id)}
              cursor="pointer"
              _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
            >
              <CardBody>
                <VStack align="stretch" spacing={3}>
                  <HStack justify="space-between">
                    <Text fontWeight="bold" fontSize="lg">
                      {club.clubNm}
                    </Text>
                    {club.actDayDescription && (
                      <Text fontSize="sm" color="gray.600">
                        {club.actDayDescription}
                      </Text>
                    )}
                  </HStack>

                  {club.briefDescription && (
                    <Text fontSize="sm" color="gray.700">
                      {club.briefDescription}
                    </Text>
                  )}

                  {club.recruitDescription && (
                    <Text fontSize="sm" color="gray.600">
                      {club.recruitDescription}
                    </Text>
                  )}

                  <HStack spacing={2} flexWrap="wrap">
                    <Tag size="sm" variant="subtle" colorScheme="blue">
                      {categoryMapping[category].name}
                    </Tag>
                    {club.targetPeopleDescription && (
                      <Tag size="sm" variant="subtle" colorScheme="green">
                        {club.targetPeopleDescription}
                      </Tag>
                    )}
                    {club.applyDescription && (
                      <Tag size="sm" variant="subtle" colorScheme="purple">
                        {club.applyDescription}
                      </Tag>
                    )}
                  </HStack>

                  <HStack
                    justify="space-between"
                    fontSize="sm"
                    color="gray.500"
                  >
                    {club.targetCycleDescription && (
                      <Text>{club.targetCycleDescription}</Text>
                    )}
                    {club.costDescription && (
                      <Text>{club.costDescription}</Text>
                    )}
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default CategoryPage;
