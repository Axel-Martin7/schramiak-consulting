import React from 'react';
import styles from './AboutV3.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import steven from '../../../public/Steven-nobg.png';
import Button from '../common/Button';

export default function AboutV3() {
  return (
    <div className={styles.aboutContainer}>
      {/* ---------- Titre de la section  ---------- */}
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
        <div className={styles.titleSeparator}></div>
      </div>
      {/* ---------- la carte ---------- */}
      <div className={styles.aboutCardFrame}>
        <div className={styles.aboutCard}>
          {/* ---------- Colonne de gauche : Img + social ---------- */}
          <div className={styles.leftColumn}>
            <div className={styles.imageSection}>
              <div className={styles.imageFrame}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    alt="photo de Steven Schramiak"
                    src={steven}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                  />
                </div>

                {/* ---------- Reflet de la carte de l'image ---------- */}
                <div className={styles.imageFrameReflect}>
                  <div className={styles.imageReflect}>
                    <Image
                      className={styles.image}
                      alt="photo de Steven Schramiak"
                      src={steven}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>

          {/* ---------- Colonne de droite : quote + seperator + infos ---------- */}
          <div className={styles.rightColumn}>
            <blockquote className={styles.quoteSection}>
              Chaque projet passe par l&apos;établissement d&apos;une relation
              de confiance et d&apos;un système de collaboration, en vue de
              contribuer à votre réussite ainsi qu&apos;à celle de vos clients.
            </blockquote>

            <div className={styles.separatorSection}></div>

            <div className={styles.presentationSection}>
              <div className={styles.presentationTitles}>
                <h3 className={styles.name}>Steven Schramiak</h3>
                <h4 className={styles.role}>Consultant financier</h4>
              </div>

              <article className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  Je suis Steven Schramiak, consultant en management financier
                  avec une forte polyvalence et un esprit entrepreneurial. Avec
                  plus de 10 ans d expérience dans le domaine, j ai aidé de
                  nombreuses entreprises à optimiser leur gestion financière et
                  opérationnelle. Mon parcours professionnel m a permis de
                  développer une expertise pointue en controlling, gestion de
                  projet et création de startups.
                </p>
                <p className={styles.description}>
                  Ayant collaboré avec des PME et des start-ups de divers
                  secteurs, j ai acquis une riche expérience dans des industries
                  telles que la construction, les services aux entreprises, le
                  commerce de détail et la vente en ligne. Mon approche est
                  centrée sur la mise en place de solutions innovantes et
                  adaptées aux besoins spécifiques de chaque entreprise, tout en
                  assurant une transparence et une confidentialité totale.
                </p>
              </article>

              <div className={styles.buttonContainer}>
                <Button variant="secondary">Découvrez mon parcours</Button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Reflet de la carte ---------- */}
        <div className={styles.cardFrameReflect}>
          <div className={styles.cardReflect}></div>
        </div>
      </div>
    </div>
  );
}
