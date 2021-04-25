import React from "react";

import { Link } from "react-router-dom";
import tadasana from "../tadasana.jpg";
import uttanasana from "../uttanasana.jpg";
import Chaturanga from "../Chaturanga.jpg";
import Adho from "../Adho.jpg";
import Balasana from "../Balasana.jpg";
import { motion } from "framer-motion";
import "../Begin/Beginmain.css";
import One from '../Images/one.png'
import Two from '../Images/two.png'
import Three from '../Images/three.png'
import Four from '../Images/four.png'
import Five from '../Images/five.png'
import Home from '../Images/home.png'
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
function Bageinmain4() {
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
              <img src={One} alt="image" width="80px" height="80px" ></img></Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/yogabeginer1">
              <img src={Two} alt="image" width="80px" height="80px" ></img></Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./yogabeginer2">
              <img src={Three} alt="image" width="80px" height="80px" ></img></Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./yogabeginer3">
              <img src={Four} alt="image" width="80px" height="80px" ></img></Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./yogabeginer4">
              <img src={Five} alt="image" width="80px" height="80px" ></img></Link>
          </motion.div>
        </div>
        <div className="workoutmain">
          <div className="yoga_main">
            <div className="main_left">
              <img src={Balasana} width="100%" height="100%" style={{borderRadius:"20px"}} ></img>
            </div>
            <div className="main_right">
                <h1>Balasana</h1>
              <h2>STEPS</h2>
              <h3 style={{fontSize:'26px'}} >
              <br></br>1. In Downward-Facing Dog, take a deep breath. On the
                exhale, release your knees to the floor, pull your hips back to your
                heels, and rest your forehead on the floor.
                <br></br>
                <br></br>2. You can either leave your arms stretched in front of you
                or pull them next to your body, hands resting palms up near your
                feet.
                <br></br>
                <br></br>3. This is a restorative pose, so adjust it to your needs.
                If you want to widen your knees a bit, do so. Like all forward
                folds, this pose is nurturing. It relaxes your spine, shoulders, and
                neck, and massages your internal organs.
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

export default Bageinmain4;
