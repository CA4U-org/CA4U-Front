import React from 'react';
import styles from './CategoryView.module.css';
import pencilIcon from '../../assets/pencil-icon.png'; // 아이콘 경로 예시
import musicIcon from '../../assets/music-icon.png';
import sportsIcon from '../../assets/sports-icon.png';
import hobbyIcon from '../../assets/hobby-icon.png';
import religionIcon from '../../assets/religion-icon.png';
import volunteerIcon from '../../assets/volunteer-icon.png';

function CategoryView() {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>카테고리별로 보기</p>
      <div className={styles.gridContainer}>
        <div style={{ backgroundColor: '#D4EAFF' }} className={styles.gridItem}>
          <p className={styles.gridText}>학술</p>
          <img className={styles.icon} src={pencilIcon} alt="학술" />
        </div>
        <div style={{ backgroundColor: '#E2FFC5' }} className={styles.gridItem}>
          <p className={styles.gridText}>문화예술</p>
          <img className={styles.icon} src={musicIcon} alt="문화예술" />
        </div>
        <div style={{ backgroundColor: '#FFEDD2' }} className={styles.gridItem}>
          <p className={styles.gridText}>운동</p>
          <img className={styles.icon} src={sportsIcon} alt="운동" />
        </div>
        <div style={{ backgroundColor: '#EFE3FF' }} className={styles.gridItem}>
          <p className={styles.gridText}>취미</p>
          <img className={styles.icon} src={hobbyIcon} alt="취미" />
        </div>
        <div style={{ backgroundColor: '#FFF8BC' }} className={styles.gridItem}>
          <p className={styles.gridText}>종교</p>
          <img className={styles.icon} src={religionIcon} alt="종교" />
        </div>
        <div style={{ backgroundColor: '#FFDADC' }} className={styles.gridItem}>
          <p className={styles.gridText}>봉사</p>
          <img className={styles.icon} src={volunteerIcon} alt="봉사" />
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
