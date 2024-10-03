import React from "react";
import styles from "./RecruitmentSection.module.css";

const recruitments = [
  {
    title: "타박네 2024년 연극부원 상시모집",
    img: "../../assets/recruit1.png",
    date: "~상시",
  },
  {
    title: "CUSCM: 2학기 부원 모집합니다",
    img: "../../assets/recruit2.png",
    date: "~8/31",
  },
  {
    title: "Da C Side: 학기 신입 부원 모집",
    img: "../../assets/recruit3.png",
    date: "~9/31",
  },
];

function RecruitmentSection() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.recruitmentSection}>
        <p className={styles.title}>모집 공고</p>
        <div className={styles.recruitmentList}>
          {recruitments.map((recruitment, index) => (
            <div key={index} className={styles.recruitmentCard}>
              <img src={recruitment.img} alt={recruitment.title} />
              <div className={styles.textContainer}>
                <p className={styles.cardTitle}>{recruitment.title}</p>
                <p className={styles.cardDate}>{recruitment.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RecruitmentSection;
