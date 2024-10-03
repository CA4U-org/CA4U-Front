import React from "react";
import styles from "./StaffGuide.module.css";
import ca4uRecIcon from "../../assets/ca4u-rec-icon.png";

function StaffGuide() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <p className={styles.title1}>동아리 운영진이신가요?</p>
        <p className={styles.title2}>운영진 안내 가이드 보러가기</p>
      </div>
      <img className={styles.image} src={ca4uRecIcon} alt="ca4u" />
    </div>
  );
}

export default StaffGuide;
