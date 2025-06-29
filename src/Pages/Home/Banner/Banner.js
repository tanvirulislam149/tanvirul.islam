import React, { useRef } from "react";
import "./Banner.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useHover } from "@uidotdev/usehooks";
import RightSection from "./RightSection";
import AboutMe from "../../AboutMe/AboutMe";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import TitleText from "./TitleText/TitleText";

const Banner = () => {
  const [ref, hovering] = useHover();
  const skySection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skySection,
    offset: ["start start", "end start"],
  });

  const lx = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-1550%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={skySection}
        className="banner-font relative banner_cont"
      >
        <div
          style={{ position: "sticky", top: "0px" }}
          className="overflow-hidden"
        >
          <motion.div
            style={{ x: lx }}
            className="banner-img polygon_width md:pt-40 pt-32 pl-2 pr-6 lg:px-20"
          ></motion.div>
          <RightSection />
          <motion.div
            style={{ opacity }}
            className="centered_box flex justify-center font-semibold text-black"
          >
            <div>
              <p className="text-5xl sm:text-8xl">Tanvirul Islam</p>
              <p className="text-2xl sm:text-4xl flex justify-center">
                <TitleText />
              </p>
              <div className="flex justify-center">
                <a
                  className="border-2 border-white font-extrabold my-4 px-4 py-2 text-xl"
                  href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing"
                  target={"blank"}
                >
                  My Resume
                </a>
              </div>
              <div className="flex justify-center pt-0">
                <a
                  type="button"
                  class="md:my-0 p-2.5 text-white border-2 border-white nav-transition  font-medium text-xs leading-tight uppercase rounded-full  hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  active:bg-white transition duration-150 ease-in-out"
                  href="https://github.com/tanvirulislam149"
                  target={"blank"}
                >
                  <FaGithub className="h-6 w-6" />
                </a>{" "}
                <br />
                <a
                  type="button"
                  class="p-2.5 mx-5 text-white border-2 border-white nav-transition font-medium text-xs leading-tight uppercase rounded-full  hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/tanvirul-islam-0242b4241"
                  target={"blank"}
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <br />
                <a
                  type="button"
                  class="p-2.5  text-white border-2 nav-transition border-white font-medium text-xs leading-tight uppercase rounded-full  hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
                  href="https://www.facebook.com/md.tanvirul.islam.792/"
                  target={"blank"}
                >
                  <FaFacebookF className="h-6 w-6" />
                </a>{" "}
                <br />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div>
          <AboutMe />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
