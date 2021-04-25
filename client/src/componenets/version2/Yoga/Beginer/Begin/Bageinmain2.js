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
function Bageinmain2() {
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
              <img src={Chaturanga} width="100%" height="100%" style={{borderRadius:"20px"}} ></img>
            </div>
            <div className="main_right">
            <h1>Chaturanga</h1>
              <h2>STEPS</h2>
              <h3 style={{fontSize:'26px'}} >
              <br></br>1. From Forward Fold, put your hands flat on the floor,
                bending your knees as much as needed to do so. Step back one leg at
                a time, until you’re in a high Plank Pose.
                <br></br>
                <br></br>2. Press into your hands, keep your legs parallel and
                engaged, and pull your bellybutton toward your spine.
                <br></br>
                <br></br>3. Take a few deep breaths here, working your core and your
                arms.
                <br></br>
                <br></br>It’s easy to drop a little too much and get “banana back”
                or to hunch your shoulders. A good way to figure this pose out as a
                beginner is to get a friend to look at the shape you’re making from
                the side.
                <br></br>
                <br></br>Your upper body, from your hands on the floor, up to your
                hips, should be relatively straight, allowing for some curves due to
                natural spine curves.
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

export default Bageinmain2;
