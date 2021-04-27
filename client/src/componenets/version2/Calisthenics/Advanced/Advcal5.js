import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import "../../Yoga/Beginer/Begin/Beginmain.css";
import One from "../../Yoga/Beginer/Images/one.png";
import Two from "../../Yoga/Beginer/Images/two.png";
import Three from "../../Yoga/Beginer/Images/three.png";
import Four from "../../Yoga/Beginer/Images/four.png";
import Five from "../../Yoga/Beginer/Images/five.png";
import Home from "../../Yoga/Beginer/Images/home.png";
import cancel from "../../Yoga/Beginer/Images/cancel.png";
import Bot from "../../../Bot/Bot";
import Stopwatch from "../../../Stopwatch/Stopwatch";
import ReactPlayer from "react-player/youtube";

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
function Advcal5() {
  return (
    <div className="main">
      <motion.div
        className="workoutbody"
        // initial={{ scaleX: 0 }}
        // animate={{ scaleX: 1 }}
        // exit={{ scaleX: 0 }}

        initial="out"
        animate="in"
        exit="out"
        variants={pageTransisition}
        transition={{ duration: 0.3 }}
      >
        <div className="workoutsidenav">
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./calestenics">
              <img src={Home} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/advancecal1">
              <img src={One} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/advancecal2">
              <img src={Two} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advancecal3">
              <img src={Three} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advancecal4">
              <img src={Four} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advancecal5">
              <img src={Five} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/">
              <img src={cancel} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
        </div>
        <div className="workoutmain">
          <div className="yoga_main">
            <div className="main_left" style={{ marginTop: "-60px" }}>
              <h1>Ring dip</h1>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=EznLCDBAPIU"
                width="80%"
                height="60%"
                style={{ borderRadius: "20px" }}
                // light="https://i.ytimg.com/an_webp/rr6eFNNDQdU/mqdefault_6s.webp?du=3000&sqp=CJGjkIQG&rs=AOn4CLBIIfGUP97zqcaarv9-jV2vC2Oojg"
              />
            </div>
            <div className="main_right" style={{ marginTop: "100px" }}>
              {/* <h1>Pullups</h1> */}
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "25px" }}>
                <br></br>1. Set a pair of rings at roughly chest height and
                grasp the handles using a neutral grip (palms facing).
                <br></br>
                <br></br>2. Initiate the dip by unlocking the elbows and slowly
                lowering the body until the forearms are almost parallel with
                the floor.
                <br></br>
                <br></br>3. Control the descent to parallel and then drive back
                to the starting position by pushing through the palms.
                <br></br>
                <br></br>3. Repeat for the desired number of repetitions.
                <br></br>
              </h3>
            </div>
          </div>

          <div className="bot">
            <Bot />
          </div>
          <Stopwatch />
        </div>
      </motion.div>
    </div>
  );
}

export default Advcal5;
