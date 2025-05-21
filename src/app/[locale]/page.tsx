import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Introduction from '@/components/pages/Introduction/Introduction';
import Hero from '@/components/pages/Hero/Hero';
import About from '@/components/pages/About/About';
import MyServices from '@/components/pages/MyServices/MyServices';
import Realisations from '@/components/pages/Realisations/Realisations';
import Contact from '@/components/pages/Contact/Contact';
import ContactV2 from '@/components/pages/Contact/ContactV2';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('HomePage');

  return (
    <main className={styles.main}>
      <section id="introduction" className={styles.introductionSection}>
        <Introduction />
      </section>

      <section className={styles.heroSection}>
        <Hero />
      </section>

      <section id="about" className={styles.aboutSection}>
        <About />
      </section>

      <section id="services" className={styles.servicesSection}>
        <MyServices />
      </section>

      <section className={styles.realisationsSection}>
        <Realisations />
      </section>

      <section id="contact" className={styles.contactSection}>
        <Contact />
      </section>

      <section className={styles.contactV2Section}>
        <ContactV2 />
      </section>
    </main>
  );
}
