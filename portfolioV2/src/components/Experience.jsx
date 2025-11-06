import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Aveosoft Pvt. Ltd.",
      role: "Backend Developer",
      duration: "Jan 2024 – Present",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "TypeORM", "Express"],
      bullets: [
        "Developed a feature-rich CRM system to streamline task tracking and client interactions.",
        "Implemented Magic Link authentication for secure and frictionless user access.",
        "Built modular, scalable RESTful APIs and integrated form-upload handling for dynamic content.",
        "Optimized database queries, eliminated redundant operations, and reduced latency.",
        "Refactored backend architecture to improve maintainability, performance, and future scalability.",
      ],
      status: "active",
    },
    {
      company: "TST Technology",
      role: "ReactJS Intern",
      duration: "Aug 2024 – Sep 2024",
      tags: ["JavaScript", "React"],
      bullets: [
        "Worked on real-world React.js projects and learned how to build scalable interfaces.",
        "Contributed to front-end architecture, optimized performance, and collaborated with senior developers.",
        "Enhanced problem-solving skills and gained deeper understanding of production-level workflows.",
      ],
      status: "completed",
    },
  ];

  return (
    <section id="experience" className="experience section">
      <h2 className="endpoint">GET /experience</h2>

      <div className="exp-list">
        {experiences.map((e, i) => (
          <article key={i} className="exp-card exp-card--api">
            <header className="exp-head">
              <h3 className="exp-title mono">
                {e.role} <span className="at"> @ {e.company}</span>
              </h3>
              <span
                className={`badge ${e.status === "active" ? "ok" : "muted"}`}
              >
                {e.status === "active" ? "200 OK" : "DONE"}
              </span>
            </header>

            <div className="exp-meta">
              <span className="duration mono">{e.duration}</span>
              <ul className="exp-tags">
                {e.tags.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>

            <ul className="exp-points mono">
              {e.bullets.map((b, k) => (
                <li key={k}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
