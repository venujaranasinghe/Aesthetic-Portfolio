"use client"

import { useEffect, useRef } from "react"
import "./Home.css"

const Home = () => {
  const heroRef = useRef(null)
  const floatingElementsRef = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 0.02
          const x = (clientX - centerX) * speed
          const y = (clientY - centerY) * speed
          el.style.transform = `translate(${x}px, ${y}px)`
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="floating-shape shape-1" ref={el => floatingElementsRef.current[0] = el}></div>
          <div className="floating-shape shape-2" ref={el => floatingElementsRef.current[1] = el}></div>
          <div className="floating-shape shape-3" ref={el => floatingElementsRef.current[2] = el}></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-greeting">Hello, I'm</div>
              <h1 className="hero-name">
                CREATIVE
                <span className="hero-highlight">DEVELOPER</span>
              </h1>
              <p className="hero-description">
                Crafting digital experiences with a nostalgic touch. 
                I blend modern technology with timeless design principles 
                to create something truly memorable.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="/contact" className="btn-secondary">Let's Talk</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="hero-card main-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="card-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">"passionate"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">function</span>
                    <span className="code-function"> createMagic</span>
                    <span className="code-bracket">()</span>
                    <span className="code-bracket\"> </span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-keyword">return</span>
                    <span className="code-string"> "beautiful experiences";</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket"></span>
                  </div>
                </div>
              </div>
              
              <div className="floating-card card-1">
                <div className="card-icon">✨</div>
                <div className="card-text">Creative Design</div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-icon">🚀</div>
                <div className="card-text">Modern Tech</div>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-icon">💫</div>
                <div className="card-text">Nostalgic Feel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section" id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">FEATURED<br/>PROJECTS</h2>
            <p className="section-subtitle">
              A curated selection of my most meaningful work, 
              each telling its own story through design and code.
            </p>
          </div>
          
          <div className="projects-showcase">
            <div className="project-item large">
              <div className="project-image">
                <div className="project-overlay">
                  <h3>E-Commerce Platform</h3>
                  <p>Full-stack application with modern design</p>
                  <div className="project-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image">
                <div className="project-overlay">
                  <h3>Portfolio Website</h3>
                  <p>Aesthetic design with nostalgic vibes</p>
                  <div className="project-tags">
                    <span>React</span>
                    <span>CSS3</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image">
                <div className="project-overlay">
                  <h3>Task Manager</h3>
                  <p>Collaborative workspace application</p>
                  <div className="project-tags">
                    <span>Vue.js</span>
                    <span>Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
