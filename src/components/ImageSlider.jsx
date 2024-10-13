import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true, // 슬라이더 하단에 점을 표시할지 여부
    infinite: true, // 무한 반복 여부
    speed: 500, // 슬라이딩 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    autoplay: false, // 자동 슬라이드
    autoplaySpeed: 3000, // 자동 슬라이드 시간 (3초)
  };

  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
    'https://via.placeholder.com/800x400?text=Slide+4',
    'https://via.placeholder.com/800x400?text=Slide+5',
  ];

  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
