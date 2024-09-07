import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import down3 from "../../Assets/Projects/down3.jpg";
import down from "../../Assets/Projects/down.jpg";
import down1 from "../../Assets/Projects/down1.jpg";
import bma from "../../Assets/Projects/bma.png";
import oneapp from "../../Assets/Projects/oneapp.png";
import Gymee from "../../Assets/Projects/gymee.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <Container
      fluid
      className="project-section"
      id="projects"
      style={{ paddingTop: "0px" }}
    >
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are the few works,which we have done earlier
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            data-aos="flip-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <ProjectCard
              imgPath={down3}
              isBlog={false}
              title="E-Commerce website"
              description="Made a dynamic e-commerce website  with react,tailwind css and node.js for backend where we used razor pay for payment and shiprocket for shiping the orders.And we made a admin page for controlling the orders,  and "
              demoLink=""
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="flip-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <ProjectCard
              imgPath={bma}
              isBlog={false}
              title="BookMyAppointments"
              description="A booking application where we book appointments for doctors or labs from application or website."
              demoLink="https://bookmyappointments.in"
            />
          </Col>
          <Col
            md={4}
            className="project-card"
            data-aos="flip-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <ProjectCard
              imgPath={Gymee}
              isBlog={false}
              title="Gymee"
              description="A Gym management application"
              demoLink=""
            />
          </Col>
          <Col
            md={4}
            className="project-card"
            data-aos="flip-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <ProjectCard
              imgPath={oneapp}
              isBlog={false}
              title="One App"
              description="A blue collar service booking website in california which includes ai chatbot."
              demoLink="https://oneappusers.netlify.app/"
            />
          </Col>
          <Col
            md={4}
            className="project-card"
            data-aos="flip-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <ProjectCard
              imgPath={down}
              isBlog={false}
              title="Atharva"
              description="A website for a data science communtiy in Malla Reddy Engineering College for promoting a event.We build a static page for the Data Science communty. "
              demoLink="https://atharvadsc.in"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="flip-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <ProjectCard
              imgPath={down1}
              isBlog={false}
              title="Portfolio"
              description=" personal portfolio page build with React.js and Tailwind Css which  showcases my skills that i had learned and about my education ."
              demoLink="https://charankosari.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
