import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import { company } from "../content/companyProfile";

const Footer = () => {
  // Enhanced spring animation config
  const bouncySpring = { type: "spring", stiffness: 200, damping: 15, mass: 0.8 };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'values', label: 'Values' },
    { id: 'mission', label: 'Mission' },
    { id: 'vision', label: 'Vision' },
  ];

  const socialLinks = company.socials.map((s) => ({
    icon: s.key === 'LinkedIn' ? Linkedin : s.key === 'Twitter' ? Twitter : s.key === 'GitHub' ? Github : Facebook,
    url: s.url,
    label: s.key,
  }));

  return (
    <footer id="contact" className="bg-gradient-to-br from-primary via-secondary to-primary py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h3
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={bouncySpring}
              className="text-4xl font-black text-white mb-4 tracking-wider font-orbitron cursor-pointer"
            >
              TECH EDGE
            </motion.h3>
            <p className="text-purple-200 mb-8 leading-relaxed text-lg font-poppins">
              Empowering enterprises through innovative, secure, and scalable technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href={`mailto:${company.contact.email}`} 
                className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">{company.contact.email}</span>
              </a>
              <a 
                href={`tel:${company.contact.phone}`} 
                className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">{company.contact.phone}</span>
              </a>
              <a 
                href={company.contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-medium">{company.contact.website.replace('https://','')}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 tracking-wide font-orbitron">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-2 inline-block transform font-medium font-poppins"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 tracking-wide font-orbitron">CONNECT</h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...bouncySpring, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-400 hover:to-pink-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter */}
            <div>
              <h5 className="text-white font-bold mb-4 tracking-wide font-orbitron">STAY UPDATED</h5>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={bouncySpring}
                  className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all tracking-wide font-orbitron"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-200 font-medium font-poppins">
              © {new Date().getFullYear()} Tech Edge. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium font-poppins">
                Privacy Policy
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium font-poppins">
                Terms of Service
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium font-poppins">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
