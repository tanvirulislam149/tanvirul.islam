import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import { FaAngleRight } from "react-icons/fa";
import { useHover } from "@uidotdev/usehooks";

const Banner = () => {
  const [ref, hovering] = useHover();
  // const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="banner-font relative"
    >
      <div className="banner-img sm:w-4/6 md:pt-40 pt-32 pl-2 pr-6 lg:px-10">
        <div className="md:w-5/6">
          <div className="flex">
            {["T", "A", "N", "V", "I", "R", "U", "L"].map((l, index) =>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (0.1 * index), type: "spring", stiffness: 200 }}
                className="text-7xl md:text-8xl xl:text-9xl text-black">
                {l}
              </motion.p>
            )}
          </div>
          <div className="flex">
            {["I", "S", "L", "A", "M"].map((l, index) =>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (0.1 * index), type: "spring", stiffness: 200 }}
                className="text-7xl md:text-8xl xl:text-9xl text-black">
                {l}
              </motion.p>
            )}
          </div>
          <p className="text-2xl md:text-5xl text-black">MERN STACK DEVELOPER</p>
          <a ref={ref}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="text-lg inline-block px-2.5 m-4 nav-transition border-2 border-black rounded-full hover:text-black text-white font-medium leading-tight uppercase focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out relative"
            href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing"
            target={"blank"}
          >
            {/* My Resume */}
            <div className="resumeBtn">
              <ReactCurvedText
                width={140}
                height={80}
                cx={70}
                cy={80}
                rx={55}
                ry={55}
                startOffset={5}
                reversed={true}
                textProps={{ style: { fontSize: 23 } }}
                text="- My Resume -"
              />
              <div className="rotate-180">
                <ReactCurvedText
                  width={140}
                  height={80}
                  cx={70}
                  cy={80}
                  rx={55}
                  ry={55}
                  startOffset={5}
                  reversed={true}
                  textProps={{ style: { fontSize: 23 } }}
                  text="- My Resume -"
                />
              </div>
            </div>
            <FaAngleRight className={`absolute top-14 text-black left-14 w-12 h-12 ${hovering ? "scale-150 translate-x-3 nav-transition" : ""}`} />
          </a>
        </div>
      </div>
      <div className="flex justify-end xl:pr-20 md:pt-40 pt-0 pl-2 pr-6 lg:px-10 banner-right-img absolute top-3/4 sm:top-0 right-0 sm:w-7/12 ml-auto">
        <div className="sm:w-4/6 md:w-auto">
          <div className="pt-10 md:w-96 text-right">
            <p className="text-4xl md:text-6xl pr-20">Hello!!</p>
            <p className="text-5xl pr-10">.........</p>
            <p className="text-4xl banner-font2 font-bold text-sky-500 md:pt-7 pt-2">A MERN stack developer</p>
            <p className="text-4xl banner-font2 font-bold text-sky-500">who loves to build websites</p>
          </div>
          <div className="flex justify-center pt-7">
            <a
              type="button"
              class="p-3  bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-500 active:shadow-lg transition duration-150 ease-in-out"
              href="https://www.facebook.com/md.tanvirul.islam.792/"
              target={"blank"}
            >
              <FaFacebookF className="h-6 w-6" />
            </a>{" "}
            <br />
            <a
              type="button"
              class="md:my-0 mx-5 p-3 bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  active:bg-sky-500 transition duration-150 ease-in-out"
              href="https://github.com/tanvirulislam149"
              target={"blank"}
            >
              <FaGithub className="h-6 w-6" />
            </a>{" "}
            <br />
            <a
              type="button"
              class="p-3 bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-500 active:shadow-lg transition duration-150 ease-in-out"
              href="https://www.linkedin.com/in/tanvirul-islam-0242b4241"
              target={"blank"}
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <br />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
