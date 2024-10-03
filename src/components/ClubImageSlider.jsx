import React from "react";
import Slider from "react-slick";

// ClubImageSlider 컴포넌트
const ClubImageSlider = ({ images, logo }) => {
  const settings = {
    dots: true, // 슬라이더 하단에 점을 표시할지 여부
    infinite: true, // 무한 반복 여부
    speed: 500, // 슬라이딩 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    autoplay: false, // 자동 슬라이드 여부
    autoplaySpeed: 3000, // 자동 슬라이드 시간 (3초)
    dotsClass: "slick-dots custom-dots",
  };

  const wrapperStyle = { position: "relative", width: "100%", height: "100%" };

  return (
    <div style={wrapperStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div style={wrapperStyle} key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "200px" }}
            />
          </div>
        ))}
      </Slider>

      {/* 로고 배치 - 왼쪽 하단 */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          bottom: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 로고 배경을 반투명하게 설정
          height: "30px",
          width: "30px",
        }}
      >
        <img
          src={logo}
          alt="Club Logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default ClubImageSlider;
