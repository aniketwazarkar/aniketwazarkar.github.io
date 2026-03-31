import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="flex items-center gap-1 sm:gap-4 px-2">
      {[
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
      ].map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors rounded-full text-page-text hover:bg-black/5 dark:hover:bg-white/10 uppercase tracking-widest"
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
    // Check system preference or class presence
    if (document.documentElement.classList.contains("dark") || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 ml-1 sm:ml-2 transition-colors rounded-full text-page-text hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
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
        className="flex items-center justify-between p-2 shadow-2xl bg-white/60 dark:bg-[#111111]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full">
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
              className="ml-2 sm:ml-4 px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white uppercase tracking-widest bg-accent rounded-full hover:bg-[#d97300] transition-colors shadow-lg shadow-accent/30"
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
