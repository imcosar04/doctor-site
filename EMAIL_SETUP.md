# Email Setup Instructions

The consultation form is now configured to send emails to `cosarmd@gmail.com` when someone submits a consultation request.

## Setup Steps

1. **Create a Resend account** (if you don't have one):
   - Go to https://resend.com
   - Sign up for a free account (free tier includes 3,000 emails/month)

2. **Get your API Key**:
   - Once logged in, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name (e.g., "Doctor Site")
   - Copy the API key (starts with `re_`)

3. **Add the API Key to your environment**:
   - Create a `.env.local` file in the root of your project (if it doesn't exist)
   - Add the following line:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```
   - Replace `re_your_actual_api_key_here` with your actual API key

4. **Verify your domain** (REQUIRED for production):
   - Resend's test mode only allows sending to your verified email address
   - To send to other recipients (like `cosarmd@gmail.com`), you MUST verify a domain
   - Steps to verify:
     1. Go to https://resend.com/domains
     2. Click "Add Domain"
     3. Enter your domain (e.g., `yourdomain.com`)
     4. Add the DNS records Resend provides to your domain's DNS settings
     5. Wait for verification (usually takes a few minutes)
   - Once verified, update the `from` address in the API route to use your domain (e.g., `noreply@yourdomain.com`)
   - **Note**: Currently, emails are sent to your verified email (`imcosar04@gmail.com`) with CC to the doctor's email as a temporary workaround

5. **Restart your development server**:
   - Stop your current server (Ctrl+C)
   - Run `npm run dev` again to load the new environment variable

## Testing

After setup, test the form by:
1. Filling out the consultation form on your site
2. Submitting it
3. Checking `cosarmd@gmail.com` for the new consultation request email

## Email Format

The email will include:
- Patient's full name
- Email address (clickable)
- Phone number (clickable)
- Message (if provided)
- Reply-to set to the patient's email for easy response

## Vercel Deployment Setup

If your site is deployed on Vercel, you need to add the environment variable there as well:

1. **Go to your Vercel Dashboard**:
   - Visit https://vercel.com/dashboard
   - Select your project

2. **Add Environment Variable**:
   - Go to **Settings** → **Environment Variables**
   - Click **Add New**
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_iGAJn6ku_4H9ehVrkkNc1mvegtL4kpJpk` (or your actual API key)
   - Select **Production**, **Preview**, and **Development** environments
   - Click **Save**

3. **Redeploy**:
   - After adding the environment variable, go to **Deployments**
   - Click the three dots (⋯) on your latest deployment
   - Select **Redeploy**
   - This will trigger a new deployment with the environment variable

**Important**: `.env.local` only works for local development. For Vercel, you must add the environment variable in the Vercel dashboard.

## Troubleshooting

- If emails aren't sending, check:
  1. Your `.env.local` file exists and has the correct API key (for local development)
  2. You've added `RESEND_API_KEY` in Vercel's Environment Variables (for production)
  3. You've restarted your dev server after adding the API key (for local)
  4. You've redeployed after adding the environment variable in Vercel (for production)
  5. Your Resend account is active
  6. Check the server console/Vercel logs for any error messages


