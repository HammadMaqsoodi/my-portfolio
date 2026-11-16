
import {
  ArrowUpRight,
  Code2,
  Monitor,
  Database,
  Layers3,
  Sparkles,
  Terminal,
} from "lucide-react";

const focusAreas = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building responsive, interactive and user-friendly web interfaces.",
  },
  {
    icon: Code2,
    title: "Modern Web Apps",
    description:
      "Developing modern applications using React.js and Next.js.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Working with databases, APIs and backend integrations.",
  },
  {
    icon: Layers3,
    title: "UI Implementation",
    description:
      "Turning design concepts into clean and maintainable code.",
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Supabase",
  "Git",
  "Pinata-ipfs"
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* SECTION HEADER */}

        <div className="about-heading">
          <div className="section-label">
            <span>01 / ABOUT ME</span>
          </div>

          <h2>
            Turning Ideas Into
            <br />
            <span>Digital Reality.</span>
          </h2>

          <p>
            A little introduction about who I am,
            what I do and what drives me.
          </p>
        </div>

        {/* ABOUT CONTENT */}

        <div className="about-grid">

          {/* LEFT CONTENT */}

          <div className="about-main">

            <div className="about-intro-card">
              <div className="about-card-top">
                <span>WHO I AM</span>
                <Sparkles size={18} />
              </div>

              <h3>
  Hey! I'm <span>Hammad Yaseen</span>, a Frontend Developer
  who loves building for the web.
</h3>

              <p>
                I'm passionate about creating modern,
                responsive and meaningful digital
                experiences. I enjoy transforming ideas
                into functional websites with clean UI,
                smooth interactions and attention to detail.
              </p>

              <p>
                My development journey revolves around
                JavaScript, React.js and Next.js. I also
                work with databases and backend integrations
                to understand how complete web applications
                work.
              </p>

              <p>
                I believe in continuous learning, solving
                real-world problems and writing code that
                is easy to understand and maintain.
              </p>

              <a href="#projects" className="about-link">
                Explore My Projects
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* TECHNOLOGIES */}

            <div className="tech-card">
              <div className="about-card-top">
                <span>TECHNOLOGIES I WORK WITH</span>
                <Terminal size={19} />
              </div>

              <div className="tech-list">
                {technologies.map((tech) => (
                  <span className="tech-item" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="about-side">

            {/* DEVELOPER CARD */}

            <div className="developer-card">
              <div className="developer-card-glow"></div>

              <div className="developer-card-header">
                <span>DEVELOPER PROFILE</span>
                <span className="profile-status">
                  <i></i> ACTIVE
                </span>
              </div>

              <div className="developer-avatar">
                <Code2 size={65} strokeWidth={1.2} />
              </div>

              <h3>Frontend Developer</h3>

              <p>
                Creating modern digital experiences
                with passion and precision.
              </p>

              <div className="developer-card-footer">
                <span>CREATIVE MINDSET</span>
                <span className="accent">AVAILABLE TO LEARN ↗</span>
              </div>
            </div>

            {/* FOCUS AREAS */}

            <div className="focus-card">
              <div className="about-card-top">
                <span>MY FOCUS AREAS</span>
                <Layers3 size={19} />
              </div>

              <div className="focus-list">
                {focusAreas.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="focus-item" key={item.title}>
                      <div className="focus-icon">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>

                      <span className="focus-number">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
