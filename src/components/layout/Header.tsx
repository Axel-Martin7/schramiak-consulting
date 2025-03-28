import React from 'react';
import styles from './Header.module.scss';
import { Link } from '@/navigation';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../Header/BurgerMenu/BurgerMenu';
import LocaleSwitcher from '../Header/LocaleSwitcher/LocaleSwitcher';
import Logo from '../common/Logo';

export default function Header() {
  return (
    //  <header className={styles.header}>
    //    <div className={styles.headerContentContainer}>
    //      <section className={styles.logoBtnContainer}>
    //        <Link href={'/'}>
    //          <p>Logo Home</p>
    //        </Link>
    //      </section>

    //      {/* Burger Menu visible uniquement sur mobile */}
    //      <section className={styles.burgerMenuMobile}>
    //        <BurgerMenu />
    //      </section>

    //      {/* Navbar desktop visible uniquement sur les grands écrans */}
    //      <section className={styles.navBarDesktop}>
    //        <Navigation />
    //      </section>

    //      <section className={styles.languageSwitcherContainer}>
    //        <LocaleSwitcher />
    //      </section>
    //    </div>
    //  </header>

    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}></div>
        </div>

        <div className={styles.burgerMenu}></div>

        <div className={styles.navigationContainer}>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>About</div>
        </div>

        <div className={styles.switcherContainer}>
          <div className={styles.switcher}></div>
        </div>
      </div>
    </header>
  );
}
