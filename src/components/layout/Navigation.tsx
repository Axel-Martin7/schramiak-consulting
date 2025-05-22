import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

interface NavigationProps {
  variant: 'footerNav' | 'headerMobileNav' | 'headerNav';
  onLinkClick?: () => void; // Exécute l'action de fermer le panneau déroulant du burger apres avoir cliqué sur un lien.
}

export default function Navigation({ variant, onLinkClick }: NavigationProps) {
  const t = useTranslations('common.navigation');
  const ariaLabel = t('ariaLabel');

  // const ariaLabel =
  //   variant === 'footerNav'
  //     ? 'Navigation du pied de page'
  //     : variant === 'headerMobileNav'
  //     ? 'Navigation mobile principale'
  //     : 'Navigation principale';

  return (
    <nav
      className={`${styles.navigation} ${styles[variant]}`}
      role="navigation"
      aria-label={ariaLabel}
    >
      <ul className={styles.navList}>
        {/*---------- HOME ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href="/"
            title={t('links.home.title')}
            onClick={onLinkClick}
          >
            {t('links.home.label')}
          </Link>
        </li>

        {/*---------- ABOUT ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={{ pathname: '/', hash: 'about' }}
            title={t('links.about.title')}
            onClick={onLinkClick}
          >
            {t('links.about.label')}
          </Link>
        </li>

        {/*---------- PARCOURS ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href="/parcours"
            title={t('links.journey.title')}
            onClick={onLinkClick}
          >
            {t('links.journey.label')}
          </Link>
        </li>

        {/*---------- SERVICES ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={{ pathname: '/', hash: 'services' }}
            title={t('links.services.title')}
            onClick={onLinkClick}
          >
            {t('links.services.label')}
          </Link>
        </li>

        {/*---------- REALISATIONS ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href="/realisations"
            title={t('links.realisations.title')}
            onClick={onLinkClick}
          >
            {t('links.realisations.label')}
          </Link>
        </li>

        {/*---------- CONTACT ----------*/}
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            href={{ pathname: '/', hash: 'contact' }}
            title={t('links.contact.title')}
            onClick={onLinkClick}
          >
            {t('links.contact.label')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
