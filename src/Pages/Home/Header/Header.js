import React, { useState } from 'react';
import "./Header.css"
import { Link } from "react-router-dom";
import pic from "../../../Images/tanvir.png"

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  window.onscroll = function () {
    const position = window.pageYOffset;
    if (position < 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  return (
    <div className={`${navbar ? "" : "bg-black"} nav-transition flex justify-between fixed-top px-5 md:px-20`}>
      <nav class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        text-white
        navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between md:bg-transparent pb-0 pr-0">
          <Link to="/">
            <div className='flex items-end bg-black md:pl-5 md:pr-5 pl-1 pr-1 md:pb-2 pb-1 pt-1'>
              <img className='w-16 bg-black' src={pic} alt='' />
              {/* <p className='text-3xl md:text-5xl font-bold'>ANVIR</p> */}
            </div>
          </Link>
          <button class={`pr-2.5 text-white
            navbar-toggler
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-black
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
              class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
            </svg>
          </button>
          <div class="collapse navbar-collapse flex-grow banner-font items-center" id="navbarSupportedContent">
            <ul class="navbar-nav nav-bg bg-black md:bg-transparent mt-2 flex flex-col list-style-none ml-auto">
              <li class="nav-item hover:translate-y-1 nav-transition px-4 mx-auto py-2 md:py-0 md:pt-0  border-b-2 md:border-b-0 w-full text-center border-blue-200">
                <Link to="/home" className='nav-link text-white hover:text-sky-500 nav-transition  text-2xl'>Home</Link>
              </li>
              <li class="nav-item hover:translate-y-1 nav-transition px-4 mx-auto py-2 md:py-0  border-b-2 md:border-b-0 w-full text-center border-blue-200">
                <Link to="/blogs" className='nav-link text-white hover:text-sky-500 nav-transition  text-2xl'>Blogs</Link>
              </li>
              <li class="nav-item hover:translate-y-1 nav-transition px-4 mx-auto py-2 md:py-0  border-b-2 md:border-b-0 w-full text-center border-blue-200">
                <a className='nav-link text-white hover:text-sky-500 nav-transition  text-2xl' href="/home#aboutMe">About</a>
              </li>
              <li class="nav-item hover:translate-y-1 nav-transition px-4 mx-auto py-2 w-full text-center md:py-0">
                <a className='nav-link text-white hover:text-sky-500 nav-transition  text-2xl' href="/home#contactMe">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;