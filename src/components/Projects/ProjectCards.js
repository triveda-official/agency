import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import Swal from "sweetalert2";
import { useEffect } from "react";

function ProjectCards(props) {
  const handleClick = (e) => {
    if (props.demoLink == "") {
      e.preventDefault();
      Swal.fire({
        title: "Project Under Development",
        text: "This project demo is not yet available.",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#3085d6",
        background: "#f9f9f9",
        customClass: {
          popup: "animated fadeInDown faster",
        },
      });
    } else {
      window.open(props.demoLink, "_blank");
    }
  };

  return (
    <Card className="project-card-view">
      <div className="d-flex justify-content-center">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "220px",
            height: "180px",
            objectFit: "cover",
            padding: "0px",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", gap: "0px" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        <Button
          variant="primary"
          onClick={handleClick}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
