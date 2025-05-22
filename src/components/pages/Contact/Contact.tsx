import React from 'react';
import styles from './Contact.module.scss';
import { barlow } from '@/styles/font';
import { SocialIcon } from '@/components/common/SocialIcon';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('pages.home.contact');
  const tSocial = useTranslations('common.socialsIcons');

  return (
    <div
      className={styles.contactContainer}
      role="region"
      aria-labelledby="contact-section-title"
    >
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>
          {t('sectionTitle')}
        </h2>
        <div className={styles.titleSeparator} aria-hidden="true"></div>
      </div>

      <div className={styles.ribbon}>
        <div className={styles.ctaContainer}>
          <h2 className={`${styles.ctaTitle} ${barlow.className}`}>
            <strong className={styles.firstWord}>
              {' '}
              {t('title-first-word')}
            </strong>
            {t('title-small-word-1')}{' '}
            <strong className={styles.highlightWords}>
              {t('title-highlight-word-1')}
            </strong>
            <span className={styles.newLine}>
              {t('title-small-word-2')}{' '}
              <strong className={styles.highlightWords}>
                {t('title-highlight-word-2')}
              </strong>{' '}
              {t('title-small-word-3')}
            </span>
          </h2>

          <div className={styles.descriptions}>
            <p className={styles.description}>{t('description')}</p>
            <p className={styles.emphasis}>{t('emphasis')}</p>
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <ul className={styles.socialList}>
          {/*---------- Localisation : */}
          <li className={styles.item}>
            <SocialIcon
              type="location"
              href="https://www.google.com/maps/place/1208+Genève"
              variant="contact"
              ariaLabel={tSocial('locationAria')}
            />
            <a
              className={styles.contactInfoLink}
              href="https://www.google.com/maps/place/1208+Genève"
              aria-label={tSocial('locationAria')}
            >
              <span className={styles.contactLabel}>Localisation </span>
              <span className={styles.separator} aria-hidden="true"></span>
              <span className={styles.contactAdress}>
                {t('localisation-adress')}
              </span>
            </a>
          </li>
          {/*---------- E-mail : */}
          <li className={styles.item}>
            <SocialIcon
              type="email"
              href="mailto:contact@example.com"
              variant="contact"
              ariaLabel={tSocial('locationAria')}
            />
            <a
              className={styles.contactInfoLink}
              href="mailto:steven.schramiak@icloud.com"
              aria-label={tSocial('locationAria')}
            >
              <span className={styles.contactLabel}>E-mail</span>
              <span className={styles.separator} aria-hidden="true"></span>
              <span className={styles.contactAdress}>
                steven.schramiak@icloud.com
              </span>
            </a>
          </li>
          {/*---------- Linkedin : */}
          <li className={styles.item}>
            <SocialIcon
              type="linkedin"
              href="https://www.linkedin.com/in/steven-schramiak-2005/"
              variant="contact"
              ariaLabel={tSocial('locationAria')}
            />
            <a
              className={styles.contactInfoLink}
              href="https://www.linkedin.com/in/steven-schramiak-2005/"
              aria-label={tSocial('locationAria')}
            >
              <span className={styles.contactLabel}>Linkedin</span>
              <span className={styles.separator} aria-hidden="true"></span>
              <span className={styles.contactAdress}>
                steven-schramiak-2005
              </span>
            </a>
          </li>
          {/*---------- Whatsapp: */}
          <li className={styles.item}>
            <SocialIcon
              type="whatsapp"
              href="https://wa.me/41782047078"
              variant="contact"
              ariaLabel={tSocial('locationAria')}
            />
            <a
              className={styles.contactInfoLink}
              href="https://wa.me/41782047078"
              aria-label={tSocial('locationAria')}
            >
              <span className={styles.contactLabel}>Whatsapp</span>
              <span className={styles.separator} aria-hidden="true"></span>
              <span className={styles.contactAdress}>+41.78.204.70.78</span>
            </a>
          </li>
        </ul>

        <div className={styles.contactFormContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
