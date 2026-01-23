import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if API key is set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({
      error: 'Email service not configured',
      details: 'RESEND_API_KEY is missing. Please set it in Vercel environment variables.',
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const subjectMap: Record<string, string> = {
      info: 'Informazioni generali',
      partnership: 'Proposta di partnership',
      segnalazione: 'Segnalazione campeggio',
      altro: 'Altro',
    };

    const subjectLabel = subjectMap[subject] || subject;

    // Send email to admin
    await resend.emails.send({
      from: 'Tende da Tetto <noreply@tendedatettoecampeggio.it>',
      to: 'info@tendedatettoecampeggio.it',
      reply_to: email,
      subject: `[${subjectLabel}] Nuovo messaggio da ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Nuovo messaggio da ${name}</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Argomento:</strong> ${subjectLabel}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <h3 style="color: #1f2937;">Messaggio:</h3>
          <p style="white-space: pre-wrap; color: #4b5563;">
            ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Rispondi a questa email per contattare ${name} direttamente.
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Tende da Tetto <noreply@tendedatettoecampeggio.it>',
      to: email,
      subject: 'Abbiamo ricevuto il tuo messaggio - Tende da Tetto e Campeggio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Ciao ${name}!</h2>
          <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo il prima possibile.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <h3 style="color: #1f2937;">Riepilogo del tuo messaggio:</h3>
          <p><strong>Argomento:</strong> ${subjectLabel}</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
            <p style="white-space: pre-wrap; color: #4b5563; margin: 0;">
              ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <h3 style="color: #1f2937;">Hai fretta?</h3>
          <p>Se hai una domanda urgente, unisciti al nostro gruppo Facebook dove puoi ricevere risposte più veloci dalla community:</p>
          <p>
            <a href="https://www.facebook.com/groups/375926353544064" style="display: inline-block; background-color: #1877F2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
              Vai al Gruppo Facebook (40K+ membri)
            </a>
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <p style="color: #9ca3af; font-size: 12px;">
            Cordiali saluti,<br />
            Il team di Tende da Tetto e Campeggio
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
