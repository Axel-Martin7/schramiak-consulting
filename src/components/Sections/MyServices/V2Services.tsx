import React from 'react';

import styles from './V2Services.module.scss';
import Image from 'next/image';
import map from '../../../../public/world-map.png';
import { barlow } from '@/styles/font';

export default function V2Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.mainContainer}>
        <div className={styles.shapesContainer}>
          {/* Hexagones principaux */}
          <div className={styles.borderHexagon1}>
            <div className={styles.hexagon}>
              <div className={styles.contentContainer}>
                <p className={`${styles.number} ${barlow.className}`}>01</p>

                <h1 className={`${styles.serviceTitle} ${barlow.className}`}>
                  <span className={styles.colored}>CFO</span> / Controleur
                  financier
                </h1>
                <p className={`${styles.description} ${barlow.className}`}>
                  Renforcement de votre équipe par une présence à temps partiel
                  dans vos locaux
                </p>
              </div>
            </div>
          </div>

          <div className={styles.borderHexagon2}>
            <div className={styles.hexagon}>
              <div className={styles.contentContainer}>
                <p className={`${styles.number} ${barlow.className}`}>02</p>

                <h1 className={`${styles.serviceTitle} ${barlow.className}`}>
                  <span className={styles.colored}>Rentabilité</span> & gestion
                  des risques
                </h1>
                <p className={`${styles.description} ${barlow.className}`}>
                  Analyse de la chaine de valeur et de la rentabilité. <br></br>
                  Gestion des risques & amélioration de l efficacité
                  opérationnelle.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.borderHexagon3}>
            <div className={styles.hexagon}>
              <div className={styles.contentContainer}>
                <p className={`${styles.number} ${barlow.className}`}>03</p>

                <h1 className={`${styles.serviceTitle} ${barlow.className}`}>
                  <span className={styles.colored}>Gestion</span> de projet
                </h1>
                <p className={`${styles.description} ${barlow.className}`}>
                  Création, implémentation et déploiement de solutions et de
                  processus sur mesure. <br></br>
                  Développement logiciels métiers.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.borderHexagon4}>
            <div className={styles.hexagon}>
              <div className={styles.contentContainer}>
                <p className={`${styles.number} ${barlow.className}`}>04</p>

                <h1 className={`${styles.serviceTitle} ${barlow.className}`}>
                  <span className={styles.colored}>
                    Planification financière
                  </span>{' '}
                  & business plan
                </h1>
                <p className={`${styles.description} ${barlow.className}`}>
                  Vision stratégique et financière 3/5 ans. <br></br>
                  Accompagnement financements.
                </p>
              </div>
            </div>
          </div>

          {/* Hexagones de repères */}
          {/* <div className={styles.centralHexagon}></div> */}
        </div>

        <div className={styles.backgroundContainer}>
          <div className={styles.informationsTopContainer}>
            <h1 className={`${styles.title} ${barlow.className}`}>
              <span className={styles.colored}>Mon role,</span>
              <br></br> Mes services
            </h1>
            <p className={`${styles.description} ${barlow.className}`}>
              En tant que consultant, mon role sera de mettre en place les
              stratégies et outils necessaires a l atteinte de vos objectifs
              ainsi que ceux de vos clients.
            </p>
            <p className={`${styles.description} ${barlow.className}`}>
              La plus haut niveau de confidentialité, une transparence et une
              collaboration totale. <br></br>
              Ces engagements nous permettront de gerer au mieux vos ressources
              et de mettre en place les outils adaptes a votre activité, tout en
              accompagant vos equipes.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="image de fond d'une map monde"
              src={map}
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
