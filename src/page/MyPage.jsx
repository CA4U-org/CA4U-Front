import { Box, Flex, Image, Text } from '@chakra-ui/react';
import TopHeader from '../components/TopHeader';
import StaffGuide from '../components/StaffGuide/StaffGuide';
import { IoIosHeart } from 'react-icons/io';
import { cauTheme } from '../shared/CAUTheme';
import { FaCircleCheck } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';

export function MyPage() {
  return (
    <Box w={'full'}>
      <TopHeader title={'내 정보'} />
      <Flex p={5} justify={'center'} align={'center'}>
        <Image
          src={'https://i.imgur.com/d56CAWR.png'}
          boxSize={'90px'}
          borderRadius={'full'}
        />
        <Flex direction={'column'} px={4} flexGrow={1}>
          <Flex align={'center'}>
            <Text fontWeight={'bolder'} fontSize={'xl'}>
              김푸앙
            </Text>
            <Text fontSize={'sm'} ml={2} color={'gray'}>
              20학번
            </Text>
          </Flex>
          <Box mt={1}>
            <Text color={'gray'} fontSize={'sm'}>
              서울캠 경영경제대학
            </Text>
            <Text color={'gray'} fontSize={'sm'}>
              경영학부 (경영학전공)
            </Text>
          </Box>
        </Flex>
      </Flex>
      <StaffGuide />
      <Menu />
    </Box>
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
    <Flex justify={'space-between'} py={3} px={10}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} title={item.title} />
      ))}
    </Flex>
  );
}

function MenuItem({ icon, title }) {
  return (
    <Flex direction={'column'} align={'center'} mt={3}>
      {icon}
      {title.map((line, index) => (
        <Text fontSize={'sm'} mt={index === 0 ? 1 : 0} key={index}>
          {line}
        </Text>
      ))}
    </Flex>
  );
}
