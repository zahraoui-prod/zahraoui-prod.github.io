# EmailJS Setup Guide for SONARIQ MUSIC

This guide will help you set up EmailJS to enable the contact form to send real emails.

## 📋 Prerequisites

- An EmailJS account (free tier available at https://www.emailjs.com/)
- A Gmail account or other email service

## 🚀 Step-by-Step Setup

### 1. Create an EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account using your email
4. Verify your email address

### 2. Connect an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** in the left sidebar
3. Click **Add Service**
4. Choose **Gmail** (or your preferred email service)
5. Follow the authentication steps
6. Copy your **Service ID** (e.g., `service_xxxxx`)

### 3. Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Name it: `template_sonariq_contact`
4. Set the recipient email to your business email
5. Configure the template with these variables:

```
Subject: New Contact Form Submission - SONARIQ MUSIC

Body:
Name: {{from_name}}
Email: {{from_email}}
WhatsApp: {{whatsapp}}
YouTube Channel: {{youtube_channel}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

6. Save the template and copy your **Template ID** (e.g., `template_xxxxx`)

### 4. Get Your Public Key

1. Go to **Account** in the left sidebar
2. Click **API Keys**
3. Copy your **Public Key** (starts with `pk_`)

### 5. Update the Configuration

Open `client/src/hooks/useEmailJS.ts` and replace these values:

```typescript
const EMAILJS_SERVICE_ID = 'service_YOUR_SERVICE_ID'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_YOUR_TEMPLATE_ID'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'pk_YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

Also update the recipient email in the `sendEmail` function:

```typescript
const templateParams = {
  to_email: 'your-email@example.com', // Replace with your email
  // ... rest of the parameters
};
```

### 6. Test the Form

1. Start the development server: `pnpm dev`
2. Navigate to the contact form
3. Fill in the form and submit
4. Check your email to verify it works

## 🔒 Security Notes

- The **Public Key** is intentionally public and safe to expose in frontend code
- Never expose your **Private Key** or **Service ID** in frontend code
- EmailJS handles all sensitive operations server-side
- The free tier includes 200 emails per month

## 📧 Email Template Variables

The following variables are available in your template:

| Variable | Description |
|----------|-------------|
| `{{to_email}}` | Recipient email address |
| `{{from_email}}` | Sender's email address |
| `{{from_name}}` | Sender's name |
| `{{subject}}` | Email subject |
| `{{message}}` | Main message content |
| `{{whatsapp}}` | WhatsApp number (if provided) |
| `{{youtube_channel}}` | YouTube channel URL (if provided) |
| `{{reply_to}}` | Reply-to email address |

## 🐛 Troubleshooting

### Form not sending emails
- Verify your Service ID, Template ID, and Public Key are correct
- Check that your email service is properly connected in EmailJS dashboard
- Ensure your template has the correct variable names

### Emails going to spam
- Add your domain to the "From" field in your EmailJS template
- Verify your email service (Gmail) settings
- Check EmailJS documentation for SPF/DKIM setup

### Rate limiting
- Free tier: 200 emails/month
- Upgrade to a paid plan for higher limits
- Check your usage in the EmailJS dashboard

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Email Template Guide](https://www.emailjs.com/docs/user-guide/email-templates/)
- [API Reference](https://www.emailjs.com/docs/sdk/send/)

## 🎯 Next Steps

1. Set up EmailJS as described above
2. Update the configuration in `useEmailJS.ts`
3. Test the contact form
4. Deploy your website

---

For more information, visit the [EmailJS official documentation](https://www.emailjs.com/docs/).
