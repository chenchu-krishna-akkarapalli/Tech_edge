import React from 'react';
import { motion } from 'framer-motion';


// Floating WhatsApp chat launcher - follows current UI (primary/secondary) with subtle pulse
const WhatsAppFloating = () => {
  const phone = '917397482029'; // E.164 digits only for wa.me (no +)
  const url = `https://wa.me/${phone}`;

  const spring = { type: 'spring', stiffness: 220, damping: 18, mass: 0.9 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={spring}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Glow ring */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-xl opacity-40"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.07, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={spring}
        className="relative inline-flex items-center justify-center w-16 h-16 rounded-full shadow-xl ring-2 ring-white/30 bg-gradient-to-br from-primary to-secondary text-white"
        title="Chat on WhatsApp"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-send"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>

        {/* Subtle pulse badge */}
        <motion.span
          aria-hidden
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppFloating;
