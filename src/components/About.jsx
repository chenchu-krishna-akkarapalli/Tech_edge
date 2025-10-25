import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Brain,
  Shield,
  Zap,
  Users,
  Rocket,
  TrendingUp,
  Award,
  Target,
  Globe,
} from "lucide-react";
import { company } from "../content/companyProfile";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Enhanced spring animation configs
  const springConfig = { type: "spring", stiffness: 100, damping: 15, mass: 0.5 };
  const bouncySpring = { type: "spring", stiffness: 200, damping: 12, mass: 0.8 };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={springConfig}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold tracking-widest mb-4 font-orbitron">
            {company.about.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight font-orbitron">
            {company.about.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins">
            {company.about.body}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {/* Large Card - Multi-Cloud Excellence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, rotateZ: 0.5 }}
            className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Cloud className="w-16 h-16 text-white mb-6" />
            </motion.div>
            <h3 className="text-3xl font-black text-white mb-4 font-orbitron relative z-10">
              Multi-Cloud Excellence
            </h3>
            <p className="text-purple-100 leading-relaxed text-lg font-poppins relative z-10">
              Expert management across AWS, Azure, and GCP platforms with
              seamless DevOps integration. We architect, deploy, and optimize
              cloud infrastructure at scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-orbitron">
                AWS
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-orbitron">
                AZURE
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-orbitron">
                GCP
              </span>
            </div>
          </motion.div>

          {/* Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bouncySpring, delay: 0.2 }}
            whileHover={{ y: -12, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Users className="w-10 h-10 text-secondary mb-4" />
            </motion.div>
            <h4 className="text-4xl font-black text-gray-900 mb-2 font-orbitron relative z-10">
              2M+
            </h4>
            <p className="text-gray-600 text-sm font-poppins relative z-10">
              Users & Projects
            </p>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bouncySpring, delay: 0.25 }}
            whileHover={{ y: -12, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Rocket className="w-10 h-10 text-secondary mb-4" />
            </motion.div>
            <h4 className="text-4xl font-black text-gray-900 mb-2 font-orbitron relative z-10">
              100K+
            </h4>
            <p className="text-gray-600 text-sm font-poppins relative z-10">
              Deployments
            </p>
          </motion.div>

          {/* AI & Automation Card */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ ...bouncySpring, delay: 0.3 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-1 bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15, rotate: -10 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <Brain className="w-12 h-12 text-white mb-4" />
            </motion.div>
            <h3 className="text-xl font-black text-white mb-2 font-orbitron relative z-10">
              AI & Automation
            </h3>
            <p className="text-purple-100 text-sm font-poppins relative z-10">
              Intelligent solutions powered by machine learning
            </p>
          </motion.div>

          {/* Security Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ ...bouncySpring, delay: 0.35 }}
            whileHover={{ scale: 1.08, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-1 bg-gradient-to-br from-primary to-purple-900 p-6 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <Shield className="w-12 h-12 text-white mb-4" />
            </motion.div>
            <h3 className="text-xl font-black text-white mb-2 font-orbitron relative z-10">
              Enterprise Security
            </h3>
            <p className="text-purple-100 text-sm font-poppins relative z-10">
              Comprehensive cybersecurity frameworks
            </p>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...bouncySpring, delay: 0.4 }}
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-2 lg:col-span-1 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Zap className="w-12 h-12 text-secondary mb-4" />
            </motion.div>
            <h3 className="text-xl font-black text-gray-900 mb-2 font-orbitron relative z-10">
              Innovation Focus
            </h3>
            <p className="text-gray-600 text-sm font-poppins relative z-10">
              Modernizing legacy systems into cloud-native architectures
            </p>
          </motion.div>

          {/* Success Rate Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ ...bouncySpring, delay: 0.45 }}
            whileHover={{ scale: 1.1, rotate: -2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <TrendingUp className="w-10 h-10 text-white mb-4" />
            </motion.div>
            <h4 className="text-5xl font-black text-white mb-2 font-orbitron relative z-10">
              82%
            </h4>
            <p className="text-green-50 text-sm font-poppins relative z-10">
              Success Rate
            </p>
          </motion.div>

          {/* Data Science Excellence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, rotateZ: 0.5 }}
            className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Cloud className="w-16 h-16 text-white mb-6" />
            </motion.div>
            <h3 className="text-3xl font-black text-white mb-4 font-orbitron relative z-10">
              Data Science Excellence
            </h3>
            <p className="text-purple-100 leading-relaxed text-lg font-poppins relative z-10">
              Leveraging advanced analytics, machine learning, and big data technologies to extract actionable insights and drive informed decision-making. Our expertise spans predictive modeling, data governance, and AI-powered IT operations.

            </p>
            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-orbitron">
                AWS
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-orbitron">
                AZURE
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-orbitron">
                GCP
              </span>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ ...bouncySpring, delay: 0.55 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-secondary via-primary to-secondary bg-size-200 bg-pos-0 hover:bg-pos-100 p-8 rounded-3xl shadow-xl group cursor-pointer relative overflow-hidden transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Target className="w-12 h-12 text-white mb-4" />
            </motion.div>
            <h3 className="text-3xl font-black text-white mb-3 font-orbitron relative z-10">
              Ready to Transform?
            </h3>
            <p className="text-purple-100 mb-6 font-poppins relative z-10">
              Partner with us to turn technology into your competitive edge.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold tracking-wide hover:shadow-2xl transition-all font-orbitron relative z-10"
            >
              START YOUR JOURNEY
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
