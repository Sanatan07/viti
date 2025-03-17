import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import Gallery from './components/Gallery';
import MasterPlan from './components/MasterPlan';
import FloorPlan from './components/FloorPlan';
import Specifications from './components/Specifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Location />
      <Gallery />
      <MasterPlan />
      <FloorPlan />
      <Specifications />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;