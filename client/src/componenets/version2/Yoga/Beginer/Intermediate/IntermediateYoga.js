import React from "react";

import { Link } from "react-router-dom";
import vasisthasana from "../vasisthasana.jpg";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import Three from "../Images/three.png";
import Four from "../Images/four.png";
import Five from "../Images/five.png";
import cancel from "../Images/cancel.png";

import { motion } from "framer-motion";
import Home from "../Images/home.png";
import Bot from "../../../../Bot/Bot";
import Stopwatch from "../../../../Stopwatch/Stopwatch";
import "../Begin/Beginmain.css";
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

function IntermediateYoga() {
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
              <img src={Home} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/intermediateyoga">
              <img src={One} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/intermediateyoga1">
              <img src={Two} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./intermediateyoga2">
              <img src={Three} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./intermediateyoga3">
              <img src={Four} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./intermediateyoga4">
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
            <div className="main_left">
              <img
                src={vasisthasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="ime"
              ></img>
            </div>
            <div className="main_right">
              <h1>Vasisthasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "20px" }}>
                <br></br>1. You can start this pose in two positions, either the
                downward facing dog or the plank pose. It is easier to start in
                the plank pose. When you are in the plank pose, press firmly on
                the floor with your shoulders aligned with your wrists.
                <br></br>
                <br></br>2. Roll both the heels of your feet to the right so
                that the outer edge of the foot is lying on the floor. Keep the
                core and legs engaged when turning.
                <br></br>
                <br></br>3. Place the other foot on top of the one lying on the
                floor and ensure that your legs are straightened out.
                <br></br>
                <br></br>4. keeping your core engaged, shift the weight of your
                body on your right arm and lift the left arm upwards as you also
                change the torso to face to the side. Maintain the position of
                the right arm so that you will not lose the form of the pose.
                <br></br>
                <br></br>5. Lift your left hand up straight and in line with the
                right one and ensure that your spine is straight all the way
                through from the top to the tailbone. Align your tailbone with
                your feet to keep your back straight.
                <br></br>
                <br></br>6. hold the position for a set time and then release.
                Alternate to the other side and repeat.
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

export default IntermediateYoga;
