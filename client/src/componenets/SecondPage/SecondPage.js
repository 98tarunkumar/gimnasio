import React, { Component } from "react";
import "./SecondPage.css";
import fit from "./fitness.png";
import lotus from "./lotus.png";
export class SecondPage extends Component {
  render() {
    return (
      // <>
      //   <div className="pot">
      // <div className="card">
      //   <div className="imaf">
      //     <img src={fit}></img>
      //   </div>
      //   <div className="contentimf">
      //     <h2 className="str">Strength</h2>
      //     <h3 className="buy">build</h3>
      //   </div>
      // </div>
      //     <div className="card1">
      //       <div className="imaf1">
      //         <img src={lotus}></img>
      //       </div>
      //       <div className="contentimf1">
      //         <h2 className="str1">YOGA</h2>
      //         <h3 className="buy1"> rejuvenate</h3>
      //       </div>
      //     </div>
      //   </div>
      // </>
      <>
        <div className="box">
          <div className="lbox">
            <div className="cardB">
              <div className="card">
                <div className="imaf">
                  <img src={fit}></img>
                </div>
                <div className="contentimf">
                  <h2 className="str">Strength</h2>
                  <h3 className="buy">build</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="rbox"></div>
        </div>
      </>
    );
  }
}

export default SecondPage;
