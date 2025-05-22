import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';
import { barlow } from '@/styles/font';
import CtaButton from '@/components/common/CtaButton';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('pages.home.hero');

  return (
    <div
      className={styles.heroRibbon}
      role="region"
      aria-labelledby="hero-title"
    >
      <div className={styles.skewedContainer} aria-hidden="true"></div>

      <div className={styles.contentContainer}>
        <section className={styles.ctaSection}>
          <h2
            id="hero-title"
            className={`${styles.heroTitle} ${barlow.className}`}
          >
            <strong className={styles.firstWord}>
              {t('title-first-word')}{' '}
            </strong>
            {t('title-small-word-1')}{' '}
            <strong className={styles.highlightWords}>
              {t('title-highlight-word-1')}{' '}
            </strong>
            <span className={styles.newLine}>
              {t('title-small-word-2')}{' '}
              <strong className={styles.highlightWords}>
                {t('title-highlight-word-2')}
              </strong>
            </span>
          </h2>

          <p className={styles.description}>{t('description')} </p>

          <div className={styles.buttonsContainer}>
            <CtaButton
              href="/#services"
              variant="secondary"
              aria-label="Découvrez mes services"
            >
              {t('cta-btn-services-label')}
            </CtaButton>

            <CtaButton
              href="/#contact"
              variant="primary"
              aria-label="Obtenez un audit gratuit"
            >
              {t('cta-btn-contact-label')}
            </CtaButton>
          </div>
        </section>

        <figure className={styles.imageSection}>
          <Image
            className={styles.image}
            alt={t('image-alt')}
            src={ampoule}
            placeholder="blur"
            quality={100}
            fill
            sizes="(min-width: 1280px) 624px, (min-width: 768px) 50vw, 100vh"
          />
        </figure>
      </div>
    </div>
  );
}
