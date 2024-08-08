/*
Ce fichier est utilisé pour gérer les aspects liés à la localisation des URL dans l'application Next.js. Ses objectifs sont:
- Gestion des locales: Il configure les locales supportées et définit une locale par default à utiliser lorsque la locale de l'URL demandée ne correspond pas à une des locales supportées.
- Redirection et Réécriture: Il fait correspondre les URL internationalisées et redirige ou réécrit les URL en fonction de la locale, garantissant que les utilisateurs voient le contenu dans la langue appropriée.
*/

import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  // Liste de toutes les locales qui sont supportées
  locales,
  // Utilisé lorsqu'aucune locale ne correspond
  defaultLocale: 'en',
});

export const config = {
  // Correspond uniquement aux chemins internationalisés
  matcher: ['/', '/(fr|en)/:path*'],
};
