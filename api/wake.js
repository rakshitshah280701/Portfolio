export default async function handler(req, res) {
    const HETZNER_TOKEN = process.env.HETZNER_TOKEN;
    const SERVER_ID = "62886040"; // Replace with actual server ID
  
    try {
      const response = await fetch(`https://api.hetzner.cloud/v1/servers/${SERVER_ID}/actions/poweron`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HETZNER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      return res.status(200).json({ status: data.status || "sent" });
    } catch (error) {
      return res.status(500).json({ error: "Wake-up failed", details: error.message });
    }
  }
  