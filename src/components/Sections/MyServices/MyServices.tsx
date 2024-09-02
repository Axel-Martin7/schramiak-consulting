import React from 'react';
import styles from './MyServices.module.scss';

export default function Myservices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.shapesContainer}>
        <div className={styles.arrow}></div>
        <div className={styles.hexagon1}></div>
        <div className={styles.hexagon2}></div>

        <div className={styles.hexagon3}></div>
        <div className={styles.hexagon4}></div>
        <div className={styles.centralHexagon}></div>
        <div className={styles.helpHexagon}></div>
        <div className={styles.helpHexagon2}></div>
      </div>
    </section>
  );
}
