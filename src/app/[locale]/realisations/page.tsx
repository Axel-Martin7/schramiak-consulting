import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';
import styles from './page.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import timeclock from '../../../../public/icons/clock-activity.svg';
import lightbulb from '../../../../public/icons/lightbulb5.svg';
import check from '../../../../public/icons/circled-check.svg';

type Props = {
  params: { locale: string };
};

export default function RealisationsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('AboutPage');

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className={`${styles.pageTitle} ${barlow.className}`}>
          Mes <strong className={styles.highlight}>Réalisations</strong>
        </h1>

        <div className={styles.coloredBubblesContainer}>
          <span className={styles.bubble1}></span>
          <span className={styles.bubble2}></span>
          <span className={styles.bubble3}></span>
          <span className={styles.bubble4}></span>
        </div>
      </header>

      <section className={styles.realisationsSection}>
        {/*---------- Groupement International Automobile ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.projectTitleContainer}>
            <span className={styles.separator}></span>
            <h2 className={styles.projectName}>
              Groupement International Automobile
            </h2>
          </div>

          <div className={styles.descriptionCard}>
            <p className={styles.description}>
              Au sein d&apos;un groupement international de distribution de
              pièces détachées automobiles, lancement de plusieurs projets et
              startups en vue de diversifier l&apos;activité.
            </p>
            <p className={styles.description}>
              Planification financière et business plan afin de lever les fonds
              nécessaires aux développements de ces projets.
            </p>
            <p className={styles.description}>
              Pilotage financier de ces projets et participation aux conseils
              d&apos;administration.
            </p>
            <p className={styles.description}>
              Création d&apos;outils d&apos;analyse et de prévision des ventes.
            </p>
          </div>

          <ul className={styles.resultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.item}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>3 ans</h3>
              <p className={styles.itemDescription}>
                Une expérience au sein d&apos;un groupe international, divisée
                entre le contrôle financier de différentes entités et la gestion
                de projets innovants.
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.item}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Gestion de projet</h3>
              <p className={styles.itemDescription}>
                Management de projet avec des équipes internationales. <br></br>
                Elaboration de POCs (Proof of Concept).
              </p>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.item}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Résultats</h3>
              <p className={styles.itemDescription}>
                12 projets accompagnés.
                <br></br>5 entreprises crées.
                <br></br> Outils de prévision des ventes.
              </p>
            </li>
          </ul>
        </article>

        {/*---------- MarketPlace B2B ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.projectTitleContainer}>
            <span className={styles.separator}></span>
            <h2 className={styles.projectName}>Marketplace B2B</h2>
            <span className={styles.emptySeparator}></span>
          </div>

          <div className={styles.descriptionCard}>
            <p className={styles.description}>
              Une startup nouvellement créée, dans le commerce de pièces
              détachées automobiles avec des acteurs internationaux.
            </p>
            <p className={styles.description}>
              L&apos;entreprise avait besoin de définir l&apos;ensemble de ses
              process de gestion, ainsi que d&apos;un accompagnement pour
              soutenir sa croissance.
            </p>
            <p className={styles.description}>
              Une levée de fonds était à préparer, auprès de financeurs
              publiques et privés, avec un suivi auprès des actionnaires et des
              audits financiers à piloter.
            </p>
          </div>

          <ul className={styles.resultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.item}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>2 ans</h3>
              <p className={styles.itemDescription}>
                Un mandat longue durée, avec un rôle de Contrôleur financier à
                temps partiel pour gérer le quotidien, soutenir
                l&apos;entreprise dans sa croissance et accompagner le
                dirigeant.
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.item}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>CFO temps partiel</h3>
              <p className={styles.itemDescription}>
                Choix et configuration d&apos;un ERP. <br></br>
                Définition des process de gestion. <br></br>
                Mise en place du système comptable.
              </p>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.item}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Résultats</h3>
              <p className={styles.itemDescription}>
                Système de gestion déployé avec une équie restreinte. <br></br>
                Levée de fonds réalisée. <br></br>
                Ressources financières optimisées. <br></br>
                Maîtrise de la trésorerie.
              </p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
