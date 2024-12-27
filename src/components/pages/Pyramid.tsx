import React from 'react';
import styles from './Pyramid.module.scss';

export default function Pyramid() {
  return (
    <div className={styles.pyramidContainer}>
      <div className={styles.repere}></div>
      <div className={styles.base}>
        <div className={styles.firstFloor}></div>
        <div className={styles.secondFloor}></div>
        <div className={styles.thirdFloor}></div>
        <div className={styles.fourthFloor}></div>
        <div className={styles.hatRepere}></div>

        <div className={styles.firstFloorCeiling}></div>
        <div className={styles.secondFloorCeiling}></div>
        <div className={styles.thirdFloorCeiling}></div>
        <div className={styles.fourthFloorCeiling}></div>
        <div className={styles.hat}></div>
      </div>
    </div>
  );
}
