import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className="container not-found-content">
        <div className="not-found-illustration">
          <div className="error-code">404</div>
          <svg className="not-found-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          Oops! The page you're looking for doesn't exist or has been moved.
          Don't worry, let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Support
          </Link>
        </div>
        <div className="not-found-links">
          <p>Here are some helpful links:</p>
          <ul>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NotFound
