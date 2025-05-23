import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';
import styles from './page.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import timeclock from '../../../../public/icons/timeclock.svg';
import lightBulb from '../../../../public/icons/lightbulb.svg';
import check from '../../../../public/icons/check.svg';

type Props = {
  params: { locale: string };
};

export default function RealisationsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('pages.realisations');

  return (
    <main className={styles.main} role="main">
      <header
        className={styles.pageHeader}
        role="banner"
        aria-labelledby="realisations-title"
      >
        <h1
          id="realisations-title"
          className={`${styles.pageTitle} ${barlow.className}`}
        >
          {t('title-small-word')}{' '}
          <strong className={styles.highlight}>
            {t('title-highlight-word')}
          </strong>
        </h1>

        <div className={styles.coloredBubblesContainer} aria-hidden="true">
          <span className={styles.bubble1}></span>
          <span className={styles.bubble2}></span>
          <span className={styles.bubble3}></span>
          <span className={styles.bubble4}></span>
        </div>
      </header>

      <section
        className={styles.realisationsSection}
        role="region"
        aria-labelledby="realisations-title"
      >
        {/*---------- Groupement International Automobile ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.mobileSeparator} aria-hidden="true"></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}>
              Groupement International Automobile
            </h2>
          </div>

          <div className={styles.projectDescriptionCard}>
            <div className={styles.insideFrame}>
              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  {t('project-1-description-1')}
                </p>
                <p className={styles.description}>
                  {t('project-1-description-2')}
                </p>
                <p className={styles.description}>
                  {t('project-1-description-3')}
                </p>
                <p className={styles.description}>
                  {t('project-1-description-4')}
                </p>
              </div>
            </div>
          </div>

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('time-icon-alt')}
                  src={timeclock}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-1-time-item-title')}
              </h3>
              <p className={styles.itemDescription}>
                {t('project-1-time-item-description')}
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('role-icon-alt')}
                  src={lightBulb}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-1-role-item-title')}
              </h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>{t('project-1-role-item-description-1')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-1-role-item-description-2')}</p>
                </li>
              </ul>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('results-icon-alt')}
                  src={check}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-1-results-item-title')}
              </h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>{t('project-1-results-item-description-1')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-1-results-item-description-2')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-1-results-item-description-3')}</p>
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
            <div className={styles.insideFrame}>
              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  {t('project-2-description-1')}
                </p>
                <p className={styles.description}>
                  {t('project-2-description-2')}
                </p>
                <p className={styles.description}>
                  {t('project-2-description-3')}
                </p>
              </div>
            </div>
          </div>

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('time-icon-alt')}
                  src={timeclock}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-2-time-item-title')}
              </h3>
              <p className={styles.itemDescription}>
                {t('project-2-time-item-description')}
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('role-icon-alt')}
                  src={lightBulb}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-2-role-item-title')}
              </h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p> {t('project-2-role-item-description-1')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p> {t('project-2-role-item-description-2')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p> {t('project-2-role-item-description-3')}</p>
                </li>
              </ul>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('results-icon-alt')}
                  src={check}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-2-results-item-title')}
              </h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>{t('project-2-results-item-description-1')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-2-results-item-description-2')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-2-results-item-description-3')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-2-results-item-description-4')}</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>

        {/*---------- Sous-traitant horloger ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.mobileSeparator}></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}> {t('project-3-title')}</h2>
          </div>

          <div className={styles.projectDescriptionCard}>
            <div className={styles.insideFrame}>
              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  {t('project-3-description-1')}
                </p>
                <p className={styles.description}>
                  {t('project-3-description-2')}
                </p>
                <p className={styles.description}>
                  {t('project-3-description-3')}
                </p>
              </div>
            </div>
          </div>

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('time-icon-alt')}
                  src={timeclock}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-3-time-item-title')}
              </h3>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('role-icon-alt')}
                  src={lightBulb}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-3-role-item-title')}
              </h3>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('results-icon-alt')}
                  src={check}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-3-results-item-title')}
              </h3>
            </li>
          </ul>
        </article>

        {/*---------- Transport de matériaux ----------*/}
        <article className={styles.projectContainer}>
          <div className={styles.mobileSeparator}></div>

          <div className={styles.projectTitleCard}>
            <h2 className={styles.projectName}> {t('project-4-title')}</h2>
          </div>

          <div className={styles.projectDescriptionCard}>
            <div className={styles.insideFrame}>
              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  {t('project-4-description-1')}
                </p>
                <p className={styles.description}>
                  {t('project-4-description-2')}
                </p>
              </div>
            </div>
          </div>

          <ul className={styles.projectResultsItemsList}>
            {/*----- Time -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('time-icon-alt')}
                  src={timeclock}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {' '}
                {t('project-4-time-item-title')}
              </h3>
              <p className={styles.itemDescription}>
                {t('project-4-time-item-description')}
              </p>
            </li>
            {/*----- Role -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('role-icon-alt')}
                  src={lightBulb}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-4-role-item-title')}
              </h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p>{t('project-4-role-item-description-1')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p>{t('project-4-role-item-description-2')}</p>
                </li>
              </ul>
            </li>
            {/*----- Résults -----*/}
            <li className={styles.itemCard}>
              <div className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  alt={t('results-icon-alt')}
                  src={check}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className={styles.itemTitle}>
                {t('project-4-results-item-title')}
              </h3>
              <ul className={styles.itemDescriptionList}>
                <li className={styles.itemDescription}>
                  <p> {t('project-4-results-item-description-1')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p> {t('project-4-results-item-description-2')}</p>
                </li>
                <li className={styles.itemDescription}>
                  <p> {t('project-4-results-item-description-3')}</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
