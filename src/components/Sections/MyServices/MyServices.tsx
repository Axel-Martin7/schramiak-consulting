import React from 'react';
import styles from './MyServices.module.scss';
import { barlow } from '@/styles/font';
import Button from '@/components/Buttons/Button';
import Image from 'next/image';
import map from '../../../../public/world-map.png';
import ampoule from '../../../../public/BlankMap-World-noborders.png';

export default function Myservices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.shapesContainer}>
        {/* Conteneur en forme de fléche */}
        <div className={styles.borderArrow}>
          <div className={styles.arrow}>
            <div className={styles.contentContainer}>
              <h1 className={`${styles.title} ${barlow.className}`}>
                Mes Services
              </h1>
              <p className={styles.description}>
                En tant que consultant, mon role sera de mettre en place les
                meilleures stratégies et outils nécessaire à l'atteinte de vos
                objectifs ainsi que ceux de vos clients dans un climat de
                confidentialité, transparence et collaboration pour optimiser
                vos ressources et soutenir vos équipes
              </p>
              <div className={styles.btnContainer}>
                <Button />
              </div>
            </div>
          </div>
        </div>

        {/* Hexagones principaux */}
        <div className={styles.borderHexagon1}>
          <div className={styles.hexagon}>
            <div className={styles.contentContainer}>
              <p className={styles.number}>01</p>
              <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
                CFO / Controleur financier
              </h2>
              <p className={styles.description}>
                Renforcement de votre équipe par une présence à temps partiel
                dans vos locaux
              </p>
            </div>
          </div>
        </div>
        <div className={styles.borderHexagon2}>
          <div className={styles.hexagon}>
            <div className={styles.contentContainer}>
              <p className={styles.number}>02</p>
              <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
                Rentabilité & gestion des risques
              </h2>
              <p className={styles.description}>
                Analyse de la chaine de valeur et de la rentabilité. <br></br>
                Gestion des risques & amélioration de l'efficacité
                opérationnelle.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.borderHexagon3}>
          <div className={styles.hexagon}>
            <div className={styles.contentContainer}>
              <p className={styles.number}>03</p>
              <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
                Gestion de projet
              </h2>
              <p className={styles.description}>
                Création, implémentation et déploiement de solutions et
                processus sur mesure. <br></br>
                Développement logiciels métiers.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.borderHexagon4}>
          <div className={styles.hexagon}>
            <div className={styles.contentContainer}>
              <p className={styles.number}>04</p>
              <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
                Planification financière & Buisiness plan
              </h2>
              <p className={styles.description}>
                Vision strégique et financière 3/5ans. <br></br>
                Accompagnement financements
              </p>
            </div>
          </div>
        </div>

        {/* Hexagones de repères */}
        <div className={styles.centralHexagon}></div>
        <div className={styles.helperHexagon1}></div>
        <div className={styles.helperHexagon2}></div>
      </div>

      <div className={styles.backgroundContainer}>
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

      {/* <div className={styles.backgroundContainer}>
        <Image
          className={styles.image}
          alt="image ampoule"
          src={map}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
        ></Image>

        <div className={styles.backgroundGradient}></div>
      </div> */}
    </section>
  );
}
