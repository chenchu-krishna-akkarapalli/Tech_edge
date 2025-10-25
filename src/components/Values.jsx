import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Heart, Award, Users, Gauge } from 'lucide-react';
import { company } from "../content/companyProfile";

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [imageLoaded, setImageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  // Enhanced spring animation configs
  const springConfig = { type: "spring", stiffness: 120, damping: 18, mass: 0.75 };
  const bouncySpring = { type: "spring", stiffness: 200, damping: 15, mass: 0.8 };

  const values = company.values;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="values" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={springConfig}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold tracking-widest mb-4 font-orbitron">
            OUR VALUES
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight font-orbitron">
            WHAT DRIVES US
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins">
            Core principles that shape every decision and solution we deliver.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {/* Left Side - Image Card 1 (Tall) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ ...bouncySpring, delay: 0.1 }}
            whileHover={{ scale: 1.04, y: -8, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="md:row-span-2 relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent z-10" />
            <img
              src="/Assets/values-grid-1.jpg"
              alt="Innovation"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(prev => ({ ...prev, img1: true }))}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="inline-block mb-4"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white mb-2 font-orbitron">Innovation</h3>
              <p className="text-white/90 text-sm font-poppins">
                Driving change through smart, future-ready solutions that push boundaries.
              </p>
            </div>
          </motion.div>

          {/* Right Side Top - Value Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            className="md:col-span-2 lg:col-span-1 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Heart className="w-12 h-12 text-secondary mb-4" />
            </motion.div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 font-orbitron relative z-10">Integrity</h4>
            <p className="text-gray-600 text-sm font-poppins relative z-10">
              Building trust with transparent, secure, and reliable services.
            </p>
          </motion.div>

          {/* Right Side Top - Image Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="md:col-span-1 lg:col-span-2 relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer h-64"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
            <img
              src="/Assets/values-grid-2.jpg"
              alt="Excellence"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(prev => ({ ...prev, img2: true }))}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-block mb-3"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white mb-2 font-orbitron">Excellence</h3>
              <p className="text-white/90 text-sm font-poppins">
                Delivering measurable outcomes with certified expertise and proven methods.
              </p>
            </div>
          </motion.div>

          {/* Right Side Middle - Value Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-gradient-to-br from-secondary to-primary p-6 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Users className="w-12 h-12 text-white mb-4" />
            </motion.div>
            <h4 className="text-xl font-bold text-white mb-2 font-orbitron relative z-10">Collaboration</h4>
            <p className="text-purple-100 text-sm font-poppins relative z-10">
              Partnering with clients for shared success and long-term growth.
            </p>
          </motion.div>

          {/* Right Side Middle - Image Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer h-64"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/40 to-transparent z-10" />
            <img
              src="/Assets/values-grid-3.jpg"
              alt="Agility"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(prev => ({ ...prev, img3: true }))}
            />
            <div className="absolute bottom-0 right-0 left-0 p-6 z-20 text-right">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.4 }}
                className="inline-block mb-3"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white mb-2 font-orbitron">Agility</h3>
              <p className="text-white/90 text-sm font-poppins">
                Adapting quickly to evolving business needs and market dynamics.
              </p>
            </div>
          </motion.div>

          {/* Bottom Large Card - Summary */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 lg:col-span-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 font-orbitron">
                Values That Define Excellence
              </h3>
              <p className="text-purple-100 text-lg max-w-4xl mx-auto font-poppins">
                Our commitment to innovation, integrity, excellence, collaboration, and agility drives everything we do. 
                These aren't just words—they're the foundation of every solution we deliver and every partnership we build.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['Innovation', 'Integrity', 'Excellence', 'Collaboration', 'Agility'].map((val, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-orbitron backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
