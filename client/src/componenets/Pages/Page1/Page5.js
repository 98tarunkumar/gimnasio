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
function Page5() {
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
            <img className="icon"  alt="ime" src={home}></img>
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
              Leg Workout
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }} className="workoutvideo">
              {push === false &&
              wide === false &&
              incline === false &&
              decline === false &&
              diamond === false ? (
                <div className="chest_info">
                  Leg workouts engage the major muscle groups of your body,
                  which helps to improve overall athletic performance and
                  support healthy movement patterns in your daily life. A strong
                  lower body will also help to prevent injury and manage chronic
                  conditions such as arthritis, heart disease, and diabetes
                </div>
              ) : null}

              {push === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=SW_C1A-rejs"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/SW_C1A-rejs/mqdefault_6s.webp?du=3000&sqp=CMmqkIQG&rs=AOn4CLCz1hxB6SOKUmJotaO2u-fV01PRMg"
                />
              ) : null}
              {wide === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=VfBOBhwXbro"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/VfBOBhwXbro/mqdefault_6s.webp?du=3000&sqp=CKagkIQG&rs=AOn4CLCVEzXD9yXSzgH5V5z6EBkkUWopNA"
                />
              ) : null}
              {incline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=YyvSfVjQeL0"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/YyvSfVjQeL0/mqdefault_6s.webp?du=3000&sqp=CMqkkIQG&rs=AOn4CLDLHTO7TKH4fQl5pT10i2fFZgyogw"
                />
              ) : null}
              {decline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=D7KaRcUTQeE"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/D7KaRcUTQeE/mqdefault_6s.webp?du=3000&sqp=COyrkIQG&rs=AOn4CLALysSMNofPvThwK1gxHKly67Hblw"
                />
              ) : null}
              {diamond === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=uVu9vToACiQ"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/uVu9vToACiQ/mqdefault_6s.webp?du=3000&sqp=CIihkIQG&rs=AOn4CLCamyNmC83_TxEg90s7eLpHZ1ctSA"
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
              <h4 className="rtext">Barbell Back Squat</h4>
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
              <h4 className="rtext">Front Squat </h4>
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

              <h4 className="rtext">Leg Extension</h4>
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
              <h4 className="rtext">Dumbell Lunges</h4>
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
              <h4 className="rtext">Calf Raises</h4>
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

export default Page5;
