import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import TopHeader from '../components/TopHeader';
import StaffGuide from '../components/StaffGuide/StaffGuide';
import { IoIosHeart } from 'react-icons/io';
import { cauTheme } from '../shared/CAUTheme';
import { FaCircleCheck } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { PageWrapper } from './PageWrapper';
import { ClubRowCard } from '../components/club/ClubRowCard';
import { getMyClubs } from '../api/club/getMyClubs';
import { useAuth } from '../shared/useAuth';
import { useNavigate } from 'react-router-dom';
import { ClubRowCardList } from '../components/club/ClubRowCardList';
import { getRecentViewedClubs } from '../feature/recent-viewed-club/getRecentViewedClubs';
import { logout } from '../api/members/logout';

export function MyPage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [myClubs, setMyClubs] = useState([]);

  useEffect(() => {
    getMyClubs().then((res) => {
      setMyClubs(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <PageWrapper isLoading={isLoading} bgColor={'#f6f6f6'}>
      <TopHeader title={'내 정보'} />
      {user ? <Profile user={user} /> : <NoUserProfile />}
      <StaffGuide />
      <MenuItemList />
      {/*<RelatedClubList />*/}
      {/*<MyClubList clubs={myClubs} />*/}
      {user && (
        <Flex m={3} justify={'center'}>
          <Text
            color={'gray.500'}
            onClick={() => {
              logout().then(() => {
                window.location.reload();
              });
            }}
            _hover={{
              cursor: 'pointer',
              color: 'gray.700',
            }}
          >
            로그아웃
          </Text>
        </Flex>
      )}
    </PageWrapper>
  );
}

function Profile({ user }) {
  return (
    <Flex w={'full'} p={5} justify={'center'} align={'center'}>
      <Image
        src={'https://i.imgur.com/d56CAWR.png'}
        boxSize={'90px'}
        borderRadius={'full'}
      />
      <Flex direction={'column'} px={4} flexGrow={1}>
        <Flex align={'center'}>
          <Text fontWeight={'bolder'} fontSize={'xl'}>
            {user.email}
          </Text>
          <Text fontSize={'sm'} ml={2} color={'gray'}>
            {'19학번'}
          </Text>
        </Flex>
        <Box mt={1}>
          <Text color={'gray'} fontSize={'sm'}>
            {'경영경제대학'}
          </Text>
          <Text color={'gray'} fontSize={'sm'}>
            {'경영학과'}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

function NoUserProfile() {
  const navigate = useNavigate();
  return (
    <Flex w={'full'} p={5} justify={'center'} align={'center'}>
      <Image
        src={'https://i.imgur.com/d56CAWR.png'}
        boxSize={'90px'}
        borderRadius={'full'}
      />
      <Flex direction={'column'} px={4} flexGrow={1} textAlign={'center'}>
        <Button colorScheme={'blue'} onClick={() => navigate('/login')}>
          로그인
        </Button>
      </Flex>
    </Flex>
  );
}

function MenuItemList() {
  const cauColors = cauTheme.colors;
  const menuItemSize = '35px';
  const menuItems = [
    {
      icon: <IoIosHeart size={menuItemSize} color={cauColors.cauRed} />,
      title: ['즐겨찾기'],
    },
    {
      icon: <FaCircleCheck size={menuItemSize} color={'green'} />,
      title: ['소속 인증'],
    },
    {
      icon: <MdMessage size={menuItemSize} color={cauColors.cauBlue} />,
      title: ['이용 건의하기'],
    },
  ];

  return (
    <Flex justify={'space-between'} bg={'white'} m={3} wrap={'wrap'}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} title={item.title} />
      ))}
      <DummyMenuItem />
    </Flex>
  );
}

function MenuItem({ icon, title }) {
  return (
    <Flex
      w="full"
      direction={'column'}
      justify={'center'}
      align={'center'}
      m={1}
      boxSize={'75px'}
      _hover={{
        bg: 'gray.100',
        borderRadius: 'lg',
      }}
    >
      {icon}
      {title.map((line, index) => (
        <Text fontSize={'xs'} mt={index === 0 ? 1 : 0} key={index}>
          {line}
        </Text>
      ))}
    </Flex>
  );
}

function DummyMenuItem() {
  return (
    <Flex
      w="full"
      direction={'column'}
      justify={'center'}
      align={'center'}
      m={1}
      boxSize={'75px'}
      borderRadius={'lg'}
    />
  );
}

function RelatedClubList() {
  const [isRecentViewedClubExists, setIsRecentViewedClubExists] =
    useState(false);
  const [relatedClubs, setRelatedClubs] = useState([]);

  useEffect(() => {
    const recentViewedClubs = getRecentViewedClubs();

    if (recentViewedClubs.length > 0) {
      setIsRecentViewedClubExists(true);
      getMyClubs().then((res) => {
        setRelatedClubs(res);
      });
    }
  }, []);

  if (!isRecentViewedClubExists) {
    return null;
  }

  return (
    <Box bgColor={'white'} m={3} borderRadius={'md'}>
      <Heading as="h4" size={'md'} pt={4} pl={4}>
        최근 조회한 동아리와 비슷한 동아리
      </Heading>
      <ClubRowCardList>
        {relatedClubs.map((club, index) => (
          <ClubRowCard key={index} club={club} />
        ))}
      </ClubRowCardList>
    </Box>
  );
}

function MyClubList({ clubs }) {
  return (
    <Box bgColor={'white'} m={3} borderRadius={'md'}>
      <Heading as="h4" size={'md'} pt={4} pl={4}>
        my 소속 동아리
      </Heading>
      <ClubRowCardList>
        {clubs.map((club, index) => (
          <ClubRowCard key={index} club={club} />
        ))}
      </ClubRowCardList>
    </Box>
  );
}
