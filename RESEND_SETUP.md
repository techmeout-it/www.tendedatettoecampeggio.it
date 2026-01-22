# Email Setup Checklist - Resend

Follow these steps to debug why emails aren't being sent:

## Step 1: Create Resend Account ✅

1. Go to https://resend.com
2. Sign up (free tier available)
3. Complete email verification

## Step 2: Get Your API Key ✅

1. Go to Resend dashboard: https://resend.com/api-keys
2. Create a new API key (starts with `re_`)
3. Copy the full key (e.g., `re_abc123xyz`)

## Step 3: Add to Vercel (CRITICAL!)

**This is required for email to work in production:**

1. Go to https://vercel.com/dashboard
2. Click your project: `dev.tendedatettoecampeggio.it`
3. Go to **Settings** tab (top navigation)
4. Click **Environment Variables** (left sidebar)
5. Add new variable:
   - **Name**: `RESEND_API_KEY` (exactly this)
   - **Value**: `re_your_full_key_here` (paste your key)
   - **Environments**: Check `Production`, `Preview`, `Development`
6. Click **Add** or **Save**
7. You'll see a message: "Redeployment Required"

## Step 4: Redeploy Your Project ✅

The environment variable only takes effect after redeployment:

**Option A: Via Vercel Dashboard**
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the 3 dots (...)
4. Click **Redeploy**

**Option B: Via Git**
1. Make a small change to your code
2. Push to GitHub: `git push origin main`
3. Vercel auto-deploys when you push

## Step 5: Verify Domain in Resend ✅

The sender email is: `noreply@tendedatettoecampeggio.it`

1. Go to Resend: https://resend.com/domains
2. You should see your domain
3. If not, click **Add Domain** → add `tendedatettoecampeggio.it`
4. Add the DNS records Resend provides to your domain registrar
5. Come back and verify the domain

## Step 6: Test ✅

1. Wait 5 minutes after redeploy
2. Go to: `https://dev.tendedatettoecampeggio.it/contatti`
3. Fill out the form with:
   - Name: Your name
   - Email: Your email
   - Subject: Any option
   - Message: Test message
4. Click **Invia Messaggio** (Send Message)
5. You should see success message
6. Check your email (and spam folder!)

## Troubleshooting

### "Email sent successfully" but no email arrives

**Problem**: API key not set in Vercel

**Solution**:
1. Go to Vercel → Your Project → Settings
2. Check if `RESEND_API_KEY` is listed under Environment Variables
3. If not there, add it (see Step 3 above)
4. **IMPORTANT**: Click "Redeploy" after adding the variable

### Email went to spam

**Solution**:
1. In Resend, verify your domain (see Step 5)
2. Add SPF and DKIM records to your domain DNS
3. Resend provides the records in the Domains section
4. Wait 24-48 hours for DNS propagation

### "Redeployment Required" message

**Solution**:
1. Go to Deployments tab
2. Click the latest deployment
3. Click 3 dots → **Redeploy**
4. Wait for deployment to finish (green checkmark)

### Form shows error message

**Check browser console** (F12 → Console tab):
- Look for error messages
- Copy the error and search it

**Check Vercel logs**:
1. Go to Deployments
2. Click latest deployment
3. Click **Logs** tab
4. Search for "send-email" or error messages

## Common Mistakes

❌ **Don't do this:**
- Set `RESEND_API_KEY=re_` without the actual key
- Copy API key from wrong account
- Forget to redeploy after adding environment variable
- Add variable to wrong project
- Use different variable name (must be exact: `RESEND_API_KEY`)

✅ **Do this:**
- Get the full API key from Resend (starts with `re_`)
- Paste entire key into Vercel
- Redeploy after adding environment variable
- Verify domain in Resend
- Wait 5 minutes before testing

## Quick Verification

To check if API key is working:

1. Open browser DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Submit contact form
5. Look for `send-email` request
6. Click it → Response tab
7. Should show: `{"success":true,"message":"Email sent successfully"}`

If you see error with details, the API key is not configured properly.

## Contact Resend Support

If emails still not working after all steps:

1. Check [Resend Docs](https://resend.com/docs)
2. Email: support@resend.com
3. Check your Resend account for email delivery logs

## Help Me Debug

If you still have issues, tell me:
1. ✅ Is `RESEND_API_KEY` shown in Vercel Environment Variables?
2. ✅ Did you click Redeploy after adding the variable?
3. ✅ Did the redeployment complete successfully?
4. ✅ Is the domain verified in Resend dashboard?
5. ✅ What error message do you see (if any)?
6. ✅ Check Vercel Logs for any errors
