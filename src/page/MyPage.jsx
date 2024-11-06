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
    <PageWrapper isLoading={isLoading}>
      <TopHeader title={'내 정보'} />
      {user ? <Profile user={user} /> : <NoUserProfile />}
      <StaffGuide />
      <Menu />
      <MyClubList clubs={myClubs} />
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

function Menu() {
  const cauColors = cauTheme.colors;
  const menuItemSize = '40';
  const menuItems = [
    {
      icon: <IoIosHeart size={menuItemSize} color={cauColors.cauRed} />,
      title: ['즐겨찾기'],
    },
    {
      icon: <FaCircleCheck size={menuItemSize} color={'green'} />,
      title: ['소속 인증', '하러가기'],
    },
    {
      icon: <MdMessage size={menuItemSize} color={cauColors.cauBlue} />,
      title: ['이용 건의하기'],
    },
  ];

  return (
    <Flex w={'full'} justify={'space-between'} py={5}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} title={item.title} />
      ))}
    </Flex>
  );
}

function MenuItem({ icon, title }) {
  return (
    <Flex w="full" direction={'column'} align={'center'} mt={3}>
      {icon}
      {title.map((line, index) => (
        <Text fontSize={'sm'} mt={index === 0 ? 1 : 0} key={index}>
          {line}
        </Text>
      ))}
    </Flex>
  );
}

function MyClubList({ clubs }) {
  return (
    <Box>
      <Heading as="h4" size={'md'} ml={5}>
        my 소속 동아리
      </Heading>
      <Flex
        wrap={'nowrap'}
        overflowX={'scroll'}
        className={'hide-scrollbar'}
        p={3}
      >
        {clubs.map((club, index) => (
          <ClubRowCard key={index} club={club} />
        ))}
      </Flex>
    </Box>
  );
}
