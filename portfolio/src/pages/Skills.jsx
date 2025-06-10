import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind CSS", level: 87 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 78 },
        { name: "Figma", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 82 },
      ],
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "☁️",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      icon: "⚛️",
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2021",
      icon: "🏆",
    },
  ]

  return (
    <div className="skills">
      <section className="skills-hero">
        <div className="container">
          <h1 className="section-title">Skills & Expertise</h1>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </div>
      </section>

      <section className="skills-content">
        <div className="container">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
