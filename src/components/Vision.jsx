import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Lock, TrendingUp } from 'lucide-react';
import { company } from "../content/companyProfile";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Enhanced spring animation configs
  const springConfig = { type: "spring", stiffness: 120, damping: 18, mass: 0.75 };
  const bouncySpring = { type: "spring", stiffness: 200, damping: 15, mass: 0.8 };

  const visionPoints = company.vision.points.map((p) => ({
    ...p,
    icon: p.icon === 'Sparkles' ? Sparkles : p.icon === 'Lock' ? Lock : TrendingUp,
  }));

  return (
    <section id="vision" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={springConfig}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold tracking-widest mb-4 font-orbitron">
            {company.vision.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight font-orbitron">
            {company.vision.heading}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-poppins">
            {company.vision.body}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ ...bouncySpring, delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.06, y: -15, rotate: index % 2 === 0 ? 1 : -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm font-orbitron">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-secondary transition-colors font-orbitron">
                  {point.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed font-poppins">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ ...springConfig, delay: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-10 rounded-2xl shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed font-poppins">
              "{company.vision.quote}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
