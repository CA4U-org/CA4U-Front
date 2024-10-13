import React from 'react';
import ca4uLogo from '../assets/ca4u.png'; // 로고 이미지 경로
import backIcon from '../assets/back-icon.png'; // 뒤로가기 아이콘 이미지 경로

const TopHeader = ({ title, rightIcon, onRightIconClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between', // 좌우 정렬
        alignItems: 'center', // 중앙 정렬
        width: '100%',
        height: '43px',
        gap: '0px',
        opacity: '1', // opacity 1로 수정
      }}
    >
      {/* 뒤로가기 버튼과 로고를 묶어서 가로로 배치 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={backIcon} // 뒤로가기 아이콘
          alt="뒤로가기"
          style={{ width: '24px', height: '24px' }}
          onClick={() => window.history.back()} // 기본 뒤로가기 동작
        />
        <img
          src={ca4uLogo} // 로고 이미지
          alt="club logo"
          style={{ width: '24px', height: '24px' }}
        />
      </div>

      {/* 가운데 타이틀 */}
      <h1
        style={{
          fontFamily: 'Noto Sans KR',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20.27px',
          textAlign: 'center',
          margin: '0',
          flex: 1, // 가운데 정렬을 위해 flex 사용
        }}
      >
        {title}
      </h1>

      {/* 오른쪽 아이콘과 onClick 이벤트 처리 */}
      <img
        src={rightIcon} // 오른쪽 아이콘
        alt="오른쪽 아이콘"
        style={{ width: '24px', height: '24px' }}
        onClick={onRightIconClick} // 이벤트를 props로 전달받아 처리
      />
    </div>
  );
};

export default TopHeader;
