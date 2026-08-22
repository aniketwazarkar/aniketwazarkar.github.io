import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  liveDemo,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm bg-black/40"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl my-8 overflow-hidden border shadow-2xl rounded-2xl bg-card-bg border-card-border"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
        >
          <img src="/assets/close.svg" className="w-5 h-5 invert" alt="Close" />
        </button>
        <div className="w-full max-h-[50vh] overflow-hidden bg-black/20">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-5 sm:p-6">
          <h5 className="mb-2 text-2xl font-bold text-page-text">{title}</h5>
          <p className="mb-3 font-normal text-neutral">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral" key={index}>
              {subDesc}
            </p>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  title={tag.name}
                  className="flex items-center justify-center bg-white rounded-lg size-10 p-2 hover-animation"
                >
                  <img src={tag.path} alt={tag.name} className="w-full h-full" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full cursor-pointer hover-animation border border-card-border text-page-text hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Source Code
                </a>
              )}
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-bold text-white rounded-full cursor-pointer hover-animation bg-accent hover:bg-[#d97300]"
                >
                  Live Demo
                  <img src="/assets/arrow-up.svg" className="size-4 invert" alt="" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
