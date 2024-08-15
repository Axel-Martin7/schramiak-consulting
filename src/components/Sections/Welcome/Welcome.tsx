// import React from 'react';
// import styles from './Welcome.module.scss';

// export default function Welcome() {
//   return (
//     <div className={styles.welcomeContainer}>
//       <div className={styles.presentationContainer}>
//         <div className={styles.circleContainer}>
//           <div className={styles.halfCircle}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import styles from './Welcome.module.scss';

// export default function Welcome() {
//   return (
//     <div className={styles.welcomeContainer}>
//       <div className={styles.circlesContainer}>
//         <div className={styles.circle}></div>
//         <div className={styles.lightCircle}></div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import styles from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.circlesContainer}>
        <div className={styles.circle}></div>
        <div className={styles.shadowsCircle}></div>
      </div>
    </div>
  );
}
