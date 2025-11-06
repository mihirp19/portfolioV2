import React from "react";
import {
  LuCamera,
  LuBookOpen,
  LuGlobe,
  LuCpu,
  LuBike,
  LuPlane,
} from "react-icons/lu";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Photography",
      desc: "Light, shadow, and honest moments.",
      icon: <LuCamera />,
      meta: "f/1.8 · 35mm",
    },
    {
      title: "Reading",
      desc: "Systems, stories, and strategy.",
      icon: <LuBookOpen />,
      meta: "queue: 3",
    },
    {
      title: "Travel",
      desc: "New places, new perspectives.",
      icon: <LuPlane />,
      meta: "routes: planned",
    },
    {
      title: "Bike Riding",
      desc: "Peace + speed + open roads.",
      icon: <LuBike />,
      meta: "avg: 60–140km",
    },
    {
      title: "Exploration (Tech)",
      desc: "New stacks, ideas, and patterns.",
      icon: <LuGlobe />,
      meta: "GET /learn",
    },
    {
      title: "Systems Thinking",
      desc: "Small pieces, loosely joined.",
      icon: <LuCpu />,
      meta: "uptime: 99.9%",
    },
  ];

  return (
    <section id="hobbies" className="hobbies section">
      <h2 className="endpoint">GET /hobbies</h2>

      {/* Only ONE grid class (to avoid conflicts) */}
      <div className="hobbies-grid">
        {hobbies.map((h, i) => (
          <div key={i} className="hobby-card fun">
            {/* Proper header wrapper (fixes alignment) */}
            <div className="hobby-head">
              <div className="hobby-icon">{h.icon}</div>
              <h3>{h.title}</h3>
            </div>

            <p>{h.desc}</p>

            {/* Meta pinned to bottom using flex auto margin */}
            <span className="hobby-meta mono">{h.meta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
