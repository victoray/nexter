import React from "react";
import logo from "../statics/img/logo.png";
import forbes from "../statics/img/logo-forbes.png";
import techcrunch from "../statics/img/logo-techcrunch.png";
import bbc from "../statics/img/logo-bbc.png";
import bi from "../statics/img/logo-bi.png";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="" className="header__logo"/>
            <h3 className="heading-3">Your own home</h3>
            <h1 className="heading-1">the ultimate personal freedom</h1>
            <button className="btn header__btn">view our properties</button>
            <div className="header__seenon-text">As seen on</div>
            <div className="header__seenon-logos">
                <img src={forbes} alt=""/>
                <img src={techcrunch} alt=""/>
                <img src={bbc} alt=""/>
                <img src={bi} alt=""/>
            </div>
        </header>
    );
};

export default Header;