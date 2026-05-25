# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your astrology website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

## Step 5: Configure Your Project

### Option 1: Environment Variables (Recommended)

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Option 2: Direct Configuration

Edit `src/config/emailjs.ts` and replace the placeholder values:

```typescript
export const emailjsConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here', 
  publicKey: 'your_public_key_here',
  toEmail: 'shivaanagh@gmail.com'
};
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure you're using the correct public key
2. **Template Not Found**: Verify your template ID is correct
3. **Service Not Found**: Check your service ID
4. **Emails Not Arriving**: Check spam folder, verify email service setup

### EmailJS Limits:

- Free plan: 200 emails/month
- Rate limit: 50 emails/hour per service

## Security Notes

- Never expose your private key in client-side code
- Use environment variables for sensitive data
- Consider adding reCAPTCHA for production use

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/