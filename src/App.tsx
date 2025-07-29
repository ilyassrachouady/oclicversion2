import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatWeDo />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;