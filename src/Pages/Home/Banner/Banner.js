import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import bg from "../../../Images/7.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-bg pt-20 px-2 flex items-center justify-center text-center banner-font'>
            <div>
                <p className='text-2xl md:text-6xl'>HELLO, I AM</p> 
                <p className='text-5xl md:text-8xl text-green-500'>TANVIRUL ISLAM</p>
                <p className='text-2xl md:text-4xl'>FRONTEND DEVELOPER</p>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="text-lg inline-block px-6 my-4 pt-3 pb-2 bg-green-500 hover:text-white border-2 border-green-500 text-black font-medium leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black  active:shadow-lg transition duration-150 ease-in-out"
                ><a href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing" target={"blank"}>My Resume</a>
                </button>
                <div className='flex justify-center pt-14'>
                    <button type="button" class="p-3  bg-green-500 border-2 border-green-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="https://www.facebook.com/md.tanvirul.islam.792/" target={"blank"}><FaFacebookF className='h-6 w-6' /></a></button> <br />
                    <button type="button" class="md:my-0 mx-5 p-3 bg-green-500 border-2 border-green-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"> <a href="https://github.com/tanvirulislam149" target={"blank"}><FaGithub className='h-6 w-6' /></a></button> <br />
                    <button type="button" class="p-3 bg-green-500 border-2 border-green-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="https://www.linkedin.com/in/tanvirul-islam-0242b4241" target={"blank"}><FaLinkedinIn className='h-6 w-6' /></a></button> <br />
                </div>
            </div>
        </div>
    );
};

export default Banner;