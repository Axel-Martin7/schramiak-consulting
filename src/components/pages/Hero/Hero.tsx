import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import ampoule from '../../../../public/ampoule.jpg';
import { barlow } from '@/styles/font';
import Button from '../../common/Button';
import CtaButton from '@/components/common/CtaButton';

export default function Hero() {
  return (
    // <div className={styles.heroRibbon}>
    //   <div className={styles.skewedContainer}></div>

    //   <div className={styles.heroContentContainer}>
    //     <section className={styles.informationsSection}>
    //       <h2 className={`${styles.heroTitleContainer} ${barlow.className} `}>
    //         <strong className={styles.firstWord}>Optimisez</strong>
    //         <small className={styles.smallWord}>votre </small>
    //         <strong className={styles.highlightWords}>
    //           Gestion opérationnelle
    //         </strong>
    //         <small className={styles.smallWord}> & </small>
    //         <strong className={styles.highlightWords}>Financière</strong>
    //       </h2>

    //       <p className={`${styles.description} ${barlow.className}`}>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
    //         minim veniam. Lorem ipsum dolor sit amet consectetur, adipisicing
    //         elit. Esse reprehenderit eos qui dolore! Tempore assumenda voluptas
    //         consequuntur officiis quod quam iste, illum nesciunt minus sequi
    //         ullam cum veritatis quasi placeat!
    //       </p>

    //       <div className={styles.buttonsContainer}>
    //         <Button variant="secondary" className={styles.fullWidthButton}>
    //           Découvrez mes services
    //         </Button>
    //         <Button variant="primary" className={styles.fullWidthButton}>
    //           Obtenez un audit gratuit
    //         </Button>
    //       </div>
    //     </section>

    //     <section className={styles.backgroundImageSection}>
    //       <div className={styles.imageContainer}>
    //         <Image
    //           className={styles.image}
    //           alt="image ampoule"
    //           src={ampoule}
    //           placeholder="blur"
    //           quality={100}
    //           fill
    //           sizes="(max-width: 768px) 100vw, 50vw"
    //         />
    //       </div>
    //     </section>
    //   </div>
    // </div>

    <div className={styles.heroRibbon}>
      <div className={styles.skewedContainer}></div>

      <div className={styles.heroContentContainer}>
        <section className={styles.informationsSection}>
          <h2 className={`${styles.heroTitleContainer} ${barlow.className} `}>
            <strong className={styles.firstWord}>Optimisez</strong>
            <small className={styles.smallWord}>votre </small>
            <strong className={styles.highlightWords}>
              Gestion opérationnelle
            </strong>
            <small className={styles.smallWord}> & </small>
            <strong className={styles.highlightWords}>Financière</strong>
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

        <section className={styles.backgroundImageSection}></section>
      </div>
    </div>
  );
}
