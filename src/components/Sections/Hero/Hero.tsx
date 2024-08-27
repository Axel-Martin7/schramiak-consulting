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
//__________________________________________________________________

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

//         {/* <div className={styles.polygonContainer}></div> */}
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
          <div className={styles.contentContainer}>
            <h1> Bonjour voici un titre qui donne envie de cliquer</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
              quos repellat impedit optio error harum corrupti praesentium
              quibusdam voluptate nostrum repudiandae, id, libero quae
              reprehenderit eligendi vel excepturi. Qui, ad? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quis perferendis dolore,
              labore recusandae vitae distinctio dolor odio quae iste
              voluptatibus soluta at, qui aperiam illum totam necessitatibus
              tempora laudantium obcaecati!
            </p>
          </div>
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
