import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactPage from "../src/Contact";
import Footer from "../src/components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Router>
      <div
        className="App"
        id={"scroll"}
        data-aos="fade-up"
        data-aos-easing="ease-out-sine"
        data-aos-duration="1000"
        style={{ paddingLeft: "0px" }}
      >
        <Navbar />
        <Home />
        <Projects />
        <About />
        <ContactPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
