import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeUrl = "/assets/resume/Aniket_Wazarkar_Resume.pdf"; // This is the placeholder path for the user to add their resume

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <section id="resume" className="c-space relative my-32 md:my-60">
      {/* Interactive Trigger Banner */}
      <div
        onClick={() => setIsOpen(true)}
        className="w-full relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-card-border p-8 sm:p-12 cursor-pointer group flex flex-col items-center justify-center text-center transition-colors duration-500 bg-card-bg hover:bg-neutral/5"
      >
        <p className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] text-accent mb-4 uppercase z-10">
          Curriculum Vitae
        </p>

        {/* Funny Micro-copy */}
        <h3 className="text-sm sm:text-base lg:text-lg font-mono text-neutral mb-6 sm:mb-8 z-10 max-w-2xl tracking-tight">
          <span className="text-accent/80 mr-2">&gt;</span>
          Go ahead, snoop through my professional life.
          <span className="animate-blink text-accent font-black ml-1.5 opacity-100">_</span>
        </h3>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-none font-black text-page-text uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500 ease-out z-10">
          View <span className="text-accent/80">Resume</span>
        </h2>
        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Floating Modal for PDF Viewer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-xl p-4 sm:p-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-5xl h-[85vh] bg-card-bg rounded-[24px] shadow-2xl overflow-hidden flex flex-col border border-card-border"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >

              {/* Modal Header Toolbar */}
              <div className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-card-border bg-black/5 dark:bg-white/5 backdrop-blur-md">
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-page-text font-bold">
                    Aniket_Wazarkar_Resume.pdf
                  </h3>
                  <span className="font-mono text-[10px] text-neutral flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Ready
                  </span>
                </div>

                <div className="flex gap-2 sm:gap-4 items-center">
                  <a
                    href={resumeUrl}
                    download="Aniket_Wazarkar_Resume.pdf"
                    className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 sm:px-5 py-2.5 sm:py-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors shadow-lg shadow-accent/20"
                  >
                    <span className="hidden sm:inline-block">Download</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 sm:p-2.5 text-neutral hover:text-page-text transition-colors rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                    title="Close Viewer"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF Viewer Content */}
              <div className="flex-1 w-full bg-[#1e1e1e] sm:bg-[#2d2d2d] relative flex flex-col items-center justify-center">
                <iframe
                  src={`${resumeUrl}#toolbar=0`}
                  title="Resume Document"
                  className="w-full h-full border-none z-10"
                />

                {/* Fallback loading/empty state shown behind iframe */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-50">
                  <svg className="w-16 h-16 text-neutral mb-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="font-mono text-sm text-neutral tracking-widest uppercase">Loading Document...</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
