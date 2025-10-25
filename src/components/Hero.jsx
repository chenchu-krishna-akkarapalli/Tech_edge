import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { company } from "../content/companyProfile";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const springConfig = { type: "spring", stiffness: 120, damping: 18, mass: 0.75 };
  const bouncySpring = { type: "spring", stiffness: 260, damping: 20, mass: 1 };

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/Assets/office-bg-1.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Background Image with Overlay */}
      <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: imageLoaded ? "url(/Assets/office-bg-1.jpg)" : "none" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-primary/70" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex items-center justify-start lg:justify-start">
          <motion.div initial={{ opacity: 0, y: 80, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...springConfig, delay: 0.3 }} className="text-left space-y-8 max-w-3xl">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: -30, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...bouncySpring, delay: 0.5 }} className="inline-block">
              <motion.span whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }} transition={bouncySpring} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-white/20 text-sm font-bold tracking-widest font-orbitron shadow-lg">
                <Sparkles className="w-4 h-4" />
                {company.brand.tagline}
              </motion.span>
            </motion.div>

            {/* Main Heading */}
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...springConfig, delay: 0.6 }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight font-orbitron">
                {company.brand.name.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">{company.hero.highlight}</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.8 }} className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-2xl font-poppins">
              {company.hero.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 1 }} className="flex flex-col sm:flex-row gap-4 items-start">
              <motion.button onClick={() => scrollToSection(company.hero.ctas[0].to)} whileHover={{ scale: 1.08, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} whileTap={{ scale: 0.95 }} transition={bouncySpring} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 text-base font-bold shadow-2xl hover:shadow-white/20 transition-all font-orbitron">
                {company.hero.ctas[0].label}
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <motion.button onClick={() => scrollToSection(company.hero.ctas[1].to)} whileHover={{ scale: 1.08, y: -4, backgroundColor: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.95 }} transition={bouncySpring} className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold ring-2 ring-white/40 text-white hover:ring-white/60 transition-all backdrop-blur-sm font-orbitron">
                <Play className="h-5 w-5" />
                {company.hero.ctas[1].label}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 1.2 }} className="flex gap-8 flex-wrap pt-8">
              {company.hero.stats.map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ ...bouncySpring, delay: 1.3 + idx * 0.1 }} whileHover={{ scale: 1.15, y: -8 }} className="text-left">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-orbitron">{stat.value}</div>
                  <div className="text-sm text-purple-200 tracking-wider font-poppins">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div whileHover={{ scale: 1.2 }} className="w-6 h-10 ring-2 ring-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5 cursor-pointer">
          <motion.div animate={{ y: [0, 14, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="w-1.5 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
