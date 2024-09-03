import React from 'react';
import styles from './MyServices.module.scss';

export default function Myservices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.shapesContainer}>
        {/* Conteneur en forme de fléche */}
        <div className={styles.arrow}></div>

        {/* Hexagones principaux */}
        <div className={styles.borderHexagon1}>
          <div className={styles.hexagon}></div>
        </div>
        <div className={styles.borderHexagon2}>
          <div className={styles.hexagon}></div>
        </div>
        <div className={styles.borderHexagon3}>
          <div className={styles.hexagon}></div>
        </div>
        <div className={styles.borderHexagon4}>
          <div className={styles.hexagon}></div>
        </div>

        {/* Hexagones de repères */}
        <div className={styles.centralHexagon}></div>
        <div className={styles.helperHexagon1}></div>
        <div className={styles.helperHexagon2}></div>
      </div>
    </section>
  );
}
