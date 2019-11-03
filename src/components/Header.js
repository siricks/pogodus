import React from "react";
import { ReactComponent as Logo }from '../img/header-icons/logo.svg';
import { ReactComponent as Hamburger }from '../img/header-icons/menu.svg';

const Header = (props) => {
    return (
        <header className="main__header">

        <div className="left__section">
            <Hamburger/>
            <Logo/>
        </div>

        <h3 className="date__text">Today</h3>


        <div className="mode-toggle__container">
            <span className="mode-toggle__text">Light</span>

            <label className="toggle-button__container">
                <input type="checkbox" className="mode-toggle__input" />
                  <span className="mode-toggle__bg"></span>
                  <span className="mode-toggle__circle"></span>
            </label>


            <span className="mode-toggle__text">Dark</span>
        </div>

    </header>
    );
};

export default Header;
