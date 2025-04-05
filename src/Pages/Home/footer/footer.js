import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        class="md:flex bg-gray-900 justify-between md:px-20 border-t-2 border-sky-900 items-center text-white"
        style={{ backgroundColor: "rgba(17, 24, 39)" }}
      >
        {/* <div class="container px-6 pt-6"> */}
        <div class="flex justify-center py-3">
          <a
            type="button"
            class="p-3  bg-black border-2 border-white nav-transition text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
            href="https://www.facebook.com/md.tanvirul.islam.792/"
            target={"blank"}
          >
            <FaFacebookF className="h-4 w-4" />
          </a>{" "}
          <br />
          <a
            type="button"
            class="md:my-0 mx-5 p-3 bg-black border-2 border-white nav-transition text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  active:bg-white transition duration-150 ease-in-out"
            href="https://github.com/tanvirulislam149"
            target={"blank"}
          >
            <FaGithub className="h-4 w-4" />
          </a>{" "}
          <br />
          <a
            type="button"
            class="p-3 bg-black border-2 border-white nav-transition text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
            href="https://www.linkedin.com/in/tanvirul-islam-0242b4241"
            target={"blank"}
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          {/* </div> */}
        </div>

        <div class="text-center pb-2">
          © {new Date().getFullYear()} Copyright Tanvirul Islam. All rights
          reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
