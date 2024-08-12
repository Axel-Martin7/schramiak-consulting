// 'useClient';

// import { Link } from '@/navigation';
// import React from 'react';
// import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
// import styles from './Header.module.scss';
// import Navigation from '../Navigation/Navigation';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.homeBtnContainer}>
//         <Link href={'/'} className={styles.homeBtn}>
//           <p>Home</p>
//         </Link>
//       </div>

//       <div className={styles.desktopNavigationContainer}>
//         <Navigation />
//       </div>

//       <div className={styles.mobileNavigationContainer}>
//         <BurgerMenu />
//       </div>

//       <div className={styles.languagesOptionContainer}>
//         <LocaleSwitcher />
//       </div>
//     </header>
//   );
// }

import React from 'react';
import { Link } from '@/navigation';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBtnContainer}>
        <Link href={'/'}>
          <p>Logo Home</p>
        </Link>
      </div>

      {/* Navbar desktop visible uniquement sur les grands écrans */}
      <nav className={styles.navbarDesktop}>
        <Navigation />
      </nav>

      {/* Burger Menu visible uniquement sur mobile */}
      <div className={styles.burgerMenuContainer}>
        <BurgerMenu />
      </div>

      <div className={styles.languageSwitcherContainer}>
        <LocaleSwitcher />
      </div>
    </header>
  );
}

// 'use client'; // Indique que tout ce composant est rendu côté client

// import React, { useState } from 'react';
// import Link from 'next/link';
// import styles from './Header.module.scss';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';
// import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
// import Navigation from '../Navigation/Navigation';

// export default function Header() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Détecter si l'écran est mobile ou non
//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Vérifier au montage
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <header className={styles.header}>
//       {/* Lien vers la page d'accueil */}
//       <div className={styles.homeBtnContainer}>
//         <Link href={'/'} className={styles.homeBtn}>
//           <p>Home</p>
//         </Link>
//       </div>

//       {/* Navbar ou BurgerMenu en fonction de la taille de l'écran */}
//       <div className={styles.navigationContainer}>
//         {isMobile ? <BurgerMenu /> : <Navigation />}
//       </div>

//       {/* Sélecteur de langue */}
//       <div className={styles.languagesOptionContainer}>
//         <LocaleSwitcher />
//       </div>
//     </header>
//   );
// }
