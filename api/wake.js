// export default async function handler(req, res) {
//     const HETZNER_TOKEN = process.env.HETZNER_TOKEN;
//     const SERVER_ID = "62886040"; // Replace with actual server ID
  
//     try {
//       const response = await fetch(`https://api.hetzner.cloud/v1/servers/${SERVER_ID}/actions/poweron`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${HETZNER_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
  
//       const data = await response.json();
//       return res.status(200).json({ status: data.status || "sent" });
//     } catch (error) {
//       return res.status(500).json({ error: "Wake-up failed", details: error.message });
//     }
//   }
  

// /api/wake.js

export default async function handler(req, res) {
  const HETZNER_TOKEN = process.env.HETZNER_TOKEN;
  const SLACK_SERVER_INFO = process.env.SLACK_SERVER_INFO;
  const SERVER_ID = "62886040";

  try {
    const response = await fetch(`https://api.hetzner.cloud/v1/servers/${SERVER_ID}/actions/poweron`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HETZNER_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // ✅ Slack Notification
    if (SLACK_SERVER_INFO) {
      const slackMessage = {
        text: `🟢 *Server Wake Triggered!*\n
• 🚀 *Server ID:* ${SERVER_ID}
• 🕒 *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`
      };

      await fetch(SLACK_SERVER_INFO, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      });
    }

    return res.status(200).json({ status: data.status || "sent" });

  } catch (error) {
    console.error("Slack notify error:", error);
    return res.status(500).json({ error: "Wake-up failed", details: error.message });
  }
}
