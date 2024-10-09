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

// export default function JourneyPage({ params: { locale } }: Props) {
//   unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

//   const t = useTranslations('AboutPage');

//   return (
//     <main className={styles.main}>
//       <header className={styles.pageHeader}>
//         <h1 className={`${styles.pageTitle} ${barlow.className}`}>
//           Mon <span className={styles.highlight}> Parcours </span>
//         </h1>

//         <div className={styles.decorativeCirclesContainer}>
//           <div className={styles.circle1}></div>
//           <div className={styles.circle2}></div>
//           <div className={styles.circle3}></div>
//           <div className={styles.circle4}></div>
//         </div>
//       </header>

//       <section className={styles.cardsSection}>
//         <div className={styles.ribbonHelper}> </div>
//         {/*---------- Card 1 - Consultant indépendant ---------- */}
//         <div className={styles.card1}>
//           <header className={styles.cardHeader}>
//             <h2 className={`${styles.cardTitle} ${barlow.className}`}>
//               Consultant indépendant
//             </h2>
//             <div className={styles.titleSeparator}></div>
//           </header>

//           <div className={styles.cardContentContainer}>
//             <h3 className={`${styles.roleTitle} ${barlow.className}`}>
//               Management financier & optimisation des process
//             </h3>

//             <ul className={styles.descriptionsList}>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Audit des systèmes de gestion.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Accompagnement des collaborateurs et dirigeants.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Mise en place de process et d outils de reporting.
//               </li>
//             </ul>
//           </div>

//           <div className={styles.ribbonContainer1}></div>
//         </div>

//         {/*---------- Card 2 - Nexus automotive ----------------- */}
//         <div className={styles.card2}>
//           <header className={styles.cardHeader}>
//             <h2 className={`${styles.cardTitle} ${barlow.className}`}>
//               Nexus Automotive
//             </h2>
//             <div className={styles.titleSeparator}></div>
//           </header>

//           <div className={styles.cardContentContainer}>
//             <h3 className={`${styles.roleTitle} ${barlow.className}`}>
//               Manager contrôle financier
//             </h3>

//             <ul className={styles.descriptionsList}>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Controle financier des startups du groupe.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Création de startups, plannification financiere.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Structuration et amélioration des process de gestion.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Gestion de la trésorerie et financements.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Gestion des audits.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Management de projets innovants.
//               </li>
//             </ul>
//           </div>

//           <div className={styles.ribbonContainer2}></div>
//         </div>

//         {/*---------- Card 3 - Vinci construction --------------- */}
//         <div className={styles.card3}>
//           <header className={styles.cardHeader}>
//             <h2 className={`${styles.cardTitle} ${barlow.className}`}>
//               Vinci construction
//             </h2>
//             <div className={styles.titleSeparator}></div>
//           </header>

//           <div className={styles.cardContentContainer}>
//             <h3 className={`${styles.roleTitle} ${barlow.className}`}>
//               Responsable adminisatratif & comptable
//             </h3>

//             <ul className={styles.descriptionsList}>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Contrôle de gestion et des coûts.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Etablissement des budgets.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Tableaux de suivi et indicateurs.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Gestion de la trésorerie.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Clôtures comptables.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Gestion des audits.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/*---------- Card 4 - Bloomberg ------------------------ */}
//         <div className={styles.card4}>
//           <header className={styles.cardHeader}>
//             <h2 className={`${styles.cardTitle} ${barlow.className}`}>
//               Bloomberg
//             </h2>
//             <div className={styles.titleSeparator}></div>
//           </header>

//           <div className={styles.cardContentContainer}>
//             <h3 className={`${styles.roleTitle} ${barlow.className}`}>
//               Analyste
//             </h3>

//             <ul className={styles.descriptionsList}>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Analyse des états fianciers des entreprises cotées en Europe.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/*---------- Card 5 - Master financier ----------------- */}
//         <div className={styles.card5}>
//           <header className={styles.cardHeader}>
//             <h2 className={`${styles.cardTitle} ${barlow.className}`}>
//               Master controle de gestion & audit financier
//             </h2>
//             <div className={styles.titleSeparator}></div>
//           </header>
//         </div>

//         {/*---------- Card 6 - Clim diffusion ------------------- */}
//         <div className={styles.card6}>
//           <header className={styles.cardHeader}>
//             <h2 className={`${styles.cardTitle} ${barlow.className}`}>
//               Clim diffusion
//             </h2>
//             <div className={styles.titleSeparator}></div>
//           </header>

//           <div className={styles.cardContentContainer}>
//             <h3 className={`${styles.roleTitle} ${barlow.className}`}>
//               Apprenti
//             </h3>

//             <ul className={styles.descriptionsList}>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Développement commercial.
//               </li>
//               <li className={styles.description}>
//                 <span className={styles.decorativePoint}></span>
//                 Mise en place de process de gestion.
//               </li>
//             </ul>
//           </div>
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

export default function JourneyPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('AboutPage');

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className={`${styles.pageTitle} ${barlow.className}`}>
          Mon <span className={styles.highlight}> Parcours </span>
        </h1>

        <div className={styles.decorativeCirclesContainer}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
      </header>

      <section className={styles.cardsSection}>
        <div className={styles.ribbonHelper}></div>

        {/*---------- Card 1 - Consultant indépendant ---------- */}
        <div className={styles.card1}>
          <header className={styles.cardHeader}>
            <h2 className={`${styles.cardTitle} ${barlow.className}`}>
              Consultant indépendant
            </h2>
            <div className={styles.titleSeparator}></div>
          </header>

          <div className={styles.cardContentContainer}>
            <h3 className={`${styles.roleTitle} ${barlow.className}`}>
              Management financier & optimisation des process
            </h3>

            <ul className={styles.descriptionsList}>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Audit des systèmes de gestion.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Accompagnement des collaborateurs et dirigeants.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Mise en place de process et d outils de reporting.
              </li>
            </ul>
          </div>

          <div className={styles.ribbonCard1}></div>
        </div>

        {/*---------- Card 2 - Nexus automotive ----------------- */}
        <div className={styles.card2}>
          <header className={styles.cardHeader}>
            <h2 className={`${styles.cardTitle} ${barlow.className}`}>
              Nexus Automotive
            </h2>
            <div className={styles.titleSeparator}></div>
          </header>

          <div className={styles.cardContentContainer}>
            <h3 className={`${styles.roleTitle} ${barlow.className}`}>
              Manager contrôle financier
            </h3>

            <ul className={styles.descriptionsList}>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Controle financier des startups du groupe.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Création de startups, plannification financiere.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Structuration et amélioration des process de gestion.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Gestion de la trésorerie et financements.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Gestion des audits.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Management de projets innovants.
              </li>
            </ul>
          </div>

          <div className={styles.ribbonCard2}></div>
        </div>

        {/*---------- Card 3 - Vinci construction --------------- */}
        <div className={styles.card3}>
          <header className={styles.cardHeader}>
            <h2 className={`${styles.cardTitle} ${barlow.className}`}>
              Vinci construction
            </h2>
            <div className={styles.titleSeparator}></div>
          </header>

          <div className={styles.cardContentContainer}>
            <h3 className={`${styles.roleTitle} ${barlow.className}`}>
              Responsable adminisatratif & comptable
            </h3>

            <ul className={styles.descriptionsList}>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Contrôle de gestion et des coûts.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Etablissement des budgets.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Tableaux de suivi et indicateurs.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Gestion de la trésorerie.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Clôtures comptables.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Gestion des audits.
              </li>
            </ul>
          </div>

          <div className={styles.ribbonCard3}></div>
        </div>

        {/*---------- Card 4 - Bloomberg ------------------------ */}
        <div className={styles.card4}>
          <header className={styles.cardHeader}>
            <h2 className={`${styles.cardTitle} ${barlow.className}`}>
              Bloomberg
            </h2>
            <div className={styles.titleSeparator}></div>
          </header>

          <div className={styles.cardContentContainer}>
            <h3 className={`${styles.roleTitle} ${barlow.className}`}>
              Analyste
            </h3>

            <ul className={styles.descriptionsList}>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Analyse des états fianciers des entreprises cotées en Europe.
              </li>
            </ul>
          </div>

          <div className={styles.ribbonCard4}></div>
        </div>

        {/*---------- Card 5 - Master financier ----------------- */}
        <div className={styles.card5}>
          <header className={styles.cardHeader}>
            <h2 className={`${styles.cardTitle} ${barlow.className}`}>
              Master controle de gestion & audit financier
            </h2>
            <div className={styles.titleSeparator}></div>
          </header>

          <div className={styles.ribbonCard5}></div>
        </div>

        {/*---------- Card 6 - Clim diffusion ------------------- */}
        <div className={styles.card6}>
          <header className={styles.cardHeader}>
            <h2 className={`${styles.cardTitle} ${barlow.className}`}>
              Clim diffusion
            </h2>
            <div className={styles.titleSeparator}></div>
          </header>

          <div className={styles.cardContentContainer}>
            <h3 className={`${styles.roleTitle} ${barlow.className}`}>
              Apprenti
            </h3>

            <ul className={styles.descriptionsList}>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Développement commercial.
              </li>
              <li className={styles.description}>
                <span className={styles.decorativePoint}></span>
                Mise en place de process de gestion.
              </li>
            </ul>
          </div>

          <div className={styles.ribbonCard6}></div>
        </div>
      </section>
    </main>
  );
}
