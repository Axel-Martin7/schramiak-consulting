import React from 'react';
import styles from './Welcome.module.scss';

export default function Welcome() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.contentContainer}>
        <div className={styles.circle}></div>
        <div className={styles.shadowCircle}></div>
      </div>
    </section>
  );
}
