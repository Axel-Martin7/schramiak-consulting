'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Realisations.module.scss';

/*-------------------------------*
//* TYPES ET INTERFACES
*-------------------------------*/
interface StatItem {
  count: number; //                                                Valeur finale à atteindre
  suffix: string; //                                               Suffixe à afficher apres la valeur (ex: '+', '%')
  label: string; //                                                Description sous le nombre
}

//--------------------- Etend React.CSSProperties pour autoriser les variables CSS personnalisées (--target) :
interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

/*-------------------------------*
//* COMPOSANT StatsCounter
*   Gére l'animation au scroll via IntersectionObserver
*-------------------------------*/
export default function StatsCounter() {
  //--------------------- Données à afficher dans chaque cercle :
  const stats: StatItem[] = [
    { count: 10, suffix: '+', label: "D'années d'expérience" },
    { count: 12, suffix: '+', label: 'Projets accompagnés' },
    { count: 5, suffix: '+', label: 'Entreprises créées' },
    { count: 100, suffix: '%', label: 'De clients satisfaits' },
  ];

  //--------------------- Référence vers le container des cercles :
  const containerRef = useRef<HTMLDivElement>(null);

  /*-------------------------------*
  //* USE EFFECT : IntersectionObserver
  *   Déclenchement de l'animation quand la grille atteint 50% de visibilité dans le viewport
  *-------------------------------*/
  useEffect(() => {
    const element = containerRef.current; //                          DOM node observé
    if (!element) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //                                                        Ajoute la classe CSS locale 'inView' pour déclencher countUp
            element.classList.add(styles.inView);
            io.unobserve(element); //                                 On arrête d'observer après le premier trigger
          }
        });
      },
      { threshold: 0.25 } //                                           50% visible pour déclencher
    );

    io.observe(element);
    return () => io.disconnect();
  }, []);

  /*-------------------------------*
  //* RENDU JSX
  *-------------------------------*/
  return (
    <div ref={containerRef} className={styles.shapesContainer}>
      {stats.map((item, i) => (
        <div className={styles.object} key={i}>
          <div className={styles.coloredHalfCircle} />

          {/* Cercle de contenu : on injecte --target pour Houdini */}
          <div
            className={styles.contentCircle}
            style={{ '--target': item.count } as React.CSSProperties}
          >
            <p className={styles.number} data-suffix={item.suffix}></p>
            <p className={styles.text}>{item.label}</p>
          </div>

          {/* Effet miroir / reflet */}
          <div className={styles.objectReflection}>
            <div className={styles.contentCircleReflection} />
          </div>
        </div>
      ))}
    </div>
  );
}
