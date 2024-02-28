import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Triveda is more than an agency; it represents the inception of a
            grand vision. Founded by Vallabhaneni Lakshmi Suresh Chandra, Kosari
            Shiva Charan, and Miriyala Rakesh Krishna, we are dedicated to
            delivering exceptional services in web development, app development,
            design, and marketing. Our journey commenced with a shared passion
            for innovation and an unwavering commitment to excellence.
          </p>
          <p style={{ textAlign: "justify" }}>
            At Triveda, we believe in transforming ideas into reality and
            empowering businesses to thrive in the digital world. Our team is
            propelled by creativity, expertise, and a customer-centric approach,
            ensuring that each project we undertake becomes a success story. We
            invite you to join us on this exciting journey as we reshape the
            digital landscape together.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
