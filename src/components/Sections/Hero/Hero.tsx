// import React from 'react';
// import styles from './Hero.module.scss';
// import Image from 'next/image';
// import ampoule from '../../../../public/ampoule.jpg';
// import { barlow } from '@/styles/font';

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.mainContainer}>
//         <div className={styles.overlayContainer}>
//           <div className={styles.contentContainer}>Content</div>
//         </div>

//         <div className={styles.crossLineContainer}>
//           <div className={styles.crossLine}></div>
//           <div className={styles.crossLineShadow}></div>
//         </div>

//         <div className={styles.imageContainerPositioner}>
//           <div className={styles.imageContainer}>img</div>
//         </div>
//       </div>

//       <div className={styles.shadowElipseTop}></div>
//       <div className={styles.shadowElipseBottom}></div>
//     </section>
//   );
// }

import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';
import { barlow } from '@/styles/font';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.mainContainer}>
        <div className={styles.crossBorderOverlayContainer}>
          <div className={styles.overlayContainer}></div>
        </div>

        <div className={styles.imageContainerPositioner}>
          <div className={styles.imageContainer}>iMG</div>
        </div>
      </div>

      <div className={styles.shadowElipseTop}></div>
      <div className={styles.shadowElipseBottom}></div>
    </section>
  );
}
