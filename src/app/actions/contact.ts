'use server';

import { z } from 'zod';
import FormDataSDK from 'form-data';
import Mailgun from 'mailgun.js';
import sanitizeHtml from 'sanitize-html';
import { rateLimiter } from '@/lib/rateLimiter';
import { headers } from 'next/headers';

/*-------------------------------*
//* SCHEMA ZOD POUR LA VALIDATION
*-------------------------------*/
const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(1, 'Le message est requis'),
});

/*-------------------------------*
//* TYPE UTILISATEUR
*-------------------------------*/
type ContactInput = z.infer<typeof contactSchema>;

/*-------------------------------*
//* FONCTION PRINCIPALE : sendContactEmail
// - Server Action (Node.js Runtime)
// - Rate limiting par IP
// - Valide les données via Zod
// - Envoie l’e-mail via Mailgun.js
// - Retourne { success: boolean; errors?: Record<string,string[]> }
*-------------------------------*/
export async function sendContactEmail(form: FormData) {
  //--------------------- 1) Rate limiting :
  const ip = headers().get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  try {
    await rateLimiter.consume(ip);
  } catch {
    return {
      success: false,
      errors: { rateLimit: ['Trop de requêtes – réessayez dans 1 minute'] },
    };
  }

  //--------------------- 2) Extraction des champs et validation Zod :
  const dataObj = Object.fromEntries(form.entries()) as Record<string, string>; //         form.entries() retourne un Iterable<[string, FormDataEntryValue]>

  const parsed = contactSchema.safeParse(dataObj);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  let { name, email, message } = parsed.data as ContactInput;

  //--------------------- 3) Sanitisation du message :
  // On retire tout HTML ou code malicieux :
  message = sanitizeHtml(message, {
    allowedTags: [], // aucun tag autorisé
    allowedAttributes: {}, // aucune attrib autorisée
  });

  //--------------------- 4) Envoi Mailgun avec try/catch :
  // FormDataSDK est nécessaire à mailgun.js pour construire la requête POST
  const mg = new Mailgun(FormDataSDK).client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY!,
  });

  try {
    const mgRes = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `no-reply@${process.env.MAILGUN_DOMAIN}`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
    });
    console.log('Mailgun response:', mgRes);
  } catch (err: any) {
    console.error('Mailgun error:', err);
    return {
      success: false,
      errors: { mailgun: [err.message || "Erreur lors de l'envoi du mail"] },
    };
  }

  //--------------------- 4) Retour cers le client :
  return { success: true };
}
