import React from 'react';
import styles from './V2Services.module.scss';
import Button from '@/components/Buttons/Button';
import { barlow } from '@/styles/font';

export default function V2Services() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mobileContainer}>
        <div className={styles.topInformationsContainer}>
          <div className={styles.sectionTitleContainer}>
            <h2 className={`${styles.title} ${barlow.className}`}>
              Mes services
            </h2>
            <div className={styles.titleSeparator}></div>
          </div>
          <div className={styles.sectionDescriptionsContainer}>
            <p className={styles.description}>
              En tant que consultant, mon rôle sera de mettre en place les
              stratégies et outils nécessaires à l atteinte de vos objectifs
              ainsi que de ceux de vos clients.
            </p>
            <p className={styles.description}>
              Le plus haut niveau de confidentialité, une transparence et une
              collaboration totale. <br></br>
              Ces engagements nous permettront de gérer au mieux vos ressources
              et de mettre en place les outils adaptés à votre activité, tout en
              accompagnant vos équipes.
            </p>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {/* Carte 1 --> */}
          <div className={styles.card1}>
            <div className={styles.coloredRibbon}></div>

            <div className={styles.circleBorder}>
              <div className={styles.numberCircle}>
                <div className={styles.serviceNumber}>01</div>
              </div>
            </div>

            <div className={styles.contentContainer}>
              <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
                CFO / Contrôleur financier
              </h3>
              <p className={`${styles.serviceDescription} ${barlow.className}`}>
                Renforcement de votre équipe par une présence à temps partiel
                dans vos locaux.
              </p>
            </div>
          </div>
          {/* Carte 2 --> */}
          <div className={styles.card2}>
            <div className={styles.coloredRibbon}></div>

            <div className={styles.circleBorder}>
              <div className={styles.numberCircle}>
                <div className={styles.serviceNumber}>02</div>
              </div>
            </div>

            <div className={styles.contentContainer}>
              <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
                Rentabilité & gestion des risques
              </h3>
              <p className={`${styles.serviceDescription} ${barlow.className}`}>
                Analyse de la chaine de valeur et de la rentabilité. <br></br>
                Gestion des risques & amélioration de l efficacité
                opérationnelle.
              </p>
            </div>
          </div>
          {/* Carte 3 --> */}
          <div className={styles.card3}>
            <div className={styles.coloredRibbon}></div>

            <div className={styles.circleBorder}>
              <div className={styles.numberCircle}>
                <div className={styles.serviceNumber}>03</div>
              </div>
            </div>

            <div className={styles.contentContainer}>
              <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
                Gestion de projet
              </h3>
              <p className={`${styles.serviceDescription} ${barlow.className}`}>
                Création, implémentation et déploiement de solutions et de
                processus sur mesure. <br></br>
                Développement logiciels métiers.
              </p>
            </div>
          </div>
          {/* Carte 4 --> */}
          <div className={styles.card4}>
            <div className={styles.coloredRibbon}></div>

            <div className={styles.circleBorder}>
              <div className={styles.numberCircle}>
                <div className={styles.serviceNumber}>04</div>
              </div>
            </div>

            <div className={styles.contentContainer}>
              <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
                Planification financière & Business plan.
              </h3>
              <p className={`${styles.serviceDescription} ${barlow.className}`}>
                Vision stratégique et financière 3/5 ans. <br></br>
                Accompagnement financements.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button label="Mes services" variant="primary" />
        </div>
      </div>
    </div>
  );
}
