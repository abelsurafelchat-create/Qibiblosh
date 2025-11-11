import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="renaissance-footer">
      <div className="renaissance-footer-container">
        <div className="renaissance-footer-content">
          <div className="renaissance-footer-section">
            <h3>QIBIBLOSH</h3>
            <p>A Pan-African platform of art, culture, and politics</p>
            <p className="footer-tagline">Where beauty transcends time</p>
          </div>
          
          <div className="renaissance-footer-section">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/exhibition">Exhibitions</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/film-screening">Film Screenings</Link></li>
              <li><Link to="/public-lecture">Public Lectures</Link></li>
              <li><Link to="/collaboration">Collaborations</Link></li>
            </ul>
          </div>
          
          <div className="renaissance-footer-section">
            <h4>Visit</h4>
            <ul>
              <li><Link to="/location">Location</Link></li>
              <li><Link to="/about">About Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/donation">Support Us</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
          
          <div className="renaissance-footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.instagram.com/qibibilosh" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/qibibilosh" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.youtube.com/@Qibibilosh" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://www.tiktok.com/@qibibilosh" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://www.linkedin.com/in/qibibilosh-series-a544a0395" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="renaissance-footer-bottom">
          <p>&copy; 2025 QIBIBLOSH. All rights reserved.</p>
          <div className="renaissance-footer-links">
            <Link to="/admin/login">Admin</Link>
            <span className="footer-divider">|</span>
            <Link to="/contributors">Contributors</Link>
            <span className="footer-divider">|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
