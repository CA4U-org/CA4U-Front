import React, { useEffect, useState } from 'react';
import ClubImageSlider from './components/ClubImageSlider';
import ClubInfo from './components/ClubInfo';
import { Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { addRecentViewedClub } from './feature/recent-viewed-club/addRecentViewedClub';
import { getClubDetail } from './api/club/clubApi'; // API import 추가

// 이미지 관련 모크데이터는 당분간 유지
const clubImages = [
  'https://s3-alpha-sig.figma.com/img/b27c/4fdf/1fb1d8ab73cfac58d71268a454dfb893?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qf9gbewLVYeOZfe8N1XBVRx1adlc~TdHlOnxYUl5D1wPE8DScvmVjJHccR4RZJ08Y~gut1Dd2~lpw55uIFpH3t60F6zFSJ2lFMcmVJ~gQO32Ggh66M--ho5KTZloxRsdOwUbSVKFqUkPb4YE5cPRXA~2V-1xi1~bnn2UJYk3dk8-9~5aQhwNqrbgavEAe4LpI44kHdWHevcXHjFskC9wfkxkfPxGc2Vu8sfP4FCgHcN8dbkqVIJf5yrxfx7Zwq2mlfpMsft2iTXNG-J-jtAWiyMQdQzFnJReAT4TChHhII4rJVCjUcqosbcCF6g8Q0usJNETMRd3Ud3s0fGtN7C3eA__',
  'https://via.placeholder.com/800x400?text=Club+Image+2',
  'https://via.placeholder.com/800x400?text=Club+Image+3',
  'https://via.placeholder.com/800x400?text=Club+Image+4',
  'https://via.placeholder.com/800x400?text=Club+Image+5',
];

const activityIcon =
  'https://s3-alpha-sig.figma.com/img/874c/d505/3f951579d600be8a4550b18a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl5L6QfW0mcd4JfRW3GmJOWTjBF9QFYcobHqnGk75rzvMmvSHJd9KXtm4sS2goHDuHFX8BhWq9bo64GxQ1UxVGUa~fQ9Afhav~MJseh6GT8xIsTLIadHZHolOo-S0l2MV-5iVhIE3o2mGInxCZk0Vco5kp~LBeqss7kOweF8wS8C601f4FfYxjq~qeKjoeShx-3ogLnO70WtK~ZMasvZP5~IUuh929HExAOx9ELCZbeiDQeWiRqIZUf3yK0rVAsH~M6Vv0cExZ4vvQG9-MJKXFHMOwCPAe-A9gXN~aMXmcbXcKvD41ciu7PdEFNal01V04MfmcsdBiPlQe0GEEt85w__';

const ClubDetailPage = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const [clubDetail, setClubDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    navigate('/club-images');
  };

  useEffect(() => {
    const fetchClubDetail = async () => {
      try {
        const response = await getClubDetail(clubId);
        setClubDetail(response.result);
      } catch (error) {
        console.error('Error fetching club detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubDetail();
    addRecentViewedClub(clubId);
  }, [clubId]);

  if (loading) return <div>Loading...</div>;
  if (!clubDetail) return <div>Club not found</div>;

  return (
    <Box
      w="full"
      h="full"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
    >
      {/* 헤더 영역 */}
      <Box
        w="full"
        h="50px"
        bg="cauBlue"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        flex="none"
      >
        <IconButton
          icon={<ChevronLeftIcon w={6} h={6} />}
          onClick={() => navigate('/')}
          variant="ghost"
          position="absolute"
          left={2}
          color="white"
          _hover={{ bg: 'cauBlue' }}
          aria-label="뒤로가기"
        />
        <Text fontSize="16px" fontWeight="700">
          {clubDetail.clubNm} 상세보기
        </Text>
      </Box>

      {/* 이미지 슬라이더 영역 */}
      <Box
        w="full"
        h="auto"
        paddingTop={['66.67%', '53.33%']}
        position="relative"
        flex="none"
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0}>
          <ClubImageSlider
            images={clubImages}
            logo={clubDetail.logoImgUrl || clubImages[0]}
          />
        </Box>
      </Box>

      {/* 스크롤 가능한 컨텐츠 영역 */}
      <Box flex="1" overflow="auto" display="flex" flexDirection="column">
        {/* 활동사진 버튼 영역 */}
        <Box w="full" px={4} py={2} flex="none">
          <Button
            onClick={handleClick}
            w="full"
            h="28px"
            bg="#D4EAFF"
            color="#454545"
            fontSize="12px"
            fontWeight="bold"
            borderRadius="md"
            _hover={{ bg: '#C0E0FF' }}
          >
            <Flex align="center">
              <Image
                src={activityIcon}
                alt="Activity Icon"
                w="16px"
                h="16px"
                mr={2}
              />
              활동사진 보러가기
            </Flex>
          </Button>
        </Box>

        {/* 클럽 정보 영역 */}
        <Box flex="1" w="full">
          <ClubInfo clubDetail={clubDetail} />
        </Box>
      </Box>
    </Box>
  );
};

export default ClubDetailPage;
