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
function Cpage3() {
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
            <Link to="/calbegin1">
              <img src={One} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/calbegin2">
              <img src={Two} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./calbegin3">
              <img src={Three} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./calbegin4">
              <img src={Four} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./calbegin5">
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
              <h1>Tricep dip</h1>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=6kALZikXxLc"
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
                <br></br>1. Stand inside a dip bar and use your arms and
                shoulders to lift you off the ground.
                <br></br>
                <br></br>2.Bend your elbows back using your tricep muscles to
                move you up and down.
                <br></br>
                <br></br>If you do not have a dip bar, you can also perform dips
                off an exercise ball or bench by keeping your feet on the ground
                and knees bent at a 90-degree angle.
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

export default Cpage3;
