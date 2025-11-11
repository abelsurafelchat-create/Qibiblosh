import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import photo1_28 from '../assets/photo_1_2025-11-05_13-36-28.jpg';
import photo3_12 from '../assets/photo_3_2025-11-05_13-36-12.jpg';
import photo2_12 from '../assets/photo_2_2025-11-05_13-36-12.jpg';
import photo4_12 from '../assets/photo_4_2025-11-05_13-36-12.jpg';
import photo5_12 from '../assets/photo_5_2025-11-05_13-36-12.jpg';
import photo6_12 from '../assets/photo_6_2025-11-05_13-36-12.jpg';
import photo7_12 from '../assets/photo_7_2025-11-05_13-36-12.jpg';
import photo1_12 from '../assets/photo_1_2025-11-05_13-36-12.jpg';
import photo2_44 from '../assets/photo_2_2025-11-05_13-36-44.jpg';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let timeoutId;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Update CSS variables for the radial gradient effect
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      // Clear existing timeout
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    // Smooth cursor follower with bounce effect
    const animateCursor = () => {
      setCursorPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        // Smooth easing factor (lower = more lag/bounce)
        const ease = 0.15;
        
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateCursor);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [mousePosition]);

  return (
    <div className="renaissance-gallery">
      {/* Custom Cursor Follower */}
      <div 
        className="cursor-follower"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        <div className={`cursor-inner ${isMoving ? 'moving' : ''}`}></div>
      </div>
      
      {/* Cursor Trail Effect */}
      <div 
        className="cursor-trail"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>

      {/* Hero Section - Dark Elegant Style */}
      <section className="renaissance-hero">
        {/* Background Images */}
        <div className="hero-images-background">
          <div className="hero-main-frame">
            <img src={photo1_28} alt="Featured Art" />
          </div>
          <div className="hero-side-img">
            <img src={photo3_12} alt="Gallery" />
            <div className="year-badge">—1704</div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="hero-content-overlay">
          <div className="hero-left-content">
            <p className="hero-tagline">Where beauty transcends</p>
            <h1 className="hero-title">
              <span className="title-regular">Captivating</span><br/>
              <span className="title-italic">Beauty:</span> <span className="title-regular">Art</span><br/>
              <span className="title-regular">Beyond</span> <span className="title-italic">Time</span>
            </h1>
            <div className="hero-star-divider">
              <span className="hero-line"></span>
              <span className="hero-star">✦</span>
              <span className="hero-line"></span>
            </div>
            <p className="hero-description">
              Our gallery is a place to learn, to be inspired, and to simply relax and enjoy the beauty of art. We offer a variety of programs and events, so there is always something new to see and do.
            </p>
            <Link to="/learn-more" className="hero-button">Learn more</Link>
            
            {/* Circular Video Below Button */}
            <div className="hero-circular-video">
              <img src={photo2_12} alt="Video Preview" />
              <button className="video-play-button">▶</button>
            </div>
          </div>
          
          <div className="hero-right-content">
            <div className="timeless-artists-box">
              <h3>Timeless Artistry</h3>
              <p>Learn about the historical context, artistic techniques, and cultural significance.</p>
            </div>
          </div>
        </div>

        {/* Video Guide Box */}
        <div className="video-guide-box">
          <p className="video-label">VIDEO GUIDE</p>
          <p className="video-text">Embrace the artistic journey with our video guides.</p>
        </div>
        
        {/* Bottom Link */}
        <div className="hero-bottom-link">
          <Link to="/exhibitions">Exhibitions →</Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Embrace the Renaissance: Where Art <em>Transcends Time and Ignites</em> the Soul
          </h2>
          
          <div className="welcome-grid">
            <div className="welcome-text">
              <h3>Welcome to QIBIBLOSH</h3>
              <p className="welcome-subtitle">Explore the culture. Experience the art. Discover QIBIBLOSH.</p>
            </div>
            
            <div className="welcome-description">
              <p>At QIBIBLOSH, we invite you to embark on a journey through the captivating world of Pan-African art and culture. Our platform is dedicated to showcasing exquisite works, allowing art enthusiasts and culture lovers to immerse themselves in the beauty, elegance, and timeless allure of African creativity.</p>
            </div>
          </div>
          
          <div className="gateway-section">
            <div className="gateway-text">
              <h3>A Gateway to African Culture</h3>
              <p>Our platform serves as a bridge between the past and the present.</p>
            </div>
            <div className="gateway-image">
              <img src={photo4_12} alt="Renaissance Art" />
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Beauty Section */}
      <section className="unlock-section">
        <div className="unlock-content">
          <div className="star-decoration">✦</div>
          <h2 className="unlock-title">
            Unlock the Beauty of <em>African Art</em>
          </h2>
          <p className="unlock-description">
            African art represents a rich tapestry of cultural, intellectual, and artistic expression spanning centuries and continents.
          </p>
          <p className="unlock-subdesc">
            We strive to create an environment where the masterpieces of African creativity can be appreciated and admired by all.
          </p>
          
          <div className="unlock-portrait">
            <img src={photo5_12} alt="Renaissance Portrait" />
            <button className="play-button">▶</button>
            <p className="image-caption">ONLINE GUIDE</p>
          </div>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className="exhibitions-grid-section">
        <div className="exhibitions-container">
          <div className="exhibition-card">
            <img src={photo6_12} alt="Exhibition 1" />
            <div className="exhibition-info">
              <h4>Henriette Ronner-Knip</h4>
              <p className="exhibition-subtitle">"Cat with Kittens"</p>
              <p className="exhibition-date">On display<br/>May 15, 2023 - Aug 28, 2024</p>
              <span className="exhibition-number">— 01</span>
            </div>
          </div>
          
          <div className="exhibition-card">
            <img src={photo7_12} alt="Exhibition 2" />
            <div className="exhibition-info">
              <h4>Kamilly Rusiecki</h4>
              <p className="exhibition-subtitle">"Lithuanian Girl"</p>
              <p className="exhibition-date">On display<br/>Aug 10, 2023 - Sep 12, 2024</p>
              <span className="exhibition-number">— 02</span>
            </div>
          </div>
          
          <div className="exhibition-card">
            <img src={photo1_12} alt="Exhibition 3" />
            <div className="exhibition-info">
              <h4>Marcello Fogolino</h4>
              <p className="exhibition-subtitle">"Maria with The Child"</p>
              <p className="exhibition-date">Soon<br/>Sep 22, 2024 - Jun 14, 2025</p>
              <span className="exhibition-number">— 03</span>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="virtual-tour-section">
        <div className="tour-content">
          <div className="tour-text">
            <h2>Our Online Guide Offers You a <em>Virtual Tour</em></h2>
            <p>Engage with the rich symbolism, meticulous details, and profound narratives that characterize African art and culture, and unlock the stories hidden within each creative expression.</p>
            <Link to="/tour" className="tour-link">Explore More →</Link>
          </div>
          <div className="tour-image">
            <img src={photo2_44} alt="Virtual Tour" />
            <button className="play-button-large">▶</button>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default Home;
