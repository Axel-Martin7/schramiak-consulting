'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Realisations.module.scss';
import { useTranslations } from 'next-intl';

/*-------------------------------*
//* TYPES ET INTERFACES
*-------------------------------*/
interface StatItem {
  count: number; //                                                Valeur finale à atteindre
  suffix: string; //                                               Suffixe à afficher apres la valeur (ex: '+', '%')
  label: string; //                                                Description sous le nombre
}

/*-------------------------------*
//* COMPOSANT StatsCounter
*   Gére l'animation au scroll via IntersectionObserver
*-------------------------------*/
export default function StatsCounter() {
  const t = useTranslations('pages.home.realisations');

  const counts = [10, 12, 5, 100];
  const suffixes = ['+', '+', '+', '%'];

  // On lit chaque label individuellement
  const stats: StatItem[] = counts.map((count, i) => ({
    count,
    suffix: suffixes[i],
    label: t(`statsLabels.${i}`), // ex. 'statsLabels.0'
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.inView);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /*-------------------------------*
  //* RENDU JSX
  *-------------------------------*/
  return (
    <div ref={containerRef} className={styles.shapesContainer}>
      {stats.map(({ count, suffix, label }, i) => (
        <div className={styles.object} key={i}>
          <div className={styles.coloredHalfCircle} aria-hidden="true" />

          {/* Cercle de contenu : on injecte --target pour Houdini */}
          <div
            className={styles.contentCircle}
            style={{ '--target': count } as React.CSSProperties}
            role="group"
            aria-labelledby={`stat-label-${i}`}
          >
            <p className={styles.number} data-suffix={suffix} />
            <p id={`stat-label-${i}`} className={styles.text}>
              {label}
            </p>
          </div>

          {/* Effet miroir / reflet */}
          <div className={styles.objectReflection} aria-hidden="true">
            <div className={styles.contentCircleReflection} />
          </div>
        </div>
      ))}
    </div>
  );
}
