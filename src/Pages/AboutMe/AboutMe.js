import React, { useRef } from "react";
import pic from "../../Images/aboutme.jpg";
import "./AboutMe.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const AboutMe = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1500,
    damping: 100,
    restDelta: 0.001,
  });

  const scaleTranform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <motion.div
      // ref={aboutRef}
      // style={{ scale: scaleTranform, y }}
      id="aboutMe"
      className="md:flex overflow-hidden justify-evenly mt-32 mb-64 md:pb-0 px-4 pb-12"
    >
      <div className="md:w-5/12">
        <motion.img
          // style={{ border: "16px rgb(14 165 233) solid", borderRadius: "25px" }}
          className="md:w-8/12 mx-auto"
          src="https://i.ibb.co/D7msbHw/aboutme.jpg"
          alt=""
        />
      </div>
      <div className="md:w-5/12">
        <motion.div>
          <div className="text-font text-xl text-justify">
            <p className="banner-font md:text-7xl text-5xl text-white">
              ABOUT ME
            </p>
            <div className="flex pb-8">
              <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
              <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
            </div>
            <p className="text-xl py-5">
              Hello! I am Tanvirul Islam from Chattogram, Bangladesh
            </p>
            <p>
              I am a MERN stack Web Developer specializing in Reactjs, Nextjs,
              Redux and etc. I have extensive skill in developing and deploying
              websites utilizing various open source packages. I also specialize
              in JavaScript, Bootstrap, Tailwind, Material UI and have some
              projects done with these. In addition, I am comfortable to work
              with NodeJs, ExpressJs, MongoDB, Mongoose.
            </p>
            <p className="text-xl py-5">
              Take a look at my work and get in touch.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
