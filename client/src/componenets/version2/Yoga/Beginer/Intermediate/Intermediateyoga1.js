import React from "react";

import { Link } from "react-router-dom";
import camatkarasana from "../camatkarasana.jpg";
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

function Intermediateyoga1() {
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
            <div className="main_right">
              <h1>Camatkarasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "25px" }}>
                <br></br> 1. You should begin this pose by performing the Adho
                Mukha Svanasana (Downward facing dog).
                <br></br>2. Now, bring your body weight into your right hand and
                the outside of the right heel like you are performing the
                Vasisthasana (Side plank pose).
                <br></br>3. While breathing in, putting your right hand strong
                with clawing the fingers, and allow your hips to be lifted as
                with buoyancy.
                <br></br>4. While breathing out, move your left foot back and
                place the ball of the left foot on the floor.
                <br></br>5. After that curl your upper back and soften your
                shoulder blades.
                <br></br>6. Inhaling deeply, lift your hips higher, curl your
                head back, and extend your lifted arm and stretch it backward.
                <br></br>7. Make sure press down your legs and right hand to
                more buoyancy in the hips.
                <br></br>8. Then, hold the final pose and around 5 to 10
                breaths.
                <br></br>9. Repeat the same position in the other direction.
              </h3>
            </div>
            <div className="main_left">
              <img
                src={camatkarasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="image"
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

export default Intermediateyoga1;
