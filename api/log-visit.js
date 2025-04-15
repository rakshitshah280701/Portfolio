export default async function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '0.0.0.0';
    const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;
  
    try {
      // Get geolocation info
      const geo = await fetch(`http://ip-api.com/json/${ip}`).then(res => res.json());
  
      const location = `${geo.city}, ${geo.country}`;
      const message = `🌍 *New visitor from* ${location}\n🔗 Website: https://rakshitai.info`;
  
      // Send to Slack
      await fetch(SLACK_WEBHOOK, {
        method: "POST",
        body: JSON.stringify({ text: message }),
        headers: { "Content-Type": "application/json" },
      });
  
      res.status(200).json({ status: "logged" });
    } catch (error) {
      console.error("❌ Failed to log visitor:", error);
      res.status(500).json({ error: "Failed to log visit" });
    }
  }
  