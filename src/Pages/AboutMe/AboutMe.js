import React, { useRef } from "react";
import pic from "../../Images/aboutme.jpg";
import "./AboutMe.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const AboutMe = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["0 1", "0 0.1"]
  })

  const scaleTranform = useTransform(scrollYProgress, [0.1, 0.5, 0.8, 1], [0.4, 0.55, 0.8, 1])
  const y = useTransform(scrollYProgress, [0.7, 0.8, 1], ["0%", "5%", "20%"])
  return (
    <motion.div style={{ scale: scaleTranform, y }} id="aboutMe" className="md:flex overflow-hidden justify-evenly items-center mt-32 mb-64 md:pb-0 px-4 pb-12">
      <div className="md:w-5/12">
        <motion.div ref={aboutRef}
        >
          <div className="text-font text-xl text-justify">
            <p className="banner-font md:text-7xl text-5xl text-sky-500">
              ABOUT ME
            </p>
            <div className="flex pb-8">
              <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
            </div>
            <p className="text-xl py-5">
              Hello! I am Tanvirul Islam from Chattogram, Bangladesh
            </p>
            <p>
              I am a MERN stack Web Developer specializing in Reactjs, Nextjs, Redux and etc. I have
              extensive skill in developing and deploying websites utilizing
              various open source packages. I also specialize in JavaScript,
              Bootstrap, Tailwind, Material UI and have some projects done with these. In
              addition, I am comfortable to work with NodeJs, ExpressJs,
              MongoDB, Mongoose.
            </p>
            <p className="text-xl py-5">
              Take a look at my work and get in touch.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="md:w-5/12">
        <motion.img
          // initial={{ x: 200, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: true, amount: 0 }}
          // transition={{ duration: 0.7 }}
          style={{ border: "16px rgb(14 165 233) solid", borderRadius: "25px" }}
          className="md:w-10/12 mx-auto"
          src="https://i.ibb.co/D7msbHw/aboutme.jpg"
          alt=""
        />
      </div>
    </motion.div>


  );
};

export default AboutMe;
