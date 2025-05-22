import React from 'react';
import styles from './MyServices.module.scss';
import { barlow } from '@/styles/font';
import Pyramid from './Pyramid';
import { useTranslations } from 'next-intl';

export default function MyServices() {
  const t = useTranslations('pages.home.services');

  return (
    <div
      className={styles.servicesContainer}
      role="region"
      aria-labelledby="services-title"
    >
      <div className={styles.sectionTitle}>
        <h3
          id="services-title"
          className={`${styles.title} ${barlow.className}`}
        >
          {t('section-title')}
        </h3>
        <div className={styles.titleSeparator} aria-hidden="true"></div>
      </div>

      <div className={styles.sectionDescription}>
        <p className={styles.description}>{t('description-1')}</p>
        <p className={styles.emphasis}>{t('emphasis')}</p>
        <p className={styles.description}>{t('description-2')}</p>
      </div>

      <ul className={styles.servicesList}>
        <li className={styles.service1}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble1} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>
                CFO <small className={styles.small}>/</small>{' '}
                {t('service-1-title-word-2')}
              </h4>

              <p className={styles.serviceDescription}>
                {t('service-1-description')}
              </p>
            </div>
          </div>
        </li>

        <li className={styles.service2}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble2} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>
                {t('service-2-title-word-1')}
                <small className={styles.small}> &</small>{' '}
                {t('service-2-title-word-2')}
              </h4>
              <p className={styles.serviceDescription}>
                {t('service-2-description-1')}
                <br></br>
                {t('service-2-description-2')}
              </p>
            </div>
          </div>
        </li>

        <li className={styles.service3}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble3} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}> {t('service-3-title')}</h4>
              <p className={styles.serviceDescription}>
                {t('service-3-description-1')} <br></br>
                {t('service-3-description-2')}
              </p>
            </div>
          </div>
        </li>

        <li className={styles.service4}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble4} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>
                {t('service-4-title-word-1')}
                <small className={styles.small}> &</small>{' '}
                {t('service-4-title-word-2')}
              </h4>
              <p className={styles.serviceDescription}>
                {t('service-4-description-1')} <br></br>
                {t('service-4-description-2')}
              </p>
            </div>
          </div>
        </li>
      </ul>

      <div className={styles.decorativePyramidContainer} aria-hidden="true">
        <Pyramid />
      </div>
    </div>
  );
}
