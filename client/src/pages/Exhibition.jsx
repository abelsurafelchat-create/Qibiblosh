import { Link } from 'react-router-dom';
import photo6_12 from '../assets/photo_6_2025-11-05_13-36-12.jpg';
import photo7_12 from '../assets/photo_7_2025-11-05_13-36-12.jpg';
import photo1_12 from '../assets/photo_1_2025-11-05_13-36-12.jpg';
import photo2_12 from '../assets/photo_2_2025-11-05_13-36-12.jpg';
import photo4_12 from '../assets/photo_4_2025-11-05_13-36-12.jpg';
import photo5_12 from '../assets/photo_5_2025-11-05_13-36-12.jpg';

const Exhibition = () => {
  const exhibitions = [
    {
      id: 1,
      title: "Henriette Ronner-Knip",
      subtitle: "Cat with Kittens",
      status: "On display",
      dates: "May 10, 2023 - Aug 28, 2024",
      image: photo6_12
    },
    {
      id: 2,
      title: "Kamilly Rusiecki",
      subtitle: "Lithuanian Girl",
      status: "On display",
      dates: "Aug 04, 2023 - Sep 12, 2024",
      image: photo7_12
    },
    {
      id: 3,
      title: "Marcello Fogolino",
      subtitle: "Maria with The Child",
      status: "Soon",
      dates: "Sep 22, 2024 - Jun 14, 2025",
      image: photo1_12
    },
    {
      id: 4,
      title: "CHIMU TAPESTRIES",
      subtitle: "A Ninevites Collab",
      status: "On display",
      dates: "Ongoing Exhibition",
      image: photo2_12
    },
    {
      id: 5,
      title: "BRANDFORT",
      subtitle: "Liberation Capital [1977-86]",
      status: "On display",
      dates: "March - June 2025",
      image: photo4_12
    },
    {
      id: 6,
      title: "JABU GOES TO JOBURG",
      subtitle: "A Chimurenga Fotonovela",
      status: "On display",
      dates: "February - May 2025",
      image: photo5_12
    }
  ];

  return (
    <div className="gallery-exhibition-page">
      <div className="gallery-container">

        {/* Exhibition Gallery Grid */}
        <section className="gallery-grid-section">
          <div className="gallery-exhibition-grid">
            {exhibitions.map((exhibition) => (
              <div key={exhibition.id} className="gallery-exhibition-card">
                <div className="gallery-card-image">
                  <img src={exhibition.image} alt={exhibition.title} />
                </div>
                <div className="gallery-card-content">
                  <p className="gallery-status">{exhibition.status}</p>
                  <p className="gallery-dates">{exhibition.dates}</p>
                  <h3 className="gallery-artist-name">{exhibition.title}</h3>
                  <p className="gallery-artwork-title">"{exhibition.subtitle}"</p>
                  <Link to={`/exhibition/${exhibition.id}`} className="gallery-read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exhibition;
