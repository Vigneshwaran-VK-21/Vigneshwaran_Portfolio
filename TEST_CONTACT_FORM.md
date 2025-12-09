# Contact Form Troubleshooting Checklist

## Your Current Setup:
- Service ID: `service_peeeys4` ✅
- Template ID: `template_kkiljna` ✅
- Public Key: `vCcuFGad3-YChdKE07zJj` ✅

## Step-by-Step Troubleshooting:

### Step 1: Verify EmailJS Template
Go to https://dashboard.emailjs.com/admin/templates/template_kkiljna

**Your template MUST have these exact variables:**

**Subject:**
```
New Message from {{from_name}} - Portfolio Contact
```

**Body/Content:**
```
Hello {{to_name}},

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

⚠️ **IMPORTANT**: The variable names must match EXACTLY:
- Use `{{from_name}}` NOT `{{name}}`
- Use `{{from_email}}` NOT `{{email}}`
- Use `{{message}}` NOT `{{msg}}` or `{{text}}`

### Step 2: Check Email Service Connection
1. Go to https://dashboard.emailjs.com/admin
2. Click **"Email Services"**
3. Find your Gmail service (`service_peeeys4`)
4. Make sure it shows **"Connected"** with a green checkmark
5. Verify the email is: **vigneshwaranm210@gmail.com**

### Step 3: Test the Form
1. Open your portfolio: http://localhost:5173
2. Go to Contact page
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing contact form
4. Click "Send Message"
5. Watch for:
   - Button should show "Sending..."
   - Then show success message: "Message sent successfully!"
   - OR error message if it failed

### Step 4: Check EmailJS Logs
1. Go to https://dashboard.emailjs.com/admin/logs
2. Look for recent entries
3. Check if the request shows:
   - ✅ **Success** - Email was sent (check spam folder)
   - ❌ **Error** - See error details

### Step 5: Check Gmail
1. Open Gmail: https://mail.google.com
2. Check **Inbox** for new email
3. Check **Spam/Junk** folder
4. Search for emails from: **noreply@emailjs.com**

### Step 6: Browser Console Check
1. Open your portfolio
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Try submitting the form
5. Look for any red error messages
6. Share the error message if you see one

## Common Issues & Solutions:

### Issue 1: Template Variables Don't Match
**Problem**: Template uses `{{name}}` but code sends `from_name`
**Solution**: Update template to use `{{from_name}}`, `{{from_email}}`, `{{message}}`

### Issue 2: Email Service Not Connected
**Problem**: Gmail service shows "Disconnected"
**Solution**: Reconnect your Gmail account in EmailJS dashboard

### Issue 3: Emails Going to Spam
**Problem**: Emails are being sent but going to spam folder
**Solution**: 
- Check Gmail spam folder
- Mark EmailJS emails as "Not Spam"
- Add noreply@emailjs.com to contacts

### Issue 4: Monthly Limit Reached
**Problem**: Free plan allows 200 emails/month
**Solution**: Check EmailJS dashboard for usage stats

### Issue 5: CORS or Network Error
**Problem**: Browser blocking the request
**Solution**: Check browser console for CORS errors

## Quick Test Command:

Open browser console (F12) on your portfolio and run this:

```javascript
// Test if EmailJS is working
emailjs.send('service_peeeys4', 'template_kkiljna', {
    from_name: 'Test User',
    from_email: 'test@example.com',
    message: 'This is a test message',
    to_name: 'Vigneshwaran M'
}, 'vCcuFGad3-YChdKE07zJj')
.then(response => {
    console.log('SUCCESS!', response.status, response.text);
    alert('Email sent successfully!');
})
.catch(error => {
    console.error('FAILED...', error);
    alert('Failed to send email: ' + error.text);
});
```

## What to Check Right Now:

1. ✅ Go to EmailJS dashboard → Templates → template_kkiljna
2. ✅ Verify variable names match exactly
3. ✅ Go to EmailJS dashboard → Logs
4. ✅ Try submitting the form
5. ✅ Check if log entry appears
6. ✅ Check Gmail spam folder

---

**After checking these, let me know:**
1. What do you see in EmailJS Logs?
2. Any errors in browser console?
3. Is the template using correct variable names?
