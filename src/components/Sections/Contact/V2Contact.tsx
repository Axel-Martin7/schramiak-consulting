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
    </div>
  );
}
