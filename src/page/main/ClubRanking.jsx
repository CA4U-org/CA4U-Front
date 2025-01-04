import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import medal1 from '../../assets/1등.png';
import medal2 from '../../assets/2등.png';
import medal3 from '../../assets/3등.png';
import openColor from 'open-color';
import logoTabakne from '../../assets/타박네-logo.png';
import logoCrux from '../../assets/crux-logo.png';
import logoMuse from '../../assets/muse-logo.png';

const CLUB_RANKING_ITEMS = [
  {
    rank: 1,
    medal: medal1,
    title: '타박네',
    description: '중앙대학교 중앙동아리 국예술연구회',
    logo: logoTabakne,
  },
  {
    rank: 2,
    medal: medal2,
    title: 'CRUX',
    description: '중앙대학교 클라이밍 동아리',
    logo: logoCrux,
  },
  {
    rank: 3,
    medal: medal3,
    title: 'MUsE',
    description: '중앙대학교 미디작곡동아리',
    logo: logoMuse,
  },
];
const ClubRankingItem = ({ rank, medal, logo, title, description }) => {
  return (
    <Flex w={'full'} bg={'white'} boxShadow={'md'} h={'60px'}>
      <Image boxSize={'32px'} src={medal} alt={`${rank}등 메달`} />
      <Flex w={'full'} direction={'column'} ml={3} p={1}>
        <Text fontSize={'20px'} color={openColor.gray[8]} fontWeight={600}>
          {title}
        </Text>
        <Text fontSize={'sm'} color={openColor.gray[7]}>
          {description}
        </Text>
      </Flex>
      <Image
        src={logo}
        alt={`${title} 로고`}
        objectFit={'cover'}
        w={'65px'}
        flexShrink={0}
      />
    </Flex>
  );
};
export const ClubRanking = () => {
  return (
    <VStack>
      {CLUB_RANKING_ITEMS.map((item) => (
        <ClubRankingItem key={item.rank} {...item} />
      ))}
    </VStack>
  );
};
