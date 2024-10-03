// Gallery.jsx
import React, { useState } from "react";

// 연도별 갤러리 컴포넌트
const YearGallery = ({ year, images }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleGallery = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="year-gallery">
      <h2 onClick={toggleGallery}>
        {year} {isOpen ? "▲" : "▼"}
      </h2>
      {isOpen && (
        <div className="gallery-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${year}`} />
          ))}
        </div>
      )}
    </div>
  );
};

// 메인 갤러리 컴포넌트
const Gallery = () => {
  const galleries = {
    2024: [
      /* 이미지 URL 배열 */
    ],
    2023: [
      /* 이미지 URL 배열 */
    ],
    2022: [
      /* 이미지 URL 배열 */
    ],
  };

  return (
    <div className="gallery-container">
      {Object.keys(galleries).map((year) => (
        <YearGallery key={year} year={year} images={galleries[year]} />
      ))}
    </div>
  );
};

export default Gallery;
