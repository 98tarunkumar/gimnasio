import React, { Component } from 'react'
import './style.css'
import benchPress from './benchpress.svg'
import play from './play.svg'
import plus from './plus.svg'
export class Card1 extends Component {
    render() {
        return (
            <div className="comp">
               <div className="carder">
                    <div className="cardl">
                       <div className="cardlt">
                            <div className="cardhead">Chest Workout</div>
                            <div className="cardtitle"></div>
                       </div>
                       <div className="cardlb">
                            <img src={plus} className="plus"></img>
                            <img src={play} className="play"></img>
                       </div>
                    </div>
                    <div className="cardr">
                        <div className="cardimage">
                            <img src={benchPress} className="bench"></img>
                        </div>
                        <div className="cardrtext">
                            <span className="crh">
                                Difficulty level:Medium
                            </span>
                            <div className="cardrrtxst">
                                <span className="crl">
                                    Set:3
                                </span>
                                <span className="crr">
                                    Rep:12
                                </span>

                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Card1
