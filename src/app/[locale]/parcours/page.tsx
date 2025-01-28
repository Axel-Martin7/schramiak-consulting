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
    </main>
  );
}
