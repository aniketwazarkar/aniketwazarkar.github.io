import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const cards = [
    {
      id: "intro",
      title: "01 // Introduction",
      heading: "Hi, I'm Aniket Wazarkar",
      description: "Over the last 3 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.",
      visual: (
        <img
          src="assets/coding-pov.png"
          className="w-full h-full object-cover sm:scale-125"
          alt="coding pov"
        />
      ),
      bgClass: "bg-card-bg",
    },
    {
      id: "philosophy",
      title: "02 // Philosophy",
      heading: "Engineering with Intent.",
      description: "I believe in building scalable, resilient systems that solve real-world problems. Great software isn't just about writing code; it's about making architectural decisions that stand the test of time.",
      visual: (
        <div className="flex items-center justify-center w-full h-full">
           <div className="text-[8rem] sm:text-[12rem] font-bold text-black/5 dark:text-white/5 select-none tracking-tighter">
             CRAFT
           </div>
        </div>
      ),
      bgClass: "bg-card-bg",
    },
    {
      id: "stack",
      title: "03 // Tech Stack",
      heading: "Languages & Frameworks",
      description: "I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.",
      visual: (
        <div className="scale-110 sm:scale-125 md:scale-150 transform-gpu w-full h-full flex items-center justify-center">
          <Frameworks />
        </div>
      ),
      bgClass: "bg-card-bg",
    },
    {
      id: "location",
      title: "04 // Location",
      heading: "Based in Earth",
      description: "I'm available and open to remote work worldwide across multiple time zones.",
      visual: (
        <div className="w-full h-[300px] md:h-[120%] relative overflow-visible flex items-center justify-center">
          <div className="absolute scale-[0.6] sm:scale-75 md:scale-100">
            <Globe />
          </div>
        </div>
      ),
      bgClass: "bg-card-bg",
    }
  ];

  return (
    <section id="about" className="c-space section-spacing relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-heading mb-16 sm:mb-24">Digital Arsenal</h2>
        
        <div className="relative flex flex-col gap-6 sm:gap-10 pb-[10vh]">
          {cards.map((card, index) => (
            <div 
              key={card.id}
              className={`sticky w-full min-h-[500px] sm:h-[600px] rounded-[40px] p-8 sm:p-14 overflow-hidden border border-card-border shadow-xl flex flex-col md:flex-row gap-10 items-center justify-between transition-all bg-card-bg`}
              style={{ 
                zIndex: index + 10,
                top: `calc(12vh + ${index * 30}px)`
              }}
            >
              {/* Text Side */}
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full z-10">
                <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-accent mb-6 sm:mb-10 uppercase">
                  {card.title}
                </p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-page-text mb-6 sm:mb-8 leading-none tracking-tight">
                  {card.heading}
                </h3>
                <p className="text-neutral text-base sm:text-lg leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
              
              {/* Visual Side */}
              <div className="relative w-full md:w-1/2 h-[300px] md:h-full rounded-[24px] overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center">
                {card.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
