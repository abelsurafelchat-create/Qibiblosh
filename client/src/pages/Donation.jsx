import { useState } from 'react';
import '../styles/donation.css';

const Donation = () => {
  const [donationType, setDonationType] = useState('once');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    message: '',
    anonymous: false,
    newsletter: true
  });
  const [submitted, setSubmitted] = useState(false);

  const predefinedAmounts = [50, 100, 250, 500, 1000, 2500];

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    
    if (!finalAmount || finalAmount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }

    try {
      const donationData = {
        ...formData,
        amount: parseFloat(finalAmount),
        type: donationType
      };
      console.log('Donation submission:', donationData);
      setSubmitted(true);
    } catch (error) {
      console.error('Donation error:', error);
    }
  };

  if (submitted) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="success-message">
            <h1>THANK YOU FOR YOUR SUPPORT!</h1>
            <p>Your donation of R{customAmount || amount} helps us continue our critical cultural work.</p>
            <p>You will receive a confirmation email shortly with your donation receipt.</p>
            <div className="impact-message">
              <h3>YOUR IMPACT</h3>
              <p>Your contribution directly supports our events, publications, research, and community programs. Together, we're building platforms for critical cultural expression and social transformation.</p>
            </div>
            <button onClick={() => { setSubmitted(false); setAmount(''); setCustomAmount(''); }} className="back-btn">
              MAKE ANOTHER DONATION
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
          <h1>SUPPORT QIBIBILOSH</h1>
          <p>Your support enables us to continue creating platforms for critical cultural expression and social transformation across Africa and its diaspora.</p>
        </header>

        <section className="donation-impact">
          <h2>YOUR IMPACT</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <h3>R100</h3>
              <p>Supports one community workshop or educational program</p>
            </div>
            <div className="impact-item">
              <h3>R500</h3>
              <p>Funds artist fees for one evening event or performance</p>
            </div>
            <div className="impact-item">
              <h3>R1000</h3>
              <p>Covers production costs for one issue of The Chronic</p>
            </div>
            <div className="impact-item">
              <h3>R2500</h3>
              <p>Supports a month of Pan African Space Station programming</p>
            </div>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="donation-form">
          <section className="donation-type">
            <h2>DONATION TYPE</h2>
            <div className="type-options">
              <label className={`type-option ${donationType === 'once' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="donationType"
                  value="once"
                  checked={donationType === 'once'}
                  onChange={(e) => setDonationType(e.target.value)}
                />
                <span>ONE-TIME DONATION</span>
              </label>
              <label className={`type-option ${donationType === 'monthly' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="donationType"
                  value="monthly"
                  checked={donationType === 'monthly'}
                  onChange={(e) => setDonationType(e.target.value)}
                />
                <span>MONTHLY DONATION</span>
              </label>
            </div>
          </section>

          <section className="amount-selection">
            <h2>DONATION AMOUNT (ZAR)</h2>
            <div className="amount-grid">
              {predefinedAmounts.map(amountOption => (
                <button
                  key={amountOption}
                  type="button"
                  className={`amount-btn ${amount === amountOption ? 'selected' : ''}`}
                  onClick={() => handleAmountSelect(amountOption)}
                >
                  R{amountOption}
                </button>
              ))}
            </div>
            
            <div className="custom-amount">
              <label htmlFor="customAmount">Custom Amount:</label>
              <div className="custom-input">
                <span className="currency">R</span>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  placeholder="Enter amount"
                  min="1"
                />
              </div>
            </div>
          </section>

          <section className="donor-information">
            <h2>DONOR INFORMATION</h2>
            
            <div className="form-group">
              <label htmlFor="donorName">Full Name</label>
              <input
                type="text"
                id="donorName"
                name="donorName"
                value={formData.donorName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share why you're supporting Chimurenga..."
                rows={4}
              />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                />
                <span>Make this donation anonymous</span>
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
                <span>Subscribe to our newsletter for updates</span>
              </label>
            </div>
          </section>

          <div className="donation-total">
            <h3>DONATION TOTAL: R{customAmount || amount || '0'}</h3>
            {donationType === 'monthly' && (
              <p className="monthly-note">This amount will be charged monthly. You can cancel anytime.</p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            {donationType === 'monthly' ? 'START MONTHLY DONATION' : 'DONATE NOW'}
          </button>
        </form>

        <section className="why-support">
          <h2>WHY SUPPORT CHIMURENGA?</h2>
          <div className="support-reasons">
            <div className="reason">
              <h3>INDEPENDENT VOICE</h3>
              <p>We maintain editorial independence to address critical issues without compromise, funded by community support rather than corporate interests.</p>
            </div>
            <div className="reason">
              <h3>PLATFORM BUILDING</h3>
              <p>Your support helps us create and maintain platforms for African cultural expression, from Pan African Space Station to The Chronic magazine.</p>
            </div>
            <div className="reason">
              <h3>COMMUNITY ACCESS</h3>
              <p>Donations keep our events free and accessible, ensuring that financial barriers don't prevent community participation in critical cultural conversations.</p>
            </div>
            <div className="reason">
              <h3>RESEARCH & ARCHIVE</h3>
              <p>We invest in long-term research projects and archive development that preserve and share important cultural and political histories.</p>
            </div>
          </div>
        </section>

        <section className="other-support">
          <h2>OTHER WAYS TO SUPPORT</h2>
          <div className="support-options">
            <div className="support-option">
              <h3>VOLUNTEER</h3>
              <p>Join our team of volunteers for events, research projects, and community programs.</p>
            </div>
            <div className="support-option">
              <h3>COLLABORATE</h3>
              <p>Partner with us on projects, exhibitions, or research that aligns with our mission.</p>
            </div>
            <div className="support-option">
              <h3>SPREAD THE WORD</h3>
              <p>Share our work with your networks and help us reach new audiences and communities.</p>
            </div>
            <div className="support-option">
              <h3>ATTEND EVENTS</h3>
              <p>Your presence at our events builds community and supports our ongoing cultural work.</p>
            </div>
          </div>
        </section>

        <section className="bank-details">
          <h2>DIRECT BANK TRANSFER</h2>
          <div className="bank-info-box">
            <p className="bank-intro">You can also support us via direct bank transfer:</p>
            <div className="account-details">
              <div className="account-row">
                <span className="account-label">Account Name:</span>
                <span className="account-value">QIBIBLOSH</span>
              </div>
              <div className="account-row">
                <span className="account-label">Account Number:</span>
                <span className="account-value account-number">1000213cbe</span>
              </div>
              <div className="account-row">
                <span className="account-label">Bank:</span>
                <span className="account-value">Standard Bank</span>
              </div>
              <div className="account-row">
                <span className="account-label">Branch Code:</span>
                <span className="account-value">051001</span>
              </div>
              <div className="account-row">
                <span className="account-label">Account Type:</span>
                <span className="account-value">Current Account</span>
              </div>
            </div>
            <p className="bank-note">Please use your name as the payment reference and email us at donations@qibiblosh.org with proof of payment.</p>
          </div>
        </section>

        <section className="transparency">
          <h2>FINANCIAL TRANSPARENCY</h2>
          <div className="transparency-content">
            <p>We believe in transparency about how donations are used. Your contributions support:</p>
            <ul>
              <li>40% - Program costs (events, publications, research)</li>
              <li>25% - Artist and contributor fees</li>
              <li>20% - Venue and operational costs</li>
              <li>10% - Technology and platform maintenance</li>
              <li>5% - Administrative costs</li>
            </ul>
            <p>Annual financial reports are available upon request.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donation;
