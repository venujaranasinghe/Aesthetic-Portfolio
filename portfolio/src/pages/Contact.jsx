"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@creative-dev.com",
      description: "Drop me a line anytime",
      color: "var(--dusty-rose)",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/creative-dev",
      description: "Let's connect professionally",
      color: "var(--sage-green)",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/creative-dev",
      description: "Check out my code",
      color: "var(--terracotta)",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "For urgent inquiries",
      color: "var(--warm-brown)",
    },
  ]

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">
            LET'S
            <br />
            CONNECT
          </h1>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Let's create something beautiful together.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-intro">
                <h2>Ready to Start Something Amazing?</h2>
                <p>
                  Whether you have a fully formed idea or just a spark of inspiration, I'm here to help bring your
                  vision to life. Let's discuss how we can create something truly special together.
                </p>
              </div>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon" style={{ background: method.color }}>
                      {method.icon}
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">{method.title}</h3>
                      <div className="method-value">{method.value}</div>
                      <p className="method-description">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Send Me a Message</h3>
                  <p>I'll get back to you within 24 hours</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Let's work together!"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span>Send Message</span>
                  <span className="button-icon">✨</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
