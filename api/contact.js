const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getBody(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return req.body || {};
}

async function sendBrevoEmail(apiKey, payload) {
  const response = await fetch(BREVO_ENDPOINT, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Brevo request failed (${response.status}): ${errorBody}`);
  }
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const body = getBody(req);
  if (body.website) {
    return res.status(200).json({ message: 'Message received' });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL;
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!apiKey || !senderEmail || !ownerEmail) {
    console.error('Missing Brevo environment configuration');
    return res.status(500).json({ message: 'Unable to send message' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

  try {
    await Promise.all([
      sendBrevoEmail(apiKey, {
        sender: { email: senderEmail, name: 'Dorine Boris' },
        to: [{ email: ownerEmail, name: 'Dorine Boris' }],
        replyTo: { email, name },
        subject: `Nouveau message de ${safeName}`,
        htmlContent: `<h2>Nouveau message depuis le portfolio</h2><p><strong>Nom :</strong> ${safeName}</p><p><strong>Email :</strong> ${safeEmail}</p><p><strong>Message :</strong><br>${safeMessage}</p>`,
      }),
      sendBrevoEmail(apiKey, {
        sender: { email: senderEmail, name: 'Dorine Boris' },
        to: [{ email, name: safeName }],
        subject: 'Merci pour votre message',
        htmlContent: `<p>Bonjour ${safeName},</p><p>Merci d'avoir contacté Dorine Boris. Votre message a bien été reçu et je vous répondrai dans les meilleurs délais.</p><p>À bientôt,<br>Dorine Boris</p>`,
      }),
    ]);

    return res.status(200).json({ message: 'Message sent' });
  } catch (error) {
    console.error('Brevo contact submission failed', error);
    return res.status(500).json({ message: 'Unable to send message' });
  }
}

module.exports = handler;
