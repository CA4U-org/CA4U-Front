import React from 'react';
import styles from './Header.module.css';
import ca4uIcon from '../../assets/ca4u-icon.png';
import myIcon from '../../assets/my-icon.png';
import searchIcon from '../../assets/search-icon.png';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.ca4uTitleContainer}>
          <div className={styles.ca4uIconContainer}>
            <img className={styles.ca4uIcon} src={ca4uIcon} alt="ca4u" />
          </div>
          <div className={styles.titleContainer}>
            <p className={styles.titleEng}>
              CLUB & ACADEMY <span className={styles.redText}>4</span> YOU
            </p>
            <p className={styles.titleKor}>CAU 동아리 추천 서비스</p>
          </div>
        </div>
        <img className={styles.myIcon} src={myIcon} alt="내정보" />
      </div>
      <div className={styles.searchContainer}>
        <img className={styles.searchIcon} src={searchIcon} alt="검색" />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="동아리를 검색해보세요 ex. 코딩, 밴드, 연극, 타박네"
        />
      </div>
    </div>
  );
}

export default Header;
