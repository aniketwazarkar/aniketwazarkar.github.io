import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text c-space">
      <div className="flex flex-col md:flex-col space-y-6 md:space-y-0">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <span className="hidden md:inline">Hi I'm Aniket</span>
          <span className="inline md:hidden">Hi, I'm Aniket</span>
        </motion.p>
        <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-0 md:pt-0">
          <motion.p
            className="text-5xl text-neutral-300 font-black md:font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <span className="hidden md:inline">A Developer <br /> Dedicated to Crafting</span>
            <span className="inline md:hidden">Building</span>
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-white font-bold md:font-black text-7xl md:text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl text-neutral-300 font-black md:font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <span className="hidden md:inline">Web Solutions</span>
            <span className="inline md:hidden">Web Applications</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
