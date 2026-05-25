import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set up CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Error: Gmail credentials not configured in Vercel environment variables.');
    return res.status(500).json({ error: 'Server configuration error. Credentials missing.' });
  }

  // Create nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword
    }
  });

  // Construct the email content
  const mailOptions = {
    from: `"${name}" <${gmailUser}>`, // Must be sent from the authenticated Gmail address
    to: gmailUser, // Send to your own Gmail account
    replyTo: email, // Direct replies to the customer's email address
    subject: `New Contact Form Submission - ${service}`,
    text: `
Hello,

You have received a new contact form submission from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Message:
${message}

---
You can reply directly to this email to respond to the customer.
    `,
    html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Service Required:</strong> ${service}</p>
<p><strong>Message:</strong></p>
<p style="white-space: pre-line; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
<br>
<p><em>You can reply directly to this email to respond to the customer.</em></p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}
