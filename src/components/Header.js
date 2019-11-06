import React from "react";
import {ReactComponent as Logo} from '../img/header-icons/logo.svg';
import {ReactComponent as Hamburger} from '../img/header-icons/menu.svg';
import Toggle from './Toggle';

const Header = ({theme, toggleTheme}) => {
    return (
        <header className="header-main">

            <div className="header-main__left-section">
                <Hamburger/>
                <Logo/>
            </div>

            <h3 className="header-main__today-text">Today</h3>


            <div className="mode-toggle__container">
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
            </div>

        </header>
    );
};

export default Header;
