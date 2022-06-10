import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import pic from "../../../Images/portfolio.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className='md:flex justify-between md:px-20 h-screen items-center'>
            <div className='banner-font pt-28 pb-10 px-5 md:pb-0 md:px-0 md:pt-0'>
                <p className='text-2xl md:text-5xl'>Hello, I am</p>
                <p className='text-4xl md:text-7xl typing'></p>
                <p className='text-lg md:text-2xl'>Jr. Frontend Developer</p>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="text-lg inline-block px-6 my-4 py-2.5 bg-white hover:text-white border-2 border-white text-black font-medium leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black  active:shadow-lg transition duration-150 ease-in-out"
                ><a href="https://drive.google.com/file/d/1xtZt-wI5v3mjx1y_tmLLntqgv5fLlkC7/view?usp=sharing" target={"blank"}>My Resume</a></button>
            </div>
            <div className='flex items-center'>
                <div className='md:px-5'>
                    <img className='md:w-96' src={pic} alt="" />
                </div>
                <div>
                    <button type="button" class="inline-block p-2 bg-black border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="https://www.facebook.com/md.tanvirul.islam.792/" target={"blank"}><FaFacebookF className='h-6 w-6' /></a></button> <br />
                    <button type="button" class="my-3 inline-block p-2 bg-black border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"> <a href="https://github.com/tanvirulislam149" target={"blank"}><FaGithub className='h-6 w-6' /></a></button> <br />
                    <button type="button" class="inline-block p-2 bg-black border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="https://www.linkedin.com/in/tanvirul-islam-0242b4241" target={"blank"}><FaLinkedinIn className='h-6 w-6' /></a></button> <br />
                </div>
            </div>
        </div >
    );
};

export default Banner;