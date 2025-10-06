import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Auth from './Auth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Enhanced spring animation config
  const bouncySpring = { type: "spring", stiffness: 200, damping: 15, mass: 0.8 };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'values', label: 'Values' },
    { id: 'mission', label: 'Mission' },
    { id: 'vision', label: 'Vision' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = menuItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    setIsAuthOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Auth isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={bouncySpring}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={bouncySpring}
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className={`text-2xl font-bold tracking-wider font-orbitron ${isScrolled ? 'text-primary' : 'text-white'}`}>
              TECH EDGE
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 tracking-wide font-orbitron ${
                  isScrolled ? 'text-gray-700 hover:text-secondary' : 'text-white hover:text-purple-200'
                } ${activeSection === item.id ? (isScrolled ? 'text-secondary' : 'text-purple-200') : ''}`}
              >
                {item.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={bouncySpring}
              onClick={handleLoginClick}
              className={`px-6 py-2.5 rounded-full font-bold transition-all font-orbitron ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl'
                  : 'bg-white text-primary hover:bg-white/90 shadow-lg'
              }`}
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={bouncySpring}
            className="md:hidden glass-dark shadow-lg rounded-lg mt-2 py-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 text-white hover:bg-secondary/30 hover:text-purple-200 transition-colors tracking-wide font-orbitron ${
                  activeSection === item.id ? 'bg-secondary/30 text-purple-200' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLoginClick}
              className="block w-full text-left px-6 py-3 mt-2 bg-white text-primary hover:bg-white/90 transition-colors font-bold tracking-wide font-orbitron rounded-lg mx-2"
            >
              Login
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
