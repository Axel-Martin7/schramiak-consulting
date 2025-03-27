// import React from 'react';
// import { Link } from '@/navigation';
// import styles from './Header.module.scss';
// import Navigation from '../Navigation/Navigation';
// import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher';
// import BurgerMenu from './BurgerMenu/BurgerMenu';

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logoBtnContainer}>
//         <Link href={'/'}>
//           <p>Logo Home</p>
//         </Link>
//       </div>

//       {/* Navbar desktop visible uniquement sur les grands écrans */}
//       <nav className={styles.navbarDesktop}>
//         <Navigation />
//       </nav>

//       {/* Burger Menu visible uniquement sur mobile */}
//       <div className={styles.burgerMenuContainer}>
//         <BurgerMenu />
//       </div>

//       <div className={styles.languageSwitcherContainer}>
//         <LocaleSwitcher />
//       </div>
//     </header>
//   );
// }

import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>Logo</div>

      <div className={styles.burgerMenu}>Burger</div>

      <div className={styles.swithcerContainer}>Switch</div>
    </header>
  );
}
