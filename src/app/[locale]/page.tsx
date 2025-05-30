import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Introduction from '@/components/pages/Introduction/Introduction';
import Hero from '@/components/pages/Hero/Hero';
import About from '@/components/pages/About/About';
import MyServices from '@/components/pages/MyServices/MyServices';
import Realisations from '@/components/pages/Realisations/Realisations';
import Contact from '@/components/pages/Contact/Contact';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

// 1) Génération des meta-tags pour <head> :
export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'metadata.home',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('pages.home');

  return (
    <main className={styles.main}>
      <section className={styles.introductionSection}>
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
    </main>
  );
}
