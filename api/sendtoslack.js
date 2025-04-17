export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }
  
    const webhook = process.env.SLACK_WEBHOOK_CONTACTME_URL;
  
    const payload = {
      text: `📬 *New Portfolio Message!*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n💬 *Message:* ${message}`,
    };
  
    try {
      const slackRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (slackRes.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ error: 'Failed to send to Slack' });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  