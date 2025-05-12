'use client';

import React, { FormEvent, useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import { sendContactEmail } from '@/app/actions/contact';
import SubmitButton from '@/components/common/SubmitButton';

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

  // On calcul si on doit afficher la zone de feedback ;
  const hasFeedback =
    success || Object.values(errors).some((arr) => arr && arr.length > 0);

  //--------------------- Rendu du formulaire :
  return (
    <form
      className={styles.contactForm}
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formTitleContainer}>
        <span className={styles.separator}></span>
        <h4 className={styles.formTitle}>Contact</h4>
        <span className={styles.separator}></span>
      </div>

      <div className={styles.fieldsGroup}>
        {/* Honeypot (invisible) */}
        <input
          className={styles.honeypot}
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Nom */}
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          placeholder="Votre nom"
          required
        />

        {/* E-mail */}
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="Votre adresse e-mail"
          required
        />

        {/* Message */}
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="Votre message…"
          required
        />
      </div>

      <div className={styles.submitWrapper}>
        <SubmitButton
          type="submit"
          variant="primary"
          disabled={sending}
          aria-label="Envoyer le message"
        >
          {sending ? 'Envoi…' : 'Envoyer'}
        </SubmitButton>
      </div>

      {/* Feedback accessible, rendu seulement si hasFeedback */}
      {hasFeedback && (
        <div className={styles.feedback} aria-live="polite" role="status">
          {Object.entries(errors).map(([field, msgs]) =>
            msgs?.map((msg, i) => (
              <p key={`${field}-${i}`} className={styles.error}>
                {msg}
              </p>
            ))
          )}
          {success && (
            <p className={styles.success}>
              Merci ! Votre message a bien été envoyé.
            </p>
          )}
        </div>
      )}
    </form>
  );
}
