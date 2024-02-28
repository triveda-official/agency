import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col
              md={7}
              className="home-header"
              data-aos="fade-up"
              data-aos-easing="ease-out-sine"
              data-aos-duration="1000"
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Triveda</strong> can build
              </h1>

              <div style={{padding:50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{ paddingBottom: 20 }}
              data-aos="fade-up"
              data-aos-easing="ease-out-sine"
              data-aos-duration="1000"
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
