import React from 'react';
import TopHeader from '../components/Header/Header'; // 상단 헤더 컴포넌트
import StaffGuide from '../components/StaffGuide/StaffGuide'; // 스탭 안내 컴포넌트
import searchIcon from '../assets/search-icon.png'; // 검색 아이콘
import ScreenshotUpload from './ScreenShotUpload';

const ClubVerificationPage = () => {
  const handleSearchClick = () => {
    console.log('검색 아이콘 클릭됨');
    // 검색 동작을 여기에 추가할 수 있습니다.
  };

  return (
    <div
      style={{
        maxWidth: '375px',
        margin: '0 auto',
        padding: '16px',
        backgroundColor: '#fff',
      }}
    >
      {/* 상단 헤더 */}
      <TopHeader
        title="동아리 소속 인증"
        rightIcon={searchIcon}
        onRightIconClick={handleSearchClick}
      />

      {/* 스탭 안내 */}
      <StaffGuide />

      {/* 설명 텍스트 */}
      <div
        style={{
          marginTop: '16px',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#555',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>
          동아리 단체 카톡방 캡처본을 업로드해주세요!
        </h2>
        <ul style={{ paddingLeft: '16px' }}>
          <li>
            * 다크모드가 아닌 일반모드로, PC가 아닌 모바일 환경에서
            촬영해주세요.
          </li>
          <li>
            * 예시와 같이 오른쪽 상단에 동아리 이름이 명확히 보이도록 스크린샷을
            찍어주세요.
          </li>
          <li>
            * 저해상도의 스크린샷, 일부가 잘린 스크린샷은 인식되지 않을 수
            있습니다.
          </li>
        </ul>
      </div>

      <ScreenshotUpload />
      {/* 스크린샷 업로드 버튼 */}

      {/* 하단 설명 */}
      <p
        style={{
          marginTop: '16px',
          fontSize: '12px',
          color: '#777',
          textAlign: 'center',
        }}
      >
        지속적으로 동아리 인증이 실패하는 경우 help.ca4u@gmail.com으로 해당
        스크린샷을 첨부하여 문의 부탁드립니다.
      </p>
    </div>
  );
};

export default ClubVerificationPage;
