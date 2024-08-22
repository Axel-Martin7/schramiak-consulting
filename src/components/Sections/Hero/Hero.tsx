// import React from 'react';
// import styles from './Hero.module.scss';
// import Image from 'next/image';
// import ampoule from '../../../../public/ampoule.jpg';

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.heroContainer}>
//         <div className={styles.overlayContainer}>
//           <div className={styles.contentContainer}>
//             <h1 className={styles.title}>
//               Optimisez votre gestion opérationnelle et financiere
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
//               eum ullam quasi ea nesciunt blanditiis. Veritatis velit porro
//               autem consectetur quia quaerat quasi cum molestiae natus possimus
//               culpa, sapiente nostrum. Lorem ipsum dolor sit amet, consectetur
//               adipisicing elit. Doloribus quasi tenetur eveniet, dolore
//               voluptate nobis modi sapiente provident commodi vero voluptatibus
//               eius sequi maiores fugiat alias, nam explicabo recusandae nostrum.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Asperiores, odio omnis dolorem aspernatur enim alias unde
//               distinctio iusto dolor laborum laudantium incidunt nam sit at
//               mollitia veritatis sequi nulla. Quaerat. Lorem ipsum dolor sit
//               amet consectetur adipisicing elit. Culpa, deserunt. Tenetur,
//               maxime error excepturi voluptatum obcaecati ipsa voluptates
//               commodi molestias necessitatibus ex eaque, inventore, sunt
//               voluptatem in consequuntur mollitia fuga.
//             </p>
//             <div className={styles.btnContainer}>
//               <div className={styles.btn}></div>
//               <div className={styles.btn}></div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.backgroundContainer}>
//           <div className={styles.hidden}>caché</div>
//           <div className={styles.imageContainer}>
//             <Image
//               className={styles.image}
//               alt="cerveau ampoule"
//               src={ampoule}
//               placeholder="blur"
//               quality={100}
//               fill
//               sizes="100%"
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

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.mainContainer}></div>
    </section>
  );
}
