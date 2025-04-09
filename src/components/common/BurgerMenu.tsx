'use client';

import React, { useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { createPortal } from 'react-dom';
import Navigation from '../layout/Navigation';
import { SocialIcon } from './SocialIcon';

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
  //* FERMETURE DU MENU LORS D'UN CLIC SUR UN LIEN
  // Cette fonction sera transmise au composant Navigation
  *-------------------------------*/
  const handleLinkClick = () => {
    setIsOpen(false);
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
            <Navigation
              variant="headerMobileNav"
              onLinkClick={handleLinkClick}
            />

            <div className={styles.socialContainer}>
              <SocialIcon
                type="linkedin"
                href="https://linkedin.com/company/your-company"
                variant="default"
                ariaLabel="Visit LinkedIn"
              />

              <SocialIcon
                type="location"
                href="https://example.com/location"
                variant="default"
                ariaLabel="View location"
              />
              <SocialIcon
                type="email"
                href="mailto:contact@example.com"
                variant="default"
                ariaLabel="Send an email"
              />
              <SocialIcon
                type="whatsapp"
                href="https://wa.me/123456789"
                variant="default"
                ariaLabel="Chat on WhatsApp"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
