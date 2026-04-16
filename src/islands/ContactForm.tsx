import { useState } from "react";
import { getNavServiceGroups, siteConfig } from "../config/siteConfig";

const interestOptions = getNavServiceGroups().map((g) => ({
  value: g.category,
  label: g.category,
}));

const endpoint =
  import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? "/.netlify/functions/contact";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceInterest, setServiceInterest] = useState(interestOptions[0]?.value ?? "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSend() {
    if (!name.trim() || !email.trim() || !phone.trim() || !serviceInterest || !message.trim()) {
      setStatus("error");
      setError("Please complete all fields.");
      return;
    }
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceInterest,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error((data as { error?: string }).error || "Request failed");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="contact-form">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="interest">Service interest</label>
        <select
          id="interest"
          name="serviceInterest"
          required
          value={serviceInterest}
          onChange={(e) => setServiceInterest(e.target.value)}
        >
          {interestOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="btn" type="button" disabled={status === "loading"} onClick={handleSend}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "success" && <p className="success">Thanks-we received your message.</p>}
      {status === "error" && error && <p className="error">{error}</p>}
      <style>{`
        .contact-form {
          display: grid;
          gap: 1rem;
          margin-top: 1rem;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        label {
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-teal-muted);
        }
        input,
        select {
          font: inherit;
          padding: 0.65rem 0.75rem;
          min-height: 2.75rem;
          border-radius: 4px;
          border: 1px solid var(--color-teal-light);
        }
        textarea {
          font: inherit;
          padding: 0.65rem 0.75rem;
          min-height: 8rem;
          border-radius: 4px;
          border: 1px solid var(--color-teal-light);
          resize: vertical;
        }
        .btn {
          justify-self: stretch;
          width: 100%;
        }
        @media (min-width: 480px) {
          .btn {
            justify-self: start;
            width: auto;
          }
        }
        .success {
          color: var(--color-teal-muted);
        }
        .error {
          color: #8b2e2e;
        }
      `}</style>
    </div>
  );
}
