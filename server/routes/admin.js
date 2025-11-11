const express = require('express');
const router = express.Router();

// Mock data for admin dashboard
let dashboardStats = {
  totalEvents: 15,
  totalRegistrations: 127,
  totalSubscribers: 342,
  totalDonations: 25,
  totalDonationAmount: 15750
};

// Get dashboard statistics
router.get('/dashboard', (req, res) => {
  res.json(dashboardStats);
});

// Get recent activities
router.get('/activities', (req, res) => {
  const activities = [
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
  ];

  res.json(activities);
});

// Update dashboard stats
router.post('/dashboard/update', (req, res) => {
  dashboardStats = { ...dashboardStats, ...req.body };
  res.json(dashboardStats);
});

module.exports = router;
