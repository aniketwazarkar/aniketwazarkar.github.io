import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="flex items-center gap-0.5 sm:gap-4 px-1 sm:px-2">
      {[
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
      ].map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="px-1.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-medium transition-colors rounded-full text-page-text hover:bg-black/5 dark:hover:bg-white/10 uppercase tracking-widest whitespace-nowrap"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or class presence or localStorage
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      document.documentElement.classList.contains("dark")
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-[52px] h-[26px] sm:w-[72px] sm:h-[34px] ml-0.5 sm:ml-2 rounded-full overflow-hidden transition-all duration-500 shadow-inner shrink-0 group`}
      style={{
        background: isDark 
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" 
          : "linear-gradient(135deg, #93c5fd 0%, #e0f2fe 100%)",
        boxShadow: "inset 0 2px 6px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(255,255,255,0.1)",
        WebkitTapHighlightColor: "transparent"
      }}
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-hidden">
        {/* Stars */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-[6px] left-[14px] w-[1.5px] h-[1.5px] bg-white rounded-full shadow-[0_0_3px_1px_rgba(255,255,255,0.9)]"></div>
          <div className="absolute top-[14px] left-[26px] w-[1px] h-[1px] bg-[rgba(255,255,255,0.9)] rounded-full"></div>
          <div className="absolute top-[10px] left-[36px] w-[1.5px] h-[1.5px] bg-white rounded-full shadow-[0_0_3px_1px_rgba(255,255,255,0.9)]"></div>
          <div className="absolute top-[6px] left-[8px] w-[1px] h-[1px] bg-[rgba(255,255,255,0.9)] rounded-full"></div>
        </div>

        {/* Sun/Moon */}
        <div
          className={`absolute rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0`}
          style={{
            width: "14px",
            height: "14px",
            top: "50%",
            transform: isDark
              ? "translate(16px, -50%) rotate(-10deg)"
              : "translate(28px, -20%) rotate(0)",
            backgroundColor: isDark ? "transparent" : "#FFD260",
            boxShadow: isDark ? "inset -4px -1.5px 0 1px #fff" : "0 0 12px 3px rgba(255, 210, 96, 0.5)",
          }}
        ></div>

        {/* Hills SVG */}
        <svg
          viewBox="0 0 72 34"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none transition-all duration-500 z-10"
        >
          {/* Back Right Hill */}
          <path
            d="M 30 34 C 40 16, 60 18, 72 34 Z"
            fill={isDark ? "#1e293b" : "#86efac"}
            className="transition-colors duration-500"
          />
          {/* Middle Hill */}
          <path
            d="M 10 34 C 25 18, 45 22, 55 34 Z"
            fill={isDark ? "#0f172a" : "#4ade80"}
            className="transition-colors duration-500"
          />
          {/* Front Left Hill */}
          <path
            d="M -5 34 C 10 20, 25 24, 35 34 Z"
            fill={isDark ? "#020617" : "#22c55e"}
            className="transition-colors duration-500"
          />
        </svg>

        {/* Tree */}
        <div className="absolute right-[8px] sm:right-[10px] bottom-0 w-[14px] h-[20px] transition-transform duration-500 z-10">
          {/* Trunk */}
          <div
            className={`absolute bottom-0 right-[4px] w-[5px] h-[10px] transition-colors duration-500 ${
              isDark ? "bg-[#3f2a1d]" : "bg-[#A37B5B]"
            }`}
          ></div>
          {/* Leaves */}
          <div
            className={`absolute bottom-[6px] right-[-2px] w-[12px] h-[12px] rounded-full transition-colors duration-500 ${
              isDark ? "bg-[#0f172a]" : "bg-[#22c55e]"
            }`}
          ></div>
          <div
            className={`absolute bottom-[10px] right-[2px] w-[10px] h-[10px] rounded-full transition-colors duration-500 ${
              isDark ? "bg-[#020617]" : "bg-[#4ade80]"
            }`}
          ></div>
        </div>
      </div>

      {/* The White Knob */}
      <div
        className={`bg-white rounded-full z-20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_2px_6px_rgba(0,0,0,0.3)] w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] ${
          isDark
            ? "translate-x-[29px] sm:translate-x-[40px]"
            : "translate-x-[3px] sm:translate-x-[3px]"
        }`}
      ></div>
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="fixed z-50 bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between p-1.5 sm:p-2 shadow-2xl bg-white/60 dark:bg-[#111111]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full">
        {/* Mobile-friendly inner wrapping */}
        <div className="flex items-center w-full justify-between sm:justify-center">
          <nav className="flex">
            <Navigation />
          </nav>
          
          <div className="hidden sm:block w-[1px] h-6 bg-black/10 dark:bg-white/20 mx-2"></div>
          
          <div className="flex items-center">
            <ThemeToggle />
            
            <a
              href="#contact"
              className="ml-1 sm:ml-4 px-3 sm:px-7 py-1.5 sm:py-3 text-[10px] sm:text-sm font-bold text-white uppercase tracking-widest bg-accent rounded-full hover:bg-[#d97300] transition-colors shadow-lg shadow-accent/30 whitespace-nowrap"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
