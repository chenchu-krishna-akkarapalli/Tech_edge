import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Enhanced spring animation configs
  const springConfig = { type: "spring", stiffness: 120, damping: 18, mass: 0.75 };
  const bouncySpring = { type: "spring", stiffness: 200, damping: 15, mass: 0.8 };

  const missionPoints = [
    'Modernize operations with cloud, AI, and automation.',
    'Enable smarter decisions with data-driven intelligence and predictive insights.',
    'Enhance experiences for customers, employees, and stakeholders alike.',
    'Strengthen resilience through robust cybersecurity and compliance frameworks.',
  ];

  return (
    <section id="mission" ref={ref} className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={springConfig}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 glass rounded-full text-white text-sm font-bold tracking-widest mb-6 border border-white/30 font-orbitron">
            OUR MISSION
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight font-orbitron">
            EMPOWERING GROWTH
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-poppins">
            To empower enterprises with innovative, secure, and scalable technology solutions 
            that bridge business strategy and IT excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ ...bouncySpring, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.06, y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
              whileTap={{ scale: 0.98 }}
              className="glass p-8 rounded-3xl border border-white/30 hover:bg-white/20 transition-all shadow-2xl group"
            >
              {/* Number Badge */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-purple-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-black text-secondary font-orbitron">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="h-1 flex-grow bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 + index * 0.1 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </div>
              
              <p className="text-lg text-white font-medium leading-relaxed font-poppins">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
