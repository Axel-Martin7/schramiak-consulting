'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.scss';

export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   Si l’utilisateur scrolle de plus de 0 pixels, on masque l’indicateur
      if (window.scrollY > 0) {
        setHidden(true); // On ajoute la classe .hidden
      } else {
        setHidden(false); // On la retire si l’utilisateur revient tout en haut
      }
    };

    // Ajout du listener
    window.addEventListener('scroll', handleScroll);
    // Nettoyage du listener au démontage
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.scrollIndicator} ${hidden ? styles.hidden : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
