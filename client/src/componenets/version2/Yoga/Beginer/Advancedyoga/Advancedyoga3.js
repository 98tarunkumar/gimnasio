import React from "react";
import { Link } from "react-router-dom";
import kasyapasana from "../kasyapasana.jfif";
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

function Advancedyoga3() {
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
              <h1>Kasyapasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "20px" }}>
                <br></br>1. Sit in the center of your mat, facing its long side.
                Come into Half Lotus with your left leg on top. Draw the outer
                edge of your foot deeply into your hip crease. Wrap your left
                arm behind your back, and take hold of your foot.
                <br></br>2. Next, place your right hand on the floor in line
                with your hip and about a foot from your pelvis. Externally
                rotate your arm, and draw your shoulder blade down your back.
                Begin to lean into your right arm and partially straighten your
                bottom, right leg in the opposite direction. This may sound
                complicated, so take a moment to picture yourself doing the full
                pose. Remember, you’ll essentially be in Side Plank—right now,
                you’re simply positioning other body parts for the final pose.
                <br></br>3. Now, it’s time for the hard work. You may have to
                experiment with how much your bottom knee is bent before you
                lift. I start with my knee bent about 45 degrees. Maintaining
                the external rotation and scapular engagement of your right arm,
                lean more of your weight into the right hand. With your right
                leg straight, press the outer edge of your right foot into the
                floor, and lift your hips. You may need to practice this step
                many times. If you’re able to lift your hips and maintain the
                bind, take a few breaths and savor the posture. Open the left
                side of your chest toward the ceiling, draw your front ribs in,
                and lift your hips as high as possible. To release, let go of
                your foot, lower your hips to the floor, and gently release the
                Lotus leg. Come into Adho Mukha Svanasana (Downward-Facing Dog
                Pose) before doing the other side.
              </h3>
            </div>
            <div className="main_left">
              <img
                src={kasyapasana}
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

export default Advancedyoga3;
