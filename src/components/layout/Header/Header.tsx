import React from 'react';
import styles from './Header.module.scss';
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher';
import Logo from '../../common/Logo';
import BurgerMenu from './BurgerMenu';

import Navigation from '../Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRibbon}>
        <div className={styles.logoContainer}>
          <Logo variant="headerLogo" />
        </div>

        <BurgerMenu />

        <div className={styles.navigationContainer}>
          <Navigation variant="headerNav" />
        </div>

        <div className={styles.switcherContainer}>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
