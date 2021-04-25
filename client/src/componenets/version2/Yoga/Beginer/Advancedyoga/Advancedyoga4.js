import React from "react";
import { Link } from "react-router-dom";
import astavakrasana from "../astavakrasana.jfif";
import { motion } from "framer-motion";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import Three from "../Images/three.png";
import Four from "../Images/four.png";
import Five from "../Images/five.png";
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

function Advancedyoga4() {
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
            <Link to="/advanceyoga">
              <img src={One} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/advanceyoga1">
              <img src={Two} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advanceyoga2">
              <img src={Three} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advanceyoga3">
              <img src={Four} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advanceyoga4">
              <img src={Five} alt="image" width="80px" height="80px"></img>
            </Link>
          </motion.div>
        </div>
        <div className="workoutmain">
          <div className="yoga_main">
            <div className="main_left">
              <img
                src={astavakrasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="image"
              ></img>
            </div>
            <div className="main_right">
              <h1>Astavakrasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "25px" }}>
                <br></br>1. Start sitting in comfortable position, with legs
                extending out in front of you.
                <br></br>2. Next, bend your left knee and bring the sole of your
                left leg to the floor, close to left buttock.
                <br></br>3. Slowly, lift your left foot off the floor and bring
                your shin (fore part of the lower leg) parallel to the floor.
                <br></br>4. Try to reach left knee as high as possible on the
                left arm, it might take you many adjustments to place knee at
                the correct position (keep on trying).
                <br></br>5. To support the position place both palms on the
                floor on the higher side of your hips and keep straightening
                your right leg.
                <br></br>6. Lift your body off the floor (with both legs) and
                bring the foot forward your body to join left and right ankle.
                <br></br>7. Now bend your arms to 90 degrees and slowly shift
                the weight of your body forward while keeping your position
                parallel to the floor. Simultaneously, move both legs over to
                the left.
                <br></br>8. Try to keep your legs as straight as possible, lift
                your head.
                <br></br>9. Keep your arms straight and shift your weight to
                your butt with control.
                <br></br>10. Hold the pose as long as you can and repeat the
                posture with another side.
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

export default Advancedyoga4;
