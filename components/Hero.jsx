
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="hero-intro">
          HELLO, I'M HAMMAD YASEEN
        </p>

        <h1>
          Building Digital
          <br />
          Experiences That
          <br />
          <span>Make An Impact.</span>
        </h1>

        <p className="hero-description">
          I'm Hammad Yaseen, a Frontend Developer focused on
          creating modern, responsive and user-friendly web
          experiences using React and Next.js.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>
        </div>

        <div className="hero-socials">
          <span>FIND ME ON</span>

          <a
            href="https://github.com/HammadMaqsoodi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/hammad-yaseen-2400962b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>

        <div className="profile-card">
          <div className="profile-top">
            <span>PORTFOLIO / 2026</span>
            <span className="accent">01 — 05</span>
          </div>

          <div className="profile-symbol">
            <span>&lt;</span>
            <span className="accent">/</span>
            <span>&gt;</span>
          </div>

          <div className="profile-bottom">
            <div>
              <p>HAMMAD YASEEN</p>
              <h3>Frontend Developer</h3>
            </div>

            <ArrowUpRight className="accent" size={26} />
          </div>
        </div>

        <div className="floating-tag tag-one">
          <span className="accent">✦</span> React.js
        </div>

        <div className="floating-tag tag-two">
          Next.js <span className="accent">✦</span>
        </div>

        <div className="hero-scroll">
          <ArrowDown size={15} />
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}
