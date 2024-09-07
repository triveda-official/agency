import React, { useState } from "react";
import "./Contact.css";
import ConfettiExplosion from "react-confetti-explosion";
const Contact = () => {
  const [explode, setExplode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    setExplode(true);
    // Reset explode state after a delay to allow confetti animation to finish
    setTimeout(() => {
      setExplode(false);
    }, 3000); // Adjust the delay as needed to match your confetti animation duration
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create the mailto link
    const mailtoLink = `mailto:trivedaofficial@gmail.com?subject=Triveda%20Agency&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="wrap" id="contact">
      <h1 style={{ color: "white" }}>Contact Us</h1>
      {explode && <ConfettiExplosion />}

      <br />
      <div id="form-wrap">
        <form onSubmit={handleSubmit}>
          <p>Send a message</p>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
          <br />
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Mail"
          />
          <br />
          <br />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" style={{ cursor: "pointer" }} className="send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
