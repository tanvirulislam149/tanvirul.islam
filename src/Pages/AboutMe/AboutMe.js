import React from "react";
import pic from "../../Images/aboutme.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="md:p-20 py-10 px-5 md:flex about-bg relative">
      <div className="md:w-4/12">
        <div className="flex pb-8">
          <div className="rounded-full bg-green-500 h-6 w-6"></div>
          <div className="mx-3 rounded-full bg-green-500 h-6 w-6"></div>
          <div className="rounded-full bg-green-500 h-6 w-6"></div>
        </div>
        <div className="text-font text-xl text-justify">
          <p className="banner-font md:text-7xl text-5xl text-green-500">ABOUT ME</p>
          <p className="text-xl py-5">
            Hello! I am Tanvirul Islam from Chattogram, Bangladesh
          </p>
          <p>
            I am a Frontend Web Developer specializing in React. I have
            extensive skill in developing and deploying websites utilizing
            various open source packages. I also specialize in JavaScript,
            Bootstrap, Tailwind and have some projects done with these. In
            addition, I am comfortable to work with NodeJs, ExpressJs, MongoDB.
          </p>
          <p className="text-xl py-5">
            Take a look at my work and get in touch.
          </p>
        </div>
      </div>
      <div className="md:w-5/12 md:ml-48 py-20">
        <div className="h-full p-56 bg-green-500 invisible md:visible absolute top-0 right-0"></div>
        <img style={{border: "16px white solid"}} className="md:absolute md:w-4/12 px-0" src="https://i.ibb.co/D7msbHw/aboutme.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutMe;