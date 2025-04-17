import React from 'react';
import styles from './Contact.module.scss';
import { barlow } from '@/styles/font';
import { SocialIcon } from '../../common/SocialIcon';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>
          Rencontrons-nous
        </h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInformationsSection}>
          <div className={styles.informationsHeader}>
            <h2 className={`${styles.ctoTitle} ${barlow.className}`}>
              <strong className={styles.firstWord}>Réservez </strong>
              <span className={styles.line}>
                <small className={styles.small}> un </small>
                <strong className={styles.highlight}>Audit gratuit</strong>
                <small className={styles.small}> de vos </small>
                <strong className={styles.highlight}>besoins</strong>
              </span>

              <span className={styles.line}>
                <small className={styles.small}> dès </small>
                <strong className={styles.highlight}>maintenant</strong>
                <small className={styles.small}> ! </small>
              </span>
            </h2>

            <p className={styles.description}>
              Je suis convaincu que mes compétences et mon expérience variée
              seront des atouts majeurs pour votre entreprise. <br></br>
              Contactez-moi dès aujourd&apos;hui pour discuter de la manière
              dont je peux contribuer à votre succès.
            </p>
          </div>

          <ul className={styles.socialList}>
            {/*---------- Localisation : */}
            <li className={styles.item}>
              <SocialIcon
                type="location"
                href="https://www.google.com/maps/place/1208+Genève"
                variant="contact"
                ariaLabel="Voir la localisation"
              />
              <a
                className={styles.contactInfoLink}
                href="https://www.google.com/maps/place/1208+Genève"
                aria-label="Voir la localisation"
              >
                <span className={styles.contactLabel}>Localisation </span>
                <span className={styles.separator}></span>
                <span className={styles.contactAdress}>1208 Genève</span>
              </a>
            </li>

            {/*---------- E-mail : */}
            <li className={styles.item}>
              <SocialIcon
                type="email"
                href="mailto:autre.mail@example.com"
                variant="contact"
                ariaLabel="Email contact"
              />

              <a
                className={styles.contactInfoLink}
                href="mailto:steven.schramiak@icloud.com"
                aria-label="Envoyer un email"
              >
                <span className={styles.contactLabel}>E-mail</span>
                <span className={styles.separator}></span>
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
                ariaLabel="Visiter mon profil LinkedIn"
              />
              <a
                className={styles.contactInfoLink}
                href="https://www.linkedin.com/in/steven-schramiak-2005/"
                aria-label="Visiter mon profil LinkedIn"
              >
                <span className={styles.contactLabel}>Linkedin</span>
                <span className={styles.separator}></span>
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
                ariaLabel="Envoyer un message WhatsApp"
              />
              <a
                className={styles.contactInfoLink}
                href="https://wa.me/41782047078"
                aria-label="Envoyer un message WhatsApp"
              >
                <span className={styles.contactLabel}>Whatsapp</span>
                <span className={styles.separator}></span>
                <span className={styles.contactAdress}>+41.78.204.70.78</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contactFormSection}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
