'use client';

import React, { useEffect, useRef, useState } from 'react';
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
*   Gére l'animation au scroll via IntersectionObserver et l'incrément des compteurs en JS :
*-------------------------------*/
export default function StatsCounter() {
  const t = useTranslations('pages.home.realisations');

  const counts = [10, 12, 5, 100];
  const suffixes = ['+', '+', '+', '%'];

  // On lit chaque label individuellement
  const stats: StatItem[] = counts.map((count, i) => ({
    count,
    suffix: suffixes[i],
    label: t(`statsLabels.${i}`),
  }));

  // États pour les valeurs affichées
  const [displayCounts, setDisplayCounts] = useState<number[]>(
    counts.map(() => 0)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Observer pour déclencher l'animation au scoll :
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Pour chaque stat, on lance un setInterval JS
          stats.forEach((stat, i) => {
            const duration = 1800;
            const stepTime = Math.max(30, Math.floor(duration / stat.count));
            let current = 0;
            const timer = setInterval(() => {
              current += 1;
              setDisplayCounts((prev) => {
                const next = [...prev];
                next[i] = current;
                return next;
              });
              if (current >= stat.count) clearInterval(timer);
            }, stepTime);
          });

          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [stats]);

  /*-------------------------------*
  //* RENDU JSX
  *-------------------------------*/
  return (
    <div ref={containerRef} className={styles.shapesContainer}>
      {stats.map(({ suffix, label }, i) => (
        <div className={styles.object} key={i}>
          <div className={styles.coloredHalfCircle} aria-hidden="true" />

          {/* Cercle de contenu : on affiche JS count + suffix */}
          <div
            className={styles.contentCircle}
            role="group"
            aria-labelledby={`stat-label-${i}`}
          >
            <p className={styles.number}>
              {displayCounts[i]}
              <span className={styles.suffix}>{suffix}</span>
            </p>

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
