/* Ce fichier configure et fourni les messages de localisation (traductions) en fonction de la locale demandée par l'utilisateur:
- Validation des Locales: Il vérifie que la locale demandée est valide (parmi celles définies dans le tableau 'Locales')
- Chargement dynamique des Messages: Il charge dynamiquement les fichiers de traduction correspondants à la locale valide.
- Gestion des erreurs: il gère les cas ou la locale demandée n'est pas supportée en renvoyant une 404.
*/

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'fr'];

export default getRequestConfig(async ({ locale }) => {
  // Valide que le paramètre `locale` entrant est valide
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
