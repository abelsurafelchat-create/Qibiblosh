import { useState } from 'react';
import '../styles/newsletter.css';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: [],
    frequency: 'weekly'
  });
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    { id: 'events', label: 'Events & Exhibitions' },
    { id: 'publications', label: 'New Publications' },
    { id: 'music', label: 'Music & PASS' },
    { id: 'research', label: 'Research & Articles' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'community', label: 'Community Projects' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    try {
      console.log('Newsletter subscription:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  if (submitted) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="success-message">
            <h1>WELCOME TO THE QIBIBILOSH FAMILY!</h1>
            <p>Thank you for subscribing to our newsletter. You'll receive your first update soon.</p>
            <p>Check your email for a confirmation message.</p>
            <button onClick={() => setSubmitted(false)} className="back-btn">SUBSCRIBE ANOTHER EMAIL</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1>NEWSLETTER</h1>
          <p>Stay connected with QIBIBILOSH's latest events, exhibitions, and cultural programs</p>
        </header>

        <section className="newsletter-intro">
          <h2>JOIN OUR COMMUNITY</h2>
          <p>The Chimurenga newsletter brings you the latest updates on our events, new publications, research projects, and collaborative work. Stay informed about critical conversations happening across the African continent and diaspora.</p>
        </section>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <section className="subscription-details">
            <h2>SUBSCRIPTION DETAILS</h2>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="name">Name (Optional)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </div>
          </section>

          <section className="interests-section">
            <h2>YOUR INTERESTS</h2>
            <p>Select the topics you're most interested in receiving updates about:</p>
            <div className="interests-grid">
              {interestOptions.map(option => (
                <div key={option.id} className="interest-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(option.id)}
                      onChange={() => handleInterestChange(option.id)}
                    />
                    <span className="checkbox-label">{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="frequency-section">
            <h2>FREQUENCY</h2>
            <div className="form-group">
              <label htmlFor="frequency">How often would you like to hear from us?</label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleInputChange}
              >
                <option value="weekly">Weekly updates</option>
                <option value="biweekly">Bi-weekly updates</option>
                <option value="monthly">Monthly digest</option>
                <option value="events-only">Events only</option>
              </select>
            </div>
          </section>

          <button type="submit" className="submit-btn">SUBSCRIBE TO NEWSLETTER</button>
        </form>

        <section className="newsletter-preview">
          <h2>WHAT TO EXPECT</h2>
          <div className="preview-grid">
            <div className="preview-item">
              <h3>EVENT UPDATES</h3>
              <p>First access to event announcements, exhibition openings, and special programs at Chimurenga Factory.</p>
            </div>
            <div className="preview-item">
              <h3>NEW PUBLICATIONS</h3>
              <p>Be the first to know about new issues of The Chronic, Chimurenga Magazine, and other publications.</p>
            </div>
            <div className="preview-item">
              <h3>CULTURAL COMMENTARY</h3>
              <p>Insights and analysis on contemporary African politics, culture, and social movements.</p>
            </div>
            <div className="preview-item">
              <h3>COLLABORATION NEWS</h3>
              <p>Updates on partnerships, residencies, and collaborative projects with artists and institutions worldwide.</p>
            </div>
          </div>
        </section>

        <section className="past-newsletters">
          <h2>RECENT NEWSLETTERS</h2>
          <div className="newsletter-archive">
            <div className="newsletter-item">
              <h4>November 2025: This Month at Chimurenga Factory</h4>
              <p>Featuring POEMS AGAINST GENOCIDE, DRYLONGSO screening, and KwaNTU LIVE performances</p>
              <span className="newsletter-date">November 3, 2025</span>
            </div>
            <div className="newsletter-item">
              <h4>October 2025: Brandfort Liberation Capital Launch</h4>
              <p>Special edition covering the launch of our latest Chronic publication</p>
              <span className="newsletter-date">October 15, 2025</span>
            </div>
            <div className="newsletter-item">
              <h4>September 2025: Surplus Values & Social Reproduction</h4>
              <p>Ari Sitas on the latest Chimurenganyana publication</p>
              <span className="newsletter-date">September 20, 2025</span>
            </div>
          </div>
        </section>

        <section className="privacy-info">
          <h2>PRIVACY & UNSUBSCRIBE</h2>
          <div className="privacy-content">
            <p>We respect your privacy and will never share your email address with third parties. You can update your preferences or unsubscribe at any time using the links provided in every newsletter.</p>
            <p>Our newsletter is powered by our commitment to building community around critical cultural work and social transformation.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
