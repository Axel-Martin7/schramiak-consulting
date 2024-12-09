import React from 'react';
import styles from './MyServices.module.scss';

export default function MyServices() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.sectionTitleContainer}>Mes services</div>

      <div className={styles.sectionDescription}>Description</div>

      <div className={styles.sectionContentContainer}>
        <div className={styles.diamondContainer}>IMG</div>
        <div className={styles.servicesDescriptions}>Services descriptions</div>
      </div>
    </div>
  );
}
