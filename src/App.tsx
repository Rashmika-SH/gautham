import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingCallButton from './components/FloatingCallButton/FloatingCallButton';
import SolarSystem from './components/SolarSystem/SolarSystem';
import CursorTrail from './components/CursorTrail/CursorTrail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import LocationPage from './pages/LocationPage/LocationPage';
import Contact from './pages/Contact/Contact';
import Locations from './pages/Locations/Locations';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorTrail />
      <SolarSystem />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:locationId" element={<LocationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCallButton />
      </div>
    </Router>
  );
}

export default App;
