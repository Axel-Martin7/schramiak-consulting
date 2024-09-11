import React from 'react';
import styles from './About.module.scss';
import { barlow } from '@/styles/font';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.titleCard}>
            <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
          </div>

          <div className={styles.imageCard}>
            <div className={styles.imageFrame}>
              <div className={styles.topDecorationFrame}></div>
              <div className={styles.bottomDecorationFrame}></div>
            </div>
          </div>

          <div className={styles.quoteCard}>
            <blockquote className={styles.quote}>
              Chaque projet passe par l etablissement d une relation de
              confiance et d un systeme de collaboration, en vue de contribuer a
              votre reussite ainsi qu a celle de vos clients.
            </blockquote>
          </div>

          <div className={styles.descriptionCard}>
            <p className={styles.description}>
              Je suis Steven Schramiak, consultant en management financier avec
              une forte polyvalence et un esprit entrepreneurial. <br></br>
              Avec plus de 10 ans d expérience dans le domaine, j ai aidé de
              nombreuses entreprises à{' '}
              <span className={styles.highlight}>
                optimiser leur gestion financière et opérationnelle.
              </span>{' '}
              <br></br>
              Mon parcours professionnel m a permis de développer une expertise
              pointue en controlling, gestion de projet et création de startups.
            </p>
            <p className={styles.description}>
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
        </div>
      </div>
    </section>
  );
}
