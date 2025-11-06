import React from "react";
import {
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiTypeorm,
  SiSequelize,
  SiExpress,
  SiReact,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "TypeORM", icon: <SiTypeorm /> },
    { name: "Sequelize", icon: <SiSequelize /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "React", icon: <SiReact /> },
  ];

  return (
    <section id="skills" className="skills section">
      <h2 className="endpoint">GET /skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-tile">
            <div className="skill-icon">{s.icon}</div>
            <span className="skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
