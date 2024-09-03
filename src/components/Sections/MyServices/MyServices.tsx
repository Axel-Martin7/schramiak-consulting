// import React from 'react';
// import styles from './MyServices.module.scss';

// export default function Myservices() {
//   return (
//     <section className={styles.servicesSection}>
//       <div className={styles.shapesContainer}>
//         <div className={styles.arrow}></div>
//         <div className={styles.hexagonBack1}>
//           <div className={styles.hexagon}></div>
//         </div>
//         <div className={styles.hexagonBack2}>
//           <div className={styles.hexagon}></div>
//         </div>

//         <div className={styles.hexagonBack3}>
//           <div className={styles.hexagon}></div>
//         </div>
//         <div className={styles.hexagonBack4}>
//           <div className={styles.hexagon}></div>
//         </div>
//         <div className={styles.centralHexagon}></div>
//         <div className={styles.helpHexagon}></div>
//         <div className={styles.helpHexagon2}></div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import styles from './MyServices.module.scss';

export default function Myservices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.shapesContainer}>
        {/* Conteneur en forme de fléche */}
        <div className={styles.arrow}></div>

        {/* Hexagones principaux */}
        <div className={styles.borderHexagon1}></div>
        <div className={styles.borderHexagon2}></div>
        <div className={styles.borderHexagon3}></div>
        <div className={styles.borderHexagon4}></div>

        {/* Formes des ombrages */}
        <div className={styles.shadowShape1}></div>
        <div className={styles.shadowShape2}></div>
        <div className={styles.shadowShape3}></div>
        <div className={styles.shadowShape4}></div>

        {/* Hexagones de repères */}
        <div className={styles.centralHexagon}></div>
        <div className={styles.helperHexagon1}></div>
        <div className={styles.helperHexagon2}></div>
      </div>
    </section>
  );
}
