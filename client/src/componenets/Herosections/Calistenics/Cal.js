import React from "react";
import "./styles.css";
import back from "./bg.jpg";
import beg from "./begin.jpg";
import int from "./intermediate.jpg";
import adv from "./advance.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Cal() {
  return (
    <div className="cal_main">
      <img src={back} alt='imt' className="cal_back" />
      <motion.div className="cal_head" whileHover={{ scale: 0.9 }}>
        Calisthenics
      </motion.div>
      <div className="cal_body">
        <Link to="/calbegin1" className="yogalinkgym">
          <motion.div
            className="cal_card"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.95 }}
          >
            <img className="cal_img"  alt="imae"  src={beg} />
            <div className="cal_desc">Begineer</div>
            <Link to="/calbegin1" className="yogalinkgym">
              <div className="cal_btn">Explore</div>
            </Link>
          </motion.div>
        </Link>
        <Link to="/calinter1" className="yogalinkgym">
          <motion.div
            className="cal_card"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.95 }}
          >
            <img className="cal_img"  alt="imae"  src={int} />
            <div className="cal_desc">Intermediate</div>
            <Link to="/calinter1" className="yogalinkgym">
              <div className="cal_btn">Explore</div>
            </Link>
          </motion.div>
        </Link>
        <Link to="/advancecal1" className="yogalinkgym">
          <motion.div
            className="cal_card"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.95 }}
          >
            <img className="cal_img"  alt="imae"  src={adv} />
            <div className="cal_desc">Advance</div>
            <Link to="/advancecal1" className="yogalinkgym">
              <div className="cal_btn">Explore</div>
            </Link>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Cal;
