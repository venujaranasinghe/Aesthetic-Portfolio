import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Aesthetic Digital Studio",
      period: "2022 - Present",
      description:
        "Leading the development of nostalgic-inspired web applications with modern functionality. Specializing in creating emotionally resonant user experiences.",
      achievements: [
        "Increased user engagement by 150% through thoughtful UX design",
        "Led a team of 5 developers on multiple high-profile projects",
        "Implemented design systems that reduced development time by 40%",
      ],
      color: "var(--dusty-rose)",
    },
    {
      title: "Full Stack Developer",
      company: "Vintage Tech Solutions",
      period: "2020 - 2022",
      description:
        "Developed full-stack applications with a focus on aesthetic appeal and user-centered design. Worked closely with designers to bring creative visions to life.",
      achievements: [
        "Built 15+ responsive web applications from concept to deployment",
        "Optimized application performance resulting in 60% faster load times",
        "Mentored junior developers in modern development practices",
      ],
      color: "var(--sage-green)",
    },
    {
      title: "Junior Developer",
      company: "Creative Collective",
      period: "2019 - 2020",
      description:
        "Started my journey in web development, focusing on frontend technologies and learning the art of translating designs into functional interfaces.",
      achievements: [
        "Contributed to 10+ client projects with 100% satisfaction rate",
        "Mastered React, Vue.js, and modern CSS techniques",
        "Developed strong foundation in responsive design principles",
      ],
      color: "var(--terracotta)",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Creative Technology",
      period: "2015 - 2019",
      description: "Focused on web technologies, user interface design, and software engineering principles.",
      color: "var(--warm-brown)",
    },
  ]

  return (
    <div className="experience">
      <section className="experience-hero">
        <div className="container">
          <h1 className="section-title">
            MY
            <br />
            JOURNEY
          </h1>
          <p className="section-subtitle">
            Every step of my career has been guided by a passion for creating beautiful, meaningful digital experiences
            that connect with people.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">EXPERIENCE</h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker" style={{ background: exp.color }}></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-period">{exp.period}</div>
                  </div>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">EDUCATION</h2>
          </div>

          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon" style={{ background: edu.color }}>
                  🎓
                </div>
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-school">{edu.school}</div>
                  <div className="education-period">{edu.period}</div>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
