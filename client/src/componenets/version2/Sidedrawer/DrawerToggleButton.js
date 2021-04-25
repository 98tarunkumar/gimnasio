import React from 'react';
import './DrawerToggleButton.css';
const DrawerToggleButton = props=>(
    <button className="togglebutton" onClick={props.click}>
        <div className="togglebuttonline"></div>
        <div className="togglebuttonline"></div>
        <div className="togglebuttonline"></div>
    </button>
);

export default DrawerToggleButton;