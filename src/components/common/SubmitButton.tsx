import React from 'react';
import styles from './CtaButton.module.scss';

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function SubmitButton({
  variant = 'primary',
  children,
  ...rest
}: SubmitButtonProps) {
  // On reprend les classes .button et .primary/.secondary
  const classNames = [styles.button, styles[variant]].join(' ');
  return (
    <button className={classNames} {...rest}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.outline} />
        <div className={styles.content}>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </button>
  );
}
