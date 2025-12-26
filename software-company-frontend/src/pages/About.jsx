import './About.css'

function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'SJ',
      bio: 'Visionary leader with 15+ years in tech industry.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'MC',
      bio: 'Expert in scalable architecture and cloud systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'ER',
      bio: 'Award-winning designer passionate about UX.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'DK',
      bio: 'Full-stack expert specializing in React and Node.js.'
    },
    {
      name: 'Jessica Thompson',
      role: 'Project Manager',
      image: 'JT',
      bio: 'Agile certified PM ensuring on-time delivery.'
    },
    {
      name: 'Alex Patel',
      role: 'DevOps Engineer',
      image: 'AP',
      bio: 'Infrastructure specialist focused on automation.'
    }
  ]

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Collaboration',
      description: 'We work closely with clients, treating their success as our own.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Reliability',
      description: 'We deliver on our promises with consistent quality and on-time delivery.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in every line of code and every design decision.'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">About TechNova Solutions</h1>
          <p className="about-hero-subtitle">
            We are a team of passionate technologists dedicated to building software that makes a difference.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Story</h2>
              <p>
                Founded in 2014, TechNova Solutions began with a simple mission: to help businesses
                leverage technology to achieve their goals. What started as a small team of three
                developers has grown into a full-service software development company with over
                50 talented professionals.
              </p>
              <p>
                Over the years, we've had the privilege of working with startups, enterprises,
                and everything in between. From e-commerce platforms to healthcare applications,
                we've tackled diverse challenges and delivered solutions that drive real business value.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, embracing new
                technologies and methodologies to stay at the forefront of the industry.
              </p>
            </div>
            <div className="story-stats">
              <div className="story-stat">
                <span className="story-stat-number">10+</span>
                <span className="story-stat-label">Years in Business</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-number">50+</span>
                <span className="story-stat-label">Team Members</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-number">150+</span>
                <span className="story-stat-label">Projects Completed</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-number">20+</span>
                <span className="story-stat-label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative software solutions that solve real problems,
                enhance efficiency, and create lasting value. We are committed to delivering
                excellence through collaboration, integrity, and continuous improvement.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized leader in software development, known for our
                technical excellence, innovative solutions, and positive impact on the
                businesses and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These principles guide everything we do and shape how we work with our clients and each other.
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The talented people behind our success. We're a diverse group of experts united by our passion for technology.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-avatar">
                  <span>{member.image}</span>
                </div>
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
