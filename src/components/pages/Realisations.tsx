import React from 'react';
import styles from './Realisations.module.scss';

export default function Realisations() {
  return (
    <div className={styles.realisationsContainer}>
      <div className={styles.sectionTitleContainer}>Mes Réalisations</div>

      <div className={styles.circleShapesContainer}>
        {/* Object 1 ---> */}
        <div className={styles.object1}></div>
        {/* Object 2 ---> */}
        <div className={styles.object2}></div>
        {/* Object 3 ---> */}
        <div className={styles.object3}></div>
        {/* Object 4 ---> */}
        <div className={styles.object4}></div>
      </div>

      <div className={styles.descriptionContainer}>descriptions</div>
    </div>
  );
}
