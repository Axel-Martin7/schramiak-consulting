import React from 'react';
import styles from './V2Services.module.scss';

export default function V2Services() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mobileMainContainer}>
        <div className={styles.cardsContainer}>
          <div className={styles.card1}>
            <div className={styles.contentCard}></div>
            <div className={styles.backgroundRibbon}>
              <div className={styles.coloredRibbon}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
