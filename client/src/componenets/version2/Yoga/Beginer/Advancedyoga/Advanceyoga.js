import React from "react";
import { Link } from "react-router-dom";
import mayurasana from "../mayurasana.jpg";
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

function Advanceyoga() {
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
                src={mayurasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="image"
              ></img>
            </div>
            <div className="main_right">
              <h1>Mayurasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "25px" }}>
                <br></br>1. Start this pose by sitting on your heels. Keep some
                distance between your both knees.
                <br></br>2. Keep your hands on the ground with fingers points
                towards your body. Slowly bend your elbows and press them
                towards your belly.
                <br></br>3. Keep your abdomen firm. For this place your head on
                the ground, and work up the quality in your
                stomach.Mayurasana-Peacock-Pose-steps
                <br></br>4. Now stretch your legs out, in a way that your knees
                are straight and your feet are facing the floor.
                <br></br>5. Keep your shoulder bones strong and pushed into your
                back. Fix your bum and lift your head and look forward.
                <br></br>6. Move your body weight forward and raise your legs
                from the ground. Lift your body by your hands and it should be
                parallel to the ground.
                <br></br>7. Remain in this pose about 30 seconds and you can
                increase the holding time about one minute by daily practice.
                <br></br>8. After that put your head and feet on the floor and
                release the pose
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

export default Advanceyoga;
