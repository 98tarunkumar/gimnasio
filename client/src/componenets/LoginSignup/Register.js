import React, { Component } from 'react'
import loginImg from './image.svg'
import {Link} from "react-router-dom"
import './Style.css'
 export default class Register extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>

                </div>
                <div className="submit_footer">
                    <Link to="/">
                    <button type="button" className="btn">
                        Register
                    </button></Link>
                </div>
            </div>
        )
    }
}

