import { Box, Flex, Icon, Show, Spacer, Text } from '@chakra-ui/react';
import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoHomeOutline,
  IoHomeSharp,
  IoPersonOutline,
  IoPersonSharp,
  IoSearchOutline,
  IoSearchSharp,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ icon, label, focus, onClick }) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      color={focus ? 'black' : 'gray.500'}
      p={2}
      cursor={'pointer'}
      onClick={onClick}
    >
      <Icon as={icon} h={6} w={'50px'} />
      <Text fontSize={'xs'}>{label}</Text>
    </Flex>
  );
};

const NavItemList = [
  {
    focusIcon: IoSearchSharp,
    blurIcon: IoSearchOutline,
    label: '검색',
    link: '/search',
  },
  {
    focusIcon: IoHomeSharp,
    blurIcon: IoHomeOutline,
    label: '홈',
    link: '/',
  },
  {
    focusIcon: IoChatbubbleEllipses,
    blurIcon: IoChatbubbleEllipsesOutline,
    label: '게시판',
    link: '/board',
  },
  {
    focusIcon: IoPersonSharp,
    blurIcon: IoPersonOutline,
    label: '마이페이지',
    link: '/my',
  },
];

export const BottomNavigationBar = ({ navItem }) => {
  const navigate = useNavigate();
  return (
    <>
      <Show below={'sm'}>
        <Spacer h={'70px'} />
        <Box>
          <Flex
            h={'70px'}
            w={'full'}
            bgColor={'white'}
            align={'center'}
            justify={'space-evenly'}
            position={'fixed'}
            bottom={0}
            borderTop={'1px'}
            borderColor={'gray.100'}
            zIndex={3}
          >
            {NavItemList.map((item) => (
              <NavItem
                key={item.label}
                icon={navItem === item.label ? item.focusIcon : item.blurIcon}
                label={item.label}
                focus={navItem === item.label}
                onClick={() => navigate(item.link)}
              />
            ))}
          </Flex>
        </Box>
      </Show>
      <Show above={'sm'}>
        <Flex
          bgColor={'white'}
          align={'center'}
          justify={'space-evenly'}
          position={'absolute'}
          bottom={0}
          w={'375px'}
          borderTop={'1px'}
          borderColor={'gray.100'}
        >
          {NavItemList.map((item) => (
            <NavItem
              key={item.label}
              icon={navItem === item.label ? item.focusIcon : item.blurIcon}
              label={item.label}
              focus={navItem === item.label}
              onClick={() => navigate(item.link)}
            />
          ))}
        </Flex>
      </Show>
    </>
  );
};
