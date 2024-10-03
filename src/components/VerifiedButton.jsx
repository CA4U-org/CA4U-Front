import React, { useState } from "react";
import verifiedBadge from "../assets/인증o.png";
import notVerifiedBadge from "../assets/인증x.png";

const VerifiedButton = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifiedClick = () => {
    setIsVerified(!isVerified);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        onClick={handleVerifiedClick}
        src={isVerified ? verifiedBadge : notVerifiedBadge}
        alt="즐겨찾기"
        style={{ width: "21.75px", height: "18.75px" }}
      />
      <p
        style={{
          //styleName: title12;
          marginTop: "2px",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontWeight: "700",
          lineHeight: "12px",
          textAlign: "center",
          color: "grey",
          margin: "0",
        }}
      >
        소속 인증
      </p>
    </div>
  );
};

export default VerifiedButton;
