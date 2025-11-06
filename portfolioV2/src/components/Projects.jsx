// Projects.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";

const projects = [
  {
    slug: "crm",
    title: "CRM",
    method: "GET",
    route: "/projects/crm",
    stack: ["Node.js", "TypeScript", "TypeORM", "PostgreSQL", "Express", "JWT"],
    log: [
      { lvl: "INFO", msg: "Magic Link auth enabled" },
      { lvl: "PERF", msg: "N+1 eliminated; query time ↓ ~38%" },
      { lvl: "API", msg: "Tasks / Clients endpoints modularized" },
    ],
    sample: {
      name: "crm",
      status: "stable",
      endpoints: ["/auth/magic-link", "/tasks", "/clients"],
      db: "postgresql",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    method: "GET",
    route: "/projects/portfolio",
    stack: ["Vite", "React", "CSS", "Canvas"],
    log: [
      { lvl: "INFO", msg: "Node network background + dock navbar" },
      { lvl: "PERF", msg: "Vite build optimized; TTI fast" },
      { lvl: "UX", msg: "Smooth scroll, accessible glass UI" },
    ],
    sample: {
      name: "portfolio",
      status: "public",
      features: ["glass-ui", "smooth-scroll", "dock-navbar"],
    },
  },
  {
    slug: "crypsion",
    title: "Crypsion (NFT Marketplace)",
    method: "GET",
    route: "/projects/crypsion",
    stack: ["Solidity", "React", "Tailwind", "MetaMask"],
    log: [
      { lvl: "WEB3", msg: "MetaMask wallet flow integrated" },
      { lvl: "PROTO", msg: "Mint/Trade prototype" },
      { lvl: "SEC", msg: "Explored dApp UX basics" },
    ],
    sample: {
      name: "crypsion",
      status: "prototype",
      features: ["mint", "trade"],
    },
  },
];

export default function Projects() {
  const rowRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdgeState = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateEdgeState();
    const el = rowRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdgeState, { passive: true });
    window.addEventListener("resize", updateEdgeState);
    return () => {
      el.removeEventListener("scroll", updateEdgeState);
      window.removeEventListener("resize", updateEdgeState);
    };
  }, [updateEdgeState]);

  const scrollByAmount = (dir) => {
    const el = rowRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.9);
    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

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

  return (
    <section id="projects" className="projects section">
      <h2 className="endpoint">GET /projects</h2>

      <div className="projects-rail">
        <button
          className="rail-arrow rail-arrow--left btn btn--sm btn--ghost"
          onClick={() => scrollByAmount("prev")}
          disabled={atStart}
          aria-label="Previous projects"
        >
          ←
        </button>

        <div
          ref={rowRef}
          className="projects-row"
          role="region"
          aria-label="Projects"
        >
          {projects.map((p) => {
            const jsonString = JSON.stringify(p.sample, null, 2);
            const curlCmd = `curl -X ${p.method} https://api.mihir.dev${p.route}`;

            return (
              <article key={p.slug} className="proj-card" tabIndex={0}>
                <div className="term-head">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <div className="term-path mono">{p.route}</div>
                </div>

                <header className="proj-head">
                  <div className="verb-pill mono">{p.method}</div>
                  <h3 className="proj-title mono">{p.title}</h3>
                </header>

                {/* NEW: log stream instead of paragraph */}
                <ul className="proj-log mono">
                  {p.log.map((line, i) => (
                    <li key={i}>
                      <span className={`lvl ${line.lvl.toLowerCase()}`}>
                        {line.lvl}
                      </span>
                      <span className="msg">{line.msg}</span>
                    </li>
                  ))}
                </ul>

                <ul className="proj-stack">
                  {p.stack.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <div className="proj-toolbar">
                  <button
                    className="btn btn--sm btn--ghost"
                    onClick={() => copy(jsonString)}
                  >
                    Copy JSON
                  </button>
                  <button
                    className="btn btn--sm btn--primary"
                    onClick={() => copy(curlCmd)}
                  >
                    Copy cURL
                  </button>
                </div>

                <pre className="proj-code mono">{jsonString}</pre>
              </article>
            );
          })}
        </div>

        <button
          className="rail-arrow rail-arrow--right btn btn--sm btn--ghost"
          onClick={() => scrollByAmount("next")}
          disabled={atEnd}
          aria-label="Next projects"
        >
          →
        </button>

        <div className="rail-fade rail-fade--left" aria-hidden="true" />
        <div className="rail-fade rail-fade--right" aria-hidden="true" />
      </div>
    </section>
  );
}
