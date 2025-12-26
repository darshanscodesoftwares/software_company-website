import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and solutions to power your digital transformation journey.'
    }
  ]

  const reasons = [
    {
      number: '01',
      title: 'Expert Team',
      description: 'Our team of seasoned developers and designers bring years of industry experience.'
    },
    {
      number: '02',
      title: 'Agile Approach',
      description: 'We follow agile methodologies to deliver projects on time and within budget.'
    },
    {
      number: '03',
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly at all times.'
    },
    {
      number: '04',
      title: 'Proven Results',
      description: 'Track record of successful projects across diverse industries worldwide.'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Building Scalable <span>Software Solutions</span>
          </h1>
          <p className="hero-subtitle">
            We transform ideas into powerful digital products. From web applications to mobile apps,
            we deliver innovative solutions that drive business growth and create lasting impact.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We offer comprehensive software development services tailored to meet your unique business needs.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-us">
        <div className="container">
          <div className="why-us-content">
            <div className="why-us-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Why Choose TechNova?
              </h2>
              <p className="why-us-description">
                We are committed to delivering excellence in every project. Our team combines
                technical expertise with creative innovation to build solutions that exceed expectations.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-card">
                  <span className="reason-number">{reason.number}</span>
                  <h4 className="reason-title">{reason.title}</h4>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss how we can help bring your ideas to life. Our team is ready to
              create innovative solutions tailored to your business needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
              <Link to="/careers" className="btn btn-secondary">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
