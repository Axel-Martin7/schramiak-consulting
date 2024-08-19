import React from 'react';
import styles from './WelcomeSquares.module.scss';

export default function WelcomeSquares() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.squaresContainer}>
        <div className={styles.contentSquare}></div>
        <div className={styles.square}>
          <div className={styles.textContainer}>coucou toi</div>
          <div className={styles.square2}></div>
          <div className={styles.square3}></div>
          <div className={styles.square4}></div>
          <div className={styles.square5}></div>
          <div className={styles.square6}></div>
          <div className={styles.square7}></div>

          <div className={styles.triange6}></div>
        </div>
      </div>
    </section>
  );
}
