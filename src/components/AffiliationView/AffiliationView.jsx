import React from "react";
import styles from "./AffiliationView.module.css";
import linkIcon from "../../assets/link_icon.png";
import cauIcon from "../../assets/cau-icon.png";
import mascotIcon from "../../assets/mascot-icon.png";

function AffiliationView() {
  return (
    <div className={styles.affiliationViewContainer}>
      <p className={styles.title}>소속별로 보기</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <p className={styles.buttonTitle1}>중앙</p>
          <p className={styles.buttonTitle2}>동아리 연합회</p>
          <p className={styles.buttonTitle2}>소속</p>
          <img src={linkIcon} alt="동아리연합회" />
        </button>
        <button className={styles.button}>
          <p className={styles.buttonTitle1}>단과대/학과</p>
          <p className={styles.buttonTitle2}>단과대/학과(부) 소속</p>
          <img src={cauIcon} alt="단과대" />
        </button>
        <button className={styles.button}>
          <p className={styles.buttonTitle1}>그 외</p>
          <p className={styles.buttonTitle2}>준동아리,학회, </p>
          <p className={styles.buttonTitle2}>스터디 등</p>
          <img src={mascotIcon} alt="기타 소속" />
        </button>
      </div>
    </div>
  );
}

export default AffiliationView;
