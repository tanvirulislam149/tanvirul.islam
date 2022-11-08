import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer class="text-center bg-sky-900 text-white">
        <div class="container px-6 pt-6">
          <div class="flex justify-center mb-6">
            <a
              type="button"
              class="p-3  bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-500 active:shadow-lg transition duration-150 ease-in-out"
              href="https://www.facebook.com/md.tanvirul.islam.792/"
              target={"blank"}
            >
              <FaFacebookF className="h-6 w-6" />
            </a>{" "}
            <br />
            <a
              type="button"
              class="md:my-0 mx-5 p-3 bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  active:bg-sky-500 transition duration-150 ease-in-out"
              href="https://github.com/tanvirulislam149"
              target={"blank"}
            >
              <FaGithub className="h-6 w-6" />
            </a>{" "}
            <br />
            <a
              type="button"
              class="p-3 bg-black border-2 border-sky-500 nav-transition text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-500 active:shadow-lg transition duration-150 ease-in-out"
              href="https://www.linkedin.com/in/tanvirul-islam-0242b4241"
              target={"blank"}
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © {new Date().getFullYear()} Copyright Tanvirul Islam. All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer