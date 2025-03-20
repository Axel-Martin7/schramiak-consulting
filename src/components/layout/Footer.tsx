import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../../public/ssc-logo.svg';
import logo2 from '../../../public/ssc-logo2.svg';
import { barlow } from '@/styles/font';

export default function Footer() {
  return (
    // <footer className={styles.footer}>
    //   <section className={styles.thanksSection}>
    //     <div className={styles.contentContainer}>
    //       <span className={styles.separator}></span>
    //       <div className={styles.thanksMessageContainer}>
    //         <h3 className={`${styles.thanksMessage} ${barlow.className}`}>
    //           Merci de votre visite !
    //         </h3>
    //         <p className={styles.signature}>S.Schramiak .</p>
    //       </div>
    //     </div>

    //     {/*---------- Layouts -----------*/}
    //     <div className={styles.lowerLayoutWrapper}>
    //       <div className={styles.lowerLayout}></div>
    //     </div>
    //     <div className={styles.upperLayoutWrapper}>
    //       <div className={styles.upperLayout}></div>
    //     </div>
    //   </section>

    //   <section className={styles.carvedSection}>
    //     <div className={styles.logoContainer}>
    //       <Image
    //         className={styles.logo2}
    //         alt="Schramiak consulting logo"
    //         src={logo2}
    //         width={80}
    //         height={80}
    //       ></Image>

    //       <small className={styles.logoCaption}>Consulting</small>
    //     </div>

    //     <div className={styles.nav}>
    //       <div className={styles.item}>HOME</div>
    //       <div className={styles.item}>ABOUT</div>
    //       <div className={styles.item}>CONTACT</div>
    //     </div>
    //   </section>
    // </footer>

    <footer className={styles.footer}>
      <section className={styles.thanksSection}>
        <div className={styles.contentContainer}>
          <span className={styles.separator}></span>
          <div className={styles.thanksMessageContainer}>
            <h3 className={`${styles.thanksMessage} ${barlow.className}`}>
              Merci de votre visite !
            </h3>
            <p className={styles.signature}>S.Schramiak</p>
          </div>
        </div>

        {/*---------- Layouts -----------*/}
        <div className={styles.lowerLayoutWrapper}>
          <div className={styles.lowerLayout}></div>
        </div>
        <div className={styles.upperLayoutWrapper}>
          <div className={styles.upperLayout}></div>
        </div>
      </section>

      <section className={styles.carvedSection}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo2}
            alt="Schramiak consulting logo"
            src={logo2}
            width={80}
            height={80}
          ></Image>

          <small className={styles.logoCaption}>Consulting</small>
        </div>

        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <div className={styles.item}>HOME</div>
            <div className={styles.item}>ABOUT</div>
            <div className={styles.item}>PARCOUR</div>
            <div className={styles.item}>SERVICES</div>
            <div className={styles.item}>REALISATIONS</div>
            <div className={styles.item}>CONTACT</div>
          </nav>

          <div className={styles.social}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </div>

        <p className={styles.small}>Developped by Axel Martin</p>
      </section>
    </footer>
  );
}
