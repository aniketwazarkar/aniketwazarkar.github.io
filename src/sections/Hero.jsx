import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden c-space pt-10">
      
      {/* Decorative metadata */}
      <div className="absolute top-10 sm:top-20 w-full flex justify-between px-6 sm:px-12 text-neutral text-xs sm:text-sm font-semibold uppercase tracking-widest z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          Based in<br/>Earth
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-right">
          Software<br/>Engineer
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-[1400px] mt-20 sm:mt-10 z-10">
        {/* Massive Text Split */}
        <h1 className="text-[15vw] sm:text-[12vw] md:text-[8rem] lg:text-[10rem] leading-none font-bold tracking-tighter text-page-text uppercase flex items-center justify-center gap-2 sm:gap-6 flex-wrap whitespace-nowrap">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ANIKET
          </motion.span>
          
          {/* Central Portrait/Visual Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-[25vw] h-[15vw] sm:w-[15vw] sm:h-[8vw] min-w-[80px] min-h-[48px] max-w-[240px] max-h-[140px] rounded-[100px] overflow-hidden relative mx-1 sm:mx-2 shadow-2xl border border-card-border bg-card-bg"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-accent to-[#ffb347] opacity-80 mix-blend-multiply dark:mix-blend-screen" />
             <img 
              src="assets/coding-pov.png" 
              alt="Visual"
              className="w-full h-full object-cover mix-blend-luminosity"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            WAZARKAR
          </motion.span>
        </h1>
      </div>

      {/* Hero Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 sm:mt-24 text-center max-w-2xl px-4 z-10"
      >
        <p className="text-xl sm:text-2xl font-medium text-neutral leading-relaxed max-w-lg mx-auto">
          Crafting high-performance systems and elegant digital experiences with architectural precision.
        </p>
      </motion.div>

    </section>
  );
};

export default Hero;
