import React from 'react';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.shapesContainer}>
      Introduction
      <div className={styles.contentDiamond}></div>
    </div>
  );
}
