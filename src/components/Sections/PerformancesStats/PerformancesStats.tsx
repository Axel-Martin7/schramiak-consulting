import React from 'react';
import styles from './PerformancesStats.module.scss';

export default function PerformancesStats() {
  return (
    // <section className={styles.statsSection}>
    //   <div className={styles.mainContainer}>
    //     <div className={styles.objectsContainer}>
    //       <div className={styles.object1Container}>
    //         <div className={styles.demiCircle}>
    //           <div className={styles.circle}></div>
    //           <div className={styles.demiCircleReflection}></div>
    //           <div className={styles.shadow}></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className={styles.statsSection}>
      <div className={styles.mainContainer}>
        <div className={styles.objectsContainers}>
          <div className={styles.firstObjectContainer}>
            <div className={styles.halfCircle}>
              <div className={styles.halfCircleReflection}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
