import React from "react";
import { Link } from "react-router-dom";
import Bharadvajasana from "../bhadra.png";
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

function Advancedyoga2() {
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
                src={Bharadvajasana}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                alt="image"
              ></img>
            </div>
            <div className="main_right">
              <h1>Bharadvajasana</h1>
              <h2>STEPS</h2>
              <h3 style={{ fontSize: "20px" }}>
                <br></br>1. Sit on the mat with legs stretched straight in front
                . Place the palms on the floor on either side of hips and the
                fingers indicating the feet. Keep your back erect, this is
                called Dandasana. ( Step 1 is same for both the variation )
                <br></br>2. Bend the left leg at the knee , clasp the left foot
                with both hands and place it over the root of the right thigh
                near the pelvis and the left heel must be close to the navel.
                The left leg will be in the Ardha padmasana or half lotus pose.
                <br></br>3. Bend the right foot at the knee and bring the right
                foot back and place the right heel alongside the right hip. The
                inner side of the right calf will touch the outer side of the
                right thigh. Keep both the knees on the floor close to each
                other.
                <br></br>4. Exhale, turn the torso towards left side and bring
                the left arm behind the waist and extend the arm to hold the
                left foot firmly.
                <br></br>5. Straighten the right arm, place the right hand on
                the outer side of the left thigh near the left knee. Insert the
                right hand underneath the left knee, the palms must touch the
                floor and fingers directing towards right.
                <br></br>6. Now hold the left foot firmly and rotate the torso
                to the left as much as possible to give a deeper twist to your
                spine. Turn the neck and look back in same direction over the
                shoulder.
                <br></br>7. Stay in this pose from half a minute to one minute
                with deep breathing.
                <br></br>8. Now repeat the same sequence on other side.
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

export default Advancedyoga2;
