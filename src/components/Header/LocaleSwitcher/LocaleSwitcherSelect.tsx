// 'use client';

// import styles from './LocaleSwitcherSelect.module.scss';
// import { usePathname, useRouter } from '@/navigation';
// import { useParams } from 'next/navigation';
// import { ChangeEvent, ReactNode, useTransition } from 'react';

// type Props = {
//   children: ReactNode;
//   defaultValue: string;
//   label: string;
// };

// export default function LocaleSwitcherSelect({
//   children,
//   defaultValue,
//   label,
// }: Props) {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();
//   const params = useParams();

//   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value;
//     startTransition(() => {
//       router.replace(
//         // @ts-ignore
//         { pathname, params },
//         { locale: nextLocale }
//       );
//     });
//   }

//   return (
//     <label>
//       {/* <p>{label}</p> */}

//       <select
//         className={styles.select}
//         defaultValue={defaultValue}
//         disabled={isPending}
//         onChange={onSelectChange}
//       >
//         {children}
//       </select>
//     </label>
//   );
// }

'use client';

import styles from './LocaleSwitcherSelect.module.scss';
import { usePathname, useRouter } from '@/navigation';
import { useTransition } from 'react';

type Props = {
  defaultValue: string; // Nom de Props à changer ?
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // On part du principe qu'en cas d'input coché, la locale sera 'en', sinon 'fr'
  function onToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newLocale = event.target.checked ? 'en' : 'fr';
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className={styles.switchContainer}>
      <span className={styles.label}>FR</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={onToggleChange}
          checked={defaultValue === 'en'}
          className={styles.input}
        />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.label}>EN</span>
    </div>
  );
}
