import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview.jsx';
import Accommodation from './pages/Accommodation.jsx';
import Dining from './pages/Dining.jsx';
import ExploringMedina from './pages/ExploringMedina.jsx';
import MeetingsEvents from './pages/MeetingsEvents.jsx';
import Experiences from './pages/Experiences.jsx';
import Gallery from './pages/Gallery.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/exploring-medina" element={<ExploringMedina />} />
      <Route path="/meetings-events" element={<MeetingsEvents />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;

