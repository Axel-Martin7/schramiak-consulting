/*
Ce fichier configure Next.js en ajoutant des fonctionnalités spécifiques via des plugins, comme 'next-intl' qui permet de gérer les langues et les traductions dans l'application.
Il sert de point central pour intégrer le plugin a la configuration de Next.
*/

import createNextIntlPlugin from 'next-intl/plugin';

/** Plugin i18n */
const withNextIntl = createNextIntlPlugin();

/** En-têtes de sécurité globales */
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src  'self'",
      "style-src   'self'",
      "img-src     'self' data:",
      "connect-src 'self' https://api.mailgun.net",
    ].join('; '),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Autres configurations Next.js ici

  // 1) Appliquer les headers de sécurité sur toutes les routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
