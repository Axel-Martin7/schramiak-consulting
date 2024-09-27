import React from 'react';
import styles from './V2Contact.module.scss';
import { barlow } from '@/styles/font';

export default function V2Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitleContainer}>
        <h2 className={`${styles.title} ${barlow.className}`}>
          Rencontrons-nous
        </h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.emptyCarvedBackground}></div>

        <div className={styles.contactItemsContainer}>
          {/* Item 1 : localisation --> */}
          <div className={styles.item1}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}></div>
            </div>

            <p className={`${styles.itemInformation} ${barlow.className}`}>
              1208 Genève
            </p>
          </div>

          {/* Item 2 : adresse mail --> */}
          <div className={styles.item2}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}></div>
            </div>

            <p className={`${styles.itemInformation} ${barlow.className}`}>
              steven.schramiak@icloud.com
            </p>
          </div>

          {/* Item 3 : linkedin --> */}
          <div className={styles.item3}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}></div>
            </div>
            <p className={`${styles.itemInformation} ${barlow.className}`}>
              Linkedin
            </p>
          </div>

          {/* Item 4 : whatsapp --> */}
          <div className={styles.item4}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}></div>
            </div>
            <p className={`${styles.itemInformation} ${barlow.className}`}>
              +41.78.204.70.78
            </p>
          </div>
        </div>

        <div className={styles.contactInformationsContainer}></div>
      </div>
    </div>
  );
}
