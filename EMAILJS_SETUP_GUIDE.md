# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and connect your Google account
   - **Outlook**: Select Outlook/Hotmail
   - **Other**: You can use any SMTP service
4. Click **Create Service**
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **Save**
5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Update Your Code

Open `src/pages/Contact.jsx` and replace these values around line 28-30:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### Example:
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'user_1234567890abcdef';
```

## Step 6: Test Your Contact Form

1. Save the file after updating the credentials
2. Go to your portfolio website
3. Navigate to the Contact page
4. Fill out the form with test data
5. Click **Send Message**
6. Check your email inbox (the one you connected to EmailJS)

## Email Delivery Settings

### For Gmail Users:
- Make sure you've allowed EmailJS to access your Gmail account
- Check your spam folder if you don't see the email
- You can set up filters to organize contact form emails

### Email Quota:
- **Free Plan**: 200 emails/month
- **Personal Plan**: 1,000 emails/month ($7/month)
- **Professional Plan**: 10,000 emails/month ($35/month)

## Troubleshooting

### Issue: Emails not being received
1. Check spam/junk folder
2. Verify all IDs are correct in Contact.jsx
3. Check EmailJS dashboard for error logs
4. Make sure email service is connected properly

### Issue: "Failed to send message" error
1. Open browser console (F12) to see detailed error
2. Verify your Public Key is correct
3. Check if you've exceeded your monthly quota
4. Make sure EmailJS service is active

### Issue: Form shows success but no email
1. Check EmailJS dashboard → **Logs** to see if request was received
2. Verify template variable names match the code
3. Check email service connection status

## Security Note

The credentials (Service ID, Template ID, Public Key) are safe to use in client-side code. EmailJS is designed for this purpose and these keys only allow sending emails through your configured templates.

## Additional Features (Optional)

### Auto-Reply to Users:
1. In EmailJS template settings, enable **Auto-Reply**
2. Create a template thanking users for their message
3. This will automatically send a confirmation email to users

### Email Notifications:
You can set up multiple email addresses to receive notifications by configuring your email service settings in EmailJS.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Your contact form is now ready to receive messages!** 🎉
