import React from 'react';
import styles from './Pyramid.module.scss';

export default function Pyramid() {
  return (
    <div className={styles.pyramidContainer}>
      <div className={styles.repere}></div>
      <div className={styles.base}>
        {/* ----------  Etages ----------- */}
        <div className={styles.firstFloor}>
          <div className={styles.darkSide}></div>
        </div>
        <div className={styles.secondFloor}>
          <div className={styles.darkSide}></div>
        </div>
        <div className={styles.thirdFloor}>
          <div className={styles.darkSide}></div>
        </div>
        <div className={styles.fourthFloor}>
          <div className={styles.darkSide}></div>
        </div>
        <div className={styles.hatFloor}>
          <div className={styles.darkSide}></div>
        </div>

        {/* ---------- face sombre des étages ----------- */}
        <div className={styles.firstFloorCeiling}></div>
        <div className={styles.secondFloorCeiling}></div>
        <div className={styles.thirdFloorCeiling}></div>
        <div className={styles.fourthFloorCeiling}></div>
      </div>

      <div className={styles.shadows}></div>
    </div>
  );
}
