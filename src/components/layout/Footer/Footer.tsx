import React from 'react';
import styles from './Footer.module.scss';
import { barlow } from '@/styles/font';
import Navigation from '@/components/layout/Navigation';
import Logo from '@/components/common/Logo';
import { SocialIcon } from '@/components/common/SocialIcon';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
  const t = useTranslations('common.footer');
  const tSocial = useTranslations('common.socialsIcons');

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
      aria-labelledby="footer-thanks"
    >
      <section className={styles.thanksSection}>
        <div className={styles.contentContainer}>
          <span className={styles.separator} aria-hidden="true"></span>
          <div className={styles.thanksMessageContainer}>
            <h3
              id="footer-thanks"
              className={`${styles.thanksMessage} ${barlow.className}`}
            >
              {t('thanksMessage')}
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
        <Link className={styles.logoLink} href={'/'} aria-label="SSC Logo">
          <Logo variant="footerLogo" />
        </Link>

        <div className={styles.navigationContainer}>
          <Navigation variant="footerNav" />

          <div className={styles.socialItemsContainer}>
            <SocialIcon
              type="location"
              href="https://example.com/location"
              variant="footer" // nouvelle variante pour le Footer
              ariaLabel={tSocial('locationAria')}
            />
            <SocialIcon
              type="email"
              href="mailto:contact@example.com"
              variant="footer"
              ariaLabel={tSocial('emailAria')}
            />
            <SocialIcon
              type="whatsapp"
              href="https://wa.me/123456789"
              variant="footer"
              ariaLabel={tSocial('whatsappAria')}
            />
            <SocialIcon
              type="linkedin"
              href="https://linkedin.com/company/your-company"
              variant="footer"
              ariaLabel={tSocial('linkedinAria')}
            />
          </div>
        </div>

        <small className={styles.credit}>
          {t('credit')}{' '}
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
