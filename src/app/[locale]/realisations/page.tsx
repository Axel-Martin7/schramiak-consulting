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
//         <h1 className={`${styles.pageTitle} ${barlow.className}`}>
//           Mes <span className={styles.highlight}> réalisations </span>
//         </h1>

//         <div className={styles.decorativeCirclesContainer}>
//           <div className={styles.circle1}></div>
//           <div className={styles.circle2}></div>
//           <div className={styles.circle3}></div>
//           <div className={styles.circle4}></div>
//         </div>
//       </header>

//       <section className={styles.cardsSection}>
//         {/* ---------------- Project 1 : ---------------- */}
//         <div className={styles.projectCard}>
//           <div className={styles.projectInformations}>
//             <div className={styles.projectTitleContainer}>
//               <h2 className={`${styles.projectTitle} ${barlow.className}`}>
//                 Groupement International Automobile
//               </h2>
//               <div className={styles.titleSeparator}></div>
//             </div>

//             <div className={styles.projectDescriptionsContainer}>
//               <p className={styles.description}>
//                 Au sein d’un groupement international de distribution de pièces
//                 détachées automobiles, lancement de plusieurs projets et
//                 startups en vue de diversifier l’activité.
//               </p>
//               <p className={styles.description}>
//                 Planification financière et business plan afin de lever les
//                 fonds nécessaires aux développements de ces projets.
//               </p>
//               <p className={styles.description}>
//                 Pilotage financier de ces projets et participation aux conseils
//                 d’administration.
//               </p>
//               <p className={styles.description}>
//                 Création d’outils d’analyse et de prévision des ventes.
//               </p>
//             </div>
//           </div>

//           <div className={styles.projectDetails}>
//             {/* --------- Item 1 : Time --------- */}
//             <div className={styles.itemContainer}>
//               <div className={styles.itemIcon}></div>

//               <h3 className={`${styles.itemTitle} ${barlow.className}`}>
//                 3 ans
//               </h3>

//               <p className={`${styles.itemDescription} ${barlow.className}`}>
//                 Une expérience au sein d’un groupe international, divisée entre
//                 le contrôle financier de différentes entités et la gestion de
//                 projets innovants.
//               </p>
//             </div>
//             {/* --------- Item 1 : Rôle --------- */}
//             <div className={styles.itemContainer}>
//               <div className={styles.itemIcon}></div>

//               <h3 className={`${styles.itemTitle} ${barlow.className}`}>
//                 Gestion de projet
//               </h3>

//               <p className={`${styles.itemDescription} ${barlow.className}`}>
//                 Management de projet avec des équipes internationales.
//                 Elaboration de POCs (Proof of Concept).
//               </p>
//             </div>
//             {/* --------- Item 1 : Résultats ---- */}
//             <div className={styles.itemContainer}>
//               <div className={styles.itemIcon}></div>

//               <h3 className={`${styles.itemTitle} ${barlow.className}`}>
//                 Résultats
//               </h3>

//               <p className={`${styles.itemDescription} ${barlow.className}`}>
//                 12 projets accompagnés. <br></br>5 entreprises crées. <br></br>
//                 Outil de prévision des ventes.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ---------------- Project 2 : ---------------- */}
//         <div className={styles.projectCard}></div>
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
        <h1 className={`${styles.pageTitle} ${barlow.className}`}>
          Mes <span className={styles.highlight}> réalisations </span>
        </h1>

        <div className={styles.decorativeCirclesContainer}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
      </header>

      <section className={styles.cardsSection}>
        {/* ---------------- Project 1 : ---------------- */}
        <div className={styles.projectCard}>
          <div className={styles.informationsContainer}>
            <div className={styles.projectTitleContainer}>
              <h2 className={`${styles.projectTitle} ${barlow.className}`}>
                Groupement international Automobile
              </h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.projectDescriptionsContainer}>
              <p className={styles.projectDescription}>
                Au sein d’un groupement international de distribution de pièces
                détachées automobiles, lancement de plusieurs projets et
                startups en vue de diversifier l’activité.
              </p>
              <p className={styles.projectDescription}>
                Planification financière et business plan afin de lever les
                fonds nécessaires aux développements de ces projets.
              </p>
              <p className={styles.projectDescription}>
                Pilotage financier de ces projets et participation aux conseils
                d’administration.
              </p>
              <p className={styles.projectDescription}>
                Création d’outils d’analyse et de prévision des ventes.
              </p>
            </div>
          </div>

          <div className={styles.detailsContainer}>
            {/* ------- Item 1 : Time ------- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}></div>
              <div className={styles.itemInformationsContainer}>
                <h3 className={`${styles.itemTitle} ${barlow.className}`}>
                  3 ans
                </h3>
                <p className={`${styles.itemDescription} ${barlow.className}`}>
                  Une expérience au sein d’un groupe international, divisée
                  entre le contrôle financier de différentes entités et la
                  gestion de projets innovants.
                </p>
              </div>
            </div>

            {/* ------- Item 1 : Rôle ------- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}></div>
              <div className={styles.itemInformationsContainer}>
                <h3 className={`${styles.itemTitle} ${barlow.className}`}>
                  Gestion de projet
                </h3>
                <p className={`${styles.itemDescription} ${barlow.className}`}>
                  Management de projet avec des équipes internationales.
                  Elaboration de POCs (Proof of Concept).
                </p>
              </div>
            </div>

            {/* ------- Item 1 : Résultats -- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}></div>
              <div className={styles.itemInformationsContainer}>
                <h3 className={`${styles.itemTitle} ${barlow.className}`}>
                  Résulats
                </h3>
                <ul className={styles.itemDescriptionsList}>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point1}`}
                    ></span>{' '}
                    12 projets accompagnés.
                  </li>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point2}`}
                    ></span>{' '}
                    5 entreprises crées.
                  </li>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point3}`}
                    ></span>{' '}
                    Outil de prévision des ventes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Project 2 : ---------------- */}
        <div className={styles.projectCard}>
          <div className={styles.informationsContainer}></div>
          <div className={styles.detailsContainer}></div>
        </div>
      </section>
    </main>
  );
}
