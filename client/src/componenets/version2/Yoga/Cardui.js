import React from 'react'
import {Link} from "react-router-dom"

import './Cardui.css'
import './Cards.css'
const Cardui=props=> {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="img" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}

                </p>
                <Link to={props.explore} className="btn btn-outline-success">Explore</Link>
            </div>
        </div>
    );
}

export default Cardui
