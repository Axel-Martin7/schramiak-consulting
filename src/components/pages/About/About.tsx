import React from 'react';
import styles from './About.module.scss';
import { barlow } from '@/styles/font';
import Image from 'next/image';
import steven from '../../../../public/Steven-nobg.png';
import { SocialIcon } from '../../common/SocialIcon';
import { Link } from '@/navigation';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={`${styles.title} ${barlow.className}`}>About me</h2>
        <div className={styles.titleSeparator}></div>
      </div>

      <div className={styles.cardFrame}>
        <div className={styles.card}>
          <div className={styles.leftColumn}>
            <div className={styles.imageCardFrame}>
              <div className={styles.imageCard}>
                <Image
                  className={styles.image}
                  alt="photo de Steven Schramiak"
                  src={steven}
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="(max-width: 833px) 288px, (max-width: 1079px) 320px, (max-width: 1279px) 347px, 469px"
                />
              </div>

              {/* ---------- Reflet de la carte de l'image ---------- */}
              <div className={styles.imageCardFrameReflect}>
                <div className={styles.imageCardReflect}>
                  <Image
                    className={styles.image}
                    alt="Reflet de la photo de Steven Schramiak"
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
                href="https://linkedin.com/company/your-company"
                variant="default"
                ariaLabel="Visit LinkedIn"
              />

              <SocialIcon
                type="location"
                href="https://example.com/location"
                variant="default"
                ariaLabel="View location"
              />
              <SocialIcon
                type="email"
                href="mailto:contact@example.com"
                variant="default"
                ariaLabel="Send an email"
              />
              <SocialIcon
                type="whatsapp"
                href="https://wa.me/123456789"
                variant="default"
                ariaLabel="Chat on WhatsApp"
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <blockquote className={styles.quote}>
              Chaque projet passe par l&apos;établissement d&apos;une relation
              de confiance et d&apos;un système de collaboration, en vue de
              contribuer à votre réussite ainsi qu&apos;à celle de vos clients.
            </blockquote>

            <span className={styles.separator}></span>

            <article className={styles.presentationContainer}>
              <div className={styles.presentationTitles}>
                <h4 className={styles.name}>
                  <span className={styles.small}>Steven </span>Schramiak
                </h4>
                <h5 className={styles.role}>Consultant financier</h5>
              </div>

              <div className={styles.descriptionsContainer}>
                <p className={styles.description}>
                  Bienvenue, je suis Steven Schramiak, consultant en management
                  financier avec une forte polyvalence et un esprit
                  entrepreneurial. Avec plus de 10 ans d expérience dans le
                  domaine, j ai aidé de nombreuses entreprises à optimiser leur
                  gestion financière et opérationnelle. Mon parcours
                  professionnel m a permis de développer une expertise pointue
                  en controlling, gestion de projet et création de startups.
                </p>
                <p className={styles.description}>
                  Ayant collaboré avec des PME et des start-ups de divers
                  secteurs, j ai acquis une riche expérience dans des industries
                  telles que la construction, les services aux entreprises, le
                  commerce de détail et la vente en ligne. Mon approche est
                  centrée sur la mise en place de solutions innovantes et
                  adaptées aux besoins spécifiques de chaque entreprise, tout en
                  assurant une transparence et une confidentialité totale.
                </p>
              </div>
            </article>

            <button className={styles.button}>
              <Link
                className={styles.link}
                href="/"
                title="Learn more about us"
              >
                Découvrez mon parcours
              </Link>
            </button>
          </div>
        </div>

        {/* ---------- Reflet de la carte ---------- */}
        <div className={styles.cardFrameReflect}>
          <div className={styles.cardReflect}></div>
        </div>
      </div>
    </div>
  );
}
