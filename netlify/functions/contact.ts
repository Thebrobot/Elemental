import type { Handler } from "@netlify/functions";

const jsonHeaders = { "Content-Type": "application/json" };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body: unknown;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  if (typeof body !== "object" || body === null) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Invalid payload" }),
    };
  }

  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const serviceInterest = String(data.serviceInterest ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !phone || !serviceInterest || !message) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "All fields are required" }),
    };
  }

  if (!isValidEmail(email)) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Invalid email" }),
    };
  }

  // TODO: add to .env - forward to email/CRM using Netlify environment variables (server-side only). DO NOT hardcode secrets.
  console.log("Contact submission", {
    name,
    email,
    phone,
    serviceInterest,
    messageLength: message.length,
  });

  return {
    statusCode: 200,
    headers: jsonHeaders,
    body: JSON.stringify({ ok: true }),
  };
};
