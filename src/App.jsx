import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Enhanced smooth scroll with spring physics
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"], button[data-scroll]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1) || target.dataset.scroll;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Mission />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;
