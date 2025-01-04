import { Flex, Image, Text } from '@chakra-ui/react';
import openColor from 'open-color';
import rubato from '../../assets/rubato.jpeg';
import CA4UIcon from '../../assets/ca4u-icon.png';

const RECRUITING_LIST = [
  {
    title: '루바토 20기 잔뜩 모집 많관부',
    date: '~2.28',
    imgUrl: rubato,
  },
  {
    title: 'CA4U AI 개발자 모집 많관부',
    date: '~2.28',
    imgUrl: CA4UIcon,
  },
  {
    title: 'CA4U 백엔드 개발자 모집: Nest.js',
    date: '~3.15',
    imgUrl: CA4UIcon,
  },
];

const RecruitingItem = ({ title, date, imgUrl }) => {
  return (
    <Flex
      shrink={0}
      direction={'column'}
      w={'120px'}
      bg={'white'}
      borderRadius={'md'}
      boxShadow={'md'}
    >
      <Image
        borderTopRadius={'md'}
        src={imgUrl}
        boxSize={'120px'}
        objectFit={'contain'}
      />
      <Flex direction={'column'} p={2}>
        <Text fontSize={'13px'} fontWeight={600} wordBreak={'break-word'}>
          {title}
        </Text>
        <Text fontSize={'xs'} color={openColor.gray[6]}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export const Recruitings = () => {
  return (
    <Flex
      wrap={'nowrap'}
      overflowX={'scroll'}
      className={'hide-scrollbar'}
      gap={2}
      pb={1}
    >
      {RECRUITING_LIST.map((recruiting, index) => (
        <RecruitingItem
          key={index}
          title={recruiting.title}
          date={recruiting.date}
          imgUrl={recruiting.imgUrl}
        />
      ))}
    </Flex>
  );
};
