import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { ClubRowCardList } from '../../components/club/ClubRowCardList';
import { ClubRowCard } from '../../components/club/ClubRowCard';
import { useAuth } from '../../shared/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function RelatedClubList() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [relatedClubs, setRelatedClubs] = useState([]);

  // 강한 블러 효과를 추가할 스타일 정의
  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)', // 반투명 흰색
    backdropFilter: 'blur(4px)', // 블러 강도 설정
    pointerEvents: 'all', // 오버레이에서 모든 포인터 이벤트 방지
    zIndex: 1, // 다른 콘텐츠 위에 표시
  };

  if (!user) {
    return (
      <Box position="relative" m={3} bgColor={'white'}>
        {/* 블러 처리 제외된 부분 */}
        <Heading
          as={'h4'}
          size={'sm'}
          pt={4}
          pl={4}
          zIndex={2}
          position="relative"
          mb={1}
        >
          로그인하고 추천 동아리를 확인하세요!
        </Heading>
        <Flex
          position="absolute"
          w={'full'}
          top={'50%'}
          zIndex={2}
          align={'center'}
          justify={'center'}
        >
          <Button
            colorScheme={'blue'}
            w={'2xs'}
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </Button>
        </Flex>

        {/* 블러 처리된 카드 리스트 */}
        <Box position="relative">
          {/* 클릭 방지를 위한 오버레이 */}
          <Box
            style={blurOverlayStyle}
            onClick={(e) => e.stopPropagation()} // 클릭 이벤트 차단
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
            />
          </ClubRowCardList>
        </Box>
      </Box>
    );
  }

  return (
    <Box bgColor={'white'} m={3}>
      <Heading as="h4" size={'md'} pt={4} pl={4}>
        AI 기반으로 추천해드려요
      </Heading>
      {relatedClubs.length === 0 && (
        <Flex px={4} h={'100px'} align={'center'}>
          <Text color={'gray.500'}>
            동아리 추천을 받으려면 <br />
            즐겨찾기 기능을 사용해보세요
          </Text>
        </Flex>
      )}
      <ClubRowCardList>
        {relatedClubs.map((club, index) => (
          <ClubRowCard key={index} club={club} />
        ))}
      </ClubRowCardList>
    </Box>
  );
}
