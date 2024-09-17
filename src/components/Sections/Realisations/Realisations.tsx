import React from 'react';
import styles from './Realisations.module.scss';
import { barlow } from '@/styles/font';
import Button from '@/components/Buttons/Button';

export default function Realisations() {
  return (
    <section className={styles.realisationsSection}>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h2 className={`${styles.title} ${barlow.className}`}>
            Mes réalisations
          </h2>
          <div className={styles.titleSeparator}></div>
        </div>

        <div className={styles.objectsContainer}>
          <div className={styles.object1}>
            <div className={styles.circleWrapper}>
              <div className={styles.circleBorder}></div>
              <div className={styles.mainCircle}></div>
            </div>
            <div className={styles.halfCircle}></div>
            <div className={styles.shadow}></div>
          </div>

          <div className={styles.object2}>
            <div className={styles.circleWrapper}>
              <div className={styles.circleBorder}></div>
              <div className={styles.mainCircle}></div>
            </div>
            <div className={styles.halfCircle}></div>
            <div className={styles.shadow}></div>
          </div>

          <div className={styles.object3}>
            <div className={styles.circleWrapper}>
              <div className={styles.circleBorder}></div>
              <div className={styles.mainCircle}></div>
            </div>
            <div className={styles.halfCircle}></div>
            <div className={styles.shadow}></div>
          </div>

          <div className={styles.object4}>
            <div className={styles.circleWrapper}>
              <div className={styles.circleBorder}></div>
              <div className={styles.mainCircle}></div>
            </div>
            <div className={styles.halfCircle}></div>
            <div className={styles.shadow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
