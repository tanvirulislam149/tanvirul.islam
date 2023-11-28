import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { MdComputer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import "./Projects.css"

const ProjectCard = ({ p }) => {
  const imgRef = useRef(null);
  let navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/project/${id}`);
  };

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [500, -700])
  return (
    <motion.div key={p.id}
      className="md:flex items-center text-black mb-40 overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7 }}
    >
      <img ref={imgRef} className="md:w-6/12 w-full md:mx-12" src={p.demoImg} alt="" />
      <div className='md:w-1/2'>
        <motion.div style={{ y }} className="text-sky-500 md:px-10 w-full animationControl">
          <p className="text-3xl font-extrabold banner-font text-center py-6">
            {p.name}
          </p>
          <li className="pl-8 font-bold pb-4">
            {p.build}
          </li>
          <p className="px-4 text-font">
            {p.description}
          </p>
          <div className="flex justify-evenly mx-5">
            <a
              className="flex py-5"
              href={p.SiteLink}
              target={"blank"}
            >
              <MdComputer className="h-12 w-12 mr-3" />
              <p className="text-xl md:text-2xl font-bold mt-1">
                {p.id === 4 ? "Download" : "Live Preview"}
              </p>
            </a>
            <button
              className="border-2 border-sky-500 hover:bg-black hover:text-white my-6 font-bold px-5"
              onClick={() => goToDetails(p.id)}
            >
              Details
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard


const Component = ({ p }) => {

}