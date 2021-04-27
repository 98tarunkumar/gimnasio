import React, { useState } from "react";
import "./style.css";
import Chest from "./png/body.png";
import Back from "./png/muscle.png";
import Shoulder from "./png/barbell.png";
import Arm from "./png/workout.png";
import Leg from "./png/leg.png";
import cancel from './png/log-out.png'
// import cancel from '../../version2/Yoga/Beginer/Images/cancel.png';
import home from "./png/homee.png";
import youtube from "./png/youtube.png";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Bot from "../../Bot/Bot"
import Stopwatch from "../../Stopwatch/Stopwatch"
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
function Page1() {
  const [push, setPush] = useState(false);
  const [wide, setWide] = useState(false);
  const [incline, setIncline] = useState(false);
  const [decline, setDecline] = useState(false);
  const [diamond, setDiamond] = useState(false);

  return (
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
          <Link to="./workout">
            <img className="icon" alt="ime"  src={home}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="/page1">
            <img className="icon"  alt="ime" src={Chest}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="/page2">
            <img className="icon"  alt="ime" src={Back}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page3">
          <img className="icon"  alt="ime" src={Arm}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page4">
          <img className="icon" alt="ime"  src={Shoulder}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page5">
          <img className="icon"  alt="ime" src={Leg}></img>
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
        <div className="maincontent">
          <div className="mainleft">
            <motion.div whileHover={{ scale: 1.1 }} className="workouttext">
              Chest Workout
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }} className="workoutvideo">
              {push === false &&
              wide === false &&
              incline === false &&
              decline === false &&
              diamond === false ? (
                <div className="chest_info">
                  The chest press targets your pectorals, deltoids, and triceps,
                  building muscle tissue and strength. It also works your
                  serratus anterior and biceps. This upper body strength and
                  power help with daily activities such as pushing strollers,
                  shopping carts, and heavy doors.
                </div>
              ) : null}

              {push === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=AhdtowFDKT0"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/vi/BkS1-El_WlE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5ptgI_C9R6SWTsPaaTexuhIC4Iw"
                />
              ) : null}
              {wide === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=rr6eFNNDQdU"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/rr6eFNNDQdU/mqdefault_6s.webp?du=3000&sqp=CJGjkIQG&rs=AOn4CLBIIfGUP97zqcaarv9-jV2vC2Oojg"
                />
              ) : null}
              {incline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Z0bRiVhnO8Q"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/Z0bRiVhnO8Q/mqdefault_6s.webp?du=3000&sqp=CJCLkIQG&rs=AOn4CLDI9u7U_3S_ka2k2eO8N9u10KPXAw"
                />
              ) : null}
              {decline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=SKPab2YC8BE"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/SKPab2YC8BE/mqdefault_6s.webp?du=3000&sqp=CK2OkIQG&rs=AOn4CLDlr6aHiksm3Z2wOj-03iDwFU8iUQ"
                />
              ) : null}
              {diamond === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=J0DnG1_S92I"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/J0DnG1_S92I/mqdefault_6s.webp?du=3000&sqp=CJ7_j4QG&rs=AOn4CLDcUzC4w9DImFpxmttFeAVdRks1ng"
                />
              ) : null}
            </motion.div>
          </div>
          <motion.div
            className="mainright"
            whileHover={{ scale: 0.97, transition: 1 }}
          >
            <motion.div
              className={!push ? "rlist" : "rrlist"}
              whileHover={{ scale: 1.05 }}
            >
              {/* <img src={Push} className="rlistimg"></img> */}
              <h4 className="rtext">Push up</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt="ima" 
                src={youtube}
                className="youtube"
                onClick={() => setPush(!push)}
              />
            </motion.div>
            <motion.div
              className={!wide ? "rlist" : "rrlist"}
              whileHover={{ scale: 1.05 }}
            >
              {/* <img src={Wide} className="rlistimg"></img> */}
              <h4 className="rtext">Wide Pushup </h4>
              {/* <h2 className="times">x10</h2> */}
              <img  alt="ime" 
                src={youtube}
                className="youtube"
                onClick={() => setWide(!wide)}
              />
            </motion.div>
            <motion.div
              className={!incline ? "rlist" : "rrlist"}
              whileHover={{ scale: 1.05 }}
            >
              {/* <img src={Incline} className="rlistimg"></img> */}

              <h4 className="rtext">Incline Pushup</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt="ime" 
                src={youtube}
                className="youtube"
                onClick={() => setIncline(!incline)}
              />
            </motion.div>
            <motion.div
              className={!decline ? "rlist" : "rrlist"}
              whileHover={{ scale: 1.05 }}
            >
              {/* <img src={Incline} className="rlistimg"></img> */}
              <h4 className="rtext">Decline Pushup</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt="ime" 
                src={youtube}
                className="youtube"
                onClick={() => setDecline(!decline)}
              />
            </motion.div>
            <motion.div
              className={!diamond ? "rlist" : "rrlist"}
              whileHover={{ scale: 1.05 }}
            >
              {/* <img src={Incline} className="rlistimg"></img> */}
              <h4 className="rtext">Diamond Pushup</h4>
              {/* <h2 className="times">x10</h2> */}
              <img  alt="ime" 
                src={youtube}
                className="youtube"
                onClick={() => setDiamond(!diamond)}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="bot">
          <Bot/>
        </div>
      </div>
      <div className="workoutright">
        <div className="cal"></div>
        <div className="task"></div>
        <div className="extra"></div>
        
      </div>
      <Stopwatch />
    </motion.div>
  );
}

export default Page1;
