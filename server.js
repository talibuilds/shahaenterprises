import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });
dotenv.config(); // Fallback to default .env if needed

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with support for development and production origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173', // Vite default port
  'https://www.shahaenterprises.com', // Custom Domain
  'https://shahaenterprises.com', // Custom Domain Apex
  'https://talibuilds.github.io', // Production GitHub Pages URL
  'https://taufeeqk217.github.io' // Fallback
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Mail server is running.' });
});

// Contact form submission route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Error: Gmail credentials not configured in environment variables.');
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
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
