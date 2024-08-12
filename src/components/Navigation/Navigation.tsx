import React from 'react';
import { Link } from '@/navigation';
import styles from './Navigation.module.scss';

type NavigationProps = {
  orientation?: 'horizontal' | 'vertical';
};

export default function Navigation() {
  console.log('ServerComponent');
  return (
    <nav className={styles.navbarContainer} aria-label="Main navigation">
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={'/about'} title="Learn more about us">
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href={'/about'} title="Learn more about us">
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href={'/about'} title="Learn more about us">
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href={'/about'} title="Learn more about us">
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href={'/about'} title="Learn more about us">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
