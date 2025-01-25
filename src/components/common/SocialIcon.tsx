import React, { FC, useId } from 'react';
import styles from './SocialIcon.module.scss';

type SocialIconType = 'location' | 'email' | 'whatsapp' | 'linkedin';
type SocialIconVariant = 'about' | 'contact' | 'default';

interface SocialIconProps {
  type: SocialIconType;
  href: string;
  variant?: SocialIconVariant;
  className?: string; // Optionnel : une classe CSS pour customiser (couleur, gradient,hover ...)
  ariaLabel?: string;
}

// Définition d'un type étendu pour inclure les variables CSS personnalisées
interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string;
}

const emailPath = `M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.2023 20 14.34 19.7354 15.3605 19.2623C15.8616 19.03 16.4561 19.2479 16.6884 19.749C16.9207 20.25 16.7028 20.8445 16.2017 21.0768C14.923 21.6696 13.4987 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L21.9998 12.019C21.9581 14.2089 21.2607 15.6839 20.2325 16.5993C19.2286 17.4932 18.0396 17.7368 17.2105 17.7368C16.018 17.7368 14.9711 17.1176 14.3725 16.1832C12.2959 18.0182 9.30258 18.4215 7.45418 16.3677C5.52834 14.2279 6.06522 10.6551 8.11995 8.37206C10.1079 6.1632 13.7227 5.31033 15.7981 7.86574C15.9765 7.37839 16.5038 7.1043 17.0109 7.24882C17.5421 7.40019 17.8499 7.95346 17.6986 8.4846C17.1064 10.561 16.4075 12.6179 15.8853 14.712C16.0374 15.3013 16.5739 15.7368 17.2105 15.7368C17.6895 15.7368 18.3576 15.5908 18.9026 15.1056C19.4224 14.6428 19.9646 13.7517 20 11.9905C19.9949 7.5766 16.4151 4 12 4ZM14.3531 12.914C14.4227 12.6739 14.6062 12.0326 14.8196 11.2859C15.0534 10.4669 14.7508 9.68019 14.1119 8.97025C13.1927 7.94891 11.2202 7.91706 9.60653 9.70999C7.98432 11.5125 7.92505 13.9012 8.94077 15.0298C9.85997 16.0511 11.8325 16.0829 13.4461 14.29C13.8191 13.8755 14.1704 13.4459 14.3531 12.914Z`;
const whatsappPath = `M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z`;
const linkedinPath = `M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z`;
const locationPath = `M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z`;

// Type Guard pour vérifier si varient est 'about' ou 'contact'
const isAboutOrContact = (
  variant: SocialIconVariant
): variant is 'about' | 'contact' => {
  return variant === 'about' || variant === 'contact';
};

export const SocialIcon: FC<SocialIconProps> = ({
  type,
  href,
  variant = 'default',
  className,
  ariaLabel,
}) => {
  // Récupération du path selon "type"
  const getPath = (type: SocialIconType) => {
    switch (type) {
      case 'email':
        return emailPath;
      case 'whatsapp':
        return whatsappPath;
      case 'linkedin':
        return linkedinPath;
      case 'location':
        return locationPath;
      default:
        return '';
    }
  };
  const d = getPath(type);

  // Génération des IDs uniques pour les dégradés
  const uniqueId = useId();
  const gradientId = `gradient-${variant}-${type}-${uniqueId}`;
  const hoverGradientId = `${gradientId}-hover`;

  // Définition des valeurs de remplissage
  let fillValue = 'currentColor';
  let hoverFill = 'currentColor';
  let gradientElements: JSX.Element | null = null;

  if (variant === 'about') {
    gradientElements = (
      <>
        <linearGradient id={gradientId} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00b0bd" />
          <stop offset="100%" stopColor="#007782" />
        </linearGradient>
        <linearGradient id={hoverGradientId} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6bc7d0" />
          <stop offset="100%" stopColor="#00a4b1" />
        </linearGradient>
      </>
    );
    fillValue = `url(#${gradientId})`;
    hoverFill = `url(#${hoverGradientId})`;
  } else if (variant === 'contact') {
    gradientElements = (
      <>
        <linearGradient id={gradientId} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#007782" />
          <stop offset="100%" stopColor="#003e43" />
        </linearGradient>
        <linearGradient id={hoverGradientId} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f7f7" />
          <stop offset="100%" stopColor="#beeaef" />
        </linearGradient>
      </>
    );
    fillValue = `url(#${gradientId})`;
    hoverFill = `url(#${hoverGradientId})`;
  }

  /* Concaténation des classes :
  - .icon : la classe de base
  - className : une éventuelle classe suppl.
  */
  const svgClass = [styles.icon, className || ''].filter(Boolean).join(' ');

  /* Concaténation des classes pour le lien <a> :
    - styles.link : La classe de base pour le lien
    - styles[variant] : la classe de variante (ex: .about, .contact 
    */
  const linkClass = [styles.link, variant ? styles[variant] : '']
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={linkClass}
      style={
        isAboutOrContact(variant)
          ? ({
              '--fill': fillValue,
              '--hover-fill': hoverFill,
            } as CustomCSSProperties) // Utilisation du type étendu
          : {}
      }
    >
      {/*---------- VARIANT : Contact -----------*/}
      {variant === 'contact' ? (
        <div className={styles.circleWrapper}>
          <div className={styles.innerCircle}>
            <div className={styles.iconContainer}>
              <svg viewBox="0 0 24 24" className={svgClass}>
                <defs>{gradientElements}</defs>
                {/* On dessine le path avec fill via variable CSS */}
                <path d={d} fill="var(--fill)" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <svg viewBox="0 0 24 24" className={svgClass}>
          {isAboutOrContact(variant) && <defs>{gradientElements}</defs>}
          {/* On dessine le path avec fill via variable CSS */}
          <path d={d} fill="var(--fill)" />
        </svg>
      )}
    </a>
  );
};
