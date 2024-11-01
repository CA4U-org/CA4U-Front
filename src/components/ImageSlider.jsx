import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    // 커스텀 dots 스타일
    dotsClass: 'slick-dots custom-dots',
    // 반응형 설정
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // 모바일에서는 화살표 숨김
        },
      },
    ],
  };

  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
    'https://via.placeholder.com/800x400?text=Slide+4',
    'https://via.placeholder.com/800x400?text=Slide+5',
  ];

  return (
    <Box
      position="relative"
      width="100%"
      maxW="container.md"
      mx="auto"
      overflow="hidden"
      sx={{
        // Slick 커스텀 스타일
        '.slick-slide': {
          px: '1px', // 슬라이드 간 간격
        },
        '.slick-dots': {
          bottom: '20px', // dots 위치 조정
          li: {
            mx: '2px', // dots 간 간격
            button: {
              _before: {
                color: 'white', // dots 색상
                fontSize: '8px', // dots 크기
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
          display: ['none', 'block'], // 모바일에서는 숨김
          _before: {
            color: 'white',
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
        {images.map((image, index) => (
          <Box key={index} position="relative" paddingTop="50%">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

// Global styles to add in your App.js or theme file
const globalStyles = {
  '.slick-slider': {
    touchAction: 'pan-y', // 모바일에서 더 나은 스와이프 경험
  },
};

export default ImageSlider;
