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
                <span className={styles.colored}>Mes</span> services
              </h1>
              <p className={`${styles.description} ${barlow.className}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus autem consequuntur minus libero! Debitis error
                dignissimos dolor sint, tempore eaque beatae molestias esse quam
                provident veritatis aliquid natus harum laboriosam.
              </p>
              <div className={styles.buttonContainer}>
                <Button label="Learn more" variant="primary" />
              </div>
            </div>
          </div>
        </div>

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
                <span className={styles.colored}>Planification financière</span>{' '}
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
    </section>
  );
}
