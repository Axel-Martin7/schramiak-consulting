import React from 'react';
import styles from './About.module.scss';
import ProfilPictureShape from './ProfilPictureShape';
import { barlow } from '@/styles/font';

export default function About() {
  return (
    //  <div className={styles.aboutContainer}>
    //    <div className={styles.aboutCardFrame}>
    //      <div className={styles.aboutCard}>
    //        <section className={styles.titleSection}>
    //          <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
    //          <div className={styles.titleSeparator}></div>
    //        </section>

    //        <section className={styles.imageSection}>
    //          <ProfilPictureShape />
    //        </section>

    //        <section className={`${styles.quoteSection} ${barlow.className}`}>
    //          <blockquote className={styles.quote}>
    //            Chaque projet passe par l&apos;établissement d&apos;une relation
    //            de confiance et d&apos;un système de collaboration, en vue de
    //            contribuer à votre réussite ainsi qu&apos;à celle de vos clients.
    //          </blockquote>
    //        </section>

    //        <section className={styles.presentationSection}>
    //          <article className={styles.descriptionsContainer}>
    //            <p className={styles.description}> Bienvenue,</p>

    //            <p className={styles.description}>
    //              Je suis Steven Schramiak, consultant en management financier
    //              avec une forte polyvalence et un esprit entrepreneurial.{' '}
    //              <br></br>
    //              Avec plus de 10 ans d&apos;expérience dans le domaine, j&apos;ai
    //              aidé de nombreuses entreprises à optimiser leur gestion
    //              financière et opérationnelle.
    //            </p>

    //            <p className={styles.description}>
    //              Mon parcours professionnel m&apos;a permis de développer une
    //              expertise pointue en controlling, gestion de projet et création
    //              de startups.
    //            </p>

    //            <p className={styles.description}>
    //              Ayant collaboré avec des PME et des start-ups de divers
    //              secteurs, j&apos;ai acquis une riche expérience dans des
    //              industries telles que la construction, les services aux
    //              entreprises, le commerce de détail et la vente en ligne.
    //            </p>

    //            <p className={styles.description}>
    //              Mon approche est centrée sur la mise en place de solutions
    //              innovantes et adaptées aux besoins spécifiques de chaque
    //              entreprise, tout en assurant une transparence et une
    //              confidentialité totale.
    //            </p>
    //          </article>

    //          <div className={styles.buttonContainer}>
    //            <button className={styles.button}>Button</button>
    //          </div>
    //        </section>
    //      </div>
    //    </div>

    //    {/* ----- Décorations de la carte ----- */}
    //    <div className={styles.cardShadow}></div>
    //    <div className={styles.cardReflect}></div>
    //  </div>

    <div className={styles.aboutContainer}>
      <div className={styles.aboutCardFrame}>
        <div className={styles.aboutCard}>
          <section className={styles.sectionTitle}>
            <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
            <div className={styles.titleSeparator}></div>
          </section>

          <section className={styles.imageSection}>
            <ProfilPictureShape />
          </section>

          <section className={styles.quoteSection}>
            <blockquote className={`${styles.quote} ${barlow.className}`}>
              Chaque projet passe par l&apos;établissement d&apos;une relation
              de confiance et d&apos;un système de collaboration, en vue de
              contribuer à votre réussite ainsi qu&apos;à celle de vos clients.
            </blockquote>
          </section>

          <section className={styles.presentationSection}>
            <article className={styles.descriptionsContainer}>
              <p className={styles.description}> Bienvenue,</p>

              <p className={styles.description}>
                Je suis Steven Schramiak, consultant en management financier
                avec une forte polyvalence et un esprit entrepreneurial.
                <br></br>
                Avec plus de 10 ans d&apos;expérience dans le domaine, j&apos;ai
                aidé de nombreuses entreprises à optimiser leur gestion
                financière et opérationnelle.
              </p>

              <p className={styles.description}>
                Mon parcours professionnel m&apos;a permis de développer une
                expertise pointue en controlling, gestion de projet et création
                de startups.
              </p>

              <p className={styles.description}>
                Ayant collaboré avec des PME et des start-ups de divers
                secteurs, j&apos;ai acquis une riche expérience dans des
                industries telles que la construction, les services aux
                entreprises, le commerce de détail et la vente en ligne.
              </p>

              <p className={styles.description}>
                Mon approche est centrée sur la mise en place de solutions
                innovantes et adaptées aux besoins spécifiques de chaque
                entreprise, tout en assurant une transparence et une
                confidentialité totale.
              </p>
            </article>

            <div className={styles.buttonContainer}>
              <button className={`${styles.button} ${barlow.className}`}>
                Découvrez mon parcours
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* ----- Décorations de la carte ----- */}
      <div className={styles.cardShadow}></div>
      <div className={styles.cardReflect}></div>
    </div>
  );
}
