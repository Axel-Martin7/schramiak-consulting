import React from 'react';
import styles from './AboutV2.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import steven from '../../../public/Steven-nobg.png';

export default function AboutV2() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.aboutCard}>
        <div className={styles.descriptionsContainer}></div>

        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              className={styles.image}
              alt="photo de Steven Schramiak"
              src={steven}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
