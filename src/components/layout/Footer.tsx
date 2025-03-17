import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../../public/ssc-logo.svg';
import { barlow } from '@/styles/font';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.thanksSection}>
        <div className={styles.contentContainer}>
          <span className={styles.separator}></span>
          <div className={styles.thanksMessageContainer}>
            <h3 className={styles.thanksMessage}>Merci de votre visite !</h3>
            <p className={styles.signature}>S.Schramiak</p>
          </div>
        </div>

        {/*---------- Layouts -----------*/}
        <div className={styles.lowerLayoutWrapper}>
          <div className={styles.lowerLayout}></div>
        </div>

        <div className={styles.upperLayoutWrapper}>
          <div className={styles.upperLayout}></div>
        </div>
      </section>

      <section className={styles.carvedSection}>
        <div className={styles.logoContainer}></div>
      </section>
    </footer>
  );
}
