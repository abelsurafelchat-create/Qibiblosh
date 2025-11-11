const express = require('express');
const router = express.Router();

// Mock donations data
let donations = [];

// Create donation
router.post('/', (req, res) => {
  const { amount, donorName, donorEmail, message, anonymous } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Valid amount is required' });
  }

  const donation = {
    id: donations.length + 1,
    amount: parseFloat(amount),
    donorName: anonymous ? 'Anonymous' : donorName,
    donorEmail,
    message: message || '',
    anonymous: anonymous || false,
    createdAt: new Date().toISOString(),
    status: 'pending' // In real app, integrate with payment processor
  };

  donations.push(donation);
  
  res.json({ 
    message: 'Donation received successfully', 
    donation: {
      id: donation.id,
      amount: donation.amount,
      donorName: donation.donorName,
      message: donation.message
    }
  });
});

// Get donation stats (admin only)
router.get('/stats', (req, res) => {
  const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);
  const totalDonations = donations.length;
  const averageDonation = totalDonations > 0 ? totalAmount / totalDonations : 0;

  res.json({
    totalAmount,
    totalDonations,
    averageDonation,
    recentDonations: donations.slice(-5).reverse()
  });
});

// Get all donations (admin only)
router.get('/', (req, res) => {
  res.json(donations);
});

module.exports = router;
