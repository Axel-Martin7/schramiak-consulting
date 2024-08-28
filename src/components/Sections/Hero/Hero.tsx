// import React from 'react';
// import styles from './Hero.module.scss';
// import Image from 'next/image';
// import ampoule from '../../../../public/ampoule.jpg';
// import { barlow } from '@/styles/font';

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.mainContainer}>
//         <div className={styles.overflowControl}>
//           <div className={styles.skewedContainer}></div>

//           <div className={styles.contentContainer}>
//             <h1 className={`${styles.title} ${barlow.className}`}>
//               Optimisez votre gestion opérationnelle & financière
//             </h1>
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
//               quos necessitatibus optio quam aliquam eum voluptates quidem
//               deleniti tempora quaerat! Officiis dolor voluptatum fuga
//               dignissimos provident itaque, a esse quibusdam!
//             </p>
//             <div className={styles.buttonsContainer}>
//               <div className={styles.primaryButton}>Services</div>
//               <div className={styles.secondaryButton}>Contactez-moi</div>
//             </div>
//           </div>
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
    </section>
  );
}
