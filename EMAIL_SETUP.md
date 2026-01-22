# Contact Form Email Setup Guide - Resend

The contact form at `/contatti` now uses **Resend** to send emails to `info@tendedatettoecampeggio.it`. Resend is recommended by Vercel for sending emails from serverless functions.

## Why Resend?

✅ **Purpose-built for serverless** - Works perfectly with Vercel Functions  
✅ **Simple API** - No SMTP configuration needed  
✅ **Reliable delivery** - Professional email infrastructure  
✅ **Real-time analytics** - Track email opens and clicks  
✅ **Free tier available** - 100 emails/day on free plan  
✅ **Easy setup** - Just one API key needed  

## How It Works

1. **Frontend**: Users fill out the contact form at `/contatti`
2. **API Endpoint**: Form data is sent to `/api/send-email` (Vercel serverless function)
3. **Resend Service**: API calls Resend with form details
4. **Email Delivery**: Resend sends emails to admin and user
5. **Confirmation**: User sees success message with toast notification

## Setup Instructions

### 1. Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up with email or GitHub
3. Verify your email
4. Go to **Audience** and add your domain or confirm default domain

### 2. Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Copy the key (starts with `re_`)

### 3. Add Environment Variable to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select project: `dev.tendedatettoecampeggio.it`
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_api_key_here` (paste your key)
5. Click **Add**
6. **Redeploy** your project for changes to take effect

### 4. (Optional) Add Local .env.local

For local testing:

```env
RESEND_API_KEY=re_your_api_key_here
```

Then restart your dev server.

### 5. Verify Your Email Domain

The sender email is: `noreply@tendedatettoecampeggio.it`

**Option A: Use Resend's default domain (fastest)**
- Your domain name will be added automatically
- Resend will provide DKIM/SPF setup instructions
- Follow the instructions in Resend dashboard → **Domains**

**Option B: Use custom domain**
1. In Resend, go to **Domains**
2. Click **Add Domain**
3. Enter: `tendedatettoecampeggio.it`
4. Add DNS records provided by Resend
5. Verify domain

## Testing

### Local Testing
1. Set `RESEND_API_KEY` in `.env.local`
2. Run `npm run dev`
3. Go to `http://localhost:5173/contatti`
4. Fill out the form and submit
5. Check console for success/error messages

### Production Testing (Vercel)
1. Make sure environment variable is set in Vercel
2. Deploy: `git push` or `vercel deploy`
3. Wait for deployment to complete
4. Go to `https://dev.tendedatettoecampeggio.it/contatti`
5. Submit the form
6. Check your email for:
   - **Admin notification** at `info@tendedatettoecampeggio.it`
   - **Confirmation email** at the address you entered

## Email Templates

### 1. Admin Notification (to info@tendedatettoecampeggio.it)

**From**: User's email (via reply-to)  
**Subject**: `[Subject Category] Nuovo messaggio da [Name]`  
**Body**: Formatted message with user details

### 2. User Confirmation (to user's email)

**From**: Tende da Tetto <noreply@tendedatettoecampeggio.it>  
**Subject**: Abbiamo ricevuto il tuo messaggio - Tende da Tetto e Campeggio  
**Body**: Confirmation with message recap and community links

## Contact Form Fields

- **Nome** (Name) - Required
- **Email** - Required, validated
- **Argomento** (Subject) - Required, dropdown:
  - Informazioni generali
  - Proposta di partnership
  - Segnalazione campeggio
  - Altro
- **Messaggio** (Message) - Required

## Code Structure

### Backend (`api/send-email.ts`)

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: VercelRequest, res: VercelResponse) => {
  // Validate request
  // Send admin email
  // Send user confirmation email
  // Return success/error
};
```

### Frontend (`src/pages/Contact.tsx`)

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  // Validate form data
  const response = await fetch('/api/send-email', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });
  // Handle response
};
```

## Monitoring & Analytics

In Resend dashboard:

- **Activity** - View all sent emails
- **Analytics** - Track opens, clicks, bounces
- **Webhooks** - Set up real-time notifications
- **API** - View request logs

## Pricing

| Plan | Price | Emails/Month |
|------|-------|--------------|
| Free | $0 | 3,000 |
| Pro | $20 | Unlimited |

Emails are tracked and count towards the monthly limit.

## Troubleshooting

### "RESEND_API_KEY is not defined"
- ✅ Check API key is set in Vercel environment variables
- ✅ Verify you clicked "Redeploy" after adding the variable
- ✅ Restart local dev server after updating `.env.local`

### "Emails not being sent"
- ✅ Check Resend dashboard → **Activity** for errors
- ✅ Verify email address is not on spam list
- ✅ Check if domain needs verification
- ✅ Review form validation error messages

### "Email going to spam"
- ✅ Verify sender domain in Resend
- ✅ Add SPF/DKIM records (Resend provides these)
- ✅ Add your domain to Resend verified domains
- ✅ Check email headers in Resend activity log

### "Form submission shows error"
- Check browser console (F12) for error messages
- Go to Vercel dashboard → **Logs** and search for errors
- Verify `RESEND_API_KEY` is correctly set
- Test with valid email address

## Support

- **Resend Docs**: https://resend.com/docs
- **Resend Community**: https://resend.com/community
- **Vercel Docs**: https://vercel.com/docs/functions/serverless-functions
- **GitHub Issues**: Check your project repository

## Next Steps

✅ Create Resend account  
✅ Get API key  
✅ Add to Vercel environment variables  
✅ Verify your domain  
✅ Test contact form  
✅ Monitor email delivery  

## Additional Features

Consider adding to contact form:

- **Rate limiting** - Prevent spam/abuse
- **Honeypot field** - Anti-bot protection
- **CAPTCHA** - reCAPTCHA v3 integration
- **Attachments** - File upload support
- **Rich HTML** - Better email formatting
- **Auto-responder** - Schedule replies
- **CRM Integration** - Save contacts to database
- **Webhooks** - Trigger other actions on email sent

## References

- [Resend Official Docs](https://resend.com/docs)
- [Resend + Vercel Functions](https://resend.com/docs/send-with-vercel-functions)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Email Best Practices](https://resend.com/docs/best-practices)

