import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';
import styles from './page.module.scss';
import { barlow } from '@/styles/font';

type Props = {
  params: { locale: string };
};

export default function ParcoursPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('AboutPage');

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className={`${styles.pageTitle} ${barlow.className}`}>
          Mon <strong className={styles.highlight}>Parcours</strong>
        </h1>

        <div className={styles.coloredBubblesContainer}>
          <span className={styles.bubble1}></span>
          <span className={styles.bubble2}></span>
          <span className={styles.bubble3}></span>
          <span className={styles.bubble4}></span>
        </div>
      </header>

      <section className={styles.cardsSection}>
        {/*---------- Clim diffusion ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Clim diffusion</h2>
              <h3 className={styles.role}>Apprenti</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Développement commercial.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Mise en place de process de gestion.</p>
              </li>
            </ul>
          </div>

          <div className={styles.cardDate}>2011</div>
        </article>

        {/*---------- Master ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>
                <span className={styles.line}>Master </span>
                <span className={styles.line}> de Contrôle de gestion </span> &
                Audit financier
              </h2>
            </div>
          </div>

          <div className={styles.cardDate}>2014</div>
        </article>

        {/*---------- Bloomberg ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Bloomberg</h2>
              <h3 className={styles.role}>Analyste</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>
                  Analyse des états financiers des entreprises côtées en Europe-
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.cardDate}>2015</div>
        </article>

        {/*---------- Vinci Construction ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Vinci construction</h2>
              <h3 className={styles.role}>
                Responsable administratif & comptable
              </h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Contrôle de gestion et des coûts.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Etablissement des budgets.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Tableaux de suivi et indicateurs.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Gestion de la trésorerie.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Clôtures comptables.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Gestion des audits.</p>
              </li>
            </ul>
          </div>

          <div className={styles.cardDate}>2017</div>
        </article>

        {/*---------- Nexus Automotive ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Nexus automotive</h2>
              <h3 className={styles.role}>Manager contrôle financier</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Contrôle financier des startups du groupe.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Création de startups, planification financière.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Structuration et amélioration des process de gestion.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Gestion de la trésorerie et financements.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Gestion des audits.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Management de projets innovants.</p>
              </li>
            </ul>
          </div>

          <div className={styles.cardDate}>2019</div>
        </article>

        {/*---------- Consultant indépendant ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Consultant indépendant</h2>
              <h3 className={styles.role}>
                Management financier & optimisation des process
              </h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Audit des systèmes de gestion.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Accompagnement des collaborateurs et dirigeants.</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble}></span>
                <p>Mise en place de process et d&apos;outils de reporting.</p>
              </li>
            </ul>
          </div>

          <div className={styles.cardDate}>2023</div>
        </article>
      </section>
    </main>
  );
}
