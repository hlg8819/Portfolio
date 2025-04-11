//#region IMPORTS
//*ADDONS
import { Route, BrowserRouter, Routes } from "react-router-dom";
//*COMPONENTS
import About from "./Components/AboutMe/About";
import Contact from "./Components/Contact/Contact";
import DigitalResume from "./Components/AboutMe/DigitalResume/DigitalResume";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import ProjectsControl from "./Components/Projects/ProjectsControl";
import ProjectsAutomation from "./Components/Projects/ProjectsAutomation";
import ProjectsResearch from "./Components/Projects/ProjectsResearch";
import ProjectsVR from "./Components/Projects/ProjectsVR";
import ProjectsAll from "./Components/Projects/ProjectsAll";
import ProjectsPublications from "./Components/Projects/ProjectsPublications";
import ProjectsEmbedded from "./Components/Projects/ProjectsEmbedded";
//*CSS
import './App.css';
//#endregion

function App() {
  //#region HTML
  return (
    <BrowserRouter>
      <div className="App">
        <div className="minPage">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="projects" element={<Projects />} />
            <Route exact path="digitalcv" element={<DigitalResume />} />
            <Route exact path="control" element={<ProjectsControl />} />
            <Route exact path="automation" element={<ProjectsAutomation />} />
            <Route exact path="vr" element={<ProjectsVR />} />
            <Route exact path="research" element={<ProjectsResearch />} />
            <Route exact path="allprojects" element={<ProjectsAll />} />
            <Route exact path="publications" element={<ProjectsPublications />} />
            <Route exact path="embedded" element={<ProjectsEmbedded />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
  //#endregion
}

export default App;
