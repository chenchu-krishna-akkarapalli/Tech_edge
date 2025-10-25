import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import WhatsAppFloating from './components/WhatsAppFloating';

// Code-split sections for smoother on-scroll loading
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Values = lazy(() => import('./components/Values'));
const Mission = lazy(() => import('./components/Mission'));
const Vision = lazy(() => import('./components/Vision'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Smooth scroll with prefetch & retry if section is still loading
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"], button[data-scroll]');
      if (!target) return;
      e.preventDefault();

      const id = target.getAttribute('href')?.slice(1) || target.dataset.scroll;

      // Prefetch chunk for the target section to minimize fallback time
      const prefetchMap = {
        hero: () => import('./components/Hero'),
        about: () => import('./components/About'),
        services: () => import('./components/Services'),
        values: () => import('./components/Values'),
        mission: () => import('./components/Mission'),
        vision: () => import('./components/Vision'),
        contact: () => import('./components/Footer'),
      };
      if (id && prefetchMap[id]) prefetchMap[id]();

      const scrollToEl = () => {
        const element = id ? document.getElementById(id) : null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // Try immediately; if not found, retry a few times while chunk loads
      if (!scrollToEl()) {
        let attempts = 0;
        const timer = setInterval(() => {
          attempts += 1;
          if (scrollToEl() || attempts >= 12) clearInterval(timer);
        }, 80);
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const SectionFallback = ({ height = '60vh' }) => (
    <div
      className="w-full animate-pulse bg-gradient-to-br from-gray-100 via-gray-50 to-white"
      style={{ minHeight: height }}
      aria-busy="true"
      aria-live="polite"
    />
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Suspense fallback={<SectionFallback height="90vh" />}> 
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionFallback />}> 
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback />}> 
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback />}> 
        <Values />
      </Suspense>

      <Suspense fallback={<SectionFallback />}> 
        <Mission />
      </Suspense>

      <Suspense fallback={<SectionFallback />}> 
        <Vision />
      </Suspense>

      <Suspense fallback={<SectionFallback height="40vh" />}> 
        <Footer />
      </Suspense>

      <WhatsAppFloating />
    </div>
  );
}

export default App;
