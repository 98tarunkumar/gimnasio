import React from "react";

import { Link } from "react-router-dom";
import tadasana from "../tadasana.jpg";
import uttanasana from "../uttanasana.jpg";
import Chaturanga from "../Chaturanga.jpg";
import Adho from "../Adho.jpg";
import Balasana from "../Balasana.jpg";
import { motion } from "framer-motion";
import "./Beginmain.css";
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
function Bageinmain1() {
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
            
            <div className="main_right">
              <h1>Uttanasana</h1>
              <h2>STEPS</h2>
              <h3 style={{fontSize:'25px'}}>
              <br></br> 1. On your inhale, lift your arms to the sides and up,
                over your head.
                <br></br>
                <br></br>2. On your exhale, release your arms (either in front of
                your body or out to the side, like a swan dive) as you fold your
                torso over your legs. On the first time through, have at least a
                slight bend in your knees. No matter how flexible you are, your
                hamstrings will be cold when starting out, and you’ll want to be
                gentle with them.
                <br></br>
                <br></br>3. As you relax into the pose more, begin to straighten
                your legs as far as feels good. Anything that pinches or is a
                shooting pain should immediately stop your movement. Let gravity do
                the work here — don’t pull yourself down and try to force the fold.
                <br></br>
                <br></br>4. You can put your hands on your shins, your feet, or the
                floor. This passively lengthens your spine and your hamstrings, and
                it’s also a great way to work on balance.
              </h3>
            </div>
            <div className="main_left">
              <img src={uttanasana} width="100%" height="100%" style={{borderRadius:"20px"}} ></img>
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

export default Bageinmain1;
