// import React from 'react';
// import styles from './V2Hero.module.scss';
// import Image from 'next/image';
// import ampoule from '../../../../public/ampoule.jpg';

// export default function V2Hero() {
//   return (
//     <div className={styles.heroMainContainer}>
//       <div className={styles.heroMain}>
//         <div className={styles.overflowControl}>
//           <div className={styles.skewedContainer}></div>
//         </div>

//         <div className={styles.backgroundContainer}>
//           <div className={styles.imageContainer}>
//             <Image
//               className={styles.image}
//               alt="image ampoule"
//               src={ampoule}
//               placeholder="blur"
//               quality={100}
//               fill
//               sizes="100vw"
//             ></Image>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import styles from './V2Hero.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';

export default function V2Hero() {
  return (
    <div className={styles.heroMainContainer}>
      <div className={styles.heroMain}>
        <div className={styles.overflowControl}>
          <div className={styles.skewedContainer}></div>
          <div className={styles.contentContainer}></div>
        </div>

        <div className={styles.backgroundContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="image ampoule"
              src={ampoule}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
