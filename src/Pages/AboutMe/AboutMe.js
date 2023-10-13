import React from "react";
import pic from "../../Images/aboutme.jpg";
import "./AboutMe.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="md:flex overflow-hidden justify-around md:py-28 px-4 py-12">
      <div className="md:w-4/12">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
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
      <div className="md:w-4/12">
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          style={{ border: "16px rgb(14 165 233) solid", borderRadius: "25px" }}
          className="md:w-11/12"
          src="https://i.ibb.co/D7msbHw/aboutme.jpg"
          alt=""
        />
      </div>
    </div>


  );
};

export default AboutMe;
