'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.scss';

export default function ScrollIndicator() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      /*    Si l’utilisateur scrolle de plus de 0 pixels,
       on masque l’indicateur (showScrollIndicator = false)   */
      if (window.scrollY > 0) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    // Ajout du listener
    window.addEventListener('scroll', handleScroll);
    // Nettoyage du listener au démontage
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showScrollIndicator) return null;

  return (
    <div className={styles.scrollIndicator}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
