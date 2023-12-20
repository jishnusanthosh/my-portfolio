import React from 'react'

//motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

import Img1 from '../assets/project 1.png'
import Img2 from '../assets/PROJECT 2.png'
import Img3 from '../assets/project 3.png'

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Explore a collection of my recent projects, where innovation
                meets functionality. From captivating UI/UX designs to robust
                React applications and full-stack solutions, each project
                reflects a commitment to excellence and a passion for creating
                seamless digital experiences.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70  w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Web App</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Ecommerce</span>
              </div>
              {/* links */}
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-6 right-12 z-50 space-x-4 flex flex-col items-end"
              >
                <a
                  href="https://github.com/jishnusanthosh/OUTLOOKS"
                  className="hover:text-gradient text-white font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.outlooks.shop"
                  className="hover:text-gradient text-white font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70  w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Web App</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Doctor Appointment</span>
              </div>
              {/* links */}
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-6 right-12 z-50 space-x-4 flex flex-col items-end"
              >
                <a
                  href="https://github.com/jishnusanthosh/MEDICARE-BOOKING"
                  className="hover:text-gradient text-white font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
  
              </motion.div>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70  w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Web App</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Social Media</span>
              </div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-6 right-12 z-50 space-x-4 flex flex-col items-end"
              >
                <a
                  href="https://github.com/jishnusanthosh/NEXAGRAM"
                  className="hover:text-gradient text-white font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
  
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
