import { Box, Flex, Image, Text } from '@chakra-ui/react';
import TopHeader from '../components/TopHeader';
import StaffGuide from '../components/StaffGuide/StaffGuide';
import { IoIosHeart } from 'react-icons/io';
import { cauTheme } from '../shared/CAUTheme';
import { FaCircleCheck } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getMember } from '../api/members/getMember';
import { PageWrapper } from './PageWrapper';

export function MyPage() {
  const [member, setMember] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMember('mock-1').then((m) => {
      setMember(m);
      setIsLoading(false);
    });
  }, []);

  return (
    <PageWrapper isLoading={isLoading}>
      <TopHeader title={'내 정보'} />
      <Profile {...member} />
      <StaffGuide />
      <Menu />
    </PageWrapper>
  );
}

function Profile(member) {
  return (
    <Flex w={'full'} p={5} justify={'center'} align={'center'}>
      <Image
        src={member.profileImageUrl}
        boxSize={'90px'}
        borderRadius={'full'}
      />
      <Flex direction={'column'} px={4} flexGrow={1}>
        <Flex align={'center'}>
          <Text fontWeight={'bolder'} fontSize={'xl'}>
            {member.name}
          </Text>
          <Text fontSize={'sm'} ml={2} color={'gray'}>
            {member.studentId.substring(2, 4) + '학번'}
          </Text>
        </Flex>
        <Box mt={1}>
          <Text color={'gray'} fontSize={'sm'}>
            {member.department}
          </Text>
          <Text color={'gray'} fontSize={'sm'}>
            {member.major}
          </Text>
        </Box>
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
    <Flex w={'full'} justify={'space-between'} py={3}>
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
