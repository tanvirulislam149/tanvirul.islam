import React, { useState } from 'react';
import OffCanvas from './OffCanvas';
import "./Header.css"
import { Link } from "react-router-dom";
import pic from "../../../Images/tanvir.png"

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  window.onscroll = function () {
    const position = window.pageYOffset;
    console.log(position);
    if (position < 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  return (
    <div className={`${navbar ? "" : "bg-black"} nav-transition flex justify-between fixed-top px-0 md:px-20`}>
      <nav class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        text-white
        navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between bg-black md:bg-transparent pb-0 pr-4">
          <Link to="/">
            <div className='flex items-end bg-black md:pl-5 md:pr-5 pr-1 md:pb-2 pb-1 pt-1'>
              <img className='w-12 md:w-16 bg-black' src={pic} alt='' />
              <p className='text-3xl md:text-5xl font-bold'>ANVIR</p>
            </div>
          </Link>
          <button class="
            navbar-toggler
            text-white
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
              class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
            </svg>
          </button>
          <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            <ul class="navbar-nav flex flex-col list-style-none ml-auto">
              <li class="nav-item px-4 mx-auto py-0 md:border-r-2 border-blue-200">
                <Link to="/home" className='nav-link text-white text-lg'>Home</Link>
              </li>
              <li class="nav-item px-4 mx-auto py-0 md:border-r-2 border-blue-200">
                <Link to="/blogs" className='nav-link text-white text-lg'>Blogs</Link>
              </li>
              <li class="nav-item px-4 mx-auto py-0 md:border-r-2 border-blue-200">
                <a className='nav-link text-white text-lg' href="#aboutMe">About</a>
              </li>
              <li class="nav-item px-4 mx-auto py-0">
                <a className='nav-link text-white text-lg' href="#contactMe">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;