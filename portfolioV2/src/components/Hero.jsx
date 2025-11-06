import React from "react";
import StatusBar from "./StatusBar";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1 className="title">Building Backends with Precision & Purpose</h1>
      <p className="subtitle">
        I’m Mihir Panchal — a backend engineer focused on designing scalable,
        efficient systems using Node.js, TypeScript, TypeORM, and PostgreSQL. I
        believe clean architecture and quiet discipline define true engineering.
      </p>
      <div className="actions">
        <a href="#projects" className="btn btn--primary btn--lg">
          Explore My Work
        </a>
        {/* optional secondary */}
        <a href="#contact" className="btn btn--ghost btn--lg">
          Contact
        </a>
      </div>
      {/* icons / status go here, not outside */}
      <div style={{ marginTop: "1rem" }}>
        <div className="status-bar">
          <div className="status-chip">
            <span className="led" style={{ background: "#34D399" }}></span>
            <span className="k">API</span>
            <span className="v">200 OK</span>
          </div>
          <div className="status-chip">
            <span className="led" style={{ background: "#60A5FA" }}></span>
            <span className="k">DB</span>
            <span className="v">Connected</span>
          </div>
          <div className="status-chip">
            <span className="led" style={{ background: "#FBBF24" }}></span>
            <span className="k">Queue</span>
            <span className="v">Idle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
