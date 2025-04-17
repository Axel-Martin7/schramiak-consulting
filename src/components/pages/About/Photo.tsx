import React from 'react';
import styles from './Photo.module.scss';
import Image from 'next/image';
import steven from '../../../public/Steven-Schramiak-profilpic.jpg';

export default function Photo() {
  return (
    <div className={styles.profilPictureShape}>
      <div className={styles.decorativeShape}>
        <div className={styles.localisationRibbon}></div>
        <div className={styles.carvedShape}></div>
      </div>

      <div className={styles.contentShape}></div>
    </div>
  );
}
