import { Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import StaffGuide from '../../components/StaffGuide/StaffGuide';
import { IoIosHeart } from 'react-icons/io';
import { cauTheme } from '../../shared/theme/CAUTheme';
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
import {
  IoAlbums,
  IoBrowsersOutline,
  IoCalendarNumberSharp,
  IoSettingsSharp,
} from 'react-icons/io5';
import openColor from 'open-color';
import { BsFillMegaphoneFill } from 'react-icons/bs';

export function MyPage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyClubs().then((res) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <PageWrapper
      isLoading={isLoading}
      bgColor={openColor.gray[0]}
      navItem={'마이페이지'}
    >
      <Header title={'내 정보'} />
      {user ? <Profile user={user} /> : <NoUserProfile />}
      <StaffGuide />
      <MenuItemList />
      <RelatedClubList />
      {user && (
        <Flex justify={'center'} mt={2}>
          <Button
            color={openColor.gray[7]}
            bg={'inherit'}
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
            fontWeight={'normal'}
            px={3}
            py={1}
            borderRadius="md"
            height="auto"
          >
            로그아웃 | 회원탈퇴
          </Button>
        </Flex>
      )}
    </PageWrapper>
  );
}

function NoUserProfile() {
  const navigate = useNavigate();
  return (
    <Flex w={'full'} px={5} py={7} justify={'center'} align={'center'}>
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
  const menuItems = [
    {
      icon: IoIosHeart,
      iconColor: openColor.red[7],
      title: ['즐겨찾기'],
      onClick: () => navigate('/favorites'), // 즐겨찾기 페이지로 이동
    },
    {
      icon: FaCircleCheck,
      iconColor: openColor.lime[7],
      title: ['소속 인증'],
      onClick: () => {}, // 다른 메뉴 아이템의 onClick 핸들러
    },
    {
      icon: IoBrowsersOutline,
      iconColor: openColor.cyan[6],
      title: ['내 활동'],
      onClick: () => {},
    },
    {
      icon: IoAlbums,
      iconColor: openColor.orange[6],
      title: ['내 동아리'],
      onClick: () => {},
    },
    {
      icon: MdMessage,
      iconColor: openColor.blue[6],
      title: ['이용 건의하기'],
      onClick: () => {
        window.location.href = 'mailto:ca4u.dev@gmail.com';
      }, // 다른 메뉴 아이템의 onClick 핸들러
    },
    {
      icon: IoCalendarNumberSharp,
      iconColor: openColor.violet[6],
      title: ['캘린더'],
      onClick: () => {}, // 캘린더 페이지로 이동
    },
    {
      icon: BsFillMegaphoneFill,
      iconColor: openColor.yellow[5],
      title: ['공지사항'],
      onClick: () => {}, // 공지사항 페이지
    },
    {
      icon: IoSettingsSharp,
      iconColor: openColor.gray[6],
      title: ['설정'],
      onClick: () => {},
    },
  ];

  return (
    <Flex
      justify={'space-between'}
      bg={'white'}
      m={3}
      wrap={'wrap'}
      borderRadius={'md'}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          iconColor={item.iconColor}
          title={item.title}
          onClick={item.onClick} // onClick prop 전달
        />
      ))}
    </Flex>
  );
}

function MenuItem({ icon, iconColor, title, onClick }) {
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
      <Icon as={icon} boxSize={'30px'} color={iconColor} />
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
