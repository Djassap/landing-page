'use server'

import { Resend } from 'resend';
import { siteConfig } from '@/config/content';

export type ActionState = {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string[];
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' };
  }

  // Check for Resend API key
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return { 
      success: false, 
      message: "Configuration email manquante. Veuillez configurer RESEND_API_KEY." 
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'DjassApp <onboarding@resend.dev>',
      to: [siteConfig.contact.email],
      replyTo: email,
      subject: `Nouveau message de ${name} via DjassApp`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            📬 Nouveau message de contact
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>👤 Nom:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>🏢 Entreprise:</strong> ${company || 'Non renseignée'}</p>
            <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>📱 Téléphone:</strong> ${phone || 'Non renseigné'}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <p style="margin: 0 0 10px 0;"><strong>💬 Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact DjassApp.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: "Une erreur est survenue lors de l'envoi du message." };
    }

    return { success: true, message: 'Message envoyé avec succès !' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: "Une erreur est survenue lors de l'envoi du message." };
  }
}
