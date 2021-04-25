import React from 'react'
import "./Navbar.css"
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";
import logo3 from '../Navbar/logo2.PNG';
// import wall from './images/wall.jfif'
const Navbar = props => (
    <header className="navbargym">
                <nav className="navigym">
                    <div className="togglebuttonnav">
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                    </div>
                    <div className="navlogogym"><a href="/">
                    
                    <img  className="loggym" src={logo3} height="100%" weight="100%" alt="Logo"/>
              
                        </a></div>
                    <div className="spacergym"></div>
                    <div className="navitemsgym">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        
    
)

export default Navbar;
