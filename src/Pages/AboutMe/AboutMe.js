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
      className="md:flex overflow-hidden items-center justify-evenly mt-32 mb-64 md:pb-0 px-4 pb-12"
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
              Hello! I am Tanvirul Islam from Chattogram, Bangladesh.
            </p>
            <p>
              A passionate web developer skilled in building modern, responsive,
              and scalable websites and web applications with hands-on
              experience in technologies like Nextjs, Redux, Django rest
              framework, Nodejs, Expressjs, MongoDB and PostgreSQL.
            </p>
            <p>I specialize in:</p>
            <div>
              <ul className="list-disc ml-10">
                <li className="text-white">
                  <p>Frontend development with React, Nextjs and Redux.</p>
                </li>
                <li>
                  Backend development with Node.js, Express and Django REST
                  Framework.
                </li>
                <li>
                  Building RESTful APIs and real-time features (chat,
                  notifications).
                </li>
                <li>Database design with MongoDB and PostgreSQL.</li>
                <li>
                  Deploying full-stack apps to cloud platforms like Render,
                  Vercel, and Netlify.
                </li>
              </ul>
            </div>
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
