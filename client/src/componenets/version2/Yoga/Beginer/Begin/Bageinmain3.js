import React from "react";

import { Link } from "react-router-dom";
import tadasana from "../tadasana.jpg";
import uttanasana from "../uttanasana.jpg";
import Chaturanga from "../Chaturanga.jpg";
import Adho from "../Adho.jpg";
import Balasana from "../Balasana.jpg";
import { motion } from "framer-motion";
import "./Beginmain.css";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import Three from "../Images/three.png";
import Four from "../Images/four.png";
import Five from "../Images/five.png";
import Home from "../Images/home.png";
import Bot from "../../../../Bot/Bot";
import Stopwatch from "../../../../Stopwatch/Stopwatch";

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
function Bageinmain3() {
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
            <Link to="./yoga">
              <img src={Home} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/yogabeginer">
              <img src={One} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/yogabeginer1">
              <img src={Two} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./yogabeginer2">
              <img src={Three} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./yogabeginer3">
              <img src={Four} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./yogabeginer4">
              <img src={Five} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
        </div>
        <div className="workoutmain">
          <div className="yoga_main">
            <div className="main_right">
              <h1>Adho Aasan</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "30px" }}>
                <br></br> 1. From Plank Pose, push into your hands and lift your
                hips up and back on the inhale. One thing that can be tricky
                with this pose is, again, keeping your shoulders engaged but not
                working too hard, and keeping a neutral spine.
                <br></br>
                <br></br>2. Your legs should be straight, and your heels working
                toward the floor. There will probably be some space between your
                heels and the floor. You could be very flexible, but if your
                legs are a bit on the long side, you probably won’t have your
                heels all the way to the floor. That’s fine. Keep your legs
                active and heels reaching toward the ground.
                <br></br>
                <br></br>3. Your first time in this pose, pedal out your feet a
                little to warm up your leg muscles.
              </h3>
            </div>
            <div className="main_left">
              <img
                src={Adho}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
              ></img>
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

export default Bageinmain3;
