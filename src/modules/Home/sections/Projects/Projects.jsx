import React from "react";
import { motion } from "framer-motion";
//
import Featured from "@components/cards/Project/Featured";
import ProjectCard from "@components/cards/Project/ProjectCard";
import { fadeTop, fadeLeft, motionStep } from "@config/motion";
import { projects } from "@config/constants";
 

const Projects = () => {
  return (
    <section id="works" className="container">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300 mb-12"
      >
        <span className="text-sky-400 font-mono">03. </span>
        Some Things I’ve Built
      </motion.h1>

      <div className="space-y-20">
        {projects
          .filter((e) => e.featured == true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured {...e} secondary={i % 2 === 0 ? false : true} />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-20">
        {projects
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard {...e} key={i} />
          ))}
      </div>

      {/* <div className='flex items-center justify-center' >
          <Button outlined > See More </Button>
        </div> */}
    </section>
  );
};

export default Projects;
