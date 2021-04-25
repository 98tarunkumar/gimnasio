import React from 'react'
import './Yoga.css'

import Cards from './Cards'
function Yoga() {
    return (
        <div className="yogamain">
            {/* <div ></div> */}
            {/* <img className="yogabg" src={yoga} width="100%" height="100%"/> */}
            <div className="yogaupper">
            Balance your body mind and soul
            </div>
            {/* <div className="yogaco"><Corousal/></div> */}
            <div className="yogacategory">
            {/* <div className="yogacategoryupper">
            Choose your level
            
            </div> */}
            {/* <div className="yogadesc">
            While yoga isn’t about becoming more flexible, having a good understanding of 
            what flexibility is,
             and why it’s important, can take your practice to the next level.</div> */}
            <div className="cateyo"><Cards/></div></div>
             {/* <div className="yogaupper">
            <div className="titleyoga"><center>Balance your body mind and soul</center></div>
            
            <div className="yogacategory"></div></div> */}
        </div> 
    )
}

export default Yoga;
