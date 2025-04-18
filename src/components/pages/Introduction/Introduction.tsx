import React from 'react';
import styles from './Introduction.module.scss';
import { barlow } from '@/styles/font';
import ScrollIndicator from '@/components/common/ScrollIndicator';
import Logo from '@/components/common/Logo';

export default function Introduction() {
  return (
    // <div className={styles.shapesContainer}>
    //   <div className={styles.contentDiamond}>
    //     <div className={`${styles.titlesContainer} `}>
    //       <h1 className={styles.mainTitle}>
    //         <small className={styles.firstName}>Steven</small>
    //         <strong className={`${styles.lastName} ${barlow.className}`}>
    //           Schramiak
    //         </strong>
    //       </h1>

    //       <div className={styles.titleSeparator}></div>

    //       <h2 className={styles.role}>Consulting</h2>
    //     </div>
    //   </div>

    //   <div className={styles.decorativesDiamonds}>
    //     <div className={styles.diamond2}></div>
    //     <div className={styles.diamond3}></div>
    //     <div className={styles.diamond4}></div>
    //     <div className={styles.diamond5}></div>
    //     <div className={styles.diamond6}></div>
    //     <div className={styles.diamond7}></div>

    //     <div className={styles.polygon3}></div>
    //     <div className={styles.polygon4}></div>
    //     <div className={styles.polygon5}></div>
    //     <div className={styles.polygon6}></div>
    //     <div className={styles.polygon7}></div>

    //     <div className={styles.shadowEllipse}></div>
    //   </div>

    //   <ScrollIndicator />
    // </div>

    <div className={styles.shapesContainer}>
      <div className={styles.contentDiamond}>
        <div className={styles.titlesContainer}>
          <h1 className={styles.mainTitle}>
            <small className={styles.firstName}>Steven</small>
            <strong className={`${styles.lastName} ${barlow.className}`}>
              Schramiak
            </strong>
          </h1>

          <div className={styles.titleSeparator}></div>

          <h2 className={styles.role}>Consulting</h2>
        </div>
      </div>

      <div className={styles.decorativesDiamonds}>
        <div className={styles.diamond2}></div>
        <div className={styles.diamond3}></div>
        <div className={styles.diamond4}></div>
        <div className={styles.diamond5}></div>
        <div className={styles.diamond6}></div>
        <div className={styles.diamond7}></div>

        <div className={styles.polygon3}></div>
        <div className={styles.polygon4}></div>
        <div className={styles.polygon5}></div>
        <div className={styles.polygon6}></div>
        <div className={styles.polygon7}></div>

        <div className={styles.shadowEllipse}></div>
      </div>
    </div>
  );
}
