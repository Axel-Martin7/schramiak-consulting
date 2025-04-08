import React from 'react';
import styles from './Header.module.scss';
import LocaleSwitcher from '../common/LocaleSwitcher/LocaleSwitcher';
import Logo from '../common/Logo';
import BurgerMenu from '../common/BurgerMenu';

import Navigation from '../layout/Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRibbon}>
        <div className={styles.logoContainer}>
          <Logo variant="headerLogo" />
        </div>

        <div className={styles.burgerContainer}>
          <BurgerMenu />
        </div>

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
