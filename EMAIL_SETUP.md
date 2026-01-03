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

4. **Verify your domain** (optional but recommended):
   - For production, you'll want to verify your domain with Resend
   - This allows you to send from your own domain (e.g., `noreply@yourdomain.com`)
   - For now, the form will use Resend's default sender address

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

## Troubleshooting

- If emails aren't sending, check:
  1. Your `.env.local` file exists and has the correct API key
  2. You've restarted your dev server after adding the API key
  3. Your Resend account is active
  4. Check the server console for any error messages

