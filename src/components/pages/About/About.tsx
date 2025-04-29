import React from 'react';
import styles from './About.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import steven from '../../../../public/Steven-nobg.png';
import Button from '../../common/Button';
import { SocialIcon } from '../../common/SocialIcon';

export default function About() {
  return (
    //  <div className={styles.aboutContainer}>
    //    {/* ---------- Titre de la section  ---------- */}
    //    <div className={styles.sectionTitle}>
    //      <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
    //      <div className={styles.titleSeparator}></div>
    //    </div>
    //    {/* ---------- la carte ---------- */}
    //    <div className={styles.aboutCardFrame}>
    //      <div className={styles.aboutCard}>
    //        {/* ---------- Colonne de gauche : Img + social ---------- */}
    //        <div className={styles.leftColumn}>
    //          <div className={styles.imageSection}>
    //            <div className={styles.imageFrame}>
    //              <div className={styles.imageContainer}>
    //                <Image
    //                  className={styles.image}
    //                  alt="photo de Steven Schramiak"
    //                  src={steven}
    //                  placeholder="blur"
    //                  quality={100}
    //                  fill
    //                  sizes="100vw"
    //                />
    //              </div>

    //              {/* ---------- Reflet de la carte de l'image ---------- */}
    //              <div className={styles.imageFrameReflect}>
    //                <div className={styles.imageReflect}>
    //                  <Image
    //                    className={styles.image}
    //                    alt="photo de Steven Schramiak"
    //                    src={steven}
    //                    placeholder="blur"
    //                    quality={100}
    //                    fill
    //                    sizes="100vw"
    //                  />
    //                </div>
    //              </div>
    //            </div>
    //          </div>

    //          <ul className={styles.socialSection}>
    //            <li className={styles.item}>
    //              <SocialIcon
    //                type="email"
    //                href="mailto:steven.schramiak@icloud.com"
    //                variant="about"
    //                ariaLabel="Envoyer un email"
    //              />
    //            </li>

    //            <li className={styles.item}>
    //              <SocialIcon
    //                type="whatsapp"
    //                href="https://wa.me/41782047078"
    //                variant="default"
    //                ariaLabel="Envoyer un message WhatsApp"
    //              />
    //            </li>

    //            <li className={styles.item}>
    //              <SocialIcon
    //                type="linkedin"
    //                href="https://www.linkedin.com/in/steven-schramiak-2005/"
    //                variant="about"
    //                ariaLabel="Visiter mon profil LinkedIn"
    //              />
    //            </li>
    //          </ul>
    //        </div>

    //        {/* ---------- Colonne de droite : quote + seperator + infos ---------- */}
    //        <div className={styles.rightColumn}>
    //          <blockquote className={styles.quoteSection}>
    //            Chaque projet passe par l&apos;établissement d&apos;une relation
    //            de confiance et d&apos;un système de collaboration, en vue de
    //            contribuer à votre réussite ainsi qu&apos;à celle de vos clients.
    //          </blockquote>

    //          <div className={styles.separatorSection}></div>

    //          <div className={styles.presentationSection}>
    //            <div className={styles.presentationTitles}>
    //              <h3 className={styles.name}>
    //                <small className={styles.small}>Steven</small> Schramiak
    //              </h3>
    //              <h4 className={styles.role}>Consultant financier</h4>
    //            </div>

    //            <article className={styles.descriptionsContainer}>
    //              <p className={styles.description}>
    //                Bienvenue, je suis Steven Schramiak, consultant en management
    //                financier avec une forte polyvalence et un esprit
    //                entrepreneurial. Avec plus de 10 ans d expérience dans le
    //                domaine, j ai aidé de nombreuses entreprises à optimiser leur
    //                gestion financière et opérationnelle. Mon parcours
    //                professionnel m a permis de développer une expertise pointue
    //                en controlling, gestion de projet et création de startups.
    //              </p>
    //              <p className={styles.description}>
    //                Ayant collaboré avec des PME et des start-ups de divers
    //                secteurs, j ai acquis une riche expérience dans des industries
    //                telles que la construction, les services aux entreprises, le
    //                commerce de détail et la vente en ligne. Mon approche est
    //                centrée sur la mise en place de solutions innovantes et
    //                adaptées aux besoins spécifiques de chaque entreprise, tout en
    //                assurant une transparence et une confidentialité totale.
    //              </p>
    //            </article>

    //            <div className={styles.buttonContainer}>
    //              <Button variant="secondary">Découvrez mon parcours</Button>
    //            </div>
    //          </div>
    //        </div>
    //      </div>

    //      {/* ---------- Reflet de la carte ---------- */}
    //      <div className={styles.cardFrameReflect}>
    //        <div className={styles.cardReflect}></div>
    //      </div>
    //    </div>
    //  </div>

    <div className={styles.aboutContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.cardFrame}>
        <div className={styles.card}>
          <div className={styles.leftColumn}>
            <div className={styles.imageCardFrame}>
              <div className={styles.imageCard}>
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

            <div className={styles.socialContainer}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <blockquote className={styles.quote}>
              Chaque projet passe par l&apos;établissement d&apos;une relation
              de confiance et d&apos;un système de collaboration, en vue de
              contribuer à votre réussite ainsi qu&apos;à celle de vos clients.
            </blockquote>

            <span className={styles.separator}></span>

            <article className={styles.presentationContainer}>
              <div className={styles.presentationTitles}>
                <h4 className={styles.name}>
                  <span className={styles.small}>Steven </span>Schramiak
                </h4>
                <h5 className={styles.role}>Consultant financier</h5>
              </div>

              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  Bienvenue, je suis Steven Schramiak, consultant en management
                  financier avec une forte polyvalence et un esprit
                  entrepreneurial. Avec plus de 10 ans d expérience dans le
                  domaine, j ai aidé de nombreuses entreprises à optimiser leur
                  gestion financière et opérationnelle. Mon parcours
                  professionnel m a permis de développer une expertise pointue
                  en controlling, gestion de projet et création de startups.
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
              </div>

              <div className={styles.button}>Découvrez mon parcours</div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
