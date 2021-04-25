import React, { useState } from "react";
import "./Corousel.css";
import { CorouselData } from "./CorouselData";

// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// import Carousel from "react-bootstrap/Carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Corousel = () => {
  return (
    <div>
      {/* <AwesomeSlider className="slider">
        <div className="slider1">Class 1</div>
        <div className="slider2">Class 2</div>
        <div className="slider3">Class 3</div>
        <div className="slider2">Class 4</div>
        <div className="slider3">Class 5</div>
      </AwesomeSlider> */}

      <Carousel className="slider">
        <div>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Corousel;
