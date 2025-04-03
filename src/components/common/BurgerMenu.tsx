import React from 'react';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  return (
    <div className={styles.burgerContainer}>
      <button className={styles.burgerButton}></button>
    </div>
  );
}
