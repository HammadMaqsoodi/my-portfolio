
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* HEADER */}

        <div className="projects-heading">
          <div>
            <span className="section-label">
              03 / SELECTED WORK
            </span>

            <h2>
              Projects That <span>Speak.</span>
            </h2>

            <p>
              A selection of projects where ideas
              turn into real digital experiences.
            </p>
          </div>

          <div className="projects-count">
            <span>0{projects.length}</span>
            <small>FEATURED PROJECTS</small>
          </div>
        </div>

        {/* PROJECT GRID */}

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              {/* IMAGE */}

              <div className="project-image-wrapper">
             <Image
  src={project.image}
  alt={`${project.title} project screenshot`}
  fill
  sizes="(max-width: 600px) 100vw, 50vw"
  className="project-image"
  style={{ objectFit: "fill" }}
/>

                <span className="project-number">
                  {project.id}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-image-overlay">
                  <span>
                    VIEW PROJECT <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="project-content">

                <div className="project-title-row">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>

                  <span className="project-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* LINKS */}

                <div className="project-actions">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </Link>
                  )}

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-btn"
                    >
                      <FaGithub size={17} />
                      Source Code
                    </Link>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <span className="project-private">
                      <Layers3 size={20} />
                      Project Showcase
                    </span>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div className="projects-bottom">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Let's build something meaningful together.</p>
          </div>

          <a href="#contact" className="projects-contact-btn">
            Let's Talk <ArrowUpRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}
