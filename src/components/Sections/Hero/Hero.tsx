import React, { useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';
import { barlow } from '@/styles/font';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.mainContainer}>
        <div className={styles.overflowControl}>
          <div className={styles.skewedContainer}></div>
          <div className={styles.contentContainer}>
            <h1 className={`${styles.title} ${barlow.className}`}>
              <span className={styles.firstWord}>Optimisez </span>
              votre{' '}
              <span className={styles.highlight}>
                gestion opérationnelle
              </span> & <span className={styles.highlight}>Financière</span>
            </h1>
            <p className={`${styles.description} ${barlow.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Esse reprehenderit eos qui dolore! Tempore
              assumenda voluptas consequuntur officiis quod quam iste, illum
              nesciunt minus sequi ullam cum veritatis quasi placeat!
            </p>

            <div className={styles.buttonsContainer}></div>
          </div>
        </div>

        <div className={styles.backgroundContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="image ampoule"
              src={ampoule}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
