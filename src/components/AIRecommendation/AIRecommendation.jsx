import React, { useState } from "react";
import styles from "./AIRecommendation.module.css";
import mainImage from "../../assets/main-image.png";
import clubLogo from "../../assets/club-logo.png";

function AIRecommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 5; // 총 카드 수 (실제 카드 개수에 맞게 조정)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>AI 동아리 맞춤 추천</p>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.cardContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className={styles.card}>
            <img
              className={styles.mainImage}
              src={mainImage}
              alt="동아리 활동 이미지"
            />
            <div className={styles.textContainer}>
              <div className={styles.clubHeader}>
                <img className={styles.logo} src={clubLogo} alt="동아리 로고" />
                <span className={styles.clubName}>타박네</span>
              </div>
              <p className={styles.subtitle}>
                중앙대학교 한국예술 연구회 since 1989
              </p>
              <p className={styles.description}>
                삶의 연극, 사람의 연극! 중앙대학교 국예술연구회 타박네입니다.
                거창하게 국예술연구회라고 하지만! ‘극’이라는 것을 매...
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.mainImage}
              src={mainImage}
              alt="동아리 활동 이미지"
            />
            <div className={styles.textContainer}>
              <div className={styles.clubHeader}>
                <img className={styles.logo} src={clubLogo} alt="동아리 로고" />
                <span className={styles.clubName}>두 번째 동아리</span>
              </div>
              <p className={styles.subtitle}>
                두 번째 동아리의 소제목이 여기에 들어갑니다.
              </p>
              <p className={styles.description}>
                두 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해
                간단히 소개합니다.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.mainImage}
              src={mainImage}
              alt="동아리 활동 이미지"
            />
            <div className={styles.textContainer}>
              <div className={styles.clubHeader}>
                <img className={styles.logo} src={clubLogo} alt="동아리 로고" />
                <span className={styles.clubName}>세 번째 동아리</span>
              </div>
              <p className={styles.subtitle}>
                세 번째 동아리의 소제목이 여기에 들어갑니다.
              </p>
              <p className={styles.description}>
                세 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해
                간단히 소개합니다.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.mainImage}
              src={mainImage}
              alt="동아리 활동 이미지"
            />
            <div className={styles.textContainer}>
              <div className={styles.clubHeader}>
                <img className={styles.logo} src={clubLogo} alt="동아리 로고" />
                <span className={styles.clubName}>네 번째 동아리</span>
              </div>
              <p className={styles.subtitle}>
                네 번째 동아리의 소제목이 여기에 들어갑니다.
              </p>
              <p className={styles.description}>
                네 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에 대해
                간단히 소개합니다.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.mainImage}
              src={mainImage}
              alt="동아리 활동 이미지"
            />
            <div className={styles.textContainer}>
              <div className={styles.clubHeader}>
                <img className={styles.logo} src={clubLogo} alt="동아리 로고" />
                <span className={styles.clubName}>다섯 번째 동아리</span>
              </div>
              <p className={styles.subtitle}>
                다섯 번째 동아리의 소제목이 여기에 들어갑니다.
              </p>
              <p className={styles.description}>
                다섯 번째 동아리의 설명 텍스트가 여기에 들어갑니다. 동아리에
                대해 간단히 소개합니다.
              </p>
            </div>
          </div>

          {/* 세 번째, 네 번째, 다섯 번째 카드도 같은 구조로 추가 */}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={prevSlide}>‹</button>

        <div className={styles.dotsContainer}>
          {Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
            ></div>
          ))}
        </div>

        <button onClick={nextSlide}>›</button>
      </div>
    </div>
  );
}

export default AIRecommendation;
