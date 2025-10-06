import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  Cloud,
  Brain,
  Shield,
  Code,
  Settings,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [imageLoaded, setImageLoaded] = useState({});

  // Enhanced spring animation configs
  const springConfig = { type: "spring", stiffness: 120, damping: 18, mass: 0.75 };
  const bouncySpring = { type: "spring", stiffness: 200, damping: 15, mass: 0.8 };

  const services = [
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      subtitle: "& Consulting",
      description:
        "Business-aligned roadmaps, process automation, and compliance solutions that drive meaningful change.",
      image: "/Assets/services/DigitalTransformation.jpg",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      subtitle: "Solutions",
      description:
        "Multi-cloud management, DevOps excellence, and infrastructure automation for scalable operations.",
      image: "/Assets/services/Cloud-bg.jpg",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Brain,
      title: "Data Intelligence",
      subtitle: "& AI",
      description:
        "Predictive analytics, data governance, and AI-powered IT operations that unlock insights.",
      image: "/Assets/services/DataIntelligence.jpg",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      subtitle: "& Compliance",
      description:
        "Comprehensive threat monitoring, VAPT services, and regulatory automation for secure enterprises.",
      image: "/Assets/services/Cybersecurity.jpg",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: Code,
      title: "Application Modernization",
      subtitle: "& Integration",
      description:
        "Cloud-native migration, API-first integration, and real-time data pipelines for modern applications.",
      image: "/Assets/services/ApplicationModernization.jpg",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: Settings,
      title: "Managed Services",
      subtitle: "& Support",
      description:
        "Flexible delivery models (onshore, offshore, hybrid) with PMO-driven governance and 24/7 support.",
      image: "/Assets/services/ManagedServices.jpg",
      gradient: "from-teal-600 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      subtitle: "& Consulting",
      description:
        "Business-aligned roadmaps, process automation, and compliance solutions that drive meaningful change.",
      image: "/Assets/services/DigitalTransformation.jpg",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-gradient-to-b from-purple-50 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={springConfig}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold tracking-widest mb-4 font-orbitron">
            WHAT WE OFFER
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight font-orbitron">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins">
            Comprehensive solutions designed to transform your business through
            innovation, automation, and intelligence.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Card 1 - Large (spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ ...bouncySpring, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -12 }}
            whileTap={{ scale: 0.98 }}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-[400px]"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <img
              src={services[0].image}
              alt={services[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, 0: true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={bouncySpring}
                className="inline-block w-fit mb-4"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
              <span className="text-sm font-bold text-purple-300 mb-2 font-orbitron tracking-widest">
                01
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 font-orbitron leading-tight">
                {services[0].title}
                <br />
                <span className="text-2xl md:text-3xl text-purple-300">
                  {services[0].subtitle}
                </span>
              </h3>
              <p className="text-purple-100 text-sm md:text-base max-w-xl font-poppins mb-4">
                {services[0].description}
              </p>
              <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-bold font-orbitron">
                  LEARN MORE
                </span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Medium */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-[400px]"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <img
              src={services[1].image}
              alt={services[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, 1: true }))}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-${services[1].gradient
                .split(" ")[0]
                .replace("from-", "")}/95 via-${services[1].gradient
                .split(" ")[0]
                .replace("from-", "")}/70 to-transparent z-10`}
              style={{
                background:
                  "linear-gradient(to top, rgba(37, 99, 235, 0.95), rgba(37, 99, 235, 0.7), transparent)",
              }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block w-fit mb-3"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
              </motion.div>
              <span className="text-xs font-bold text-blue-200 mb-2 font-orbitron">
                02
              </span>
              <h3 className="text-2xl font-black text-white mb-2 font-orbitron">
                {services[1].title}
                <br />
                <span className="text-lg text-blue-200">
                  {services[1].subtitle}
                </span>
              </h3>
              <p className="text-blue-100 text-sm font-poppins mb-3">
                {services[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Medium */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-[350px]"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <img
              src={services[2].image}
              alt={services[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, 2: true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-indigo-900/70 to-transparent z-10" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
              <motion.div
                whileHover={{ scale: 1.15, rotate: -10 }}
                transition={{ duration: 0.4 }}
                className="inline-block w-fit mb-3"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-indigo-600" />
                </div>
              </motion.div>
              <span className="text-xs font-bold text-indigo-300 mb-2 font-orbitron">
                03
              </span>
              <h3 className="text-xl font-black text-white mb-2 font-orbitron">
                {services[2].title}
                <br />
                <span className="text-base text-indigo-200">
                  {services[2].subtitle}
                </span>
              </h3>
              <p className="text-indigo-100 text-xs font-poppins">
                {services[2].description}
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Medium */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-[350px]"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <img
              src={services[3].image}
              alt={services[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, 4: true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/60 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="inline-block w-fit mb-4"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl">
                  <Code className="w-7 h-7 text-orange-600" />
                </div>
              </motion.div>
              <span className="text-sm font-bold text-orange-300 mb-2 font-orbitron">
                05
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-orbitron">
                {services[3].title}
                <br />
                <span className="text-xl md:text-2xl text-orange-200">
                  {services[4].subtitle}
                </span>
              </h3>
              <p className="text-orange-100 text-sm md:text-base max-w-2xl font-poppins">
                {services[3].description}
              </p>
            </div>
          </motion.div>

          {/* Card 5 - Large (spans 2 columns) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-[350px]"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <img
              src={services[4].image}
              alt={services[4].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, 4: true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-900/60 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="inline-block w-fit mb-4"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl">
                  <Code className="w-7 h-7 text-orange-600" />
                </div>
              </motion.div>
              <span className="text-sm font-bold text-orange-300 mb-2 font-orbitron">
                05
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-orbitron">
                {services[4].title}
                <br />
                <span className="text-xl md:text-2xl text-orange-200">
                  {services[4].subtitle}
                </span>
              </h3>
              <p className="text-orange-100 text-sm md:text-base max-w-2xl font-poppins">
                {services[4].description}
              </p>
            </div>
          </motion.div>

          {/* Card 6 - Medium (last one) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            className="lg:col-span-1 relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-[350px]"
          >
            <div className="absolute inset-0 ring-4 ring-primary/20 rounded-3xl group-hover:ring-primary/40 transition-all duration-500 z-10" />
            <img
              src={services[5].image}
              alt={services[5].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, 5: true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-teal-900/70 to-transparent z-10" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block w-fit mb-3"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Settings className="w-6 h-6 text-teal-600" />
                </div>
              </motion.div>
              <span className="text-xs font-bold text-teal-300 mb-2 font-orbitron">
                06
              </span>
              <h3 className="text-xl font-black text-white mb-2 font-orbitron">
                {services[5].title}
                <br />
                <span className="text-base text-teal-200">
                  {services[5].subtitle}
                </span>
              </h3>
              <p className="text-teal-100 text-xs font-poppins">
                {services[5].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
