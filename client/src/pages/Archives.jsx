import { useState } from 'react';
import { Link } from 'react-router-dom';
import photo1_28 from '../assets/photo_1_2025-11-05_13-36-28.jpg';
import photo3_12 from '../assets/photo_3_2025-11-05_13-36-12.jpg';
import photo5_12 from '../assets/photo_5_2025-11-05_13-36-12.jpg';
import photo2_12 from '../assets/photo_2_2025-11-05_13-36-12.jpg';
import photo4_12 from '../assets/photo_4_2025-11-05_13-36-12.jpg';
import photo6_12 from '../assets/photo_6_2025-11-05_13-36-12.jpg';

const Archives = () => {
  const archiveEvents = [
    {
      id: 1,
      title: "A Journey Through the Renaissance",
      time: "12:30 PM - 1:15 PM",
      date: "AUG 11, 2023",
      description: "This tour will take you on a journey through the Renaissance, from the early days of the movement in Italy to its later flowering in Northern Europe. You will see some of the most famous paintings from this period.",
      image: photo1_28
    },
    {
      id: 2,
      title: "The Renaissance and You",
      time: "12:30 PM - 3:30 PM",
      date: "MAR 22, 2023",
      description: "This tour will explore the ways in which the Renaissance has influenced our own culture and society. You will see how Renaissance ideas about art, science, and philosophy have shaped our world today.",
      image: photo3_12
    },
    {
      id: 3,
      title: "Renaissance Art and Music",
      time: "5:30 PM - 8:15 PM",
      date: "DEC 23, 2022",
      description: "This Christmas tour will explore the relationship between art and music in the Renaissance. You will see how artists and musicians of the time were inspired by each other and how their work influenced each other.",
      image: photo5_12
    },
    {
      id: 4,
      title: "Renaissance Women Artists",
      time: "12:30 PM - 1:15 PM",
      date: "MAY 12, 2024",
      description: "We'll focus on the work of women artists from the Renaissance period. You'll learn about the challenges that these women faced and how they overcame them to create the most beautiful artworks of the time.",
      image: photo2_12
    },
    {
      id: 5,
      title: "African Renaissance Movement",
      time: "2:00 PM - 4:30 PM",
      date: "SEP 08, 2024",
      description: "Explore the African Renaissance movement and its impact on contemporary art and culture. This tour showcases works that bridge traditional African art with modern expressions.",
      image: photo4_12
    },
    {
      id: 6,
      title: "Pan-African Cultural Heritage",
      time: "10:00 AM - 12:30 PM",
      date: "JUN 15, 2024",
      description: "A comprehensive tour through Pan-African cultural heritage, exploring the connections between different African artistic traditions and their influence on global culture.",
      image: photo6_12
    }
  ];


  return (
    <div className="archives-events-page">
      <div className="archives-container">
        {/* Header Section */}
        <header className="archives-header">
          <p className="archives-subtitle">In addition to our permanent collection, we offer a variety of special programs, including group tours, art evenings, and workshops.</p>
          <h1 className="archives-title">Latest Events</h1>
        </header>

        {/* Events List */}
        <section className="archives-events-list">
          {archiveEvents.map((event) => (
            <Link 
              key={event.id} 
              to={`/archives/${event.id}`} 
              className="archive-event-item"
            >
              <div className="event-image-circle">
                <img src={event.image} alt={event.title} />
              </div>
              
              <div className="event-details">
                <div className="event-time-date">
                  <p className="event-time">{event.time}</p>
                  <p className="event-date">{event.date}</p>
                </div>
                
                <div className="event-content">
                  <h2 className="event-title">{event.title}</h2>
                  <p className="event-description">{event.description}</p>
                  <span className="view-more-link">
                    View Details 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Archives;
