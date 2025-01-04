import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';

import { SearchIcon } from '@chakra-ui/icons';
import AffiliationViewButton from '../../components/AffiliationViewButton';
import cauIcon from '../../assets/CAU-logo.svg';
import linkIcon from '../../assets/link_icon.svg';
import puangIcon from '../../assets/푸앙-icon.svg';
import { PageWrapper } from '../PageWrapper';
import openColor from 'open-color';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { IoIosBasketball } from 'react-icons/io';
import { FaChurch, FaRunning } from 'react-icons/fa';
import { MdVolunteerActivism } from 'react-icons/md';
import { RiGraduationCapFill } from 'react-icons/ri';

const Spacer = () => {
  return <Box mt={6}></Box>;
};

const SubHeader = ({ title }) => {
  return (
    <Heading
      as="h4"
      fontSize="18px"
      color={openColor.gray[8]}
      fontWeight="600"
      mb={1}
    >
      {title}
    </Heading>
  );
};

const CATEGORY_LIST = [
  {
    title: '학술',
    icon: RiGraduationCapFill,
  },
  {
    title: '문화예술',
    icon: BsMusicNoteBeamed,
  },
  {
    title: '운동',
    icon: IoIosBasketball,
  },
  {
    title: '취미',
    icon: FaRunning,
  },
  {
    title: '종교',
    icon: FaChurch,
  },
  {
    title: '봉사',
    icon: MdVolunteerActivism,
  },
];

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageWrapper navItem={'검색'} bgColor={openColor.gray[0]}>
      <Header title="검색 화면" />
      <Box px={3}>
        {/* 검색창 섹션 */}
        <Box>
          <Flex gap={2} align="center">
            <InputGroup size="md">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
            />
          </Flex>
        </Box>

        <Spacer />

        <SubHeader title="동아리 소속" />
        <Grid templateColumns={'repeat(3, 1fr)'} gap={4} width="full">
          <AffiliationViewButton
            mainText="중앙"
            subText="동아리 연합회"
            icon={cauIcon}
          />
          <AffiliationViewButton
            mainText="단과대/학과"
            subText="단과대/학과(부)"
            icon={linkIcon}
          />
          <AffiliationViewButton
            mainText="그 외"
            subText="준 동아리, 학회, 스터디"
            icon={puangIcon}
          />
        </Grid>

        <Spacer />
        <SubHeader title="카테고리" />
        <Grid templateColumns={'repeat(3, 1fr)'} gap={1} width="full">
          {CATEGORY_LIST.map((category) => (
            <CategoryItem
              key={category.title}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </Grid>
        {/*<CategoryView />*/}
        {/* 검색 결과 섹션은 여기에 추가 */}
      </Box>
    </PageWrapper>
  );
};

function CategoryItem({ title, icon }) {
  return (
    <Flex aspectRatio={1} justify={'content'} align={'center'} p={3}>
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
