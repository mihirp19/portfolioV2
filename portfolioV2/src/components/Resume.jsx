import resumePDF from "../assets/content.pdf";

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <h2 className="endpoint">GET /resume</h2>
      <p>
        Download my latest resume to know more about my experience and skills.
      </p>
      <a href={resumePDF} download className="btn btn--primary">
        Download Resume
      </a>
    </section>
  );
}
