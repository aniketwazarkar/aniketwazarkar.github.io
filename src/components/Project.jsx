import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  liveDemo,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex justify-between items-center py-10 sm:py-16 px-4 sm:px-8 border-b border-card-border cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12 w-full">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-page-text tracking-tighter group-hover:text-accent transition-colors duration-300 uppercase">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2 text-neutral text-xs sm:text-sm font-mono uppercase tracking-widest">
            {tags.map((tag) => (
              <span key={tag.id} className="px-3 py-1 rounded-full border border-card-border bg-card-bg">{tag.name}</span>
            ))}
          </div>
        </div>
        
        <button
          className="hidden md:flex items-center gap-2 font-semibold text-page-text uppercase tracking-widest text-sm group-hover:text-accent transition-colors whitespace-nowrap"
        >
          View Project
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          liveDemo={liveDemo}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
