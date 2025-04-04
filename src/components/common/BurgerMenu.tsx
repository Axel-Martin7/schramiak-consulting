'use client';

import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  const [pressed, setPressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
      setIsOpen((prev) => !prev);
    }, 200);
  };

  return (
    <div className={styles.burgerContainer}>
      <button
        className={`${styles.burgerButton} ${pressed ? styles.pressed : ''}`}
        onClick={handleClick}
      >
        <div
          className={`${styles.burgerLinesContainer} ${
            isOpen ? styles.open : ''
          }`}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </button>
    </div>
  );
}
