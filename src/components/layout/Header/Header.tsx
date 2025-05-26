import React from 'react';
import styles from './Header.module.scss';
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher';
import Logo from '../../common/Logo';
import BurgerMenu from './BurgerMenu';

import Navigation from '../Navigation';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('common.logo');

  return (
    <header className={styles.header}>
      <div className={styles.headerRibbon}>
        <div className={styles.logoContainer}>
          <Link className={styles.logoLink} href="/" aria-label="SSC Logo">
            <Logo variant="headerLogo" />
          </Link>
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
