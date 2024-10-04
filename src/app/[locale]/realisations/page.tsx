// import { useTranslations } from 'next-intl';
// import { unstable_setRequestLocale } from 'next-intl/server';
// import React from 'react';
// import styles from './page.module.scss';
// import { barlow } from '@/styles/font';

// type Props = {
//   params: { locale: string };
// };

// export default function RealisationsPage({ params: { locale } }: Props) {
//   unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

//   const t = useTranslations('AboutPage');

//   return (
//     <main className={styles.main}>
//       <header className={styles.pageHeader}>
//         <h2 className={`${styles.pageTitle} ${barlow.className}`}>
//           Mes <span className={styles.highlight}> réalisations </span>
//         </h2>
//         <div className={styles.decorativeCirclesContainer}>
//           <div className={styles.circle1}></div>
//           <div className={styles.circle2}></div>
//           <div className={styles.circle3}></div>
//           <div className={styles.circle4}></div>
//         </div>
//       </header>

//       <section className={styles.realisationsCards}>
//         <div className={styles.card1}>
//           <div className={styles.informationsContainer}>
//             <h2 className={styles.cardTitle}>Transport de matériaux</h2>
//             <p className={styles.cardDescription}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
//               id quasi dolores tenetur laborum atque impedit, eligendi, placeat
//               aspernatur nihil aliquam incidunt facere dicta iste soluta iure
//               sunt debitis ad. Lorem ipsum dolor sit amet consectetur
//               adipisicing elit. Maiores cupiditate qui suscipit ullam nesciunt
//               illum, tempora quaerat eveniet libero vel? Dolorum dicta iusto
//               ipsa, harum a quis. Sint, et placeat!
//             </p>
//           </div>
//           <div className={styles.ribbonContainer}></div>
//         </div>
//       </section>
//     </main>
//   );
// }

import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';
import styles from './page.module.scss';
import { barlow } from '@/styles/font';

type Props = {
  params: { locale: string };
};

export default function RealisationsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('AboutPage');

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h2 className={`${styles.pageTitle} ${barlow.className}`}>
          Mes <span className={styles.highlight}> réalisations </span>
        </h2>

        <div className={styles.decorativeCirclesContainer}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
      </header>
    </main>
  );
}
