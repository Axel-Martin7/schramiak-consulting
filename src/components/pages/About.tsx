import React from 'react';
import styles from './About.module.scss';
import ProfilPictureShape from './ProfilPictureShape';

export default function About() {
  return (
    // <div className={styles.aboutContainer}>
    //   {/* <div className={styles.titleCard}>About me</div>

    // <div className={styles.imageCard}>IMG</div>

    // <div className={styles.quoteCard}>quote</div>

    // <div className={styles.descriptionCard}>description</div> */}
    // </div>

    // --------------------------------------------------------------

    // <div className={styles.aboutContainer}>
    //   <div className={styles.aboutCard}></div>

    //   {/* <div className={styles.shadow}></div> */}
    // </div>

    <div className={styles.aboutContainer}>
      <div className={styles.aboutCard}>
        <div className={styles.titleContainer}>About me</div>
        <div className={styles.imageContainer}>
          <ProfilPictureShape />
        </div>
        <div className={styles.quoteContainer}></div>
        <div className={styles.descriptionContainer}></div>
      </div>

      <div className={styles.cardShadow}></div>

      <div className={styles.cardReflect}></div>
    </div>
  );
}
