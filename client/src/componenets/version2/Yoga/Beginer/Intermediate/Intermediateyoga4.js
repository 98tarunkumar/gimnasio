import React from "react";

import { Link } from "react-router-dom";
import viparita from "../viparita.jpg";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import Three from "../Images/three.png";
import Four from "../Images/four.png";
import Five from "../Images/five.png";
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

function Intermediateyoga4() {
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
            <Link to="/intermediateyoga">
              <img src={One} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/intermediateyoga1">
              <img src={Two} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./intermediateyoga2">
              <img src={Three} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./intermediateyoga3">
              <img src={Four} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./intermediateyoga4">
              <img src={Five} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
        </div>
        <div className="workoutmain">
          <div className="yoga_main">
            <div className="main_left">
              <img
                src={viparita}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="image"
              ></img>
            </div>
            <div className="main_right">
              <h1>Viparita</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "20px" }}>
                <br></br>1. Begin in Mountain Pose, standing with feet
                hip-distance apart and arms at the sides. Turn to the left and
                step both feet wide apart, about 4-5 feet. Align the heels.
                <br></br>2. Turn the right foot out 90 degrees, so the toes are
                pointing to the top of the mat. Pivot the left foot slightly
                inwards. The back toes should be at a 45-degree angle.
                <br></br>3. Raise the arms to the side to shoulder-height,
                parallel to the floor. The arms should be aligned directly over
                the legs. With palms facing down, reach actively from fingertip
                to fingertip.
                <br></br>4. Exhale while bending the front knee. Align the knee
                directly over the ankle of the front foot. Take care that the
                front shin is perpendicular to the floor. Sink the hips low,
                eventually bringing the front thigh parallel to the floor. This
                is Warrior II.
                <br></br>5. With the next exhale, drop the left (back) hand to
                the back of the left thigh. With the next inhale, lift the right
                arm straight up, reaching the fingertips toward the ceiling. The
                right bicep should be next to the right ear.
                <br></br>6. Keep the front knee bent and the hips sinking low
                while lengthening through the sides of the waist. Slide the back
                hand further down the leg and come into a slight backbend.
                <br></br>7. Tilt the head slightly and gaze to the right hand’s
                fingertips.
                <br></br>8. Keep the shoulders relaxed, chest lifted and the
                sides of the waist long.
                <br></br>9. Hold for 10-20 breaths.
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

export default Intermediateyoga4;
