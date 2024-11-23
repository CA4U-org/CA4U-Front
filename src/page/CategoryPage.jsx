import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Card,
  CardBody,
  Image,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryClubs } from '../api/club/clubApi';
import Header from '../components/Header/Header';
// 먼저 이미지들을 import 해줍니다
import academicIcon from '../assets/학술-icon.svg';
import cultureIcon from '../assets/문화예술-icon.svg';
import sportsIcon from '../assets/운동-icon.svg';
import hobbyIcon from '../assets/취미-icon.svg';
import religionIcon from '../assets/종교-icon.svg';
import volunteerIcon from '../assets/봉사-icon.svg';

// 카테고리 정보를 하나의 객체로 통합
const CATEGORIES = {
  academic: {
    id: 1,
    name: '학술',
    description: '지식의 바다를 항해하는 지성인들의 모임',
    icon: academicIcon,
    color: '#D4EAFF',
    emoji: '📚',
  },
  culture: {
    id: 2,
    name: '문화예술',
    description: '예술적 감성을 나누는 문화인들의 모임',
    icon: cultureIcon,
    color: '#E2FFC5',
    emoji: '🎨',
  },
  sports: {
    id: 3,
    name: '운동',
    description: '건강한 열정을 함께하는 체육인들의 모임',
    icon: sportsIcon,
    color: '#FFEDD2',
    emoji: '⚽',
  },
  hobby: {
    id: 4,
    name: '취미',
    description: '공통 관심사로 모인 취미인들의 모임',
    icon: hobbyIcon,
    color: '#EFE3FF',
    emoji: '🎮',
  },
  religion: {
    id: 5,
    name: '종교',
    description: '믿음을 함께 나누는 종교인들의 모임',
    icon: religionIcon,
    color: '#FFF8BC',
    emoji: '🕊',
  },
  volunteer: {
    id: 6,
    name: '봉사',
    description: '따뜻한 마음을 나누는 봉사자들의 모임',
    icon: volunteerIcon,
    color: '#FFDADC',
    emoji: '🤝',
  },
};
const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setLoading(true);
        const categoryId = CATEGORIES[category]?.id;
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

  if (!CATEGORIES[category]) {
    navigate('/');
    return null;
  }

  return (
    <Box bg="gray.50" minH="100vh">
      <Box position="sticky" top="0" zIndex="999" bg="white">
        <Header title="카테고리별로 보기" />

        {/* 카테고리 설명 섹션 */}
        <Box bg={CATEGORIES[category]?.color} py={8} shadow="sm">
          <HStack
            maxW="container.lg"
            mx="auto"
            px={4}
            spacing={8}
            align="center"
          >
            <Image
              src={CATEGORIES[category]?.icon}
              alt={CATEGORIES[category]?.name}
              boxSize="14"
              objectFit="contain"
            />
            <VStack align="flex-start" spacing={2}>
              <Text fontSize="2xl" fontWeight="extrabold" color="#454545">
                {CATEGORIES[category]?.name}
              </Text>
              <Text fontSize="sm" fontWeight="bold" color="#959595">
                {CATEGORIES[category]?.description}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>

      <VStack spacing={4} p={4} maxW="container.lg" mx="auto">
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
              shadow="lg"
              onClick={() => handleClubClick(club.id)}
              cursor="pointer"
              _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
              overflow="hidden"
            >
              <CardBody>
                <HStack spacing={6} justify="space-between" align="center">
                  <VStack align="flex-start" spacing={3} flex={1}>
                    <Text fontWeight="bold" fontSize="xl" color="gray.800">
                      {club.clubNm}
                    </Text>
                    <Text fontSize="sm" fontWeight="bold" color="#959595">
                      {club.briefDescription || '중앙대학교 중앙동아리'}
                    </Text>
                  </VStack>
                  <Image
                    src={club.logoImgUrl || '/default-club-logo.png'}
                    alt={club.clubNm}
                    boxSize="120px"
                    objectFit="contain"
                    bg="gray.100"
                    p={2}
                    borderRadius="md"
                  />
                </HStack>
              </CardBody>
            </Card>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default CategoryPage;
