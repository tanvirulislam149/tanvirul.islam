import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import banner from "../../../Images/banner.svg"
import "./Banner.css"

const Banner = () => {
    return (
        <div className='md:flex justify-between md:px-20 h-screen items-center'>
            <div className='banner-font pt-20 pb-5 px-5 md:pb-0 md:px-0 md:pt-0'>
                <p className='text-2xl md:text-5xl'>Hello, I am</p>
                <p className='text-4xl md:text-7xl text-green-300 typing'></p>
                <p className='text-lg md:text-2xl'>Jr. Frontend Developer</p>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="text-lg inline-block px-6 my-4 py-2.5 bg-green-300 hover:text-white border-2 border-green-300 text-black font-medium leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black  active:shadow-lg transition duration-150 ease-in-out"
                ><a href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing" target={"blank"}>My Resume</a></button>
            </div>
            <div className='md:flex items-center px-3 justify-center'>
                <div className='md:px-5'>
                    <img className='md:w-96' src={banner} alt="" />
                </div>
                <div className=' flex md:flex-col justify-center'>
                    <button type="button" class=" p-2 bg-green-300 border-2 border-green-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="https://www.facebook.com/md.tanvirul.islam.792/" target={"blank"}><FaFacebookF className='h-6 w-6' /></a></button> <br />
                    <button type="button" class="md:my-0 mx-5 md:mx-0 p-2 bg-green-300 border-2 border-green-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"> <a href="https://github.com/tanvirulislam149" target={"blank"}><FaGithub className='h-6 w-6' /></a></button> <br />
                    <button type="button" class=" p-2 bg-green-300 border-2 border-green-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="https://www.linkedin.com/in/tanvirul-islam-0242b4241" target={"blank"}><FaLinkedinIn className='h-6 w-6' /></a></button> <br />
                </div>
            </div>
        </div >
    );
};

export default Banner;