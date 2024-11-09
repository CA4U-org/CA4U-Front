import React from 'react';
import FavoriteButton from './FavoriteButton';
import VerifiedButton from './VerifiedButton';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  List,
  ListItem,
  Link,
  Container,
  Flex,
  Divider,
} from '@chakra-ui/react';

const ClubTags = () => {
  // TODO: 카테고리 정보가 API에 없는 것 같아서 임시로 유지
  const tags = ['동아리연합회', '문화예술', '중규모', '상시 모집'];

  return (
    <Flex gap="2" flexWrap="wrap" mt="2">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          size="sm"
          variant="subtle"
          colorScheme="blue"
          borderRadius="full"
          px="3"
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

const RecruitmentInfo = ({ clubDetail }) => {
  return (
    <Box
      mt="4"
      p="4"
      bg="gray.50"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
    >
      <Heading as="h3" size="sm" mb="2">
        상세 모집
      </Heading>
      <List spacing="2">
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            선발 대상:
          </Text>{' '}
          {clubDetail.targetPeopleDescription}
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            선발 주기:
          </Text>{' '}
          {clubDetail.targetCycleDescription}
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            지원 방법:
          </Text>{' '}
          {clubDetail.applyDescription}
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            활동 요일:
          </Text>{' '}
          {clubDetail.actDayDescription}
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            활동 장소:
          </Text>{' '}
          {clubDetail.locationDescription}
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            회비:
          </Text>{' '}
          {clubDetail.costDescription}원
        </ListItem>
      </List>
    </Box>
  );
};

// Notice 컴포넌트는 API에 해당 데이터가 없어서 임시로 유지하거나 제거
const Notice = () => {
  return (
    <Box
      mt="4"
      p="4"
      bg="blue.50"
      borderRadius="lg"
      border="1px"
      borderColor="blue.200"
    >
      <Heading as="h4" size="sm" color="blue.600">
        9/9 동아리연합회 홍보 부스 안내!
      </Heading>
      <Text mt="2" fontSize="sm" color="gray.600">
        상황극 시뮬레이션, 한 호흡 챌린지 등을 체험하실 수 있는 기회이니
        동아리에 관심을 가져주셨던 학우분들의 많은 참여 부탁드립니다.
      </Text>
      <Link
        href="#"
        color="blue.600"
        fontSize="sm"
        mt="2"
        display="inline-block"
        textDecoration="underline"
      >
        동아리 게시판 더보기 &gt;&gt;
      </Link>
    </Box>
  );
};

const ClubInfo = ({ clubDetail }) => {
  if (!clubDetail) return null;

  return (
    <Container maxW="container.md" p="4">
      <VStack align="stretch" spacing="4">
        <Flex justify="space-between" align="center">
          <Box>
            <Heading as="h1" size="lg">
              {clubDetail.clubNm}
            </Heading>
            <Text color="gray.600" fontSize="sm">
              {clubDetail.briefDescription}
            </Text>
            <Text color="gray.500" fontSize="xs">
              Last updated: {clubDetail.updatedAt}
            </Text>
          </Box>
          <HStack spacing="4">
            <FavoriteButton />
            <VerifiedButton />
          </HStack>
        </Flex>

        <ClubTags />
        <RecruitmentInfo clubDetail={clubDetail} />
        <Notice />

        <Box mt="6">
          <Heading as="h2" size="md" mb="2">
            About {clubDetail.clubNm}
          </Heading>
          <Text
            fontSize="sm"
            color="gray.600"
            lineHeight="tall"
            whiteSpace="pre-line"
          >
            {clubDetail.specDescription}
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="md" mb="2">
            모집 공고
          </Heading>
          <Text
            fontSize="sm"
            color="gray.600"
            lineHeight="tall"
            whiteSpace="pre-line"
          >
            {clubDetail.recruitDescription}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ClubInfo;
