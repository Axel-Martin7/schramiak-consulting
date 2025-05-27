import React from 'react';
import styles from './About.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import steven from '../../../../public/Steven-nobg.png';
import { SocialIcon } from '../../common/SocialIcon';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('pages.home.about');
  const tSocial = useTranslations('common.socialsIcons');

  return (
    <div
      className={styles.aboutContainer}
      role="region"
      aria-labelledby="about-title"
    >
      <div className={styles.sectionTitle}>
        <h3 id="about-title" className={`${styles.title} ${barlow.className}`}>
          {t('section-title')}
        </h3>
        <div className={styles.titleSeparator} aria-hidden="true"></div>
      </div>

      <div className={styles.cardFrame}>
        <div className={styles.card}>
          <div className={styles.leftColumn}>
            <div className={styles.imageCardFrame}>
              <div className={styles.imageCard}>
                <Image
                  className={styles.image}
                  alt={t('image-alt')}
                  src={steven}
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="(max-width: 833px) 288px, (max-width: 1079px) 320px, (max-width: 1279px) 347px, 469px"
                />
              </div>

              {/* ---------- Reflet de la carte de l'image ---------- */}
              <div className={styles.imageCardFrameReflect} aria-hidden="true">
                <div className={styles.imageCardReflect}>
                  <Image
                    className={styles.image}
                    alt={t('image-reflect-alt')}
                    src={steven}
                    fill
                    sizes="(max-width: 833px) 286px, (max-width: 1079px) 314px, (max-width: 1279px) 407px, 435px"
                  />
                </div>
              </div>
            </div>

            <div className={styles.socialContainer}>
              <SocialIcon
                type="linkedin"
                href="https://www.linkedin.com/in/steven-schramiak-2005/"
                variant="default"
                ariaLabel={tSocial('linkedinAria')}
              />

              <SocialIcon
                type="location"
                href="https://www.google.com/maps/place/1208+Genève"
                variant="default"
                ariaLabel={tSocial('locationAria')}
              />
              <SocialIcon
                type="email"
                href="mailto:steven.schramiak@icloud.com"
                variant="default"
                ariaLabel={tSocial('emailAria')}
              />
              <SocialIcon
                type="whatsapp"
                href="https://wa.me/41782047078"
                variant="default"
                ariaLabel={tSocial('whatsappAria')}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <blockquote className={styles.quote}>{t('quote')}</blockquote>

            <span className={styles.separator} aria-hidden="true"></span>

            <article className={styles.presentationContainer}>
              <div className={styles.presentationTitles}>
                <h4 className={styles.name}>
                  <span className={styles.small}>Steven </span>Schramiak
                </h4>
                <h5 className={styles.role}>{t('role')}</h5>
              </div>

              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>{t('description-1')}</p>
                <p className={styles.description}>{t('description-2')}</p>
              </div>
            </article>

            <button className={styles.button}>
              <Link
                className={styles.link}
                href="/parcours"
                title={t('btn-aria')}
              >
                {t('btn-label')}
              </Link>
            </button>
          </div>
        </div>

        {/* ---------- Reflet de la carte ---------- */}
        <div className={styles.cardFrameReflect} aria-hidden="true">
          <div className={styles.cardReflect}></div>
        </div>
      </div>
    </div>
  );
}
