import React from "react";
import Corousel from "./corousel/Corousel";
import { CorouselData } from "./corousel/CorouselData";
import "./HOme.css";
import Nav from "./nav/Nav";
import Upper from "./upper/Upper";

import banner from "../Images/banner.jpg";
import logo from "../Images/download.png";
import About from "../Images/about.jpg";
import Ping from "../Images/ping1.svg";
import {
  FaBeer,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HOme = () => {
  return (
    <div>
      <div className="box">
        <div className="nav">
          <div className="logo">
            <img src={logo} className="loo"></img>
          </div>
          <div className="innerbox">
            <span className="tag">Home</span>
            <span className="tag">Services</span>
            <span className="tag">About</span>
            <span className="tag">Contact</span>
          </div>
          <div className="signin">Sign in</div>
        </div>

        <div className="content">
          <div className="banned">
            <div className="txt">WorkFlow</div>
            <div className="text">cm'on....Hit me</div>
            <button className="fbtn">Explore Now</button>
            <img src={banner} className="banner"></img>
          </div>
        </div>
        <div className="secondbox">
          <section className="slider">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" checked />
            <input type="radio" name="slider" id="s3" />
            <label for="s1" id="slide1">
              <img
                src="https://upl.stack.com/wp-content/uploads/2020/03/11113000/Morning-Workout.jpg "
                height="20%"
                width="20%"
              ></img>
            </label>
            <label for="s2" id="slide2">
              <img
                src="https://image.shutterstock.com/image-photo/calisthenics-instructor-trains-alone-home-260nw-1767719180.jpg "
                height="20%"
                width="20%"
              ></img>
            </label>
            <label for="s3" id="slide3">
              <img
                src="https://static.toiimg.com/photo/75116557.cms "
                height="20%"
                width="20%"
              ></img>
            </label>
          </section>
        </div>

        <div className="thirdbox">
          <div className="aboutimageback">
            <h1 className="thirdh1">About Us</h1>
          </div>
          <img src={About} className="aboutimage"></img>
        </div>

        <div className="footer">
          <div className="f1">
            <div className="ftext">
              Home
              <br />
              <br />
              Services
              <br />
              <br />
              About
              <br />
              <br />
              Contact
              <br />
              <br />
            </div>
          </div>
          <div className="f2">
            {/* <FaBeer/> */}
            <div className="fcontent">
              <div className="fftext">Copyright Workflow EST. 2000</div>
            </div>
            <div className="ficons">
              <FaFacebookSquare className="icc" />
              <FaTwitterSquare className="icc" />
              <FaInstagram className="icc" />
              <SiGmail className="icc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOme;

{
  /* <div className="out">
            <div className="first">
              <div className="image1">
                <img
                  src="https://upl.stack.com/wp-content/uploads/2020/03/11113000/Morning-Workout.jpg"
                  className="firstimg"
                />
                Workout
              </div>
            </div>
            <div className="second">
              <div className="image1">
                <img
                  src="https://image.shutterstock.com/image-photo/calisthenics-instructor-trains-alone-home-260nw-1767719180.jpg"
                  className="firstimg"
                ></img>
                Calisthenics
              </div>
            </div>
            <div className="third">
              <div className="image1">
                <img
                  src="https://static.toiimg.com/photo/75116557.cms"
                  className="firstimg"
                ></img>
                Yoga
              </div>
            </div>
          </div> */
}
