import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
//
import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  // content
  const content = [
    "Hello! I'm Soumik, a passionate web developer who loves creating captivating experiences on the internet.  ",
    // "Since then, I've had the incredible opportunity to work in diverse environments, including an advertising agency, a start-up, a large corporation, and a student-led design studio. These experiences have shaped my expertise in crafting accessible and inclusive products and digital experiences. Currently, I'm thrilled to be a part of Upstatement, where I collaborate with a range of clients to bring their visions to life.",
    `I strongly believe in the transformative power of hard work. It serves as a catalyst to turn our dreams into tangible realities. My deep passion for contributing to the web development industry drives me to create compelling and innovative digital experiences. Let's collaborate and bring our shared visions to life through dedication and creativity.`,
    "Let's collaborate and turn your ideas into remarkable digital experiences!",
    "Here are a few technologies I have been working with recently:",
  ];

  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        {content.map((e, i) => (
          <p key={i}> {e} </p>
        ))}

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
            {skills.map((e, i) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
