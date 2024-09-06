// import React from 'react';
// import styles from './V3Services.module.scss';
// import Image from 'next/image';
// import map from '../../../../public/world-map.png';
// import { barlow } from '@/styles/font';

// export default function V3Services() {
//   return (
//     <section className={styles.servicesSection}>
//       <div className={styles.mainContainer}>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
//           perferendis fugiat voluptatem officia sint voluptas delectus expedita?
//           Earum pariatur expedita modi molestiae perferendis rem ea, delectus
//           accusantium facilis veritatis vitae.
//         </p>
//         <div className={styles.shapesContainer}>
//           {/* Conteneur titre et presentation / Fleche en grand ecran */}
//           <div className={styles.decorativePresentationShape}>
//             <div className={styles.presentationShape}>
//               <div className={styles.contentContainer}>
//                 <h1 className={`${styles.title} ${barlow.className}`}>
//                   Mes services
//                 </h1>
//               </div>
//             </div>
//           </div>

//           {/* Hexagones principaux / Conteneur version mobile */}
//           <div className={styles.decorativeShape1}>
//             <div className={styles.hexagon}></div>
//           </div>

//           <div className={styles.decorativeShape2}>
//             <div className={styles.hexagon}></div>
//           </div>

//           <div className={styles.decorativeShape3}>
//             <div className={styles.hexagon}></div>
//           </div>

//           <div className={styles.decorativeShape4}>
//             <div className={styles.hexagon}></div>
//           </div>

//           {/* Hexagones de repères */}
//           {/* <div className={styles.centralHexagon}></div> */}
//         </div>

//         <div className={styles.backgroundContainer}>
//           <div className={styles.imageContainer}>
//             <Image
//               className={styles.image}
//               alt="image de fond d'une map monde"
//               src={map}
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
import styles from './V3Services.module.scss';
import Image from 'next/image';
import map from '../../../../public/world-map.png';
import { barlow } from '@/styles/font';

export default function V3Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.mainContainer}>
        <div className={styles.topInformationsContainer}>Title</div>

        <div className={styles.shapesContainer}>
          {/* Arrow */}
          <div className={styles.bordersArrow}>
            <div className={styles.arrow}></div>
          </div>

          {/* Hexagones principaux */}
          <div className={styles.bordersHexagon1}>
            <div className={styles.hexagon}></div>
          </div>
          <div className={styles.bordersHexagon2}>
            <div className={styles.hexagon}></div>
          </div>
          <div className={styles.bordersHexagon3}>
            <div className={styles.hexagon}></div>
          </div>
          <div className={styles.bordersHexagon4}>
            <div className={styles.hexagon}></div>
          </div>
        </div>

        <div className={styles.backgroundContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="image de fond d'une map monde"
              src={map}
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
