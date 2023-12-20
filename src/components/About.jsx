import React from 'react'
import CountUp from 'react-countup'
// intersection observer hook
import { useInView } from 'react-intersection-observer'
//motion

import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
  })
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm Freelance Full-Stack Developer</h3>
            <p>
              I'm Jishnu Santhosh, a dedicated computer engineer
              specializing in Fullstack web software development. With a Diploma in
              Computer Engineering, my expertise spans both hardware and
              software engineering. Proficient in JavaScript, React, Node.js,
              and MongoDB, I architect and develop sophisticated solutions. My
              commitment to excellence is evident in crafting seamless user
              experiences.I align my work with industry trends. Let's
              connect to explore how my technical acumen contributes to
              transformative projects at the intersection of software
              engineering .
            </p>
            <br />

            {/* stats */}
            <div className="flex gap-x-6  lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Project
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 item-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
