import React, { useState } from "react";
import "./style.css";
import Chest from "./png/body.png";
import Back from "./png/muscle.png";
import Shoulder from "./png/barbell.png";
import Arm from "./png/workout.png";
import Leg from "./png/leg.png";
import home from "./png/homee.png";
import youtube from "./png/youtube.png";
import Push from "./png/push-up.png";
import Wide from "./png/wide.png";
import Incline from "./png/images.png";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
function Page4() {
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
            <img className="icon" src={home}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="/page1">
            <img className="icon" src={Chest}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="/page2">
            <img className="icon" src={Back}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page3">
            <img className="icon" src={Arm}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page4">
            <img className="icon" src={Shoulder}></img>
          </Link>
        </motion.div>
        <motion.div
          className="chesticon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
        >
          <Link to="./page5">
            <img className="icon" src={Leg}></img>
          </Link>
        </motion.div>
      </div>
      <div className="workoutmain">
        <div className="maincontent">
          <div className="mainleft">
            <motion.div whileHover={{ scale: 1.1 }} className="workouttext">
              Shoulder Workout
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }} className="workoutvideo">
              {push === false &&
              wide === false &&
              incline === false &&
              decline === false &&
              diamond === false ? (
                <div className="chest_info">
                  Wide shoulders are desirable because they can make your frame
                  look more proportional by widening the appearance of the upper
                  body. They create an inverted triangle shape in the upper body
                  that’s wider at the top and narrower at the waist. Wide
                  shoulders are more square than round, and sometimes have a
                  bony protrusion. They’re often associated with athleticism.
                </div>
              ) : null}

              {push === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=2yjwXTZQDDI"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/2yjwXTZQDDI/mqdefault_6s.webp?du=3000&sqp=CJynkIQG&rs=AOn4CLBEug5NGBsybYw7JPHXUG7LKp7Owg"
                />
              ) : null}
              {wide === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=3ml7BH7mNwQ"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/3ml7BH7mNwQ/mqdefault_6s.webp?du=3000&sqp=COyIkIQG&rs=AOn4CLCC3BfBMzrC1CNZugls8vYcn361qA"
                />
              ) : null}
              {incline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=-t7fuZ0KhDA"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/-t7fuZ0KhDA/mqdefault_6s.webp?du=3000&sqp=COCzkIQG&rs=AOn4CLBtPaIDw90GDQF4Rvtc5bTT35Co8g"
                />
              ) : null}
              {decline === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=rQhdsa5QdVU"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/rQhdsa5QdVU/mqdefault_6s.webp?du=3000&sqp=CLmokIQG&rs=AOn4CLAU9_X_JdgfnEnAGORlhRRpKiiQBQ"
                />
              ) : null}
              {diamond === true ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=3VcKaXpzqRo"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "20px" }}
                  // light="https://i.ytimg.com/an_webp/3VcKaXpzqRo/mqdefault_6s.webp?du=3000&sqp=CIiIkIQG&rs=AOn4CLAQWU71bVOhw0iWVPF6MdKY2rQkPA"
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
              <h4 className="rtext">Overhead Press</h4>
              {/* <h2 className="times">x10</h2> */}
              <img
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
              <h4 className="rtext">Arnold Press</h4>
              {/* <h2 className="times">x10</h2> */}
              <img
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

              <h4 className="rtext">Front Raise</h4>
              {/* <h2 className="times">x10</h2> */}
              <img
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
              <h4 className="rtext">Dumbell Fly</h4>
              {/* <h2 className="times">x10</h2> */}
              <img
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
              <h4 className="rtext">Lateral Raises</h4>
              {/* <h2 className="times">x10</h2> */}
              <img
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

export default Page4;
