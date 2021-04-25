import React from 'react'
import './Sidedrawer.css';
const Sidedrawer = props => {
    let drawerClasses='side-drawernav';
    if(props.show)
    {
        drawerClasses='side-drawernav open';
    }
    return (
        
           <nav className={drawerClasses}>
               <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
               </ul>
               </nav> 
    )
    };

export default Sidedrawer
