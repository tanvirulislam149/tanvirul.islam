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
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
          >
            {/* <div className="absolute right-0 top-50% text-6xl text-black">
              <p className="-mr-20">Tanvirul Islam</p>
            </div> */}

            {/* <div className="md:w-5/6">
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
                My Resume
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
              <button className="border-2 border-black hover:bg-white hover:text-black bg-black my-6 font-bold px-4 py-2 text-xl">
                My Resume
              </button>
            </div> */}
          </motion.div>
          <RightSection />
          <motion.div
            style={{ opacity }}
            className="centered_box flex justify-center font-semibold text-black"
          >
            <div>
              <p className="text-5xl sm:text-8xl">Tanvirul Islam</p>
              <p className="text-2xl sm:text-4xl text-center">
                A web developer
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
