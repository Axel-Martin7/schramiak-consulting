/*
Ce fichier configure Next.js en ajoutant des fonctionnalités spécifiques via des plugins, comme 'next-intl' qui permet de gérer les langues et les traductions dans l'application.
Il sert de point central pour intégrer le plugin a la configuration de Next.
*/

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Autres configurations Next.js ici
};

export default withNextIntl(nextConfig);
