# EmailJS Setup Instructions

Your contact form is configured to use EmailJS to send emails to `taufeeqk217@gmail.com`. To make it work properly, you need to set up EmailJS with the correct configuration.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended)
4. Connect your Gmail account (`taufeeqk217@gmail.com`)
5. Note the **Service ID** (replace `service_f8y9qps` in your code)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template configuration:

**Subject:** `New Contact Form Submission - {{service}}`

**Content:**
```
Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Required: {{service}}

Message:
{{message}}

You can reply directly to this email to respond to the customer.

Best regards,
Your Website Contact Form
```

**Settings:**
- To Email: `taufeeqk217@gmail.com` (your email)
- From Name: `{{from_name}}`
- From Email: `noreply@yourdomain.com` (or use your domain)
- Reply To: `{{from_email}}`

4. Note the **Template ID** (replace `template_5hs3w7q` in your code)

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)
3. Note this key (replace `RtFg2K8tPdnf9nLqI` in your code)

## Step 5: Update Environment Variables

Update the `.env.local` file with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_TARGET_EMAIL=taufeeqk217@gmail.com
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email (`taufeeqk217@gmail.com`) for the message

## Troubleshooting

### Common Issues:

1. **"EmailJS is not defined" error**
   - Make sure `@emailjs/browser` is installed: `npm install @emailjs/browser`

2. **"Invalid service ID" error**
   - Double-check your Service ID in the EmailJS dashboard
   - Make sure you're using the correct service

3. **"Invalid template ID" error**
   - Verify your Template ID in the EmailJS dashboard
   - Ensure the template is published

4. **Emails not reaching your inbox**
   - Check your spam folder
   - Verify the "To Email" field in your template is set to `taufeeqk217@gmail.com`
   - Make sure your email service is properly connected

5. **"Authentication failed" error**
   - Verify your Public Key (User ID)
   - Make sure your account is verified

### Testing in Development

The form will work in both development and production. Make sure to:
- Restart your development server after changing environment variables
- Check the browser console for any error messages
- Use the browser's Network tab to see if the EmailJS request is being sent

### Production Deployment

When deploying to production (like GitHub Pages), make sure your hosting platform supports environment variables, or update the hardcoded values in the Contact.jsx file with your actual EmailJS credentials.

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- Basic templates
- Standard support

This should be sufficient for most contact forms.

---

**Need Help?**
If you're still having issues, you can:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Contact EmailJS support
3. Or reach out for additional assistance
