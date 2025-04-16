// portfolio/api/keepalive.js

export default async function handler(req, res) {
    try {
      await fetch("https://api.rakshitai.info/keepalive", {
        method: "POST",
      });
      return res.status(200).json({ status: "activity refreshed" });
    } catch (error) {
      console.error("🔥 Keepalive failed:", error.message);
      return res.status(500).json({ error: "Keepalive failed", details: error.message });
    }
  }
  