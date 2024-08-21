// import React from 'react';
// import styles from './Welcome.module.scss';

// export default function Welcome() {
//   return (
//     <section className={styles.welcomeSection}>
//       <div className={styles.contentContainer}>
//         <div className={styles.circle}></div>
//         <div className={styles.shadowCircle}></div>
//         <div className={styles.titleContainer}>
//           <h1 className={styles.title}>Schramiak Consulting</h1>
//         </div>
//         <div className={styles.textContainer}>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Necessitatibus adipisci aliquam iure quos recusandae sit quis
//             explicabo voluptatibus, voluptatum rem ullam maiores ad quibusdam
//             commodi facilis ea esse nostrum quia?
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import styles from './Welcome.module.scss';
import Image from 'next/image';
import backgroundImg from '../../../../public/modern-background14.jpg';

export default function Welcome() {
  return (
    <section className={styles.welcomeSection}>
      {/* <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          alt="Background image"
          src={backgroundImg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vh"
        ></Image>
      </div> */}
      <div className={styles.contentContainer}>
        <div className={styles.circle}></div>
        <div className={styles.shadowCircle}></div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Schramiak Consulting</h1>
          <div className={styles.separator}></div>
          <p className={styles.text}>
            Business consulting and startup management spécialist du cucu
            mouillé
          </p>
        </div>
        {/* <div className={styles.titleContainer}></div> */}
      </div>
    </section>
  );
}
