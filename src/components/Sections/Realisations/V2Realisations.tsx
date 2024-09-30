import React from 'react';
import styles from './V2Realisations.module.scss';
import Button from '@/components/Buttons/Button';
import { barlow } from '@/styles/font';

export default function V2Realisations() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitleContainer}>
        <h2 className={`${styles.title} ${barlow.className}`}>
          Mes réalisations
        </h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.objectsContainer}>
        {/* Object 1 ---> */}
        <div className={styles.object1}>
          <div className={styles.circleWrapper}>
            <div className={styles.circleBorder}></div>
            <div className={styles.mainCircle}></div>
          </div>
          <div className={styles.halfCircle}></div>
          <div className={styles.shadow}></div>
        </div>

        {/* Object 2 ---> */}
        <div className={styles.object2}>
          <div className={styles.circleWrapper}>
            <div className={styles.circleBorder}></div>
            <div className={styles.mainCircle}></div>
          </div>
          <div className={styles.halfCircle}></div>
          <div className={styles.shadow}></div>
        </div>

        {/* Object 3 ---> */}
        <div className={styles.object3}>
          <div className={styles.circleWrapper}>
            <div className={styles.circleBorder}></div>
            <div className={styles.mainCircle}></div>
          </div>
          <div className={styles.halfCircle}></div>
          <div className={styles.shadow}></div>
        </div>

        {/* Object 4 ---> */}
        <div className={styles.object4}>
          <div className={styles.circleWrapper}>
            <div className={styles.circleBorder}></div>
            <div className={styles.mainCircle}></div>
          </div>
          <div className={styles.halfCircle}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>

      <div className={styles.sectionDescriptionContainer}>
        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          iste facilis fugit similique voluptatum beatae temporibus unde eum
          repudiandae minus qui, repellendus nemo labore est suscipit vel?
          Veritatis, facere ipsam.
        </p>
        <div className={styles.buttonContainer}>
          <Button label="Learn more" variant="primary" />
        </div>
      </div>
    </div>
  );
}
