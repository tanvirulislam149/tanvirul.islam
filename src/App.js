import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import ScrollToTop from "./Pages/ScrollToTop";
import Lenis from "@studio-freight/lenis";

function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* <div className="background text-white"> */}
      <Header></Header>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/project/:projectId"
            element={<ProjectDetails></ProjectDetails>}
          ></Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
