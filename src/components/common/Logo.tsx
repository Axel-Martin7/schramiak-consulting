import React from 'react';
import styles from './Logo.module.scss';
import Image from 'next/image';
import logo2 from '../../../public/ssc-logo2.svg';

interface LogoProps {
  variant: 'footerLogo' | 'headerLogo';
}

export default function Logo({ variant }: LogoProps) {
  return (
    <div className={`${styles.logoContainer} ${styles[variant]}`}>
      <Image
        className={styles.logo2}
        alt="Schramiak consulting logo"
        src={logo2}
        width={80}
        height={80}
      ></Image>

      <small className={styles.logoCaption}>Consulting</small>
    </div>
  );
}
