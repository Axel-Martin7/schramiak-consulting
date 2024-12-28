import React from 'react';
import styles from './Pyramid.module.scss';

export default function Pyramid() {
  return (
    <div className={styles.pyramidContainer}>
      <div className={styles.repere}></div>
      <div className={styles.base}>
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
        <div className={styles.hatRepere}></div>

        <div className={styles.firstFloorCeiling}></div>
        <div className={styles.secondFloorCeiling}></div>
        <div className={styles.thirdFloorCeiling}></div>
        <div className={styles.fourthFloorCeiling}></div>
        <div className={styles.hat}>
          <div className={styles.darkSide}></div>
        </div>
      </div>

      <div className={styles.shadowFirstFloor}></div>
      <div className={styles.shadowSecondFloor}></div>
      <div className={styles.shadowThirdFloor}></div>
      <div className={styles.shadowFourthFloor}></div>
      <div className={styles.shadowHat}></div>
    </div>
  );
}
