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

      <section className={styles.parcoursSection}>
        {/*---------- CLIM DIFFUSION ---------- */}
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.projectYear}>2011</div>
            <div className={styles.projectTitlesContainer}>
              <h2 className={styles.projectName}>Clim diffusion</h2>
              <h3 className={styles.projectRole}>Apprenti</h3>
            </div>
          </header>

          <ul className={styles.projectDescriptionsList}>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>Développement commercial.</p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Mise en place de process de gestion.
              </p>
            </li>
          </ul>
        </article>

        {/*---------- MASTER  ---------- */}
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.projectYear}>2014</div>
            <div className={styles.projectTitlesContainer}>
              <h2 className={styles.projectName}>
                Master de contrôle de gestion & Audit financier
              </h2>
            </div>
          </header>
        </article>

        {/*---------- BLOOMBERG ---------- */}
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.projectYear}>2015</div>
            <div className={styles.projectTitlesContainer}>
              <h2 className={styles.projectName}>Bloomberg</h2>
              <h3 className={styles.projectRole}>Analyste</h3>
            </div>
          </header>

          <ul className={styles.projectDescriptionsList}>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Analyse des états financiers des entreprises côtées en Europe.
              </p>
            </li>
          </ul>
        </article>

        {/*---------- VINCI CONSTRUCTION ---------- */}
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.projectYear}>2017</div>
            <div className={styles.projectTitlesContainer}>
              <h2 className={styles.projectName}>Vinci Construction</h2>
              <h3 className={styles.projectRole}>
                Responsable administratif & comptable
              </h3>
            </div>
          </header>

          <ul className={styles.projectDescriptionsList}>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Contrôle de gestion et des coûts.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>Etablissement des budgets.</p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Tableaux de suivi et indicateurs.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>Gestion de la trésorerie.</p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>Clôtures comptables.</p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>Gestion des audits.</p>
            </li>
          </ul>
        </article>

        {/*---------- NEXUS AUTOMOTIVE ---------- */}
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.projectYear}>2019</div>
            <div className={styles.projectTitlesContainer}>
              <h2 className={styles.projectName}>Nexus automotive</h2>
              <h3 className={styles.projectRole}>Manager contrôle financier</h3>
            </div>
          </header>

          <ul className={styles.projectDescriptionsList}>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Contrôle financier des startups du groupe.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Création de startups, Planification financière.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Structuration et amélioration des process de gestion.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Gestion de la trésorerie et financements.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>Gestion des audits.</p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Management de projets innovants.
              </p>
            </li>
          </ul>
        </article>

        {/*---------- CONSULTANT INDEPENDANT ---------- */}
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.projectYear}>2023</div>
            <div className={styles.projectTitlesContainer}>
              <h2 className={styles.projectName}>Consultant Indépendant</h2>
              <h3 className={styles.projectRole}>
                Management financier & optimisation des process
              </h3>
            </div>
          </header>

          <ul className={styles.projectDescriptionsList}>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Audit des système de gestion.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Accompagnement des collaborateurs et dirigeants.
              </p>
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.bubble}></span>
              <p className={styles.description}>
                Mise en place de process et d&apos;outils de reporting.
              </p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
