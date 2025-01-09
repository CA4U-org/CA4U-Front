import React from 'react';
import '../../App.css';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import AIRecommendation from '../../components/AIRecommendation/AIRecommendation';
import { PageWrapper } from '../PageWrapper';
import openColor from 'open-color';
import { MHeader } from './MHeader';
import MainSlider from './MainSlider';
import { PersonalityTestBanner } from './PersonalityTestBanner';
import { ClubRanking } from './ClubRanking';
import { useAuth } from '../../shared/useAuth';
import { Recruitings } from './Recruitings';
import { Spacer } from '../../components/Spacer';

export default function MainPage() {
  const CONTENT_GAP = 10;

  const { user } = useAuth();
  return (
    <PageWrapper navItem={'홈'} bgColor={openColor.gray[0]}>
      <MHeader />
      <Box px={3}>
        <MHeading>신규 소식</MHeading>
        <MainSlider />

        {user && (
          <>
            <Spacer size={CONTENT_GAP} />
            <MHeading>AI 동아리 추천</MHeading>
            <AIRecommendation />
          </>
        )}

        <Spacer size={CONTENT_GAP} />
        <MHeading addMore={true}>동아리 랭킹</MHeading>
        <ClubRanking />

        <Spacer size={CONTENT_GAP} />
        <PersonalityTestBanner />

        <Spacer size={CONTENT_GAP} />
        <MHeading addMore={true}>모집 공고</MHeading>
        <Recruitings />
      </Box>
    </PageWrapper>
  );
}

const MHeading = ({ children, addMore = false }) => {
  return (
    <Flex justify={'space-between'} align={'flex-end'} mb={1.5}>
      <Heading
        as={'h4'}
        fontSize={'18px'}
        color={openColor.gray[8]}
        fontWeight={'600'}
      >
        {children}
      </Heading>
      {addMore && (
        <Text color={openColor.gray[6]} fontSize={'13px'}>
          더 보기 >
        </Text>
      )}
    </Flex>
  );
};
