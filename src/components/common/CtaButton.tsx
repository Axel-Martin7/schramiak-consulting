import React from 'react';
import styles from './CtaButton.module.scss';
import { Link } from '@/navigation';

interface CtaButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  'aria-label'?: string;
}

export default function CtaButton({
  href,
  variant = 'primary',
  children,
  'aria-label': ariaLabel,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={[styles.button, styles[variant]].join(' ')}
      aria-label={ariaLabel}
    >
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.outline} />
        <div className={styles.content}>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </Link>
  );
}
