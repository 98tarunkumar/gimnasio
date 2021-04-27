import React from "react";
import "./Slider.css";
import wall from "../images/wall2.jfif";
import logo from "../images/logo2.PNG"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Bot from "../../Bot/Bot"
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
const Slider = () => {
  return (
    <>
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
            <img src={logo} alt="imaaa"></img>
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
        <img src={wall} className="slider_bg" alt='ims' ></img>
        <div className="slider_maintext">
          <div className="slider_text">Gimnasio</div>
          <div className="slider_desc">A little effort everyday</div>
          <Link to="/service" className="yogalinkgym">
            <button className="slider_btn">Get Started</button>
          </Link>
        </div>
        <div className="bot">
          <Bot/>
        </div>
      </motion.div>
      {/* <div className="slidergym">
        <div className="slidesgym">
          <input type="radio" name="radiobtn" id="radio1"></input>
          <input type="radio" name="radiobtn" id="radio2"></input>
          <input type="radio" name="radiobtn" id="radio3"></input>
          <input type="radio" name="radiobtn" id="radio4"></input>

          <div className="slidegym first">
            <div className="firstboxgym">
              <img
                className="backgroundimggym"
                src={wall}
                width="100%"
                height="100%"
                alt=" "
              ></img>
              <div className="text_frontgym">
                <div className="headinggym">Gimnasio</div>
                <div className="headingtextgym">A little effort everyday</div>
                <div className="getstartedgym">
                  <Link to="./login" class="first-linkgym">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="slidegym">
            <div className="thirdbox">
              <img
                className="secondbg"
                src={services}
                width="100%"
                height="100%"
                alt=" "
              ></img>
              <div className="heading-box3">Our Services</div>
              <div className="cards-done">
                <a href="/">
                  <div className="card1">
                    <div className="card1-image"></div>
                    <div className="card1-text">
                      <span className="date1">Workout</span>
                    </div>
                  </div>
                </a>
                <Link to="./yoga" className="yogalinkgym">
                  <div className="card2">
                    <div className="card2-image"></div>
                    <div className="card2-text">
                      <span className="date2">YOGA</span>
                    </div>
                  </div>
                </Link>
                <a href="/">
                  <div className="card3">
                    <div className="card3-image"></div>
                    <div className="card3-text">
                      <span className="date3">Calisthenics</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="slidegym">
            <div className="secondbox">
              <img
                className="secondbg"
                src={about}
                width="100%"
                height="100%"
                alt=" "
              ></img>

              <Onecard />
            </div>
          </div>
          <div className="slidegym">
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
                    Join Us@
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
                    Queries/Suggestions
                    <div className="form-group">
                      <input type="text" className="form-control" id="Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <button className="btn  btn-info">
                      <center>Submit</center>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navigation-auto">
            <div className="autobtn1"></div>
            <div className="autobtn2"></div>
            <div className="autobtn3"></div>
            <div className="autobtn4"></div>
          </div>
        </div>
        <div className="navigation-manualgym">
          <label for="radio1" className="manual-buttongym"></label>
          <label for="radio2" className="manual-buttongym"></label>
          <label for="radio3" className="manual-buttongym"></label>
          <label for="radio4" className="manual-buttongym"></label>
        </div>
      </div> */}
    </>
  );
};

export default Slider;
