'use client';

import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  // Déclare un etat pour gérer l'ouverture/fermeture du menu burger. (false est la valeur initiale et isActive détermine si le buger est ouvert ou fermé)
  const [isActive, setIsActive] = useState(false);

  // Fonction qui inverse l'état 'isActive' -> Si le menu est fermé (isActive = false) il s'ouvre et vice-versa
  const toggleActive = () => {
    setIsActive(!isActive); // Met à jour l'état avec la valeur opposée de `isActive`
  };

  return (
    <>
      <button
        className={`${styles.buttonContainer} ${isActive ? styles.active : ''}`}
        onClick={toggleActive}
        aria-expanded={isActive} // Indique l'état du menu (ouvert/fermé)
        aria-controls="burger-menu" // Lie le bouton au panneau du menu
        aria-label="Toggle menu" // Description de l'action du bouton
        role="button" // Rôle explicitement défini
      >
        <div className={`${styles.burger} ${isActive ? styles.open : ''}`}>
          <div className={`${styles['burger-line']} ${styles.line1}`}></div>
          <div className={`${styles['burger-line']} ${styles.line2}`}></div>
          <div className={`${styles['burger-line']} ${styles.line3}`}></div>
        </div>
      </button>

      <div className={`${styles.menuPanel} ${isActive ? styles.open : ''}`}>
        <div className={styles.menuContent}>
          <p>Bonjour panneau</p>
        </div>
      </div>
    </>
  );
}
