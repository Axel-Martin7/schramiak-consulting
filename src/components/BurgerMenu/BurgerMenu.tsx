// 'use client';

// import React, { useState } from 'react';
// import styles from './BurgerMenu.module.scss';

// export default function BurgerMenu() {
//   // Etat local pour gérer l'ouverture/fermeture du burgerMenu
//   const [isOpen, setIsOpen] = useState(false);

//   // Fonction pour inverser l'état du burgerMenu (ouvrir/fermer)
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button
//         className={`${styles.burger} ${isOpen ? styles.open : ''}`}
//         onClick={toggleMenu}
//       >
//         <div className={`${styles['burger-line']} ${styles.line1}`}></div>
//         <div className={`${styles['burger-line']} ${styles.line2}`}></div>
//         <div className={`${styles['burger-line']} ${styles.line3}`}></div>
//       </button>
//       <div className={`${styles.menuPanel} ${isOpen ? styles.open : ''}`}>
//         <div className={styles.menuContent}>
//           <p>Bonjour panneau</p>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${styles.buttonContainer} ${isActive ? styles.active : ''}`}
      onClick={toggleActive}
    >
      <div className={`${styles.burger} ${isActive ? styles.open : ''}`}>
        <div className={`${styles['burger-line']} ${styles.line1}`}></div>
        <div className={`${styles['burger-line']} ${styles.line2}`}></div>
        <div className={`${styles['burger-line']} ${styles.line3}`}></div>
      </div>
    </button>
  );
}
