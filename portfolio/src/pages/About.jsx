import "./About.css"

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, color: "var(--dusty-rose)" },
    { name: "Backend Development", level: 88, color: "var(--sage-green)" },
    { name: "UI/UX Design", level: 92, color: "var(--terracotta)" },
    { name: "Problem Solving", level: 96, color: "var(--warm-brown)" },
  ]

  const values = [
    {
      icon: "🎨",
      title: "Aesthetic Excellence",
      description:
        "Every pixel matters. I believe in creating visually stunning experiences that leave lasting impressions.",
    },
    {
      icon: "💭",
      title: "Nostalgic Innovation",
      description:
        "Blending timeless design principles with cutting-edge technology to create something uniquely memorable.",
    },
    {
      icon: "🤝",
      title: "Collaborative Spirit",
      description: "Great work happens when creative minds come together. I thrive in collaborative environments.",
    },
    {
      icon: "🚀",
      title: "Continuous Growth",
      description: "Always learning, always evolving. The tech world moves fast, and I move with it.",
    },
  ]

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="section-title">
                ABOUT
                <br />
                ME
              </h1>
              <div className="about-description">
                <p>
                  I'm a passionate developer who believes that great design isn't just about how something looks— it's
                  about how it makes you feel. With a deep appreciation for nostalgic aesthetics and modern
                  functionality, I create digital experiences that resonate on an emotional level.
                </p>
                <p>
                  My journey began with a fascination for the intersection of art and technology. Today, I specialize in
                  crafting web applications that not only perform flawlessly but also tell compelling stories through
                  thoughtful design and interaction.
                </p>
              </div>

              <div className="skills-section">
                <h3>What I Do Best</h3>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            background: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="profile-card">
                <div className="profile-image">
                  <div className="profile-placeholder">
                    <span className="profile-emoji">👨‍💻</span>
                  </div>
                </div>
                <div className="profile-info">
                  <h3>Creative Developer</h3>
                  <p>Crafting digital experiences with passion</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">Years</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Passion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              MY
              <br />
              VALUES
            </h2>
            <p className="section-subtitle">The principles that guide my work and shape every project I touch.</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
