# QIBIBILOSH

A complete cultural platform built with React.js frontend and Node.js backend, featuring an admin dashboard and comprehensive functionality for cultural expression and community engagement.

## 🌐 Social Media

Follow QIBIBILOSH on all platforms:
- **TikTok**: [@qibibilosh](https://www.tiktok.com/@qibibilosh)
- **Twitter**: [@qibibilosh](https://x.com/qibibilosh)
- **LinkedIn**: [QIBIBILOSH Series](https://www.linkedin.com/in/qibibilosh-series-a544a0395)
- **YouTube**: [@Qibibilosh](https://www.youtube.com/@Qibibilosh)
- **Instagram**: [@qibibilosh](https://www.instagram.com/qibibilosh)

## 🎯 Features

### Frontend Pages
- **Home Page** - Main landing page with cultural events and content
- **Exhibition** - Gallery and exhibition information
- **Film Screening** - Movie screenings and events
- **Public Lecture** - Academic talks and discussions
- **Collaboration** - Partnership opportunities
- **Event Reminder** - Notification system for events
- **Newsletter** - Subscription management
- **Event Registration** - Event signup system
- **Donation** - Support and funding page
- **About** - Organization information
- **Admin Dashboard** - Complete administrative interface

### Backend API
- **Authentication** - Admin login system
- **Events Management** - CRUD operations for events
- **Newsletter** - Subscription handling
- **Donations** - Payment processing
- **Admin Dashboard** - Statistics and management

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ (already installed)
- npm (comes with Node.js)

### Installation

1. **Install all dependencies:**
```bash
npm run install-all
```

2. **Start the development servers:**
```bash
npm run dev
```

This will start:
- Frontend (React): http://localhost:5173
- Backend (Node.js): http://localhost:5000

### Individual Setup

#### Frontend Only
```bash
cd client
npm install
npm run dev
```

#### Backend Only
```bash
cd server
npm install
npm run dev
```

## 🏗️ Project Structure

```
qibibilosh/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Exhibition.jsx
│   │   │   ├── FilmScreening.jsx
│   │   │   ├── PublicLecture.jsx
│   │   │   ├── Collaboration.jsx
│   │   │   ├── EventReminder.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── EventRegistration.jsx
│   │   │   ├── Donation.jsx
│   │   │   ├── About.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── App.jsx         # Main app component
│   │   ├── App.css         # Exact Chimurenga styling
│   │   └── index.css       # Global styles
│   └── package.json
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   │   ├── auth.js         # Authentication
│   │   ├── events.js       # Events management
│   │   ├── newsletter.js   # Newsletter handling
│   │   ├── donations.js    # Donation processing
│   │   └── admin.js        # Admin dashboard
│   ├── index.js            # Server entry point
│   ├── .env                # Environment variables
│   └── package.json
├── package.json            # Root package.json
└── README.md
```

## 🎨 Design & Styling

The application features a clean, modern design inspired by cultural platforms:

- **Typography**: Arial font family, uppercase headings
- **Colors**: Black text on white background (#000000 on #ffffff)
- **Layout**: Clean, minimal design with proper spacing
- **Navigation**: Multi-level navigation matching original
- **Responsive**: Mobile-friendly design
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🔐 Admin Dashboard

### Login Credentials
- **Username**: `admin`
- **Password**: `password`

### Admin Features
- **Overview**: Statistics and recent activities
- **Events**: Create, edit, delete events
- **Subscribers**: Manage newsletter subscriptions
- **Donations**: Track and manage donations
- **Real-time Updates**: Live dashboard statistics

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify token

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (admin)
- `PUT /api/events/:id` - Update event (admin)
- `DELETE /api/events/:id` - Delete event (admin)
- `POST /api/events/:id/register` - Register for event

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe
- `GET /api/newsletter/subscribers` - Get subscribers (admin)

### Donations
- `POST /api/donations` - Make donation
- `GET /api/donations` - Get all donations (admin)
- `GET /api/donations/stats` - Get donation statistics (admin)

### Admin
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/activities` - Recent activities

## 🌟 Key Features

### Exact UI Match
- Pixel-perfect recreation of Chimurenga Chronicle design
- Authentic typography and spacing
- Original navigation structure
- Responsive design for all devices

### Functional Components
- **Event Registration**: Full registration system with capacity tracking
- **Newsletter**: Subscription with interest preferences
- **Donations**: Complete donation system with impact tracking
- **Event Reminders**: Notification system for upcoming events
- **Admin Dashboard**: Comprehensive management interface

### Technical Excellence
- **React Router**: Client-side routing
- **State Management**: React hooks for state
- **API Integration**: Axios for HTTP requests
- **Form Handling**: Comprehensive form validation
- **Responsive Design**: Mobile-first approach
- **Security**: JWT authentication for admin

## 🔧 Development

### Available Scripts

#### Root Level
- `npm run dev` - Start both frontend and backend
- `npm run server` - Start backend only
- `npm run client` - Start frontend only
- `npm run install-all` - Install all dependencies

#### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

#### Backend (server/)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/chimurenga_clone
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 📱 Pages Overview

1. **Home** - Main landing page with events and content
2. **Exhibition** - Current and upcoming exhibitions
3. **Film Screening** - Movie screenings with registration
4. **Public Lecture** - Academic talks and speaker series
5. **Collaboration** - Partnership and collaboration opportunities
6. **Event Reminder** - Set up notifications for events
7. **Newsletter** - Subscribe to updates and news
8. **Event Registration** - Register for specific events
9. **Donation** - Support the organization financially
10. **About** - Organization history and mission
11. **Admin Dashboard** - Complete administrative control

## 🎯 Admin Dashboard Features

- **Real-time Statistics**: Live event, subscription, and donation counts
- **Event Management**: Full CRUD operations for events
- **Subscriber Management**: Newsletter subscription oversight
- **Donation Tracking**: Financial contribution monitoring
- **Activity Logs**: Recent system activities
- **Responsive Interface**: Works on all devices

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku/Railway)
```bash
cd server
# Deploy with your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created as a clone for educational purposes. All design rights belong to Chimurenga Chronicle.

## 🎉 Success!

Your QIBIBILOSH platform is now ready! The application features:

✅ **Modern UI Design** - Clean, professional cultural platform interface
✅ **Full Functionality** - All requested pages and features
✅ **Admin Dashboard** - Complete administrative interface
✅ **Backend Integration** - Full API with authentication
✅ **Social Media Integration** - Connected to all QIBIBILOSH social platforms
✅ **Responsive Design** - Works on all devices
✅ **Modern Tech Stack** - React + Node.js + Express

Visit http://localhost:5173 to see your QIBIBILOSH platform in action!
