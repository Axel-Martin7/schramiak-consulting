import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from '@/navigation';

interface NavigationProps {
  variant: 'footerNav' | 'headerMobileNav' | 'headerNav';
}

export default function Navigation({ variant }: NavigationProps) {
  return (
    <nav
      className={`${styles.navigation} ${styles[variant]}`}
      aria-label="Navigation principale"
    >
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Accueil</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/">A propos</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/">Mon Parcours</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/">Mes services</Link>
        </li>

        <li className={styles.navItem}>
          <Link href={'/realisations'} title="Learn more about us">
            Mes réalisations
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
