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

const RecruitmentInfo = () => {
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
          중앙대학교 학생 누구나
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            선발 주기:
          </Text>{' '}
          상시 모집
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            지원 방법:
          </Text>{' '}
          지원 시 무조건 합격
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            활동 요일:
          </Text>{' '}
          ○○
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            활동 장소:
          </Text>{' '}
          107관 602호
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            회원 수:
          </Text>{' '}
          64명
        </ListItem>
        <ListItem fontSize="sm">
          <Text as="span" fontWeight="bold">
            회비:
          </Text>{' '}
          신입 부원 없음, 기존 부원 3만원(1년)
        </ListItem>
      </List>
    </Box>
  );
};

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

const ClubInfo = () => {
  return (
    <Container maxW="container.md" p="4">
      <VStack align="stretch" spacing="4">
        <Flex justify="space-between" align="center">
          <Box>
            <Heading as="h1" size="lg">
              타박네
            </Heading>
            <Text color="gray.600" fontSize="sm">
              중앙대학교 극예술 연구회 since 1989
            </Text>
          </Box>
          <HStack spacing="4">
            <FavoriteButton />
            <VerifiedButton />
          </HStack>
        </Flex>

        <ClubTags />
        <RecruitmentInfo />
        <Notice />

        <Box mt="6">
          <Heading as="h2" size="md" mb="2">
            About 타박네
          </Heading>
          <Text fontSize="sm" color="gray.600" lineHeight="tall">
            삶의 연극, 사람의 연극 중앙대학교 극예술 연구회 타박네입니다. <br />
            기성연극에 얽매이지 않고 극단적인 실험과 도전을 통해 무대를
            사랑하고! 인간을 표현하는! 가장 뛰어난 극단을 추구하는 우리는 극연
            타박네입니다! <br />
            무대는 타박네, 당신과 함께! 30년 이상의 전통을 자랑하는 우리를
            만나보세요! <br />
            활동은 어디? 중앙대학교 서울캠퍼스 107관 602호에서!
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="md" mb="2">
            모집 공고
          </Heading>
          <Text fontSize="sm" color="gray.600" lineHeight="tall">
            새로운 회원을 모집 중인 중앙대학교 극예술 연구회 타박네입니다.{' '}
            <br />
            기성연극에 얽매이지 않고 극단적인 실험과 도전을 통해 무대를
            사랑하고! 인간을 표현하는! 가장 뛰어난 극단을 추구하는 우리는 극연
            타박네입니다! <br />
            무대는 타박네, 당신과 함께! 30년 이상의 전통을 자랑하는 우리를
            만나보세요! <br />
            활동은 어디? 중앙대학교 서울캠퍼스 107관 602호에서!
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ClubInfo;
