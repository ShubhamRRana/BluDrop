const { Resend } = require("resend");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trim(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(body) {
  const name = trim(body.name);
  const email = trim(body.email);
  const subject = trim(body.subject);
  const message = trim(body.message);
  const honeypot = trim(body._honeypot);

  if (honeypot) {
    return { error: "Invalid submission.", status: 400 };
  }

  if (!name) {
    return { error: "Name is required.", status: 400 };
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return { error: "A valid email address is required.", status: 400 };
  }

  if (!message || message.length < 10) {
    return { error: "Message must be at least 10 characters.", status: 400 };
  }

  return { name, email, subject, message };
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  if (!process.env.CONTACT_FROM_EMAIL) {
    console.error("CONTACT_FROM_EMAIL is not configured.");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  let body = req.body;

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid request body." });
    }
  }

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid request body." });
  }

  const validated = validatePayload(body);

  if (validated.error) {
    return res.status(validated.status).json({ error: validated.error });
  }

  const { name, email, subject, message } = validated;
  const toEmail = process.env.CONTACT_TO_EMAIL || "bludrop16@gmail.com";
  const emailSubject = subject
    ? `[BluDrop Contact] ${subject}`
    : `[BluDrop Contact] Message from ${name}`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send your message. Please try again later." });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return res.status(500).json({ error: "Failed to send your message. Please try again later." });
  }
};
