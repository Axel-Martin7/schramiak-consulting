import React from 'react';
import styles from './ButtonV2.module.scss';
import { barlow } from '@/styles/font';

export default function ButtonV2() {
  return (
    <button className={styles.button}>
      <div className={styles.background}></div>

      <div className={styles.wrapper}>
        <div className={styles.outline}></div>
        <div className={styles.content}>
          <span className={`${styles.text} ${barlow.className}`}>
            Obtenez un audit gratuit
          </span>
        </div>
      </div>
    </button>
  );
}
