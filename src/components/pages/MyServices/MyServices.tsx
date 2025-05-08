import React from 'react';
import styles from './MyServices.module.scss';
import { barlow } from '@/styles/font';
import Pyramid from './Pyramid';

export default function MyServices() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.sectionTitle}>
        <h3 className={`${styles.title} ${barlow.className}`}>Mes services </h3>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.sectionDescription}>
        <p className={styles.description}>
          En tant que consultant, mon rôle sera de mettre en place les
          stratégies et outils nécessaires à l&apos;atteinte de vos objectifs
          ainsi que de ceux de vos clients.
        </p>
        <p className={styles.emphasis}>
          Le plus haut niveau de confidentialité, une transparence et une
          collaboration totale.
        </p>
        <p className={styles.description}>
          Ces engagements nous permettront de gérer au mieux vos ressources et
          de mettre en place les outils adaptés à votre activité, tout en
          accompagnant vos équipes.
        </p>
      </div>

      <ul className={styles.servicesList}>
        <li className={styles.service1}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble1} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>
                CFO <small className={styles.small}>/</small> Contrôleur
                financier
              </h4>

              <p className={styles.serviceDescription}>
                Renforcement de votre équipe par une présence à temps partiel
                dans vos locaux.
              </p>
            </div>
          </div>
        </li>

        <li className={styles.service2}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble2} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>
                Rentabilité
                <small className={styles.small}> &</small> Gestion des risques
              </h4>
              <p className={styles.serviceDescription}>
                Analyse de la chaîne de valeur et de la rentabilité. <br></br>
                Gestion des risques & amélioration de l&apos;efficacité
                opérationnelle.
              </p>
            </div>
          </div>
        </li>

        <li className={styles.service3}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble3} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>Gestion de projet</h4>
              <p className={styles.serviceDescription}>
                Création, implémentation et déploiement de solutions et
                processus sur mesure. <br></br>
                Développements logiciels métiers.
              </p>
            </div>
          </div>
        </li>

        <li className={styles.service4}>
          <div className={styles.contentWrapper}>
            <div className={styles.bubble4} aria-hidden="true"></div>

            <div className={styles.serviceInformationContainer}>
              <h4 className={styles.serviceTitle}>
                Planification financière
                <small className={styles.small}> &</small> Business plan
              </h4>
              <p className={styles.serviceDescription}>
                Vision stratégique et financière 3/5 ans. <br></br>
                Accompagnement financements.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <div className={styles.decorativePyramidContainer}>
        <Pyramid />
      </div>
    </div>
  );
}
