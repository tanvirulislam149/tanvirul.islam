import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ProjectDetails from "../ProjectDetails";
import Banner from "./Banner/Banner";
import ContactMe from "./ContactMe/ContactMe";
import Education from "./Education/Education";
import Footer from "./footer/footer";
import Projects from "./Projects/Projects";
import Skills from "./Skills";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
