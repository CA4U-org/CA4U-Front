import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Header from '../../components/Header/Header';

import { SearchIcon } from '@chakra-ui/icons';
import { PageWrapper } from '../PageWrapper';
import openColor from 'open-color';
import { SearchResult } from './SearchResult';
import { Filters } from './Filters';
import { findClubsWithCondition } from '../../api/club/clubApi';

const isNoneSelected = (condition) => {
  return (
    condition.query === '' &&
    condition.isRecruit === null &&
    condition.campusScope === null &&
    condition.collegeId === '' &&
    condition.majorId === '' &&
    condition.categories.length === 0 &&
    condition.clubTypes.length === 0 &&
    condition.sizes.length === 0
  );
};

const SearchPage = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [condition, setCondition] = useState({
    query: '',
    isRecruit: null,
    campusScope: null,
    collegeId: '',
    majorId: '',
    categories: [],
    clubTypes: [],
    sizes: [],
  });

  const handleInputQueryChange = (e) => {
    setInputQuery(e.target.value);
  };

  const handleQueryChange = () => {
    setCondition({ ...condition, query: inputQuery });
  };

  const clubs = findClubsWithCondition(condition);

  return (
    <PageWrapper navItem={'검색'} bgColor={openColor.gray[0]}>
      <Header title="검색 화면" />
      <Box px={3}>
        {/* 검색창 섹션 */}
        <Box mt={1}></Box>
        <Box>
          <Flex gap={2} align="center">
            <InputGroup h={'40px'}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                h={'full'}
                placeholder="동아리를 검색해보세요 ex. 타박네"
                borderRadius="full"
                bg="white"
                _focus={{
                  borderColor: 'blue.500',
                  boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
                }}
                onChange={handleInputQueryChange}
                value={inputQuery}
              />
            </InputGroup>
            <IconButton
              h={'40px'}
              icon={<SearchIcon />}
              colorScheme="blue"
              size="md"
              borderRadius="full"
              aria-label="검색"
              onClick={handleQueryChange}
            />
          </Flex>
          <Filters condition={condition} setCondition={setCondition} />
          <SearchResult clubs={clubs} />
        </Box>
      </Box>
    </PageWrapper>
  );
};

const MHeading = ({ children }) => {
  return (
    <Heading
      as="h4"
      fontSize="18px"
      color={openColor.gray[8]}
      fontWeight="600"
      mb={1}
    >
      {children}
    </Heading>
  );
};

function CategoryItem({ title, icon, onClick }) {
  return (
    <Flex
      aspectRatio={1}
      justify={'content'}
      align={'center'}
      p={3}
      onClick={onClick}
    >
      <Flex
        w={'full'}
        h="full"
        bg={'white'}
        borderRadius={'full'}
        justify={'center'}
        align={'center'}
        direction={'column'}
        color={'cauBlue'}
        boxShadow={'md'}
      >
        <Icon as={icon} boxSize={'35px'} />
        <Text>{title}</Text>
      </Flex>
    </Flex>
  );
}

export default SearchPage;
