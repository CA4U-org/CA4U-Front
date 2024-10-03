import React from "react";
import ca4uLogo from "../assets/ca4u.png";

// 게시판 리스트 아이템 컴포넌트
const PostItem = ({ title, description, date, author }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginBottom: "11px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        alignItems: "flex-start", // 제목에 맞춰 이미지 정렬
      }}
    >
      <div style={{ flex: 1 }}>
        {" "}
        {/* 텍스트를 감싸는 div */}
        <h3
          style={{
            fontFamily: "Noto Sans KR",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "23.17px",
            margin: "0 12px 0 0", // 제목과 이미지 간의 간격 설정
            color: "#333",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "Noto Sans KR",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "16px",
            color: "#959595",
            margin: "8px 0", // 제목과 본문 사이 간격 설정
          }}
        >
          {description}
        </p>
        <p
          style={{
            fontFamily: "Noto Sans KR",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "16px",
            color: "#C9C9C9",
          }}
        >
          {date} | {author}
        </p>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/b27c/4fdf/1fb1d8ab73cfac58d71268a454dfb893?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qf9gbewLVYeOZfe8N1XBVRx1adlc~TdHlOnxYUl5D1wPE8DScvmVjJHccR4RZJ08Y~gut1Dd2~lpw55uIFpH3t60F6zFSJ2lFMcmVJ~gQO32Ggh66M--ho5KTZloxRsdOwUbSVKFqUkPb4YE5cPRXA~2V-1xi1~bnn2UJYk3dk8-9~5aQhwNqrbgavEAe4LpI44kHdWHevcXHjFskC9wfkxkfPxGc2Vu8sfP4FCgHcN8dbkqVIJf5yrxfx7Zwq2mlfpMsft2iTXNG-J-jtAWiyMQdQzFnJReAT4TChHhII4rJVCjUcqosbcCF6g8Q0usJNETMRd3Ud3s0fGtN7C3eA__" // 예시 이미지
        alt="post thumbnail"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

// 게시판 페이지 컴포넌트
const ClubBoardPage = () => {
  const posts = [
    {
      title: "9/9 동아리연합회 홍보 부스 합니다!",
      description:
        "상황극 시뮬레이션, 한 호흡 챌린지 등을 체험하실 수 있는 기회이니 동아리에 관심을 가져주셨던 학우분들의 많은 참여 부탁드립니다.",
      date: "7/28 (일)",
      author: "타박네 운영진",
    },
    {
      title: "9/9 동아리연합회 홍보 부스 합니다!",
      description:
        "상황극 시뮬레이션, 한 호흡 챌린지 등을 체험하실 수 있는 기회이니 동아리에 관심을 가져주셨던 학우분들의 많은 참여 부탁드립니다.",
      date: "7/28 (일)",
      author: "타박네 운영진",
    },
    {
      title: "9/9 동아리연합회 홍보 부스 합니다!",
      description:
        "상황극 시뮬레이션, 한 호흡 챌린지 등을 체험하실 수 있는 기회이니 동아리에 관심을 가져주셨던 학우분들의 많은 참여 부탁드립니다.",
      date: "7/28 (일)",
      author: "타박네 운영진",
    },
  ];

  return (
    <div style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <img
          src={ca4uLogo} // 로고 이미지
          alt="club logo"
          style={{ width: "24px", height: "24px" }}
        />
        <h2
          style={{
            fontFamily: "Noto Sans KR",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20.27px",
            textAlign: "center",
            margin: "0",
            flexGrow: 1,
          }}
        >
          타박네 게시판
        </h2>
      </div>
      {posts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title}
          description={post.description}
          date={post.date}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default ClubBoardPage;
