// 'use client';

// import React, { useState } from 'react';
// import styles from './Button.module.scss';

// type ButtonProps = {
//   label: string; // Le texte du bouton
//   onClick?: () => void; // La fonction à exécuter lors du clic
//   variant?: 'primary' | 'secondary'; // Variantes pour différents styles de bouton
//   isActive?: boolean; // Indique si le bouton est actif ou non
// };

// const Button: React.FC<ButtonProps> = ({
//   label,
//   onClick,
//   variant = 'primary',
//   isActive = false,
// }) => {
//   const [active, setActive] = useState(isActive);

//   const handleClick = () => {
//     setActive(!active); // Change l'état actif/désactif lors du clic
//     if (onClick) onClick(); // Exécute la fonction onClick si fournie
//   };
//   const buttonClasses = `${styles.button} ${styles[variant]} ${
//     active ? styles.active : ''
//   }`;

//   return (
//     <button className={buttonClasses} onClick={handleClick}>
//       {label}
//     </button>
//   );
// };

// export default Button;

'use client';

import React, { useState } from 'react';
import styles from './Button.module.scss'; // Assurez-vous de créer ce fichier de style

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary'; // Pour permettre différents styles de bouton
  // onClick?: () => void; // Optionnel, si vous avez des boutons interactifs
  className?: string; // Permet de passer des classes CSS personnalisées
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  className,
}) => {
  // État pour gérer le clic du bouton
  const [isActive, setIsActive] = useState(false);

  // Fonction pour inverser l'état isActive
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const buttonClassName = `${styles.button} ${styles[variant]} ${
    isActive ? styles.active : ''
  } ${className ? className : ''}`;

  return (
    <button className={buttonClassName} onClick={toggleActive}>
      {label}
    </button>
  );
};

export default Button;
