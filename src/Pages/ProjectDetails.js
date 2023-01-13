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
      <p className="text-4xl text-sky-500 banner-font py-3">{name}</p>
      <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              src={pictures1}
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              src={pictures2}
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              src={pictures3}
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              src={pictures4}
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div className="py-20 md:px-5 flex justify-center">
          <a
            type="button"
            class="p-3 pt-3 bg-sky-500 border-2 border-sky-500 text-black font-medium md:text-lg banner-font leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out nav-transition"
            href={clientLink}
            target={"blank"}
          >
            {/* <a>Client-side Code</a> */}
            Client-side Code
          </a>{" "}
          <br />
          <a
            type="button"
            class="md:my-0 mx-3 md:mx-10 p-3 bg-sky-500 border-2 border-sky-500 text-black font-medium md:text-lg banner-font leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out nav-transition"
            href={serverLink}
            target={"blank"}
          >
            {" "}
            Server-side Code
          </a>{" "}
          <br />
          <a
            type="button"
            class=" p-3 bg-sky-500 border-2 border-sky-500 text-black font-medium md:text-lg banner-font leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out nav-transition"
            href={SiteLink}
            target={"blank"}
          >
            Live-Site Link
          </a>{" "}
          <br />
        </div>
      </div>
      <div className="md:flex  justify-between py-20">
        <p className="text-3xl md:w-1/4 text-center text-sky-500 banner-font py-3">
          DESCRIPTION
        </p>
        <p className="text-xl px-5 text-justify md:w-4/6 banner-font">
          {description}
        </p>
      </div>
      <div className="md:flex justify-between py-5">
        <p className="text-3xl md:w-1/4 text-center text-sky-500 banner-font py-3">
          FEATURES
        </p>
        <div className="text-xl px-5 md:w-4/6 banner-font">
          <li>{features[0]}</li>
          <li>{features[1]}</li>
          <li>{features[2]}</li>
        </div>
      </div>
      <div className="md:flex justify-between py-20">
        <p className="text-3xl md:w-1/4 text-center text-sky-500 banner-font">
          TECHNOLOGIES
        </p>
        <p className="text-xl md:w-4/6 px-5 banner-font">{tech}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
