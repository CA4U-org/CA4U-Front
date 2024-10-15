import React, { useState } from 'react';
import filledHeart from '../assets/하트o.png';
import emptyHeart from '../assets/하트x.png';
const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      style={{
        width: '100%',
        hegiht: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        onClick={handleFavoriteClick}
        src={isFavorited ? filledHeart : emptyHeart}
        alt="즐겨찾기"
        style={{ width: '21.75px', height: '18.75px' }}
      />
      <p
        style={{
          //styleName: title12;
          marginTop: '2px',
          fontFamily: 'Noto Sans KR',
          fontSize: '10px',
          fontWeight: '700',
          lineHeight: '12px',
          textAlign: 'center',
          color: 'grey',
          margin: '0',
        }}
      >
        즐겨찾기
      </p>
    </div>
  );
};

export default FavoriteButton;
