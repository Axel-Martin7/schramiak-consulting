import React from 'react';
import styles from './Realisations.module.scss';
import { barlow } from '@/styles/font';
import Button from '../../common/Button';

export default function Realisations() {
  return (
    <div className={styles.realisationsContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>
          Mes réalisations
        </h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.shapesContainer}>
        <div className={styles.object}>
          <div className={styles.coloredHalfCircle}></div>

          <div className={styles.circleContent}></div>

          {/*---------- Effet mirroir de reflection --------- */}
          <div className={styles.objectReflection}>
            <div className={styles.circleContentReflection}></div>
          </div>
        </div>

        <div className={styles.object}>
          <div className={styles.coloredHalfCircle}></div>

          <div className={styles.circleContent}></div>

          {/*---------- Effet mirroir de reflection --------- */}
          <div className={styles.objectReflection}>
            <div className={styles.circleContentReflection}></div>
          </div>
        </div>

        <div className={styles.object}>
          <div className={styles.coloredHalfCircle}></div>

          <div className={styles.circleContent}></div>

          {/*---------- Effet mirroir de reflection --------- */}
          <div className={styles.objectReflection}>
            <div className={styles.circleContentReflection}></div>
          </div>
        </div>

        <div className={styles.object}>
          <div className={styles.coloredHalfCircle}></div>

          <div className={styles.circleContent}></div>

          {/*---------- Effet mirroir de reflection --------- */}
          <div className={styles.objectReflection}>
            <div className={styles.circleContentReflection}></div>
          </div>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Chaque projet réalisé témoigne de mon engagement à fournir des
          solutions financière sur mesure. Explorez en détail mes missions, les
          objectifs atteints et les résultats obtenus pour mes clients en
          cliquant sur le bouton ci-dessous.
        </p>

        <Button variant="secondary">Explorez mes réalisations </Button>
      </div>
    </div>
  );
}
