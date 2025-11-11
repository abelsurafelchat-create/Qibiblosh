import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="renaissance-header">
      <div className="header-container">
        {/* Main Header Bar */}
        <div className="renaissance-header-main">
          {/* Hamburger Menu */}
          <button 
            className={`renaissance-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo - moved to left side */}
          <div className="renaissance-header-left">
            <Link to="/" className="renaissance-logo">
              <span className="logo-text">QIBIBLOSH</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="renaissance-nav-links">
            <Link to="/exhibition">Exhibitions</Link>
            <Link to="/archives">Archives</Link>
            <Link to="/film-screening">Film Screening</Link>
            <Link to="/public-lecture">Lectures</Link>
            <Link to="/collaboration">Collaborate</Link>
            <Link to="/event-reminder">Reminders</Link>
            <Link to="/newsletter">Newsletter</Link>
          </nav>

          {/* Right Side Icons */}
          <div className="renaissance-header-right">
            <a href="https://x.com/qibibilosh" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/qibibilosh" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@Qibibilosh" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <Link to="/donation" className="renaissance-support-btn">SUPPORT QIBIBLOSH</Link>
          </div>
        </div>

        {/* Mobile/Hamburger Menu */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-section">
            <h3>PLATFORMS</h3>
            <ul>
              <li><Link to="/exhibition" onClick={toggleMenu}>EXHIBITIONS</Link></li>
              <li><Link to="/archives" onClick={toggleMenu}>ARCHIVES</Link></li>
              <li><Link to="/film-screening" onClick={toggleMenu}>FILM SCREENINGS</Link></li>
              <li><Link to="/public-lecture" onClick={toggleMenu}>PUBLIC LECTURES</Link></li>
              <li><Link to="/collaboration" onClick={toggleMenu}>COLLABORATIONS</Link></li>
              <li><Link to="/newsletter" onClick={toggleMenu}>NEWSLETTER</Link></li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>EVENTS & SERVICES</h3>
            <ul>
              <li><Link to="/event-registration" onClick={toggleMenu}>EVENT REGISTRATION</Link></li>
              <li><Link to="/event-reminder" onClick={toggleMenu}>EVENT REMINDERS</Link></li>
              <li><Link to="/donation" onClick={toggleMenu}>DONATIONS</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>CONNECT</h3>
            <ul>
              <li><a href="https://www.tiktok.com/@qibibilosh" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>TIKTOK</a></li>
              <li><a href="https://x.com/qibibilosh" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>TWITTER</a></li>
              <li><a href="https://www.linkedin.com/in/qibibilosh-series-a544a0395" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>LINKEDIN</a></li>
              <li><a href="https://www.youtube.com/@Qibibilosh" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>YOUTUBE</a></li>
              <li><a href="https://www.instagram.com/qibibilosh" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>INSTAGRAM</a></li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>ADMIN</h3>
            <ul>
              <li><Link to="/admin/login" onClick={toggleMenu}>ADMIN LOGIN</Link></li>
            </ul>
          </div>
        </nav>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
