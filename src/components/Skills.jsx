import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={10}
          stroke="lightgray"
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={10}
          stroke="#29b6f6"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
        />
        <text x="50%" y="50%" fontSize="20" textAnchor="middle" dy=".3em">
          {progress}%
        </text>
      </svg>
    </div>
  );
};

const Skills = () => {
  return (
    <div  id="skills" className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
         <motion.h2 className="h2 text-accent mb-6" variants={{}} initial="hidden" animate="show">
          My Skills.
        </motion.h2>
      <div  className="flex text-[20px] gap-6 max-w-max mx-auto">
       
        <div className="grid grid-cols-5">
          {/* HTML */}
          <motion.div className="m-2 col-span-1" variants={{}} initial={{ width: 0 }} animate={{ width: '90%' }}>
            <CircularProgress progress={90} size={100} />
            <h3 className="h3">HTML</h3>
          </motion.div>

          {/* JavaScript */}
          <motion.div className="m-2 col-span-1" variants={{}} initial={{ width: 0 }} animate={{ width: '80%' }}>
            <CircularProgress progress={80} size={100} />
            <h3 className="h3">JavaScript</h3>
          </motion.div>

          {/* React */}
          <motion.div className="m-2 col-span-1" variants={{}} initial={{ width: 0 }} animate={{ width: '85%' }}>
            <CircularProgress progress={85} size={100} />
            <h3 className="h3">React</h3>
          </motion.div>

          {/* Node.js */}
          <motion.div className="m-2 col-span-1" variants={{}} initial={{ width: 0 }} animate={{ width: '75%' }}>
            <CircularProgress progress={75} size={100} />
            <h3 className="h3">Node.js</h3>
          </motion.div>

          {/* MongoDB */}
          <motion.div className="m-2 col-span-1" variants={{}} initial={{ width: 0 }} animate={{ width: '70%' }}>
            <CircularProgress progress={70} size={100} />
            <h3 className="h3">MongoDB</h3>
          </motion.div>

          {/* Add more skills as needed */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
