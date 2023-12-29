import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faReact,
  faNode,
  faCss3Alt,
  faGithub,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Added database icon

// variants
import { fadeIn } from "../variants";

const skillIcons = {
  HTML: { icon: faHtml5, progress: 80 },
  JavaScript: { icon: faJs, progress: 90 },
  React: { icon: faReact, progress: 85 },
  Node: { icon: faNode, progress: 90 },
  Express: { icon: faNode, progress: 90 },
  CSS: { icon: faCss3Alt, progress: 80 },
  GitHub: { icon: faGithub, progress: 85 },
  "AWS/EC2": { icon: faAws, progress: 75 },
  MongoDB: { icon: faDatabase, progress: 80 },
  Firebase: { icon: faDatabase, progress: 75 },
};

const CircularProgress = ({ progress, size }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: [circumference, progressOffset],
    });
  }, [controls, circumference, progressOffset]);

  return (
    <div className="circular-progress" style={{ textAlign: "center" }}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        {/* Animated Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius - 5}
          strokeWidth={10}
          stroke="#29b6f6"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
        />
        {/* Text in the Center */}
        <text
          x="50%"
          y="50%"
          fontSize="20"
          textAnchor="middle"
          dy=".3em"
          fill="white"
        >
          {progress}%
        </text>
      </motion.svg>
    </div>
  );
};

const Skills = () => {
  const headingAnimation = fadeIn;

  const skillsContainerAnimation = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  // Common animation for the entire skills section
  const skillsSectionAnimation = fadeIn("left", 0.5);

  return (
    <motion.section
      className="skills flex flex-col items-center"
      id="skills"
      variants={skillsSectionAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="h2 text-accent mb-6 mx-4 md:mx-8 text-center md:text-left"
        variants={headingAnimation}
        initial="hidden"
        animate="show"
      >
        My Skills.
      </motion.h2>
      <motion.div
        className="text-base md:text-lg gap-7 max-w-screen-md mx-auto flex flex-col gap-y-7 md:flex-row"
        variants={skillsContainerAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {Object.entries(skillIcons).map(([skill, { icon, progress }]) => (
            <motion.div
              key={skill}
              className="m-2"
              variants={fadeIn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CircularProgress progress={progress} size={100} />
              <FontAwesomeIcon
                icon={icon}
                size="2x"
                style={{ color: "#29b6f6", marginTop: "10px" }}
              />
              <h3 className="h3 text-center mt-2">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
