import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  TagLabel,
  TagCloseButton,
  Text,
  IconButton,
} from '@chakra-ui/react';

const SearchFilter = () => {
  // 필터 상태 관리
  const [unit, setUnit] = useState('');
  const [categories, setCategories] = useState([]);
  const [formats, setFormats] = useState([]);
  const [sizes, setSizes] = useState([]);

  // 필터 옵션 데이터
  const filterOptions = {
    units: [
      { id: 'all', label: '중앙대 전체' },
      { id: 'business', label: '경영경제대학' },
      { id: 'management', label: '경영학부' },
    ],
    categories: [
      { id: 'academic', label: '학술' },
      { id: 'culture', label: '문화' },
      { id: 'sports', label: '체육' },
      { id: 'volunteer', label: '봉사' },
    ],
    formats: [
      { id: 'central', label: '중앙동아리' },
      { id: 'department', label: '과동아리' },
      { id: 'study', label: '스터디' },
    ],
    sizes: [
      { id: 'small', label: '소규모' },
      { id: 'medium', label: '중규모' },
      { id: 'large', label: '대규모' },
    ],
  };

  // 필터 초기화
  const resetFilters = () => {
    setUnit('');
    setCategories([]);
    setFormats([]);
    setSizes([]);
  };

  // 선택된 필터가 있는지 확인
  const hasActiveFilters =
    unit || categories.length > 0 || formats.length > 0 || sizes.length > 0;

  // 체크박스 핸들러
  const handleMultiSelect = (value, currentState, setState) => {
    if (currentState.includes(value)) {
      setState(currentState.filter((item) => item !== value));
    } else {
      setState([...currentState, value]);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      p={4}
      bg="white"
      borderRadius="lg"
      boxShadow="base"
    >
      {/* 선택된 필터 표시 및 초기화 버튼 */}
      {hasActiveFilters && (
        <Flex mb={4} flexWrap="wrap" gap={2}>
          {unit && (
            <Tag size="md" colorScheme="blue" borderRadius="full">
              <TagLabel>
                단위:{' '}
                {filterOptions.units.find((opt) => opt.id === unit)?.label}
              </TagLabel>
              <TagCloseButton onClick={() => setUnit('')} />
            </Tag>
          )}
          {categories.length > 0 && (
            <Tag size="md" colorScheme="green" borderRadius="full">
              <TagLabel>카테고리({categories.length})</TagLabel>
              <TagCloseButton onClick={() => setCategories([])} />
            </Tag>
          )}
          {formats.length > 0 && (
            <Tag size="md" colorScheme="purple" borderRadius="full">
              <TagLabel>형식({formats.length})</TagLabel>
              <TagCloseButton onClick={() => setFormats([])} />
            </Tag>
          )}
          {sizes.length > 0 && (
            <Tag size="md" colorScheme="orange" borderRadius="full">
              <TagLabel>규모({sizes.length})</TagLabel>
              <TagCloseButton onClick={() => setSizes([])} />
            </Tag>
          )}
          <IconButton
            icon={<RepeatIcon />}
            size="sm"
            variant="outline"
            onClick={resetFilters}
            colorScheme="gray"
            mr={2}
            aria-label="필터 초기화"
          />
        </Flex>
      )}

      {/* 필터 섹션들 */}
      <Stack spacing={6}>
        {/* 단위 필터 */}
        <Box borderBottom="1px" borderColor="gray.200" pb={4}>
          <Text fontWeight="semibold" mb={2}>
            단위
          </Text>
          <RadioGroup value={unit} onChange={setUnit}>
            <Stack>
              {filterOptions.units.map((option) => (
                <Radio key={option.id} value={option.id}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>

        {/* 카테고리 필터 */}
        <Box borderBottom="1px" borderColor="gray.200" pb={4}>
          <Text fontWeight="semibold" mb={2}>
            카테고리
          </Text>
          <Stack>
            {filterOptions.categories.map((option) => (
              <Checkbox
                key={option.id}
                isChecked={categories.includes(option.id)}
                onChange={() =>
                  handleMultiSelect(option.id, categories, setCategories)
                }
              >
                {option.label}
              </Checkbox>
            ))}
          </Stack>
        </Box>

        {/* 형식 필터 */}
        <Box borderBottom="1px" borderColor="gray.200" pb={4}>
          <Text fontWeight="semibold" mb={2}>
            형식
          </Text>
          <Stack>
            {filterOptions.formats.map((option) => (
              <Checkbox
                key={option.id}
                isChecked={formats.includes(option.id)}
                onChange={() =>
                  handleMultiSelect(option.id, formats, setFormats)
                }
              >
                {option.label}
              </Checkbox>
            ))}
          </Stack>
        </Box>

        {/* 규모 필터 */}
        <Box borderBottom="1px" borderColor="gray.200" pb={4}>
          <Text fontWeight="semibold" mb={2}>
            규모
          </Text>
          <Stack>
            {filterOptions.sizes.map((option) => (
              <Checkbox
                key={option.id}
                isChecked={sizes.includes(option.id)}
                onChange={() => handleMultiSelect(option.id, sizes, setSizes)}
              >
                {option.label}
              </Checkbox>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchFilter;
