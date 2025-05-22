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

  const t = useTranslations('pages.journey');

  return (
    <main className={styles.main} role="main">
      <header
        className={styles.pageHeader}
        role="banner"
        aria-labelledby="journey-title"
      >
        <h1
          id="journey-title"
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
        className={styles.cardsSection}
        role="region"
        aria-labelledby="journey-title"
      >
        {/*---------- Clim diffusion ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Clim diffusion</h2>
              <h3 className={styles.role}> {t('card1-role')}</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card1-description-1')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card1-description-2')}</p>
              </li>
            </ul>
          </div>

          <time className={styles.cardDate} dateTime="2011">
            2011
          </time>
        </article>

        {/*---------- Master ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>
                <strong className={styles.strong}>
                  {t('card2-title-word-1')}{' '}
                </strong>
                <span className={styles.line}>{t('card2-title-word-2')} </span>
                {t('card2-title-word-3')}
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
              <h3 className={styles.role}>{t('card3-role')}</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card3-description-1')}</p>
              </li>
            </ul>
          </div>

          <time className={styles.cardDate} dateTime="2015">
            2015
          </time>
        </article>

        {/*---------- Vinci Construction ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Vinci construction</h2>
              <h3 className={styles.role}>{t('card4-role')}</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card4-description-1')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card4-description-2')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card4-description-3')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card4-description-4')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card4-description-5')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card4-description-6')}</p>
              </li>
            </ul>
          </div>

          <time className={styles.cardDate} dateTime="2017">
            2017
          </time>
        </article>

        {/*---------- Nexus Automotive ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>Nexus automotive</h2>
              <h3 className={styles.role}>{t('card5-role')}</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card5-description-1')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card5-description-2')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card5-description-3')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card5-description-4')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card5-description-5')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card5-description-6')}</p>
              </li>
            </ul>
          </div>

          <time className={styles.cardDate} dateTime="2019">
            2019
          </time>
        </article>

        {/*---------- Consultant indépendant ----------*/}
        <article className={styles.card}>
          <div className={styles.cardInfosContainer}>
            <div className={styles.titlesContainer}>
              <h2 className={styles.cardName}>{t('card6-title')}</h2>
              <h3 className={styles.role}>{t('card6-role')}</h3>
            </div>

            <ul className={styles.cardDescriptionsList}>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card6-description-1')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card6-description-2')}</p>
              </li>
              <li className={styles.description}>
                <span className={styles.bubble} aria-hidden="true"></span>
                <p>{t('card6-description-3')}</p>
              </li>
            </ul>
          </div>

          <time className={styles.cardDate} dateTime="2023">
            2023
          </time>
        </article>

        <div className={styles.carvedArrow} aria-hidden="true"></div>
      </section>
    </main>
  );
}
