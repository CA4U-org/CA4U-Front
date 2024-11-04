// SearchPage.jsx
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
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import { ChevronLeftIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchClubs } from './api/club/clubApi';

// 모크 데이터 생성
const mockClubs = [
  {
    id: 'club-1',
    name: '타박네',
    description: '중앙대학교 종양동아리 국제솔연구회',
    tags: ['동아리연합회', '문화예술'],
    period: '03-05월',
    status: '상시모집',
    category: '문화예술',
    logo: 'CBN',
  },
  // ... 더 많은 모크 데이터 추가 가능
];

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return;

      setLoading(true);

      try {
        const results = await searchClubs(searchQuery);
        setSearchResults = results;
      } catch (error) {
        console.error('search failed', error);
        //에러 로직 추가
      } finally {
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  // 실제 구현시에는 여기에 검색 로직 추가
  /*const searchResults = mockClubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  */

  return (
    <Box bg="gray.50" minH="100vh">
      {/* 헤더 영역 */}
      <Box
        bg="white"
        p={4}
        position="sticky"
        top={0}
        zIndex={10}
        boxShadow="sm"
      >
        <HStack spacing={4} mb={4}>
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => navigate(-1)}
            variant="ghost"
            aria-label="뒤로가기"
          />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="동아리를 검색해보세요"
              defaultValue={searchQuery}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/search?query=${e.target.value}`);
                }
              }}
            />
          </InputGroup>
        </HStack>

        {/* 필터 탭 */}
        <Tabs size="sm" variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>전체</Tab>
            <Tab>신규모집</Tab>
            <Tab>카테고리</Tab>
            <Tab>형식</Tab>
          </TabList>
        </Tabs>
      </Box>

      {/* 검색 결과 */}
      <VStack spacing={4} p={4}>
        <HStack w="100%" justify="space-between">
          <Text color="gray.600">총 {searchResults.length}개의 검색결과</Text>
        </HStack>

        {searchResults.map((club) => (
          <Card
            key={club.id}
            width="100%"
            shadow="md"
            onClick={() => navigate(`/club/${club.id}`)}
            cursor="pointer"
            _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
          >
            <CardBody>
              <HStack justify="space-between" alignItems="flex-start">
                <Box>
                  <Text fontWeight="bold" fontSize="lg" mb={1}>
                    {club.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={2}>
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
                </Box>
                <Box
                  bg="gray.100"
                  p={2}
                  borderRadius="md"
                  fontSize="sm"
                  fontFamily="mono"
                >
                  {club.logo}
                </Box>
              </HStack>
              <HStack mt={3} fontSize="sm" color="gray.500" spacing={4}>
                <Text>{club.period}</Text>
                <Text
                  color={club.status === '상시모집' ? 'green.500' : 'red.500'}
                >
                  {club.status}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        ))}

        {searchResults.length === 0 && (
          <Box textAlign="center" py={8}>
            <Text color="gray.500">검색 결과가 없습니다</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SearchPage;
