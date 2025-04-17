export default async function handler(req, res) {
    try {
      const { ip } = req.body;
  
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
      const geo = await geoResponse.json();
  
      const {
        city,
        regionName: region,
        country,
        zip: postal,
        timezone,
        lat: latitude,
        lon: longitude,
      } = geo;
  
      let mapLink = '';
      if (latitude && longitude) {
        mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
      }
  
      const slackMessage = {
        text: `📍 *New Website Visitor!*
  
  • 🌐 *IP Address:* ${ip}
  • 🏙️ *Location:* ${city || "?"}, ${region || "?"}, ${country || "?"}
  • 📮 *Postal Code:* ${postal || "?"}
  • 🌎 *Timezone:* ${timezone || "?"}
  ${mapLink ? `• 🗺️ *Map:* <${mapLink}|Open in Google Maps>` : ''}`
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
  