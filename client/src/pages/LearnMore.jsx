import { Link } from 'react-router-dom';
import '../styles/learnMore.css';
import photo3_12 from '../assets/photo_3_2025-11-05_13-36-12.jpg';
import photo1_28 from '../assets/photo_1_2025-11-05_13-36-28.jpg';
import photo2_12 from '../assets/photo_2_2025-11-05_13-36-12.jpg';
import photo4_12 from '../assets/photo_4_2025-11-05_13-36-12.jpg';

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      {/* Hero Section */}
      <section className="learn-hero">
        <div className="learn-hero-content">
          <div className="hero-star-icon">✦</div>
          <h1 className="learn-hero-title">
            Discover <em>QIBIBLOSH</em>
          </h1>
          <p className="learn-hero-subtitle">
            Where Art Transcends Time and Culture Meets Innovation
          </p>
          <div className="hero-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="story-container">
          <div className="story-grid">
            <div className="story-text">
              <h2 className="section-heading">Our Story</h2>
              <p className="story-paragraph">
                QIBIBLOSH is more than a gallery—it's a living testament to the power of art 
                to transcend boundaries, challenge perceptions, and inspire transformation. 
                Founded on the principles of cultural preservation and contemporary innovation, 
                we create spaces where the past dialogues with the present.
              </p>
              <p className="story-paragraph">
                Our journey began with a simple vision: to create a platform that honors the 
                rich tapestry of African and global artistic heritage while pushing the 
                boundaries of contemporary expression. Today, we stand as a beacon for artists, 
                thinkers, and cultural enthusiasts seeking meaningful engagement with art.
              </p>
            </div>
            <div className="story-image">
              <img src={photo3_12} alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="mission-container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-icon">🎨</div>
              <h3>Our Mission</h3>
              <p>
                To create transformative cultural experiences that bridge historical legacy 
                with contemporary innovation, fostering dialogue, understanding, and social 
                transformation through the power of art.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="card-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                A world where art serves as a catalyst for social change, where cultural 
                heritage is celebrated and preserved, and where creative expression knows 
                no boundaries.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="card-icon">💡</div>
              <h3>Our Values</h3>
              <p>
                Excellence, Innovation, Cultural Integrity, Community Engagement, and 
                Social Responsibility guide everything we do, from curation to education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do-section">
        <div className="what-container">
          <h2 className="section-heading-center">What We Do</h2>
          
          <div className="activities-grid">
            <div className="activity-item">
              <div className="activity-number">01</div>
              <h3>Exhibitions & Galleries</h3>
              <p>
                Curated exhibitions featuring both historical masterpieces and contemporary 
                works that challenge, inspire, and provoke thought. Our rotating exhibitions 
                ensure there's always something new to discover.
              </p>
            </div>
            
            <div className="activity-item">
              <div className="activity-number">02</div>
              <h3>Cultural Events</h3>
              <p>
                From poetry readings to film screenings, lectures to performances, we host 
                diverse cultural events that bring communities together and spark meaningful 
                conversations about art, culture, and society.
              </p>
            </div>
            
            <div className="activity-item">
              <div className="activity-number">03</div>
              <h3>Educational Programs</h3>
              <p>
                Workshops, lectures, and guided tours designed to deepen understanding and 
                appreciation of art. We believe in making art accessible and educational for 
                all ages and backgrounds.
              </p>
            </div>
            
            <div className="activity-item">
              <div className="activity-number">04</div>
              <h3>Artist Support</h3>
              <p>
                We provide platforms, resources, and opportunities for emerging and established 
                artists to showcase their work, connect with audiences, and advance their 
                creative practice.
              </p>
            </div>
            
            <div className="activity-item">
              <div className="activity-number">05</div>
              <h3>Research & Archives</h3>
              <p>
                Preserving cultural heritage through meticulous archival work and research 
                projects that document and celebrate artistic movements, historical moments, 
                and cultural traditions.
              </p>
            </div>
            
            <div className="activity-item">
              <div className="activity-number">06</div>
              <h3>Community Engagement</h3>
              <p>
                Building bridges between art and community through collaborative projects, 
                outreach programs, and initiatives that make art accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="impact-container">
          <h2 className="section-heading-center">Our Impact</h2>
          
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Exhibitions Hosted</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Visitors Annually</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Artists Featured</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cultural Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="section-heading-center">Our Team</h2>
          <p className="team-intro">
            A diverse collective of curators, artists, educators, and cultural workers 
            dedicated to advancing our mission.
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={photo1_28} alt="Team Member" />
              </div>
              <h3>Dr. Amara Okonkwo</h3>
              <p className="member-role">Founder & Chief Curator</p>
              <p className="member-bio">
                Art historian with 20+ years experience in African contemporary art.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={photo2_12} alt="Team Member" />
              </div>
              <h3>Kwame Mensah</h3>
              <p className="member-role">Director of Programs</p>
              <p className="member-bio">
                Cultural producer specializing in interdisciplinary collaborations.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={photo4_12} alt="Team Member" />
              </div>
              <h3>Zainab Hassan</h3>
              <p className="member-role">Education Coordinator</p>
              <p className="member-bio">
                Educator passionate about making art accessible to all communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-star">✦</div>
            <h2>Join Our Journey</h2>
            <p>
              Become part of our community. Explore our exhibitions, attend our events, 
              or support our mission to make art accessible to all.
            </p>
            <div className="cta-buttons">
              <Link to="/archives" className="cta-btn-primary">Explore Events</Link>
              <Link to="/donation" className="cta-btn-secondary">Support Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
