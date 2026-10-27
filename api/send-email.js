// Vercel Serverless Function to handle contact form submissions
// Sends via Nodemailer using Gmail or custom SMTP.
//
// Required environment variables (set in Vercel → Settings → Environment Variables):
//   GMAIL_USER          the Gmail address that sends the mail
//   GMAIL_APP_PASSWORD  a Google App Password (not the account password)
// or, for custom SMTP:
//   SMTP_HOST, SMTP_USER, SMTP_PASSWORD, and optionally SMTP_PORT / SMTP_SECURE

import nodemailer from 'nodemailer';

// Recipients are fixed server-side so the endpoint can't be used to mail
// arbitrary addresses. Override with a comma-separated CONTACT_RECIPIENTS.
const RECIPIENTS = (process.env.CONTACT_RECIPIENTS || 'tszhoip@gmail.com,mhan0528@gmail.com')
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean);

const MAX_LENGTHS = { name: 100, email: 254, subject: 200, message: 5000 };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message, company } = req.body || {};

  // Honeypot: real users never see this field, bots fill it in
  if (company) {
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  }

  if (!name || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = { name, email, subject, message }[field];
    if (typeof value === 'string' && value.length > limit) {
      return res.status(400).json({ error: `${field} is too long` });
    }
  }

  let transporter;

  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  } else {
    // Fail loudly rather than reporting success for mail that was never sent.
    // TEMPORARY: report which mail-ish variable NAMES the function can see so a
    // misnamed or wrongly-scoped var is distinguishable from one that is absent.
    // Names only, never values. Remove once delivery is confirmed.
    const visibleNames = Object.keys(process.env)
      .filter((key) => /GMAIL|SMTP|MAIL/i.test(key))
      .sort();

    console.error('Mail transport is not configured: set GMAIL_USER and GMAIL_APP_PASSWORD.');

    return res.status(500).json({
      error: 'Mail service is not configured',
      diagnostic: {
        GMAIL_USER: Boolean(process.env.GMAIL_USER),
        GMAIL_APP_PASSWORD: Boolean(process.env.GMAIL_APP_PASSWORD),
        mailRelatedNamesVisible: visibleNames,
        vercelEnv: process.env.VERCEL_ENV || null,
      },
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"MHZ contact form" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
      to: RECIPIENTS,
      replyTo: email || undefined,
      subject: `New contact form submission: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email || 'not provided'}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email) || 'not provided'}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from the contact form on tszhoip.com</em></p>
      `,
    });

    console.log('Email sent:', info.messageId);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);

    return res.status(500).json({
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
