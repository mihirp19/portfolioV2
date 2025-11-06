import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import "./App.css";
import Hobbies from "./components/Hobbies";
import Background from "./components/Background";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}
