"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Nostalgic E-Commerce",
      description: "A vintage-inspired online store with modern functionality and warm, inviting aesthetics.",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      color: "var(--dusty-rose)",
      featured: true,
    },
    {
      id: 2,
      title: "Retro Task Manager",
      description: "Productivity app with 80s-inspired design and collaborative features.",
      category: "frontend",
      technologies: ["Vue.js", "Firebase", "CSS3"],
      image: "📋",
      color: "var(--sage-green)",
      featured: false,
    },
    {
      id: 3,
      title: "Vintage Portfolio",
      description: "Personal portfolio with film photography aesthetics and smooth animations.",
      category: "frontend",
      technologies: ["React", "Framer Motion", "CSS3"],
      image: "📸",
      color: "var(--terracotta)",
      featured: true,
    },
    {
      id: 4,
      title: "Cozy Blog Platform",
      description: "Warm and inviting blog platform with markdown support and reading analytics.",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      image: "📝",
      color: "var(--warm-brown)",
      featured: false,
    },
    {
      id: 5,
      title: "Aesthetic Weather App",
      description: "Beautiful weather application with nostalgic color palettes and smooth transitions.",
      category: "frontend",
      technologies: ["React", "OpenWeather API", "CSS3"],
      image: "🌤️",
      color: "var(--dusty-rose)",
      featured: false,
    },
    {
      id: 6,
      title: "Artisan API Gateway",
      description: "Handcrafted API gateway with elegant documentation and robust security.",
      category: "backend",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      image: "🔌",
      color: "var(--sage-green)",
      featured: false,
    },
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
    { key: "frontend", label: "Frontend" },
    { key: "fullstack", label: "Full Stack" },
    { key: "backend", label: "Backend" },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <h1 className="section-title">
            MY
            <br />
            PROJECTS
          </h1>
          <p className="section-subtitle">
            A carefully curated collection of work that showcases my passion for creating beautiful, functional, and
            memorable digital experiences.
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="filter-section">
            <div className="filter-tabs">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-tab ${activeFilter === filter.key ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? "featured" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-header">
                  <div className="project-icon" style={{ background: project.color }}>
                    {project.image}
                  </div>
                  {project.featured && <div className="featured-badge">Featured</div>}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button className="project-btn primary">View Project</button>
                    <button className="project-btn secondary">Source Code</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
