'use client';

import React, { FormEvent, useState } from 'react';
import styles from './ContactForm.module.scss';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

export default function ContactForm() {
  // Etat pour les données du formulaire
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  // Etat pour gérer les messages de retour
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour valider le formulaire
  const validateForm = (): boolean => {
    const { firstName, lastName, email, message } = formData;
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires.');
      return false;
    }
    // Expression régulière pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Veuillez entrer une adresse email valide.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation du formulaire avant l'envoi
    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setErrorMessage(
          data.error || 'Une erreur est survenue. Veuillez réessayer.'
        );
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      setStatus('error');
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Prénom *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Nom *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">Entreprise</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Champ honeypot pour lutter contre le spam */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="honeypot">Ne pas remplir</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value=""
            onChange={() => {}}
          />
        </div>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {status === 'success' && (
          <p className={styles.success}>
            Votre message a été envoyé avec succès !
          </p>
        )}

        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
}
