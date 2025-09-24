const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redisRequest(path, method = "GET") {
  const res = await fetch(`${redisUrl}${path}`, {
    method,
    headers: { Authorization: `Bearer ${redisToken}` },
  });
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
  const dateKey = new Date().toISOString().slice(0, 10);
  const key = `ip:${ip}:${dateKey}`;
  const LIMIT = 2;

  try {
    const data = await redisRequest(`/incr/${key}`, "POST");

    if (data.result === 1) {
      await redisRequest(`/expire/${key}/86400`, "POST"); // set 24h TTL
    }

    if (data.result > LIMIT) {
      return res.status(429).json({
        success: false,
        message: "Too many submissions",
      });
    }

    // Forward to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    // Normalize Web3Forms response
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message || "Submission failed",
      });
    }

    return res.status(200).json({ success: true, message: "Request sent!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}