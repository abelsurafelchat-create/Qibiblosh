import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import '../styles/eventDetail.css';
import photo1_28 from '../assets/photo_1_2025-11-05_13-36-28.jpg';
import photo3_12 from '../assets/photo_3_2025-11-05_13-36-12.jpg';
import photo5_12 from '../assets/photo_5_2025-11-05_13-36-12.jpg';
import photo2_12 from '../assets/photo_2_2025-11-05_13-36-12.jpg';
import photo4_12 from '../assets/photo_4_2025-11-05_13-36-12.jpg';

const EventDetail = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data - in real app, fetch based on id
  const eventDetail = {
    id: 1,
    title: "POEMS AGAINST GENOCIDE",
    subtitle: "An Evening of Poetry and Resistance",
    date: "Thursday, 7 November 2025",
    time: "7:00 PM - 9:30 PM",
    location: "Chimurenga Factory, 62 Juta Street, Braamfontein",
    category: "POETRY READING",
    description: "Join us for a powerful evening of poetry that speaks truth to power and stands in solidarity with those facing genocide and oppression around the world.",
    fullDescription: "This special evening brings together poets, activists, and community members for an urgent gathering of voices against genocide. Through the power of poetry, we create space for mourning, resistance, and collective action.\n\nThe event features readings from both established and emerging poets whose work addresses themes of genocide, displacement, resistance, and survival. Each poem serves as both witness and weapon, documenting atrocities while imagining pathways toward justice and liberation.",
    performers: [
      "Koleka Putuma",
      "Lebo Mashile",
      "Siphokazi Jonas",
      "Makhosazana Xaba"
    ],
    images: [
      photo1_28,
      photo3_12,
      photo5_12
    ],
    ticketInfo: {
      price: "Free Entry",
      registration: "Required",
      capacity: "Limited Seating"
    },
    relatedEvents: [
      {
        id: 2,
        title: "DRYLONGSO Film Screening",
        date: "NOV 12, 2025",
        image: photo2_12
      },
      {
        id: 3,
        title: "KwaNTU LIVE Performance",
        date: "NOV 14, 2025",
        image: photo4_12
      }
    ]
  };

  return (
    <div className="event-detail-page renaissance-gallery">
      {/* Hero Section */}
      <section className="event-hero-section">
        <div className="event-hero-content">
          <div className="event-category-badge">{eventDetail.category}</div>
          
          <h1 className="event-hero-title">
            {eventDetail.title}
          </h1>
          
          <p className="event-hero-subtitle">
            <em>{eventDetail.subtitle}</em>
          </p>
          
          <div className="event-hero-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
          
          <div className="event-hero-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">•</span>
            <Link to="/archives" className="breadcrumb-link">EVENTS</Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">{eventDetail.title}</span>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="event-info-section">
        <div className="event-info-container">
          <div className="event-info-grid">
            {/* Left - Event Details */}
            <div className="event-details-panel">
              <h2 className="section-label">EVENT DETAILS</h2>
              
              <div className="detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <div>
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{eventDetail.date}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{eventDetail.time}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{eventDetail.location}</span>
                </div>
              </div>

              <div className="event-divider"></div>

              <div className="ticket-info">
                <h3>Ticket Information</h3>
                <div className="ticket-details">
                  <div className="ticket-row">
                    <span>Price:</span>
                    <span>{eventDetail.ticketInfo.price}</span>
                  </div>
                  <div className="ticket-row">
                    <span>Registration:</span>
                    <span>{eventDetail.ticketInfo.registration}</span>
                  </div>
                  <div className="ticket-row">
                    <span>Capacity:</span>
                    <span>{eventDetail.ticketInfo.capacity}</span>
                  </div>
                </div>
              </div>

              <button className="register-event-btn" onClick={() => setIsModalOpen(true)}>REGISTER TO ATTEND</button>
            </div>

            {/* Right - Featured Image */}
            <div className="event-featured-image">
              <img src={eventDetail.images[0]} alt={eventDetail.title} />
            </div>
          </div>
        </div>
      </section>

      {/* About Event Section */}
      <section className="event-about-section">
        <div className="event-about-container">
          <h2 className="about-heading">About This Event</h2>
          
          <div className="about-text">
            <p className="intro-text">{eventDetail.description}</p>
            
            {eventDetail.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="body-text">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Performers Section */}
      <section className="performers-section">
        <div className="performers-container">
          <h2 className="performers-heading">Featured Performers</h2>
          
          <div className="performers-grid">
            {eventDetail.performers.map((performer, index) => (
              <div key={index} className="performer-card">
                <div className="performer-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="performer-name">{performer}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="event-gallery-section">
        <div className="gallery-divider">
          <span className="divider-line"></span>
          <span className="divider-star">✦</span>
          <span className="divider-line"></span>
        </div>
        
        <div className="event-gallery-grid">
          {eventDetail.images.slice(1).map((image, index) => (
            <div key={index} className="gallery-image">
              <img src={image} alt={`Event image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Related Events */}
      <section className="related-events-section">
        <div className="related-events-container">
          <h2 className="related-heading">Upcoming Events</h2>
          
          <div className="related-events-grid">
            {eventDetail.relatedEvents.map((event) => (
              <Link 
                key={event.id} 
                to={`/event/${event.id}`} 
                className="related-event-card"
              >
                <div className="related-event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="related-overlay">
                    <span className="view-details">View Event →</span>
                  </div>
                </div>
                <div className="related-event-info">
                  <p className="related-event-date">{event.date}</p>
                  <h3 className="related-event-title">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="event-cta-section">
        <div className="event-cta-content">
          <div className="cta-icon">✦</div>
          <h2 className="cta-title">Join Us</h2>
          <p className="cta-description">
            Be part of this important gathering. Register now to secure your place.
          </p>
          <button className="cta-register-btn" onClick={() => setIsModalOpen(true)}>REGISTER NOW</button>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={eventDetail.title}
        eventDate={eventDetail.date}
      />
    </div>
  );
};

export default EventDetail;
