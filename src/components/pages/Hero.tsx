import React from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overflowControl}>
        <div className={styles.skewedContainer}></div>
        <div className={styles.contentContainer}>Contenu Hero</div>
      </div>

      <div className={styles.backgroundImageContainer}>
        <div className={styles.imageContainer}>Image container</div>
      </div>
    </div>
  );
}
