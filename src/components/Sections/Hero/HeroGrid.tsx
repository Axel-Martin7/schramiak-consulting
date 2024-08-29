import React from 'react';
import styles from './HeroGrid.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}></div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          alt="cerveau ampoule"
          src={ampoule}
          placeholder="blur"
          quality={100}
          fill
          sizes="50vw"
        ></Image>
      </div>
    </section>
  );
}
