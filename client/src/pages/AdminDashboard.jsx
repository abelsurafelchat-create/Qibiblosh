import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalEvents: 0,
      totalRegistrations: 0,
      totalSubscribers: 0,
      totalDonations: 0,
      totalDonationAmount: 0
    },
    recentActivities: [],
    events: [],
    subscribers: [],
    donations: []
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // Load dashboard data
    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = async () => {
    try {
      // In a real app, you'd make API calls to your backend
      // For now, we'll use mock data
      setDashboardData({
        stats: {
          totalEvents: 15,
          totalRegistrations: 127,
          totalSubscribers: 342,
          totalDonations: 25,
          totalDonationAmount: 15750
        },
        recentActivities: [
          {
            id: 1,
            type: 'event_registration',
            message: 'New registration for POEMS AGAINST GENOCIDE',
            timestamp: new Date().toISOString()
          },
          {
            id: 2,
            type: 'newsletter_subscription',
            message: 'New newsletter subscription',
            timestamp: new Date(Date.now() - 3600000).toISOString()
          },
          {
            id: 3,
            type: 'donation',
            message: 'New donation received: R500',
            timestamp: new Date(Date.now() - 7200000).toISOString()
          }
        ],
        events: [
          { id: 1, title: "POEMS AGAINST GENOCIDE", date: "2025-11-07", registrations: 23 },
          { id: 2, title: "DRYLONGSO Film Screening", date: "2025-11-12", registrations: 15 },
          { id: 3, title: "KwaNTU LIVE", date: "2025-11-14", registrations: 42 }
        ],
        subscribers: [
          { id: 1, email: 'user1@example.com', name: 'John Doe', subscribedAt: '2025-11-01' },
          { id: 2, email: 'user2@example.com', name: 'Jane Smith', subscribedAt: '2025-11-02' }
        ],
        donations: [
          { id: 1, amount: 500, donorName: 'Anonymous', date: '2025-11-03' },
          { id: 2, amount: 250, donorName: 'Sarah Johnson', date: '2025-11-02' }
        ]
      });
      setLoading(false);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="container">
          <h1>Loading Dashboard...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="container">
          <div className="admin-nav">
            <h1>QIBIBILOSH ADMIN DASHBOARD</h1>
            <button onClick={handleLogout} className="logout-btn">LOGOUT</button>
          </div>
        </div>
      </div>

      <div className="admin-content">
        <div className="container">
          <div className="admin-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              OVERVIEW
            </button>
            <button 
              className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              EVENTS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'subscribers' ? 'active' : ''}`}
              onClick={() => setActiveTab('subscribers')}
            >
              SUBSCRIBERS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'donations' ? 'active' : ''}`}
              onClick={() => setActiveTab('donations')}
            >
              DONATIONS
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="overview-tab">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>TOTAL EVENTS</h3>
                  <span className="stat-number">{dashboardData.stats.totalEvents}</span>
                </div>
                <div className="stat-card">
                  <h3>REGISTRATIONS</h3>
                  <span className="stat-number">{dashboardData.stats.totalRegistrations}</span>
                </div>
                <div className="stat-card">
                  <h3>SUBSCRIBERS</h3>
                  <span className="stat-number">{dashboardData.stats.totalSubscribers}</span>
                </div>
                <div className="stat-card">
                  <h3>DONATIONS</h3>
                  <span className="stat-number">R{dashboardData.stats.totalDonationAmount}</span>
                </div>
              </div>

              <div className="recent-activities">
                <h2>RECENT ACTIVITIES</h2>
                <div className="activities-list">
                  {dashboardData.recentActivities.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <span className="activity-type">{activity.type.replace('_', ' ').toUpperCase()}</span>
                      <span className="activity-message">{activity.message}</span>
                      <span className="activity-time">
                        {new Date(activity.timestamp).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="events-tab">
              <div className="tab-header">
                <h2>EVENT MANAGEMENT</h2>
                <button className="add-btn">ADD NEW EVENT</button>
              </div>
              
              <div className="events-table">
                <table>
                  <thead>
                    <tr>
                      <th>EVENT TITLE</th>
                      <th>DATE</th>
                      <th>REGISTRATIONS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.events.map(event => (
                      <tr key={event.id}>
                        <td>{event.title}</td>
                        <td>{new Date(event.date).toLocaleDateString()}</td>
                        <td>{event.registrations}</td>
                        <td>
                          <button className="edit-btn">EDIT</button>
                          <button className="delete-btn">DELETE</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'subscribers' && (
            <div className="subscribers-tab">
              <div className="tab-header">
                <h2>NEWSLETTER SUBSCRIBERS</h2>
                <button className="export-btn">EXPORT LIST</button>
              </div>
              
              <div className="subscribers-table">
                <table>
                  <thead>
                    <tr>
                      <th>EMAIL</th>
                      <th>NAME</th>
                      <th>SUBSCRIBED</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.subscribers.map(subscriber => (
                      <tr key={subscriber.id}>
                        <td>{subscriber.email}</td>
                        <td>{subscriber.name || 'N/A'}</td>
                        <td>{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
                        <td>
                          <button className="remove-btn">REMOVE</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="donations-tab">
              <div className="tab-header">
                <h2>DONATION MANAGEMENT</h2>
                <div className="donation-stats">
                  <span>Total: R{dashboardData.stats.totalDonationAmount}</span>
                  <span>Count: {dashboardData.stats.totalDonations}</span>
                </div>
              </div>
              
              <div className="donations-table">
                <table>
                  <thead>
                    <tr>
                      <th>AMOUNT</th>
                      <th>DONOR</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.donations.map(donation => (
                      <tr key={donation.id}>
                        <td>R{donation.amount}</td>
                        <td>{donation.donorName}</td>
                        <td>{new Date(donation.date).toLocaleDateString()}</td>
                        <td>
                          <button className="view-btn">VIEW</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
