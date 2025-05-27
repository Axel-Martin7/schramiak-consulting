import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { montserrat } from '@/styles/font';
import '@/styles/globals.scss';
import { ReactNode } from 'react';
import { locales } from '@/config';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ScrollIndicator from '@/components/common/ScrollIndicator';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// 1) Génère les routes statiques [fr] et [en] :
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 2) Métadonnées **globales** + par défaut **localisées** (tout ce qu’on avait dans `export const metadata` + title/desc traduits)
export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'metadata.layout' });

  const origin = 'https://https://ssc-consulting.vercel.app';
  const pathPrefix = `/${locale}`;

  return {
    // Base pour les URLs relatives (canonical, alternates…)
    metadataBase: new URL(origin),
    // Titre et description traduits
    title: t('title'),
    description: t('description'),
    // Mots-clés (meta keywords)
    keywords: [
      'consultant financier',
      'CFO à temps partiel',
      'contrôle de gestion',
      'audit financier gratuit',
      'optimisation trésorerie',
      'reporting sur-mesure',
      'prévisions financières',
      'business plan',
      'accompagnement PME',
      'accompagnement startups',
      'gestion opérationnelle',
      'planification stratégique',
      'pilotage de projet',
      'processus financiers',
      'levée de fonds',
      'Genève',
      'Suisse',
    ],

    // Robots : indexer et suivre
    robots: { index: true, follow: true },
    // hreflang : versions FR et EN de **toutes** les pages
    alternates: {
      languages: {
        fr: `${origin}/fr`,
        en: `${origin}/en`,
      },
    },

    // URL canonique de la home (sera fusionné/écrasé par la page si besoin)
    canonical: `${origin}${pathPrefix}`,
  };
}

export default async function Layout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Appeler cette fonction sur chaques pages et layout ou on souhaite activer le rendu statique. https://www.youtube.com/watch?v=h3IA_Iax-dk
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <ScrollIndicator />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
