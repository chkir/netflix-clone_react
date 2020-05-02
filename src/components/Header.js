import React, { Component } from 'react';
import logo from "../svg/logo.svg";
import { NavLink } from "react-router-dom";
import "../css/Header.css"


class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                    <img src={logo} alt="Netflix logo goes here"/>
                    <NavLink to="/" className="signIn-btn">Sign In</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;

