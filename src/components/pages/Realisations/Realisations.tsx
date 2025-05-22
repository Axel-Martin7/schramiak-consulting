import React from 'react';
import styles from './Realisations.module.scss';
import { barlow } from '@/styles/font';
import { Link } from '@/navigation';
import StatsCounter from './StatsCounter';
import { useTranslations } from 'next-intl';

export default function Realisations() {
  const t = useTranslations('pages.home.realisations');

  return (
    <div
      className={styles.realisationsContainer}
      role="region"
      aria-labelledby="realisations-title"
    >
      <div className={styles.sectionTitle}>
        <h3
          id="realisations-title"
          className={`${styles.title} ${barlow.className}`}
        >
          {t('section-title')}
        </h3>
        <div className={styles.titleSeparator} aria-hidden="true"></div>
      </div>

      <StatsCounter />

      <div className={styles.descriptionWrapper}>
        <div className={styles.descriptionContainer}>
          <p className={styles.emphasis}>{t('emphasis')}</p>

          <span className={styles.separator} aria-hidden="true"></span>

          <p className={styles.description}>{t('description')}</p>
        </div>

        <button className={styles.button}>
          <Link
            className={styles.link}
            href="/"
            title={t('btn-aria')}
            aria-label={t('btn-aria')}
          >
            {t('btn-label')}
          </Link>
        </button>
      </div>
    </div>
  );
}
