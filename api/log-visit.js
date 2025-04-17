// export default async function handler(req, res) {
//     try {
//         const forwarded = req.headers["x-forwarded-for"];
//         const ip = forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress;
        
  
//       const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
//       const geo = await geoResponse.json();
  
//       const {
//         city, region, country_name, postal, timezone, latitude, longitude
//       } = geo;
      
//       let mapLink = "";
//       if (latitude && longitude) {
//         mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
//       }
      
//       const slackMessage = {
//         text: `📍 *New Website Visitor!*
      
//       • 🌐 *IP Address:* ${ip}
//       • 🏙️ *Location:* ${city || "?"}, ${region || "?"}, ${country_name || "?"}
//       • 📮 *Postal Code:* ${postal || "?"}
//       • 🌎 *Timezone:* ${timezone || "?"}
//       ${mapLink ? `• 🗺️ *Map:* <${mapLink}|Open in Google Maps>` : ''}`
//       };
      
  
//       await fetch(process.env.SLACK_WEBHOOK, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(slackMessage),
//       });
  
//       return res.status(200).json({ status: "logged" });
  
//     } catch (error) {
//       console.error("Slack notify error:", error);
//       return res.status(500).json({ status: "error", error: error.message });
//     }
//   }
  

export default async function handler(req, res) {
    try {
      // 🛠️ Step 1: Extract client IP address from request headers
      const forwarded = req.headers["x-forwarded-for"];
      const ip = forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress;
  
      // 🌍 Step 2: Get location info from the actual visitor IP
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
  
      // 🗺️ Step 3: Generate Google Maps link
      let mapLink = '';
      if (latitude && longitude) {
        mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
      }
  
      // 📡 Step 4: Prepare Slack message
      const slackMessage = {
        text: `📍 *New Website Visitor!*
  
  • 🌐 *IP Address:* ${ip}
  • 🏙️ *Location:* ${city || "?"}, ${region || "?"}, ${country || "?"}
  • 📮 *Postal Code:* ${postal || "?"}
  • 🌎 *Timezone:* ${timezone || "?"}
  ${mapLink ? `• 🗺️ *Map:* <${mapLink}|Open in Google Maps>` : ''}`
      };
  
      // 📤 Step 5: Send to Slack
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
  