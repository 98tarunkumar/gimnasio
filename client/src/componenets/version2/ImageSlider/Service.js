import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg1 from  "../images/work4.jfif"
import bg2 from "../images/yoga 2.jfif"
import bg3 from "../images/cal3.jfif"
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
function Service() {
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
      <div className="services_main">
        <h1>Our Services</h1>
        <div className="cards-done">
          <Link to="/workout" className="yogalinkgym">
            <div className="card1">
              <div className="card1-image">
                <img src={bg1} alt='imt' style={{width:'100%',height:'100%'}}></img>
              </div>
              <div className="card1-text">
                <span className="date1">Workout</span>
              </div>
            </div>
          </Link>
          <Link to="./yoga" className="yogalinkgym">
            <div className="card2">
              <div className="card2-image">
                
              <img src={bg2} alt="ime" style={{width:'100%',height:'100%'}}></img>
              </div>
              <div className="card2-text">
                <span className="date2">YOGA</span>
              </div>
            </div>
          </Link>
          <Link to="./calestenics" className="yogalinkgym">
            <div className="card3">
              <div className="card3-image">
                
              <img src={bg3}  alt='ime' style={{width:'100%',height:'100%'}}></img>
              </div>
              <div className="card3-text">
                <span className="date3">Calisthenics</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Service;
