import React, { useState } from "react";
import "./style.css";
import Chest from "./png/body.png";
import Back from "./png/muscle.png";
import Shoulder from "./png/barbell.png";
import Arm from "./png/workout.png";
import Leg from "./png/leg.png";
import home from "./png/homee.png";
import youtube from "./png/youtube.png";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Bot from "../../Bot/Bot";
import Stopwatch from "../../Stopwatch/Stopwatch"
import cancel from './png/log-out.png'
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
function Page3() {
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
            <img className="icon"  alt="ima" src={home}></img>
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
            <img className="icon" alt="ime"  src={Back}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page3">
            <img className="icon" alt="ime"  src={Arm}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page4">
            <img className="icon"  alt="ime" src={Shoulder}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page5">
            <img className="icon" alt="ime"  src={Leg}></img>
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
              Arm Workout
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }} className="workoutvideo">
              {push === false &&
              wide === false &&
              incline === false &&
              decline === false &&
              diamond === false ? (
                <div className="chest_info">
                  Arm exercises are one of the most flexible types of training
                  as you can tone your arms with little or no equipment whether
                  you're at home, at the gym or even on holiday. Toned arms can
                  also boost your confidence and encourage your to wear tops
                  that show off your muscle definition.
                </div>
              ) : null}

              {push === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ykJmrZ5v0Oo"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/ykJmrZ5v0Oo/mqdefault_6s.webp?du=3000&sqp=CKCjkIQG&rs=AOn4CLDExZAmwCVmjvCqWj4hx6s3W4OYyg"
                />
              ) : null}
              {wide === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=QZEqB6wUPxQ"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/QZEqB6wUPxQ/mqdefault_6s.webp?du=3000&sqp=CNCpkIQG&rs=AOn4CLDJ6jNIi6XNNo3Eb9J_KmkU6hs_1g"
                />
              ) : null}
              {incline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=YbX7Wd8jQ-Q"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/YbX7Wd8jQ-Q/mqdefault_6s.webp?du=3000&sqp=CKiQkIQG&rs=AOn4CLArlRl4H6-oVtP40ogpk5v_m1tjIA"
                />
              ) : null}
              {decline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=-Vyt2QdsR7E0"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/-Vyt2QdsR7E/mqdefault_6s.webp?du=3000&sqp=CM-WkIQG&rs=AOn4CLDcDpFhNzggWGSYSURQSNY5fkKrfw"
                />
              ) : null}
              {diamond === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=zC3nLlEvin4"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/zC3nLlEvin4/mqdefault_6s.webp?du=3000&sqp=CIrxj4QG&rs=AOn4CLAMmgxvvi1r56H0YByeq9c9DKUUpw"
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
              <h4 className="rtext">Bicep Curls</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt="ime" 
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
              <h4 className="rtext">Barbell Curl </h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt="ime" 
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

              <h4 className="rtext">Tricep Extension</h4>
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
              <h4 className="rtext">Tricep Overhead</h4>
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
              <h4 className="rtext">Hammer Curl</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt="ime" 
                src={youtube}
                className="youtube"
                onClick={() => setDiamond(!diamond)}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="bot">
          <Bot />
        </div>
      </div>
      <div className="workoutright">
        <div className="cal"></div>
        <div className="task"></div>
        <div className="extra"></div>
      </div>
      <Stopwatch/>
    </motion.div>
  );
}

export default Page3;
