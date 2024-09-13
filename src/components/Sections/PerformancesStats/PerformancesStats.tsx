import React from 'react';
import styles from './PerformancesStats.module.scss';

export default function PerformancesStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.mainContainer}>
        <div className={styles.objectsContainer}>
          <div className={styles.firstObjectContainer}>
            <div className={styles.circle}></div>
            <div className={styles.halfCircle}></div>
            <div className={styles.shadow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
