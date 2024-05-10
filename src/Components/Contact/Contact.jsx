import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-Container_contact">
      <h2>Contact Me</h2>
      <div className="messages-contact-main">
        <div className="email-logos-contact-main">
          <div className="gamil-contact">
            <i className="fa-solid fa-paper-plane"></i>
            <span>abcxyz@gmail.com</span>
          </div>
          <div className="gamil-contact">
            <i className="fa-solid fa-square-phone"></i>
            <span>+977 9889989898</span>
          </div>
          <div className="logos-contact">
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="form-message-contact">
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required=""
            />
            <input
              type="email"
              className="email-message"
              name="Email"
              placeholder="Your Email"
              required=""
            />
            <textarea
              name="Message"
              rows={6}
              placeholder="Message"
              defaultValue={""}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
