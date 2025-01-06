import React from 'react';
import styles from './MyServices.module.scss';
import { barlow } from '@/styles/font';
import Pyramid from './Pyramid';

export default function MyServices() {
  return (
    // <div className={styles.servicesContainer}>
    //   <header className={styles.sectionHeader}>
    //     <div className={styles.sectionTitle}>
    //       <h2 className={`${styles.title} ${barlow.className}`}>
    //         Mes services
    //       </h2>

    //       <div className={styles.titleSeparator}></div>
    //     </div>

    //     <p className={styles.sectionDescription}>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo
    //       cupiditate eos ad dolorem voluptate libero sed magnam pariatur iure
    //       est blanditiis, vero alias harum dolor assumenda doloremque eius
    //       soluta?
    //     </p>
    //   </header>

    //   <div className={styles.servicesContentContainer}>
    //     <div className={styles.decorativePyramidContainer}>
    //       {/* <div className={styles.repere}></div>
    //        <div className={styles.base}>
    //          <div className={styles.firstFloor}></div>
    //          <div className={styles.secondFloor}></div>
    //          <div className={styles.thirdFloor}></div>
    //          <div className={styles.forthFloor}></div>

    //          <div className={styles.firstFloorCeiling}></div>
    //          <div className={styles.secondFloorCeiling}></div>
    //          <div className={styles.thirdFloorCeiling}></div>
    //          <div className={styles.hat}></div>
    //        </div> */}
    //       <Pyramid />
    //     </div>

    //     <div className={styles.servicesListsContainer}>
    //       <div className={styles.repere}></div>
    //       <div className={styles.base}>
    //         <div className={styles.firstFloor}>
    //           <div className={styles.darkSide}></div>
    //         </div>
    //         <div className={styles.secondFloor}>
    //           <div className={styles.darkSide}></div>
    //         </div>
    //         <div className={styles.thirdFloor}>
    //           <div className={styles.darkSide}></div>
    //         </div>
    //         <div className={styles.fourthFloor}>
    //           <div className={styles.darkSide}></div>
    //         </div>
    //         <div className={styles.hatRepere}></div>

    //         <div className={styles.firstFloorCeiling}></div>
    //         <div className={styles.secondFloorCeiling}></div>
    //         <div className={styles.thirdFloorCeiling}></div>
    //         <div className={styles.fourthFloorCeiling}></div>
    //         <div className={styles.hat}>
    //           <div className={styles.darkSide}></div>
    //         </div>
    //       </div>

    //       <div className={styles.shadowWrapper}>
    //         <div className={styles.shadows}></div>
    //       </div>

    //       <div className={styles.shadowFirstFloor}></div>
    //       <div className={styles.shadowSecondFloor}></div>
    //       <div className={styles.shadowThirdFloor}></div>
    //       <div className={styles.shadowFourthFloor}></div>
    //       <div className={styles.shadowHat}></div>
    //     </div>
    //   </div>
    // </div>

    // --------------------------------------------------------------

    // <div className={styles.servicesContainer}>
    //   <header className={styles.sectionHeader}>
    //     <div className={styles.sectionTitle}>
    //       <h2 className={`${styles.title} ${barlow.className}`}>
    //         Mes services
    //       </h2>
    //       <div className={styles.titleSeparator}></div>
    //     </div>

    //     <div className={styles.sectionPresentation}>
    //       <p className={styles.presentation}>
    //         En tant que consultant, mon rôle sera de mettre en place les
    //         stratégies et outils nécessaires à l&apos;atteinte de vos objectifs
    //         ainsi que de ceux de vos clients.
    //       </p>
    //       <p className={styles.presentation}>
    //         Le plus haut niveau de confidentialité, une transparence et une
    //         collaboration totale. <br></br>
    //         Ces engagements nous permettront de gérer au mieux vos ressources et
    //         de mettre en place les outils adaptés à votre activité, tout en
    //         accompagnant vos équipes.
    //       </p>
    //     </div>
    //   </header>

    //   <div className={styles.servicesContentContainer}>
    //     <div className={styles.decorativePyramidContainer}>
    //       <Pyramid />
    //     </div>

    //     <ul className={styles.servicesListContainer}>
    //       <li className={styles.serviceItem}>
    //         <div className={styles.serviceHeader}>
    //           <div className={styles.serviceBubble} aria-hidden="true"></div>
    //           <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //             CFO / Contrôleur financier :
    //           </h3>
    //         </div>
    //         <p className={styles.serviceDescription}>
    //           Renforcement de votre équipe par une présence à temps partiel dans
    //           vos locaux.
    //         </p>
    //       </li>

    //       <li className={styles.serviceItem}>
    //         <div className={styles.serviceHeader}>
    //           <div className={styles.serviceBubble} aria-hidden="true"></div>
    //           <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //             Rentabilité & gestion des risques :
    //           </h3>
    //         </div>
    //         <p className={styles.serviceDescription}>
    //           Analyse de la chaine de valeur et de la Rentabilité. <br></br>
    //           Gestion des risques & amélioration de l&apos;efficacité
    //           opérationnelle.
    //         </p>
    //       </li>

    //       <li className={styles.serviceItem}>
    //         <div className={styles.serviceHeader}>
    //           <div className={styles.serviceBubble} aria-hidden="true"></div>
    //           <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //             Gestion de projet :
    //           </h3>
    //         </div>
    //         <p className={styles.serviceDescription}>
    //           Création, implémentation et déploiement de solutions et precessus
    //           sur mesure. <br></br>
    //           Développement logiciels métiers.
    //         </p>
    //       </li>

    //       <li className={styles.serviceItem}>
    //         <div className={styles.serviceHeader}>
    //           <div className={styles.serviceBubble} aria-hidden="true"></div>
    //           <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //             Planification financière & Business plan :
    //           </h3>
    //         </div>
    //         <p className={styles.serviceDescription}>
    //           Vision stratégique et financière 3/5 ans. <br></br>
    //           Accompagnement financements.
    //         </p>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    // ---------------------------------------------------------------------

    // <div className={styles.servicesContainer}>
    //   <div className={styles.sectionTitle}>
    //     <h2 className={`${styles.title} ${barlow.className}`}>Mes services </h2>
    //     <div className={styles.titleSeparator}></div>
    //   </div>

    //   <div className={styles.sectionDescription}>
    //     <p className={styles.presentation}>
    //       En tant que consultant, mon rôle sera de mettre en place les
    //       stratégies et outils nécessaires à l&apos;atteinte de vos objectifs
    //       ainsi que de ceux de vos clients.
    //     </p>
    //     <p className={styles.presentation}>
    //       Le plus haut niveau de confidentialité, une transparence et une
    //       collaboration totale. <br></br>
    //       Ces engagements nous permettront de gérer au mieux vos ressources et
    //       de mettre en place les outils adaptés à votre activité, tout en
    //       accompagnant vos équipes.
    //     </p>
    //   </div>

    //   <div className={styles.decorativePyramidContainer}>
    //     <Pyramid />
    //   </div>

    //   <ul className={styles.servicesListContainer}>
    //     <li className={styles.serviceItem}>
    //       <div className={styles.serviceHeader}>
    //         <div className={styles.serviceBubble} aria-hidden="true"></div>
    //         <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //           CFO / Contrôleur financier :
    //         </h3>
    //       </div>
    //       <p className={styles.serviceDescription}>
    //         Renforcement de votre équipe par une présence à temps partiel dans
    //         vos locaux.
    //       </p>
    //     </li>

    //     <li className={styles.serviceItem}>
    //       <div className={styles.serviceHeader}>
    //         <div className={styles.serviceBubble} aria-hidden="true"></div>
    //         <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //           Rentabilité & gestion des risques :
    //         </h3>
    //       </div>
    //       <p className={styles.serviceDescription}>
    //         Analyse de la chaine de valeur et de la Rentabilité. <br></br>
    //         Gestion des risques & amélioration de l&apos;efficacité
    //         opérationnelle.
    //       </p>
    //     </li>

    //     <li className={styles.serviceItem}>
    //       <div className={styles.serviceHeader}>
    //         <div className={styles.serviceBubble} aria-hidden="true"></div>
    //         <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //           Gestion de projet :
    //         </h3>
    //       </div>
    //       <p className={styles.serviceDescription}>
    //         Création, implémentation et déploiement de solutions et precessus
    //         sur mesure. <br></br>
    //         Développement logiciels métiers.
    //       </p>
    //     </li>

    //     <li className={styles.serviceItem}>
    //       <div className={styles.serviceHeader}>
    //         <div className={styles.serviceBubble} aria-hidden="true"></div>
    //         <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
    //           Planification financière & Business plan :
    //         </h3>
    //       </div>
    //       <p className={styles.serviceDescription}>
    //         Vision stratégique et financière 3/5 ans. <br></br>
    //         Accompagnement financements.
    //       </p>
    //     </li>
    //   </ul>
    // </div>

    <div className={styles.servicesContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>Mes services </h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.sectionDescription}>
        <p className={styles.presentation}>
          En tant que consultant, mon rôle sera de mettre en place les
          stratégies et outils nécessaires à l&apos;atteinte de vos objectifs
          ainsi que de ceux de vos clients.
        </p>
        <p className={styles.presentation}>
          Le plus haut niveau de confidentialité, une transparence et une
          collaboration totale. <br></br>
          Ces engagements nous permettront de gérer au mieux vos ressources et
          de mettre en place les outils adaptés à votre activité, tout en
          accompagnant vos équipes.
        </p>
      </div>

      <div className={styles.decorativePyramidContainer}>
        <Pyramid />
      </div>

      <ul className={styles.servicesListContainer}>
        <li className={styles.serviceItem}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceBubble} aria-hidden="true"></div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              CFO / Contrôleur financier :
            </h3>
          </div>
          <p className={styles.serviceDescription}>
            Renforcement de votre équipe par une présence à temps partiel dans
            vos locaux.
          </p>
        </li>

        <li className={styles.serviceItem}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceBubble} aria-hidden="true"></div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              Rentabilité & gestion des risques :
            </h3>
          </div>
          <p className={styles.serviceDescription}>
            Analyse de la chaine de valeur et de la Rentabilité. <br></br>
            Gestion des risques & amélioration de l&apos;efficacité
            opérationnelle.
          </p>
        </li>

        <li className={styles.serviceItem}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceBubble} aria-hidden="true"></div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              Gestion de projet :
            </h3>
          </div>
          <p className={styles.serviceDescription}>
            Création, implémentation et déploiement de solutions et precessus
            sur mesure. <br></br>
            Développement logiciels métiers.
          </p>
        </li>

        <li className={styles.serviceItem}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceBubble} aria-hidden="true"></div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              Planification financière & Business plan :
            </h3>
          </div>
          <p className={styles.serviceDescription}>
            Vision stratégique et financière 3/5 ans. <br></br>
            Accompagnement financements.
          </p>
        </li>
      </ul>
    </div>
  );
}
