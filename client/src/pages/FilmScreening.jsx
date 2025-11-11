import { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import '../styles/pages.css';

const FilmScreening = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filmToRegister, setFilmToRegister] = useState(null);

  const handleRegister = (film) => {
    setFilmToRegister(film);
    setIsModalOpen(true);
  };

  const films = [
    {
      id: 1,
      title: "DRYLONGSO",
      director: "Cauleen Smith",
      year: "1998",
      duration: "87 minutes",
      description: "A powerful exploration of African American womanhood through the lens of magical realism and documentary aesthetics.",
      screeningDate: "Wednesday, 12 November 2025, 7pm",
      venue: "Chimurenga Factory"
    },
    {
      id: 2,
      title: "AFRICAN VILLAIN",
      director: "Various",
      year: "2024",
      duration: "45 minutes",
      description: "Martin Kimani navigates airport theatrics, from crotch explosives to sniffer dogs in this documentary exploration.",
      screeningDate: "Friday, 15 November 2025, 7pm",
      venue: "Chimurenga Factory"
    },
    {
      id: 3,
      title: "ZAMROCK EXPRESS",
      director: "Chimurenga Collective",
      year: "2024",
      duration: "4 episodes, 30 minutes each",
      description: "A four-part documentary series on the liberatory sound of Zambia's rock movement of the 1970s.",
      screeningDate: "Saturday, 16 November 2025, 6pm",
      venue: "Chimurenga Factory"
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1>FILM SCREENING</h1>
          <p>Join us for curated film screenings exploring African cinema, documentary, and visual culture</p>
        </header>

        <section className="current-screenings">
          <h2>CURRENT & UPCOMING SCREENINGS</h2>
          <div className="films-grid">
            {films.map(film => (
              <div key={film.id} className="film-card" onClick={() => setSelectedFilm(film)}>
                <h3>{film.title}</h3>
                <div className="film-meta">
                  <span className="director">Dir. {film.director}</span>
                  <span className="year">({film.year})</span>
                  <span className="duration">{film.duration}</span>
                </div>
                <p className="film-description">{film.description}</p>
                <div className="screening-info">
                  <span className="screening-date">{film.screeningDate}</span>
                  <span className="venue">{film.venue}</span>
                </div>
                <button className="register-btn" onClick={() => handleRegister(film)}>REGISTER FOR SCREENING</button>
              </div>
            ))}
          </div>
        </section>

        {selectedFilm && (
          <section className="film-details">
            <div className="film-detail-card">
              <button className="close-btn" onClick={() => setSelectedFilm(null)}>×</button>
              <h2>{selectedFilm.title}</h2>
              <div className="detail-meta">
                <p><strong>Director:</strong> {selectedFilm.director}</p>
                <p><strong>Year:</strong> {selectedFilm.year}</p>
                <p><strong>Duration:</strong> {selectedFilm.duration}</p>
                <p><strong>Screening:</strong> {selectedFilm.screeningDate}</p>
                <p><strong>Venue:</strong> {selectedFilm.venue}</p>
              </div>
              <p className="full-description">{selectedFilm.description}</p>
              <button className="register-btn" onClick={() => handleRegister(selectedFilm)}>REGISTER FOR THIS SCREENING</button>
            </div>
          </section>
        )}

        <section className="screening-info-section">
          <h2>SCREENING INFORMATION</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>VENUE</h3>
              <p>Chimurenga Factory<br />62 Juta Street, Braamfontein<br />Johannesburg</p>
            </div>
            <div className="info-item">
              <h3>TICKETS</h3>
              <p>Free Entry<br />Registration Required<br />Limited Seating</p>
            </div>
            <div className="info-item">
              <h3>ACCESSIBILITY</h3>
              <p>Wheelchair Accessible<br />Subtitles Available<br />Audio Description on Request</p>
            </div>
          </div>
        </section>

        {/* Registration Modal */}
        <RegistrationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          eventTitle={filmToRegister?.title || ''}
          eventDate={filmToRegister?.screeningDate || ''}
        />
      </div>
    </div>
  );
};

export default FilmScreening;
