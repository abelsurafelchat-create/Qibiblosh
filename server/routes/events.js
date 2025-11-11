const express = require('express');
const router = express.Router();

// Mock events data
let events = [
  {
    id: 1,
    title: "POEMS AGAINST GENOCIDE",
    description: "An evening of poetry, Friday 7 November from 7pm",
    date: "2025-11-07T19:00:00Z",
    type: "poetry",
    category: "events",
    featured: true,
    registrations: []
  },
  {
    id: 2,
    title: "DRYLONGSO Film Screening",
    description: "Wednesday, 12 November 2025, 7pm",
    date: "2025-11-12T19:00:00Z",
    type: "film",
    category: "film-screening",
    featured: true,
    registrations: []
  },
  {
    id: 3,
    title: "Madala Kunene and Sibusile Xaba – KwaNTU LIVE",
    description: "BAFO & XABA LIVE Friday 14 November 2025 from 7pm",
    date: "2025-11-14T19:00:00Z",
    type: "music",
    category: "events",
    featured: true,
    registrations: []
  }
];

// Get all events
router.get('/', (req, res) => {
  const { category, featured } = req.query;
  let filteredEvents = events;

  if (category) {
    filteredEvents = filteredEvents.filter(event => event.category === category);
  }

  if (featured === 'true') {
    filteredEvents = filteredEvents.filter(event => event.featured);
  }

  res.json(filteredEvents);
});

// Get single event
router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  res.json(event);
});

// Register for event
router.post('/:id/register', (req, res) => {
  const { name, email, phone } = req.body;
  const eventId = parseInt(req.params.id);
  
  const event = events.find(e => e.id === eventId);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  const registration = {
    id: Date.now(),
    name,
    email,
    phone,
    registeredAt: new Date().toISOString()
  };

  event.registrations.push(registration);
  
  res.json({ message: 'Registration successful', registration });
});

// Create event (admin only)
router.post('/', (req, res) => {
  const { title, description, date, type, category, featured } = req.body;
  
  const newEvent = {
    id: events.length + 1,
    title,
    description,
    date,
    type,
    category,
    featured: featured || false,
    registrations: []
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Update event (admin only)
router.put('/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const eventIndex = events.findIndex(e => e.id === eventId);
  
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  events[eventIndex] = { ...events[eventIndex], ...req.body };
  res.json(events[eventIndex]);
});

// Delete event (admin only)
router.delete('/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const eventIndex = events.findIndex(e => e.id === eventId);
  
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  events.splice(eventIndex, 1);
  res.json({ message: 'Event deleted successfully' });
});

module.exports = router;
