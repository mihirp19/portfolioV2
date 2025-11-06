import React, { useMemo } from "react";

export default function Contact() {
  const payload = useMemo(
    () => ({
      name: "Mihir Panchal",
      role: "Backend Engineer",
      location: "Gujarat, India",
      email: "mihir6602@gmail.com",
      phone: "+91 7778056000",
      links: {
        linkedin: "https://www.linkedin.com/in/mihir-panchal19/",
        github: "https://github.com/mihirp19",
      },
    }),
    []
  );

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      alert("Copied!");
    }
  };

  const jsonString = useMemo(() => JSON.stringify(payload, null, 2), [payload]);

  return (
    <section id="contact" className="section contact">
      <div className="contact-head">
        <h2 className="endpoint">GET /contact</h2>
      </div>

      <div className="contact-grid">
        {/* JSON "response" card */}
        <div className="api-card">
          <div className="api-card__header">
            <span className="badge ok">200 OK</span>
            <div className="api-actions">
              <button
                className="btn btn--sm btn--ghost"
                onClick={() => copy(jsonString)}
                aria-label="Copy JSON"
              >
                Copy JSON
              </button>
              <a
                className="btn btn--sm btn--primary"
                href="mailto:mihir6602@gmail.com"
              >
                Email Me
              </a>
              <a className="btn btn--sm btn--ghost" href="tel:+917778056000">
                Call
              </a>
            </div>
          </div>

          <pre className="code-block">{jsonString}</pre>
        </div>
      </div>
    </section>
  );
}
