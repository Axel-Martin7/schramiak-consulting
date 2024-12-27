import React from 'react';
import styles from './MyServices.module.scss';
import { barlow } from '@/styles/font';
import Pyramid from './Pyramid';

export default function MyServices() {
  return (
    <div className={styles.servicesContainer}>
      <header className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <h2 className={`${styles.title} ${barlow.className}`}>
            Mes services
          </h2>

          <div className={styles.titleSeparator}></div>
        </div>

        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo
          cupiditate eos ad dolorem voluptate libero sed magnam pariatur iure
          est blanditiis, vero alias harum dolor assumenda doloremque eius
          soluta?
        </p>
      </header>

      <div className={styles.servicesContentContainer}>
        <div className={styles.decorativePyramidContainer}>
          {/* <div className={styles.repere}></div>
          <div className={styles.base}>
            <div className={styles.firstFloor}></div>
            <div className={styles.secondFloor}></div>
            <div className={styles.thirdFloor}></div>
            <div className={styles.forthFloor}></div>

            <div className={styles.firstFloorCeiling}></div>
            <div className={styles.secondFloorCeiling}></div>
            <div className={styles.thirdFloorCeiling}></div>
            <div className={styles.hat}></div>
          </div> */}
          <Pyramid />
        </div>

        <div className={styles.servicesListsContainer}>
          <div className={styles.repere}></div>
          <div className={styles.base}>
            <div className={styles.firstFloor}></div>
            <div className={styles.secondFloor}></div>
            <div className={styles.thirdFloor}></div>
            <div className={styles.forthFloor}></div>

            <div className={styles.firstFloorCeiling}></div>
            <div className={styles.secondFloorCeiling}></div>
            <div className={styles.thirdFloorCeiling}></div>
            <div className={styles.hat}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
