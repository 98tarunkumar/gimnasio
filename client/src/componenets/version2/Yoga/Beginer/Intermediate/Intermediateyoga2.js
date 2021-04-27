import React from "react";

import { Link } from "react-router-dom";
import marichyasana from "../marichyasana.jpg";
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

function Intermediateyoga2() {
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
                src={marichyasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="ime"
              ></img>
            </div>
            <div className="main_right">
              <h1>Marichyasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "25px" }}>
                <br></br>1. Sit in Dandasana (legs stretched forward with back
                straight). Put your palms on the ground and breathe slowly.
                <br></br>2. Inhale and fold your right knee towards your chest.
                The leg of your right foot should be flat on the ground,
                touching your right hip. Bend your left foot slightly inward,
                rest your left heel firmly on the ground and push the big toe of
                your left foot away from your body. This will help adjust your
                overall posture.
                <br></br>3. Exhale and turn your upper body a bit to the left
                side.
                <br></br>4. Bend your upper body forward so that your right
                shoulder presses inward to your right knee.
                <br></br>5. Now bend your right hand and wrap it over your right
                leg and spine. Then bend your left hand so that it touches the
                right side. Try to hold your hands together on your back.
                <br></br>6. Maintain the asana for about 30-60 seconds. Exhale
                slowly and exhale.
                <br></br>7. Now get out of the pose slowly by freeing your hands
                and straightening your back.
                <br></br>8. After exiting the posture, straighten your right leg
                and return to the state of Dandasana.
                <br></br>9. Repeat the same asana on the left side.
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

export default Intermediateyoga2;
