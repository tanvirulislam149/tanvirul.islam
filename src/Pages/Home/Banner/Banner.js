import React, { useRef } from "react";
import "./Banner.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import { FaAngleRight } from "react-icons/fa";
import { useHover } from "@uidotdev/usehooks";
import RightSection from "./RightSection";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import AboutMe from "../../AboutMe/AboutMe";

const Banner = () => {
  const [ref, hovering] = useHover();
  const skySection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skySection,
    offset: ["start start", "end start"],
  });

  const lx = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-250%"]);
  const topAnim = useTransform(scrollYProgress, [0, 1], ["380px", "80px"]);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={skySection}
        style={{ height: "200vh" }}
        className="banner-font relative"
      >
        <div
          style={{ position: "sticky", top: "0px" }}
          className="overflow-hidden"
        >
          <motion.div
            style={{ x: lx }}
            className="banner-img sm:w-4/6 md:pt-40 pt-32 pl-2 pr-6 lg:px-20"
          >
            <div className="md:w-5/6">
              <div className="flex">
                {["T", "A", "N", "V", "I", "R", "U", "L"].map((l, index) => (
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-7xl md:text-8xl xl:text-9xl text-black"
                  >
                    {l}
                  </motion.p>
                ))}
              </div>
              <div className="flex">
                {["I", "S", "L", "A", "M"].map((l, index) => (
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-7xl md:text-8xl xl:text-9xl text-black"
                  >
                    {l}
                  </motion.p>
                ))}
              </div>
              <p className="text-2xl md:text-5xl text-black">
                MERN STACK DEVELOPER
              </p>
              <a
                ref={ref}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="text-lg inline-block p-0 m-4 nav-transition border-2 border-black rounded-full font-medium leading-tight uppercase focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out relative"
                href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing"
                target={"blank"}
              >
                {/* My Resume */}
                <div className="resumeBtn">
                  <ReactCurvedText
                    width={140}
                    height={70}
                    cx={70}
                    cy={70}
                    rx={45}
                    ry={45}
                    startOffset={5}
                    reversed={true}
                    textProps={{ style: { fontSize: 22 } }}
                    text="My Resume -"
                  />
                  <div className="rotate-180">
                    <ReactCurvedText
                      width={140}
                      height={70}
                      cx={70}
                      cy={70}
                      rx={45}
                      ry={45}
                      startOffset={5}
                      reversed={true}
                      textProps={{ style: { fontSize: 22 } }}
                      text="My Resume -"
                    />
                  </div>
                </div>
                <FaAngleRight
                  className={`absolute top-12 text-black left-12 w-12 h-12 ${
                    hovering ? "scale-150 translate-x-2 nav-transition" : ""
                  }`}
                />
              </a>
            </div>
          </motion.div>
          <RightSection />
        </div>
        <motion.div styles={{ y }}>
          <AboutMe />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
