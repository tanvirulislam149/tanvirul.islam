import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import ScrollToTop from "./Pages/ScrollToTop";

function App() {
  return (
    <div className="bg-black text-white">
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
