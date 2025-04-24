import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';
import { barlow } from '@/styles/font';
import CtaButton from '@/components/common/CtaButton';

export default function Hero() {
  return (
    <div className={styles.heroRibbon}>
      <div className={styles.skewedContainer}></div>

      <div className={styles.contentContainer}>
        <section className={styles.ctaSection}>
          <h2 className={`${styles.heroTitle} ${barlow.className}`}>
            <strong className={styles.firstWord}>Optimisez </strong>
            votre{' '}
            <strong className={styles.highlightWords}>
              gestion opérationnelle{' '}
            </strong>
            <span className={styles.newLine}>
              &<strong className={styles.highlightWords}> financière</strong>
            </span>
          </h2>

          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            voluptas aut explicabo voluptatem earum, officia ad pariatur dolor
            aliquid eum molestias distinctio quos nemo perspiciatis assumenda
            temporibus! Labore, quos repellendus!
          </p>

          <div className={styles.buttonsContainer}>
            <CtaButton
              href="/#services"
              variant="secondary"
              aria-label="Découvrez mes services"
            >
              Découvrez mes services
            </CtaButton>

            <CtaButton
              href="/#contact"
              variant="primary"
              aria-label="Obtenez un audit gratuit"
            >
              Obtenez un audit gratuit
            </CtaButton>
          </div>
        </section>

        <section className={styles.imageSection}>
          <Image
            className={styles.image}
            alt="Ampoule symbolisant l'optimisation"
            src={ampoule}
            placeholder="blur"
            quality={100}
            fill
            sizes="(min-width: 1280px) 624px, (min-width: 768px) 50vw, 100vh"
          />
        </section>
      </div>
    </div>
  );
}
