import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import down3 from "../../Assets/Projects/down3.jpg";
import down2 from "../../Assets/Projects/down2.jpg";
import down from "../../Assets/Projects/down.jpg";
import down4 from "../../Assets/Projects/down4.jpg";
import down1 from "../../Assets/Projects/down1.jpg";
function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={down3}
              isBlog={false}
              title="E-Commerce website"
              description="Made a dynamic e-commerce website  with react,tailwind css and node.js for backend where we used razor pay for payment and shiprocket for shiping the orders.And we made a admin page for controlling the orders,  and "
              ghLink=""
              demoLink="https://augmentedrealitywardrobe.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={down}
              isBlog={false}
              title="Atharva"
              description="A website for a data science communtiy in Malla Reddy Engineering College for promoting a event.We build a static page for the Data Science communty. "
              ghLink="https://github.com/charankosari/atharva"
              demoLink="https://atharvadsc.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={down1}
              isBlog={false}
              title="Portfolio"
              description=" personal portfolio page build with React.js and Tailwind Css which  showcases my skills that i had learned and about my education ."
              ghLink=""
              demoLink="https://charankosari.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={down2}
              isBlog={false}
              title="Shop rags"
              description="In order to reduce queues in shopping malls after the shopping at last the you can pay with any upi, debit cards or credit cards ,bank transfer. At last they have submit the tag which are attached to items the count and tags must be tally then they allowed to send out "
              ghLink="https://github.com/rakeshkrishna74/portfolio"
              demoLink="https://shoprags.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={down4}
              isBlog={false}
              title="Todos app"
              description="A todo app for maintaining proper track of things what we do and what we want to do and what we are doing right now."
              ghLink=""
              demoLink="https://todolistls.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
