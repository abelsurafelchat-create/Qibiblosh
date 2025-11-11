import { useParams, Link } from 'react-router-dom';
import '../styles/archiveDetail.css';
import photo6_12 from '../assets/photo_6_2025-11-05_13-36-12.jpg';
import photo1_28 from '../assets/photo_1_2025-11-05_13-36-28.jpg';
import photo3_12 from '../assets/photo_3_2025-11-05_13-36-12.jpg';
import photo5_12 from '../assets/photo_5_2025-11-05_13-36-12.jpg';
import photo7_12 from '../assets/photo_7_2025-11-05_13-36-12.jpg';
import photo1_12 from '../assets/photo_1_2025-11-05_13-36-12.jpg';

const ExhibitionDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const exhibitionDetail = {
    id: 1,
    title: "Henriette Ronner-Knip",
    subtitle: "Cat with Kittens",
    status: "On Display",
    dates: "May 10, 2023 - Aug 28, 2024",
    location: "QIBIBLOSH Gallery, Main Hall",
    curator: "Dr. Maria Santos",
    description: "A remarkable collection showcasing the masterful work of Henriette Ronner-Knip, renowned for her exquisite depictions of domestic animals, particularly cats.",
    fullDescription: "Henriette Ronner-Knip (1821-1909) was a Dutch-Belgian artist best known for her paintings of cats. This exhibition features her most celebrated work, 'Cat with Kittens,' alongside other remarkable pieces from her extensive career.\n\nThe exhibition explores Ronner-Knip's unique ability to capture the personality and charm of her feline subjects, showcasing her technical mastery and deep understanding of animal behavior. Through careful observation and skillful brushwork, she brought these domestic scenes to life with warmth and authenticity.",
    highlights: [
      "Original 'Cat with Kittens' masterpiece",
      "Rare sketches and preparatory studies",
      "Interactive digital experience",
      "Guided tours with art historians"
    ],
    images: [
      photo6_12,
      photo1_28,
      photo3_12,
      photo5_12
    ],
    relatedExhibitions: [
      {
        id: 2,
        title: "Kamilly Rusiecki",
        dates: "AUG 04, 2023",
        image: photo7_12
      },
      {
        id: 3,
        title: "Marcello Fogolino",
        dates: "SEP 22, 2024",
        image: photo1_12
      }
    ]
  };

  return (
    <div className="archive-detail-page renaissance-gallery">
      {/* Hero Section */}
      <section className="detail-hero-section">
        <div className="event-hero-content">
          <div className="event-category-badge">{exhibitionDetail.status}</div>
          
          <h1 className="event-hero-title">
            {exhibitionDetail.title}
          </h1>
          
          <p className="event-hero-subtitle">
            <em>{exhibitionDetail.subtitle}</em>
          </p>
          
          <div className="event-hero-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
          
          <div className="event-hero-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">•</span>
            <Link to="/exhibition" className="breadcrumb-link">EXHIBITIONS</Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">{exhibitionDetail.title}</span>
          </div>
        </div>
      </section>

      {/* On Display Section */}
      <section className="on-display-section">
        <div className="display-container">
          <h2 className="display-title">On Display</h2>
          <h3 className="display-subtitle">
            <em>"{exhibitionDetail.subtitle}"</em>
          </h3>
          
          <div className="display-content">
            <div className="display-text">
              <h4 className="text-label">{exhibitionDetail.dates}</h4>
              <p style={{color: '#C9B896', marginTop: '20px', lineHeight: '1.8'}}>
                {exhibitionDetail.description}
              </p>
            </div>
            
            <div className="display-artwork">
              <img src={exhibitionDetail.images[0]} alt="Featured artwork" />
              <p className="artwork-caption">
                {exhibitionDetail.title}<br/>
                {exhibitionDetail.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Exhibition Section */}
      <section className="event-about-section">
        <div className="event-about-container">
          <h2 className="about-heading">About This Exhibition</h2>
          
          <div className="about-text">
            {exhibitionDetail.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="body-text">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="detail-highlights-section">
        <div className="detail-container">
          <div className="highlights-wrapper">
            <h3 className="highlights-heading">Exhibition Highlights</h3>
            <div className="highlights-grid">
              {exhibitionDetail.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-number">{String(index + 1).padStart(2, '0')}</div>
                  <p className="highlight-text">{highlight}</p>
                </div>
              ))}
            </div>
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
          {exhibitionDetail.images.slice(1).map((image, index) => (
            <div key={index} className="gallery-image">
              <img src={image} alt={`Exhibition image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Related Exhibitions */}
      <section className="related-events-section">
        <div className="related-events-container">
          <h2 className="related-heading">Related Exhibitions</h2>
          
          <div className="related-events-grid">
            {exhibitionDetail.relatedExhibitions.map((exhibition) => (
              <Link 
                key={exhibition.id} 
                to={`/exhibition/${exhibition.id}`} 
                className="related-event-card"
              >
                <div className="related-event-image">
                  <img src={exhibition.image} alt={exhibition.title} />
                  <div className="related-overlay">
                    <span className="view-details">View Exhibition →</span>
                  </div>
                </div>
                <div className="related-event-info">
                  <p className="related-event-date">{exhibition.dates}</p>
                  <h3 className="related-event-title">{exhibition.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionDetail;
