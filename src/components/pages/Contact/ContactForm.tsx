// 'use client';

// import React, { useState } from 'react';
// import styles from './ContactForm.module.scss';
// import Button from '@/components/common/Button';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }

// /**
//  * Composant de formulaire de contact
//  * @returns {React.ReactElement} - Élément React représentant le formulaire de contact
//  */
// export default function ContactForm() {
//   // Etat pour stocker les données du formulaire
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: '',
//   });
//   // Etat pour gérer le statut de l'envoi du formulaire
//   const [status, setStatus] = useState<
//     'idle' | 'sending' | 'success' | 'error'
//   >('idle');
//   // Etat pour stocker les message d'erreur
//   const [errorMessage, setErrorMessage] = useState<string>('');

//   // Remplacer par useTranslations lorsque vous gérez les traductions
//   // const t = useTranslations('ContactForm');

//   /**
//    * Gestionnaire de changement pour les champs du formulaire
//    * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Événement de changement
//    */
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   /**
//    * Gestionnaire de soumission du formulaire
//    * @param {React.FormEvent} e - Événement de soumission
//    */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('sending');
//     setErrorMessage(''); // Réinitialiser le message d'erreur

//     try {
//       const response = await fetch('/api/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setStatus('success');
//         // Rénitialisation des champs du formulaire
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         setStatus('error');
//         setErrorMessage(result.error || "Une erreur s'est produite.");
//       }
//     } catch (error) {
//       console.error('Erreur:', error);
//       setStatus('error');
//       setErrorMessage(
//         "Une erreur s'est produite lors de l'envoi de votre message."
//       );
//     }
//   };

//   return (
//     <div className={styles.contactFormContainer}>
//       <h3 className={styles.formTitle}>Contact</h3>

//       <form className={styles.contactForm} onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <input
//             className={styles.input}
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="Votre prénom *"
//             required
//           />

//           <input
//             className={styles.input}
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Votre nom *"
//             required
//           />

//           <input
//             className={styles.input}
//             type="text"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Votre adresse mail *"
//             required
//           />

//           <textarea
//             className={styles.input}
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Votre message "
//             required
//           />
//         </div>

//         <Button variant="primary">Envoyer</Button>
//       </form>
//     </div>
//   );
// }

'use client';

import React, { FormEvent, useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import { sendContactEmail } from '@/app/actions/contact';

/*-------------------------------*
//* COMPOSANT ContactForm
// - Honeypot + rate-limit
// - Utilise une ref pour le <form>
// - Reprend new FormData(form) en toute sécurité
// - Gère feedback erreurs / succès
*-------------------------------*/
export default function ContactForm() {
  //--------------------- Référence au formulaire :
  const formRef = useRef<HTMLFormElement>(null);
  //--------------------- Etat local pour feedback :
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<string, string[]>>>({});
  const [success, setSuccess] = useState(false);

  /*-------------------------------*
  //* HANDLER DE SOUMISSION
  *-------------------------------*/
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setErrors({});
    setSuccess(false);

    //--------------------- 1) Honeypot : champs caché :
    const form = formRef.current!;
    const hp = (form.elements.namedItem('hp_field') as HTMLInputElement).value;
    if (hp) {
      setErrors({ honeypot: ['Bot détecté'] });
      setSending(false);
      return;
    }

    //--------------------- 2) Construire FormData et appeler Server Action :
    const fd = new FormData(form);
    const result = await sendContactEmail(fd);

    //--------------------- 3) Gestion du feedback :
    if (result.success) {
      setSuccess(true);
      form.reset();
    } else {
      // toujours passer un objet, même vide
      setErrors(result.errors ?? {});
    }
    setSending(false);
  }

  //--------------------- Rendu du formulaire :
  return (
    <>
      <form
        ref={formRef}
        className={styles.contactForm}
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Honeypot (invisible) */}
        <input
          type="text"
          name="hp_field"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Nom */}
        <label htmlFor="name">Votre nom</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={styles.input}
        />

        {/* E-mail */}
        <label htmlFor="email">Votre e-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={styles.input}
        />

        {/* Message */}
        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          required
          className={styles.textarea}
        />

        {/* Bouton */}
        <button
          type="submit"
          disabled={sending}
          className={styles.submitButton}
        >
          {sending ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>

      {/*-----------------------------------------------------------------------*/}
      {/* Conteneur ACCESSIBLE pour les retours utilisateur (erreurs & succès) */}
      {/*-----------------------------------------------------------------------*/}
      <div aria-live="polite" role="status" className={styles.feedback}>
        {errors.honeypot && (
          <p className={styles.error}>{errors.honeypot.join(', ')}</p>
        )}
        {errors.rateLimit && (
          <p className={styles.error}>{errors.rateLimit.join(', ')}</p>
        )}
        {errors.name && (
          <p className={styles.error}>{errors.name.join(', ')}</p>
        )}
        {errors.email && (
          <p className={styles.error}>{errors.email.join(', ')}</p>
        )}
        {errors.message && (
          <p className={styles.error}>{errors.message.join(', ')}</p>
        )}
        {errors.mailgun && (
          <p className={styles.error}>{errors.mailgun.join(', ')}</p>
        )}
        {success && (
          <p className={styles.success}>
            Merci ! Votre message a bien été envoyé.
          </p>
        )}
      </div>
    </>
  );
}
