import React from 'react';
import styles from './Header.module.scss';
import { Link } from '@/navigation';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../Header/BurgerMenu/BurgerMenu';
import LocaleSwitcher from '../Header/LocaleSwitcher/LocaleSwitcher';

export default function Header() {
  return (
    // <header className={styles.header}>
    //   <div className={styles.logoBtnContainer}>
    //     <Link href={'/'}>
    //       <p>Logo Home</p>
    //     </Link>
    //   </div>

    //   {/* Navbar desktop visible uniquement sur les grands écrans */}
    //   <nav className={styles.navbarDesktop}>
    //     <Navigation />
    //   </nav>

    //   {/* Burger Menu visible uniquement sur mobile */}
    //   <div className={styles.burgerMenuContainer}>
    //     <BurgerMenu />
    //   </div>

    //   <div className={styles.languageSwitcherContainer}>
    //     <LocaleSwitcher />
    //   </div>
    // </header>

    <header className={styles.header}>
      <div className={styles.headerContentContainer}>
        <section className={styles.logoBtnContainer}>
          <Link href={'/'}>
            <p>Logo Home</p>
          </Link>
        </section>

        {/* Burger Menu visible uniquement sur mobile */}
        <section className={styles.burgerMenuMobile}>
          <BurgerMenu />
        </section>

        {/* Navbar desktop visible uniquement sur les grands écrans */}
        <section className={styles.navBarDesktop}>
          <Navigation />
        </section>

        <section className={styles.languageSwitcherContainer}>
          <LocaleSwitcher />
        </section>
      </div>
    </header>
  );
}
