// import React from 'react';
// import styles from './Hero.module.scss';
// import Image from 'next/image';
// import ampoule from '../../../../public/ampoule.jpg';
// import { barlow } from '@/styles/font';

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.mainContainer}>
//         <div className={styles.overlayContainer}></div>
//         <div className={styles.crossBorderOverlayContainer}></div>
//         <div className={styles.crossShadowOverlayContainer}></div>

//         <div className={styles.imageContainerPositioner}>
//           <div className={styles.imageContainer}>iMG</div>
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
      <div className={styles.mainContainer}></div>

      <div className={styles.shadowElipseTop}></div>
      <div className={styles.shadowElipseBottom}></div>
    </section>
  );
}
