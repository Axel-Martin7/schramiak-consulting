import React from 'react';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  return (
    <label className={styles.burgerWrap} htmlFor="button">
      <input type="checkbox" aria-label="Bluetooth" id="button" />
      <button className={styles.button}>
        <div className={styles.corner}></div>
        <div className={styles.inner}></div>
      </button>
      <div className={styles.bg}></div>
    </label>
  );
}
