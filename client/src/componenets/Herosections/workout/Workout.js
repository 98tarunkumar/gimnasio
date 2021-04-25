import React from "react";
import "./styles.css";
import back from "../Images/back.jpg";
import { Link } from "react-router-dom";
import Bot from "../../Bot/Bot";
import Stopwatch from "../../Stopwatch/Stopwatch";
function Workout() {
  return (
    <div className="workout_bg">
      <Link to="/" className="yogalinkgym">
        <div className="workout_logo">Gimnasio</div>
      </Link>
      <div className="workout_left">
        <span className="workkout_tt">
          <div className="workout_text">WORKOUT</div>
          <div className="workout_desc">
            A Healthy habit that posses power to change the soul..
          </div>
        </span>
        <Link to="/page1" className="yogalinkgym">
          <div className="workout_btn">Explore..</div>
        </Link>
      </div>
      <div className="workout_right">
        <img
          src={back}
          style={{ objectFit: "cover", height: "700px", marginTop: "-40px" }}
        ></img>
      </div>
      <Stopwatch />
      <div className="bot">
        <Bot />
      </div>
    </div>
  );
}

export default Workout;
