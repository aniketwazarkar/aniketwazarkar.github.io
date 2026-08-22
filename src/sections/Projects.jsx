import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  
  const [preview, setPreview] = useState(null);
  
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-heading mb-4 text-center">Selected Works</h2>
        <p className="text-center text-neutral mb-10 sm:mb-14">
          &quot;Selected&quot; because showing all of them would be a war crime. Head to{" "}
          <a
            href="https://github.com/aniketwazarkar"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>{" "}
          if you enjoy suffering.
        </p>
        
        <div className="flex flex-col border-t border-card-border">
          {myProjects.map((project) => (
            <Project key={project.id} {...project} setPreview={setPreview} />
          ))}
        </div>
        
        {preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-[300px] w-auto max-w-[400px] rounded-[24px] shadow-2xl pointer-events-none border border-card-border"
            src={preview}
            style={{ x: springX, y: springY }}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
