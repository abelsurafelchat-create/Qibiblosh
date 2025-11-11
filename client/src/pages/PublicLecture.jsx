import { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import '../styles/publicLecture.css';

const PublicLecture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const handleRegister = (lecture) => {
    setSelectedLecture(lecture);
    setIsModalOpen(true);
  };
  const lectures = [
    {
      id: 1,
      title: "PRINTING POLITICAL CONSTELLATIONS",
      speaker: "Leopold Lambert",
      description: "A conversation with Leopold Lambert, founder and editor of The Funambulist, exploring the intersection of architecture, politics, and resistance.",
      date: "Thursday, 16 October 2025, 7pm",
      venue: "Chimurenga Factory",
      status: "upcoming"
    },
    {
      id: 2,
      title: "RHYTHMS OF A ROAD, VOICES OF AN ETHNOGRAPHER",
      speaker: "Vanessa Ulia Dantas",
      description: "A composed journey through Maputo exploring urban ethnography and the politics of space in post-colonial cities.",
      date: "Friday, 22 November 2025, 7pm",
      venue: "Chimurenga Factory",
      status: "upcoming"
    },
    {
      id: 3,
      title: "JOHANNESBURG: VOCABULARIES OF THE VISCERAL",
      speaker: "Jyoti Mistry",
      description: "Expressions of Multiple Practices - exploring the sensory and embodied experiences of urban life in Johannesburg.",
      date: "Saturday, 30 November 2025, 3pm",
      venue: "Chimurenga Factory",
      status: "upcoming"
    }
  ];

  const pastLectures = [
    {
      title: "SURPLUS VALUES AND SOCIAL REPRODUCTION",
      speaker: "Ari Sitas",
      date: "September 2025",
      description: "Launch lecture for the latest publication in the Chimurenganyana series"
    },
    {
      title: "MAMANE: REMEMBERING WINNIE",
      speaker: "Various Speakers",
      date: "August 2025",
      description: "Collective reflections on Mam'Winnie Madikizela-Mandela's time in Majwemasweu, Brandfort"
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1>PUBLIC LECTURE</h1>
          <p>Engaging with critical thinkers, artists, and scholars on questions of politics, culture, and social transformation</p>
        </header>

        <section className="upcoming-lectures">
          <h2>UPCOMING LECTURES</h2>
          <div className="lectures-grid">
            {lectures.map(lecture => (
              <div key={lecture.id} className="lecture-card">
                <h3>{lecture.title}</h3>
                <div className="speaker-info">
                  <span className="speaker">Speaker: {lecture.speaker}</span>
                </div>
                <p className="lecture-description">{lecture.description}</p>
                <div className="lecture-details">
                  <span className="lecture-date">{lecture.date}</span>
                  <span className="lecture-venue">{lecture.venue}</span>
                </div>
                <button className="register-btn" onClick={() => handleRegister(lecture)}>REGISTER TO ATTEND</button>
              </div>
            ))}
          </div>
        </section>

        <section className="lecture-series">
          <h2>LECTURE SERIES</h2>
          <div className="series-grid">
            <div className="series-item">
              <h3>THE CHRONIC CONVERSATIONS</h3>
              <p>Monthly discussions exploring themes from The Chronic magazine, focusing on liberation movements, urban politics, and cultural resistance.</p>
              <span className="series-frequency">Monthly • Third Thursday</span>
            </div>
            
            <div className="series-item">
              <h3>AFRICAN CITIES DIALOGUES</h3>
              <p>Quarterly lectures examining urbanism, migration, and city life across the African continent through interdisciplinary perspectives.</p>
              <span className="series-frequency">Quarterly • Season Premieres</span>
            </div>
            
            <div className="series-item">
              <h3>CHIMURENGA LIBRARY TALKS</h3>
              <p>Intimate conversations with authors, researchers, and activists whose work appears in Chimurenga publications.</p>
              <span className="series-frequency">Bi-monthly • Friday Evenings</span>
            </div>
          </div>
        </section>

        <section className="past-lectures-section">
          <h2>PAST LECTURES</h2>
          <div className="past-lectures-grid">
            {pastLectures.map((lecture, index) => (
              <div key={index} className="past-lecture">
                <h4>{lecture.title}</h4>
                <span className="past-speaker">{lecture.speaker}</span>
                <p>{lecture.description}</p>
                <span className="past-date">{lecture.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="attendance-info">
          <h2>ATTENDANCE INFORMATION</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>REGISTRATION</h3>
              <p>Free attendance<br />Registration required<br />Limited seating available</p>
            </div>
            <div className="info-item">
              <h3>LOCATION</h3>
              <p>Chimurenga Factory<br />62 Juta Street<br />Braamfontein, Johannesburg</p>
            </div>
            <div className="info-item">
              <h3>ACCESSIBILITY</h3>
              <p>Wheelchair accessible venue<br />Sign language interpretation<br />Available on request</p>
            </div>
          </div>
        </section>

        <section className="propose-lecture">
          <h2>PROPOSE A LECTURE</h2>
          <div className="proposal-info">
            <p>We welcome proposals for public lectures that engage with our themes of politics, culture, and social transformation. Proposals should include:</p>
            <ul>
              <li>Speaker biography and expertise</li>
              <li>Lecture title and abstract (300 words)</li>
              <li>Relevance to Chimurenga's mission</li>
              <li>Technical requirements</li>
            </ul>
            <button className="contact-btn">SUBMIT PROPOSAL</button>
          </div>
        </section>

        {/* Registration Modal */}
        <RegistrationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          eventTitle={selectedLecture?.title || ''}
          eventDate={selectedLecture?.date || ''}
        />
      </div>
    </div>
  );
};

export default PublicLecture;
