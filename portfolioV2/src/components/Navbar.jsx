import { useRef, useEffect } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  /* --- Disable dock effect on touch devices --- */
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  const handleMouseMove = (e) => {
    if (isTouch) return;

    const nav = navRef.current;
    const links = nav.querySelectorAll(".nav-item");

    links.forEach((link) => {
      const rect = link.getBoundingClientRect();
      const linkCenter = rect.left + rect.width / 2;

      const distance = Math.abs(e.clientX - linkCenter);

      const maxDistance = 130;
      const maxScale = 1.22;
      const baseScale = 1;

      let scale =
        baseScale +
        (maxScale - baseScale) * (1 - Math.min(distance / maxDistance, 1)) ** 2;

      link.style.transform = `scale(${scale}) translateY(-${
        (scale - 1) * 8
      }px)`;
    });
  };

  const resetScale = () => {
    if (isTouch) return;

    const nav = navRef.current;
    const links = nav.querySelectorAll(".nav-item");

    links.forEach((link) => (link.style.transform = "scale(1) translateY(0)"));
  };

  /* --- Smooth Home scroll --- */
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  };

  /* --- Optional: Active link indication while scrolling --- */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = document.querySelector(`a[href="#${id}"]`);
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active-link"));
            if (link) link.classList.add("active-link");
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className="navbar"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetScale}
    >
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#hero" onClick={handleHomeClick}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#resume">Resume</a>
        </li>
        <li className="nav-item">
          <a href="#hobbies">Hobbies</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
