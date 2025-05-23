'use client';

import React, { useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';
import { SocialIcon } from '../../common/SocialIcon';
import iconStyles from '@/components/common/SocialIcon.module.scss';
import { useTranslations } from 'next-intl';

export default function BurgerMenu() {
  const t = useTranslations('common.burgerMenu');
  const tSocial = useTranslations('common.socialsIcons');
  const [isMenuOpen, setIsMenuOpen] = useState(false); //           State qui détermine si le menu est ouvert ou fermé.

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

  const buttonLabel = isMenuOpen ? t('closeLabel') : t('openLabel');

  return (
    <>
      <div className={styles.burgerContainer}>
        <button
          className={styles.burgerButton}
          onClick={toggleMenu}
          aria-label={buttonLabel}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
        >
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
      <DropdownPanel
        isOpen={isMenuOpen}
        onLinkClick={closeMenu}
        panelLabel={t('panelLabel')}
        tSocial={tSocial}
      />
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
  panelLabel: string;
  tSocial: ReturnType<typeof useTranslations>;
}

function DropdownPanel({
  isOpen,
  onLinkClick,
  panelLabel,
  tSocial,
}: DropdownPanelProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Rendu indentique initialement (serveur et client) : rien n'est affiché
  }

  return ReactDOM.createPortal(
    <div
      id="mobile-nav-panel"
      className={`${styles.dropdownPanel} ${isOpen ? styles.open : ''}`}
      role="region" // Regroupe le panneau (pas de <nav> imbriqué)
      aria-label={panelLabel} // Bonne pratique ARIA
      aria-hidden={!isOpen} // Cache le panneau des AT quand fermé
      tabIndex={isOpen ? 0 : -1} // Rend focusable quand ouvert
      onKeyDown={(e) => e.key === 'Escape' && onLinkClick()} // ESC ferme le menu
    >
      {/* Le composant Navigation recoit la prop onLinkClick qui ferme le panneau dès qu'un lien est cliqué */}
      <Navigation variant="headerMobileNav" onLinkClick={onLinkClick} />

      <div className={styles.socialContainer}>
        <SocialIcon
          type="linkedin"
          href="https://linkedin.com/company/your-company"
          variant="default"
          ariaLabel={tSocial('linkedinAria')}
          className={iconStyles.itemOnPanel}
        />

        <SocialIcon
          type="location"
          href="https://example.com/location"
          variant="default"
          ariaLabel={tSocial('locationAria')}
          className={iconStyles.itemOnPanel}
        />
        <SocialIcon
          type="email"
          href="mailto:contact@example.com"
          variant="default"
          ariaLabel={tSocial('emailAria')}
          className={iconStyles.itemOnPanel}
        />
        <SocialIcon
          type="whatsapp"
          href="https://wa.me/123456789"
          variant="default"
          ariaLabel={tSocial('whatsappAria')}
          className={iconStyles.itemOnPanel}
        />
      </div>
    </div>,
    document.body
  );
}
