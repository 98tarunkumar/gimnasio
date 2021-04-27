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
import cancel from './png/log-out.png'
import Bot from "../../Bot/Bot";
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
function Page2() {
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
            <img className="icon"  alt='imt' src={Chest}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="/page2">
            <img className="icon"  alt='imt' src={Back}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page3">
            <img className="icon" alt='imt'  src={Arm}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page4">
            <img className="icon"  alt='imt' src={Shoulder}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page5">
            <img className="icon"  alt='imt' src={Leg}></img>
          </Link>
        </motion.div>
        <motion.div
            className="chesticon"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
          >
            <Link to="/">
              <img src={cancel} alt='imt' width="80px" height="80px"></img>
            </Link>
          </motion.div>
      </div>
      <div className="workoutmain">
        <div className="maincontent">
          <div className="mainleft">
            <motion.div whileHover={{ scale: 1.1 }} className="workouttext">
              Back Workout
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }} className="workoutvideo">
              {push === false &&
              wide === false &&
              incline === false &&
              decline === false &&
              diamond === false ? (
                <div className="chest_info">
                  Working out your back stretches and strengthens the muscles
                  that support its structure. The back muscles bolster the
                  vertebrae disks, ligaments and facet joints. If they are weak,
                  your spine is unsupported and may become vulnerable to pain
                  and dysfunction. 
                </div>
              ) : null}

              {push === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=vT2GjY_Umpw"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/vT2GjY_Umpw/mqdefault_6s.webp?du=3000&sqp=CNydkIQG&rs=AOn4CLAweG0leGL8xiFdQXvVkamGHzl57Q"
                />
              ) : null}
              {wide === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=XeErfmGSwfE"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/XeErfmGSwfE/mqdefault_6s.webp?du=3000&sqp=CNeSkIQG&rs=AOn4CLBigt-HHXDdydYN03DWSZVqGBCGpQ"
                />
              ) : null}
              {incline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=GZbfZ033f74"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/GZbfZ033f74/mqdefault_6s.webp?du=3000&sqp=CLaEkIQG&rs=AOn4CLAf38edN8CMyRQVAuq0TzlB2Z73Vw"
                />
              ) : null}
              {decline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=X5n55mMqSUs"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/X5n55mMqSUs/mqdefault_6s.webp?du=3000&sqp=CKr5j4QG&rs=AOn4CLBZUHc9cRG-3EDKZJBfIcFcfBXY3w"
                />
              ) : null}
              {diamond === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=r4MzxtBKyNE"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/r4MzxtBKyNE/mqdefault_6s.webp?du=3000&sqp=CMiPkIQG&rs=AOn4CLAAUk2kxyFkL2Dxhimjj0Davr0bVQ"
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
              <h4 className="rtext">Bent-Over Barbell</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt='imt' 
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
              <h4 className="rtext">Pullup/Chinup</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt='imt' 
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

              <h4 className="rtext">Seated Cable Row</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt='imt' 
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
              <h4 className="rtext">Lat PullDown</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt='imt' 
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
              <h4 className="rtext">Deadlift</h4>
              {/* <h2 className="times">x10</h2> */}
              <img alt='imt' 
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

export default Page2;
