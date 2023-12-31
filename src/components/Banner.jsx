import React from "react";
import Image from "../assets/avatar.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";



const Banner = () => {
  const handleResumeDownload = () => {
    // Update the path based on your file location in the public folder
    const resumePath = "/JISHNU_SANTHOSH_RESUME.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "JISHNU_SANTHOSH_RESUME.pdf";

    // Trigger a click on the anchor element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  

  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[83px]"
            >
              JISHNU <span>SANTHOSH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[46px] font-secondary font-semibold uppercase leading-[1] "
            >
              <br />
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "FullStack Developer",
                  2000,
                  "UI/UX Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 "
            >
              Hello, I'm Jishnu Santhosh, a dedicated computer engineer from
              India, specializing in full-stack web software development. With a
              passion for crafting seamless digital experiences, Let's connect
              and explore the possibilities of transforming ideas into impactful
              web applications.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
            >
              <a
                href="#"
                className="btn btn-lg flex items-center"
                onClick={handleResumeDownload}
              >
                Resume <FaDownload className="ml-2" />
              </a>
              <a href="https://jishnusanthosh.online" className="text-gradient btn-link ">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-6 max-w-max mx-auto"
            >
              <a href="https://www.linkedin.com/in/jishnusanthosh/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/jishnusanthosh/">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/jiz__nu__vs/">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/jishnu.santhosh.779/">
                <FaFacebook />
              </a>
              <a href="mailto:jishnusanthosh321@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[300px] lg:max-w-[400px]"
          >
            <img src={Image} alt="" className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
