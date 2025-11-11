import { useState } from 'react';
import '../styles/eventReminder.css';

const EventReminder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    events: [],
    reminderTime: '1day'
  });
  const [submitted, setSubmitted] = useState(false);

  const upcomingEvents = [
    { id: 1, title: "POEMS AGAINST GENOCIDE", date: "2025-11-07", time: "19:00" },
    { id: 2, title: "DRYLONGSO Film Screening", date: "2025-11-12", time: "19:00" },
    { id: 3, title: "Madala Kunene and Sibusile Xaba – KwaNTU LIVE", date: "2025-11-14", time: "19:00" },
    { id: 4, title: "PRINTING POLITICAL CONSTELLATIONS", date: "2025-10-16", time: "19:00" },
    { id: 5, title: "REZA KHOTA QUARTET: RESILIENCE TOUR", date: "2025-09-12", time: "19:00" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventSelection = (eventId) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter(id => id !== eventId)
        : [...prev.events, eventId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Event reminder registration:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="success-message">
            <h1>REMINDER SET!</h1>
            <p>Thank you for setting up event reminders. You will receive notifications for your selected events.</p>
            <button onClick={() => setSubmitted(false)} className="back-btn">SET MORE REMINDERS</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1>EVENT REMINDER</h1>
          <p>Never miss an event at Chimurenga Factory. Set up personalized reminders for upcoming events.</p>
        </header>

        <form onSubmit={handleSubmit} className="reminder-form">
          <section className="personal-info">
            <h2>YOUR INFORMATION</h2>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
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
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </section>

          <section className="event-selection">
            <h2>SELECT EVENTS</h2>
            <p>Choose the events you'd like to receive reminders for:</p>
            <div className="events-list">
              {upcomingEvents.map(event => (
                <div key={event.id} className="event-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.events.includes(event.id)}
                      onChange={() => handleEventSelection(event.id)}
                    />
                    <div className="event-info">
                      <h3>{event.title}</h3>
                      <span className="event-datetime">
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="reminder-settings">
            <h2>REMINDER PREFERENCES</h2>
            <div className="form-group">
              <label htmlFor="reminderTime">Send reminder:</label>
              <select
                id="reminderTime"
                name="reminderTime"
                value={formData.reminderTime}
                onChange={handleInputChange}
              >
                <option value="1hour">1 hour before</option>
                <option value="3hours">3 hours before</option>
                <option value="1day">1 day before</option>
                <option value="3days">3 days before</option>
                <option value="1week">1 week before</option>
              </select>
            </div>
          </section>

          <button type="submit" className="submit-btn">SET UP REMINDERS</button>
        </form>

        <section className="reminder-info">
          <h2>HOW IT WORKS</h2>
          <div className="info-steps">
            <div className="step">
              <h3>1. SELECT</h3>
              <p>Choose the events you're interested in attending</p>
            </div>
            <div className="step">
              <h3>2. CUSTOMIZE</h3>
              <p>Set your preferred reminder timing</p>
            </div>
            <div className="step">
              <h3>3. RECEIVE</h3>
              <p>Get email notifications before your selected events</p>
            </div>
          </div>
        </section>

        <section className="additional-info">
          <h2>ADDITIONAL INFORMATION</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>PRIVACY</h3>
              <p>Your contact information is used only for event reminders and will not be shared with third parties.</p>
            </div>
            <div className="info-item">
              <h3>UPDATES</h3>
              <p>You'll be notified of any changes to event times, venues, or cancellations.</p>
            </div>
            <div className="info-item">
              <h3>MANAGE</h3>
              <p>You can update your reminder preferences or unsubscribe at any time using the links in our emails.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventReminder;
