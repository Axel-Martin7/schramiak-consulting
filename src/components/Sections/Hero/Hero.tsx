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

//           <div className={styles.informationsContainer}>
//             <div className={styles.contentContainer}>
//               <h1 className={`${styles.titleContainer} ${barlow.className}`}>
//                 <span className={styles.firstWord}>Optimisez</span>
//                 votre
//                 <span className={styles.highlight}>Gestion opérationnelle</span>
//                 &<span className={styles.highlight}>Financère</span>
//               </h1>
//               <p className={styles.text}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
//                 inventore cupiditate eaque quaerat exercitationem facilis, illo
//                 quasi quam, aspernatur accusamus laudantium ipsam quod mollitia
//                 incidunt suscipit pariatur ducimus dolorem quibusdam.
//               </p>
//               <div className={styles.buttonsContainer}>
//                 <div className={styles.primaryButton}>
//                   Decouvrez mes services
//                 </div>
//                 <div className={styles.secondaryButton}>
//                   Demandez un audit gratuit
//                 </div>
//               </div>
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
          <div className={styles.contentContainer}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora a dicta magnam! Eos voluptate obcaecati fuga
              maiores magni beatae sequi rem, laborum voluptatum ut ea veniam
              ipsam corporis cum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusamus nobis excepturi dolor error laudantium
              ipsam eos consequuntur a totam possimus, quisquam modi nesciunt
              ullam ratione pariatur maxime eum cumque. Dignissimos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Error dignissimos
              consequuntur harum? Culpa sed laboriosam sint at minima non totam!
              Non deserunt aspernatur explicabo corrupti suscipit autem soluta,
              facilis assumenda. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nesciunt quo, sint esse ad eveniet error
              distinctio qui id neque labore voluptatibus tenetur amet,
              dignissimos commodi est delectus aliquam. Temporibus,
              necessitatibus? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Illum ratione fugiat voluptatem suscipit est
              aliquam cumque tempore magni, dignissimos consequatur, sapiente
              ducimus porro quod voluptatibus repellat consectetur excepturi.
              Est, sint? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Error quae, maiores, minima adipisci officiis ipsa et
              aliquam similique reiciendis eaque doloribus voluptates illo,
              debitis eligendi nulla dignissimos hic vitae quo. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Consequuntur fugiat
              velit ducimus accusamus accusantium distinctio modi in dolores
              quasi, perspiciatis rerum quisquam optio nisi quis ea ut quam.
              Omnis, consequatur.
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
