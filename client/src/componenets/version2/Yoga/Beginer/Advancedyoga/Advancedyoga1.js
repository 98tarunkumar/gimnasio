import React from "react";
import { Link } from "react-router-dom";
import tittibhasana from "../tittibhasana.jfif";
import { motion } from "framer-motion";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import Three from "../Images/three.png";
import Four from "../Images/four.png";
import Five from "../Images/five.png";
import cancel from "../Images/cancel.png";
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

function Advancedyoga1() {
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
            <Link to="/advanceyoga">
              <img src={One} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/advanceyoga1">
              <img src={Two} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advanceyoga2">
              <img src={Three} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advanceyoga3">
              <img src={Four} alt="ime" width="80px" height="80px"></img>
            </Link>
          </motion.div>
          <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="./advanceyoga4">
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
            <div className="main_right">
              <h1>Tittibhasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "20px" }}>
                <br></br>1. Start the Asana with Adho Mukha Svanasana.
                <br></br>2. Now walk towards your hands with the end goal that
                your feet are before your hands. At that point, let your hands
                through your legs, and press them behind the calves, with the
                end goal that you slither further through your legs.
                <br></br>3. After that keep your arms and shoulders as long ways
                behind your thighs as you can put them. Immovably put your palms
                behind your feet to such an extent that your heels are held with
                your thumb and pointer finger (index finger).
                <br></br>4. Delicately twist your knees and squat as you rest
                the back of your legs as near your shoulders as you can.
                <br></br>5. Once your fingers and palms are spread, make sure
                you shift your body weight onto them. Lift your feet off the
                floor. Straighten your legs first. Then, once you stabilize,
                straighten your arms. Squeeze your thighs against the upper arms
                to gain more height. At that point spread your fingers and
                palms, ensure you move your body weight onto them. Raise your
                feet off the floor. Rectify (straighten) your legs first. After
                that squeeze your thighs against the upper arms to acquire
                stature.
                <br></br>6. Remain in the pose about 30 to 60 seconds. In this
                there is no repetition, you want to repeat this process then do
                it for 2 or 3 times.
              </h3>
            </div>
            <div className="main_left">
              <img
                src={tittibhasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="ime"
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

export default Advancedyoga1;
