import React, { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Card,
  CardBody,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Tag,
  Tabs,
  Tab,
  TabList,
} from '@chakra-ui/react';
import { ChevronLeftIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 예시 데이터 (API 호출 결과)
const searchClubs = async (query) => {
  try {
    const response = await axios.get(`/api/clubs`, {
      params: { search: query }, // API 호출 시 쿼리 파라미터로 전달
    });
    return response.data; // 클럽 데이터를 배열로 반환
  } catch (error) {
    console.error('Error searching clubs:', error);
    throw error;
  }
};

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      // 빈 검색어가 아닐 때만 검색
      setSearchQuery(e.target.value.trim());
      navigate(`/search?query=${encodeURIComponent(e.target.value.trim())}`);
    }
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return;

      setLoading(true);

      try {
        const results = await searchClubs(searchQuery);

        // API 응답이 배열인지 확인 후 상태 업데이트
        if (Array.isArray(results)) {
          setSearchResults(results); // 배열이면 상태 업데이트
        } else {
          setSearchResults([]); // 배열이 아니면 빈 배열로 처리
        }
      } catch (error) {
        console.error('search failed', error);
        setSearchResults([]); // 에러 발생 시 빈 배열로 초기화
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

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
              onKeyUp={handleSearch}
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

        {searchResults.length > 0 ? (
          searchResults.map((club) => (
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
                      {club.clubNm} {/* 클럽 이름 */}
                    </Text>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                      {club.briefDescription} {/* 간략 설명 */}
                    </Text>
                    <HStack spacing={2}>
                      <Tag size="sm" variant="subtle" colorScheme="blue">
                        {club.targetPeopleDescription} {/* 대상 설명 */}
                      </Tag>
                      <Tag size="sm" variant="subtle" colorScheme="green">
                        {club.targetCycleDescription} {/* 모집 주기 */}
                      </Tag>
                    </HStack>
                  </Box>
                  <Box
                    bg="gray.100"
                    p={2}
                    borderRadius="md"
                    fontSize="sm"
                    fontFamily="mono"
                  >
                    <img
                      src={club.logoImgUrl}
                      alt="Club Logo"
                      width="50"
                      height="50"
                    />{' '}
                    {/* 로고 이미지 */}
                  </Box>
                </HStack>
                <HStack mt={3} fontSize="sm" color="gray.500" spacing={4}>
                  <Text>{club.actDayDescription}</Text>
                  <Text
                    color={
                      club.recruitDescription === '상시모집'
                        ? 'green.500'
                        : 'red.500'
                    }
                  >
                    {club.recruitDescription} {/* 모집 상태 */}
                  </Text>
                </HStack>
              </CardBody>
            </Card>
          ))
        ) : (
          <Box textAlign="center" py={8}>
            <Text color="gray.500">검색 결과가 없습니다</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SearchPage;
