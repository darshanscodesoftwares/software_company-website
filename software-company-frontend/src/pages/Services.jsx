import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
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
      description: 'Custom web applications built with modern technologies like React, Vue, Node.js, and more. We create responsive, scalable solutions that deliver exceptional user experiences.',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'Content Management Systems',
        'API Development & Integration'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that users love.',
      features: [
        'iOS Native Development',
        'Android Native Development',
        'React Native Apps',
        'Flutter Applications',
        'App Store Optimization'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and solutions powered by AWS, Azure, and Google Cloud. We help you migrate, optimize, and manage your cloud environment.',
      features: [
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Serverless Architecture',
        'DevOps Implementation',
        'Cost Optimization'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that delight users and drive engagement.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Usability Testing',
        'Design System Creation'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Maintenance & Support',
      description: 'Ongoing technical support and maintenance to keep your applications running smoothly. We provide proactive monitoring and rapid issue resolution.',
      features: [
        '24/7 Technical Support',
        'Performance Monitoring',
        'Security Updates',
        'Bug Fixes & Patches',
        'Feature Enhancements'
      ]
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business, goals, and requirements through in-depth consultations.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a detailed roadmap, timeline, and technical architecture for your project.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your solution using agile methodologies with regular updates and feedback cycles.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing maintenance and support to ensure success.'
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive software development services tailored to meet your unique business needs.
            From concept to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`service-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-item-content">
                <div className="service-item-icon">{service.icon}</div>
                <h2 className="service-item-title">{service.title}</h2>
                <p className="service-item-description">{service.description}</p>
                <ul className="service-item-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-item-visual">
                <div className="service-visual-card">
                  <div className="visual-icon">{service.icon}</div>
                  <span>{service.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A proven methodology that ensures quality and timely delivery of your projects.
          </p>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-step">{item.step}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help bring your ideas to life with our expert team and proven processes.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
