const express = require('express');
const router = express.Router();

// Mock newsletter subscribers
let subscribers = [];

// Subscribe to newsletter
router.post('/subscribe', (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Check if already subscribed
  const existingSubscriber = subscribers.find(sub => sub.email === email);
  if (existingSubscriber) {
    return res.status(400).json({ message: 'Email already subscribed' });
  }

  const subscriber = {
    id: subscribers.length + 1,
    email,
    name: name || '',
    subscribedAt: new Date().toISOString(),
    active: true
  };

  subscribers.push(subscriber);
  
  res.json({ message: 'Successfully subscribed to newsletter', subscriber });
});

// Unsubscribe from newsletter
router.post('/unsubscribe', (req, res) => {
  const { email } = req.body;

  const subscriberIndex = subscribers.findIndex(sub => sub.email === email);
  if (subscriberIndex === -1) {
    return res.status(404).json({ message: 'Email not found' });
  }

  subscribers[subscriberIndex].active = false;
  
  res.json({ message: 'Successfully unsubscribed from newsletter' });
});

// Get all subscribers (admin only)
router.get('/subscribers', (req, res) => {
  res.json(subscribers.filter(sub => sub.active));
});

module.exports = router;
