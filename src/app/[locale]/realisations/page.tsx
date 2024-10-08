// import { useTranslations } from 'next-intl';
// import { unstable_setRequestLocale } from 'next-intl/server';
// import React from 'react';
// import styles from './page.module.scss';
// import { barlow } from '@/styles/font';
// import Image from 'next/image';
// import timeclock from '../../../../public/icons/clock-activity.svg';
// import lightbulb from '../../../../public/icons/lightbulb5.svg';
// import check from '../../../../public/icons/circled-check.svg';

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
//           <div className={styles.informationsContainer}>
//             <div className={styles.projectTitleContainer}>
//               <h2 className={`${styles.projectTitle} ${barlow.className}`}>
//                 Groupement international Automobile
//               </h2>
//               <div className={styles.titleSeparator}></div>
//             </div>
//             <div className={styles.projectDescriptionsContainer}>
//               <p className={styles.projectDescription}>
//                 Au sein d’un groupement international de distribution de pièces
//                 détachées automobiles, lancement de plusieurs projets et
//                 startups en vue de diversifier l’activité.
//               </p>
//               <p className={styles.projectDescription}>
//                 Planification financière et business plan afin de lever les
//                 fonds nécessaires aux développements de ces projets.
//               </p>
//               <p className={styles.projectDescription}>
//                 Pilotage financier de ces projets et participation aux conseils
//                 d’administration.
//               </p>
//               <p className={styles.projectDescription}>
//                 Création d’outils d’analyse et de prévision des ventes.
//               </p>
//             </div>
//           </div>

//           <div className={styles.detailsContainer}>
//             {/* ------- Item 1 : Time ------- */}
//             <div className={styles.itemContainer}>
//               <div className={styles.itemCircleContainer}>
//                 <div className={styles.circle}>
//                   <Image
//                     className={styles.icon}
//                     src={timeclock}
//                     width={40}
//                     height={40}
//                     alt="Email icon"
//                   />
//                 </div>
//               </div>
//               <div className={styles.itemInformationsContainer}>
//                 <h3 className={`${styles.itemTitle} ${barlow.className}`}>
//                   3 ans
//                 </h3>
//                 <p className={`${styles.itemDescription} ${barlow.className}`}>
//                   Une expérience au sein d’un groupe international, divisée
//                   entre le contrôle financier de différentes entités et la
//                   gestion de projets innovants.
//                 </p>
//               </div>
//             </div>

//             {/* ------- Item 1 : Rôle ------- */}
//             <div className={styles.itemContainer}>
//               <div className={styles.itemCircleContainer}>
//                 <div className={styles.circle}>
//                   <Image
//                     className={styles.icon}
//                     src={lightbulb}
//                     width={40}
//                     height={40}
//                     alt="Email icon"
//                   />
//                 </div>
//               </div>
//               <div className={styles.itemInformationsContainer}>
//                 <h3 className={`${styles.itemTitle} ${barlow.className}`}>
//                   Gestion de projet
//                 </h3>
//                 <p className={`${styles.itemDescription} ${barlow.className}`}>
//                   Management de projet avec des équipes internationales.
//                   Elaboration de POCs (Proof of Concept).
//                 </p>
//               </div>
//             </div>

//             {/* ------- Item 1 : Résultats -- */}
//             <div className={styles.itemContainer}>
//               <div className={styles.itemCircleContainer}>
//                 <div className={styles.circle}>
//                   <Image
//                     className={styles.icon}
//                     src={check}
//                     width={40}
//                     height={40}
//                     alt="Email icon"
//                   />
//                 </div>
//               </div>
//               <div className={styles.itemInformationsContainer}>
//                 <h3 className={`${styles.itemTitle} ${barlow.className}`}>
//                   Résulats
//                 </h3>
//                 <ul className={styles.itemDescriptionsList}>
//                   <li
//                     className={`${styles.itemDescription} ${barlow.className}`}
//                   >
//                     <span
//                       className={`${styles.decorativePoint} ${styles.point1}`}
//                     ></span>
//                     12 projets accompagnés.
//                   </li>
//                   <li
//                     className={`${styles.itemDescription} ${barlow.className}`}
//                   >
//                     <span
//                       className={`${styles.decorativePoint} ${styles.point2}`}
//                     ></span>
//                     5 entreprises crées.
//                   </li>
//                   <li
//                     className={`${styles.itemDescription} ${barlow.className}`}
//                   >
//                     <span
//                       className={`${styles.decorativePoint} ${styles.point3}`}
//                     ></span>
//                     Outil de prévision des ventes.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ---------------- Project 2 : ---------------- */}
//         <div className={styles.projectCard}>
//           <div className={styles.informationsContainer}></div>
//           <div className={styles.detailsContainer}></div>
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
import Image from 'next/image';
import timeclock from '../../../../public/icons/clock-activity.svg';
import lightbulb from '../../../../public/icons/lightbulb5.svg';
import check from '../../../../public/icons/circled-check.svg';

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
              <div className={styles.itemCircleContainer}>
                <div className={styles.circle}>
                  <Image
                    className={styles.icon}
                    src={timeclock}
                    width={40}
                    height={40}
                    alt="Email icon"
                  />
                </div>
              </div>
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

            {/* ------- Item 2 : Rôle ------- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}>
                <div className={styles.circle}>
                  <Image
                    className={styles.icon}
                    src={lightbulb}
                    width={40}
                    height={40}
                    alt="Email icon"
                  />
                </div>
              </div>
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

            {/* ------- Item 3 : Résultats -- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}>
                <div className={styles.circle}>
                  <Image
                    className={styles.icon}
                    src={check}
                    width={40}
                    height={40}
                    alt="Email icon"
                  />
                </div>
              </div>
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
                    ></span>
                    12 projets accompagnés.
                  </li>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point2}`}
                    ></span>
                    5 entreprises crées.
                  </li>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point3}`}
                    ></span>
                    Outil de prévision des ventes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Project 2 : ---------------- */}
        <div className={styles.projectCard}>
          <div className={styles.informationsContainer}>
            <div className={styles.projectTitleContainer}>
              <h2 className={`${styles.projectTitle} ${barlow.className}`}>
                Marketplace b2b
              </h2>
              <div className={styles.titleSeparator}></div>
            </div>

            <div className={styles.projectDescriptionsContainer}>
              <p className={styles.projectDescription}>
                Une startup nouvellement créée, dans le commerce de pièces
                détachées automobiles avec des acteurs internationaux
              </p>
              <p className={styles.projectDescription}>
                L’entreprise avait besoin de définir l’ensemble de ses process
                de gestion, ainsi que d’un accompagnement pour soutenir sa
                croissance.
              </p>
              <p className={styles.projectDescription}>
                Une levée de fonds était à préparer, auprès de financeurs
                publiques et privés, avec un suivi auprès des actionnaires et
                des audits financiers à piloter.
              </p>
            </div>
          </div>

          <div className={styles.detailsContainer}>
            {/* ------- Item 1 : Time ------- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}>
                <div className={styles.circle}>
                  <Image
                    className={styles.icon}
                    src={timeclock}
                    width={40}
                    height={40}
                    alt="Email icon"
                  />
                </div>
              </div>
              <div className={styles.itemInformationsContainer}>
                <h3 className={`${styles.itemTitle} ${barlow.className}`}>
                  2 ans
                </h3>
                <p className={`${styles.itemDescription} ${barlow.className}`}>
                  Un mandat longue durée, avec un rôle de Contrôleur financier à
                  temps partiel pour gérer le quotidien, soutenir l’entreprise
                  dans sa croissance et accompagner le dirigeant.
                </p>
              </div>
            </div>

            {/* ------- Item 2 : Rôle ------- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}>
                <div className={styles.circle}>
                  <Image
                    className={styles.icon}
                    src={lightbulb}
                    width={40}
                    height={40}
                    alt="Email icon"
                  />
                </div>
              </div>
              <div className={styles.itemInformationsContainer}>
                <h3 className={`${styles.itemTitle} ${barlow.className}`}>
                  CFO temps partiel
                </h3>
                <p className={`${styles.itemDescription} ${barlow.className}`}>
                  Choix et configuration d’un ERP. <br></br>
                  Définition des process de gestion. <br></br>
                  Mise en place du système comptable.
                </p>
              </div>
            </div>

            {/* ------- Item 3 : Résultats -- */}
            <div className={styles.itemContainer}>
              <div className={styles.itemCircleContainer}>
                <div className={styles.circle}>
                  <Image
                    className={styles.icon}
                    src={check}
                    width={40}
                    height={40}
                    alt="Email icon"
                  />
                </div>
              </div>
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
                    ></span>
                    Système de gestion déployé avec une équipe restreinte.
                  </li>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point2}`}
                    ></span>
                    Levée de fonds réalisée.
                  </li>
                  <li
                    className={`${styles.itemDescription} ${barlow.className}`}
                  >
                    <span
                      className={`${styles.decorativePoint} ${styles.point3}`}
                    ></span>
                    Ressources financières optimisées. Maîtrise de la trésorerie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
