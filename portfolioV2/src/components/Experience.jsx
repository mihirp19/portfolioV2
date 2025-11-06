import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Aveosoft Pvt. Ltd.",
      role: "Backend Developer",
      duration: "Jan 2024 – Present",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "TypeORM", "Express"],
      bullets: [
        "Developed task management, magic-link auth, and form uploads.",
        "Eliminated N+1 queries; tuned SQL for lower latency.",
        "Refactored modules; improved maintainability and throughput.",
      ],
      status: "active",
    },
    {
      company: "TST Technology",
      role: "ReactJS Intern",
      duration: "Aug 2024 – Sep 2024",
      tags: ["JavaScript", "React"],
      bullets: [
        "Worked on real-world projects at TST Technology, where I got hands-on experience with React.js and learned how to build scalable web applications.",
        "Contributed to front-end development, optimized website performance, and collaborated with senior developers to implement company frameworks.",
        "This experience sharpened my problem-solving skills and gave me a deeper understanding of how things work in a real development environment.",
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
