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
    // <main className={styles.main}>
    //   <header className={styles.pageHeader}>
    //     <h1 className={`${styles.pageTitle} ${barlow.className}`}>
    //       Mes <strong className={styles.highlight}>Réalisations</strong>
    //     </h1>

    //     <div className={styles.coloredBubblesContainer}>
    //       <span className={styles.bubble1}></span>
    //       <span className={styles.bubble2}></span>
    //       <span className={styles.bubble3}></span>
    //       <span className={styles.bubble4}></span>
    //     </div>
    //   </header>

    //   <section className={styles.realisationsSection}>
    //     {/*---------- Groupement International Automobile ----------*/}
    //     <article className={styles.projectContainer}>
    //       <div className={styles.projectTitleCard}>
    //         <h2 className={styles.projectName}>
    //           Groupement International Automobile
    //         </h2>
    //       </div>

    //       <div className={styles.projectDescriptionCard}>
    //         <p className={styles.description}>
    //           Au sein d&apos;un groupement international de distribution de
    //           pièces détachées automobiles, lancement de plusieurs projets et
    //           startups en vue de diversifier l&apos;activité.
    //         </p>
    //         <p className={styles.description}>
    //           Planification financière et business plan afin de lever les fonds
    //           nécessaires aux développements de ces projets.
    //         </p>
    //         <p className={styles.description}>
    //           Pilotage financier de ces projets et participation aux conseils
    //           d&apos;administration.
    //         </p>
    //         <p className={styles.description}>
    //           Création d&apos;outils d&apos;analyse et de prévision des ventes.
    //         </p>
    //       </div>

    //       <ul className={styles.projectResultsItemsList}>
    //         {/*----- Time -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>3 ans</h3>
    //           <p className={styles.itemDescription}>
    //             Une expérience au sein d&apos;un groupe international, divisée
    //             entre le contrôle financier de différentes entités et la gestion
    //             de projets innovants.
    //           </p>
    //         </li>
    //         {/*----- Role -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Gestion de projet</h3>
    //           <p className={styles.itemDescription}>
    //             Management de projet avec des équipes internationales. <br></br>
    //             Elaboration de POCs (Proof of Concept).
    //           </p>
    //         </li>
    //         {/*----- Résults -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Résultats</h3>
    //           <p className={styles.itemDescription}>
    //             12 projets accompagnés.
    //             <br></br>5 entreprises crées.
    //             <br></br> Outils de prévision des ventes.
    //           </p>
    //         </li>
    //       </ul>

    //       <div className={styles.carvedBackground}></div>
    //     </article>

    //     {/*---------- MarketPlace B2B ----------*/}
    //     <article className={styles.projectContainer}>
    //       <div className={styles.projectTitleCard}>
    //         <h2 className={styles.projectName}>Marketplace B2B</h2>
    //       </div>

    //       <div className={styles.projectDescriptionCard}>
    //         <p className={styles.description}>
    //           Une startup nouvellement créée, dans le commerce de pièces
    //           détachées automobiles avec des acteurs internationaux.
    //         </p>
    //         <p className={styles.description}>
    //           L&apos;entreprise avait besoin de définir l&apos;ensemble de ses
    //           process de gestion, ainsi que d&apos;un accompagnement pour
    //           soutenir sa croissance.
    //         </p>
    //         <p className={styles.description}>
    //           Une levée de fonds était à préparer, auprès de financeurs
    //           publiques et privés, avec un suivi auprès des actionnaires et des
    //           audits financiers à piloter.
    //         </p>
    //       </div>

    //       <ul className={styles.projectResultsItemsList}>
    //         {/*----- Time -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>2 ans</h3>
    //           <p className={styles.itemDescription}>
    //             Un mandat longue durée, avec un rôle de Contrôleur financier à
    //             temps partiel pour gérer le quotidien, soutenir
    //             l&apos;entreprise dans sa croissance et accompagner le
    //             dirigeant.
    //           </p>
    //         </li>
    //         {/*----- Role -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>CFO temps partiel</h3>
    //           <p className={styles.itemDescription}>
    //             Choix et configuration d&apos;un ERP. <br></br>
    //             Définition des process de gestion. <br></br>
    //             Mise en place du système comptable.
    //           </p>
    //         </li>
    //         {/*----- Résults -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Résultats</h3>
    //           <p className={styles.itemDescription}>
    //             Système de gestion déployé avec une équie restreinte. <br></br>
    //             Levée de fonds réalisée. <br></br>
    //             Ressources financières optimisées. <br></br>
    //             Maîtrise de la trésorerie.
    //           </p>
    //         </li>
    //       </ul>

    //       <div className={styles.carvedBackground}></div>
    //     </article>

    //     {/*---------- Sous-traitant horloger ----------*/}
    //     <article className={styles.projectContainer}>
    //       <div className={styles.projectTitleCard}>
    //         <h2 className={styles.projectName}>Sous-traitant horloger</h2>
    //       </div>

    //       <div className={styles.projectDescriptionCard}>
    //         <p className={styles.description}>
    //           Un sous-traitant horloger avait connu des problèmes de suivi de sa
    //           comptabilité suite à un départ et un changement de logiciel.
    //         </p>
    //         <p className={styles.description}>
    //           Une analyse de la situation devait être effectuée dans les plus
    //           brefs délais afin de préparer un conseil d&apos;administration.
    //         </p>
    //         <p className={styles.description}>
    //           La correspondance entre les deux systèmes de comptabilité devait
    //           être assurée et l&apos;ensemble des comptes repris pour plus de
    //           fiabilité et de lisibilité.
    //         </p>
    //       </div>

    //       <ul className={styles.projectResultsItemsList}>
    //         {/*----- Time -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>1 mois</h3>
    //         </li>
    //         {/*----- Role -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Comptabilité</h3>
    //         </li>
    //         {/*----- Résults -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Etats financiers</h3>
    //         </li>
    //       </ul>

    //       <div className={styles.carvedBackground}></div>
    //     </article>

    //     {/*---------- Transport de matériaux ----------*/}
    //     <article className={styles.projectContainer}>
    //       <div className={styles.projectTitleCard}>
    //         <h2 className={styles.projectName}>Transport de matériaux</h2>
    //       </div>

    //       <div className={styles.projectDescriptionCard}>
    //         <p className={styles.description}>
    //           Une jeune entreprise de transport avait besoin d&apos;un système
    //           de gestion de son activité, lui permettant de suivre tous les
    //           trajets de ses véhicules, de suivre les volumes de matériaux
    //           transportés et d&apos;informer toutes les parties prenantes
    //           (fournisseurs, clients, organismes publiques) de manière
    //           régulière, fiable et automatisée.
    //         </p>
    //         <p className={styles.description}>
    //           Le dirigeant souhaitait également améliorer les process de
    //           facturation, de suivi de trésorerie et disposer d&apos;un outil de
    //           gestion lui permettant de suivre sa rentabilité en temps réel.
    //         </p>
    //       </div>

    //       <ul className={styles.projectResultsItemsList}>
    //         {/*----- Time -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>3 mois</h3>
    //           <p className={styles.itemDescription}>
    //             Une présence régulière dans les locaux de l&apos;entreprise pour
    //             un accompagnement des collaborateurs et du dirigeant.
    //           </p>
    //         </li>
    //         {/*----- Role -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Contrôle de gestion</h3>
    //           <p className={styles.itemDescription}>
    //             Mise en place d&apos;un système de gestion développé sur mesure.{' '}
    //             <br></br>
    //             Automatisation des tâches d&apos;envoi de rapports quotidien et
    //             de facturation.
    //           </p>
    //         </li>
    //         {/*----- Résults -----*/}
    //         <li className={styles.itemCard}>
    //           <div className={styles.iconContainer}></div>
    //           <h3 className={styles.itemTitle}>Résultats</h3>
    //           <p className={styles.itemDescription}>
    //             Outil de gestion adapté à son activité. <br></br>
    //             Gain mesuré de 3 jours / mois pour la facturation. <br></br>
    //             Econnomies estimées de 40kCHF annuels sur ses frais de change.{' '}
    //             <br></br>
    //           </p>
    //         </li>
    //       </ul>

    //       <div className={styles.carvedBackground}></div>
    //     </article>
    //   </section>
    // </main>

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
          <div className={styles.mobileSeparator}></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}>
              Groupement International Automobile
            </h2>
          </div>

          <div className={styles.projectDescriptionCard}>
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

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>3 ans</h3>
              <p className={styles.itemDescription}>
                Une expérience au sein d&apos;un groupe international, divisée
                entre le contrôle financier de différentes entités et la gestion
                de projets innovants.
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Gestion de projet</h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>Management de projet avec des équipes internationales.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Elaboration de POCs (Proof of Concept).</p>
                </li>
              </ul>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Résultats</h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>12 projets accompagnés.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>5 entreprises crées.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Outil de prévision des ventes.</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>

        {/*---------- MarketPlace B2B ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.mobileSeparator}></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}>Marketplace B2B</h2>
          </div>

          <div className={styles.projectDescriptionCard}>
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

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
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
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>CFO temps partiel</h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>Choix et configuration d&apos;un ERP.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Définition des process de gestion.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Mise en place du système comptable.</p>
                </li>
              </ul>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Résultats</h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>Système de gestion déployé avec une équipe restreinte.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Levée de fonds réalisée.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Ressources financières optimisées.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Maîtrise de la trésorerie.</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>

        {/*---------- Sous-traitant horloger ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.mobileSeparator}></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}>Sous-traitant horloger</h2>
          </div>

          <div className={styles.projectDescriptionCard}>
            <p className={styles.description}>
              Un sous-traitant horloger avait connu des problèmes de suivi de sa
              comptabilité suite à un départ et un changement de logiciel.
            </p>
            <p className={styles.description}>
              Une analyse de la situation devait être effectuée dans les plus
              brefs délais afin de préparer un conseil d&apos;administration.
            </p>
            <p className={styles.description}>
              La correspondance entre les deux systèmes de comptabilité devait
              être assurée et l&apos;ensemble des comptes repris pour plus de
              fiabilité et de lisibilité.
            </p>
          </div>

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>1 mois</h3>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Comptabilité</h3>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Etats financiers</h3>
            </li>
          </ul>
        </article>

        {/*---------- Transport de matériaux ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.mobileSeparator}></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}>Transport de matériaux</h2>
          </div>

          <div className={styles.projectDescriptionCard}>
            <p className={styles.description}>
              Une jeune entreprise de transport avait besoin d&apos;un système
              de gestion de son activité, lui permettant de suivre tous les
              trajets de ses véhicules, de suivre les volumes de matériaux
              transportés et d&apos;informer toutes les parties prenantes
              (fournisseurs, clients, organismes publiques) de manière
              régulière, fiable et automatisée.
            </p>
            <p className={styles.description}>
              Le dirigeant souhaitait également améliorer les process de
              facturation, de suivi de trésorerie et disposer d&apos;un outil de
              gestion lui permettant de suivre sa rentabilité en temps réel.
            </p>
          </div>

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>3 mois</h3>
              <p className={styles.itemDescription}>
                Une présence régulière dans les locaux de l&apos;entreprise pour
                un accompagnement des collaborateurs et du dirigeant.
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Contrôle de gestion</h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>
                    Mise en place d&apos;un système de gestion développé sur
                    mesure.
                  </p>
                </li>
                <li className={styles.itemDescription}>
                  <p>
                    Automatisation des tâches d&apos;envoi de rapports quotiden
                    et de facturation.
                  </p>
                </li>
              </ul>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}></div>
              <h3 className={styles.itemTitle}>Résultats</h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>Outil de gestion adapté à son activité.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>Gain mesuré de 3 jours / mois pour la facturation.</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>
                    Economies estimées de 40kCHF annuel sur ses frais de change.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
