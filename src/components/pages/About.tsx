import React from 'react';
import styles from './About.module.scss';
import ProfilPictureShape from './ProfilPictureShape';
import { barlow } from '@/styles/font';
import Photo from './Photo';

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
    //   <div className={styles.aboutCard}>
    //     <div className={styles.titleContainer}>
    //       <h2 className={`${styles.sectionTitle} ${barlow.className}`}>
    //         About me
    //       </h2>
    //       <div className={styles.titleSeparator}></div>
    //     </div>
    //     <div className={styles.imageContainer}>
    //       <ProfilPictureShape />
    //     </div>
    //     <div className={styles.quoteContainer}></div>
    //     <div className={styles.descriptionContainer}></div>
    //   </div>

    //   <div className={styles.cardShadow}></div>

    //   <div className={styles.cardReflect}></div>
    // </div>

    <div className={styles.aboutContainer}>
      <div className={styles.aboutCard}>
        <section className={styles.titleSection}>
          <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
          <div className={styles.titleSeparator}></div>
        </section>

        <section className={styles.imageSection}>
          {/* <div className={styles.imageContainer}></div> */}
          <ProfilPictureShape />
        </section>

        <section className={styles.quoteSection}>
          <p>
            Chaque projet passe par l etablissement d une relation de confiance
            et d un systeme de collaboration, en vue de contribuer a votre
            reussite ainsi qu a celle de vos clients.
          </p>
        </section>

        <section className={styles.presentationSection}>
          <article className={styles.descriptionContainer}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium eveniet odit provident possimus, praesentium maiores.
              Aut repudiandae fuga explicabo voluptatibus sapiente!
              Exercitationem id nisi blanditiis repellendus tempore tenetur non
              incidunt.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
