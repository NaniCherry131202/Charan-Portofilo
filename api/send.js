import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const data = await resend.emails.send({
        // You need to verify a domain in Resend to send from it, e.g., 'onboarding@resend.dev' or 'contact@yourdomain.com'
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['charanpeddi37@gmail.com'], // Send to your personal email
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h3>New message from your portfolio website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        reply_to: email,
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
