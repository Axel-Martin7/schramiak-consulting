// 'use client';

// import React, { useState } from 'react';
// import styles from './NeuBtn.module.scss';

// export default function NeuBtn() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleActive = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <button
//       className={`${styles.neuButton} ${isActive ? styles.active : ''}`}
//       onClick={toggleActive}
//     ></button>
//   );
// }

'use client';

import React, { useState } from 'react';
import styles from './NeuBtn.module.scss';

export default function NeuBtn() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button
        className={`${styles.neuButton} ${isActive ? styles.active : ''}`}
        onClick={toggleActive}
      >
        <div className={`${styles.burger} ${isActive ? styles.open : ''}`}>
          <div className={`${styles['burger-line']} ${styles.line1}`}></div>
          <div className={`${styles['burger-line']} ${styles.line2}`}></div>
          <div className={`${styles['burger-line']} ${styles.line3}`}></div>
        </div>
      </button>
      <div className={`${styles.menuPanel} ${isActive ? styles.open : ''}`}>
        <div className={styles.menuContent}>
          <p>Bonjour panneau</p>
        </div>
      </div>
    </>
  );
}
