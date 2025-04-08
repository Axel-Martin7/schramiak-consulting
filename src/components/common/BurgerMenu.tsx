'use client';

import React, { useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { createPortal } from 'react-dom';
import Navigation from '../layout/Navigation';

export default function BurgerMenu() {
  const [pressed, setPressed] = useState(false); //              Pour l'effet visuel "pressé" sur le bouton.
  const [isOpen, setIsOpen] = useState(false); //                Pour savoir si le menu est ouvert-
  const [isMounted, setIsMounted] = useState(false); //          Pour s'assurer que le code s'exécute coté client.

  /*-------------------------------*
  //* EFFET POUR CONFIRMER LE MONTAGE COTE CLIENT
  *-------------------------------*/
  useEffect(() => {
    setIsMounted(true);
  }, []);

  /*-------------------------------*
  //* GESTION DU SCROLL GLOBAL 
  // Désactive le scroll du body quand le menu est ouvert
  *-------------------------------*/
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  /*-------------------------------*
  //* GESTION DU CLIC SUR LE BOUTON DU MENU BURGER
  // Applique un effet "pressé" et alterne l'état d'ouverture
  *-------------------------------*/
  const handleClick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
      setIsOpen((prev) => !prev);
    }, 200);
  };

  /*-------------------------------*
  //* RENDU DU COMPOSANT
  //- Bouton burger
  //- Panneau déroulant via un portal (uniquement coté client)
  *-------------------------------*/
  return (
    <>
      <div className={styles.burgerContainer}>
        <button
          className={`${styles.burgerButton} ${pressed ? styles.pressed : ''}`}
          onClick={handleClick}
        >
          <div
            className={`${styles.burgerLinesContainer} ${
              isOpen ? styles.open : ''
            }`}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
      </div>

      {/*---------- Rendu du panneau déroulant via un portal ----------*/}
      {isMounted &&
        createPortal(
          <div
            className={`${styles.dropdownPanel} ${isOpen ? styles.open : ''}`}
          >
            <Navigation variant="headerMobileNav" />

            <div className={styles.socialContainer}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
