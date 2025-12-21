import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Overview from './pages/Overview.jsx';
import Accommodation from './pages/Accommodation.jsx';
import Dining from './pages/Dining.jsx';
import ExploringMedina from './pages/ExploringMedina.jsx';
import MeetingsEvents from './pages/MeetingsEvents.jsx';
import Experiences from './pages/Experiences.jsx';
import Gallery from './pages/Gallery.jsx';
import Offers from './pages/Offers.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/exploring-medina" element={<ExploringMedina />} />
      <Route path="/meetings-events" element={<MeetingsEvents />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

