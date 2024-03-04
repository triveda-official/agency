import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";

function NavBar() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="ease-out-sine"
      data-aos-duration="1000"
    >
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img
              src={logo}
              className="itsalogo"
              alt="brand"
              style={{ height: "90px", width: "90px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link onClick={() => window.location.replace("/#projects")}>
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Works
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => window.location.replace("/#aboutt")}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                  {/* </Link> */}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => window.location.replace("/#services")}>
                  <IoSettingsOutline style={{ marginBottom: "2px" }} /> Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => window.location.replace("/#contact")}>
                  <BsHeadphones style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
