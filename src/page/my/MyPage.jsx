import { Button, Flex, Image, Text } from '@chakra-ui/react';
import TopHeader from '../../components/Header/Header';
import StaffGuide from '../../components/StaffGuide/StaffGuide';
import { IoIosHeart } from 'react-icons/io';
import { cauTheme } from '../../shared/CAUTheme';
import { FaCircleCheck } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { PageWrapper } from '../PageWrapper';
import { getMyClubs } from '../../api/club/getMyClubs';
import { useAuth } from '../../shared/useAuth';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/members/logout';
import { Profile } from './Profile';
import { RelatedClubList } from './RelatedClubList';

export function MyPage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyClubs().then((res) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <PageWrapper isLoading={isLoading} bgColor={'#f6f6f6'}>
      <TopHeader title={'내 정보'} />
      {user ? <Profile user={user} /> : <NoUserProfile />}
      <StaffGuide />
      <MenuItemList />
      <RelatedClubList />
      {user && (
        <Flex m={0} justify={'center'}>
          <Button
            bg="white"
            fontWeight="bold"
            color="gray.500"
            onClick={() => {
              logout().then(() => {
                window.location.reload();
              });
            }}
            _hover={{
              color: 'gray.700',
              bg: 'gray.100',
            }}
            size="sm"
            px={3}
            py={1}
            borderRadius="md"
            height="auto"
          >
            로그아웃
          </Button>
        </Flex>
      )}
    </PageWrapper>
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
  const navigate = useNavigate(); // useNavigate 훅 사용
  const cauColors = cauTheme.colors;
  const menuItemSize = '30px';
  const menuItems = [
    {
      icon: <IoIosHeart size={menuItemSize} color={cauColors.cauRed} />,
      title: ['즐겨찾기'],
      onClick: () => navigate('/favorites'), // 즐겨찾기 페이지로 이동
    },
    {
      icon: <FaCircleCheck size={menuItemSize} color={'green'} />,
      title: ['소속 인증'],
      onClick: () => {}, // 다른 메뉴 아이템의 onClick 핸들러
    },
    {
      icon: <MdMessage size={menuItemSize} color={cauColors.cauBlue} />,
      title: ['이용 건의하기'],
      onClick: () => {
        window.location.href = 'mailto:ca4u.dev@gmail.com';
      }, // 다른 메뉴 아이템의 onClick 핸들러
    },
  ];

  return (
    <Flex justify={'space-between'} bg={'white'} m={3} wrap={'wrap'}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          title={item.title}
          onClick={item.onClick} // onClick prop 전달
        />
      ))}
      <DummyMenuItem />
    </Flex>
  );
}

function MenuItem({ icon, title, onClick }) {
  // onClick prop 추가
  return (
    <Flex
      w="full"
      direction={'column'}
      justify={'center'}
      align={'center'}
      m={1}
      boxSize={'75px'}
      onClick={onClick} // onClick 이벤트 추가
      _hover={{
        bg: 'gray.100',
        borderRadius: 'lg',
        cursor: 'pointer', // 호버 시 커서 포인터로 변경
      }}
    >
      {icon}
      {title.map((line, index) => (
        <Text fontSize={'xs'} mt={2} key={index}>
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
