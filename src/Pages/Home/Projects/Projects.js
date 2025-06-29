import React, { useRef } from "react";
import "./Projects.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import allProjects from "../../AllProjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001,
  });

  const x = useTransform(scaleX, [0, 1], ["100%", "-500%"]);

  return (
    <div ref={imgRef} className="md:mx-0 py-10">
      <div className="py-8 md:pl-20 pl-4">
        <p className="banner-font md:text-7xl text-5xl text-white">PROJECTS</p>
        <div className="flex">
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
        </div>
      </div>
      <div
        // style={{ position: "sticky", top: "150px" }}
        className="overflow-hidden"
      >
        {allProjects.map((p, index) => (
          <motion.div className="w-screen">
            <ProjectCard p={p} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
