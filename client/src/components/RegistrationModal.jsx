import { useState } from 'react';
import '../styles/registrationModal.css';

const RegistrationModal = ({ isOpen, onClose, eventTitle, eventDate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfGuests: '1',
    dietaryRequirements: '',
    accessibility: '',
    hearAboutUs: '',
    newsletter: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const registrationData = {
        ...formData,
        eventTitle,
        eventDate,
        registeredAt: new Date().toISOString()
      };
      
      console.log('Registration submitted:', registrationData);
      
      // Here you would typically send to your backend
      // await fetch('/api/register', { method: 'POST', body: JSON.stringify(registrationData) });
      
      setSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          numberOfGuests: '1',
          dietaryRequirements: '',
          accessibility: '',
          hearAboutUs: '',
          newsletter: true
        });
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering for <strong>{eventTitle}</strong></p>
            <p className="success-message">
              A confirmation email has been sent to <strong>{formData.email}</strong>
            </p>
            <p className="success-note">
              We look forward to seeing you on {eventDate}
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-icon">✦</div>
              <h2 className="modal-title">Event Registration</h2>
              <p className="modal-subtitle">{eventTitle}</p>
              {eventDate && <p className="modal-date">{eventDate}</p>}
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-section">
                <h3>Personal Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="form-row">
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Event Details</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="numberOfGuests">Number of Guests</label>
                    <select
                      id="numberOfGuests"
                      name="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleInputChange}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dietaryRequirements">Dietary Requirements (Optional)</label>
                    <input
                      type="text"
                      id="dietaryRequirements"
                      name="dietaryRequirements"
                      value={formData.dietaryRequirements}
                      onChange={handleInputChange}
                      placeholder="e.g., Vegetarian, Vegan, Allergies"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="accessibility">Accessibility Needs (Optional)</label>
                    <textarea
                      id="accessibility"
                      name="accessibility"
                      value={formData.accessibility}
                      onChange={handleInputChange}
                      placeholder="Please let us know if you require any accessibility accommodations"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Additional Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="hearAboutUs">How did you hear about this event?</label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                    >
                      <option value="">Select an option</option>
                      <option value="website">Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="newsletter">Newsletter</option>
                      <option value="friend">Friend/Word of Mouth</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                      />
                      <span>Subscribe to our newsletter for future event updates</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Complete Registration
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
