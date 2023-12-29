import React, { useRef } from "react";
import "./Projects.css";
import car from "../../../Images/car.png";
import dentcare from "../../../Images/dentcare.png";
import depot from "../../../Images/depot.png";
import creative from "../../../Images/creative.jpg"
import foodie from "../../../Images/foodie.png"
import { MdComputer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import allProjects from "../../AllProjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1500,
    damping: 100,
    restDelta: 0.001
  });

  const x = useTransform(scaleX, [0, 1], ["100%", "-500%"])

  return (
    <div ref={imgRef} className="md:mx-0 py-10" style={{ height: "1000vh" }}>
      <div className="py-8 md:pl-20 pl-4">
        <p className="banner-font md:text-7xl text-5xl text-sky-500">
          PROJECTS
        </p>
        <div className="flex">
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
        </div>
      </div>
      <div style={{ position: "sticky", top: "150px" }} className="flex overflow-hidden">
        {
          allProjects.map(p =>
            <motion.div style={{ x }} className="w-screen">
              <ProjectCard p={p} />
            </motion.div>
          )
        }
      </div>
      {/* <motion.div
        className="md:flex text-black"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img className="md:w-7/12 w-full" src={car} alt="" />
        <div className="bg-gray-900 text-sky-500 w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-3xl font-extrabold banner-font text-center py-6">
            Bike-parts INDUSTRIES LTD.
          </p>
          <li className="pl-8 font-bold pb-4">
            Build With MERN Stack Technology
          </li>
          <p className="px-4 text-font">
            This is a website about bike parts manufacturer company. This
            company makes some parts and deliver them to customers. Here’s
            a website to expand their business.
          </p>
          <div className="flex justify-evenly mx-5">
            <a
              className="flex py-5"
              href="https://bike-parts.vercel.app/"
              target={"blank"}
            >
              <MdComputer className="h-12 w-12 mr-3" />
              <p className="text-xl md:text-2xl font-bold mt-1">
                Live Preview
              </p>
            </a>
            <button
              className="border-2 border-sky-500 hover:bg-black hover:text-white my-6 font-bold px-5"
              onClick={() => goToDetails(1)}
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:flex flex-row-reverse text-black my-10 md:my-0"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img className="md:w-7/12 w-full" src={creative} alt="" />
        <div className="bg-gray-900 text-sky-500 w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-3xl font-extrabold banner-font text-center py-6">
            Creative Agencies
          </p>
          <li className="pl-8 font-bold pb-4">
            Build With MERN Stack Technology
          </li>
          <p className="px-4 text-font">
            A creative agencies company which provides services that are creative like web development, web design and many more.
          </p>
          <div className="flex justify-evenly mx-5">
            <a
              className="flex py-5"
              href="https://creative-agencies.vercel.app/"
              target={"blank"}
            >
              <MdComputer className="h-12 w-12 mr-3" />
              <p className="text-xl md:text-2xl font-bold mt-1">
                Live Preview
              </p>
            </a>
            <button
              className="border-2 border-sky-500 hover:bg-black hover:text-white my-6 font-bold px-5"
              onClick={() => goToDetails(2)}
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:flex text-black my-10 md:my-0"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img className="md:w-7/12 w-full" src={depot} alt="" />
        <div className="bg-gray-900 text-sky-500 w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-3xl font-extrabold banner-font text-center py-6">
            DEPOT WAREHOUSE COMPANY
          </p>
          <li className="pl-8 font-bold pb-4">
            Build With MERN Stack Technology
          </li>
          <p className="px-4 text-font">
            A warehouse company website where people can store products
            and can see the products they store.
          </p>
          <div className="flex justify-evenly mx-5">
            <a
              className="flex py-5"
              href="https://warehouse-management-client.vercel.app/"
              target={"blank"}
            >
              <MdComputer className="h-12 w-12 mr-3" />
              <p className="text-xl md:text-2xl font-bold mt-1">
                Live Preview
              </p>
            </a>
            <button
              className="border-2 border-sky-500 hover:bg-black hover:text-white my-6 font-bold px-5"
              onClick={() => goToDetails(3)}
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:flex text-black my-10 md:my-0"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-gray-900 text-sky-500 w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-3xl font-extrabold banner-font text-center py-6">
            Foodie Restaurant App
          </p>
          <li className="pl-8 font-bold pb-4">
            Build With React Native Expo
          </li>
          <p className="px-4 text-font">
            A simple mobile app for a restaurant called Foodie.
          </p>
          <div className="flex justify-evenly mx-5">
            <a
              className="flex py-5"
              href="https://drive.google.com/file/d/1UZ2QUa-pHZTTHxReh4XRvIPyNMUhoMda/view?usp=sharing"
              target={"blank"}
            >
              <MdComputer className="h-12 w-12 mr-3" />
              <p className="text-xl md:text-2xl font-bold mt-1">
                Download
              </p>
            </a>
            <button
              className="border-2 border-sky-500 hover:bg-black hover:text-white my-6 font-bold px-5"
              onClick={() => goToDetails(4)}
            >
              Details
            </button>
          </div>
        </div>
        <img className="md:w-7/12 w-full" src={foodie} alt="" />
      </motion.div>
      <motion.div
        className="md:flex flex-row-reverse text-black"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full md:w-1/2 bg-gray-900 text-sky-500 flex flex-col justify-center">
          <p className="text-3xl font-extrabold banner-font text-center py-6">
            DENTCARE PRIVATE LTD.
          </p>
          <p className="px-4 text-font">
            It is a private dental clinic website where patients can see
            the treatments and price of the treatments. They can see the
            treatments details also after login to the website.
          </p>
          <div className="flex justify-evenly mx-5">
            <a
              className="flex py-5"
              href="https://assignment-10-2b635.web.app/"
              target={"blank"}
            >
              <MdComputer className="h-12 w-12 mr-3" />
              <p className="text-xl md:text-2xl font-bold mt-1">
                Live Preview
              </p>
            </a>
            <button
              className="border-2 border-sky-500 hover:bg-black hover:text-white my-6 font-bold px-5"
              onClick={() => goToDetails(5)}
            >
              Details
            </button>
          </div>
        </div>
        <img className="md:w-7/12 w-full" src={dentcare} alt="" />
      </motion.div> */}
    </div>
  );
};

export default Projects;