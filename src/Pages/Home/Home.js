import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ProjectDetails from "../ProjectDetails";
import Banner from "./Banner/Banner";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
