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

export default function JourneyPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('AboutPage');

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className={`${styles.pageTitle} ${barlow.className}`}>
          Mon <span className={styles.highlight}> Parcours </span>
        </h1>

        <div className={styles.decorativeCirclesContainer}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
      </header>

      <section className={styles.cardsSection}>
        <div className={styles.diagonalBand}></div>
        <div className={styles.card}></div>

        <div className={styles.card}></div>

        <div className={styles.card}></div>

        <div className={styles.card}></div>

        <div className={styles.card}></div>

        <div className={styles.card}></div>
      </section>
    </main>
  );
}
