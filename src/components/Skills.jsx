import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// variants
import { fadeIn } from '../variants';

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
    <div className="circular-progress" style={{ textAlign: 'center' }}>
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
        <text x="50%" y="50%" fontSize="20" textAnchor="middle" dy=".3em" fill="white">
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
  const skillsSectionAnimation = fadeIn('left', 0.5);

  return (
    <motion.section
      className="skills flex flex-col items-center"
      id="skills"
      variants={skillsSectionAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="h2 text-accent mb-6 mx-8"
        variants={headingAnimation}
        initial="hidden"
        animate="show"
      >
        My Skills.
      </motion.h2>
      <motion.div
        className="text-[20px] gap-6 max-w-max mx-auto flex flex-col gap-y-10 lg:flex-row"
        variants={skillsContainerAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-5 gap-10">
          {/* HTML */}
          <motion.div   className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '90%' }}>
            <CircularProgress progress={90} size={100} />
            <h3 className="h3">HTML</h3>
          </motion.div>

          {/* JavaScript */}
          <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '80%' }}>
            <CircularProgress progress={90} size={100} />
            <h3 className="h3">JavaScript</h3>
          </motion.div>

          {/* React */}
          <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '85%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">React</h3>
          </motion.div>

          {/* Node.js */}
          <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '75%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">Node.js</h3>
          </motion.div>

          {/* MongoDB */}
          <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">MongoDB</h3>
          </motion.div> 
          
           {/* MongoDB */}
          <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">Express</h3>
          </motion.div>
            {/* MongoDB */}
            <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">FireBase</h3>
          </motion.div>

            {/* MongoDB */}
            <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">Git Hub</h3>
          </motion.div>

            {/* MongoDB */}
            <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={70} size={100} />
            <h3 className="h3">Aws/ec2</h3>
          </motion.div>

            {/* MongoDB */}
            <motion.div className="m-2 col-span-1" variants={fadeIn} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={75} size={100} />
            <h3 className="h3">Tailwind</h3>
          </motion.div>



        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
