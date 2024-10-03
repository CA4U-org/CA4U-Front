import React from "react";
import FavoriteButton from "./FavoriteButton";
import VerifiedButton from "./VerifiedButton";

// 동아리 태그 컴포넌트
const ClubTags = () => {
  const tags = ["동아리연합회", "문화예술", "중규모", "상시 모집"]; // 태그 배열

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
      {tags.map((tag, index) => (
        <span
          key={index}
          style={{
            padding: "6px 12px",
            backgroundColor: "#E6F7FF",
            borderRadius: "15px",
            fontSize: "12px",
            color: "#007BFF",
            fontWeight: "600",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

// 모집 정보 컴포넌트
const RecruitmentInfo = () => {
  return (
    <div
      style={{
        marginTop: "16px",
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
      }}
    >
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
        상세 모집
      </h3>
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          color: "#555",
          fontSize: "14px",
        }}
      >
        <li>
          <strong>선발 대상:</strong> 중앙대학교 학생 누구나
        </li>
        <li>
          <strong>선발 주기:</strong> 상시 모집
        </li>
        <li>
          <strong>지원 방법:</strong> 지원 시 무조건 합격
        </li>
        <li>
          <strong>활동 요일:</strong> ○○
        </li>
        <li>
          <strong>활동 장소:</strong> 107관 602호
        </li>
        <li>
          <strong>회원 수:</strong> 64명
        </li>
        <li>
          <strong>회비:</strong> 신입 부원 없음, 기존 부원 3만원(1년)
        </li>
      </ul>
    </div>
  );
};

// 공지사항 컴포넌트
const Notice = () => {
  return (
    <div
      style={{
        marginTop: "16px",
        padding: "16px",
        backgroundColor: "#EFF6FF",
        borderRadius: "8px",
        border: "1px solid #D0E2FF",
      }}
    >
      <h4 style={{ fontSize: "14px", fontWeight: "bold", color: "#007BFF" }}>
        9/9 동아리연합회 홍보 부스 안내!
      </h4>
      <p style={{ fontSize: "13px", color: "#555" }}>
        상황극 시뮬레이션, 한 호흡 챌린지 등을 체험하실 수 있는 기회이니
        동아리에 관심을 가져주셨던 학우분들의 많은 참여 부탁드립니다.
      </p>
      <a
        href="#"
        style={{
          fontSize: "13px",
          color: "#007BFF",
          textDecoration: "underline",
        }}
      >
        동아리 게시판 더보기 &gt;&gt;
      </a>
    </div>
  );
};

// 동아리 소개 컴포넌트
// 동아리 소개 컴포넌트
const ClubInfo = () => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // 간격을 최대로 벌림
          alignItems: "center", // 수직 중앙 정렬
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          타박네
        </h1>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <FavoriteButton />
          <VerifiedButton />
        </div>
      </div>
      <h3 style={{ fontSize: "14px", fontWeight: "normal", color: "#666" }}>
        중앙대학교 극예술 연구회 since 1989
      </h3>

      {/* 태그 컴포넌트 */}
      <ClubTags />

      {/* 모집 정보 컴포넌트 */}
      <RecruitmentInfo />

      {/* 공지사항 컴포넌트 */}
      <Notice />

      {/* 동아리 소개 내용 */}
      <div style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
          About 타박네
        </h2>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
          삶의 연극, 사람의 연극 중앙대학교 극예술 연구회 타박네입니다. <br />
          기성연극에 얽매이지 않고 극단적인 실험과 도전을 통해 무대를 사랑하고!
          인간을 표현하는! 가장 뛰어난 극단을 추구하는 우리는 극연 타박네입니다!{" "}
          <br />
          무대는 타박네, 당신과 함께! 30년 이상의 전통을 자랑하는 우리를
          만나보세요! <br />
          활동은 어디? 중앙대학교 서울캠퍼스 107관 602호에서!
        </p>
      </div>

      {/* 모집 공고 */}
      <div style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
          모집 공고
        </h2>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
          새로운 회원을 모집 중인 중앙대학교 극예술 연구회 타박네입니다. <br />
          기성연극에 얽매이지 않고 극단적인 실험과 도전을 통해 무대를 사랑하고!
          인간을 표현하는! 가장 뛰어난 극단을 추구하는 우리는 극연 타박네입니다!{" "}
          <br />
          무대는 타박네, 당신과 함께! 30년 이상의 전통을 자랑하는 우리를
          만나보세요! <br />
          활동은 어디? 중앙대학교 서울캠퍼스 107관 602호에서!
        </p>
      </div>
    </div>
  );
};

export default ClubInfo;
