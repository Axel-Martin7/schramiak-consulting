import { Link } from '@/navigation';
import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.homeBtnContainer}>
        <p>Home</p>
      </Link>
      <LocaleSwitcher />
    </header>
  );
}
