'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import Button from '@/components/common/Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/**
 * Composant de formulaire de contact
 * @returns {React.ReactElement} - Élément React représentant le formulaire de contact
 */
export default function ContactForm() {
  // Etat pour stocker les données du formulaire
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  // Etat pour gérer le statut de l'envoi du formulaire
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  // Etat pour stocker les message d'erreur
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Remplacer par useTranslations lorsque vous gérez les traductions
  // const t = useTranslations('ContactForm');

  /**
   * Gestionnaire de changement pour les champs du formulaire
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Événement de changement
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Gestionnaire de soumission du formulaire
   * @param {React.FormEvent} e - Événement de soumission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage(''); // Réinitialiser le message d'erreur

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        // Rénitialisation des champs du formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setErrorMessage(
        "Une erreur s'est produite lors de l'envoi de votre message."
      );
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <h3 className={styles.formTitle}>Contact</h3>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Votre prénom *"
            required
          />

          <input
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Votre nom *"
            required
          />

          <input
            className={styles.input}
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre adresse mail *"
            required
          />

          <textarea
            className={styles.input}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message "
            required
          />
        </div>

        <Button variant="primary">Envoyer</Button>
      </form>
    </div>
  );
}
