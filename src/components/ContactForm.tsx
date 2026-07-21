import { useState, type FormEvent } from "react";

const FREE_EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];

export type FormField =
  | { type: "text"; name: string; placeholder: string; full?: boolean }
  | { type: "email"; name: string; placeholder: string; full?: boolean }
  | { type: "textarea"; name: string; placeholder: string; full?: boolean }
  | { type: "select"; name: string; placeholder: string; options: { value: string; label: string }[]; full?: boolean };

export default function ContactForm({
  heading,
  submitLabel,
  columns = 1,
  fields,
}: {
  heading?: string;
  submitLabel: string;
  columns?: 1 | 2;
  fields: FormField[];
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const domain = email.split("@")[1];
    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      setEmailError("Please use your corporate email address.");
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, padding: "48px 0", position: "relative" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 9999,
            border: "1px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,230,118,.10)",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Request Received</h3>
        <p style={{ color: "var(--muted)", margin: 0 }}>Your request has been received. Our team will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <div>
      {heading && <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 32px" }}>{heading}</h3>}
      <form onSubmit={onSubmit} className={`vl-form-grid${columns === 2 ? " vl-form-2col" : ""}`}>
        {fields.map((field) => {
          const fullClass = columns === 2 && field.full ? " vl-form-full" : "";
          if (field.type === "textarea") {
            return (
              <div key={field.name} className={fullClass.trim()}>
                <textarea name={field.name} placeholder={field.placeholder} rows={field.name === "message" && columns === 1 ? 3 : 4} className="vl-field" />
              </div>
            );
          }
          if (field.type === "select") {
            return (
              <div key={field.name} className={fullClass.trim()}>
                <select name={field.name} required defaultValue="" className="vl-field">
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          if (field.type === "email") {
            return (
              <div key={field.name} className={fullClass.trim()} style={{ position: "relative" }}>
                <input
                  type="email"
                  name={field.name}
                  required
                  placeholder={field.placeholder}
                  className="vl-field"
                  onInput={() => emailError && setEmailError("")}
                />
                {emailError && <span style={{ color: "#ef4444", fontSize: 12, position: "absolute", bottom: -20, left: 0 }}>{emailError}</span>}
              </div>
            );
          }
          return (
            <div key={field.name} className={fullClass.trim()}>
              <input type="text" name={field.name} required placeholder={field.placeholder} className="vl-field" />
            </div>
          );
        })}
        <div className={columns === 2 ? "vl-form-full" : undefined}>
          <button type="submit" className="vl-btn-primary" style={{ width: "100%", fontFamily: "inherit", fontWeight: 600, fontSize: 15, padding: 16 }}>
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
