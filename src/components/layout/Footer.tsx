import React from 'react';
import styles from './Footer.module.scss';
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

      <section className={styles.carvedSection}>
        <Logo variant="footerLogo" width={96} height={96} />

        <div className={styles.navigationContainer}>
          <Navigation variant="footerNav" />

          <div className={styles.socialItemsContainer}>
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
        </div>

        <small className={styles.credit}>
          Développé par{' '}
          <a
            href="https://axel-martin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            Axel Martin
          </a>
        </small>
      </section>
    </footer>
  );
}
