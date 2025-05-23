import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // 1️⃣ Validation de la locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // 2️⃣ Import du JSON complet
  const messages = (await import(`../messages/${locale}.json`)).default;

  // 3️⃣ On renvoie TOUT l’objet
  return { messages };
});
