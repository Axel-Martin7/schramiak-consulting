import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['en', 'fr'] as const; // définition des locales

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
