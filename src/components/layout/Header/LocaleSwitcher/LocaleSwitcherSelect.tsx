'use client';

import styles from './LocaleSwitcherSelect.module.scss';
import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState, useTransition } from 'react';

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const t = useTranslations('common.localeSwitcher');
  const router = useRouter();
  const pathname = usePathname();

  const [isChecked, setIsChecked] = useState(defaultValue === 'en');
  const [isPending, startTransition] = useTransition();

  // Mise a jour de l'état local si la prop change
  useEffect(() => {
    setIsChecked(defaultValue === 'en');
  }, [defaultValue]);

  // On part du principe qu'en cas d'input coché, la locale sera 'en', sinon 'fr'
  function onToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsChecked(checked);
    // Délai pour laisser le temps à l'animation de se jouer:
    setTimeout(() => {
      const newLocale = checked ? 'en' : 'fr';
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    }, 200); // 300ms correspondant à la durée de la transition CSS
  }

  return (
    <div
      className={styles.switcherContainer}
      role="group"
      aria-label={t('label')}
    >
      <span className={styles.label}>FR</span>

      <label className={styles.switcher}>
        <input
          type="checkbox"
          id="locale-switch"
          name="locale"
          onChange={onToggleChange}
          checked={isChecked}
          className={styles.input}
          role="switch"
          aria-checked={isChecked}
          aria-label={t('label')}
        />

        <span className={styles.slider} aria-hidden></span>
      </label>

      <span className={styles.label}>EN</span>
    </div>
  );
}
