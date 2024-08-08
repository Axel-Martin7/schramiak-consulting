'use client';

import { useLocale } from 'next-intl';
import styles from './LocaleSwitcher.module.scss';
import { ChangeEvent } from 'react';
import { useRouter } from '@/navigation';

const LocaleSwitcher = () => {
  const currentLocale = useLocale();
  const router = useRouter();

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    router.replace(`${nextLocale}`);
  };

  return (
    <label>
      <select
        className={styles.select}
        defaultValue={currentLocale}
        onChange={changeHandler}
      >
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
    </label>
  );
};

export default LocaleSwitcher;
