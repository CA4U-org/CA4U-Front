import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { getUserRecommendedClubs } from '../../api/recommend/getUserRecommendedClubs';
import { useAuth } from '../../shared/useAuth';
import { useNavigate } from 'react-router-dom';

const AIRecommendation = () => {
  const { user } = useAuth();
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getUserRecommendedClubs(user.id).then((res) => {
        setClubs(res.result);
      });
    }
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  /**
   * 데이터 없는 경우 일단 렌더링 하지 않음
   */
  if (clubs.length === 0) {
    return null;
  }

  return (
    <Box bg={'white'}>
      <Box
        position="relative"
        width="100%"
        mx="auto"
        overflow="hidden"
        sx={{
          '.slick-slide': {
            px: '1px',
          },
          '.slick-dots': {
            bottom: '20px',
            li: {
              mx: '2px',
              button: {
                _before: {
                  color: 'gray.600',
                  fontSize: '8px',
                  opacity: 0.5,
                },
              },
              '&.slick-active': {
                button: {
                  _before: {
                    opacity: 1,
                  },
                },
              },
            },
          },
          '.slick-prev, .slick-next': {
            zIndex: 1,
            width: '40px',
            height: '40px',
            display: ['none', 'block'],
            _before: {
              color: 'gray.600',
              fontSize: '24px',
            },
          },
          '.slick-prev': {
            left: '20px',
          },
          '.slick-next': {
            right: '20px',
          },
        }}
      >
        <Slider {...settings}>
          {clubs.map((club, index) => (
            <Box
              key={index}
              onClick={() => {
                navigate('/club/' + club.id);
              }}
              _hover={{
                cursor: 'pointer',
              }}
            >
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <Image
                  src={club.logoImgUrl}
                  alt={`${club.clubNm} 활동 이미지`}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                />
                <VStack align="stretch" p={4} spacing={3} h={'110px'}>
                  <HStack>
                    <Image
                      src={club.logoImgUrl}
                      alt={`${club.clubNm} 로고`}
                      width="24px"
                      height="24px"
                    />
                    <Text fontWeight="bold">{club.clubNm}</Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600">
                    {club.briefDescription}
                  </Text>
                  <Text fontSize="sm">{club.description}</Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default AIRecommendation;
