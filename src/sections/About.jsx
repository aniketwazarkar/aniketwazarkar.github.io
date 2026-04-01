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
        <div className="flex items-center justify-center w-full h-full p-4 sm:p-8">
          <div className="bg-card-bg/40 backdrop-blur-xl border border-card-border rounded-xl overflow-hidden shadow-2xl relative w-full max-w-sm sm:max-w-md mx-auto">
            {/* Optional light glare effect for glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-50 dark:opacity-5" />

            {/* Editor Header */}
            <div className="flex items-center px-4 py-3 border-b border-card-border bg-card-bg/60">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-[10px] sm:text-xs text-neutral font-mono pr-6">
                 <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                 system_intent.jsx
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-left overflow-x-auto bg-[#fafafa]/50 dark:bg-[#0a0a0a]/50">
              <div className="flex flex-col gap-1.5 leading-relaxed">
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">1</span>
                   <span className="text-page-text"><span className="text-purple-600 dark:text-purple-400">import</span> {'{'} Engineer {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@aniket/core'</span>;</span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">2</span>
                   <span></span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">3</span>
                   <span className="text-page-text"><span className="text-accent">const</span> <span className="text-blue-600 dark:text-blue-400">deploySystem</span> = <span className="text-accent">() =&gt;</span> {'{'}</span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">4</span>
                   <span className="text-page-text pl-4"><span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-purple-600 dark:text-purple-400">new</span> Engineer({'{'}</span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">5</span>
                   <span className="text-page-text pl-8">focus: <span className="text-green-600 dark:text-green-400">'High Performance'</span>,</span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">6</span>
                   <span className="text-page-text pl-8">intent: <span className="text-[#f28200]">true</span>,</span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">7</span>
                   <span className="text-page-text pl-8">design: <span className="text-green-600 dark:text-green-400">'Pixel Perfect'</span></span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">8</span>
                   <span className="text-page-text pl-4">{'}'});</span>
                </div>
                <div className="flex group">
                   <span className="w-6 shrink-0 text-neutral/40 select-none">9</span>
                   <span className="text-page-text">{'}'};</span>
                </div>
              </div>
            </div>
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
