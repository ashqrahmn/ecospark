const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const web3formsKey = process.env.VITE_WEB3FORM_API_KEY;

async function redisRequest(path, method = "POST") {
  const res = await fetch(`${redisUrl}${path}`, {
    method,
    headers: { Authorization: `Bearer ${redisToken}` },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Redis error response:", res.status, text.slice(0, 200));
    throw new Error(`Redis request failed with status ${res.status}`);
  }

  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
  const dateKey = new Date().toISOString().slice(0, 10);
  const key = `ip:${ip}:${dateKey}`;
  const encodedKey = encodeURIComponent(key);
  const LIMIT = 2;

  try {
    // ---- Rate limiting ----
    const data = await redisRequest(`/incr/${encodedKey}`, "POST");

    if (data.result === 1) {
      await redisRequest(`/expire/${encodedKey}/86400`, "POST");
    }

    if (data.result > LIMIT) {
      return res.status(429).json({
        success: false,
        message: "Too many submissions",
      });
    }

    // ---- Build Web3Forms payload ----
    const payload = {
      ...req.body,
      access_key: req.body?.access_key || web3formsKey,
    };

    if (!payload.access_key) {
      console.error("Web3Forms access key missing");
      return res
        .status(500)
        .json({ success: false, message: "Form configuration error" });
    }

    // ---- Forward to Web3Forms ----
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "User-Agent": "Web3FormsBot/1.0",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      return res.status(400).json({
        success: false,
        message: result.message || "Submission failed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Request sent!",
    });
  } catch (err) {
    console.error("Handler error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Server error" });
  }
}