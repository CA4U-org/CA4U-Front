import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { ClubRowCardList } from '../../components/club/ClubRowCardList';
import { ClubRowCard } from '../../components/club/ClubRowCard';
import { useAuth } from '../../shared/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFavorites } from '../../api/favorite/favorite';
import { getRelatedClubs } from '../../api/recommend/getRelatedClubs';
import openColor from 'open-color';

export function RelatedClubList() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [relatedClubs, setRelatedClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getFavorites().then((resp) => {
        if (resp.result.length === 0) {
          setIsLoading(false);
          return;
        }
        const clubIds = resp.result.map((item) => item.id);
        getRelatedClubs(clubIds).then((clubs) => {
          setRelatedClubs(clubs.result);
          setIsLoading(false);
        });
      });
    }
  }, []);

  // 강한 블러 효과를 추가할 스타일 정의
  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(4px)',
    pointerEvents: 'all',
    zIndex: 1,
  };

  // 카드 스타일 정의
  const cardStyle = {
    minH: '120px', // 최소 높이 고정
    p: 4, // 패딩
  };

  // 이미지 스타일 정의
  const imageStyle = {
    boxSize: '60px', // 이미지 크기 고정
    borderRadius: 'md',
    flexShrink: 0, // 이미지 크기 유지
  };

  // Description 텍스트 스타일 정의 - chakra ui 방식으로 수정
  const descriptionStyle = {
    fontSize: 'sm',
    color: 'gray.600',
    noOfLines: 3, // chakra ui의 텍스트 라인 제한
  };

  if (!user) {
    return (
      <>
        <Heading
          as={'h4'}
          fontSize={'18px'}
          pl={4}
          fontWeight={600}
          color={openColor.gray[8]}
          mt={4}
        >
          로그인하고 추천 동아리를 확인하세요!
        </Heading>
        <Box position="relative" mx={3} my={1} bgColor={'white'}>
          <Flex
            position="absolute"
            w={'full'}
            top={'40%'}
            zIndex={2}
            align={'center'}
            justify={'center'}
          >
            <Button
              colorScheme={'blue'}
              w={'2xs'}
              onClick={() => navigate('/login')}
            >
              로그인
            </Button>
          </Flex>

          <Box position="relative">
            <Box
              style={blurOverlayStyle}
              onClick={(e) => e.stopPropagation()}
            />
            <ClubRowCardList>
              <ClubRowCard
                key={0}
                club={{
                  id: 1,
                  clubNm: '피카통',
                  logoImgUrl:
                    'https://cdn.imweb.me/thumbnail/20240219/d87859d9aaf92.png',
                  briefDescription: '중앙대학교 중앙동아리 피카통',
                }}
                descriptionStyle={descriptionStyle}
              />
              <ClubRowCard
                key={1}
                club={{
                  id: 2,
                  clubNm: 'CUAI',
                  logoImgUrl:
                    'https://blogpfthumb-phinf.pstatic.net/MjAyMDA3MDJfOTAg/MDAxNTkzNjc4NzYxODA0.KvxnAaaWqGV0hXhPpGt1USCsmDxrA14nbBWRNM2BKX4g.3pmkEkqxJJN-Z-rJzrTPYjJcKvg1Gt3b_d6tjMIhFnYg.PNG.cuaibigdata/cuai.png?type=w3840',
                  briefDescription: '중앙대학교 인공지능학회',
                }}
                descriptionStyle={descriptionStyle}
              />
              <ClubRowCard
                key={2}
                club={{
                  id: 0,
                  clubNm: 'CUSCM',
                  logoImgUrl:
                    'https://cdn.imweb.me/thumbnail/20220212/4b44401c03350.png',
                  briefDescription: '중앙대학교 중앙동아리 개신교예배 동아리',
                }}
                descriptionStyle={descriptionStyle}
              />
            </ClubRowCardList>
          </Box>
        </Box>
      </>
    );
  }

  if (isLoading) {
    return null;
  }

  return (
    <Box mt={3} p={4}>
      <Heading as="h4" size={'18px'} fontWeight={600} color={openColor.gray[8]}>
        AI 기반으로 추천해드려요
      </Heading>
      <Box mt={1}>
        {relatedClubs.length === 0 && (
          <Flex h={'100px'} align={'center'}>
            <Text color={'gray.500'}>
              동아리 추천을 받으려면 <br />
              즐겨찾기 기능을 사용해보세요
            </Text>
          </Flex>
        )}
        <ClubRowCardList>
          {relatedClubs.map((club, index) => (
            <ClubRowCard
              key={index}
              club={club}
              cardStyle={cardStyle}
              imageStyle={imageStyle}
              descriptionStyle={descriptionStyle}
            />
          ))}
        </ClubRowCardList>
      </Box>
    </Box>
  );
}
