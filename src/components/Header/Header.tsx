import { Link } from '@/navigation';
import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

export default function Header() {
  return (
    <Link href={'/'}>
      <p>Home</p>
      <LocaleSwitcher />
    </Link>
  );
}
