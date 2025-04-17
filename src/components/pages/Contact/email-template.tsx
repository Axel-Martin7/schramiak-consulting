import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/**
 * Template de l'email de contact
 * @param {EmailTemplateProps} props - Les données du formulaire de contact
 * @returns {React.ReactElement} - Élément React représentant l'email
 */
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h1>Nouveau message de contact</h1>
    <p>
      <strong>Prénom :</strong> {firstName}
    </p>
    <p>
      <strong>Nom :</strong> {lastName}
    </p>
    <p>
      <strong>Email :</strong> {email}
    </p>
    <p>
      <strong>Message :</strong>
    </p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
