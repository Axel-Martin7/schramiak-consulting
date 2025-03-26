import React from 'react';
import styles from './Logo.module.scss';
import Image from 'next/image';
import logo2 from '../../../public/ssc-logo.svg';

interface LogoProps {
  variant: 'footerLogo' | 'headerLogo';
}

export default function Logo({ variant }: LogoProps) {
  return (
    <div className={`${styles.logoContainer} ${styles[variant]}`}>
      <Image
        className={styles.logo}
        alt="Schramiak consulting logo"
        src={logo2}
        width={96}
        height={96}
      ></Image>

      <small className={styles.logoCaption}>Consulting</small>
    </div>
  );
}
