"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading text-center mb-16 sm:mb-24">My Journey</h2>
      <div ref={ref} className="relative pb-20 max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-[14px] bg-card-bg border-4 border-page-bg">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <div className="hidden md:flex flex-col gap-1 pl-12 md:pl-20 text-page-text">
                <h3 className="text-sm font-bold text-accent font-mono tracking-widest uppercase">{item.date}</h3>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">{item.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  {item.logo && (
                    <img src={item.logo} alt={item.job} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm border border-card-border p-1" />
                  )}
                  <h3 className="text-lg md:text-xl font-medium text-neutral">{item.job}</h3>
                </div>
              </div>
            </div>

            <div className="relative w-full pl-12 pr-4 md:pl-4">
              <div className="md:hidden block mb-6 text-left text-page-text">
                <h3 className="text-xs font-bold text-accent font-mono tracking-widest uppercase mb-1">{item.date}</h3>
                <h3 className="text-3xl font-extrabold tracking-tighter uppercase leading-tight mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  {item.logo && (
                    <img src={item.logo} alt={item.job} className="w-6 h-6 rounded-full bg-white shadow-sm border border-card-border p-[2px]" />
                  )}
                  <h3 className="text-lg font-medium text-neutral">{item.job}</h3>
                </div>
              </div>
              <div className="bg-card-bg border border-card-border p-6 sm:p-8 rounded-[24px] shadow-sm">
                {item.contents.map((content, idx) => (
                  <p className="mb-3 font-normal text-neutral md:text-lg leading-relaxed" key={idx}>
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-2 left-2 top-0 overflow-hidden w-[2px] bg-card-border [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-accent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
