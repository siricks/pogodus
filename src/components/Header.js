import React from "react";

const Header = (props) => {
    return (
        <header className="main__header">

        <div className="left__section">
          <svg className="hamburger__icon" id="Menu_Burger_Icon">
              <rect id="Rectangle_9" width="49.9" height="4" className="hamburger__icon__fill" data-name="Rectangle 9"
                    rx="2"
                    transform="translate(31.5 58)"/>
              <rect id="Rectangle_10" width="49.9" height="4" className="hamburger__icon__fill" data-name="Rectangle 10"
                    rx="2"
                    transform="translate(31.5 44)"/>
              <rect id="Rectangle_11" width="49.9" height="4" className="hamburger__icon__fill" data-name="Rectangle 11"
                    rx="2"
                    transform="translate(31.5 30)"/>
          </svg>

            <svg className="logo__icon">
                <path fill="#00ff9b" d="M150.3 65V22.2L193 65z" data-name="Path 1"/>
                <path fill="#003eff" d="M193.1 65h-42.8L193 22.2z" data-name="Path 2"/>
                <text className="logo__text" fill="#432c85" fontFamily="SegoeUI-Semibold,Segoe UI" fontSize="30"
                      fontWeight="600"
                      letterSpacing=".1em" transform="translate(237 56)">
                    <tspan x="0" y="0">Minimis</tspan>
                </text>
            </svg>

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
