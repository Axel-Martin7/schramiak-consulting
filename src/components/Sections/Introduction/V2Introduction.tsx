import React from 'react';
import styles from './V2Introduction.module.scss';
import { barlow } from '@/styles/font';

export default function V2Introduction() {
  return (
    <div className={styles.shapesContainer}>
      <div className={styles.contentDiamond}>
        <div className={styles.textContainer}>
          <h3 className={`${styles.firstName} ${barlow.className}`}>Steven</h3>
          <h2 className={`${styles.lastName} ${barlow.className}`}>
            Schramiak
          </h2>
          <h3 className={`${styles.jobTitle} ${barlow.className}`}>
            21 specialist
          </h3>
        </div>
      </div>

      <div className={styles.decorativesDiamonds}>
        <div className={styles.diamond2}></div>
        <div className={styles.diamond3}></div>
        <div className={styles.diamond4}></div>
        <div className={styles.diamond5}></div>
        <div className={styles.diamond6}></div>
        <div className={styles.diamond7}></div>

        <div className={styles.polygon3}></div>
        <div className={styles.polygon4}></div>
        <div className={styles.polygon5}></div>
        <div className={styles.polygon6}></div>
        <div className={styles.polygon7}></div>

        <div className={styles.shadowEllipse}></div>
      </div>
    </div>
  );
}
