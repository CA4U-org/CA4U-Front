import React from 'react';
import Slider from 'react-slick';
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';
import mainImage from '../../assets/main-image.png';
import clubLogo from '../../assets/club-logo.png';

const AIRecommendation = () => {
  const settings = {
    dots: true,
    infinite: true,
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

  const clubs = [
    {
      name: '타박네',
      subtitle: '중앙대학교 한국예술 연구회 since 1989',
      description:
        '삶의 연극, 사람의 연극! 중앙대학교 국예술연구회 타박네입니다. 거창하게 국예술연구회라고 하지만! 이라는 것을 매...',
      image: mainImage,
      logo: clubLogo,
    },
    {
      name: '두 번째 동아리',
      subtitle: '두 번째 동아리의 소제목이 여기에 들어갑니다.',
      description:
        '두 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해 간단히 소개합니다.',
      image: mainImage,
      logo: clubLogo,
    },
    {
      name: '세 번째 동아리',
      subtitle: '세 번째 동아리의 소제목이 여기에 들어갑니다.',
      description:
        '세 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해 간단히 소개합니다.',
      image: mainImage,
      logo: clubLogo,
    },
    {
      name: '네 번째 동아리',
      subtitle: '네 번째 동아리의 소제목이 여기에 들어갑니다.',
      description:
        '네 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해 간단히 소개합니다.',
      image: mainImage,
      logo: clubLogo,
    },
    {
      name: '다섯 번째 동아리',
      subtitle: '다섯 번째 동아리의 소제목이 여기에 들어갑니다.',
      description:
        '다섯 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해 간단히 소개합니다.',
      image: mainImage,
      logo: clubLogo,
    },
  ];

  return (
    <Box>
      <Text mt={6} ml={4} fontSize="xl" fontWeight="bold">
        AI 동아리 추천
      </Text>

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
            <Box key={index} p={4}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <Image
                  src={club.image}
                  alt={`${club.name} 활동 이미지`}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                />
                <VStack align="stretch" p={4} spacing={3}>
                  <HStack>
                    <Image
                      src={club.logo}
                      alt={`${club.name} 로고`}
                      width="24px"
                      height="24px"
                    />
                    <Text fontWeight="bold">{club.name}</Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600">
                    {club.subtitle}
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
