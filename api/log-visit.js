export default async function handler(req, res) {
    try {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const geo = await geoResponse.json();
  
      const {
        city, region, country_name, postal, timezone, latitude, longitude
      } = geo;
  
      const slackMessage = {
        text: `📍 *New Website Visitor!*
  
  • 🌐 *IP Address:* ${ip}
  • 🏙️ *Location:* ${city || "?"}, ${region || "?"}, ${country_name || "?"}
  • 📮 *Postal Code:* ${postal || "?"}
  • 🌎 *Timezone:* ${timezone || "?"}
  • 🗺️ *Map:* https://www.google.com/maps?q=${latitude},${longitude}`
      };
  
      await fetch(process.env.SLACK_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      });
  
      return res.status(200).json({ status: "logged" });
  
    } catch (error) {
      console.error("Slack notify error:", error);
      return res.status(500).json({ status: "error", error: error.message });
    }
  }
  