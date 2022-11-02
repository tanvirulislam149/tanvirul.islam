import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="banner-bg md:pt-40 pt-32 px-6 md:flex lg:px-10 banner-font"
    >
      <div>
        {/* <p className="text-2xl md:text-6xl">HELLO, I AM</p> */}
        <p className="text-6xl md:text-8xl lg:text-9xl text-black">
          TANVIRUL
        </p>
        <p className="text-6xl md:text-8xl lg:text-9xl text-black">
          ISLAM
        </p>
        <p className="text-2xl md:text-5xl">FULL STACK DEVELOPER</p>
        <a
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="text-lg inline-block px-6 my-4 nav-transition pt-3 pb-2 bg-black hover:text-black text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black  active:shadow-lg transition duration-150 ease-in-out"
          href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing"
          target={"blank"}
        >
          My Resume
        </a>
      </div>
      <div className="mx-auto md:pl-20">
        <div className="pt-10 md:w-96 text-right">
          <p className="text-4xl md:text-6xl pr-20">Hello!!</p>
          <p className="text-5xl pr-10">.........</p>
          <p className="text-2xl md:text-3xl text-sky-500 md:pt-7 pt-2">A full stack developer who loves to build websites</p>
        </div>
        <div className="flex justify-center pt-7">
          <a
            type="button"
            class="p-3  bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            href="https://www.facebook.com/md.tanvirul.islam.792/"
            target={"blank"}
          >
            <FaFacebookF className="h-6 w-6" />
          </a>{" "}
          <br />
          <a
            type="button"
            class="md:my-0 mx-5 p-3 bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            href="https://github.com/tanvirulislam149"
            target={"blank"}
          >
            <FaGithub className="h-6 w-6" />
          </a>{" "}
          <br />
          <a
            type="button"
            class="p-3 bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            href="https://www.linkedin.com/in/tanvirul-islam-0242b4241"
            target={"blank"}
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <br />
        </div>
      </div>
    </motion.div>



    // <div className="banner">
    //   <video autoPlay muted loop>
    //     <source src={video} type="video/mp4" />
    //   </video>
    //   <div className="content">
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1.2 }}
    //       className="pt-20 px-2 flex items-center justify-center text-center banner-font"
    //     >
    //       <div>
    //         <p className="text-2xl md:text-6xl">HELLO, I AM</p>
    //         <p
    //           style={{ color: "#72E2AE" }}
    //           className="text-5xl md:text-8xl"
    //         >
    //           TANVIRUL ISLAM
    //         </p>
    //         <p className="text-2xl md:text-3xl">
    //           JUNIOR FULL STACK DEVELOPER
    //         </p>
    //         <a
    //           type="button"
    //           data-mdb-ripple="true"
    //           data-mdb-ripple-color="light"
    //           className="text-lg inline-block px-6 my-4 pt-3 pb-2 bg-black hover:text-white border-2 border-white text-black font-medium leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black  active:shadow-lg transition duration-150 ease-in-out"
    //           href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing"
    //           target={"blank"}
    //         >
    //           My Resume
    //         </a>
    //         <div className="flex justify-center pt-7">
    //           <a
    //             type="button"
    //             class="p-3  bg-black border-2 border-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    //             href="https://www.facebook.com/md.tanvirul.islam.792/"
    //             target={"blank"}
    //           >
    //             <FaFacebookF className="h-6 w-6" />
    //           </a>{" "}
    //           <br />
    //           <a
    //             type="button"
    //             class="md:my-0 mx-5 p-3 bg-black border-2 border-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
    //             href="https://github.com/tanvirulislam149"
    //             target={"blank"}
    //           >
    //             <FaGithub className="h-6 w-6" />
    //           </a>{" "}
    //           <br />
    //           <a
    //             type="button"
    //             class="p-3 bg-black border-2 border-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    //             href="https://www.linkedin.com/in/tanvirul-islam-0242b4241"
    //             target={"blank"}
    //           >
    //             <FaLinkedinIn className="h-6 w-6" />
    //           </a>
    //           <br />
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default Banner;
