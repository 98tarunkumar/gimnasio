import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";
import contact from "../images/contact.jpeg";
import { motion } from "framer-motion";
const pageTransisition = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};
function Contactus() {
  return (
    <motion.div
      className="slider_main"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransisition}
      transition={{ duration: 0.3 }}
    >
      <div className="slider_nav">
        <Link to="/" className="yogalinkgym">
          {/* <h1>Gimnasio</h1> */}
        </Link>
        <Link to="/" className="yogalinkgym">
          <span>HOME</span>
        </Link>
        <Link to="/service" className="yogalinkgym">
          <span>SERVICE</span>
        </Link>
        <Link to="/contactus" className="yogalinkgym">
          <span>CONTACT US</span>
        </Link>
        <Link to="/blog" className="yogalinkgym">
          <span>BLOG</span>
        </Link>
      </div>
      <div className="lastbox">
        <img
          className="secondbg"
          src={contact}
          width="100%"
          height="100%"
          alt=" "
        ></img>
        <div className="heading-last">Contact Us</div>
        <div className="contact-main">
          <div className="left-div">
            <div className="join-us">
              <div style={{ color: "white" }}>Join Us @</div>
              <div className="join-upper">
                <Link to="https://www.instagram.com/">
                  {" "}
                  <div className="join-upper-left"></div>
                </Link>
                <div className="join-upper-right"></div>
              </div>
              <div className="join-lower">
                <div className="join-lower-left"></div>
                <div className="join-lower-right"></div>
              </div>
            </div>
          </div>
          <div className="right-div">
            <div className="query">
              <div style={{ color: "white" }}>Queries/Suggestions</div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  id="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Suggestions"
                  className="form-control"
                  id="Email"
                />
              </div>
              <button
                className="btn  btn-info"
                style={{ marginTop: "10px" }}
                onClick={() => alert("Our Team will soon reachout to you!!..")}
              >
                <center>Submit</center>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contactus;
