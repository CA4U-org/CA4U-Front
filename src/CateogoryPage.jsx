// CategoryPage.jsx
import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Card,
  CardBody,
  Tag,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';

// 카테고리별 배경색 설정
const categoryColors = {
  academic: '#D4EAFF',
  culture: '#E2FFC5',
  sports: '#FFEDD2',
  hobby: '#EFE3FF',
  religion: '#FFF8BC',
  volunteer: '#FFDADC',
};

// 카테고리별 한글 이름 매핑
const categoryNames = {
  academic: '학술',
  culture: '문화예술',
  sports: '운동',
  hobby: '취미',
  religion: '종교',
  volunteer: '봉사',
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

// 모크 데이터 생성 함수
const generateMockClubs = (category) => {
  const clubTypes = {
    academic: ['스터디', '연구회', '학회', '토론회', '세미나'],
    culture: ['밴드', '합창단', '연극', '미술', '댄스'],
    sports: ['축구', '농구', '야구', '탁구', '배드민턴'],
    hobby: ['사진', '영화', '독서', '요리', '여행'],
    religion: ['기독교', '천주교', '불교', '원불교', '이슬람'],
    volunteer: ['지역봉사', '교육봉사', '환경봉사', '국제봉사', '의료봉사'],
  };

  return Array.from({ length: 10 }, (_, i) => ({
    id: `${category}-${i + 1}`,
    name: `${clubTypes[category][i % 5]} ${i + 1}팀`,
    description: `중앙대학교 ${categoryNames[category]} 동아리입니다. ${categoryDescriptions[category]}`,
    tags: ['동아리연합회', categoryNames[category], clubTypes[category][i % 5]],
    period: `${(i % 12) + 1}월-${((i + 2) % 12) + 1}월`,
    status: i % 2 === 0 ? '상시모집' : '모집마감',
    members: Math.floor(Math.random() * 30) + 10,
  }));
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const clubs = generateMockClubs(category);
  const bgColor = categoryColors[category];

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
              {categoryNames[category]}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {categoryDescriptions[category]}
            </Text>
          </VStack>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        {clubs.map((club) => (
          <Card
            key={club.id}
            width="100%"
            shadow="md"
            onClick={() => navigate(`/club/${club.id}`)}
            cursor="pointer"
            _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
          >
            <CardBody>
              <VStack align="stretch" spacing={2}>
                <HStack justify="space-between">
                  <Text fontWeight="bold" fontSize="lg">
                    {club.name}
                  </Text>
                  <Text
                    color={club.status === '상시모집' ? 'green.500' : 'red.500'}
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {club.status}
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  {club.description}
                </Text>
                <HStack spacing={2}>
                  {club.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      size="sm"
                      variant="subtle"
                      colorScheme={index === 0 ? 'blue' : 'gray'}
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>
                <HStack justify="space-between" fontSize="sm" color="gray.500">
                  <Text>모집기간: {club.period}</Text>
                  <Text>현재 인원: {club.members}명</Text>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Box>
  );
};

export default CategoryPage;
