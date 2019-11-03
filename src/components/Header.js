import React from "react";
import {ReactComponent as Logo} from '../img/header-icons/logo.svg';
import {ReactComponent as Hamburger} from '../img/header-icons/menu.svg';

const Header = (props) => {
    return (
        <header className="header-main">

            <div className="header-main__left-section">
                <Hamburger/>
                <Logo/>
            </div>

            <h3 className="header-main__today-text">Today</h3>


            <div className="mode-toggle__container">
                <span className="mode-toggle__text">Light</span>

                <label className="toggle-button">
                    <input type="checkbox" className="toggle-button__input"/>
                    <span className="toggle-button__bg"></span>
                    <span className="toggle-button__circle"></span>
                </label>


                <span className="mode-toggle__text">Dark</span>
            </div>

        </header>
    );
};

export default Header;
