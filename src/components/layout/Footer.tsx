import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    // <footer className={styles.footer}>
    //   <section className={styles.thanksSection}>
    //     <div className={styles.contentContainer}>
    //       <span className={styles.separator}></span>
    //       <div className={styles.thanksMessageContainer}>
    //         <h3 className={styles.thanksMessage}>Thanks for your visit !</h3>
    //         <p className={styles.signature}>S.Schramiak</p>
    //       </div>
    //     </div>

    //     <div className={styles.layoutContainer}>
    //       <div className={styles.topLayout}></div>
    //       <svg
    //         className={styles.cutShadow}
    //         viewBox="0 0 100 100"
    //         preserveAspectRatio="none"
    //       >
    //         <polyline
    //           points="0,100 50,84 100,100"
    //           fill="none"
    //           stroke="black"
    //           strokeWidth="2"
    //           style={{ filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.3))' }}
    //         />
    //       </svg>
    //     </div>
    //   </section>

    //   <section className={styles.carvedSection}>
    //     <div className={styles.logoContainer}></div>

    //     <ul className={styles.navList}>
    //       <li className={styles.navItem}>About</li>
    //       <li className={styles.navItem}>About</li>
    //       <li className={styles.navItem}>About</li>
    //       <li className={styles.navItem}>About</li>
    //       <li className={styles.navItem}>About</li>
    //       <li className={styles.navItem}>About</li>
    //     </ul>

    //     <div className={styles.socialIcon}>
    //       <div className={styles.icon}></div>
    //       <div className={styles.icon}></div>
    //       <div className={styles.icon}></div>
    //       <div className={styles.icon}></div>
    //     </div>

    //     <p className={styles.small}>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //     </p>
    //   </section>
    // </footer>

    <footer className={styles.footer}>
      <section className={styles.thanksSection}>
        <div className={styles.contentContainer}>
          <span className={styles.separator}></span>
          <div className={styles.thanksMessageContainer}>
            <h3 className={styles.thanksMessage}>Thanks for your visit !</h3>
            <p className={styles.signature}>S.Schramiak</p>
          </div>
        </div>
      </section>

      <section className={styles.carvedSection}>
        <div className={styles.logoContainer}></div>
        <div className={styles.rest}>reste</div>
      </section>
    </footer>
  );
}
