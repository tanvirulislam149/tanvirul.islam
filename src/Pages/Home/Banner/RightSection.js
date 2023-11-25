import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const RightSection = () => {
  const skySection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skySection,
    offset: ["start start", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  return (
    <motion.div ref={skySection} style={{ translateX: x }} className="flex justify-end xl:pr-20 md:pt-40 pt-0 pl-2 pr-6 lg:px-10 banner-right-img absolute top-3/4 sm:top-0 right-0 sm:w-7/12 ml-auto">
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
    </motion.div>
  )
}

export default RightSection