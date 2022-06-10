import React from 'react';
import pic from "../../Images/portfolio.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className='md:flex md:relative md:px-20 h-screen items-center'>
            <div className='banner-font pt-28 pb-10 px-5 md:pb-0 md:px-0 md:pt-0'>
                <p className='text-5xl'>Hello, I am</p>
                <p className='text-7xl'>Tanvirul Islam</p>
                <p className='text-3xl'>Frontend Developer</p>
            </div>
            <div>
                <img className='md:w-96 md:fixed md:top-28 md:right-96' src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;