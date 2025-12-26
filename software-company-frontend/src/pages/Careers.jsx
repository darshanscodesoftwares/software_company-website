import { useState } from 'react'
import './Careers.css'

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team. You will be responsible for developing and maintaining web applications using modern technologies.',
      requirements: [
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services (AWS, GCP, or Azure)',
        'Excellent problem-solving skills',
        'Strong communication and collaboration abilities'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible working hours',
        'Remote work options',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our design team to create beautiful and intuitive user experiences. You will work closely with product managers and developers to bring ideas to life.',
      requirements: [
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating UI/UX work',
        'Understanding of user-centered design principles',
        'Experience with design systems',
        'Excellent visual design skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible working hours',
        'Remote work options',
        'Creative freedom and autonomy'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'We need a skilled DevOps Engineer to help us build and maintain our cloud infrastructure. You will work on automation, CI/CD pipelines, and system reliability.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Proficiency in Docker and Kubernetes',
        'Knowledge of Infrastructure as Code (Terraform, Ansible)',
        'Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
        'Strong scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible working hours',
        'Remote work options',
        'Conference attendance allowance'
      ]
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product development from conception to launch. You will work with cross-functional teams to define product strategy and roadmap.',
      requirements: [
        'Experience in product management for software products',
        'Strong analytical and problem-solving skills',
        'Excellent communication and presentation abilities',
        'Experience with agile methodologies',
        'Technical background preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible working hours',
        'Professional growth opportunities',
        'Team offsites and events'
      ]
    },
    {
      id: 5,
      title: 'Mobile Developer (React Native)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain mobile applications using React Native. You will work on both iOS and Android platforms to deliver seamless mobile experiences.',
      requirements: [
        'Strong experience with React Native',
        'Knowledge of iOS and Android platforms',
        'Experience with mobile app deployment',
        'Understanding of mobile UI/UX best practices',
        'Experience with RESTful APIs'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible working hours',
        'Remote work options',
        'Latest equipment provided'
      ]
    },
    {
      id: 6,
      title: 'Technical Writer',
      department: 'Documentation',
      location: 'Remote',
      type: 'Contract',
      experience: '2+ years',
      description: 'Create clear and comprehensive documentation for our products and APIs. You will work with engineering teams to understand technical concepts and translate them for various audiences.',
      requirements: [
        'Excellent writing and editing skills',
        'Ability to understand and explain technical concepts',
        'Experience with documentation tools (Markdown, Git)',
        'Attention to detail',
        'Self-motivated and organized'
      ],
      benefits: [
        'Competitive hourly rate',
        'Flexible schedule',
        'Remote work',
        'Opportunity for full-time conversion',
        'Work with cutting-edge technology'
      ]
    }
  ]

  const perks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Learning & Development',
      description: 'Budget for courses, conferences, and certifications.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Unlimited PTO',
      description: 'Take the time you need to rest and recharge.'
    }
  ]

  const handleApply = (jobTitle) => {
    console.log(`Application submitted for: ${jobTitle}`)
    alert(`Thank you for your interest in the ${jobTitle} position! Your application has been received.`)
  }

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1 className="careers-hero-title">Join Our Team</h1>
          <p className="careers-hero-subtitle">
            Build your career at TechNova Solutions. We're looking for passionate
            people who want to make an impact in the tech industry.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="section perks-section">
        <div className="container">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-subtitle">
            We offer competitive benefits and a culture that values work-life balance.
          </p>
          <div className="perks-grid">
            {perks.map((perk, index) => (
              <div key={index} className="perk-card">
                <div className="perk-icon">{perk.icon}</div>
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-description">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="section jobs-section">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">
            Find your next opportunity. We're always looking for talented individuals to join our team.
          </p>
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                    </svg>
                    {job.department}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {job.location}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    {job.experience}
                  </span>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleApply(job.title)}
                  >
                    Apply Now
                  </button>
                </div>
                {selectedJob === job.id && (
                  <div className="job-details">
                    <div className="job-details-section">
                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="job-details-section">
                      <h4>Benefits</h4>
                      <ul>
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="container">
          <div className="careers-cta-content">
            <h2>Don't See a Role That Fits?</h2>
            <p>
              We're always interested in meeting talented people. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn btn-primary" onClick={() => handleApply('General Application')}>
              Submit General Application
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
