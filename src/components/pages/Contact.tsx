import React from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.sectionTitleContainer}>Rencontrons-nous</div>

      <div className={styles.sectionContentContainer}>
        <section className={styles.informationsSection}>Infos</section>
        <section className={styles.formSection}>Form</section>
      </div>
    </div>
  );
}
