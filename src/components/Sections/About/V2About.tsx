import React from 'react';
import styles from './V2About.module.scss';
import Button from '@/components/Buttons/Button';
import Image from 'next/image';
import steven from '../../../../public/Steven-Schramiak-profilpic.jpg';
import { barlow } from '@/styles/font';

export default function V2About() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.titleCard}>
          <div className={styles.titleContainer}>
            <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
            <div className={styles.titleSeparator}></div>
          </div>
        </div>

        <div className={styles.imageCard}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="photo de Steven Schramiak"
              src={steven}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            ></Image>
            <div className={styles.imageFramesContainer}>
              <div className={styles.topDecorativeFrame}></div>
              <div className={styles.bottomDecorativeFrame}></div>
            </div>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <blockquote className={`${styles.quote} `}>
            Chaque projet passe par l etablissement d une relation de confiance
            et d un systeme de collaboration, en vue de contribuer a votre
            reussite ainsi qu a celle de vos clients.
          </blockquote>
        </div>

        <div className={styles.descriptionCard}>
          <div className={styles.descriptionsContainer}>
            <p className={`${styles.description} `}>
              Je suis Steven Schramiak, consultant en management financier avec
              une forte polyvalence et un esprit entrepreneurial.
              <br></br>
              Avec plus de 10 ans d expérience dans le domaine, j ai aidé de
              nombreuses entreprises à{' '}
              <span className={styles.highlight}>
                optimiser leur gestion financière et opérationnelle.
              </span>{' '}
              <br></br>
              Mon parcours professionnel m a permis de développer une expertise
              pointue en controlling, gestion de projet et création de startups.
            </p>
            <p className={`${styles.description} `}>
              Ayant collaboré avec des PME et des start-ups de divers secteurs,
              j ai acquis une riche expérience dans des industries telles que la
              construction, les services aux entreprises, le commerce de détail
              et la vente en ligne. <br></br>
              Mon approche est centrée sur la mise en place de solutions
              innovantes et adaptées aux besoins spécifiques de chaque
              entreprise, tout en assurant une transparence et une
              confidentialité totale.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button label="Mes services" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
