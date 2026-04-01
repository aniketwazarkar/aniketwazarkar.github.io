import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden c-space pt-10">

      {/* Top Left Coding Symbol */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-8 sm:top-12 left-6 sm:left-12 font-mono text-4xl sm:text-5xl font-black text-neutral/30 dark:text-neutral/50 tracking-tighter hover:text-accent transition-colors duration-500 select-none z-10"
      >
        {'</>'}
      </motion.div>

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

          {/* Engineering Node / Intent Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="mx-2 sm:mx-6 flex items-center justify-center relative w-[12vw] h-[12vw] max-w-[120px] max-h-[120px] min-w-[70px] min-h-[70px]"
          >
            {/* Outer precision ring */}
            <svg className="absolute inset-0 w-full h-full text-page-text opacity-30 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
              {/* Crosshair markers */}
              <line x1="50" y1="0" x2="50" y2="8" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="92" x2="50" y2="100" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="50" x2="8" y2="50" stroke="currentColor" strokeWidth="1.5" />
              <line x1="92" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {/* Inner pulsing logic core */}
            <div className="absolute w-[20%] h-[20%] bg-accent rounded-sm rotate-45 shadow-[0_0_25px_rgba(242,130,0,0.8)] animate-pulse" style={{ animationDuration: '3s' }} />

            {/* Secondary Orbital Ring */}
            <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-accent opacity-60 animate-[spin_12s_linear_infinite_reverse]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="30 20 5 20" />
            </svg>
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
