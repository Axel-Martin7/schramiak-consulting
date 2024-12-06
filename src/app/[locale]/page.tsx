import Image from 'next/image';
import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import Introduction from '@/components/Sections/Introduction/Introduction';

import Hero from '@/components/Sections/Hero/Hero';

import MyServices from '@/components/Sections/MyServices/MyServices';
import About from '@/components/Sections/About/About';
import Realisations from '@/components/Sections/Realisations/Realisations';
import Contact from '@/components/Sections/Contact/Contact';
import V2Introduction from '@/components/Sections/Introduction/V2Introduction';
import V2Hero from '@/components/Sections/Hero/V2Hero';
import V2About from '@/components/Sections/About/V2About';
import V2Services from '@/components/Sections/MyServices/V2Services';
import V2Realisations from '@/components/Sections/Realisations/V2Realisations';
import V2Contact from '@/components/Sections/Contact/V2Contact';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk

  const t = useTranslations('HomePage');

  return (
    // <main className={styles.main}>
    //   <section className={styles.introductionSection}>
    //     {/* <V2Introduction /> */}
    //   </section>
    //   <section className={styles.heroSection}>{/* <V2Hero /> */}</section>
    //   <section className={styles.aboutSection}>{/* <V2About /> */}</section>
    //   <section className={styles.servicesSection}>
    //     {/* <V2Services /> */}
    //   </section>
    //   <section className={styles.realisationsSection}>
    //     {/* <V2Realisations /> */}
    //   </section>
    //   <section className={styles.contactSection}>{/* <V2Contact /> */}</section>
    //   {/* <Introduction /> */}
    //   {/* <Hero /> */}
    //   {/* <MyServices /> */}
    //   {/* <About /> */}
    //   {/* <Realisations /> */}
    //   {/* <Contact /> */}
    // </main>

    <main className={styles.main}>
      <section className={styles.introductionSection}>Introduction</section>

      <section className={styles.heroSection}>hero</section>

      <section className={styles.aboutSection}>About</section>

      <section className={styles.servicesSection}>Services</section>

      <section className={styles.realisationsSection}>Realisations</section>

      <section className={styles.contactSection}>Contact</section>
    </main>
  );
}
