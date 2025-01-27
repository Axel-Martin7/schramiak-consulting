import React from 'react';
import styles from './Button.module.scss';
import { barlow } from '@/styles/font';
import { Link } from '@/navigation';

/**  UTILISATION DANS LES PAGES : 
 
 * ------ 1) BOUTON DE SOUMISSION DU FORMULAIRE : 
 <form onSubmit={handleSubmit}>
   ...
  <ButtonV2 type="submit" variant="primary">
    Envoyer
  </ButtonV2>
</form>

* ------ 2) LIEN INTERNE VERS UNE AUTRE PAGE : 
<ButtonV2 variant="primary" href="/contact">
  Contactez-nous
</ButtonV2>

* ------ 3) LIEN VERS UNE SECION SUR LA MEME PAGE : 
Si on souhaite faire défiler la page vers une section (id="targetSection"), alors :
<ButtonV2 variant="secondary" href="#targetSection">
  Aller à la section
</ButtonV2>

NOTE : Pour une ancre interne sur la meme page, on est pas obligé d'utiliser <Link>, le <a> suffit. 
Mais dans le code ci dessous, s'il détecte un 'href="#...", il rendra un <Link>
(puisque ca ne commence pas par http), ce qui reste fonctionnel également.

* ------ 4) LIEN EXTERNE : 
<ButtonV2 variant="secondary" href="https://www.google.com" isExternal>
  Aller sur Google
</ButtonV2>

(ou ne pas mettre isExternal={true}, et laisser la logique 'href.startsWith('http') décider)
 */

interface ButtonProps {
  children: React.ReactNode; // Enfant du bouton (texte, icone, etc.)
  variant?: 'primary' | 'secondary'; // Variante de style
  type?: 'submit' | 'button' | 'reset'; // Type du <button> HTML (submit, button, reset). Ignoré si on rend un <Link> ou <a>
  href?: string; // URL/Lien. Si présent, on rend un lien plutot qu'un <button>.
  isExternal?: boolean; // Indique si le lien est externe : 'true' => on ouvre un <a href=".." target="_blank" rel=“noopener" />. 'false' => on ouvre un <Link> interne de next.js . Par defaut, on met 'false' si c'est un chemin qui commence par '/' ou '#'.
  onClick?: () => void; // Fonction onClick (pour le <button>). Sera ignoré si c'est un lien.
  disabled?: boolean; // Désactive le bouton / lien (facultatif).
  className?: string; // Pour les classe supplémentaires
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  href,
  isExternal,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  /**
   * Détermine si c'est vraiment un lien externe :
   * - Si isExternal est précisé en props, on utilise cette valeur.
   * - Sinon, on regarde si href commence par 'http' (supposons) pour forcer l'externe.
   */
  const forcedIsExternal =
    isExternal !== undefined ? isExternal : href?.startsWith('http');

  // Construction de la classe CSS (variant + disabled)
  const combinedClassName = [
    styles.button,
    styles[variant], // .primary ou .secondary
    barlow.className, // font barlow
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Contenu commun dans tous les cas
  const content = (
    <>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.outline} />
        <div className={styles.content}>
          <span className={styles.text}>{children}</span>
        </div>
      </div>
    </>
  );

  // Si href n'est pas renseigné, c'est un simple <button>
  if (!href) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
      >
        {content}
      </button>
    );
  }

  // href est renseigné, on doit rendre un lien
  // 1) Si c'est un lien externe
  if (forcedIsExternal) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  // 2) Sinon, c'est un lien interne Next.js
  return (
    <Link href={href} className={combinedClassName}>
      {content}
    </Link>
  );
}
