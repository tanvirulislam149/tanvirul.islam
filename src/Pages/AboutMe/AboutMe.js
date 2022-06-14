import React from 'react';
import pic from "../../Images/aboutme.jpg"

const AboutMe = () => {
    return (
        <div className='md:mx-20 mx-5 my-10 md:flex flex-row-reverse'>

            <div className='banner-font md:px-10 md:pt-48'>
                <p className='text-4xl md:pb-10 text-green-300'>About Me</p>
                <p className='text-xl py-5'>Hello! I am Tanvirul Islam from Chattogram, Bangladesh</p>
                <p className='text-justify text-xl'>
                    I am a Frontend Web Developer specializing in React. I have extensive skill in developing and deploying websites utilizing various open source packages. I also specialize in JavaScript, Bootstrap, Tailwind and have some projects done with these. In addition, I am comfortable to work with NodeJs, ExpressJs, MongoDB.
                </p>
                <p className='text-xl py-5'>Take a look at my work and get in touch.</p>
            </div>
            <div className=''>
                <img src={pic} alt="" />
            </div>
        </div>

    );
};

export default AboutMe;