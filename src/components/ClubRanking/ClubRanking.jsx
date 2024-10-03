import React from "react";
import styles from "./ClubRanking.module.css";
import medal1 from "../../assets/1등.png";
import medal2 from "../../assets/2등.png";
import medal3 from "../../assets/3등.png";
import logoTabakne from "../../assets/타박네-logo.png";
import logoCrux from "../../assets/crux-logo.png";
import logoMuse from "../../assets/muse-logo.png";

function ClubRanking() {
  const clubs = [
    {
      rank: 1,
      medal: medal1,
      name: "타박네",
      description: "중앙대학교 중앙동아리 국예술연구회",
      logo: logoTabakne,
    },
    {
      rank: 2,
      medal: medal2,
      name: "CRUX",
      description: "중앙대학교 클라이밍 동아리",
      logo: logoCrux,
    },
    {
      rank: 3,
      medal: medal3,
      name: "MUSe",
      description: "중앙대학교 미디작곡동아리",
      logo: logoMuse,
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <span className={styles.title}>동아리 랭킹</span>
        <span className={styles.subtitle}>인증 회원수 기준</span>
      </div>
      {clubs.map((club) => (
        <div key={club.rank} className={styles.clubContainer}>
          <img
            src={club.medal}
            alt={`${club.rank}등 메달`}
            className={styles.medal}
          />
          <div className={styles.clubText}>
            <span className={styles.clubName}>{club.name}</span>
            <span className={styles.clubDescription}>{club.description}</span>
          </div>
          <img
            src={club.logo}
            alt={`${club.name} 로고`}
            className={styles.clubLogo}
          />
        </div>
      ))}
    </div>
  );
}

export default ClubRanking;
