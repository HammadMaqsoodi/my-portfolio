"use client";

import { Menu ,X} from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import "../app/globals.css"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => setIsOpen(false)}>
          My-Portfolio<span>.</span>
        </a>

        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-right">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="navbar-social"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="navbar-social"
          >
            <FaLinkedin size={20} />
          </a>

          <a href="#contact" className="navbar-cta">
            Let's Talk
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${isOpen ? "active" : ""}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}