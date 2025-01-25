import React from 'react';
import styles from './Contact.module.scss';
import { barlow } from '@/styles/font';
import { SocialIcon } from '../common/SocialIcon';
// import SocialIcon from '../common/SocialIcon';

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
        <div className={styles.contactInformationsContainer}>
          <h2 className={`${styles.CtoTitle} ${barlow.className}`}>
            <strong className={styles.firstWord}>Réservez</strong>
            <small className={styles.smallWord}> un </small>
            <strong className={styles.highlightedWord}>audit gratuit</strong>
            <small className={styles.smallWord}> de vos </small>
            <strong className={styles.highlightedWord}>besoins</strong>
            <small className={styles.smallWord}> dès </small>
            <strong className={styles.highlightedWord}>maintenant</strong>
            <small className={styles.smallWord}> !</small>
          </h2>

          <div className={styles.descriptionsContainer}>
            <p className={styles.description}>
              Je suis convaincu que mes compétences et mon expérience variée
              seront des atouts majeurs pour votre entreprise.
            </p>
            <p className={styles.description}>
              Contactez-moi dès aujourd&apos;hui pour discuter de la manière
              dont je peux contribuer à votre succès.
            </p>
          </div>

          {/* <ul className={styles.socialList}>
            <li className={styles.item}>
          
              <a
                className={styles.iconLinkContainer}
                href="https://www.google.com/maps/place/1208+Genève"
                target="_blank"
                rel="noopener"
                aria-label="Voir la localisation sur Google Maps"
              >
                <div className={styles.circleWrapper}>
                  <div className={styles.circleIconContainer}>
                    <div className={styles.icon}>
                      <SocialIcon
                        className={styles.contactGradient}
                        type="email"
                        disableLink // Désactivation de l'ancre
                        ariaLabel="Envoyer un email"
                        variant="contact"
                      />
                    </div>
                  </div>
                </div>
              </a>

              <a
                className={styles.contactInfoLink}
                href="https://www.google.com/maps/place/1208+Genève"
                target="_blank"
                rel="noopener"
                aria-label="Voir la localisation sur Google Maps"
              >
                <span className={styles.contactLabel}>Localisation :</span>
                <span className={styles.separator}></span>
                <span className={styles.contactAdress}>1204 Genève</span>
              </a>
            </li>

            <li className={styles.item}>
              <SocialIcon
                variant="contact"
                type="email"
                href="mailto:votre.email@example.com"
                ariaLabel="Envoyer un email"
              />
               <a
                className={styles.iconLinkContainer}
                href="mailto:steven.schramiak@icloud.com"
                aria-label="Envoyer un email à Steven"
              >
                <div className={styles.circleWrapper}>
                  <div className={styles.circleIconContainer}>
                    <div className={styles.icon}>
                      <SocialIcon
                        type="email"
                        href="mailto:votre.email@example.com"
                        ariaLabel="Envoyer un email"
                      />
                    </div>
                  </div>
                </div>
              </a>

              <a
                className={styles.contactInfoLink}
                href="mailto:steven.schramiak@icloud.com"
                aria-label="Envoyer un email à Steven"
              >
                <span className={styles.contactLabel}>E-mail :</span>
                <span className={styles.separator}></span>
                <span className={styles.contactAdress}>
                  steven.schramiak@icloud.com
                </span>
              </a> 
            </li>
          </ul>  */}

          <ul className={styles.socialList}>
            <li className={styles.item}>
              <SocialIcon
                type="email"
                href="mailto:autre.mail@example.com"
                variant="contact"
                ariaLabel="Email contact"
              />
            </li>

            <li className={styles.item}>
              <SocialIcon
                type="linkedin"
                href="https://www.linkedin.com/in/steven-schramiak-2005/"
                variant="contact"
                ariaLabel="Visiter mon profil LinkedIn"
              />
            </li>
          </ul>
        </div>

        <div className={styles.contactFormContainer}></div>
      </div>
    </div>
  );
}
