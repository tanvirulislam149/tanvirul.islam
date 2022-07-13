import { useParams } from "react-router-dom";
import projects from "./AllProjects";
import { FaCheck } from "react-icons/fa";

const ProjectDetails = () => {
   let { projectId } = useParams();
   const projectArray = projects.filter((p) => p.id === parseInt(projectId));
   const {
      pictures1,
      pictures2,
      pictures3,
      pictures4,
      name,
      description,
      tech,
      features,
      clientLink,
      serverLink,
      SiteLink,
   } = projectArray[0];
   return (
      <div className="pt-20 md:px-20">
         <p className="text-4xl text-green-500 banner-font py-3">{name}</p>
         <div className="md:grid grid-cols-2 gap-4">
            <img
               className="py-2 hover:scale-125 transition duration-500 md:py-0"
               src={pictures1}
               alt=""
            />
            <img
               className="py-2 hover:scale-125 transition duration-500 md:py-0"
               src={pictures2}
               alt=""
            />
            <img
               className="py-2 hover:scale-125 transition duration-500 md:py-0"
               src={pictures3}
               alt=""
            />
            <img
               className="py-2 hover:scale-125 transition duration-500 md:py-0"
               src={pictures4}
               alt=""
            />
         </div>
         <div>
            <div className="py-20 md:px-5 flex justify-center">
               <button
                  type="button"
                  class="p-3 py-0 bg-green-500 border-2 border-green-500 text-black font-medium md:text-lg banner-font leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
               >
                  <a href={clientLink} target={"blank"}>
                     Client-side Code
                  </a>
               </button>{" "}
               <br />
               <button
                  type="button"
                  class="md:my-0 mx-3 md:mx-10 p-3 bg-green-500 border-2 border-green-500 text-black font-medium md:text-lg banner-font leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
               >
                  {" "}
                  <a href={serverLink} target={"blank"}>
                     Server-side Code
                  </a>
               </button>{" "}
               <br />
               <button
                  type="button"
                  class=" p-3 bg-green-500 border-2 border-green-500 text-black font-medium md:text-lg banner-font leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
               >
                  <a href={SiteLink} target={"blank"}>
                     Live-Site Link
                  </a>
               </button>{" "}
               <br />
            </div>
         </div>
         <div className="md:flex  justify-between py-20">
            <p className="text-3xl md:w-1/4 text-center text-green-500 banner-font py-3">
               DESCRIPTION
            </p>
            <p className="text-xl px-5 text-justify md:w-4/6 banner-font">
               {description}
            </p>
         </div>
         <div className="md:flex justify-between py-5">
            <p className="text-3xl md:w-1/4 text-center text-green-500 banner-font py-3">
               FEATURES
            </p>
            <div className="text-xl px-5 md:w-4/6 banner-font">
               <li className="flex justify-start">
                  <p>
                     <span className="font-bold">--</span>
                     {features[0]}
                  </p>
               </li>
               <li className="flex justify-start">
                  <p>
                     <span className="font-bold">--</span>
                     {features[1]}
                  </p>
               </li>
               <li className="flex justify-start">
                  <p>
                     <span className="font-bold">--</span>
                     {features[2]}
                  </p>
               </li>
            </div>
         </div>
         <div className="md:flex justify-between py-20">
            <p className="text-3xl md:w-1/4 text-center text-green-500 banner-font">
               TECHNOLOGIES
            </p>
            <p className="text-xl md:w-4/6 px-5 banner-font">{tech}</p>
         </div>
      </div>
   );
};

export default ProjectDetails;
