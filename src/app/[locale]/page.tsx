import Image from 'next/image';
import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import Introduction from '@/components/pages/Introduction';
import Hero from '@/components/pages/Hero';
import About from '@/components/pages/About';
import MyServices from '@/components/pages/MyServices';
import Realisations from '@/components/pages/Realisations';
import Contact from '@/components/pages/Contact';

import V2Introduction from '@/components/Sections/Introduction/V2Introduction';
import V2Hero from '@/components/Sections/Hero/V2Hero';
import V2About from '@/components/Sections/About/V2About';
import V2Services from '@/components/Sections/MyServices/V2Services';
import V2Realisations from '@/components/Sections/Realisations/V2Realisations';
import V2Contact from '@/components/Sections/Contact/V2Contact';
import AboutV3 from '@/components/pages/AboutV3';

import ButtonV2 from '@/components/common/Button';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('HomePage');

  return (
    // <main className={styles.main}>

    //   <section className={styles.introductionSection}>
    //     <Introduction />
    //   </section>

    //  <section className={styles.heroSection}>
    //     <Hero />
    //   </section>

    //   <section className={styles.aboutSection}>
    //     <About />
    //   </section>

    //   <section className={styles.servicesSection}>
    //     <MyServices />
    //   </section>
    // </main>

    <main className={styles.main}>
      <section className={styles.introductionSection}>
        <Introduction />
      </section>

      <section className={styles.heroSection}>
        <Hero />
      </section>

      {/* <section className={styles.aboutSection}>
        <About />
      </section> */}

      <section className={styles.aboutv3Section}>
        <AboutV3 />
      </section>

      <section className={styles.servicesSection}>
        <MyServices />
      </section>
    </main>
  );
}
