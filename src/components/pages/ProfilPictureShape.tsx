import React from 'react';
import styles from './ProfilPictureShape.module.scss';
import Image from 'next/image';
import shape from '../../../public/Untitled.svg';
import steven from '../../../public/Steven-Schramiak-profilpic.jpg';

import mail from '../../../public/icons/mail-icon.svg';
import phone from '../../../public/icons/whatsapp-icon.svg';
import linkedin from '../../../public/icons/linkedin-icon.svg';

export default function ProfilPictureShape() {
  return (
    <div className={styles.profilPictureShape}>
      {/*------------- Ruban de localisation -------------*/}
      <div className={styles.localisationRibbon}></div>

      {/*------------- Contour incurvé cyan --------------*/}
      <div className={styles.carvedDecorativeCircle}></div>

      {/*-------------- Conteneur de la photo ------------*/}
      <div className={styles.circleBase}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="photo de Steven Schramiak"
              src={steven}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.circleBaseShadow}></div>

      {/*------------- Conteneurs des icones -------------*/}
      <div className={styles.mailCircleBase}>
        <div className={styles.iconContainer}>
          {/* <Image
            className={styles.icon}
            src={mail}
            width={35}
            height={35}
            alt="Email icon"
          /> */}
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.2023 20 14.34 19.7354 15.3605 19.2623C15.8616 19.03 16.4561 19.2479 16.6884 19.749C16.9207 20.25 16.7028 20.8445 16.2017 21.0768C14.923 21.6696 13.4987 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L21.9998 12.019C21.9581 14.2089 21.2607 15.6839 20.2325 16.5993C19.2286 17.4932 18.0396 17.7368 17.2105 17.7368C16.018 17.7368 14.9711 17.1176 14.3725 16.1832C12.2959 18.0182 9.30258 18.4215 7.45418 16.3677C5.52834 14.2279 6.06522 10.6551 8.11995 8.37206C10.1079 6.1632 13.7227 5.31033 15.7981 7.86574C15.9765 7.37839 16.5038 7.1043 17.0109 7.24882C17.5421 7.40019 17.8499 7.95346 17.6986 8.4846C17.1064 10.561 16.4075 12.6179 15.8853 14.712C16.0374 15.3013 16.5739 15.7368 17.2105 15.7368C17.6895 15.7368 18.3576 15.5908 18.9026 15.1056C19.4224 14.6428 19.9646 13.7517 20 11.9905C19.9949 7.5766 16.4151 4 12 4ZM14.3531 12.914C14.4227 12.6739 14.6062 12.0326 14.8196 11.2859C15.0534 10.4669 14.7508 9.68019 14.1119 8.97025C13.1927 7.94891 11.2202 7.91706 9.60653 9.70999C7.98432 11.5125 7.92505 13.9012 8.94077 15.0298C9.85997 16.0511 11.8325 16.0829 13.4461 14.29C13.8191 13.8755 14.1704 13.4459 14.3531 12.914Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className={styles.whatsappCircleBase}>
        <div className={styles.iconContainer}>
          <Image
            className={styles.icon}
            src={phone}
            width={35}
            height={35}
            alt="Email icon"
          />
        </div>
      </div>
      <div className={styles.linkedinCircleBase}>
        <div className={styles.iconContainer}>
          <Image
            className={styles.icon}
            src={linkedin}
            width={35}
            height={35}
            alt="Email icon"
          />
        </div>
      </div>
    </div>
  );
}