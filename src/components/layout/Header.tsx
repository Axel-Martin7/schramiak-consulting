import React from 'react';
import styles from './Header.module.scss';
import LocaleSwitcher from '../common/LocaleSwitcher/LocaleSwitcher';
import Logo from '../common/Logo';
import BurgerMenu from '../common/BurgerMenu';

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
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
        </div>

        <div className={styles.switcherContainer}>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
