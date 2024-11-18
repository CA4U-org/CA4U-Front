import React from 'react';
import menuIcon from '../assets/menu-icon.png';
import Header from '../components/Header/Header';

// 게시글 이미지 예시

// 게시판 내부 상세 페이지 컴포넌트
const PostDetailPage = () => {
  const handleMenuClick = () => {
    console.log('메뉴 아이콘 클릭됨');
    // 여기에 메뉴 열기 동작 추가 가능
  };
  return (
    <div
      style={{
        width: '100%',
        padding: '10px',
        maxWidth: '600px',
        backgroundColor: '#fff',
        margin: '0 auto', // 페이지를 가운데 정렬
        // 패딩 추가
      }}
    >
      {/* TopHeader 컴포넌트를 사용하여 간단하게 변경 */}
      <Header
        title="타박네 게시판"
        rightIcon={menuIcon}
        onRightIconClick={handleMenuClick}
      />

      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/b9a8/d68b/fcdec1bc56b4cb872150d4c0ddeaafc6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZmehTjYZYJVRm-KDPhM0KHqJAbCHR5a87hiaW~34bpIfluT8rDAlXCUPOVrSt57AR0rL1zIeXxyid-nn1DEZuS3PEigt2z1q1w~SqZKNj70q~xgJgkOQGjv99G8omAznyhMsNiFh3L5WHZGYKDHlJ2iW7WEd2Xqdo-3dQa6SDxRBkQiCRTjmVTpyTIKJjvt5Vros0iuoWEZTShBbXH0K3Thp5vwkLYm9TIzcV8L2V3M8o00ZR0JkRw8g1yRNzV0n1CWm8sHSntAVFprz6NdBcZBldTQaECpATz69eoI4VxHbpp9VlaRLTqD43wfTw-L2NXmqYWU0P9Y4sagtpg~bA__" // 프로필 이미지 (예시)
          alt="작성자 프로필"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '12px',
          }}
        />
        <div>
          <p
            style={{
              fontFamily: 'Noto Sans KR',
              fontSize: '14px',
              fontWeight: '700',
              margin: '0 0 4px 0',
              color: '#333',
            }}
          >
            타박네 운영진
          </p>
          <p
            style={{
              fontFamily: 'Noto Sans KR',
              fontSize: '12px',
              fontWeight: '400',
              color: '#888',
              margin: '0',
            }}
          >
            7월 28일 (일) 03:10
          </p>
        </div>
      </div>

      {/* 게시글 제목 */}
      <h2
        style={{
          fontFamily: 'Noto Sans KR',
          fontSize: '18px',
          fontWeight: 'bold',
          margin: '16px 0',
          color: '#333',
        }}
      >
        9/9 동아리연합회 홍보 부스 합니다!
      </h2>

      {/* 게시글 내용 */}
      <p
        style={{
          fontFamily: 'Noto Sans KR',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '1.6',
          color: 'grey',
        }}
      >
        상황극 시뮬레이션, 한 호흡 챌린지 등을 체험하실 수 있는 기회이니
        동아리에 관심을 가져주셨던 학우분들의 많은 참여 부탁드립니다.
      </p>

      {/* 게시글 이미지 */}
      <img
        src="https://s3-alpha-sig.figma.com/img/b27c/4fdf/1fb1d8ab73cfac58d71268a454dfb893?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qf9gbewLVYeOZfe8N1XBVRx1adlc~TdHlOnxYUl5D1wPE8DScvmVjJHccR4RZJ08Y~gut1Dd2~lpw55uIFpH3t60F6zFSJ2lFMcmVJ~gQO32Ggh66M--ho5KTZloxRsdOwUbSVKFqUkPb4YE5cPRXA~2V-1xi1~bnn2UJYk3dk8-9~5aQhwNqrbgavEAe4LpI44kHdWHevcXHjFskC9wfkxkfPxGc2Vu8sfP4FCgHcN8dbkqVIJf5yrxfx7Zwq2mlfpMsft2iTXNG-J-jtAWiyMQdQzFnJReAT4TChHhII4rJVCjUcqosbcCF6g8Q0usJNETMRd3Ud3s0fGtN7C3eA__" // 게시글 이미지 경로
        alt="게시글 이미지"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      />
    </div>
  );
};

export default PostDetailPage;
