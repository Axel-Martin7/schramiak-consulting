import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../../public/ssc-logo.svg';
import logo2 from '../../../public/ssc-logo2.svg';
import { barlow } from '@/styles/font';
import Navigation from './Navigation';
import Logo from '../common/Logo';
import { SocialIcon } from '../common/SocialIcon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.thanksSection}>
        <div className={styles.contentContainer}>
          <span className={styles.separator}></span>
          <div className={styles.thanksMessageContainer}>
            <h3 className={`${styles.thanksMessage} ${barlow.className}`}>
              Merci de votre visite !
            </h3>
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

      {/* <section className={styles.carvedSection}>
      
        <Logo variant="footerLogo" />

        <div className={styles.navContainer}>
        

          <div className={styles.navComponent}>
            <Navigation variant="footerNav" />
          </div>

          <div className={styles.social}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </div>

        <p className={styles.small}>Developped by Axel Martin</p>
      </section> */}

      <section className={styles.carvedSection}>
        <Logo variant="footerLogo" />

        <Navigation variant="footerNav" />

        {/* <div className={styles.social}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div> */}
        <div className={styles.social}>
          <SocialIcon
            type="location"
            href="https://example.com/location"
            variant="footer" // nouvelle variante pour le Footer
            ariaLabel="View location"
          />
          <SocialIcon
            type="email"
            href="mailto:contact@example.com"
            variant="footer"
            ariaLabel="Send an email"
          />
          <SocialIcon
            type="whatsapp"
            href="https://wa.me/123456789"
            variant="footer"
            ariaLabel="Chat on WhatsApp"
          />
          <SocialIcon
            type="linkedin"
            href="https://linkedin.com/company/your-company"
            variant="footer"
            ariaLabel="Visit LinkedIn"
          />
        </div>

        <p className={styles.small}>Developped by Axel Martin</p>
      </section>
    </footer>
  );
}
