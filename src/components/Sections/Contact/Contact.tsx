import React from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebar}></div>
        </div>

        <div className={styles.informationsContainer}></div>
      </div>
    </section>
  );
}
