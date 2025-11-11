import { useParams, Link } from 'react-router-dom';
import '../styles/archiveDetail.css';
import photo1_28 from '../assets/photo_1_2025-11-05_13-36-28.jpg';
import photo3_12 from '../assets/photo_3_2025-11-05_13-36-12.jpg';
import photo5_12 from '../assets/photo_5_2025-11-05_13-36-12.jpg';
import photo2_12 from '../assets/photo_2_2025-11-05_13-36-12.jpg';

const ArchiveDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const archiveDetail = {
    id: 1,
    title: "A Journey Through the Renaissance",
    subtitle: "Exploring the Birth of Modern Art",
    date: "AUG 11, 2023",
    time: "12:30 PM - 1:15 PM",
    location: "QIBIBLOSH Gallery, Main Hall",
    curator: "Dr. Sarah Johnson",
    description: "This comprehensive tour will take you on an immersive journey through the Renaissance, from the early days of the movement in Italy to its later flowering in Northern Europe. You will see some of the most famous paintings from this period and understand the cultural revolution that shaped modern art.",
    fullDescription: "The Renaissance represents one of the most significant periods in art history, marking a profound shift in how artists approached their craft. This exhibition brings together masterpieces that showcase the evolution of artistic techniques, the rediscovery of classical ideals, and the emergence of humanism as a driving force in creative expression.\n\nVisitors will explore works that demonstrate the revolutionary use of perspective, the mastery of light and shadow, and the celebration of human form and emotion. From religious iconography to secular portraiture, the exhibition traces the diverse themes that captivated Renaissance artists and their patrons.",
    highlights: [
      "Masterpieces from Italian and Northern Renaissance",
      "Interactive demonstrations of Renaissance techniques",
      "Guided tour with expert commentary",
      "Q&A session with the curator",
      "Complimentary exhibition catalog"
    ],
    images: [
      photo1_28,
      photo3_12,
      photo5_12,
      photo2_12
    ],
    relatedEvents: [
      {
        id: 2,
        title: "The Renaissance and You",
        date: "MAR 22, 2023",
        image: photo3_12
      },
      {
        id: 3,
        title: "Renaissance Art and Music",
        date: "DEC 23, 2022",
        image: photo5_12
      },
      {
        id: 4,
        title: "Renaissance Women Artists",
        date: "MAY 12, 2024",
        image: photo2_12
      }
    ]
  };

  return (
    <div className="archive-detail-page renaissance-gallery">
      {/* Hero Section */}
      <section className="detail-hero-section">
        <div className="hero-content">
          <h1 className="hero-main-title">
            Permanent <em>Exhibition</em>
          </h1>
          
          <div className="hero-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
          
          <div className="hero-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">•</span>
            <Link to="/archives" className="breadcrumb-link">PERMANENT EXHIBITION</Link>
          </div>
        </div>
      </section>


      {/* On Display Section */}
      <section className="on-display-section">
        <div className="display-container">
          <h2 className="display-title">On Display</h2>
          <h3 className="display-subtitle">
            <em>"Art Beyond Time"</em>
          </h3>
          
          <div className="display-content">
            <div className="display-text">
              <h4 className="text-label">Art is Eternal</h4>
            </div>
            
            <div className="display-artwork">
              <img src={archiveDetail.images[0]} alt="Featured artwork" />
              <p className="artwork-caption">Medea<br/>by Frederick Sandys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embrace Section */}
      <section className="embrace-section">
        <div className="embrace-container">
          <div className="embrace-artwork">
            <img src={archiveDetail.images[1]} alt="Renaissance artwork" />
          </div>
          
          <div className="embrace-content">
            <h2 className="embrace-title">
              Embrace the <em>Renaissance's Timeless</em> Splendour: Where <em>Art</em> Transcends and Inspires
            </h2>
            
            <div className="embrace-text-grid">
              <div className="text-column">
                <p>We are thrilled to present "Art Beyond Time," an extraordinary exhibition that breathes new life into the timeless beauty of Renaissance art. This innovative showcase challenges traditional notions and invites viewers to explore the dynamic interplay between the past and the present.</p>
                <p>"Art Beyond Time" features a carefully curated selection of artworks that blend classic Renaissance techniques with contemporary interpretations.</p>
              </div>
              
              <div className="text-column">
                <p>In this exhibition, you will encounter thought-provoking juxtapositions of Renaissance masterpieces alongside modern works inspired by the same themes, subjects, or techniques. The artworks engage in a captivating dialogue, inviting viewers to reflect on the enduring influence of the Renaissance on contemporary artistic expression.</p>
                <p>Join us on this exhilarating journey as we explore the intersections of tradition and innovation, past and present, and witness the vibrant evolution of Renaissance art.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rediscover Section */}
      <section className="rediscover-section">
        <div className="rediscover-container">
          <div className="rediscover-artwork">
            <img src={archiveDetail.images[2]} alt="Renaissance still life" />
            <p className="artwork-caption">"Name of art" 1798</p>
          </div>
          
          <h2 className="rediscover-title">
            Rediscover <em>the Renaissance's</em> Enduring <em>Genius</em> and
          </h2>
        </div>
      </section>

      {/* Full Width Artwork Section */}
      <section className="fullwidth-artwork-section">
        <div className="artwork-divider">
          <span className="divider-line"></span>
          <span className="divider-star">✦</span>
          <span className="divider-line"></span>
        </div>
        
        <div className="fullwidth-artwork">
          <img src={archiveDetail.images[3]} alt="Renaissance masterpiece" />
        </div>
        
        <div className="artwork-info">
          <Link to="/archives" className="more-link">MORE</Link>
        </div>
      </section>

    </div>
  );
};

export default ArchiveDetail;
