import React from 'react';
import styles from './CategoryView.module.css';
import pencilIcon from '../../assets/학술-icon.svg'; // 아이콘 경로 예시
import musicIcon from '../../assets/문화예술-icon.svg';
import sportsIcon from '../../assets/운동-icon.svg';
import hobbyIcon from '../../assets/취미-icon.svg';
import religionIcon from '../../assets/종교-icon.svg';
import volunteerIcon from '../../assets/봉사-icon.svg';
// CategoryView.jsx에 추가할 네비게이션 코드
import { useNavigate } from 'react-router-dom';

function CategoryView() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        <div
          style={{ backgroundColor: '#D4EAFF' }}
          className={styles.gridItem}
          onClick={() => handleCategoryClick('academic')}
        >
          <p className={styles.gridText}>학술</p>
          <img className={styles.icon} src={pencilIcon} alt="학술" />
        </div>
        <div
          style={{ backgroundColor: '#E2FFC5' }}
          className={styles.gridItem}
          onClick={() => handleCategoryClick('culture')}
        >
          <p className={styles.gridText}>
            문화<br></br>예술
          </p>
          <img className={styles.icon} src={musicIcon} alt="문화예술" />
        </div>
        <div
          style={{ backgroundColor: '#FFEDD2' }}
          className={styles.gridItem}
          onClick={() => handleCategoryClick('sports')}
        >
          <p className={styles.gridText}>운동</p>
          <img className={styles.icon} src={sportsIcon} alt="운동" />
        </div>
        <div
          style={{ backgroundColor: '#EFE3FF' }}
          className={styles.gridItem}
          onClick={() => handleCategoryClick('hobby')}
        >
          <p className={styles.gridText}>취미</p>
          <img className={styles.icon} src={hobbyIcon} alt="취미" />
        </div>
        <div
          style={{ backgroundColor: '#FFF8BC' }}
          className={styles.gridItem}
          onClick={() => handleCategoryClick('religion')}
        >
          <p className={styles.gridText}>종교</p>
          <img className={styles.icon} src={religionIcon} alt="종교" />
        </div>
        <div
          style={{ backgroundColor: '#FFDADC' }}
          className={styles.gridItem}
          onClick={() => handleCategoryClick('volunteer')}
        >
          <p className={styles.gridText}>봉사</p>
          <img className={styles.icon} src={volunteerIcon} alt="봉사" />
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
