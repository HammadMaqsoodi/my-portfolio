
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Globe,
  Braces,
  Palette,
  Layers,
  GitBranch,
  Github,
  Terminal,
  Smartphone,
  Cloud,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    id: "01",
    title: "Frontend Development",
    subtitle: "Building modern user interfaces",
    icon: Monitor,
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "JavaScript", level: "Core" },
      { name: "React.js", level: "Framework" },
      { name: "Next.js", level: "Framework" },
      { name: "Tailwind CSS", level: "Styling" },
    ],
  },
  {
    id: "02",
    title: "Backend Development",
    subtitle: "Application logic and APIs",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Runtime" },
      { name: "REST APIs", level: "Integration" },
    ],
  },
  {
    id: "03",
    title: "Database & Storage",
    subtitle: "Managing application data",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Database" },
      { name: "Supabase", level: "Backend" },
      
    ],
  },
  {
    id: "04",
    title: "Tools & Platforms",
    subtitle: "Development workflow",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration" },
      { name: "VS Code", level: "Editor" },
      { name: "Vercel", level: "Deployment" },
    ],
  },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing readable and maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI",
    description: "Creating experiences for every screen.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building fast and efficient applications.",
  },
  {
    icon: Globe,
    title: "Web Experiences",
    description: "Turning ideas into functional products.",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">

        {/* SECTION HEADER */}

        <div className="skills-heading">
          <div className="section-label">
            <span>02 / MY EXPERTISE</span>
          </div>

          <h2>
            Technologies & <span>Skills.</span>
          </h2>

          <p>
            The tools and technologies I use to build
            modern, scalable and user-friendly web applications.
          </p>
        </div>

        {/* SKILL CATEGORIES */}

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div className="skill-card" key={category.id}>

                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="skill-id">
                    {category.id} / 04
                  </span>
                </div>

                <h3>{category.title}</h3>

                <p className="skill-subtitle">
                  {category.subtitle}
                </p>

                <div className="skill-divider"></div>

                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <div className="skill-tag" key={skill.name}>
                      <span className="skill-dot"></span>

                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-level">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="skill-card-footer">
                  <span>TECHNOLOGY STACK</span>
                  <span className="accent">↗</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* HIGHLIGHTS */}

        <div className="skills-highlights">
          <div className="highlight-heading">
            <span className="section-label">
              BEYOND TECHNOLOGIES
            </span>

            <h3>
              How I Approach <span>Development.</span>
            </h3>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="highlight-card" key={item.title}>
                  <div className="highlight-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM NOTE */}

        <div className="skills-note">
          <div className="skills-note-icon">
            <Braces size={24} />
          </div>

          <div>
            <h4>Always Learning. Always Building.</h4>
            <p>
              Technology keeps evolving, and so do I.
              I continuously explore new tools and improve
              my development skills through practical projects.
            </p>
          </div>

          <div className="skills-note-symbol">✦</div>
        </div>

      </div>
    </section>
  );
}
