import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
  Flex,
  Divider,
  Tag,
  TagLabel,
  TagCloseButton,
  IconButton,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Header from '../components/Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';

import { RepeatIcon, SearchIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // 컴포넌트 마운트 시 location state에서 검색어 가져오기
  useEffect(() => {
    if (location.state?.query) {
      setSearchQuery(location.state.query);
    }
  }, [location.state]);

  // 검색 이벤트 핸들러
  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setSearchQuery(e.target.value.trim());
      // 현재의 필터 상태와 함께 새로운 검색어로 state 업데이트
      navigate('/search', {
        state: {
          query: e.target.value.trim(),
          filters: filterValues,
        },
        replace: true, // 현재 히스토리 항목을 대체
      });
    }
  };

  // 검색 버튼 클릭 핸들러
  const handleSearchButtonClick = () => {
    if (searchQuery.trim()) {
      navigate('/search', {
        state: {
          query: searchQuery,
          filters: filterValues,
        },
        replace: true,
      });
    }
  };

  const unitFilterData = {
    전체: {
      options: [
        { value: 'all', label: '중앙대학교 전체' },
        { value: 'department', label: '단과대/학과 소속' },
      ],
    },
    '단과대/학과 소속': {
      options: [
        { value: 'business', label: '경영경제대학' },
        { value: 'humanities', label: '인문대학' },
        { value: 'social', label: '사회과학대학' },
        { value: 'engineering', label: '소프트웨어대학' },
        { value: 'ict', label: '정보통신대학' },
        { value: 'natural', label: '자연과학대학' },
        { value: 'medicine', label: '의과대학' },
        { value: 'art', label: '예술대학' },
      ],
    },
    경영경제대학: {
      options: [
        { value: 'business_all', label: '경영경제대학 소속' },
        { value: 'department_all', label: '학과(부) 소속' },
      ],
    },
    '학과(부) 소속': {
      options: [
        { value: 'business_admin', label: '경영학부 소속' },
        { value: 'global_business', label: '글로벌경영전공' },
        { value: 'applied_statistics', label: '응용통계학과' },
        { value: 'economics', label: '경제학과' },
        { value: 'industrial_security', label: '산업보안학과' },
        { value: 'global_logistics', label: '글로벌물류학과' },
      ],
    },
  };

  const filterCategories = [
    {
      id: 'recruiting',
      label: '모집중',
      options: [
        { value: 'active', label: '모집중' },
        { value: 'inactive', label: '모집마감' },
      ],
    },
    {
      id: 'category',
      label: '카테고리',
      options: [
        { value: 'academic', label: '학술' },
        { value: 'culture', label: '문화예술' },
        { value: 'sports', label: '운동' },
        { value: 'hobby', label: '취미' },
        { value: 'religion', label: '종교' },
        { value: 'volunteer', label: '봉사' },
      ],
    },
    {
      id: 'format',
      label: '형식',
      options: [
        { value: 'central', label: '중앙동아리' },
        { value: 'department', label: '과동아리' },
        { value: 'study', label: '스터디' },
      ],
    },
    {
      id: 'scale',
      label: '규모',
      options: [
        { value: 'small', label: '소규모' },
        { value: 'medium', label: '중규모' },
        { value: 'large', label: '대규모' },
      ],
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterValues, setFilterValues] = useState({
    recruiting: [],
    unit: [],
    category: [],
    format: [],
    scale: [],
  });
  const [unitPath, setUnitPath] = useState(['전체']);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filterScrollRef = useRef(null);

  const handleFilterClick = (filter) => {
    if (filter.label === '단위') {
      setUnitPath(['전체']);
    }
    setSelectedFilter(filter);
    onOpen();
  };

  const handleFilterChange = (value, label) => {
    if (selectedFilter?.label === '단위') {
      const currentOption = unitFilterData[
        unitPath[unitPath.length - 1]
      ].options.find((opt) => opt.value === value);

      if (currentOption && unitFilterData[currentOption.label]) {
        setUnitPath((prev) => [...prev, currentOption.label]);
      } else {
        setFilterValues((prev) => ({
          ...prev,
          unit: [...prev.unit, value],
        }));
      }
    } else if (selectedFilter) {
      setFilterValues((prev) => {
        const currentValues = prev[selectedFilter.id];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];

        return {
          ...prev,
          [selectedFilter.id]: newValues,
        };
      });
    }
  };

  const handleBreadcrumbClick = (index) => {
    setUnitPath((prev) => prev.slice(0, index + 1));
  };

  const resetCurrentFilter = () => {
    if (selectedFilter?.label === '단위') {
      setUnitPath(['전체']);
      setFilterValues((prev) => ({
        ...prev,
        unit: [],
      }));
    } else if (selectedFilter) {
      setFilterValues((prev) => ({
        ...prev,
        [selectedFilter.id]: [],
      }));
    }
  };

  const removeFilter = (categoryId, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].filter((v) => v !== value),
    }));
  };

  const getSelectedFilterLabels = () => {
    if (!selectedFilter) return [];
    if (selectedFilter.label === '단위') {
      return filterValues.unit.map((value) => {
        // 모든 unit options를 순회하며 해당 value의 label을 찾습니다
        for (const category in unitFilterData) {
          const option = unitFilterData[category].options.find(
            (opt) => opt.value === value
          );
          if (option) return option.label;
        }
        return value;
      });
    }
    return filterValues[selectedFilter.id].map((value) => {
      const option = selectedFilter.options.find((opt) => opt.value === value);
      return option ? option.label : value;
    });
  };

  const hasActiveFilters = Object.values(filterValues).some(
    (values) => values.length > 0
  );

  const hasCurrentFilters = selectedFilter
    ? selectedFilter.label === '단위'
      ? filterValues.unit.length > 0
      : filterValues[selectedFilter.id].length > 0
    : false;

  const renderModalContent = () => {
    if (selectedFilter?.label === '단위') {
      return (
        <>
          <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} mb={4}>
            {unitPath.map((path, index) => (
              <BreadcrumbItem key={path}>
                <BreadcrumbLink
                  onClick={() => handleBreadcrumbClick(index)}
                  color={
                    index === unitPath.length - 1 ? 'blue.500' : 'gray.500'
                  }
                  fontWeight={index === unitPath.length - 1 ? 'bold' : 'normal'}
                >
                  {path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <VStack align="flex-start" spacing={3} width="100%">
            {unitFilterData[unitPath[unitPath.length - 1]].options.map(
              (option) => (
                <Checkbox
                  key={option.value}
                  isChecked={filterValues.unit.includes(option.value)}
                  onChange={() =>
                    handleFilterChange(option.value, option.label)
                  }
                >
                  {option.label}
                </Checkbox>
              )
            )}
          </VStack>
        </>
      );
    }

    return (
      <VStack align="flex-start" spacing={3} width="100%">
        {selectedFilter?.options.map((option) => (
          <Checkbox
            key={option.value}
            isChecked={filterValues[selectedFilter?.id]?.includes(option.value)}
            onChange={() => handleFilterChange(option.value)}
          >
            {option.label}
          </Checkbox>
        ))}
      </VStack>
    );
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <Header title="검색 화면" />

      {/* 검색창 섹션 */}
      <Container maxW="container.xl" py={4}>
        <Flex gap={2} align="center">
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearch}
              placeholder="동아리를 검색해보세요 ex. 타박네"
              borderRadius="full"
              bg="white"
              _focus={{
                borderColor: 'blue.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
              }}
            />
          </InputGroup>
          <IconButton
            icon={<SearchIcon />}
            colorScheme="blue"
            size="md"
            borderRadius="full"
            aria-label="검색"
            onClick={handleSearchButtonClick}
          />
        </Flex>
      </Container>

      {/* 필터 버튼 섹션 */}
      <Box position="relative" bg="white" py={2}>
        <Flex alignItems="center" px={4}>
          {hasActiveFilters && (
            <IconButton
              icon={<RepeatIcon />}
              size="sm"
              onClick={() =>
                setFilterValues({
                  recruiting: [],
                  unit: [],
                  category: [],
                  format: [],
                  scale: [],
                })
              }
              mr={2}
              variant="outline"
              colorScheme="gray"
              aria-label="필터 초기화"
            />
          )}
          <HStack
            ref={filterScrollRef}
            overflowX="auto"
            spacing={2}
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleFilterClick({ label: '단위' })}
              bg={filterValues.unit.length > 0 ? 'black' : 'white'}
              color={filterValues.unit.length > 0 ? 'white' : 'black'}
              _hover={{
                bg: filterValues.unit.length > 0 ? 'gray.800' : 'gray.100',
              }}
            >
              단위
            </Button>
            {filterCategories.map((filter) => (
              <Button
                key={filter.id}
                size="sm"
                variant="outline"
                onClick={() => handleFilterClick(filter)}
                bg={filterValues[filter.id].length > 0 ? 'black' : 'white'}
                color={filterValues[filter.id].length > 0 ? 'white' : 'black'}
                _hover={{
                  bg:
                    filterValues[filter.id].length > 0
                      ? 'gray.800'
                      : 'gray.100',
                }}
              >
                {filter.label}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Box>

      {/* 필터 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader borderBottomWidth="1px">필터</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack align="flex-start" spacing={4} width="100%">
              <Text fontWeight="bold" fontSize="md">
                {selectedFilter?.label}
              </Text>
              <Divider />

              {/* 필터 콘텐츠 */}
              {renderModalContent()}

              {/* 하단 버튼과 선택된 필터 표시 */}
              <Box width="100%" mt={4}>
                <Flex justify="space-between" mb={4}>
                  <IconButton
                    aria-label="초기화"
                    icon={<RepeatIcon />}
                    variant="ghost"
                    size="sm"
                    onClick={resetCurrentFilter}
                    isDisabled={!hasCurrentFilters}
                    color="gray.500"
                    _hover={{ bg: 'gray.100' }}
                  />
                  <Button colorScheme="blue" size="sm" onClick={onClose}>
                    적용하기
                  </Button>
                </Flex>

                {/* 선택된 필터 태그들 */}
                {hasCurrentFilters && (
                  <Flex wrap="wrap" gap={2}>
                    {getSelectedFilterLabels().map((label) => (
                      <Tag
                        key={label}
                        size="md"
                        variant="subtle"
                        colorScheme="blue"
                      >
                        <TagLabel>{label}</TagLabel>
                        <TagCloseButton
                          onClick={() => {
                            if (selectedFilter.label === '단위') {
                              // 모든 unit options를 순회하며 해당 label의 value를 찾습니다
                              for (const category in unitFilterData) {
                                const option = unitFilterData[
                                  category
                                ].options.find((opt) => opt.label === label);
                                if (option) {
                                  removeFilter('unit', option.value);
                                  break;
                                }
                              }
                            } else {
                              const value = selectedFilter.options.find(
                                (opt) => opt.label === label
                              )?.value;
                              if (value) removeFilter(selectedFilter.id, value);
                            }
                          }}
                        />
                      </Tag>
                    ))}
                  </Flex>
                )}
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* 검색 결과 섹션은 여기에 추가 */}
    </Box>
  );
};

export default SearchPage;
