import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-4">
        <section className="d-flex justify-content-center">
          <a
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#3b5998", transition: "smooth 0.5s" }}
            href="https://www.facebook.com/profile.php?id=61556659643909"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#55acee", transition: "smooth" }}
            href="https://twitter.com/Triveda_offi"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#ac2bac", transition: "smooth" }}
            href="https://www.instagram.com/triveda_official/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#0082ca", transition: "smooth" }}
            href="https://www.linkedin.com/company/trivedhaofficial/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="rm btn btn-floating m-1 "
            style={{
              backgroundColor: "#4f4c4c",
              color: "#000",
              transition: "smooth",
            }}
            href="https://github.com/Trivedhaa/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        <div className="text-center text-white mt-3">
          &copy; 2024 All rights are reserved by{" "}
          <a href="/" className="">
            Trivedagroup.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
