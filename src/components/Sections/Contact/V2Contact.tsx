import React from 'react';
import styles from './V2Contact.module.scss';
import Image from 'next/image';
import { barlow } from '@/styles/font';

import localisation from '../../../../public/icons/place-marker-icon.svg';
import mail from '../../../../public/icons/mail-icon.svg';
import linkedin from '../../../../public/icons/linkedin-icon.svg';
import phone from '../../../../public/icons/whatsapp-icon.svg';

export default function V2Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitleContainer}>
        <h2 className={`${styles.title} ${barlow.className}`}>
          Rencontrons-nous
        </h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.emptyCarvedBackground}></div>

        <div className={styles.contactItemsContainer}>
          {/* Item 1 : localisation --> */}
          <div className={styles.item1}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}>
                <Image
                  className={styles.icon}
                  src={localisation}
                  width={40}
                  height={40}
                  alt="Email icon"
                />
              </div>
            </div>

            <p className={`${styles.itemInformation} ${barlow.className}`}>
              1208 Genève
            </p>
          </div>

          {/* Item 2 : adresse mail --> */}
          <div className={styles.item2}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}>
                <Image
                  className={styles.icon}
                  src={mail}
                  width={40}
                  height={40}
                  alt="Email icon"
                />
              </div>
            </div>

            <p className={`${styles.itemInformation} ${barlow.className}`}>
              steven.schramiak@icloud.com
            </p>
          </div>

          {/* Item 3 : linkedin --> */}
          <div className={styles.item3}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}>
                <Image
                  className={styles.icon}
                  src={linkedin}
                  width={40}
                  height={40}
                  alt="Email icon"
                />
              </div>
            </div>
            <p className={`${styles.itemInformation} ${barlow.className}`}>
              Linkedin
            </p>
          </div>

          {/* Item 4 : whatsapp --> */}
          <div className={styles.item4}>
            <div className={styles.circleBorder}>
              <div className={styles.circle}>
                <Image
                  className={styles.icon}
                  src={phone}
                  width={40}
                  height={40}
                  alt="Email icon"
                />
              </div>
            </div>
            <p className={`${styles.itemInformation} ${barlow.className}`}>
              +41.78.204.70.78
            </p>
          </div>
        </div>

        <div className={styles.informationsCarvedBackground}>
          <div className={styles.contactInformationsContainer}>
            <h3 className={`${styles.auditTitle} ${barlow.className}`}>
              Réservez un{' '}
              <span className={styles.highlight}>audit gratuit</span> de vos
              besoins dès maintenant !
            </h3>

            <p className={styles.auditDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              optio corporis in totam excepturi, qui minima repudiandae voluptas
              vitae veniam temporibus odit ad. Magnam sapiente reprehenderit
              suscipit! Numquam, fugiat ut!
            </p>

            <div className={styles.formContainer}>
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="nom">Nom</label>
                  <input type="text" id="nom" name="nom" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="prenom">Prénom</label>
                  <input type="text" id="prenom" name="prenom" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Adresse Mail</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="compagnie">Compagnie (Optionnel)</label>
                  <input type="text" id="compagnie" name="compagnie" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
