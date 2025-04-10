'use client';

import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import ReactDOM from 'react-dom';
import Navigation from '../layout/Navigation';
import { SocialIcon } from './SocialIcon';

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State qui détermine si le menu est ouvert ou fermé.

  /*--------------------------------------------------
  //* FONCTION QUI OUVRE OU FERME LE PANNEAU EN INVERSANT L'ETAT ACTUEL
  --------------------------------------------------*/
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /*--------------------------------------------------
  //* FONCTION QUI FERME LE MENU APRES AVOIR CLIQUE SUR UN LIEN DE NAVIGATION
  --------------------------------------------------*/
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.burgerContainer}>
        <button className={styles.burgerButton} onClick={toggleMenu}>
          <div
            className={`${styles.burgerLinesContainer} ${
              isMenuOpen ? styles.open : ''
            }`}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
      </div>

      {/*----------- RENDU DU PANNEAU DEROULANT VIA UN PORTAIL REACT ------------*/}
      <DropdownPanel isOpen={isMenuOpen} onLinkClick={closeMenu} />
    </>
  );
}

/*--------------------------------------------------
  //* COMPOSANT DROPDOWNPANEL :
  - Est rendu en dehors du Header grace a un portal (ReactDOM.createPortal)
  - Contient le composant Navigation pour afficher les liens.
  --------------------------------------------------*/
interface DropdownPanelProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

function DropdownPanel({ isOpen, onLinkClick }: DropdownPanelProps) {
  return ReactDOM.createPortal(
    <div className={`${styles.dropdownPanel} ${isOpen ? styles.open : ''}`}>
      {/* Le composant Navigation recoit la prop onLinkClick qui ferme le panneau dès qu'un lien est cliqué */}
      <Navigation variant="headerMobileNav" onLinkClick={onLinkClick} />

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
  );
}
