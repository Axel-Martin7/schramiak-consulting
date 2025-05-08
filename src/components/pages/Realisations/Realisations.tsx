import React from 'react';
import styles from './Realisations.module.scss';
import { barlow } from '@/styles/font';
import { Link } from '@/navigation';
import StatsCounter from './StatsCounter';

export default function Realisations() {
  return (
    <div className={styles.realisationsContainer}>
      <div className={styles.sectionTitle}>
        <h3 className={`${styles.title} ${barlow.className}`}>
          Mes réalisations
        </h3>
        <div className={styles.titleSeparator}></div>
      </div>

      <StatsCounter />

      <div className={styles.descriptionWrapper}>
        <div className={styles.descriptionContainer}>
          <p className={styles.emphasis}>
            Chaque projet réalisé témoigne de mon engagement à fournir des
            solutions financières sur mesure.
          </p>

          <span className={styles.separator}></span>

          <p className={styles.description}>
            Explorez en détail mes missions, les objectifs atteints et les
            résultats obtenus pour mes clients en cliquant sur le bouton
            ci-dessous.
          </p>
        </div>

        <button className={styles.button}>
          <Link className={styles.link} href="/" title="Learn more about us">
            Explorez mes réalisations
          </Link>
        </button>
      </div>
    </div>
  );
}
