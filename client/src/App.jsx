import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import ExhibitionDetail from './pages/ExhibitionDetail';
import Archives from './pages/Archives';
import ArchiveDetail from './pages/ArchiveDetail';
import EventDetail from './pages/EventDetail';
import LearnMore from './pages/LearnMore';
import FilmScreening from './pages/FilmScreening';
import PublicLecture from './pages/PublicLecture';
import Collaboration from './pages/Collaboration';
import EventReminder from './pages/EventReminder';
import Newsletter from './pages/Newsletter';
import EventRegistration from './pages/EventRegistration';
import Donation from './pages/Donation';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/exhibition/:id" element={<ExhibitionDetail />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/archives/:id" element={<ArchiveDetail />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/film-screening" element={<FilmScreening />} />
            <Route path="/public-lecture" element={<PublicLecture />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/event-reminder" element={<EventReminder />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/event-registration" element={<EventRegistration />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
