import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Tag,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { addRecentViewedClub } from '../feature/recent-viewed-club/addRecentViewedClub';
import { getClubDetail } from '../api/club/clubApi';
import { getFavorites, toggleFavorites } from '../api/favorite/favorite';
import { PageWrapper } from './PageWrapper';
import Header from '../components/Header/Header';
import openColor from 'open-color';
import { getRelatedClubs } from '../api/recommend/getRelatedClubs';
import { ClubRowCard } from '../components/club/ClubRowCard';
import { ClubRowCardList } from '../components/club/ClubRowCardList';
import { IoHeartOutline, IoHeartSharp, IoShareOutline } from 'react-icons/io5';

function scrollToTop() {
  const scrollableContainer = document.querySelector('.scrollable-container');

  if (scrollableContainer) {
    scrollableContainer.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  } else {
    console.error('Scrollable container not found!');
  }
}

// 이미지 관련 모크데이터
const clubImages = [
  'https://via.placeholder.com/800x400?text=Club+Image+1',
  'https://via.placeholder.com/800x400?text=Club+Image+2',
  'https://via.placeholder.com/800x400?text=Club+Image+3',
  'https://via.placeholder.com/800x400?text=Club+Image+4',
  'https://via.placeholder.com/800x400?text=Club+Image+5',
];

const activityIcon =
  'https://s3-alpha-sig.figma.com/img/874c/d505/3f951579d600be8a4550b18a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl5L6QfW0mcd4JfRW3GmJOWTjBF9QFYcobHqnGk75rzvMmvSHJd9KXtm4sS2goHDuHFX8BhWq9bo64GxQ1UxVGUa~fQ9Afhav~MJseh6GT8xIsTLIadHZHolOo-S0l2MV-5iVhIE3o2mGInxCZk0Vco5kp~LBeqss7kOweF8wS8C601f4FfYxjq~qeKjoeShx-3ogLnO70WtK~ZMasvZP5~IUuh929HExAOx9ELCZbeiDQeWiRqIZUf3yK0rVAsH~M6Vv0cExZ4vvQG9-MJKXFHMOwCPAe-A9gXN~aMXmcbXcKvD41ciu7PdEFNal01V04MfmcsdBiPlQe0GEEt85w__';

const ClubDetailPage = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const toast = useToast();
  const [clubDetail, setClubDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [relatedClubs, setRelatedClubs] = useState([]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // 현재 페이지의 제목
          text: '동아리 공유하기',
          url: window.location.href, // 현재 페이지의 URL
        });
        console.log('Sharing successful');
      } catch (error) {
        console.error('Sharing failed', error);
      }
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
    }
  };

  // 즐겨찾기 상태 체크
  const checkFavoriteStatus = async () => {
    try {
      const favoritesResponse = await getFavorites();
      const favorites = favoritesResponse.result;
      const isClubFavorited = favorites.some(
        (favorite) => favorite.id === parseInt(clubId)
      );
      setIsFavorite(isClubFavorited);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  // 즐겨찾기 토글
  const handleFavorite = async () => {
    try {
      await toggleFavorites(clubId);
      setIsFavorite(!isFavorite); // 현재 상태를 반전

      toast({
        title: isFavorite
          ? '즐겨찾기가 해제되었습니다.'
          : '즐겨찾기에 추가되었습니다.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Favorite error:', error);

      toast({
        title: '오류가 발생했습니다.',
        description: '로그인 후  다시 시도해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClubDetail(clubId);
        setClubDetail(response.result);
        await checkFavoriteStatus();
      } catch (error) {
        console.error('Error fetching club detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    addRecentViewedClub(clubId);

    getRelatedClubs([clubId]).then((res) => {
      setRelatedClubs(res.result);
    });

    scrollToTop();
  }, [clubId]);

  console.log(clubDetail);

  const handleImageClick = () => {
    navigate('/club-images');
  };

  if (loading) return <div>Loading...</div>;
  if (!clubDetail) return <div>Club not found</div>;

  return (
    <PageWrapper bgColor={openColor.gray[0]} isLoading={loading}>
      <Header title={loading ? '' : clubDetail.clubNm} />
      <Box w={'full'} position="relative" borderRadius="lg">
        <Image
          // src="https://i.imgur.com/jcW68Wj.png"
          src={clubDetail.logoImgUrl}
          objectFit="scale-down"
          alt="Club Main Image"
          w={'full'}
          h={'370px'}
          boxShadow={'lg'}
        />

        <Image
          src={clubDetail.logoImgUrl}
          boxSize="90px"
          position="absolute"
          top="320px"
          left="50%"
          transform="translate(-50%, -0%)"
          borderRadius="full"
          border="2px solid"
          borderColor="white"
          boxShadow="lg"
          alt="Club Logo"
        />

        <Flex
          direction="column"
          align="center"
          mt="60px"
          px="4"
          pb="4"
          textAlign="center"
          w={'full'}
        >
          <Text fontWeight="bold" fontSize="2xl" color="gray.800">
            {clubDetail.clubNm}
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            {/* 클럽의 추가 설명이나 태그 */}
            {clubDetail.briefDescription}
          </Text>
        </Flex>
        <ButtonGroup
          display={'grid'}
          gridTemplateColumns={'repeat(2,1fr)'}
          w={'full'}
          px={4}
          gap={2}
          mb={2}
        >
          <Button
            border={'1px solid'}
            bg={'white'}
            size={'md'}
            borderColor={openColor.gray[4]}
            color={openColor.gray[7]}
            fontWeight={500}
            onClick={handleShare}
          >
            <Icon as={IoShareOutline} mr={2} />
            공유하기
          </Button>
          <Button
            border={'1px solid'}
            bg={'white'}
            size={'md'}
            borderColor={openColor.gray[4]}
            color={openColor.gray[7]}
            fontWeight={500}
            onClick={handleFavorite}
          >
            <Icon
              as={isFavorite ? IoHeartSharp : IoHeartOutline}
              mr={2}
              size={'md'}
              color={isFavorite ? openColor.red[6] : openColor.gray[7]}
            />
            즐겨찾기
          </Button>
        </ButtonGroup>

        <VStack align="stretch" spacing="4" px={4}>
          <ClubTags />
          <RecruitmentInfo clubDetail={clubDetail} />
          <Notice />

          <Box mt="6" bg={'white'} boxShadow={'md'} p={4}>
            <Heading as="h2" size="md" mb="2">
              About {clubDetail.clubNm}
            </Heading>
            <Text
              fontSize="sm"
              color="gray.700"
              lineHeight="tall"
              whiteSpace="pre-line"
            >
              {clubDetail.specDescription}
            </Text>
          </Box>

          <Box bg={'white'} boxShadow={'md'} p={4}>
            <Heading as="h2" size="md" mb="2">
              모집 공고
            </Heading>
            <Text
              fontSize="sm"
              color="gray.700"
              lineHeight="tall"
              whiteSpace="pre-line"
            >
              {clubDetail.recruitDescription}
            </Text>
          </Box>
          <Box mt={2}>
            <Heading as={'m4'} size={'md'} color={openColor.gray[8]}>
              관련 있는 동아리도 살펴보세요
            </Heading>
            {relatedClubs.length !== 0 && (
              <ClubRowCardList>
                {relatedClubs.map((c) => {
                  return <ClubRowCard key={c.id} club={c} />;
                })}
              </ClubRowCardList>
            )}
          </Box>
        </VStack>
      </Box>
    </PageWrapper>
  );
};

const ClubTags = () => {
  // TODO: 카테고리 정보가 API에 없는 것 같아서 임시로 유지
  const tags = ['동아리연합회', '문화예술', '중규모', '상시 모집'];

  return (
    <Flex gap="2" flexWrap="wrap" mt="2" w={'full'}>
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
      borderRadius="lg"
      borderColor="gray.200"
      bg={'white'}
      boxShadow={'md'}
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

export default ClubDetailPage;
