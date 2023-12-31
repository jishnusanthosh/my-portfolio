import React from 'react'
//icons

import { BsArrowUpRight } from 'react-icons/bs'
//motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

//services

const services = [
  {
    name: 'Frontend Design',
    description: 'Crafting visually stunning and user-centric interfaces to enhance user experiences.',
    link: 'Learn More'
  },
  {
    name: 'REACT Development',
    description: 'Building dynamic and responsive web applications using the power of React.js.',
    link: 'Learn More'
  },
  {
    name: 'Full-Stack Development',
    description: 'Creating end-to-end solutions with expertise in both front-end and back-end technologies.',
    link: 'Learn More'
  }
];



const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten  mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6"> What i Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm Freelance Full-Stack Developer
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //destructure services
                const { name, description, link } = service
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider-winder font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a
                        href="/portfolio"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="/portfolio"  className="text-gradient text-sm ">
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
