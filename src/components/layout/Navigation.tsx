import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from '@/navigation';

interface NavigationProps {
  variant: 'footerNav' | 'headerMobileNav' | 'headerNav';
  onLinkClick?: () => void; // Exécute l'action de fermer le panneau déroulant du burger apres avoir cliqué sur un lien.
}

export default function Navigation({ variant, onLinkClick }: NavigationProps) {
  return (
    <nav
      className={`${styles.navigation} ${styles[variant]}`}
      aria-label="Navigation principale"
    >
      <ul className={styles.navList}>
        {/*---------- HOME ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href="/"
            title="Learn more about us"
            onClick={onLinkClick}
          >
            Accueil
          </Link>
        </li>

        {/*---------- ABOUT ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={{ pathname: '/', hash: 'about' }}
            onClick={onLinkClick}
          >
            A propos
          </Link>
        </li>

        {/*---------- PARCOURS ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={'/parcours'}
            title="Learn more about us"
            onClick={onLinkClick}
          >
            Mon Parcours
          </Link>
        </li>

        {/*---------- SERVICES ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={{ pathname: '/', hash: 'services' }}
            title="Learn more about us"
            onClick={onLinkClick}
          >
            Mes services
          </Link>
        </li>

        {/*---------- REALISATIONS ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={'/realisations'}
            title="Learn more about us"
            onClick={onLinkClick}
          >
            Mes réalisations
          </Link>
        </li>

        {/*---------- CONTACT ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={{ pathname: '/', hash: 'contact' }}
            title="Learn more about us"
            onClick={onLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
