'use client';

import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  // Etat local pour gérer l'ouverture/fermeture du burgerMenu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour inverser l'état du burgerMenu (ouvrir/fermer)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`${styles.burger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <div className={`${styles['burger-line']} ${styles.line1}`}></div>
        <div className={`${styles['burger-line']} ${styles.line2}`}></div>
        <div className={`${styles['burger-line']} ${styles.line3}`}></div>
      </button>
    </>
  );
}

//   return (
//     <>
//       {/* Bouton Burger Menu -> */}
//       {/*-------------------  La classe 'open' est ajoutée dynamiquement si isOpen est true, ce qui déclenche l'animation */}
//       <button
//         className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}
//         onClick={toggleMenu}
//       >
//         <span className={styles.line}></span>
//         <span className={styles.line}></span>
//         <span className={styles.line}></span>
//       </button>

//       {/* Panneau déroulant qui apparaît lorsque le menu est ouvert */}
//       {/* ----------------------- La classe 'open' est ajoutée dynamiquement pour rendre le panneau visible */}
//       {/* ----------------------- Ce panneau est placé au niveau supérieur pour ne pas couvrir les éléments du header */}
//       <div className={`${styles.menuPanel} ${isOpen ? styles.open : ''}`}>
//         {/* Contenu du panneau (ici, un menu de navigation) */}
//         <div className={styles.menuContent}>coucou le panneau</div>
//         {/* <nav className={styles.menuContent}>
//           <ul>
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#services">Services</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </nav> */}
//       </div>
//     </>
//   );
// }
