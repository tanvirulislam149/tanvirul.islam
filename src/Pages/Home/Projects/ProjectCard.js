import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
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
    offset: ["start end", "end end"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1500,
    damping: 100,
    restDelta: 0.001
  });

  const y = useTransform(scaleX, [0, 1], [3000, 0])
  return (
    <motion.div key={p.id}
      className="md:flex items-center text-black mb-40"
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