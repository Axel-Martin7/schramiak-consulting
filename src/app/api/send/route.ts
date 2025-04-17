import * as React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/pages/Contact/email-template';

// Initialisation de Resend avec le clé API depuis les variables d'environements
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Gestionnaire de la méthode POST pour envoyer un email
 * @param {Request} request - La requête entrante
 * @returns {Promise<Response>} - La réponse à la requête
 */
export async function POST(request: Request) {
  try {
    // Récupération des données du formulaire depuis le corp de la requete
    const { firstName, lastName, email, message } = await request.json();

    // Validation des données
    if (
      typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis.' }),
        { status: 400 }
      );
    }
    // Validation de l'email avec une regex simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Adresse email invalide.' }),
        { status: 400 }
      );
    }

    // Envoyer l'email en utilisant Resend:
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [process.env.EMAIL_TO!],
      subject: 'Nouveau message de contact',
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        message,
      }) as React.ReactElement,
    });

    // Retourner une réponse réussie
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    // Retourne une réponse d'erreur
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi de l'email" }),
      { status: 500 }
    );
  }
}
