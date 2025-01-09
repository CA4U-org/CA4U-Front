'use client';

import React, { useState } from 'react';
import { Box, Circle, Flex, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import openColor from 'open-color';
import Intro from '../../assets/ca4uintro.webp';
import SKI from '../../assets/ski.png';
import GDG from '../../assets/gdg.png';
import CASC from '../../assets/ca.jpg';

// Settings for the slider
const settings = {
  dots: false, // 기본 dots는 숨김
  arrows: false,
  fade: false, // 페이드 효과 비활성화
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1, // 한 번에 표시할 슬라이드 수
  slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
};

export default function MainSlider() {
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the slider
  const cards = [Intro, CASC, SKI, GDG];

  return (
    <Box position={'relative'} overflow={'hidden'} h="360px">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider
        {...settings}
        ref={(slider) => setSlider(slider)}
        beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} // 슬라이드 변경 시 현재 인덱스 업데이트
      >
        {cards.map((url, index) => (
          <Box
            key={index}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            h={'360px'}
          >
            <Image
              src={url}
              alt={`image-${index}`}
              objectFit="cover"
              width="100%"
              height="100%"
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="30%" // 하단 30% 영역만 커버
              background="linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))" // 어두운 그라데이션
            />
          </Box>
        ))}
      </Slider>

      {/* Dot Navigation */}
      <Flex justify="center" mt={4} position={'relative'} top={'-50px'}>
        {cards.map((_, index) => (
          <Circle
            key={index}
            size={currentSlide === index ? '9px' : '7px'} // 현재 슬라이드일 경우 크기를 키움
            bg={currentSlide === index ? openColor.blue[7] : openColor.gray[4]} // 현재 슬라이드 색상 강조
            mx={1} // 점 간 간격
            transition="all 0.3s"
          />
        ))}
      </Flex>
    </Box>
  );
}
