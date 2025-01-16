import React from 'react';
import styles from './Button.module.scss';

export default function Button() {
  return (
    <>
      <button className={styles.button}>
        <div className={styles.bg}></div>

        <div className={styles.wrap}>
          <div className={styles.outline}></div>
          <div className={styles.content}>
            <span className={styles.text}>Text</span>
          </div>
        </div>
      </button>

      <button className={styles.button2}>
        <div className={styles.background}></div>

        <div className={styles.wrapper}>
          <div className={styles.outline2}></div>
          <div className={styles.content2}>
            <span className={styles.text}>Text</span>
          </div>
        </div>
      </button>
    </>
  );
}
