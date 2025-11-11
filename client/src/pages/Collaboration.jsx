import '../styles/collaboration.css';

const Collaboration = () => {
  const collaborations = [
    {
      id: 1,
      title: "NINEVITES TAPESTRY COLLABORATION",
      partner: "Ninevites Collective",
      description: "A limited-edition series of handwoven wool tapestries designed by Chimurenga, bringing together traditional weaving techniques with contemporary African design.",
      type: "Arts & Crafts",
      status: "ongoing",
      year: "2025"
    },
    {
      id: 2,
      title: "THE OTOLITH COLLECTIVE",
      partner: "The Otolith Collective & George Shire",
      description: "Collaborative study of Dambudzo Marechera's literary work, exploring the intersection of literature, film, and political resistance.",
      type: "Research & Film",
      status: "completed",
      year: "2025"
    },
    {
      id: 3,
      title: "BRANDFORT LIBERATION CAPITAL",
      partner: "Multiple Community Partners",
      description: "Community-based research project exploring Winnie Madikizela-Mandela's intellectual and political work during her exile in Brandfort.",
      type: "Community Research",
      status: "ongoing",
      year: "2024-2025"
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1>COLLABORATION</h1>
          <p>Building partnerships across disciplines, communities, and continents to advance critical cultural work</p>
        </header>

        <section className="collaboration-philosophy">
          <h2>OUR APPROACH</h2>
          <div className="philosophy-content">
            <p>Chimurenga believes in collaborative practice as a method of knowledge production and cultural intervention. Our collaborations span artistic practice, scholarly research, community engagement, and institutional partnerships.</p>
            <p>We work with artists, researchers, activists, and communities to create new forms of cultural expression that challenge dominant narratives and imagine alternative futures.</p>
          </div>
        </section>

        <section className="current-collaborations">
          <h2>CURRENT & RECENT COLLABORATIONS</h2>
          <div className="collaborations-grid">
            {collaborations.map(collab => (
              <div key={collab.id} className="collaboration-card">
                <div className="collab-header">
                  <h3>{collab.title}</h3>
                  <span className={`status ${collab.status}`}>{collab.status}</span>
                </div>
                <div className="collab-partner">
                  <strong>Partner:</strong> {collab.partner}
                </div>
                <div className="collab-type">
                  <strong>Type:</strong> {collab.type}
                </div>
                <p className="collab-description">{collab.description}</p>
                <div className="collab-year">
                  <strong>Year:</strong> {collab.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="collaboration-types">
          <h2>TYPES OF COLLABORATION</h2>
          <div className="types-grid">
            <div className="type-item">
              <h3>ARTISTIC PARTNERSHIPS</h3>
              <p>Collaborative projects with artists, musicians, filmmakers, and cultural practitioners exploring new forms of creative expression.</p>
              <ul>
                <li>Co-productions and commissions</li>
                <li>Residencies and exchanges</li>
                <li>Cross-disciplinary projects</li>
              </ul>
            </div>
            
            <div className="type-item">
              <h3>RESEARCH COLLABORATIONS</h3>
              <p>Academic and community-based research partnerships investigating questions of politics, culture, and social transformation.</p>
              <ul>
                <li>Community-based research</li>
                <li>Academic partnerships</li>
                <li>Archive development</li>
              </ul>
            </div>
            
            <div className="type-item">
              <h3>INSTITUTIONAL PARTNERSHIPS</h3>
              <p>Strategic alliances with cultural institutions, universities, and organizations sharing our commitment to critical cultural work.</p>
              <ul>
                <li>Exhibition partnerships</li>
                <li>Educational programs</li>
                <li>Resource sharing</li>
              </ul>
            </div>
            
            <div className="type-item">
              <h3>COMMUNITY ENGAGEMENT</h3>
              <p>Grassroots collaborations with communities, activists, and social movements working for justice and transformation.</p>
              <ul>
                <li>Community workshops</li>
                <li>Activist partnerships</li>
                <li>Local knowledge projects</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="partnership-principles">
          <h2>PARTNERSHIP PRINCIPLES</h2>
          <div className="principles-content">
            <div className="principle">
              <h4>MUTUAL BENEFIT</h4>
              <p>All partnerships should benefit all parties involved, creating value for communities, institutions, and individuals.</p>
            </div>
            <div className="principle">
              <h4>SHARED VALUES</h4>
              <p>We collaborate with partners who share our commitment to social justice, cultural transformation, and critical inquiry.</p>
            </div>
            <div className="principle">
              <h4>TRANSPARENCY</h4>
              <p>Clear communication, shared decision-making, and transparent processes guide all collaborative relationships.</p>
            </div>
            <div className="principle">
              <h4>SUSTAINABILITY</h4>
              <p>Long-term thinking and sustainable practices ensure collaborations create lasting impact and ongoing relationships.</p>
            </div>
          </div>
        </section>

        <section className="collaborate-with-us">
          <h2>COLLABORATE WITH US</h2>
          <div className="collaboration-form-info">
            <p>We welcome collaboration proposals from artists, researchers, institutions, and communities. Proposals should include:</p>
            <div className="requirements-grid">
              <div className="requirement">
                <h4>PROJECT OVERVIEW</h4>
                <p>Clear description of proposed collaboration, objectives, and expected outcomes</p>
              </div>
              <div className="requirement">
                <h4>PARTNER INFORMATION</h4>
                <p>Background on collaborating individuals or organizations, including relevant experience</p>
              </div>
              <div className="requirement">
                <h4>ALIGNMENT</h4>
                <p>Explanation of how the collaboration aligns with Chimurenga's mission and values</p>
              </div>
              <div className="requirement">
                <h4>RESOURCES</h4>
                <p>Details on resource requirements, timeline, and sustainability plan</p>
              </div>
            </div>
            <button className="collaboration-btn">SUBMIT COLLABORATION PROPOSAL</button>
          </div>
        </section>

        <section className="past-collaborations">
          <h2>NOTABLE PAST COLLABORATIONS</h2>
          <div className="past-collabs">
            <div className="past-collab">
              <h4>PAN AFRICAN SPACE STATION</h4>
              <p>Ongoing collaboration creating a platform for African cultural expression and political discourse</p>
              <span className="past-year">2008 - Present</span>
            </div>
            <div className="past-collab">
              <h4>AFRICAN CITIES READER</h4>
              <p>Multi-institutional collaboration documenting urban transformation across Africa</p>
              <span className="past-year">2010 - Present</span>
            </div>
            <div className="past-collab">
              <h4>THE CHRONIC SERIES</h4>
              <p>Community-based research collaborations exploring liberation movements and social transformation</p>
              <span className="past-year">2013 - Present</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaboration;
