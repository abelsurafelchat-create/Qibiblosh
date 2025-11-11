import { useState } from 'react';

const EventRegistration = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    attendeeCount: 1,
    specialRequirements: '',
    eventId: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const upcomingEvents = [
    {
      id: 'poems-genocide',
      title: 'POEMS AGAINST GENOCIDE',
      date: '2025-11-07',
      time: '19:00',
      venue: 'Chimurenga Factory',
      capacity: 50,
      registered: 23,
      description: 'An evening of poetry responding to contemporary global conflicts'
    },
    {
      id: 'drylongso-screening',
      title: 'DRYLONGSO Film Screening',
      date: '2025-11-12',
      time: '19:00',
      venue: 'Chimurenga Factory',
      capacity: 40,
      registered: 15,
      description: 'Screening of Cauleen Smith\'s powerful 1998 film'
    },
    {
      id: 'kwantu-live',
      title: 'Madala Kunene and Sibusile Xaba – KwaNTU LIVE',
      date: '2025-11-14',
      time: '19:00',
      venue: 'Chimurenga Factory',
      capacity: 60,
      registered: 42,
      description: 'Live performance by legendary South African musicians'
    },
    {
      id: 'political-constellations',
      title: 'PRINTING POLITICAL CONSTELLATIONS',
      date: '2025-10-16',
      time: '19:00',
      venue: 'Chimurenga Factory',
      capacity: 35,
      registered: 28,
      description: 'Conversation with Leopold Lambert on architecture and politics'
    }
  ];

  const handleEventSelect = (eventId) => {
    setSelectedEvent(eventId);
    setFormData(prev => ({ ...prev, eventId }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Event registration:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const selectedEventData = upcomingEvents.find(event => event.id === selectedEvent);

  if (submitted) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="success-message">
            <h1>REGISTRATION CONFIRMED!</h1>
            <p>Thank you for registering for {selectedEventData?.title}.</p>
            <p>You will receive a confirmation email shortly with event details and any additional information.</p>
            <div className="event-details">
              <h3>EVENT DETAILS</h3>
              <p><strong>Date:</strong> {new Date(selectedEventData?.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {selectedEventData?.time}</p>
              <p><strong>Venue:</strong> {selectedEventData?.venue}</p>
            </div>
            <button onClick={() => { setSubmitted(false); setSelectedEvent(''); }} className="back-btn">
              REGISTER FOR ANOTHER EVENT
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1>EVENT REGISTRATION</h1>
          <p>Register for upcoming events at Chimurenga Factory. All events are free but registration is required due to limited seating.</p>
        </header>

        <section className="event-selection">
          <h2>SELECT AN EVENT</h2>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <div 
                key={event.id} 
                className={`event-card ${selectedEvent === event.id ? 'selected' : ''}`}
                onClick={() => handleEventSelect(event.id)}
              >
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <span className="event-date">{new Date(event.date).toLocaleDateString()}</span>
                  <span className="event-time">{event.time}</span>
                  <span className="event-venue">{event.venue}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="capacity-info">
                  <span className="capacity">
                    {event.registered}/{event.capacity} registered
                  </span>
                  <div className="capacity-bar">
                    <div 
                      className="capacity-fill" 
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
                {selectedEvent === event.id && <span className="selected-indicator">SELECTED</span>}
              </div>
            ))}
          </div>
        </section>

        {selectedEvent && (
          <form onSubmit={handleSubmit} className="registration-form">
            <h2>REGISTRATION DETAILS</h2>
            
            <div className="form-section">
              <h3>PERSONAL INFORMATION</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="organization">Organization/Institution (Optional)</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-section">
              <h3>EVENT DETAILS</h3>
              
              <div className="form-group">
                <label htmlFor="attendeeCount">Number of Attendees</label>
                <select
                  id="attendeeCount"
                  name="attendeeCount"
                  value={formData.attendeeCount}
                  onChange={handleInputChange}
                >
                  <option value={1}>1 person</option>
                  <option value={2}>2 people</option>
                  <option value={3}>3 people</option>
                  <option value={4}>4 people</option>
                  <option value={5}>5+ people (contact us)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequirements">Special Requirements (Optional)</label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  placeholder="Accessibility needs, dietary requirements, etc."
                  rows={4}
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">REGISTER FOR EVENT</button>
          </form>
        )}

        <section className="registration-info">
          <h2>REGISTRATION INFORMATION</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>FREE EVENTS</h3>
              <p>All Chimurenga events are free to attend. Registration ensures your spot and helps us plan accordingly.</p>
            </div>
            <div className="info-item">
              <h3>CONFIRMATION</h3>
              <p>You'll receive email confirmation with event details, directions, and any special instructions.</p>
            </div>
            <div className="info-item">
              <h3>CANCELLATION</h3>
              <p>If you can't attend, please let us know so we can offer your spot to someone on the waiting list.</p>
            </div>
            <div className="info-item">
              <h3>ACCESSIBILITY</h3>
              <p>Chimurenga Factory is wheelchair accessible. Please let us know about any specific needs in advance.</p>
            </div>
          </div>
        </section>

        <section className="venue-info">
          <h2>VENUE INFORMATION</h2>
          <div className="venue-details">
            <h3>CHIMURENGA FACTORY</h3>
            <p>62 Juta Street<br />Braamfontein<br />Johannesburg, 2001</p>
            <div className="venue-notes">
              <h4>GETTING THERE</h4>
              <p>Easily accessible by public transport. Parking available on surrounding streets. The venue is a 5-minute walk from Braamfontein Station.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventRegistration;
